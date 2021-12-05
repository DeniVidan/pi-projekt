<template>
  <div class="addPostButton">
      <a href="#"> <i class="far fa-plus-square" style="font-size: 18px;"></i> Dodaj oglas</a>
  </div>
</template>

<script>
export default {
  name: "AddPostButton",
};
</script>

<style scoped>
*{
    margin-top: 20px;
}
.addPostButton{
    margin-bottom: 35px;
}
.addPostButton > a{
    padding: 10px 50px 10px 50px;
    text-decoration: none;
    color: black;
    background-color: #ffcd94;
    border-radius: 20px;
    border: 1px solid black;
    box-shadow: 2px 2px 3px #888888;
    transition: transform 100ms;
}
.addPostButton > a:hover{
    transform: scale(1.1);
}
</style>
