<template>
  <div>
    <h3>영화목록</h3>
    <MovieListItem
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<script>
import MovieListItem from '@/components/MovieListItem'

export default {
  name: 'MovieList',
  components: {
    MovieListItem
  },
  computed: {
    movies() {
      return this.$store.state.articles
    }
  }
}
</script>

<style>

</style>