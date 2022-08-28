class indexPage {
    constructor() {
        this.urlData = '../data/photographers.json'
        this.section = document.querySelector('.photographer_section')
    }

    async init() {
        const photographers = await new photographerDatas(this.urlData).getPhotographers()
        photographers.forEach((photographer) => {
            const photographerCardDom = new photographerFactory(photographer).getUserCardDOM()
            this.section.appendChild(photographerCardDom)
        })

        console.log(photographers)

    }

}

const page = new indexPage()
page.init()