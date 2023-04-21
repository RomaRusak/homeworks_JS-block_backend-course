document.head.innerHTML = `
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homework_eight</title>
    <script src="./script.js"></script>
`
function createElement (tagName, attributes, text) {
    let elem = document.createElement(`${tagName}`)

    const addAtributes = (elem, attributes) => {
        attributes.forEach(attr => {
            elem.setAttribute(attr[0], attr[1])
        })
        return elem
    }

    const addInnerText = (elem, text) => {
        elem.innerHTML = `${text}`
        return elem
    }
    
    switch (arguments.length) {
        case 1:
            return elem
        case 2:
            return Array.isArray(arguments[1])
            ? addAtributes(elem, attributes)
            : addInnerText(elem, attributes)        
        case 3:
            elem = addAtributes(elem, attributes)
            return addInnerText(elem, text)
    }
}

const style = document.createElement('style')
document.querySelector('head').append(style)

style.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    max-width: 1280px;
    margin: 0 auto;
    overflow: hidden;
    min-height: 100vh;
    height: 100%;
}

.main {
    min-height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.main-title-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 55px;
}

.main-title {
    color: #212121;
    font-size: 36px;
    line-height: 48px;
    font-weight: 400;
    font-family: 'Arvo', serif;
}

.tagline {
    font-size: 14px;
    line-height: 26px;
    color: #9FA3A7;
    font-family: 'Open Sans', sans-serif;
}

.promo-wrapper {
    display: flex;
    border:  1px solid #E8E9ED;
    border-radius: 5px;
}

.promo-freelancer,
.promo-studio {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 81px 0 75px;
}

.promo-studio {
    background-color: #8F75BE;
}

.promo-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2.4px;
    margin-bottom: 19px;
}

.promo-freelacner-title {
    color: #9FA3A7;
}

.promo-studio-title {
    color: #FFC80A;
}

.promo-description {
    font-family: 'Arvo', serif;
    font-size: 36px;
    line-height: 46px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 25px;
}

.promo-freelancer-description {
    color: #212121;
}

.promo-studio-description {
    color: #FFFFFF;
}

.promo-tagline {
    text-align: center;
    margin-bottom: 52px;
}

.promo-studio-description + .promo-tagline {
    color: #FFFFFF;
}

.promo-button {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2.4px;
    padding: 18px 28px;
    border: 3px solid #FFC80A;
    background-color: inherit;
    cursor: pointer;
    border-radius: 32px;
    font-weight: 700;
}

.promo-studio > .promo-button {
    color: #FFFFFF;
}

.promo-item {
    transition: all .3s ease-in-out;
}

.active {
    filter: grayscale(50%);
}
`

const container = createElement('div', [['class', 'container']])
const main = createElement('main', [['class', 'main']])
const mainTitleWrapper = createElement('div', [['class', 'main-title-wrapper']], )
const mainTitle = createElement('h1', [['class', 'main-title']], 'Choose Your Option')
const tagline = createElement('p', [['class', 'tagline']], 'But I must explain to you how all this mistaken idea of denouncing ')

const promoWrapper = createElement('div', [['class','promo-wrapper']])
const promoFreelancer = createElement('div', [['class', 'promo-freelancer promo-item']])
const promoStudio = createElement('div', [['class', 'promo-studio promo-item']])
const promoFreelancerTitle = createElement('h3', [['class', 'promo-freelacner-title promo-title']], 'FREELANCER')
const promoStudioTitle = createElement('h3', [['class', 'promo-studio-title promo-title']], 'STUDIO')
const promoFreelancerDescription = createElement('p', [['class', 'promo-freelancer-description promo-description']], 'Initially<br/> designed to ')
const promoStudioDescription = createElement('p', [['class', 'promo-studio-description promo-description']], 'Initially<br/> designed to ')
const promoTagline = createElement('p', [['class', 'tagline promo-tagline']], 'But I must explain to you how all this<br/> mistaken idea of denouncing ')
const promoTaglineClone = promoTagline.cloneNode(true)
const promoFreelancerButton = createElement('button', [['class', 'promo-freelancer-button promo-button']],'START HERE')
const promoStudioButton = createElement('button', [['class', 'promo-studio-button promo-button']],'START HERE')

document.body.append(container)
container.append(main)
main.append(mainTitleWrapper, promoWrapper)
mainTitleWrapper.append(mainTitle, tagline)
promoWrapper.append(promoFreelancer, promoStudio)
promoFreelancer.append(promoFreelancerTitle, promoFreelancerDescription, promoTagline, promoFreelancerButton)
promoStudio.append(promoStudioTitle, promoStudioDescription, promoTaglineClone, promoStudioButton)

document.querySelectorAll('.promo-button').forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        e.target.closest('.promo-item').classList.add('active')
    })
    item.addEventListener('mouseleave', (e) => {
        e.target.closest('.promo-item').classList.remove('active')
    })
})
