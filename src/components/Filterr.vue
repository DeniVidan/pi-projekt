<template>
  <div class="filter">
    <div class="box">
      <a class="filter-mobile" href="#">
        <img src="@/assets/filter.png" alt="" />&nbsp Filter</a
      >
      <div class="burek">
        <div class="filter-item naslov">Filtriraj rezultate</div>
        <div class="filter-item kategorija">
          <b>Kategorija</b> <br />
          &nbsp<input type="checkbox" />&nbsp Nudim posao <br />
          &nbsp<input type="checkbox" />&nbsp Tražim posao
        </div>
        <div class="filter-item vrsta-posla">
          <div class="dropdown">
            <button
              class="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            >
              Vrsta posla <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li>
                <input type="checkbox" id="el" name="el" />
                <label for="el"> Elektrotehničar</label>
              </li>
              <li>
                <input type="checkbox" id="voda" name="voda" />
                <label for="voda"> Vodoinstalater</label>
              </li>
              <li>
                <input type="checkbox" id="čiščenje" name="čiščenje" />
                <label for="čiščenje"> Čiščenje</label>
              </li>
              <li>
                <input type="checkbox" id="vrt" name="vrt" />
                <label for="vrt"> Održavanje vrta</label>
              </li>
              <li>
                <input type="checkbox" id="soboslikanje" name="soboslikanje" />
                <label for="soboslikanje"> Soboslikanje</label>
              </li>
              <li>
                <input type="checkbox" id="odabir1" name="odabir1" />
                <label for="odabir1"> Odabir1</label>
              </li>
              <li>
                <input type="checkbox" id="odabir2" name="odabir2" />
                <label for="odabir2"> Odabir2</label>
              </li>
            </ul>
          </div>
        </div>
        <div class="filter-item cijena">
          Cijena(u HRK) <br />
          <input class="input-cijena" type="number" name="" id="" /> -
          <input class="input-cijena" type="number" name="" id="" />
        </div>
        <div class="confirm">
          <button type="button">Filtriraj</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filterr",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  border-radius: 10px;
  background-color: #383838;
  margin-left: 40px;
  margin-top: 30px;
  max-width: 270px;
}
.filter-item {
  border-bottom: 1px solid grey;
  padding: 5px 10px;
  color: white;
}
.naslov {
  font-size: 20px;
  font-weight: bold;
}
.kategorija {
  text-align: start;
}
.vrsta-posla {
}
.cijena {
  border-bottom: none;
  text-align: start;
}
li {
  padding: 0px 5px;
}
.btn {
  color: white;
  background-color: transparent;
}
.btn:focus {
  box-shadow: none;
}
.dropdown {
  text-align: start;
}
.input-cijena {
  width: 80px;
  margin: 10px 0px;
  border-radius: 3px;
  border: none;
  padding-left: 3px;
}
.confirm > button {
  border: none;
  margin-bottom: 10px;
  padding: 2px 15px;
  border-radius: 5px;
  background-color: #ffcd94;
  cursor: pointer;
}
.confirm {
  margin-left: 105px;
}
.filter-mobile {
  display: none;
  text-decoration: none;
  color: black;
  font-weight: bold;
}
label {
  padding-left: 5px;
  margin-bottom: 7px;
  cursor: pointer;
}
@media only screen and (max-width: 991px) {
  .burek {
    display: none;
  }
  .box {
    background-color: transparent;
    margin: 0;
  }
  .filter-mobile {
    display: none;
  }
}
</style>
