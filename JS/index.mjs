import { Carousel } from "./carrousel.js";
import { CarouselServicos } from "./carrouselServicos.js";
import { Show } from "./hamburguerShow";
import { Close } from "./hamburguerShow";


const anterior = '[data-anterior]'
const proximo = '[data-proximo]'
const listaProdutos = '[data-lista-produtos]'

const anteriorServicos = '[data-anterior-servicos]'
const proximoServicos = '[data-proximo-servicos]'
const listaServicos = '[data-lista-servicos]'


const mainMenu = document.querySelector('[data-conteudo]')

const offButton1 = document.querySelector('[data-mudar-icone1]')
const offButton2 = document.querySelector('[data-mudar-icone2]')
const offButton3 = document.querySelector('[data-mudar-icone3]')

const navMenu = document.querySelector('[data-menu-animacao]')

const closeMenu = document.getElementById('closeMenu')
closeMenu.addEventListener('click', Close)

new Carousel(anterior, proximo, listaProdutos)
new CarouselServicos(anteriorServicos, proximoServicos, listaServicos)
new Show(offButton1, offButton2, offButton3,mainMenu, navMenu)
new Close(offButton1, offButton2, offButton3,mainMenu, navMenu)