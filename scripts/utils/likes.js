class likesCounter {
    constructor(photos) {
        this.totalLikesSection = document.querySelector('.photo-total-likes')
        this.userLikes = 0
        this.photosLikes = 0
        this.userTotalPhotosLikes = this.userLikes + this.photosLikes
        this.photos = photos
    }

    displayLikes() {
        this.userTotalPhotosLikes = this.userLikes + this.photosLikes;
        console.log('likes update: ' + this.photoTotalLike)
        this.totalLikesSection.innerHTML = this.userTotalPhotosLikes + '<i class="fa-solid fa-heart"  aria-label="likes"></i>';

    }

    displayTotalLikes() {
        this.photos.forEach((photo) => {
            this.photosLikes += photo.likes
        })
        this.displayLikes()
    }

    updateLikes(action) {
        if (action === 'like') {
            this.userlikes++;
            this.displayLikes();
            console.log('Update total likes (like):' + this.photoTotalLike)
        } else if (action === 'dislike') {
            this.userLikes--;
            this.displayLikes();
            console.log('Update total likes (dislike):' + this.photoTotalLike)
        }


    }

}