<template>
  <div class="hello">{{count}}</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: [String, Number],
      default: 'Eiiizong',
      required: true
    }
  },
  data() {
    return {
      count: 0
    }
  },
  mounted () {
    this.count = this.$store.state.count
    setTimeout(() => {
      this.$store.commit('increment')
      this.count = this.$store.state.count
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  display: flex;
}
</style>
