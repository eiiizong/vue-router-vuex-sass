<template>
  <div class="hello">{{ count }}</div>
</template>

<script>
import { mapState } from 'vuex'
import { INCREMENT } from '../store/actionTypes'

export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: [String, Number],
      default: 'Eiiizong',
      required: true
    }
  },
  data () {
    return {
      // count: 0
    }
  },
  mounted () {
    // this.count = this.$store.state.count
    setTimeout(() => {
      this.$store.dispatch(INCREMENT)
      // this.count = this.$store.state.count
    }, 2000)
  },
  computed: {
    ...mapState({
      count: state => state.count
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  display: flex;
}
</style>
