<template>
  <div class="filter-opened">
    <button
      type="button"
      class="btn1"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      <img src="@/assets/filter.png" alt="" style="padding-right: 7px" />Filter
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="filter-item naslov">Filtriraj rezultate</div>
            <div class="filter-item kategorija">
              <b>Kategorija</b> <br />
              <div style="padding-left: 5px">
                <input type="checkbox" id="nudim" name="nudim" />
                <label for="nudim">Nudim posao</label> <br />
                <input type="checkbox" id="trazim" name="trazim" />
                <label for="trazim">Tražim posao</label>
              </div>
            </div>
            <div class="filter-item vrsta-posla">
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  Vrsta posla<span class="caret"></span>
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
                    <input
                      type="checkbox"
                      id="soboslikanje"
                      name="soboslikanje"
                    />
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
    </div>
  </div>
</template>

<script>
import Filterr from "@/components/Filterr.vue";
export default {
  name: "FilterOpened",

  components: {
    Filterr,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.modal-open {
  padding: 0 !important;
}
.modal {
  padding: 0px !important;
}
.modal-dialog {
  margin: auto;
  top: 5%;
  width: fit-content;
}
.modal-content {
  padding: 5px 40px;
  background-color: #383838;
  color: white;
  border-radius: 20px;
}
.modal-footer {
  padding: 20px;
  border-top: 1px solid grey;
}
.btn1 {
  border: none;
  border-radius: 20px;
  background-color: transparent;
  padding: 5px 20px;
  margin: 0px 20px 20px 20px;
}
.btn1:hover {
  background-color: rgb(187, 187, 187);
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
}
@media only screen and (max-width: 600px) {
  .btn1 {
    margin-right: 0px;
  }
}
</style>
