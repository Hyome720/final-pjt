<template>
  <div>
    <h1>test</h1>
    <p>
      {{ movie.title }}  
    </p>
    [DETAIL]
  </div>
</template>

<script>
export default {
  name: 'MovieListItem',
  props: {
    movie: Object,
  }
}
</script>

<style>

</style>