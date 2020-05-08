<template>
<div class="com">
<h2>bar</h2>
<p>{{ count }}</p>
<button @click="$store.commit('reduce')">-</button>
<button @click="asyncAbc">asyncAbc+</button>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Bar',
  props: {},
  components: {},
  data () {
    return {}
  },
  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   }
  // },
  // computed: mapState(['count']),
  computed: {
    hello () {
      return 'world'
    },
    ...mapState(['count'])
  },
  watch: {},
  created () {},
  methods: {
    ...mapActions({
      asyncAbc: 'asyncIncrement'
    })
  },
  mounted () {},
  beforeDestroy () {}
}
</script>

<style>

</style>