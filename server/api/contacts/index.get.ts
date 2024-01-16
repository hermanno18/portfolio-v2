
export default defineEventHandler(async (event) => {
  // handle GET requests for the `api/foo` endpoint
  const API_URL = useRuntimeConfig(event).apiBaseUrl
  const contactsEndpoint="contacts"
  let contacts: unknown
  console.log('on est ici')
  await $fetch(`${API_URL}/${contactsEndpoint}`).then((res)=>{
    contacts = res
  })
  .catch((e)=>{
    console.log('on est ici')
    console.error(e)
  })
  return contacts
})
