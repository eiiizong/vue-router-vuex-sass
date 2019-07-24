<template>
  <div class="home">
    Home Pages..
    <HelloWorld :msg="111"></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {}
  },
  mounted () {
    console.log(this)
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
}
</style>
