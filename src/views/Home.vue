<template>
  <div class="home">
    <Navbar style="z-index: 2;" />
    <div class="flex-container">
      <Post style="z-index: 1;" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";
import Post from "@/components/Post.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Navbar,
    Post,
  },
};
</script>

<style scoped>
body{
  background-color: #920000 !important;
}
.home{
    background-color: #E5E5E5 !important;
}
.flex-container{
  margin-top: 150px;
  height: 100vh;
}
</style>
