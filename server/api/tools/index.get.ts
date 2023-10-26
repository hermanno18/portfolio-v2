export default defineEventHandler(async (event) => {
  // handle GET requests for the `api/foo` endpoint
  const API_URL = useRuntimeConfig(event).apiBaseUrl
  const projectEndPoint="tools"
  let tools: unknown
  await $fetch(`${API_URL}/${projectEndPoint}`).then((res)=>{
    tools = res
  })
  .catch(()=>{

  })
  return tools
})
