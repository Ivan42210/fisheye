class photographerFactory {
    constructor(data) {
        this.name = data.name;
        this.city = data.city;
        this.country = data.country;
        this.tagline = data.tagline;
        this.price = data.price;
        this.portrait = data.portrait;
    }


    getUserCardDOM() {


        const picture = `assets/photographers/${data.portrait}`;
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        const h2 = document.createElement('h2');
        h2.textContent = data.name;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }

}