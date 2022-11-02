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
            this.userLikes++
                console.log('users 2: ' + this.userLikes)
            this.displayLikes()
                //console.log('Update total likes (like):' + this.photoTotalLike)
        } else if (action === 'dislike') {
            this.userLikes--;
            console.log('userDislike: ' + this.userLikes)
            this.displayLikes();
            //console.log('Update total likes (dislike):' + this.photoTotalLike)
        }


    }

}