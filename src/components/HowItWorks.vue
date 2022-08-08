<template>
  <div class="">
    <div class="flex md:flex-row flex-col justify-evenly md:py-10 py-5">
      <div class="md:w-5/12 relative">
        <div
          class="absolute right-0 bg-white/20 rounded-tr-lg px-4 py-1 opacity-80 backdrop-filter backdrop-blur-md"
        >
          <p class="text-white font-black md:text-2xl text-sm text-right">
            Non- Salaried Worker
          </p>
        </div>
        <img
          src="../assets/images/non-salaried.png"
          class="md:rounded-lg h-96"
        />
      </div>
      <div class="md:w-5/12 relative">
        <div
          class="absolute right-0 bg-white/20 rounded-tr-lg px-4 py-1 opacity-80 backdrop-filter backdrop-blur-md"
        >
          <p class="text-white font-black md:text-2xl text-sm text-right">
            Salaried Worker
          </p>
        </div>
        <img src="../assets/images/salaried.jpg" class="md:rounded-lg h-96" />
      </div>
    </div>

    <div class="my-10">
      <heading title="HOW IT WORKS" />
      <div
        :style="image"
        class="h-fit w-full image flex flex-col space-y-8 md:space-y-0 md:flex-row items-center md:justify-evenly md:space-x-3 p-10"
      >
        <div
          class="w-full lg:w-2/5 md:w-1/2 bg-white calculator md:py-6 md:px-10 p-3"
        >
          <p
            class="text-brand text-lg md:text-2xl font-bold md:font-black leading-10 text-center tracking-wide"
          >
            Calculator
          </p>
          <form class="mt-8">
            <div class="flex flex-col mb-5">
              <label
                for="amount"
                class="text-gray-600 md:text-sm text-xs font-normal"
                >How much do you want to loan?</label
              >
              <input
                type="number"
                class="border border-gray-600 px-3 rounded h-10"
                v-model="data.amount"
                placeholder="enter amount..."
                @input="getCalc()"
              />
            </div>
            <div class="flex items-center justify-between mb-12">
              <label class="toggle">
                <input class="toggle-checkbox" type="checkbox" v-model="biMonthly" onclick="setBiMonthly()"/>
                <div class="toggle-switch"></div>
                <span class="text-gray-600 md:text-sm text-xs font-normal ml-4"
                  >Bi-Monthly</span
                >
              </label>

              <label class="toggle">
                <input class="toggle-checkbox" type="checkbox" checked />
                <div class="toggle-switch"></div>
                <span class="text-gray-600 md:text-sm text-xs font-normal ml-4"
                  >Collateral</span
                >
              </label>
            </div>
            <div>
              <div
                class="flex items-center mb-2 justify-between text-gray-600 md:text-sm text-xs font-normal"
              >
                <p>For how long?</p>
                <p>{{ data.repayment_duration }} Months</p>
              </div>
              <vue3-slider
                v-model="data.repayment_duration"
                max="12"
                limit="12"
                tooltip="true"
                color="#074A74"
                track-color="#638DA7"
                alwaysShowHandle="true"
                handleScale="3.5"
                step="3"
                v-on:change="getCalc()"
              />
              <div
                class="flex items-center justify-between text-gray-600 md:text-sm text-xs font-normal"
              >
                <p>0</p>
                <p>3</p>
                <p>6</p>
                <p>9</p>
                <p>12</p>
              </div>
            </div>
            <div class="flex w-full mt-10 mb-5">
              <div
                class="w-1/2 p-5 flex-col text-brand"
                style="background-color: #d9d9d9"
              >
                <p class="md:text-sm text-xs text-center font-normal mb-1">
                  Your downpayment
                </p>
                <p
                  class="lg:text-4xl md:text-3xl text-lg text-center font-black"
                >
                  ₦ {{actualDownpayment}}
                </p>
              </div>
              <div
                class="w-1/2 p-5 flex-col text-white"
                style="background-color: rgba(7, 74, 116, 0.63)"
              >
                <p class="md:text-sm text-xs text-center font-normal mb-1">
                  Your {{biMonthly ? 'bi-monthly':'monthly'}} repayment
                </p>
                <p
                  class="lg:text-4xl md:text-3xl text-lg text-center font-black"
                >
                  ₦{{biMonthly ? repayment/2 :repayment}}
                </p>
              </div>
            </div>
            <router-link :to="{ name: 'signup' }">
              <button class="bg-brand rounded py-3 w-full text-white font-bold">
                Get started
              </button>
            </router-link>
          </form>
        </div>
        <div
          class="w-full lg:w-2/5 md:w-1/2 flex flex-col items-center jusitfy-evenly space-y-4"
        >
          <div class="bg-white border-brand border p-5 rounded-md w-full">
            <p
              class="text-brand text-lg md:text-2xl font-bold md:font-black leading-10 mb-1"
            >
              Select what you’re interested in
            </p>
            <p class="text-gray-600 md:text-sm text-xs font-normal">
              Select what Product or Cash loan you are interested in
            </p>
          </div>
          <div class="bg-white border-brand border p-5 rounded-md w-full">
            <p
              class="text-brand text-lg md:text-2xl font-bold md:font-black leading-10 mb-1 tracking-wide"
            >
              Plan
            </p>
            <p class="text-gray-600 md:text-sm text-xs font-normal">
              Choose repayment plan, business type and duration
            </p>
          </div>
          <div class="bg-white border-brand border p-5 rounded-md w-full">
            <p
              class="text-brand text-lg md:text-2xl font-bold md:font-black leading-10 mb-1 tracking-wide"
            >
              Fill in Application Form
            </p>
            <p class="text-gray-600 md:text-sm text-xs font-normal">
              Click on get started and fill in your information
            </p>
          </div>
          <div class="bg-white border-brand border p-5 rounded-md w-full">
            <p
              class="text-brand text-lg md:text-2xl font-bold md:font-black leading-10 mb-1 tracking-wide"
            >
              Preferred mode of payment.
            </p>
            <p class="text-gray-600 md:text-sm text-xs font-normal">
              Select your preferred Mode of Payment Options
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import heading from "../components/general/heading.vue";
import slider from "vue3-slider";
import { Apiservice } from "../services/apiService";
import { cashLoan } from "../utilities/calculator";
export default {
  components: {
    heading,
    "vue3-slider": slider,
  },
  title: "How It Works | Altara Credit Limited",
  data() {
    return {
      baseURL: process.env.VUE_APP_URL,
      biMonthly:false,
      image: {
        backgroundImage: `url(${require("../assets/images/jigsaw.png")})`,
      },
      apiUrls: {
        repaymentDuration: `${process.env.VUE_APP_URL}/api/repayment_duration`,
        repaymentCycles: `${process.env.VUE_APP_URL}/api/repayment_cycle`,
        downPaymentRates: `${process.env.VUE_APP_URL}/api/down_payment_rate`,
        businessTypes: `${process.env.VUE_APP_URL}/api/business_type`,
        getCalculation: `${process.env.VUE_APP_URL}/api/price_calculator`,
      },
      downPaymentRates: [],
      businessTypes: [],
      repaymentDuration: [],
      calculation: [],
      actualDownpayment:null,
      repayment:null,
      data: {
        amount: null,
        repayment_duration:6
      },
    };
  },
  methods: {
    async getDownPaymentRates() {
      const api = new Apiservice();
      await api
        .get(this.apiUrls.downPaymentRates)
        .then((res) => {
          this.downPaymentRates = JSON.parse(res?.data).data.data;
        this.data.payment_type_id =  this.downPaymentRates.find((item)=>{
            return item.percent == 20 && item.plus == 0
          })
        })
        .catch((error) => {
          if (error) {
            throw error;
          }
        });

      // this.downPaymentRates = this.downPaymentRates.sort((a, b) => {
      //   return a.percent - b.percent;
      // });
    },
    async getBusinessTypes() {
      const api = new Apiservice();
      await api
        .get(this.apiUrls.businessTypes)
        .then((res) => {
          this.businessTypes = JSON.parse(res?.data).data.data;
       this.data.business_type_id =  this.businessTypes.find((item)=> item.slug =='ap_starter_cash_loan-no_collateral')
        })
        .catch((error) => {
          if (error) {
            throw error;
          }
        });

      // this.downPaymentRates = this.downPaymentRates.sort((a, b) => {
      //   return a.percent - b.percent;
      // });
    },
    async getRepaymentDuration() {
      const api = new Apiservice();
      await api
        .get(this.apiUrls.repaymentDuration)
        .then((res) => {
         this.repaymentDuration = JSON.parse(res?.data).data.data;

        })
        .catch((error) => {
          if (error) {
            throw error;
          }
        });
    },
    watchRepaymentDuration() {
      this.data.repayment_duration_id = this.repaymentDuration.find((item) => {
       return item.value == this.data.repayment_duration * 30;
      });
    },
    setBiMonthly(){
      this.biMonthly = !this.biMonthly
    },
    watchBuinessTypes(){
      this.data.business_type_id = this.businessTypes.find((item)=>{
        if(this.data.amount == 500000){
          return item.slug == 'ap_super_loan-new'
        }else if(this.data.amount > 120000 && this.data.amount < 500000){
            return item.slug == 'ap_cash_loan-no_collateral'
        }else if(this.data.amount <= 100000) return item.slug =='ap_starter_cash_loan-no_collateral'
      })
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
     getCalc() {
      try {
        const params = this.calculation.find( (x) =>{
           return x.business_type_id === this.data.business_type_id?.id &&
            x.down_payment_rate_id === this.data.payment_type_id.id &&
            x.repayment_duration_id === this.data.repayment_duration_id.id
        });
        console.log(params);
        console.log(this.data);
        const { total, actualDownpayment, repayment } = cashLoan(
                this.data.amount,
                this.data,
                params,
                0
              )
       
        this.actualDownpayment = actualDownpayment;
        this.repayment = repayment/this.data.repayment_duration;
        this.total = total
      } catch (e) {
        console.log(e)
        this.actualDownpayment = "0";
        this.repayment = "0";
        this.total =0
      }
      
    },
  },
  watch: {
    "data.repayment_duration": {
      handler(newData) {
        this.watchRepaymentDuration(newData);
      },
    },
    "data.amount":{
      handler(newData){
        this.watchBuinessTypes(newData)
      }
    }
  },
  async mounted() {
    await this.getDownPaymentRates();
    await this.getBusinessTypes();
    await this.getRepaymentDuration();
    await this.getCalculation();
    this.watchRepaymentDuration()
  },
};
</script>

<style>
.image {
  background-repeat: no-repeat;
}

.calculator {
  box-shadow: 0.4px 50px 120px 5px rgba(7, 74, 116, 0.5);
  border-radius: 5px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

.toggle {
  cursor: pointer;
  display: inline-block;
}

.toggle-switch {
  display: inline-block;
  background: #ccc;
  border-radius: 16px;
  width: 40px;
  height: 21px;
  position: relative;
  vertical-align: middle;
  transition: background 0.25s;
}

.toggle-switch:before,
.toggle-switch:after {
  content: "";
}

.toggle-switch:before {
  display: block;
  background: linear-gradient(to bottom, #fff 0%, #eee 100%);
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
  width: 16px;
  height: 16px;
  position: absolute;
  top: 2.5px;
  left: 4px;
  transition: left 0.25s;
}

.toggle:hover .toggle-switch:before {
  background: linear-gradient(to bottom, #fff 0%, #fff 100%);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
}

.toggle-checkbox:checked + .toggle-switch {
  background: #074a74;
}

.toggle-checkbox:checked + .toggle-switch:before {
  left: 20px;
}

.toggle-checkbox {
  position: absolute;
  visibility: hidden;
}

.toggle-label {
  margin-left: 5px;
  position: relative;
  top: 2px;
}
</style>
