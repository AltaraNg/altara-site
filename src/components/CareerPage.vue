<template>
  <div class="relative">
    <div
      class="bg-brand pb-16 flex md:flex-row banner px-12 flex-col w-full md:items-center md:justify-between"
    >
      <div class="text-white md:w-1/2 w-full md:py-0 py-8">
        <p
          class="font-black md:text-7xl text-4xl text-center md:text-left tracking-wider leading-10"
        >
          Join Our Team
        </p>
        <p
          class="font-medium md:text-lg text-sm text-center md:text-left tracking-wide md:leading-10 leading-7 md:pt-7 pt-4"
        >
          Here at Altara we’re dedicated to creating an environment that fosters
          a sense of development and innovation where amazing people like you
          can grow your career while providing services that matter to those
          that need them the most. Start your journey with us by applying below.
        </p>
      </div>
      <div
        class="text-white md:w-1/2 w-full flex md:justify-end justify-center"
      >
        <img src="../assets/images/careers.png" class="w-10/12" />
      </div>
    </div>
    <div
      class="bg-white flex justify-start items-center md:px-12 px-5 form w-full"
    >
      <div
        class="flex flex-col items-center md:w-7/12 w-full py-12 md:px-12 px-5 z-40 bg-white shadow my-10"
      >
        <p class="text-brand md:text-4xl text-2xl font-black mb-3">
          Get Started
        </p>
        <p style="color: #02273e" class="text-center text-sm">
          Please complete the form below to apply a position with us
        </p>
        <form
          ref="fileform"
          class="space-y-8 mt-6 w-full flex flex-col items-center"
          @submit.prevent="sendEmail()"
          method="POST"
        >
          <div
            class="flex md:flex-row flex-col justify-evenly w-full space-y-5 md:space-y-0"
          >
            <div class="flex flex-col w-full">
              <label for="full_name" class="mb-0.5 ml-2 text-sm"
                >Full Name: *</label
              >
              <input
                type="text"
                name="full_name"
                v-model="full_name"
                class="mt-1 block w-full rounded-md border focus:outline-none border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-10 text-sm shadow-sm px-2 py-1"
              />
            </div>
          </div>
          <div
            class="flex md:flex-row flex-col justify-evenly items-center w-full space-y-5 md:space-y-0"
          >
            <div class="flex flex-col w-full">
              <label for="email_address" class="mb-0.5 ml-2 text-sm"
                >Email Address: *</label
              >
              <input
                type="text"
                name="email_address"
                v-model="email_address"
                class="mt-1 block w-full rounded-md border focus:outline-none border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-10 text-sm shadow-sm px-2 py-1"
              />
            </div>
          </div>
          <div
            class="flex md:flex-row flex-col justify-between items-center w-full space-y-5 md:space-y-0"
          >
            <div class="flex flex-col md:w-1/2 w-full md:mr-3 mr-0">
              <label for="phone_number" class="mb-0.5 ml-2 text-sm"
                >Phone Number: *</label
              >
              <input
                type="tel"
                maxlength="11"
                name="phone_number"
                v-model="phone_number"
                class="mt-1 block w-full rounded-md border focus:outline-none border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-10 text-sm shadow-sm px-2 py-1"
              />
            </div>
            <div class="flex flex-col md:w-1/2 w-full">
              <label for="phone_number" class="mb-0.5 ml-2 text-sm"
                >Roles you are interested in: *</label
              >
              <select
                name="roles"
                v-model="roles"
                class="mt-1 block w-full rounded-md border focus:outline-none border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-10 text-sm shadow-sm px-2 py-1"
              >
                <option value="default" class disabled>Roles</option>
                <option class="text-sm" value="Direct Sales Agent">
                  Direct Sales Agent
                </option>
                <option class="text-sm" value="Floor Sales Agent">
                  Floor Sales Agent
                </option>
                <option
                  class="text-sm"
                  value="Verification,Collection and Recovery Agent"
                >
                  Verification,Collection and Recovery Agent
                </option>
                <option class="text-sm" value="Freelance Sales Agent">
                  Freelance Sales Agent
                </option>
                <option class="text-sm" value="Rent Agent">Rent Agent</option>
                <option class="text-sm" value="Inventory Officer">
                  Inventory Officer
                </option>
              </select>
            </div>
          </div>
          <div
            class="flex md:flex-row flex-col justify-between items-center w-full space-y-5 md:space-y-0"
          >
            <div class="flex flex-col md:w-1/2 w-full md:mr-3 mr-0">
              <label for="location" class="mb-0.5 ml-2 text-sm"
                >Location: *</label
              >
              <input
                type="tel"
                maxlength="11"
                name="location"
                v-model="location"
                class="mt-1 block w-full rounded-md border focus:outline-none border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-10 text-sm shadow-sm px-2 py-1"
              />
            </div>
            <div class="flex flex-col md:w-1/2 w-full">
              <label for="resume" class="mb-0.5 ml-2 text-sm"
                >Upload Resume (pdf. docx): *</label
              >
              <input
                type="file"
                ref="fileInput"
                accept="application/pdf, application/msword, .doc, .docx,.ppt, .pptx,.txt,.pdf"
                class="mt-1 block w-full rounded-md border focus:outline-none border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-10 text-sm shadow-sm px-2 py-1"
                @change="onFilePicked"
              />
            </div>
          </div>
          <div class="flex flex-col md:w-2/5 md:my-6 w-full md:pt-10">
            <button
              type="submit"
              class="bg-brand flex items-center justify-center md:px-7 px-4 md:py-3 py-2 mx-0 rounded-md font-black text-white text-sm hover:shadow-lg"
            >
              <loaderVue v-if="loader" />
              <p v-else>Submit</p>
            </button>
          </div>
        </form>
      </div>
      <Modal v-if="form_sent" title="Job Application Successfull!">
        <template v-slot:svg>
          <img src="../assets/images/success.png" class="w-28 h-28" />
        </template>
        <template v-slot:text>
          <p class="text-center">We will reach out to you shortly</p>
        </template>
      </Modal>
    </div>
    <img
      src="../assets/images/pattern1.png"
      class="absolute top-0 left-0 z-100"
      style="height: 600px"
    />
    <img
      src="../assets/images/pattern2.png"
      class="absolute bottom-0 right-0 z-100 opacity-50"
      style="height: 600px"
    />
  </div>
</template>
<script>
import Modal from "../components/general/modal.vue";
import { Apiservice } from "../services/apiService";
import loaderVue from "../assets/svgs/loader.vue";
import AWSS3UploadAshClient from "aws-s3-upload-ash";

export default {
  components: {
    Modal,
    loaderVue,
  },
  data() {
    return {
      loader: null,
      formURL: process.env.VUE_APP_URL_JOBFORM_STAGING,
      full_name: "",
      email_address: "",
      phone_number: "",
      roles: "",
      location: "",
      resume: "",
      form_sent: false,
      fileSelected:null,
      event: null,
       config: {
        bucketName: "Altara-one",
        region: "us-east-1",
        accessKeyId: 'AKIA2AQ2Z7MDKZ4HDMOY',
        secretAccessKey: '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',
        s3Url: "https://s3.eu-west-2.amazonaws.com/altara-one",
      },
    };
  },
  methods: {
    // onFilePicked(event) {
    //   const files = event.target.files;
    //   const fileReader = new FileReader();
    //   fileReader.addEventListener("load", () => {
    //     this.resume = fileReader.result;
    //   });
    //   fileReader.readAsDataURL(files[0]);
    //   this.event = files[0].name;
    // },
      onFilePicked: function (event) {
      console.log("fileSelected", event.target.files[0]);
      this.fileSelected = event.target.files[0];
    },
    handleSendFile: function () {
      console.log("send file", this.fileSelected);
      let S3CustomClient = new AWSS3UploadAshClient(this.config);
      console.log(S3CustomClient, 'S3CustomClient');
      S3CustomClient.uploadFile(
        this.fileSelected,
        this.fileSelected.type,
        undefined,
        this.fileSelected.name,
        undefined
      )
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    },

    validate() {
      if (
        this.phone_number.toString().length != 11 ||
        !this.full_name ||
        !this.email_address ||
        !this.roles ||
        !this.location ||
        !this.resume
      ) {
        return true;
      } else {
        return false;
      }
    },

    sendEmail() {
      this.handleSendFile();
      this.loader = true;
      const api = new Apiservice();
      const data = {
        full_name: this.full_name,
        email_address: this.email_address,
        phone_number: this.phone_number,
        roles: this.roles,
        location: this.location,
        date: new Date().toLocaleString(),
        resume: this.resume,
      };
      api
        .post(this.formURL, data, true)
        .then(() => {
          this.$refs.fileform.reset();
          this.full_name = "";
          this.phone_number = "";
          this.email_address = "";
          this.roles = "";
          this.location = "";
          this.form_sent = true;
          this.loader = false;
          this.$router.push({ path: "/careers" });
        })
        .catch((error) => {
          if (error) {
            this.$refs.fileform.reset();
            this.$router.push({ path: "/careers" });
            this.loader = false;
            this.form_sent = true;
            throw error;
          }
        });
    },
  },
};
</script>
<style>
.banner {
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  /* change the calc height to a percentage height to get alternate responsive behavior*/
}

.shadow {
  box-shadow: 20px 20px 50px 30px rgba(7, 74, 116, 0.3);
  border-radius: 15px;
}
section {
  margin-top: -5vw;
}
button:disabled {
  background-color: #c2d2dd;
}
</style>
