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

new Carousel(anterior, proximo, listaProdutos)
new CarouselServicos(anteriorServicos, proximoServicos, listaServicos)
new Show()
new Close()