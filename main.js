const bodyElement = document.querySelector('body')        
const button = document.createElement('button')
const buttonInfo = document.createTextNode('REMOVE')
const mainElement = document.createElement('main')
const img = document.createElement('img')

bodyElement.append(mainElement)
bodyElement.append(button)
button.append(buttonInfo)
mainElement.append(img)
img.src = 'https://www.designnews.com/sites/default/files/Design%20News/P90301922_highRes_bmw-i8-roadster-04-2.jpg' 

img.style.width = 500 + 'px'

button.addEventListener('click', function () {
    mainElement.remove()
})

const linkElement = document.createElement('a')
const linkName = document.createTextNode('Nice cars')

linkElement.append(linkName)
linkElement.title = 'link to Nice cars'
linkElement.href = 'https://www.google.com/search?q=nice+cars&rlz=1C1ASVC_enUS891US892&oq=Nice+car&aqs=chrome.0.0j69i57j0l4j46j0l3.5712j1j8&sourceid=chrome&ie=UTF-8'
mainElement.append(linkElement)
