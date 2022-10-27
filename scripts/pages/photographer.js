//Mettre le code JavaScript lié à la page photographer.html
let allPhotos = [];

class photographerPage {
    constructor() {
        this.params = (new URL(document.location)).searchParams
        this.idPhotographer = this.params.get('id')
        this.dataURL = "../../data/photographers.json"
        this.header = document.querySelector('.photograph-header')
        this.section = document.querySelector('.photograph_section-pics')
    }


    async getPhotographer() {
        //Récupère les données du photographe parmis les données Json
        const Pdatas = await new photographerDatas(this.dataURL).getPhotographers()
        let dataPhotographers = Pdatas.find(p => p.id == this.idPhotographer)
        console.log(dataPhotographers)
        return dataPhotographers

    }

    async getPhotos() {
        const dataPhotos = await new photographerDatas(this.dataURL).getPhotos()
        console.log(dataPhotos)
        let photoData = dataPhotos.filter(p => p.photographerId == this.idPhotographer)
        return photoData
    }

    async displayData(photographer) {
        const photographModel = new photographerFactory(photographer)
        const usercardDom = photographModel.getHeader()
        this.header.appendChild(usercardDom)
    }

    async displayPhotoData(photos, counter) {
        photos.forEach((photo) => {
            const photoData = new Photo(photo)
            allPhotos.push(photoData)
            const photoCardDom = new photosFactory(photoData, counter).getCard()
            this.section.appendChild(photoCardDom)
        });

        await sortBy();
    }

    async init() {
        console.log(this.idPhotographer)
        const photographer = await this.getPhotographer()
        const photos = await this.getPhotos()
        let photosLikesCounter = new likesCounter(photos)
        photosLikesCounter.displayTotalLikes()
        this.displayPhotoData(photos, photosLikesCounter)
        this.displayData(photographer)


    }



}

const page = new photographerPage()
page.init()