export default defineEventHandler( async(event) => {

  const API_URL = useRuntimeConfig(event).apiBaseUrl
  const companiesEndPoint="companies"
  let companies : unknown
  await $fetch(`${API_URL}/${companiesEndPoint}`).then((res)=>{
    companies = res
  })
  .catch(()=>{

  })
  return companies
})
