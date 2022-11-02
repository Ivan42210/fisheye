class photosFactory {
    constructor(data, counter) {
        this.data = data
        this.id = data.id
        this.photographerId = data.photographerId
        this.title = data.title
        this.likes = data.likes
        this.type = data.type
        this.url = data.url
        this.article = document.createElement('article')
        this.article.className = 'photo-card'
        this.article.setAttribute('id', 'photo' + this.id)
        this.counter = counter
        this.sortBySection = document.getElementById('selector__section')

    }

    lightboxModal(link) {
        const that = this
        link.addEventListener('click', function() {
            console.log(link)
            displayLightbox(that.id)
        })
    }

    handleLikes() {
        const that = this
        this.article.querySelector('.photo_likes').addEventListener('click', function() {
            event.preventDefault()
            if (this.classList.contains('liked')) {
                this.classList.remove('liked')
                this.innerHTML = that.likes + ' <i class="fa-solid fa-heart" aria-label="likes"></i>'
                that.counter.updateLikes('dislike')
                console.log('update likes: ' + that.counter)
            } else {
                this.classList.add('liked')
                const newLikes = that.likes + 1
                this.innerHTML = newLikes + ' <i class="fa-solid fa-heart" aria-label="likes"></i>'

                that.counter.updateLikes('like')
                console.log('update likes: ' + that.counter)
            }
        })
    }






    getCard() {
        const a = new Link('#', this.article).makeLink()
        a.setAttribute('aria-label', this.title + ',closeup view')
        a.setAttribute('id', 'photo' + this.id)
        console.log(this.type)
            //vérifier le fichier si umage ou vidéo
        if (this.type === 'image') {
            new image(this.url, this.title, a).MakeImage()
        } else if (this.type === 'video') {
            new Video(this.url, a).makeVideo()
        }

        const p = new textElement('p', '', this.article).MakeElement()
        p.className = "photo-card_info"
        new textElement('h2', this.title, p).MakeElement()
        const spanlike = new Link('#', p).makeLink()
        spanlike.innerHTML = this.likes + ' <i class="fa-solid fa-heart" aria-label="likes"></i>'
        spanlike.className = 'photo_likes'

        this.handleLikes()
        this.lightboxModal(a)
        return this.article
    }

}