export default defineEventHandler(async (event) => {
  // handle GET requests for the `api/foo` endpoint
  const API_URL = useRuntimeConfig(event).apiBaseUrl
  const projectEndPoint="projects"
  let projects: unknown
  await $fetch(`${API_URL}/${projectEndPoint}`).then((res)=>{
    projects = res
  })
  .catch(()=>{

  })
  return projects
})
