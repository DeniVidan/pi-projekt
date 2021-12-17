<template>
  <div class="UserPosts">
    
    <div class="post">
      <Post />
      <Post />
      <Post />
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
  name: "UserPosts",
  components: {
    Post,
  }
};
</script>

<style scoped>
.post{
  margin-top: 40px;
}
</style>
