let lastImage = ''
let click = 0



function displayLightbox(idPhoto) {

    const modal = document.getElementById('lightbox');
    const subModal = document.querySelector('.lightbox')
    const main = document.getElementById('main')
    console.log("l'element:" + main)
    const imgContainer = document.querySelector('.lightbox__container');
    const imgL = document.querySelector('.lightbox__img');
    const imgName = document.querySelector('.lightbox__title')
    const btnClose = document.getElementById('close');
    const lightboxPhotoData = allPhotos.find(p => p.id === idPhoto);
    console.log(idPhoto)
    console.log(lightboxPhotoData)
        //ouverture de la lightbox
    modal.style.display = 'flex';
    const mediaUrl = lightboxPhotoData.url;

    //si un titre, une vidéo ou une image est déjà chargée, pour l'effacer
    if (imgL) {
        imgL.remove();
        imgName.remove();
    } else {
        btnClose.focus();
    }

    //création de l'image ou vidéo de la lightbox avec son titre
    if (lightboxPhotoData.type === 'image') {
        const media = new image(mediaUrl, lightboxPhotoData.title, imgContainer).MakeImage();
        media.className = 'lightbox__img';
        const title = new textElement('h3', lightboxPhotoData.title, imgContainer).MakeElement();
        title.className = 'lightbox__title'
    } else if (lightboxPhotoData.type === 'video') {
        const video = new Video(mediaUrl, imgContainer).makeVideo();
        video.className = 'lightbox__img';
        const title = new textElement('h3', lightboxPhotoData.title, imgContainer).MakeElement();
        title.className = 'lightbox__title'
    }

    setupArrowLightbox(lightboxPhotoData);

    subModal.setAttribute('aria-hidden', 'false')
    main.setAttribute('aria-hidden', 'true')

}

function setupArrowLightbox(photoData) {
    const subModal = document.querySelector('.lightbox')
    const arrowLeft = document.getElementById('left-arrow');
    const arrowRight = document.getElementById('right-arrow');
    const imgPosition = allPhotos.indexOf(photoData);
    const imgPositionMax = allPhotos.length;
    const imgLeft = imgPosition - 1;
    const imgRight = imgPosition + 1;

    if (imgLeft >= 0) {
        console.log('Left:' + allPhotos[imgLeft].id)
        arrowLeft.setAttribute('onclick', 'displayLightbox(' + allPhotos[imgLeft].id + ')')
        arrowLeft.style.display = 'block'
    } else {
        arrowLeft.style.display = 'none'
    }

    if (imgRight < imgPositionMax) {
        console.log('Right:' + allPhotos[imgRight].id)
        arrowRight.setAttribute('onclick', 'displayLightbox(' + allPhotos[imgRight].id + ')')
        arrowRight.style.display = 'block'
            // Image de droite lorsque l'icone droite est pressé.
    } else {
        arrowRight.style.display = 'none'
    }

    window.addEventListener('keyup', e => {
        if (e.defaultPrevented) {
            return
        }
        if (click > 0) {
            return
        } else if (subModal.getAttribute('aria-hidden') === 'false' && e.key === 'ArrowLeft' && (imgLeft >= 0)) {

            arrowLeft.focus()
            arrowLeft.click()
            click++
        } else if (subModal.getAttribute('aria-hidden') === 'false' && e.key === 'ArrowRight' && (imgRight < imgPositionMax)) {

            arrowRight.focus()
            arrowRight.click()

            click++
        } else if (subModal.getAttribute('aria-hidden') === 'false' && e.key === 'Escape') {
            closeLightbox()
            click++
        }
        setTimeout(function() { click = 0 }, 100)
    })
    console.log('1' + arrowRight)
    console.log('2' + imgRight)
    console.log('3' + imgPositionMax)
}

//fermeture de la lightbox
function closeLightbox() {
    const lightboxCont = document.getElementById('lightbox')
    const imgL = document.querySelector('.lightbox__img');
    const imgName = document.querySelector('.lightbox__title')

    lightboxCont.style.display = 'none'
    imgL.remove();
    imgName.remove();
}