<template>
    <div class="flex items-start md:h-screen py-8 md:py-0 bg-brand25 justify-center px-32 relative" >
  <img :src="background"   class=" hidden md:block "/>
  <div class="md:absolute top-6 h-fit md:w-5/12 mx-5 md:mx-0 md:pb-32 pb-8 opacity-90 bg-white md:py-12 py-6  rounded-lg shadow-2xl  ">
    <div class="md:mb-10 mb-5">
      <h1 class="text-center text-brand font-black leading-7 md:text-3xl text-lg">Lets get started <br/><span class="text-gray-400 font-normal md:text-sm text-xs">Create a new account</span></h1>
    </div>
      <form class="space-y-6" action="https://formspree.io/f/xgedolqe"
  method="POST">
        <div class="flex md:flex-row flex-col justify-evenly w-full px-6 md:px-0 space-y-5 md:space-y-0">
          <input type="text" name="first_name" placeholder="First Name" class="bg-white rounded-full md:w-2/5  md:h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand "/>
          <input type="text" name="last_name" placeholder="Last Name" class="bg-white rounded-full md:w-2/5  md:h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand "/>
        </div>
        <div class="flex md:flex-row flex-col  justify-evenly w-full px-6 md:px-0 space-y-5 md:space-y-0">
          <input type="text" name="phone_number" placeholder="Phone Number" class="bg-white rounded-full md:w-2/5 w-full  md:h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand "/>
          <input type="text" name="email" placeholder="Email" class="bg-white rounded-full md:w-2/5 w-full  md:h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand "/>
        </div>
        <div class="flex md:flex-row flex-col justify-evenly w-full px-6 md:px-0 space-y-5 md:space-y-0">
          <input type="text" name="address" placeholder="Address" class="bg-white rounded-full md:w-2/5  md:h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand "/>
          <input type="text" name="product_name_or_loan_amount" placeholder="Product Name or Loan Amount" class="bg-white rounded-full md:w-2/5  md:h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand "/>
        </div>
        <div class="flex md:flex-row flex-col  justify-evenly w-full px-6 md:px-0 space-y-5 md:space-y-0">
               <select  name="phone_number" placeholder="Phone Number" class="bg-white rounded-full md:w-2/5 text-gray-400  md:h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand ">
          <option value="default" class="text-gray-500" disabled selected>Services you are interested in?</option>
        <option class="text-gray-600 text-sm" value="rent">ALtara Rent</option>
        <option class="text-gray-600 text-sm" value="e_loan">Altara E-loan</option>
        <option class="text-gray-600 text-sm" value="product">Altara Product</option>
          </select>
               <select  name="phone_number" placeholder="Phone Number" class="bg-white rounded-full md:w-2/5 text-gray-400  md:h-10 md:text-base text-xs shadow-lg px-2 py-1 border border-brand ">
          <option value="default" class="text-gray-500" disabled selected>Employment Status</option>
        <option class="text-gray-600 text-sm" value="salaried">Salaried</option>
        <option class="text-gray-600 text-sm" value="non_salaried">Non-Salaried</option>
          </select>
        </div>
        <div class="w-full flex justify-center ">
          <button type="submit" class="bg-brand md:px-7 px-4 md:py-3 py-2 mx-0 rounded-full font-black md:absolute md:right-12  text-white text-sm hover:shadow-lg">
        Create Account
      </button>
        </div>
        
      </form>
  </div>
</div>  
</template>
<script>
import background from '../assets/images/background_picture.png'
export default {
  title: 'Sign Up| Altara Credit Limited',
  data(){
    return{
      background
    }
  }
}
</script>