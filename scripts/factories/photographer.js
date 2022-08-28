class photographerFactory {
    constructor(data) {
        this.name = data.name;
        this.city = data.city;
        this.country = data.country;
        this.tagline = data.tagline;
        this.price = data.price;
        this.portrait = `assets/photographers/${data.portrait}`;
        this.link = `photographer.html?id=${data.id}`
    }


    getUserCardDOM() {


        const article = document.createElement('article')
        article.className = 'photographer__card'
        const a = new Link(this.link, article).makeLink()
        new image(this.portrait, '', a).MakeImage()
        new textElement('h2', this.name, a).MakeElement()
        const p = new textElement('p', '', article).MakeElement()
        new textElement('span', this.city, p).MakeElement()
        new textElement('span', this.tagline, p).MakeElement();
        new textElement('span', this.price + '€/jour', p).MakeElement();

        return article

    }

}