<template>
 <div >
   <div class="my-10">
     <heading title="ACHIEVEMENTS"/>
     <div class="md:h-40 items-center justify-center md:justify-evenly space-y-16 md:space-y-0 py-12 md:py-28 h-fit flex md:flex-row flex-col bg-brand mt-10">
        <div class="text-white flex flex-col items-center">
          <p class="font-black md:text-5xl text-4xl leading-7 mb-2">>16,000</p>
          <p class="text-sm tracking-wider font-black ">Customers Served</p>
        </div>
                <div class="text-white flex flex-col items-center">
          <p class="font-black md:text-5xl text-4xl leading-7 mb-2">15 of 1768</p>
          <p class="text-sm tracking-wider font-black ">Communities</p>
        </div>
                        <div class="text-white flex flex-col items-center">
          <p class="font-black md:text-5xl text-4xl leading-7 mb-2">80,000+</p>
          <p class="text-sm tracking-wider font-black ">Lives Touched</p>
        </div>
     </div>
   </div>
   <div class="my-10 ">
     <heading title="OUR IMPACT"/>
     <div class="mt-20 mx-36 mb-16 md:mb-0 flex justify-between items-center md:flex-row flex-col space-y-16 md:space-y-0 ">
        <div class="md:h-96 h-64 md:w-96 w-64">
    <vue3-chart-js
        :id="doughnutChart1.id"
        :type="doughnutChart1.type"
        :data="doughnutChart1.data"
        @before-render="beforeRenderLogic"
    ></vue3-chart-js>
  </div>
   <div class="md:h-96 h-64 md:w-96 w-64">
    <vue3-chart-js
        :id="doughnutChart2.id"
        :type="doughnutChart2.type"
        :data="doughnutChart2.data"
        @before-render="beforeRenderLogic"
    ></vue3-chart-js>
  </div>
     </div>
          <div class="md:mt-36 mx-36 flex justify-between items-center md:flex-row flex-col space-y-16 md:space-y-0 ">
        <div class="md:h-96 h-64 md:w-96 w-64">
    <vue3-chart-js
        :id="doughnutChart3.id"
        :type="doughnutChart3.type"
        :data="doughnutChart3.data"
        @before-render="beforeRenderLogic"
    ></vue3-chart-js>
  </div>
   <div class="md:h-96 h-64 md:w-96 w-64">
    <vue3-chart-js
        :id="doughnutChart4.id"
        :type="doughnutChart4.type"
        :data="doughnutChart4.data"
        @before-render="beforeRenderLogic"
    ></vue3-chart-js>
  </div>
     </div>
   
   </div>
   <div class="mt-36 mb-16">
     <heading title="TESTIMONIALS"/>
   </div>
    
</div>
</template>

<script>
import heading from './general/heading.vue'
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'
export default {
  title: 'Impacts | Altara Credit Limited',
  components:{
    heading,Vue3ChartJs
  },
  data(){
    return{
      doughnutChart1:{
      id: 'doughnut',
      type: 'doughnut',
      data: {
        labels: ['Men', 'Women'],
        datasets: [
          {
            backgroundColor: [
              '#074A74',
              '#033e8a',
            ],
            data: [70, 30]
          }
        ]
      }
    },
     doughnutChart2:{
      id: 'doughnut',
      type: 'doughnut',
      data: {
        labels: ['Informal', 'Formal'],
        datasets: [
          {
            backgroundColor: [
              '#074A74',
              '#033e8a',
            ],
            data: [40, 60]
          }
        ]
      }
    },
     doughnutChart3:{
      id: 'doughnut',
      type: 'doughnut',
      data: {
        labels: ['Banked', 'Unbanked'],
        datasets: [
          {
            backgroundColor: [
              '#074A74',
              '#033e8a',
            ],
            data: [25, 75]
          }
        ]
      }
    },
     doughnutChart4:{
      id: 'doughnut',
      type: 'doughnut',
      data: {
        labels: ['Business', 'Personal'],
        datasets: [
          {
            backgroundColor: [
              '#074A74',
              '#033e8a',
            ],
            data: [35, 65]
          }
        ]
      }
    }
    }
  },
  methods:{
    beforeRenderLogic(e){
      console.log(e)
    }
  }

}
</script>

<style>

</style>