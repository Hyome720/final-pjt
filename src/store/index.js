import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createdPersistedState from 'vuex-persistedstate'
import router from '@/router'
// import router from '@/router'

Vue.use(Vuex)

const TMDBAPI = process.env.VUE_APP_TMDB
const TopRatedURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDBAPI}&language=en-US&page=1`


// const POSTER_URL = 'https://image.tmdb.org/t/p/w500'

// const API_URL = 'http://127.0.0.1:8000'

export default new Vuex.Store({
  plugins: [
    createdPersistedState(),
  ],
  state: {
    movies: [],
    token: null,
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
    }
  },
  mutations: {
    GET_MOVIES(state, articles) {
      state.articles = articles
    },
    SAVE_TOKEN(state, token) {
      state.token = token
      router.push({ name: 'MovieView' })
    }
  },
  actions: {
    getMovies(context) {
      axios({
        method: 'get',
        url: TopRatedURL,
        // headers: {
        //   Authorization: `Token ${context.state.token}`
        // }
      })
        .then((res) => {
          console.log(res.data)
          context.commit('GET_MOVIES', res.data.results)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // signUp(context, payload) {
    //   axios({
    //     method: 'post',
    //     url: `${}/accounts/signup`,
    //     data: {
    //       username: payload.username,
    //       password1: payload.password1,
    //       password2: payload.password2
    //     }
    //   })
    //     .then((res) => {
    //       console.log(res)
    //       context.commit('SAVE_TOKEN', res.data.key)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // },
    // login(context, payload) {
    //   axios({
    //     method: 'post',
    //     url: `${}/accounts/login`,
    //     data: {
    //       username: payload.username,
    //       password: payload.password
    //     }
    //   })
    //     .then((res) => {
    //       context.commit('SAVE_TOKEN', res.data.key)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // }
  },
  modules: {
  }
})
