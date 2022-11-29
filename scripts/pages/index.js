class indexPage {
    constructor() {
        this.urlData = '../data/photographers.json'
        this.section = document.querySelector('.photographer_section')
    }

    //récupération des données et retourner les cartes
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