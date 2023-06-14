<template>
  <div>
    <div class="">
      <div
        class="items-center h-fit md:h-56 flex md:flex-row flex-col mt-10 bg-gray-50 lg:mx-36 md:mx-8 mx-3 md:mb-10 mb-3"
      >
        <div class="md:w-1/3 w-full " >
          <img src="../../assets/images/approve.jpg" class="h-56 w-full" />
        </div>
        <div class="flex flex-col p-8 md:px-10 md:w-2/3 w-full">
          <p
            class="md:text-4xl text-2xl text-black tracking-wider font-semibold text-center"
          >
            <span class="text-brand">92%</span> of applicants gets approved <!-- remove cashloan for a
             loan or  products -->.
          </p>
          <div class="mt-6 flex justify-center">
            <router-link
              class="cursor-pointer"
              :to="{ name: 'home', hash: '#contact' }"
            >
              <button
                class="bg-brand text-white rounded px-5 py-2 hover:shadow-lg hover:bg-transparent border hover:border-2 hover:border-brand hover:text-brand text-sm md:text-base"
              >
                Start Now
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
