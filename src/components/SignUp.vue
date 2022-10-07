<template>
  <div
    class="flex items-start md:h-screen py-8 md:py-0 bg-brand25 justify-center md:px-32 relative"
  >
    <img :src="background" class="hidden md:block w-full" />
    <div
      class="md:absolute top-6 h-fit md:w-5/12 w-11/12 md:mx-0 md:pb-10 pb-8 opacity-90 bg-white md:py-12 py-6 rounded-lg shadow-2xl"
    >
      <div class="mb-5">
        <h1
          class="text-center text-brand font-black leading-7 md:text-3xl text-lg"
        >
          Lets get started
          <br />
          <span class="font-normal md:text-sm text-xs"
            >Create a new account</span
          >
        </h1>
      </div>
      <form class="space-y-6" @submit.prevent="sendEmail" method="POST">
        <div
          class="flex md:flex-row flex-col justify-evenly w-full px-6 md:px-0 space-y-5 md:space-y-0"
        >
          <div class="flex flex-col w-full md:mx-9">
            <label for="full_name" class="mb-0.5 ml-2 text-sm"
              >Full Name: *</label
            >
            <input
              type="text"
              name="full_name"
              v-model="full_name"
              @input="checkPhone()"
              class="bg-white rounded-xs h-10 text-sm shadow-lg px-2 py-1 border border-brand"
            />
          </div>
        </div>
        <div
          class="flex md:flex-row flex-col justify-evenly items-center w-full px-6 md:px-0 space-y-5 md:space-y-0"
        >
          <div class="flex flex-col md:w-2/5 w-full">
            <label for="phone_number" class="mb-0.5 ml-2 text-sm"
              >Phone Number: *</label
            >
            <input
              type="tel"
              maxlength="11"
              name="phone_number"
              v-model="phone_number"
              @input="checkPhone()"
              class="bg-white rounded-xs h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand"
            />
          </div>
          <div class="flex flex-col md:w-2/5 w-full">
            <label for="location" class="mb-0.5 ml-2 text-sm md:text-base"
              >Area: *</label
            >
            <select
              name="area"
              v-model="area"
              @change="checkPhone()"
              class="bg-white rounded-xs h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand"
            >
              <option value="default" class disabled>Area</option>
              <option class="text-sm" value="Apata">Apata, Ibadan</option>
              <option class="text-sm" value="Dugbe">Dugbe, Ibadan</option>
              <option class="text-sm" value="Gate">Gate, Ibadan</option>
              <option class="text-sm" value="Bodija">Bodija, Ibadan</option>
              <option class="text-sm" value="Iwo">Iwo Road, Ibadan</option>
              <option class="text-sm" value="Challenge">
                Challenge, Ibadan
              </option>
              <option class="text-sm" value="Iyana_church">
                Iyana church, Ibadan
              </option>
              <option class="text-sm" value="Oyo">Oyo Town</option>
              <option class="text-sm" value="Ogbomosho">Ogbomosho</option>
              <option class="text-sm" value="Yoruba_Road">
                Yoruba Road, Ilorin
              </option>
              <option class="text-sm" value="Gambari">Gambari, Ilorin</option>
              <option class="text-sm" value="Taiwo_Road">
                Taiwo Road, Ilorin
              </option>
            </select>
          </div>
        </div>
        <div
          class="flex md:flex-row md:flex-wrap items-start flex-col justify-evenly w-full px-6 md:px-0 space-y-5 md:space-y-0"
        >
          <div class="flex flex-col md:w-2/5 md:mb-6 w-full">
            <label
              for="services_you_are_interested_in"
              class="mb-0.5 ml-2 text-sm"
              >Services you are interested in? *</label
            >
            <select
              name="services_you_are_interested_in"
              v-model="services_you_are_interested_in"
              @change="checkPhone()"
              class="bg-white rounded-xs h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand"
            >
              <option value="default" class disabled>
                Services you are interested in?
              </option>
              <option class="text-sm" value="rent">Altara Rent</option>
              <option class="text-sm" value="e_loan">Altara E-loan</option>
              <option class="text-sm" value="product">Altara Product</option>
            </select>
          </div>
          <div class="flex flex-col md:w-2/5 md:mb-6 w-full">
            <label
              for="services_you_are_interested_in"
              class="mb-0.5 ml-2 text-sm"
              >{{ checkService("Product *", "Amount *", "Amount *") }}</label
            >
            <CurrencyInput
              v-if="data.amount"
              v-model="data.amount"
              name="further_details"
              :options="{
                currency: 'NGN',
                hideCurrencySymbolOnFocus: false,
                hideGroupingSeparatorOnFocus: false,
                hideNegligibleDecimalDigitsOnFocus: false,
              }"
            />
            <input
              v-else
              type="text"
              name="product"
              v-model="data.product"
              @input="checkPhone()"
              class="bg-white rounded-xs h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand"
            />
          </div>
          <div class="flex flex-col md:w-2/5 md:mb-6 w-full">
            <label for="repayment_duration" class="mb-0.5 ml-2 text-sm"
              >Repayment Duration: *</label
            >
            <select
              name="repayment_duration"
              v-model="repayment_duration"
              class="bg-white rounded-xs h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand"
            >
              <option value="default" class disabled>Repayment Duration</option>
              <option class="text-sm" value="three_months">Three Months</option>
              <option class="text-sm" value="six_months">Six Months</option>
              <option class="text-sm" value="nine_months">Nine Months</option>
              <option class="text-sm" value="twelve_months">
                Twelve Months
              </option>
            </select>
          </div>
          <div class="flex flex-col md:w-2/5 md:mb-6 w-full">
            <label for="repayment_plan" class="mb-0.5 ml-2 text-sm"
              >Repayment Plan: *</label
            >
            <select
              name="repayment_plan"
              v-model="repayment_plan"
              class="bg-white rounded-xs h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand"
            >
              <option value="default" class disabled>Repayment Plan</option>
              <option class="text-sm" value="monthly">Monthly</option>
              <option class="text-sm" value="Bimonthly">Bi-Monthly</option>
            </select>
          </div>
          <div class="flex flex-col md:w-2/5 md:my-6 w-full pt-10">
            <button
              type="submit"
              :disabled="checkPhone()"
              class="bg-brand flex items-center justify-center md:px-7 px-4 md:py-3 py-2 mx-0 rounded-xs font-black text-white text-sm hover:shadow-lg"
            >
              <loaderVue v-if="loader" />
              Submit Request
            </button>
          </div>
        </div>
      </form>
    </div>
    <Modal v-if="form_sent" title="Order Now Successfull!" @routeHome="routeHome()">
      <template v-slot:svg>
        <img src="../assets/images/success.png" class="w-28 h-28" />
      </template>
      <template v-slot:text>
        <p class="text-center">We will reach out to you within 48 hours</p>
      </template>
    </Modal>
  </div>
</template>
<script>
import background from "../assets/images/background_picture.png";
import Modal from "../components/general/modal.vue";
import { Apiservice } from "../services/apiService";
import loaderVue from "../assets/svgs/loader.vue";
import CurrencyInput from "./general/currenyInput.vue";
export default {
  title: "Order Now| Altara Credit Limited",
  components: {
    Modal,
    loaderVue,
    CurrencyInput,
  },
  data() {
    return {
      disabled: true,
      repayment_duration: "",
      repayment_plan: "",
      data: {},
      loader: false,
      background,
      full_name: "",
      area: "",
      phone_number: "",
      services_you_are_interested_in: "",
      loans: [
        { details: "70,000 - 80,000" },
        { details: "80,000 - 100,000" },
        { details: "100,000 - 120,000" },
      ],
      rents: [
        { details: "100,000 - 200,000" },
        { details: "200,000 - 300,000" },
        { details: "300,000 - 500,000" },
      ],
      products: [
        { details: "Phones" },
        { details: "Fridge" },
        { details: "Television" },
        { details: "Freezer" },
        { details: "Washing Machine" },
        { details: "Fan" },
        { details: "Air Conditioner" },
        { details: "Gas Cooker" },
        { details: "Mirowave Oven" },
        { details: "Sewing Machine" },
        { details: "Laptops" },
        { details: "Others" },
      ],
      further_details: "",
      employment_status: "",
      form_sent: false,
      formURL: process.env.VUE_APP_URL_SIGNUP_STAGING,
      formData: null,
    };
  },
  methods: {
    routeHome(){
      !this.form_sent
      this.$router.push({ path: "/" });
    },
    checkPhone() {
      if (
        this.phone_number.toString().length != 11 ||
        !this.full_name ||
        !this.area ||
        !this.services_you_are_interested_in  ||
        !this.repayment_duration  ||
        !this.repayment_plan  || (!this.data.product  || this.data.amount)
      ) {
        return true;
      } else {
        return false;
      }
    },
    checkService(product, loan, rent) {
      return this.services_you_are_interested_in == "product"
        ? product
        : this.services_you_are_interested_in == "e_loan"
        ? loan
        : rent;
    },
    sendEmail() {
      this.loader = true;
      const api = new Apiservice();
      const eloan_data = {
        full_name: this.full_name,
        phone_number: this.phone_number,
        area: this.area,
        services_you_are_interested_in: this.services_you_are_interested_in,
        further_details: this.data?.amount,
        repayment_duration: this.repayment_duration,
        repayment_plan: this.repayment_plan,
        date: new Date().toLocaleString(),
      };
      const product_data = {
        full_name: this.full_name,
        phone_number: this.phone_number,
        area: this.area,
        services_you_are_interested_in: this.services_you_are_interested_in,
        further_details: this.data?.product,
        repayment_duration: this.repayment_duration,
        repayment_plan: this.repayment_plan,
        date: new Date().toLocaleString(),
      };
      this.formData =
        this.services_you_are_interested_in == "e_loan"
          ? eloan_data
          : product_data;

      api
        .post(this.formURL, this.formData, true)
        .then(() => {
          this.full_name = "";
          this.phone_number = "";
          (this.area = ""), (this.services_you_are_interested_in = "");
          this.employment_status = "";
          this.further_details = "";
          this.form_sent = true;
          this.loader = false;
          (this.repayment_duration = ""), (this.repayment_plan = "");
          window.localStorage.removeItem("data");
          this.data = {};
          this.$router.push({ path: "/signup" });
        })
        .catch((error) => {
          if (error) {
            throw error;
          }
        });
    },
    async fetchData() {
      if (localStorage.data) {
        this.data = { ...JSON.parse(window.localStorage.getItem("data")) };
        if (this.data.amount) {
          this.services_you_are_interested_in = "e_loan";
          this.repayment_duration = this.data.repayment_duration_id.name;
          this.repayment_plan = this.data.biMonthly ? "Bimonthly" : "monthly";
        }
        if (this.data.product) {
          this.services_you_are_interested_in = "product";
          this.repayment_plan = this.data.biMonthly ? "Bimonthly" : "monthly";
          this.repayment_duration ='six_months'
        }
      }
    },
  },
  computed: {},
  watch: {
    services_you_are_interested_in: {
      handler(newData) {
        this.checkService(newData);
        this.further_details = "";
      },
    },

    // whenever question changes, this function will run
  },
  async mounted() {
    await this.fetchData();
  },
};
</script>
<style>
button:disabled {
  background-color: #c2d2dd;
}
</style>
