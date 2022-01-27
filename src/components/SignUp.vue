<template>
  <div
    class="flex items-start md:h-screen py-8 md:py-0 bg-brand25 justify-center md:px-32 relative"
  >
    <img :src="background" class="hidden md:block" />
    <div
      class="md:absolute top-6 h-fit md:w-5/12 w-11/12 md:mx-0 md:pb-32 pb-8 opacity-90 bg-white md:py-12 py-6 rounded-lg shadow-2xl"
    >
      <div class="md:mb-10 mb-5">
        <h1 class="text-center text-brand font-black leading-7 md:text-3xl text-lg">
          Lets get started
          <br />
          <span class="text-gray-400 font-normal md:text-sm text-xs">Create a new account</span>
        </h1>
      </div>
      <form class="space-y-6" @submit.prevent="sendEmail" method="POST">
        <div
          class="flex md:flex-row flex-col justify-evenly w-full px-6 md:px-0 space-y-5 md:space-y-0"
        >
          <input
            type="text"
            name="first_name"
            v-model="first_name"
            placeholder="First Name"
            class="bg-white rounded-full md:w-2/5 h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand"
          />
          <input
            type="text"
            name="last_name"
            v-model="last_name"
            placeholder="Last Name"
            class="bg-white rounded-full md:w-2/5 h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand"
          />
        </div>
        <div
          class="flex md:flex-row flex-col justify-evenly w-full px-6 md:px-0 space-y-5 md:space-y-0"
        >
          <input
            type="text"
            name="phone_number"
            v-model="phone_number"
            placeholder="Phone Number"
            class="bg-white rounded-full md:w-2/5 w-full h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand"
          />
          <input
            type="text"
            name="email"
            v-model="email"
            placeholder="Email"
            class="bg-white rounded-full md:w-2/5 w-full h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand"
          />
        </div>
        <div
          class="flex md:flex-row flex-col justify-evenly w-full px-6 md:px-0 space-y-5 md:space-y-0"
        >
          <input
            type="text"
            name="address"
            v-model="address"
            placeholder="Address"
            class="bg-white rounded-full md:w-2/5 h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand"
          />
          <input
            type="text"
            name="product_name_or_loan_amount"
            v-model="product_name_or_loan_amount"
            placeholder="Product Name or Loan Amount"
            class="bg-white rounded-full md:w-2/5 h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand"
          />
        </div>
        <div
          class="flex md:flex-row flex-col justify-evenly w-full px-6 md:px-0 space-y-5 md:space-y-0"
        >
          <select
            name="services_you_are_interested_in"
            v-model="services_you_are_interested_in"
            placeholder="Services you are interested in?"
            class="bg-white rounded-full md:w-2/5 text-gray-400 h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand"
          >
            <option
              value="default"
              class="text-gray-500"
              disabled
              selected
            >Services you are interested in?</option>
            <option class="text-gray-600 text-sm" value="rent">ALtara Rent</option>
            <option class="text-gray-600 text-sm" value="e_loan">Altara E-loan</option>
            <option class="text-gray-600 text-sm" value="product">Altara Product</option>
          </select>
          <select
            name="employment_status"
            v-model="employment_status"
            placeholder="Employment Status"
            class="bg-white rounded-full md:w-2/5 text-gray-400 h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand"
          >
            <option value="default" class="text-gray-500" disabled selected>Employment Status</option>
            <option class="text-gray-600 text-sm" value="salaried">Salaried</option>
            <option class="text-gray-600 text-sm" value="non_salaried">Non-Salaried</option>
          </select>
        </div>
        <div class="w-full flex justify-center">
          <button
            type="submit"
            :disabled="disabled()"
            class="bg-brand md:px-7 px-4 md:py-3 py-2 mx-0 rounded-full font-black md:absolute md:right-12 text-white text-sm hover:shadow-lg"
          >Create Account</button>
        </div>
      </form>
    </div>
    <Modal v-if="form_sent" title="Sign Up Successfull!">
     <template v-slot:svg>
       <img src="../assets/images/success.png" class="w-28 h-28"/>
     </template>
    
    </Modal>

  </div>
</template>
<script>
import axios from 'axios'
import background from '../assets/images/background_picture.png'
import Modal from '../components/general/modal.vue'
export default {
  title: 'Sign Up| Altara Credit Limited',
  components:{
    Modal
  },
  data() {
    return {
      background,
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      address: "",
      product_name_or_loan_amount: "",
      services_you_are_interested_in: "",
      employment_status: "",
      form_sent:false

    }
  },
  methods: {
    disabled() {
      return (
        !this.first_name || !this.last_name || !this.phone_number || !this.email || !this.address || !this.product_name_or_loan_amount || !this.services_you_are_interested_in || !this.employment_status
      )
    },
    sendEmail() {
      axios.post('https://formspree.io/f/xgedolqe', {
        first_name: this.first_name,
        last_name: this.last_name,
         phone_number: this.phone_number,
        email: this.email,
         address: this.address,
        product_name_or_laon_amount: this.product_name_or_loan_amount,
         services_you_are_interested_in: this.services_you_are_interested_in,
        employment_status: this.employment_status,
      }).then((response) => {
        this.first_name = '';
        this.last_name = '';
        this.phone_number = '';
        this.email = '';
        this.address = '';
        this.product_name_or_loan_amount = '';
        this.services_you_are_interested_in = '';
        this.employment_status=''
        this.form_sent = true;
        //i redirect my app to '/sameRoute' route once payload completed.  
        this.$router.push({ path: '/signup' });
        console.log(response)
      }).catch((error) => {
        if (error) {
          console.error('There was an error!', error);
          
        }
});
},
},
};

</script>