<template>
    <div class="cursor-pointer">
        <div class="flex justify-between" @click="isOpen = !isOpen" >
    <p>{{title }}</p>
    <close/>
  </div>
  <div :class="isOpen ? 'block' : 'hidden'"> 
        <slot></slot>
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
            isOpen: false
        }
    },
    name: 'Accordion',
    props:{
        title: String
    }
};
</script>

<style>
</style>