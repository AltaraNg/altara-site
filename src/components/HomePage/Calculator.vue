<template>
  <div>


      <div class=" w-full ">
         <p class="text-brand
            text-center
            md:text-3xl
            text-2xl
            font-black
            md:leading-14
            leading-12 uppercase w-full pt-20 ">Loan  Calculator</p>
        <div>
          <div
            class="w-full image flex flex-col space-y-4 md:space-y-0 md:flex-row items-stretch  justify-center md:p-10 p-4"
          >
            <div v-animate-onscroll="{down:'fadeInLeft'}"
              class="w-full lg:w-2/5 md:w-1/2 bg-white drop-shadow-lg  border rounded-l-lg md:py-6 md:px-10 p-3"
            >

              <form class="mt-8">
                <div class="flex flex-col mb-5">
                  <label
                    for="data.amount"
                    class="text-gray-600 md:text-sm text-xs font-normal"
                    >How much do you want to loan?</label
                  >

                  <CurrencyInput
                    v-model="data.amount"
                    :options="{
                      currency: 'NGN',
                      hideCurrencySymbolOnFocus: false,
                      hideGroupingSeparatorOnFocus: false,
                      hideNegligibleDecimalDigitsOnFocus: false,
                    }"
                    :getCalc="getCalc()"
                  />
                </div>
                <div class="flex items-center justify-between mb-12">
                  <label class="toggle">
                    <input
                      class="toggle-checkbox"
                      type="checkbox"
                      v-model="data.biMonthly"
                      @click="setBiMonthly()"
                    />
                    <div class="toggle-switch"></div>
                    <span
                      class="text-gray-600 md:text-sm text-xs font-normal ml-4"
                      >Bi-Monthly</span
                    >
                  </label>

                  <label class="toggle">
                    <input
                      class="toggle-checkbox"
                      type="checkbox"
                      v-model="data.collateral"
                      @click="setCollateral()"
                    />
                    <div class="toggle-switch"></div>
                    <span
                      class="text-gray-600 md:text-sm text-xs font-normal ml-4"
                      >Collateral</span
                    >
                  </label>
                </div>
                <div
                  class="flex w-full items-center justify-center py-5 mt-10 mb-5"
                  v-if="disabled && data.amount"
                  style="background-color: rgba(7, 74, 116, 0.63)"
                >
                  <p
                    class="md:text-4xl text-lg text-center font-black text-white"
                  >
                    {{ data.actualDownpayment }}
                  </p>
                </div>
                <div class="flex w-full mt-10 mb-5" v-if="!disabled">
                  <div
                    class="w-1/2 p-4 flex-col text-brand"
                    style="background-color: #d9d9d9"
                  >
                    <p class="md:text-sm text-xs text-center font-normal mb-1">
                      Your downpayment
                    </p>
                    <p class="md:text-3xl text-lg text-center font-black">
                      {{ data.actualDownpayment }}
                    </p>
                  </div>
                  <div
                    class="w-1/2 p-4 flex-col text-white"
                    style="background-color: rgba(7, 74, 116, 0.63)"
                  >
                    <p
                      class="text-xs text-center font-normal mb-1"
                      :class="data.biMonthly ? 'md:text-xs' : 'md:text-sm'"
                    >
                      Your
                      {{ data.biMonthly ? "bi-monthly" : "monthly" }} repayment
                    </p>
                    <p class="md:text-3xl text-lg text-center font-black">
                      {{
                        data.biMonthly ? data.biMonthlyRepayent : data.repayment
                      }}
                    </p>
                  </div>
                </div>

                <router-link :to="{ name: 'signup' }">
                  <button
                    class="bg-brand rounded py-3 w-full text-white font-bold"
                    :disabled="disabled"
                    :style="
                      disabled
                        ? 'background-color: rgba(7, 74, 116, 0.2); margin-top:25px'
                        : 'background-color: rgba(7, 74, 116, 1)'
                    "
                  >
                    Get Started
                  </button>
                </router-link>
              </form>
            </div>
            <div v-animate-onscroll="{down:'fadeInRight'}"
              class="bg-brand shadow-lg w-full lg:w-2/5 md:w-1/2 h-fit flex flex-col p-4"
            >
              <div class="flex items-center ">
                <img
                  src="../../assets/images/cash.png"
                  class="mr-5 w-12 h-12"
                />
                <div>

                  <p v-if="data.amount" class="text-white font-black md:text-lg text-normal">
                  {{ formatAmount(data.amount) }}
                  </p>
                </div>
              </div>
              <hr class="border-gray-500 w-full px-10 my-2 " />
              <div class="flex flex-col justify-evenly  h-full">
                  <div class="flex items-center mt-1" v-for=" message, index  in checks" :key="index">
                <img
                  src="../../assets/images/check2.png"
                  class="mr-2 w-6 h-6"
                />
                <p class="text-white text-sm">{{message.title}}</p>
              </div>
              </div>

            </div>
          </div>
        </div>


    </div>
  </div>
</template>
<script>
import { Apiservice } from "../../services/apiService";
import { cashLoan } from "../../utilities/calculator";
import CurrencyInput from "../general/currenyInput.vue";

export default {
  components: {
    CurrencyInput,
  },
  data() {
    return {
        hover:false,
      checks: [
       {title: "Flexible  payment options"},
        {title: "Fast and easy to apply"},
        {title: "Up to ₦170,000 as a first time customer"},
        {title: "Direct transfer to your bank account"},
      ],
      disabled: true,
      baseURL: process.env.VUE_APP_URL,
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
      data: {
        amount: null,
        biMonthly: null,
        repayment_duration: 6,
        collateral: false,
        actualDownpayment: null,
        biMonthlyRepayent: null,
        repayment: null,
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
    async getBusinessTypes() {
      const api = new Apiservice();
      await api
        .get(this.apiUrls.businessTypes)
        .then((res) => {
          this.businessTypes = JSON.parse(res?.data).data.data;
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
    setCollateral() {
      this.data.collateral = !this.data.collateral;
      this.watchBuinessTypes();
      this.getCalc();
    },
    setBiMonthly() {
      this.data.biMonthly = !this.data.biMonthly;
      window.localStorage.setItem("data", JSON.stringify(this.data));
    },
    watchBuinessTypes() {
      this.data.business_type_id = this.businessTypes.find((item) => {
        if (this.data.amount >= 500000) {
          return item.slug == "ap_super_loan-new";
        } else if (
          this.data.amount > 120000 &&
          this.data.amount < 500000 &&
          !this.data.collateral
        ) {
          return item.slug == "ap_cash_loan-no_collateral";
        } else if (
          this.data.amount >= 70000 &&
          this.data.amount <= 120000 &&
          !this.data.collateral
        ) {
          return item.slug == "ap_starter_cash_loan-no_collateral";
        } else if (
          this.data.amount > 120000 &&
          this.data.amount < 500000 &&
          this.data.collateral
        ) {
          return item.slug == "ap_cash_loan-product";
        } else if (
          this.data.amount >= 70000 &&
          this.data.amount <= 120000 &&
          this.data.collateral
        ) {
          return item.slug == "ap_starter_cash_loan";
        }
      });
      if (this.data.amount >= 500000) {
        return (this.data.repayment_duration = 12);
      } else this.data.repayment_duration = 6;
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
        const params = this.calculation.find((x) => {
          return (
            x.business_type_id === this.data.business_type_id?.id &&
            x.down_payment_rate_id === this.data.payment_type_id.id &&
            x.repayment_duration_id === this.data.repayment_duration_id.id
          );
        });
        const { total, actualDownpayment, repayment } = cashLoan(
          this.data.amount,
          this.data,
          params,
          0
        );

        this.data.actualDownpayment = this.formatAmount(actualDownpayment);
        this.data.repayment = this.formatAmount(repayment / this.data.repayment_duration);
        this.data.biMonthlyRepayent = this.formatAmount( repayment /this.data.repayment_duration / 2);
        this.data.total = total;
        window.localStorage.setItem("data", JSON.stringify(this.data));
        this.disabled = false;
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
      return `₦${(amount)
        ?.toFixed(2)
        ?.toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    },
  },
  watch: {
    "data.repayment_duration": {
      handler(newData) {
        this.watchRepaymentDuration(newData);
      },
    },
    ["data.amount"]: {
      handler(newData) {
        this.watchBuinessTypes(newData);
      },
    },
  },
  async mounted() {
    await this.getDownPaymentRates();
    await this.getBusinessTypes();
    await this.getRepaymentDuration();
    await this.getCalculation();
    this.watchRepaymentDuration();
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
.tabBackground {
  background: linear-gradient(
    270deg,
    #074a74 33.7%,
    #074a74 36.33%,
    #089ca4 69.06%
  );
}
.image {
  background-repeat: no-repeat;
}

.calculator {
  box-shadow: 0.4px 50px 120px 5px rgba(7, 74, 116, 0.5);
  border-radius: 2px, 0, 0, 2px;
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
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
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
.drop-shadow-lg{
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.07)) drop-shadow(3px 4px 3px rgb(0 0 0 / 0.1));
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
