import garbarinoEmpresas from "../assets/garbarino_venta_empresas.png";
import garbarinoViajes from "../assets/garbarino_viajes.png";
import ventaTelefonica from "../assets/venta_telefonica.png";
import ListaDeRegalos from "../assets/lista_de_regalos.png";
import { uuidv4 } from "./auxiliarMethods";

export const paymentMethods = [
  {
    id: "gba-payment-visa-debito",
    paymentDescription: "visa",
    src:
      "//d3lfzbr90tctqz.cloudfront.net/epi/resource/r/d/2b02baec5de45de28b27c2d1f23ff6a242ebe947dc2a98f75ba23a855e81920f"
  },
  {
    id: "gba-payment-visa-debito",
    paymentDescription: "visa débito",
    src:
      "//d3lfzbr90tctqz.cloudfront.net/epi/resource/r/d/c57287e3c97689e9598fe6b80a45f67bfa1ab24c881d2bb6e07664783f358d3d"
  },
  {
    id: "gba-payment-mastercard",
    paymentDescription: "mastercard",
    src:
      "//d3lfzbr90tctqz.cloudfront.net/epi/resource/r/d/f36da9316ef09bf88849bb98ab8916e55c09d3afcf1f5bae00167069e2c82e56"
  },
  {
    id: "gba-payment-visa-naranja",
    paymentDescription: "visa naranja",
    src:
      "//d3lfzbr90tctqz.cloudfront.net/epi/resource/r/d/9d315642097efa176aeb7d4e2097ffe60adfde8d10622f9baad7d9bbbec76198"
  },
  {
    id: "gbc-ahora-12",
    paymentDescription: "ahora 12",
    src:
      "//d16pzmpb3xz65p.cloudfront.net/statics/2.0.386/images/logos/ahora12.svg"
  },
  {
    id: "gbc-ahora-18",
    paymentDescription: "ahora 18",
    src:
      "//d16pzmpb3xz65p.cloudfront.net/statics/2.0.386/images/logos/ahora18.svg"
  }
];

export const errorBanners = [
  {
    id: uuidv4(),
    description: "¿Querés armar una lista de regalos?",
    alt: "Listas de regalos",
    src: ListaDeRegalos
  },
  {
    id: uuidv4(),
    description: "¿Tenés una Empresa?",
    alt: "Garbarino venta a empresas",
    src: garbarinoEmpresas
  },
  {
    id: uuidv4(),
    description: "Conocé tu próximo destino",
    alt: "Garbarino viajes",
    src: garbarinoViajes
  },
  {
    id: uuidv4(),
    description: "Llamanos!",
    alt: "Garbarino venta telefonica",
    src: ventaTelefonica
  }
];
