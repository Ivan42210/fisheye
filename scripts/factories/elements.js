class image {
    constructor(src, alt, parent) {
        this.src = src
        this.alt = alt
        this.parent = parent
    }

    MakeImage() {
        const img = document.createElement('img');
        img.setAttribute('src', this.src)
        img.setAttribute('alt', this.alt)
        this.parent.appendChild(img)
        return img
    }

}

class textElement {
    constructor(type, content, parent) {
        this.content = content
        this.parent = parent
        this.type = type
    }


    MakeElement() {
        const $element = document.createElement(this.type)
        $element.textContent = this.content
        this.parent.appendChild($element)


        return $element


    }

}

class Link {
    constructor(href, parent) {
        this.href = href
        this.parent = parent
    }

    makeLink() {
        const $a = document.createElement('a')
        $a.setAttribute('href', this.href)
        this.parent.appendChild($a)
        return $a
    }
}