<template>
  <div>
    <h1>영화 목록</h1>
    <hr>
    <MovieList />
    <hr>
  </div>
</template>

<script>
// import axios from 'axios'
import MovieList from '@/components/MovieList'

export default {
  name: 'MovieView',
  components: {
    MovieList,
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin
    }
  },
  methods: {
    // getMovies() {
    //   if (this.isLogin === true) {
    //     this.$store.dispatch('getMovies')
    //   } else {
    //     alert('로그인해주세요.')
    //     this.$router.push({ name: 'LoginView' })
    //   }
    // }
    getMovies() {
      this.$store.dispatch('getMovies')
    }
  },
  created() {
    this.getMovies()
  }
}
</script>

<style>

</style>