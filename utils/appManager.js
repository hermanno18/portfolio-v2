export const toggleTheme = (theme=null) => {
  if(process.client) {
    if(!theme) theme = !isWhiteTheme() ? 'winter' : 'myDark'
    const body = document.querySelector("html")
    localStorage.setItem('hermann-portfolio-theme', theme)
    body?.setAttribute('data-theme', theme)
    window.dispatchEvent(new Event('storage'))
  }
}

export const isWhiteTheme = () => {
  if(process.client) {
    return localStorage.getItem('hermann-portfolio-theme') === 'winter'
  }
  return false
}
