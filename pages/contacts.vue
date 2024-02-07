<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

useHead({
  title: t('contact.title', { name: t('name') }),
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})
definePageMeta({
  title: 'contact.trans-title',
  description: 'contact.desc',
});

const { data, pending, error, refresh } = await useAsyncData(
  'contacts-list',
  () => $fetch(`/api/contacts/`)
)

const contacts = data.value?.filter(e => !isContactSocial(e)) || []
const socials = data.value?.filter(e => isContactSocial(e)) || []

const isSending = ref(false)
const name = ref(null)
const email = ref(null)
const message = ref(null)
const status = ref (null)
const sendEmail = () => {
  isSending.value = true

  $fetch("https://api.web3forms.com/submit", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      access_key: "e709da3d-4111-405a-a7db-a7540a834ea3",
      name: name.value,
      email: email.value,
      message: message.value,
    })
  }).then(res => {
    isSending.value = false
    status.value = "success"
  })
    .catch(err => {
      isSending.value = false
      status.value = "err"
    })
}
</script>

<template>
  <div class="w-full h-full py-10 flex items-center justify-center">
    <div v-if="!error" class="w-[70%]">
      <div class="items-center flex justify-center">
        <div class="avatar m-auto">
          <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="/img/profil.jpg" />
          </div>
        </div>
      </div>
      <div class="divider"><span class="text-base text-primary capitalize">{{ $t('contact.title', { name: t('me') }) }}
        </span></div>
      <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20 ">
        <form @submit.prevent="sendEmail" class=" space-y-6">
          <label class="form-control w-full max-w-md mx-auto">
            <input type="text" :placeholder="$t('contact.form.name')" required v-model="name"
              class="input input-bordered focus:outline-primary focus:outline-1 focus:border-secondary w-full" />
          </label>
          <label class="form-control w-full max-w-md mx-auto">
            <input type="text" :placeholder="$t('contact.form.email')" required v-model="email"
              class="input input-bordered w-full focus:outline-primary focus:outline-1 focus:border-secondary" />
          </label>
          <label class="form-control max-w-md mx-auto">
            <textarea class="textarea textarea-bordered h-24 focus:outline-primary focus:outline-1 focus:border-secondary"
              required v-model="message" :placeholder="$t('contact.form.message')"></textarea>
          </label>
          <div class="max-w-md mx-auto">
            <button  :disabled="isSending"
              class="group border border-white bg-white hover:bg-transparent hover:border-primary overflow-hidden flex gap-3 hover:gap-0 p-2 rounded-lg hover:rounded-full items-center cursor-pointer transition-all duration-500 ease-in-out w-[200px] ">
              <div
                class="bg-white  group-hover:flex-1  group-hover:bg-primary transition-all duration-500 ease-in-out flex items-center justify-center p-2 rounded-full ">
                  <svg v-if="!isSending" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-2xl group-hover:rotate-[360deg] duration-300 text-base-100 group-hover:text-white" id="Capa_1" 
                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 162.412 162.412" xml:space="preserve">
                    <g>
                      <path class=" fill-default group-hover:fill-white " d="M162.412,81.206L0,0.534L46.106,80.58c-0.042,0.209-0.125,0.406-0.125,0.627
                      c0,0.221,0.084,0.418,0.125,0.627L0,161.878L162.412,81.206z M51.637,84.19h91.353L15.025,147.755L51.637,84.19z M142.99,78.223
                      H51.637L15.025,14.658L142.99,78.223z" />
                    </g>
                  </svg>
                  <svg v-else class="h-5 w-5 animate-spin fill-primary group-hover:fill-white" version="1.1" id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26.349 26.35"
                    xml:space="preserve">
                    <g>
                      <g>
                        <circle cx="13.792" cy="3.082" r="3.082" />
                        <circle cx="13.792" cy="24.501" r="1.849" />
                        <circle cx="6.219" cy="6.218" r="2.774" />
                        <circle cx="21.365" cy="21.363" r="1.541" />
                        <circle cx="3.082" cy="13.792" r="2.465" />
                        <circle cx="24.501" cy="13.791" r="1.232" />
                        <path d="M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05
          C6.902,18.996,5.537,18.988,4.694,19.84z" />
                        <circle cx="21.364" cy="6.218" r="0.924" />
                      </g>
                    </g>
                  </svg>
              </div>
              <div class=" w-0 group-hover:opacity-0 transition-all duration-500 ease-in-out flex flex-col">
                <span class="text-lg text-gray-800">{{ $t('contact.form.submit') }}</span>
              </div>
            </button>
          </div>
          <div class="mx-auto max-w-md p-2 border text-sm border-success text-success" v-if="status=='success'">{{ $t('contact.form.success') }}</div>
          <div class="mx-auto max-w-md p-2 border text-sm border-error text-error" v-if="status=='err'"> {{ $t('contact.form.error') }}</div>
        </form>
        <div>
          <div class="w-full flex flex-wrap gap-y-8 items-center justify-around  ">
            <a :href="contact.href" target="_blank" v-for="contact in contacts"
              class="group border border-white hover:border-primary overflow-hidden flex gap-3 hover:gap-0 p-2 rounded-full items-center cursor-pointer transition-all duration-500 ease-in-out w-[250px] ">
              <div
                class="bg-white  group-hover:flex-1  group-hover:bg-primary transition-all duration-500 ease-in-out flex items-center justify-center p-2 rounded-full ">
                <Icon :name="contact.icon"
                  class="text-2xl group-hover:rotate-[360deg] duration-300 text-base-100 group-hover:text-white" />
              </div>
              <div class=" w-0 group-hover:opacity-0 transition-all duration-500 ease-in-out flex flex-col">
                <span class="text-lg ">{{ $t(contact.title) }}</span>
                <span class="text-xs">{{ contact.value }}</span>
              </div>
            </a>
          </div>
          <div class="mt-20">
            <p class="text-base text-center ">{{ $t('contact.follow-me') }}</p>
            <div class="text-center mt-5 gap-4 flex justify-center flex-wrap items-center  ">
              <a :href="social.link" target="_blank" :title="social.title" v-for="social in socials"
                class="group bg-white bg-opacity-80 w-12 aspect-square rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-100  transition-all duration-500 ease-in-out">
                <Icon :name="social.icon"
                  class="text-2xl group-hover:rotate-[360deg] group-hover:text-3xl text-base-100 group-hover:text-primary transition-all duration-500 ease-in-out" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <GenericError></GenericError>
    </div>
  </div>
</template>

