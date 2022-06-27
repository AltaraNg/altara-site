<template>
  <div
    class="flex items-start md:h-screen py-8 md:py-0 bg-brand25 justify-center md:px-32 relative"
  >
    <img :src="background" class="hidden md:block" />
    <div
      class="md:absolute top-6 h-fit md:w-5/12 w-11/12 md:mx-0 md:pb-32 pb-8 opacity-90 bg-white md:py-12 py-6 rounded-lg shadow-2xl"
    >
      <div class="md:mb-10 mb-5">
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
              class="bg-white rounded-full h-10 text-sm shadow-lg px-2 py-1 border border-brand"
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
              type="number"
              name="phone_number"
              v-model="phone_number"
              class="bg-white rounded-full h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand"
            />
          </div>
          <div class="flex flex-col md:w-2/5 w-full">
            <label for="location" class="mb-0.5 ml-2 text-sm md:text-base"
              >Area: *</label
            >
            <select
              name="area"
              v-model="area"
              class="bg-white rounded-full h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand"
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
          class="flex md:flex-row flex-col justify-evenly w-full px-6 md:px-0 space-y-5 md:space-y-0"
        >
          <div class="flex flex-col md:w-2/5">
            <label
              for="services_you_are_interested_in"
              class="mb-0.5 ml-2 text-sm"
              >Services you are interested in? *</label
            >
            <select
              name="services_you_are_interested_in"
              v-model="services_you_are_interested_in"
              class="bg-white rounded-full h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand"
            >
              <option value="default" class disabled selected>
                Services you are interested in?
              </option>
              <option class="text-sm" value="rent">Altara Rent</option>
              <option class="text-sm" value="e_loan">Altara E-loan</option>
              <option class="text-sm" value="product">Altara Product</option>
            </select>
          </div>
          <div
            class="flex flex-col md:w-2/5"
            v-if="services_you_are_interested_in"
          >
            <label
              for="services_you_are_interested_in"
              class="mb-0.5 ml-2 text-sm"
              >{{ checkService("Product *", "Cash *") }}</label
            >
            <select
              name="further_details"
              v-model="further_details"
              class="bg-white rounded-full h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand"
            >
              <option value="default" class disabled selected>
                {{ checkService("Product", "Cash") }}
              </option>
              <option
                class="text-sm"
                :value="type.details"
                v-for="type in checkService(products, amounts)"
                :key="type.details"
              >
                {{ type.details }}
              </option>
            </select>
          </div>
          <div class="flex flex-col md:w-2/5">
            <label for="employment_status" class="mb-0.5 ml-2 text-sm"
              >Employment Status: *</label
            >
            <select
              name="employment_status"
              v-model="employment_status"
              class="bg-white rounded-full h-10 text-sm shadow-lg px-2 py-1 border border-brand"
            >
              <option value="default" class disabled selected>
                Employment Status
              </option>
              <option class="text-sm" value="employed">Employed</option>
              <option class="text-sm" value="self_employed">
                Self Employed
              </option>
            </select>
          </div>
        </div>
        <div class="w-full flex justify-center">
          <button
            type="submit"
            :disabled="disabled()"
            class="bg-brand flex items-center justify-center md:px-7 px-4 md:py-3 py-2 mx-0 rounded-full font-black md:absolute md:right-12 text-white text-sm hover:shadow-lg"
          >
            <loaderVue v-if="loader" />
            Create Account
          </button>
        </div>
      </form>
    </div>
    <Modal v-if="form_sent" title="Sign Up Successfull!">
      <template v-slot:svg>
        <img src="../assets/images/success.png" class="w-28 h-28" />
      </template>
      <template v-slot:text>
        <p class="text-center">We will reach out to you shortly</p>
      </template>
    </Modal>
  </div>
</template>
<script>
import background from "../assets/images/background_picture.png";
import Modal from "../components/general/modal.vue";
import { Apiservice } from "../services/apiService";
import loaderVue from "../assets/svgs/loader.vue";
export default {
  title: "Sign Up| Altara Credit Limited",
  components: {
    Modal,
    loaderVue,
  },
  data() {
    return {
      loader: false,
      background,
      full_name: "",
      area: "",
      phone_number: "",
      services_you_are_interested_in: "",
      amounts: [
        { details: "10,000 - 50,000" },
        { details: "50,000 - 100,000" },
        { details: "100,000 - 120,000" },
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
    };
  },
  methods: {
    disabled() {
      return (
        !this.full_name ||
        !this.phone_number ||
        !this.area ||
        !this.services_you_are_interested_in ||
        !this.employment_status || !this.further_details
      );
    },
    checkService(product, cash) {
      return this.services_you_are_interested_in == "product"  ? product : cash;
    },
    sendEmail() {
      const api = new Apiservice();
      var data = {
        full_name: this.full_name,
        phone_number: this.phone_number,
        area: this.area,
        services_you_are_interested_in: this.services_you_are_interested_in,
        employment_status: this.employment_status,
        further_details: this.further_details,
        date: new Date().toLocaleString(),
      };
      this.loader = true;
      api
        .post(this.formURL, data, true)
        .then(() => {
          this.full_name = "";
          this.phone_number = "";
          (this.area = ""), (this.services_you_are_interested_in = "");
          this.employment_status = "";
          this.further_details='';
          this.form_sent = true;
          this.loader = false;
          this.$router.push({ path: "/signup" });
        })
        .catch((error) => {
          if (error) {
            throw error;
          }
        });
    },
  },
  computed: {},
  watch: {
    'services_you_are_interested_in': {
      handler(newData) {
        this.checkService(newData);
        this.further_details='';
      },
    },
    // whenever question changes, this function will run
    
  },
};
</script>
<style>
button:disabled {
  background-color: #c2d2dd;
}
</style>
