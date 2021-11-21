<template>
  <div class="home">
    <Navbar/>
    <HelloWorld msg="Welcome to Your Vue.js App" class="element"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Navbar
  }
}
</script>

<style scoped>
*{
  margin-top: 0px !important;
  padding: 0;
}
.element{
  margin-top: 150px !important;
}
</style>
