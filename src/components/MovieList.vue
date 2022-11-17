<template>
  <div>
    <v-sheet
      class="mx-auto"
      elevation="8"
      max-width="90%"
    >
      <v-slide-group
        class="pa-4"
        active-class="success"
        show-arrows
      >
        <v-slide-item
          v-for="movie in movies"
          :key="movie.id"
        >
          <v-card
            color="grey lighten-1"
            class="ma-4"
            height="200"
            width="250"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-scale-transition>
                  <MovieListItem
                    :movie="movie"
                  />
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
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