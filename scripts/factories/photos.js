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

    }

    getCard() {
        const a = new Link('#', this.article).makeLink();
        a.setAttribute('aria-label', this.title + ', closeup view');
        //vérifier si le fichier est une image ou une vidéo
        if (this.type === 'image') {
            new Image(this.url, this.title, a).makeImage();
        } else if (this.type === 'video') {
            new Video(this.url, a).makeVideo();
        }
        const p = new textElement('p', '', this.article).MakeElement();
        new textElement('h2', this.title, p).MakeElement();

    }

}