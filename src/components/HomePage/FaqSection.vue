<template>
  <div class="h-fit bg-blue-50 py-16 md:px-24 px-3">
    <h1
      class="
        text-brand text-lg
        md:text-5xl
        font-semibold
        md:font-black
        text-center
        w-full
      "
    >
      Let us answer your questions
    </h1>
    <div class="flex flex-col md:flex-row items-center">
      <div class="w-full md:w-1/2">
        <img src="../../assets/images/faq.png" />
      </div>
      <div class="w-full md:w-1/2 md:px-0 px-3">
        <div
          class="bg-blue-100 text-brand font-bold shadow-lg p-3 rounded my-1"
          v-for="faq in faqs"
          :key="faq.id"
        >
          <Accordion :title="faq.question">
            <div class="pt-6 mt-1 text-gray-800">
              <p>
                {{ faq.answer }}
              </p>
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from "./Accordion.vue";
export default {
  components: {
    Accordion,
  },
  data() {
    return {
      faqs: [
        {
          id: 1,
          question: "How do I go about getting a product or loan?",
          answer: "You can fill in the enquiry form online and an agent will reach out to you. Next steps will involve getting your KYC documents, registering on our system speedy verification and you can pick up the product at our closest branch near you. If its a cash loan loan will be disbursed to you within 48 hours of passed verification.",
        },
        {
          id: 2,
          question: "What type of customers do Altara serve?",
          answer: "Are there restrictions on what I can buy or the amount I can loan? We have calculators and approval criteria tailored to suit individual's earning capacity.",
        },
        {
          id: 3,
          question: "Are there restrictions on what I can buy or the amount I can loan?",
          answer: "We have calculators and approval criteria tailored to suit individual's earning capacity.",
        },
        {
          id: 4,
          question: "Where is Altara Located?",
          answer: "We currently have several branches across Oyo and Kware including major cities such as Ibadan, Ogbomosho & Ilorin. We are growing quickly and expanding to more communities near you.",
        },

      ],
    };
  },

};
</script>

<style>
</style>