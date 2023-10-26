export default defineEventHandler( async(event) => {

  const API_URL = useRuntimeConfig(event).apiBaseUrl
  const projectEndPoint="projects"
  let project : unknown
  await $fetch(`${API_URL}/${projectEndPoint}/${event.context?.params?.slug}`).then((res)=>{
    project = res
  })
  .catch(()=>{

  })
  return project
})
