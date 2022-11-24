<template>
  <main>
    <div class="w-full flex flex-col items-center p-8" id="calculator"  v-if="results.length>0">
      <p class="text-brand
            text-center
            md:text-3xl
            text-2xl
            font-black
            md:leading-14
            leading-12 uppercase w-full pb-8 ">Product Calculator</p>

      <div class="flex flex-wrap items-center w-full justify-between">
        <loader v-if="loading" />
        <div
          v-for="(product, index) in results"
          :key="index"
          v-else
          class="mb-5 mx-3 lg:w-0.3 md:w-2/5 w-full"
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
      results: [],
      loading: true,
    };
  },
  methods: {
    async getProducts() {

      const api = new Apiservice();
      await api
        .get(this.apiUrls.products)
        .then((res) => {
          this.allProducts = JSON.parse(res?.data)?.data?.data;
        })
        .catch((error) => {
          if (error) {
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
</style>
