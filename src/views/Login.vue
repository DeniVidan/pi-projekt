<template>
  <div class="container">
    <div class="login">
      <input type="text" name="" id="" placeholder="Ime" /><br />
      <input type="text" name="" id="" placeholder="Prezime" /><br />
      <button>--></button>
    </div>
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.login{

}
input {
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
}
button {
  border-radius: 50px;
  padding: 7px;
  background-color: white;
  transition: 0.2s ease-in;
  display: flex-end;
}
button:hover {
  background-color: aquamarine;
}
</style>
