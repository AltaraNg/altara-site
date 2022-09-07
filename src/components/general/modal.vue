<template>
      <div class="fixed z-50 justify-center items-center top-0  w-screen 
                  h-screen flex bg-black bg-opacity-40 overlay py-4 px-2" 
            :class="state ? 'block': 'hidden'"
            style="font-family: BRFirma"  ref="overlay" @click="clickOverlay">
        <div class="bg-gray-100 relative my-1/6 lg:px-8 md:px-5 px-3 pb-9 border rounded-md 
                    flex flex-col mx-3 lg:mx-auto lg:w-5/12 md:w-1/2 w-11/12 w-screen "
             style="max-height: 87vh;">
           
           <div class="flex items-center justify-center pt-8">
               <slot name="svg"></slot>
           </div>
            <div class="flex justify-center  items-center pt-0">
              <div>
                <h3 class="font-black lg:text-3xl  text-2xl text-brand uppercase text-center">{{title}}</h3> 
              </div>

                <span v-if="!hideCloseButton"
                      class="text-primary absolute right-5 top-5 text-xl font-semibold hover:text-black no-undeline cursor-pointer" 
                      @click='toggleModal'>&times;</span>
            </div>

            <div class="mt-4 flex flex-col h-auto overflow-y-scroll"> 
              <slot name="text"></slot>
               <!-- <p>Some text in the Modal.This will be mounted as a child element of the auto-generated  instead of somewhere inside the child tree of .</p>  -->
            </div>
            
        </div>
      </div>
</template>

<script>

export default {
  
  props:{
    title:{
      type: String, 
      default:"",
    },
    onClose:{
      type: Event,
      default:true
    },
    overlayClose:{
      type: Boolean,
      default:true
    },
    hideCloseButton:{
      type:Boolean,
      default: false
    }
  },
  data(){
      return {
        state: true  
      }
  },
  emits: ['close'],
  methods:{
      toggleModal(){
          this.state= false
          this.$emit('close')
          if (!this.state && this.onClose) this.onClose()
      },
      clickOverlay(event){
        let overlay = this.$refs.overlay
        if(event.target == overlay){
          //only toggle modal closure if user wants to modal to close when overlay is clicked
         if (this.overlayClose) this.toggleModal();
        }
      }
  },
}
</script>