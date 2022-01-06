<template>
  <div class="relative  overflow-hidden">
      <slot></slot>
      <button class="absolute button next text-white bg-black rounded px-3 py-2 top-1/2 left-0" @click="next">Next</button>
      <button class="absolute button prev text-white bg-black rounded px-3 py-2 top-1/2 right-0" @click="prev">Previous</button>
  </div>
</template>

<script>
export default {
    methods:{
        next(){

        },
        prev(){
            
        }
    }
}
</script>

<style>
.button:active, button:hover{
    outline:none;
    cursor:pointer;  
}

</style>