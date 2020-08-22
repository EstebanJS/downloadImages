const saveImg = require('./download');
const fetch = require('node-fetch');
const API_KEY = "H3u-coRe1tjeRSj20bywmuiFSH21nXsTNeME31BgatA"
const query = "dog"

const callApi = async () => {
  let page = 1
  let on = true
  let images = 0;
  while (on) {
    const URL = `https://api.unsplash.com/search/photos?client_id=${API_KEY}&page=${page}&query=${query}`
    const res = await fetch(URL)
    const response = await res.json()
    const { total_pages, results,total } = response
    const links = results.map(item => item.urls.regular)
    links.forEach((link) => {
      images++
      saveImg.download(link, `img-${images}.jpg`)
      console.log(`Imagenes descargadas:${images} Imagenes restantes:500 ⌛`)
    })
    page++
    if(images===500){
      on = false
    }
  }
  console.log('Descarga completa 😁')
}
callApi()

