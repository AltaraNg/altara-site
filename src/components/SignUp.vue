<template>
    <div class="flex items-start h-screen bg-brand25 justify-center px-32 relative" >
  <img :src="background"   class="  "/>
  <div class="absolute top-6 h-fit w-3/5 pb-32 opacity-90 bg-white p-12  rounded-lg shadow-2xl  ">
    <div class="mb-10">
      <h1 class="text-center text-brand font-black leading-7 text-3xl">Lets get started <br/><span class="text-gray-400 font-normal text-sm">Create a new account</span></h1>
    </div>
      <form class="space-y-8" action="https://formspree.io/f/xgedolqe"
  method="POST">
        <div class="flex justify-between w-full">
          <input type="text" name="first_name" placeholder="First Name" class="bg-white rounded-full w-2/5  h-10 shadow-lg px-2 py-1 border border-brand "/>
          <input type="text" name="last_name" placeholder="Last Name" class="bg-white rounded-full w-2/5  h-10 shadow-lg px-2 py-1 border border-brand "/>
        </div>
        <div class="flex justify-between w-full">
          <input type="text" name="phone_number" placeholder="Phone Number" class="bg-white rounded-full w-2/5  h-10 shadow-lg px-2 py-1 border border-brand "/>
          <input type="text" name="email" placeholder="Email" class="bg-white rounded-full w-2/5  h-10 shadow-lg px-2 py-1 border border-brand "/>
        </div>
        <div class="flex justify-between w-full">
          <input type="text" name="address" placeholder="Address" class="bg-white rounded-full w-2/5  h-10 shadow-lg px-2 py-1 border border-brand "/>
          <input type="text" name="product_name_or_loan_amount" placeholder="Product Name or Loan Amount" class="bg-white rounded-full w-2/5  h-10 shadow-lg px-2 py-1 border border-brand "/>
        </div>
        <div class="flex justify-between w-full">
               <select  name="phone_number" placeholder="Phone Number" class="bg-white rounded-full w-2/5 text-gray-400  h-10 shadow-lg px-2 py-1 border border-brand ">
          <option value="default" class="text-gray-500" disabled selected>Services you are interested in?</option>
        <option class="text-gray-600 text-sm" value="rent">ALtara Rent</option>
        <option class="text-gray-600 text-sm" value="e_loan">Altara E-loan</option>
        <option class="text-gray-600 text-sm" value="product">Altara Product</option>
          </select>
               <select  name="phone_number" placeholder="Phone Number" class="bg-white rounded-full w-2/5 text-gray-400  h-10 shadow-lg px-2 py-1 border border-brand ">
          <option value="default" class="text-gray-500" disabled selected>Services you are interested in?</option>
        <option class="text-gray-600 text-sm" value="salaried">Salaried</option>
        <option class="text-gray-600 text-sm" value="non_salaried">Non-Salaried</option>
          </select>
        </div>
        <button type="submit" class="bg-brand px-7 py-3 mx-0 rounded-full font-black absolute right-12 justify-self-end text-white text-sm hover:shadow-lg">
        Create Account
      </button>
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