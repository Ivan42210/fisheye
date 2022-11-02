const Input1 = document.getElementById('selected-area');
const Input2 = document.querySelectorAll('.selector__item');
const selectorOptions = document.getElementById('subMenu');
const closeSelectorButton = document.querySelector('.close-selector');
Input1.addEventListener('click', openSelector);
Input2.forEach((btn) => {

    btn.addEventListener('click', sortByButton);
});






function openSelector(e) {
    e.preventDefault();
    selectorOptions.classList.toggle('display--none');
    selectorOptions.classList.toggle('display');
    closeSelectorButton.classList.toggle('close-selector--openned');
    closeSelectorButton.classList.toggle('close-selector');

}


async function sortByButton(e) {
    e.preventDefault();
    const labelSelected = document.getElementById('selected-label');
    Input1.dataset.value = e.target.dataset.value;
    labelSelected.innerHTML = e.target.getAttribute('value');
    sortBy()
    changeBtn(e)
}

function changeBtn(e) {
    console.log(e.target)
    Input2.forEach((btn) => {

        btn.classList.remove('display--none');
    });

    if (Input1.dataset.value === e.target.dataset.value) {

        e.target.classList.add('display--none')
    }

}





function sortBy() {

    const sortByMapped = (map, compareFn) => (a, b) => compareFn(map(a), map(b))
    const byString = (a, b) => a.localeCompare(b, { sensitivity: 'base' })
    const byValue = (a, b) => a - b
    const byValueInvert = (a, b) => b - a
    const toLikes = e => e.likes
    const toName = e => e.title
    const toDate = e => e.date.replace(/-/g, '')
    const byLikes = sortByMapped(toLikes, byValueInvert)
    const byName = sortByMapped(toName, byString)
    const byDate = sortByMapped(toDate, byValue)

    if (Input1.dataset.value === 'popularity') {
        allPhotos.sort(byLikes)
        changeOrder()
    } else if (Input1.dataset.value === 'date') {
        allPhotos.sort(byDate)
        changeOrder()
    } else if (Input1.dataset.value === 'title') {
        allPhotos.sort(byName)
        changeOrder()
    } else {
        console.log('Error')
    }
}

function changeOrder() {
    const parent = document.querySelector('.photograph_section-pics')
    allPhotos.forEach((photoSorted) => {
        const photo = document.getElementById('photo' + photoSorted.id);
        parent.appendChild(photo);
    })
}