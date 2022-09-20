<template>
    <div class="bg-white w-4/5 shadow-lg rounded-md p-2 flex flex-col items-stretch justify-center cursor-pointer"  @mouseenter="hover = true"
    @mouseleave="hover = false" >
            <img :src="image">
            <p class="mt-3">{{name}}</p>
            <div v-if="hover">
                helllooooo
            </div>
          </div>
</template>
<script>
    export default{
        data(){
            return{
                hover:false
            }
        },
       props: ["name", "image", ],
    }
</script>