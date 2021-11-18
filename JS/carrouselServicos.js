export class CarouselServicos {
    constructor(anteriorServicos, proximoServicos, listaServicos) {
        this.anteriorServicos = document.querySelector(anteriorServicos)
        this.proximoServicos = document.querySelector(proximoServicos)
        this.listaServicos = document.querySelector(listaServicos)

        this.slides = this.getListaSlidesServicos()
        this.tamanhoSlide = this.getTamanhoSlideServicos()

        this.indiceDoSlideAtual = 0

        this.proximoServicos.addEventListener('click', this.proximoSlideServicos.bind(this))

        this.anteriorServicos.addEventListener('click', this.slideAnterior.bind(this))

        this.preparaSlides()
    }

    getListaSlidesServicos() {
        return Array.from(this.listaServicos.children)
    }

    getTamanhoSlideServicos() {
        return this.slides[0].getBoundingClientRect().width
    }

    getSlideAtual() {
        return this.slides[this.indiceDoSlideAtual]
    }

    proximoSlideServicos() {
        let proximaPosicao = this.indiceDoSlideAtual + 1
        if (proximaPosicao > this.slides.length - 1) {
            proximaPosicao = 0
        }

        this.vaParaSlide(proximaPosicao)
    }

    slideAnterior() {
        let posicaoAnterior = this.indiceDoSlideAtual - 1
        if (posicaoAnterior < 0) {
            posicaoAnterior = this.slides.length - 1
        }

        this.vaParaSlide(posicaoAnterior)
    }

    vaParaSlide(posicaoServicos) {
        this.indiceDoSlideAtual = posicaoServicos

        this.scrollParaSlideServicos(this.getSlideAtual())
    }

    scrollParaSlideServicos(slideSelecionado) {
        this.listaServicos.style.transform = 'translateX(-' + slideSelecionado.style.left + ')'
    }

    preparaSlides() {
        this.slides.forEach((slide, i) => {
            slide.style.left = this.tamanhoSlide * i + 'px'
        })
    }
}