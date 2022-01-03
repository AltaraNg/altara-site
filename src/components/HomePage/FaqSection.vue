<template>
  <div class="h-fit  bg-blue-50 py-16 px-24">
      <h1 class="text-brand text-lg md:text-5xl font-semibold md:font-black text-center w-full">Let us answer your questions</h1>
      <div class="flex flex-col md:flex-row items-center">
          <div class="w-full md:w-1/2">
            <img src="../../assets/images/faq.png"/>
          </div>
          <div class="w-full md:w-1/2">
          <div class="bg-blue-100 text-brand font-bold  shadow-lg  p-3 rounded">
              <div class="flex justify-between">
              <p>Where can I do something?</p>
              <close @click="toggle" :class="clicked ? 'rotate-90' : 'animate-spin'" class=""/>
            </div>
            <div class="pt-6 mt-1 " :class="clicked ? 'block' : 'hidden'">
                <p >
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel. 
              </p>
            </div>
               
          </div>
            
          </div>
      </div>
  </div>
</template>

<script>
import close from '../../assets/svgs/close.vue'
export default {
    components:{
        close
    },
    data(){
        return{
            clicked: false,
            faq:[
                {
                    question: 'Where can I do something?',
                    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel. '
                },
                {
                    question: 'Where can I do something?',
                    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel. '
                },
                {
                    question: 'Where can I do something?',
                    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel. '
                },
                {
                    question: 'Where can I do something?',
                    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel. '
                },
                {
                    question: 'Where can I do something?',
                    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel. '
                },
            ]
        }
    },
    methods:{
        toggle(){
            this.clicked = !this.clicked
        }
    }

}
</script>

<style>

</style>