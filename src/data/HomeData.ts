import { SliderType } from "../types/SliderType"
import { CategoryType } from "../types/CategoryType"
import { ProductType } from "../types/ProductType"
import ImagesObject from "./Images"

export const SliderData: SliderType[] = [
    {
        id: 1,
        image: ImagesObject.Desktop,
        title: "UNIVERSO GAMER",
        description: "NÃO FIQUE DE FORA DOS NOVOS JOGOS! PEGUE SEU CUPOM DE 30% DE DESCONTO NOS NOVOS COMPUTADORES.",
        background: "f5fafd"
    },
    {
        id: 2,
        image: ImagesObject.Smartphone,
        title: "COMPRE E RESGATE",
        description: "GARANTA SUA COMPRA AGORA MESMO E CONCORRA A PRÊMIOS INCRÍVEIS DISPONÍVEIS APENAS AQUI EM NOSSA LOJA.",
        background: "fcf1ed"
    },
    {
        id: 3,
        image: ImagesObject.Fashion,
        title: "LIQUIDA MODA",
        description: "APROVEITE OS 45% DE DESCONTO EM MAIS DE 1000 NOVOS ESTILOS DIFERENTES.",
        background: "fbf0f4"
    }
]

export const CategoriesData: CategoryType[] = [
    {
        id: 1,
        image: ImagesObject.Hardware,
        title: "HARDWARES",
    },
    {
        id: 2,
        image: ImagesObject.Macbook,
        title: "NOTEBOOKS",
    },
    {
        id: 3,
        image: ImagesObject.Tv,
        title: "SMART TV",
    }
]

export const ProductsData: ProductType[] = [
    {
        id: 1,
        image: ImagesObject.Chair,
    },
    {
        id: 2,
        image: ImagesObject.Ps4,
    },
    {
        id: 3,
        image: ImagesObject.Jbl,
    },
    {
        id: 4,
        image: ImagesObject.Mouse,
    },
    {
        id: 5,
        image: ImagesObject.Gamer,
    },
    {
        id: 6,
        image: ImagesObject.XboxOne,
    },
    {
        id: 7,
        image: ImagesObject.Joystick,
    },
    {
        id: 8,
        image: ImagesObject.Graphics,
    },
]