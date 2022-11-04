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
        const cityCountry = new textElement('div', '', p).MakeElement()
        cityCountry.className = 'location'
        new textElement('span', this.city + ", ", cityCountry).MakeElement()
        new textElement('span', this.country, cityCountry).MakeElement()
        new textElement('span', this.tagline, p).MakeElement();
        new textElement('span', this.price + '€/jour', p).MakeElement();

        return article

    }

    getHeader() {
        const header = document.querySelector('.photograph-header');
        const article = document.createElement('article');
        article.className = 'photographer_header-info';
        header.appendChild(article);
        const button = document.getElementById('contact_photographer');
        console.log(article);
        article.parentElement.appendChild(button);
        new textElement('h2', this.name, article).MakeElement();
        new textElement('span', this.tagline, article).MakeElement();
        const headerImage = new image(this.portrait, '', header).MakeImage();
        headerImage.className = 'header_image';
        const infos = document.querySelector('.pricing__section');
        infos.innerHTML = this.price + '€ / jour';
        const formTitle = document.querySelector('.photographer__form');
        formTitle.innerHTML = this.name;

        return article
    }



}