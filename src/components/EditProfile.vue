<template>
  <div class="EditProfile">
    <div class="">
      <form class="form-body" role="form">
        <div class="element">
          <label for="">Ime i Prezime</label>
          <input type="text" value="Ime" />
        </div>
        <div class="element">
          <label for="">Lozinka</label>
          <input type="password" value="lozina" />
        </div>
        <div class="element">
          <label for="">Ponovite lozinku</label>
          <input type="password" value="lozinka" />
        </div>
        <div class="element" style="align-items: ">
          <label for="img">Select image:</label>
          <input type="file" id="img" name="img" accept="image/*" />
          <input
            type="submit"
            class="mt-4"
            style="background-color: lightgreen; width: 100px"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditProfile",
  components: {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  margin-top: 20px;
}
.row {
  display: flex;
  flex-direction: column;
}
.element {
  text-align: start;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
input {
  padding: 8px 5px;
  border: 0.5px solid grey;
  border-radius: 5px;
}
@media only screen and (max-width: 576px) {
  input,
  label {
    margin: 0 20px;
  }
}
</style>
