import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    links: [
      {
        name: "Github",
        type: "Estudo",
        adress: "https://github.com/fe-lsc"
      }, 

      {
        name: "Video Cobras",
        type: "Pessoal",
        adress: "https://www.youtube.com/watch?v=zJtJH46dyDE&t=41s&pp=ugMICgJwdBABGAE%3D"
      }, 

      {
        name: "Boneco GOT",
        type: "Compra",
        adress: "https://www.amazon.com.br/Boneco-PlayStation-Tsushima-Special-Funko/dp/B08GHQZ3KM"

      },

      {
        name: "Site Palavras",
        type: "Outro",
        adress: "https://www.dictionaryofobscuresorrows.com/"

      },

      {
        name: "Reddit",
        type: "Pessoal",
        adress: "Reddit.com"

      },

      {
        name: "Funko Marty",
        type: "Compra",
        adress: "https://www.amazon.com.br/dp/B092FSVW15/ref=s9_acsd_hps_bw_c2_x_0_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-9&pf_rd_r=00A6S30YZYE83EA9ASWP&pf_rd_t=101&pf_rd_p=c9da8ca3-6056-412d-9d6c-bc303f78198b&pf_rd_i=16746732011"

      },

      {
        name: "StackOverFlow",
        type: "Estudo",
        adress: "https://pt.stackoverflow.com/"

      },

      {
        name: "KhanAcademy",
        type: "Estudo",
        adress: "https://pt.khanacademy.org/"

      },
    ]
  },
})
