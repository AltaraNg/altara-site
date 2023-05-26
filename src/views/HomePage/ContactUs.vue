<template>
  <div id="contact"></div>
  <div
    class="background h-fit lg:px-20 px-5 md:px-20 md:py-24 py-10 lg:space-x-10 flex flex-col lg:flex-row lg:items-start items-center justify-between"
  >
    <div class="lg:w-2/5 w-full">
      <h1
        class="md:text-3xl text-2xl lg:text-left text-center font-black leading-13 lg:mb-10"
      >Contact Us</h1>
      <p
        class="tracking-wide leading-8 lg:mr-10 mb-10 md:text-left text-center"
      >Feel like contacting us? Submit your queries here and we will get back to you as soon as possible.</p>
      <div class="flex items-center lg:mb-10 mb-5">
        <phone />
        <span class="ml-5 text-sm font-bold">+234 905 5493 652</span>
      </div>
      <div class="flex items-center lg:mb-10 mb-5">
        <email />
        <span class="ml-5 text-sm font-bold">admin@altaracredit.com</span>
      </div>
      <div class="flex space-x-8 mb-10 lg:mb-0 justify-center md:justify-start">
        <a href="https://www.facebook.com/AltaraCreditLimited" class="cursor-pointer" target=_blank><facebook /></a>
        <twitter />
        <linkedin />
      </div>
    </div>
    <form
      name="contact"
      @submit.prevent="sendEmail"
      method="POST"
      class="lg:w-3/5 w-full text-sm pb-10 space-y-8 bg-white flex flex-col items-center  rounded-lg shadow-lg lg:px-2 pt-8 h-fit"
    >
      <p class="font-bold  w-full text-center">Send us a Message</p>
      <div  class="flex md:flex-row md:flex-wrap items-center flex-col justify-evenly w-full px-6 md:px-0 space-y-5 md:space-y-0">

      
      <div class="flex flex-col md:w-2/5 md:pb-6 w-full">
        <label for="full_name" class="ml-3">Full Name *</label>
        <input
          type="text"
          name="full_name"
          v-model="full_name"
          class="border-2 w-full px-3 py-2 rounded-full"
        />
      </div>
      <div class="flex flex-col md:w-2/5 md:pb-6 w-full">
        <label for="email" class="ml-3">Email *</label>
        <input
          type="text"
          name="email"
          v-model="email"
          class="border-2 w-full px-3 py-2 rounded-full"
        />
      </div>
      <div class="flex flex-col md:w-2/5 md:pb-6 w-full relative">
        <label for="phone_number" class="ml-3">Phone Number *</label>
        <input
          type="text"
          maxlength="11"
          name="phone_number"
          v-model="phone_number"
          class="border-2 w-full px-3 py-2 rounded-full"
        />
        <p class="font-bold text-red-500 absolute pl-3 lg:bottom-1.5 -bottom-4" style="font-size: 11px;" v-show="phone_number.length !==11 && phone_number">Phone number must be 11 digits</p>
      </div >
      <div class="flex flex-col md:w-2/5 md:pb-6 w-full relative">
        <label for="confirm_phone_number" class="ml-3">Confirm Phone Number *</label>
        <input
          type="text"
          maxlength="11"
          name="confirm_phone_number"
          v-model="confirm_phone_number"
          class="border-2 w-full px-3 py-2 rounded-full"
        />
        <p class=" text-red-500 absolute font-bold  pl-3 lg:bottom-1.5 -bottom-4" style="font-size: 11px;" v-show="phone_number !==confirm_phone_number && confirm_phone_number">Confirm phone number does not match</p>
      </div>
        <div class="flex flex-col md:w-2/5 md:pb-6 w-full">
        <label for="location" class="ml-3">Area: *</label>
        <select
          name="area"
          v-model="area"
          class="border-2 w-full px-3 py-2 rounded-full"
        >
          <option value="default" class disabled>Area</option>
           <option class="text-sm" v-for="branch in areas"
              :key="branch.value" :value=branch.value>{{ branch.name }}</option>
        </select>
      </div>
      <div class="flex flex-col md:w-2/5 md:pb-6 w-full">
        <label for="how_can_we_help" class="ml-3">How can we help ? *</label>
        <select
          name="how_can_we_help"
          id="how_can_we_help"
          v-model="how_can_we_help"
          class="border w-full px-3 py-2 text-gray-600 rounded-full"
        >
          <option class="text-gray-600 text-sm" value="product">Need a product</option>
          <option class="text-gray-600 text-sm" value="cash">Need a cash loan</option>
          <option class="text-gray-600 text-sm" value="rent">Need a Rent Loan</option>
          <option class="text-gray-600 text-sm" value="payment_issue">Payment Issue</option>
          <option
            class="text-gray-600 text-sm"
            value="partnership"
          >Get in contact about business partnership</option>
          <option class="text-gray-600 text-sm" value="general_enquiry">General Enquiry</option>
        </select>
      </div>
      <div class="flex flex-col md:w-2/5 md:pb-6 w-full">
        <label>Preferred method of communication *</label>
        <div class="flex space-x-8 mt-3 text-gray-600 text-sm">
          <div class="flex items-center">
            <input
              type="radio"
              name="preferred_method_of_communication"
              v-model="preferred_method_of_communication"
              id="email"
              value="email"
              class="form-radio text-green-500 mr-2"
            />
            <label class>Email</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              name="preferred_method_of_communication"
              id="phone_call"
              v-model="preferred_method_of_communication"
              value="phone_call"
              class="mr-2"
            />
            <label class>Phone call</label>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:w-2/5 md:pb-6 w-full">
        <textarea
        type="text"
        rows="4"
        placeholder="Message"
        v-model="message"
        name="message"
        class="border w-full px-3 py-2 rounded"
      ></textarea>
      </div>
    </div>
      
      <button
        type="submit"
        class="flex items-center w-1/2 justify-center space-x-3 bg-brand px-7 py-3 mx-0 rounded-lg font-bold justify-self-end text-white text-sm hover:shadow-lg"
        :disabled="disabled()"
      >
        <loader v-if="loading" />
        <span v-else>Send</span>
      </button>
    </form>
  </div>
  <Modal v-if="form_sent" title="We have gotten your Message">
    <template v-slot:svg>
      <img src="../../assets/images/success.png" class="w-28 h-28" />
    </template>
    <template v-slot:text>
      <p class="text-center">We will respond as soon as possible</p>
    </template>
  </Modal>
</template>

<script>
import phone from "../../assets/svgs/phone.vue";
import email from "../../assets/svgs/email.vue";
import facebook from "../../assets/svgs/facebook.vue";
import twitter from "../../assets/svgs/twitter.vue";
import linkedin from "../../assets/svgs/linkedin.vue";
import Modal from '../../components/modal.vue'
import { Apiservice } from "../../services/apiService"
import loader from '../../assets/svgs/loader.vue'
export default {
  components: {
    phone,
    email,
    facebook,
    twitter,
    linkedin,
    Modal,
    loader
  },
  data() {
    return {
      areas:[
        {
          value:'Apata',
          name:'Apata, Ibadan'
        },
        {
          value:'Dugbe',
          name:'Dugbe, Ibadan'
        },
        {
          value:'Gate',
          name:'Gate, Ibadan'
        },
        {
          value:'Bodija',
          name:'Bodija, Ibadan'
        },
        {
          value:'Iwo',
          name:'Iwo Road, Ibadan'
        },
        {
          value:'Challenge',
          name:'Challenge, Ibadan'
        },
        {
          value:'Iyana_church',
          name:' Iyana church, Ibadan'
        },
        {
          value:'Oyo',
          name:'Oyo Town'
        },
        {
          value:'Ogbomosho',
          name:'Ogbomosho'
        },
        {
          value:'Yoruba_Road',
          name:'Yoruba Road, Ilorin'
        },
        {
          value:'Gambari',
          name:'Gambari, Ilorin'
        },
        {
          value:'Taiwo_Road',
          name:'Taiwo Road, Ilorin'
        },
        {
          value:'Ijebu_Ode',
          name:'Ijebu Ode'
        },
        {
          value:'Sagamu',
          name:'Sagamu'
        },
        {
          value:'Abiola_Way',
          name:'Abiola Way Showroom'
        },
        {
          value:'Isale_Igbeyin',
          name:'Isale Igbeyin Showroom'
        },
        
      ],
      loading:false,
      full_name: "",
      email: "",
      area:"",
      how_can_we_help: "",
      phone_number: "",
      confirm_phone_number:"", 
      preferred_method_of_communication: "",
      message: "",
      form_sent: false,
      formURL: process.env.VUE_APP_URL_CONTACT
    }
  },
  methods: {
    disabled() {
      return (
        !this.full_name || !this.phone_number ||this.phone_number !== this.confirm_phone_number || !this.email || !this.area || !this.how_can_we_help || !this.message
      )
    },
    sendEmail() {
      const api = new Apiservice()
      var data = {
        full_name: this.full_name,
        phone_number: this.phone_number,
        confirm_phone_number: this.confirm_phone_number,
        email: this.email,
        area:this.area,
        how_can_we_help: this.how_can_we_help,
        preferred_method_of_communication: this.preferred_method_of_communication,
        message: this.message,
        date: new Date().toLocaleString()
      }
      this.loading = true
      api.post(this.formURL, data, true).then(() => {
        this.full_name = '';
        this.phone_number = '';
        this.confirm_phone_number = '';
        this.email = '';
        this.area = '';
        this.how_can_we_help = '';
        this.preferred_method_of_communication = '';
        this.message = ''
        this.form_sent = true;
        this.loading = false;
        //i redirect my app to '/sameRoute' route once payload completed.  
        this.$router.push({ name: 'home', hash: '#contact' });
      }).catch((error) => {
        if (error) {
          throw error
        }
      });
    }
  },
};
</script>

<style>
.background {
  background-image: url("../../assets/images/Background.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
button:disabled {
  background-color: #c2d2dd;
}
</style>