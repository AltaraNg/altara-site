<template>
  <main>
    <div class="w-full flex flex-col items-center p-8" id="calculator"  v-if="results">
      <p class="text-brand font-black lg:text-4xl pb-1">Product Calculator</p>

      <div class="flex flex-wrap items-center w-full justify-between">
        <loader v-if="loading" />
        <div
          v-for="(product, index) in results"
          :key="index"
          v-else
          class="mb-5 mx-3 width"
        >
          <ProductsVue
            :name="product.name"
            :downpayment="formatAmount(product.actualDownpayment)"
            :repayment="formatAmount(product.repayment / 6)"
            :bi-monthly_repayment="formatAmount(product.repayment / 6 / 2)"
            :image="product.image"
          />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import phone from "../../assets/images/phone2.png";
import television from "../../assets/images/television.png";
import washing_machine from "../../assets/images/washing_machine.png";
import fridge from "../../assets/images/fridge.png";
import cash from "../../assets/images/money2.png";
import generator from "../../assets/images/generator.png";
import cooking_oil from "../../assets/images/cooking_oil.png";
import gas_cooker from "../../assets/images/gas_cooker.png";
import blender_kettle from "../../assets/images/blender_kettle.png";
import cooking_oil_rice from "../../assets/images/cooking_oil&&rice.png";
import ProductsVue from "../general/products.vue";
import "vue3-carousel/dist/carousel.css";
import "../../assets/css/carousel.css";
import { Apiservice } from "../../services/apiService";
import { calculate } from "../../utilities/calculator";
import loader from "../../assets/svgs/loader3.vue";
export default {
  components: {
    ProductsVue,
    loader,
  },
  data() {
    return {
      apiProduct: [],
      allProducts: [],
      data: {},
      baseURL: process.env.VUE_APP_URL,
      apiUrls: {
        repaymentDuration: `${process.env.VUE_APP_URL}/api/repayment_duration`,
        repaymentCycles: `${process.env.VUE_APP_URL}/api/repayment_cycle`,
        downPaymentRates: `${process.env.VUE_APP_URL}/api/down_payment_rate`,
        businessTypes: `${process.env.VUE_APP_URL}/api/business_type`,
        getCalculation: `${process.env.VUE_APP_URL}/api/price_calculator`,
        products: `${process.env.VUE_APP_URL}/api/website-product`,
      },
      products: [
        {
          name: "Infinix",
          downpayment: "150,000",
          repayment: "40,000",
          category: "phone",
          image: phone,
        },
        {
          name: "Television",
          downpayment: "150,000",
          repayment: "40,000",
          category: "television",
          image: television,
        },
        {
          name: "Washing Machine",
          downpayment: "150,000",
          repayment: "40,000",
          category: "washing_machine",
          image: washing_machine,
        },

        {
          name: "Fridge",
          downpayment: "150,000",
          repayment: "40,000",
          category: "fridge",
          image: fridge,
        },
        {
          name: "Generator",
          downpayment: "150,000",
          repayment: "40,000",
          category: "generator",
          image: generator,
        },
        {
          name: "Infinix",
          downpayment: "150,000",
          repayment: "40,000",
          category: "phone",
          image: phone,
        },
        {
          name: "Television",
          downpayment: "150,000",
          repayment: "40,000",
          category: "television",
          image: television,
        },
      ],
      images: {
        11: phone,
        52: cash,
        53: blender_kettle,
        47: cooking_oil_rice,
        54: cooking_oil,
        57: gas_cooker,
        3: washing_machine,
      },
      breakpoints: {
        700: {
          itemsToShow: 1,
        },
        1024: {
          itemsToShow: 4,
        },
      },
      currentSlide: 0,
      results: [],
      loading: null,
    };
  },
  methods: {
    next() {
      this.$refs.carousel.next();
    },
    prev() {
      this.$refs.carousel.prev();
    },
    async getProducts() {
      
      const api = new Apiservice();
      await api
        .get(this.apiUrls.products)
        .then((res) => {
          this.allProducts = JSON.parse(res?.data).data.data;
          console.log(this.allProducts, 'this.allProducts');
        })
        .catch((error) => {
          if (error) {
            console.log(error);
            throw error;
          }
        });
    },
    async getBusinessTypes() {
      const api = new Apiservice();
      await api
        .get(this.apiUrls.businessTypes)
        .then((res) => {
          this.businessTypes = JSON.parse(res?.data).data.data;
          this.data.business_type_id = this.businessTypes.find(
            (item) => item.name == "Altara Pay Products"
          );
        })
        .catch((error) => {
          if (error) {
            throw error;
          }
        });
    },
    async getRepaymentDuration() {
      const api = new Apiservice();
      await api
        .get(this.apiUrls.repaymentDuration)
        .then((res) => {
          this.repaymentDuration = JSON.parse(res?.data).data.data;
          this.data.repayment_duration_id = this.repaymentDuration.find(
            (item) => item.name == "six_months"
          );
        })
        .catch((error) => {
          if (error) {
            throw error;
          }
        });
    },
    async getCalculation() {
      const api = new Apiservice();
      await api
        .get(this.apiUrls.getCalculation)
        .then((res) => {
          this.calculation = JSON.parse(res?.data).data;
        })
        .catch((error) => {
          if (error) {
            throw error;
          }
        });
    },
    async getDownPaymentRates() {
      const api = new Apiservice();
      await api
        .get(this.apiUrls.downPaymentRates)
        .then((res) => {
          this.downPaymentRates = JSON.parse(res?.data).data.data;
          this.data.payment_type_id = this.downPaymentRates.find((item) => {
            return item.percent == 20 && item.plus == 0;
          });
        })
        .catch((error) => {
          if (error) {
            throw error;
          }
        });
    },
    async getCalc() {
      try {
        const params = this.calculation.find((x) => {
          return (
            x.business_type_id === this.data.business_type_id?.id &&
            x.down_payment_rate_id === this.data.payment_type_id.id &&
            x.repayment_duration_id === this.data.repayment_duration_id.id
          );
        });
        
        this.allProducts.forEach((product) => {
          const { total, actualDownpayment, repayment, biMonthlyRepayment } =
            calculate(product.price, this.data, params, 0);
          this.results.push({
            name: product.name,
            image:`${process.env.VUE_APP_AWS_URL}/`+product.image_url,
            total,
            actualDownpayment,
            repayment,
            product_category_id: product.product_category_id,
            biMonthlyRepayment,
          });
        });
      } catch (e) {
        this.disabled = true;
        window.localStorage.removeItem("data");
        this.data.actualDownpayment = "Not Available";
        this.data.repayment = "Not Available";
        this.data.biMonthlyRepayent = "Not Available";
        this.data.total = 0;
      }
    },
    formatAmount(amount) {
      return `₦${amount
        ?.toFixed(2)
        ?.toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    },
  },
  async mounted() {
    this.loading = true;
    await this.getProducts();
    await this.getDownPaymentRates();
    await this.getBusinessTypes();
    await this.getRepaymentDuration();
    await this.getCalculation();
    await this.getCalc();
    this.loading=false
  },
};
</script>
<style scoped>
.background {
  background: linear-gradient(
    251.22deg,
    rgba(236, 248, 249, 0.22) -7.88%,
    rgba(7, 74, 116, 0.5) 110.26%
  );
}
.carousel__slide {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
@media only screen and (min-width: 768px) {
  .width {
    width: 30%;
  }
}
</style>
