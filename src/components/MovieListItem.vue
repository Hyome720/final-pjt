<template>
  <div>
    <p>
      {{ movie.title }}  
    </p>
    <p>
      <img :src="`${this.posterURL}/${movie.poster_path}`" alt="" class="poster">
    </p>
    [DETAIL]
  </div>
</template>

<script>
export default {
  name: 'MovieListItem',
  props: {
    movie: Object,
  },
  data() {
    return {
      posterURL: 'https://image.tmdb.org/t/p/w500'
    }
  }
}
</script>

<style>
.poster {
  width: 50%;
  justify-self: center;
}
</style>