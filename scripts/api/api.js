class Api {
    /*chemin des datas*/
    constructor(url) {
        this.url = url;
    }

    async getData() {
        return fetch(this.url)
            .then((res) => res.json())
            .then((res => {
                return res;
            }))
            .catch((err) => {
                throw new Error("Erreur dans le chemin", err);
            })
    }

};

class photographerDatas extends Api {
    async getPhotographers() {
        const data = await this.getData();
        return data.photographers
    }

    async getPhotos() {
        const data = await this.getData();
        return data.media
    }
}