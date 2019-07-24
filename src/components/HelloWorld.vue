<template>
  <div class="hello">Hello Component</div>
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
  mounted () {
    console.log(this.$store.state.count)
    setTimeout(() => {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
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
