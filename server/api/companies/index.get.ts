export default defineEventHandler( async (event) => {
  // await useStorage('db/companies').setItem('2', { ttile: 'yo mon titre' })
  // await useStorage('db/companies').setItem('3', { ttile: 'yo mon titre' })
  // await useStorage('db/projects').setItem('1', { ttile: 'yo mon titre' })
  // await useStorage('db/projects').setItem('2', { ttile: 'yo mon titre' })
  // await useStorage('projects').setItem('6', { ttile: 'yo mon titre' })

  const companiesKeys = await useStorage('db/companies').getKeys();
  console.log('les clés', companiesKeys)
  const datas = await useStorage("db/companies").getItems(companiesKeys)
  console.log('datas', datas)
  return new Promise((resolve) => {
    resolve(
      [
        {
          title: "projet 1",
          datas
        }
      ]
    )
  })
})