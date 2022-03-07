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
                    <input
                      type="radio"
                      id="el"
                      name="type"
                      value="elektrotehnicar"
                      @change="(e) => (vrsta = e.target.value)"
                    />
                    <label for="el">Elektrotehničar</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="voda"
                      name="type"
                      value="vodoinstalater"
                      @change="(e) => (vrsta = e.target.value)"
                    />
                    <label for="voda">Vodoinstalater</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="čiščenje"
                      name="type"
                      value="ciscenje"
                      @change="(e) => (vrsta = e.target.value)"
                    />
                    <label for="čiščenje">Čiščenje</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="vrt"
                      name="type"
                      value="odrzavanjeVrta"
                      @change="(e) => (vrsta = e.target.value)"
                    />
                    <label for="vrt">Održavanje vrta</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="soboslikanje"
                      name="type"
                      value="soboslikar"
                      @change="(e) => (vrsta = e.target.value)"
                    />
                    <label for="soboslikanje">Soboslikanje</label>
                  </li>
                  <li>
                    <input type="radio" id="odabir1" name="type" />
                    <label for="odabir1">Odabir1</label>
                  </li>
                  <li>
                    <input type="radio" id="odabir2" name="type" />
                    <label for="odabir2">Odabir2</label>
                  </li>
                </ul>
              </div>
            </div>
            <div class="filter-item cijena">
              Cijena(u HRK) <br />
              <input
                class="input-cijena"
                v-model="cijenaOd"
                type="number"
                name=""
                id=""
              />
              -
              <input
                class="input-cijena"
                v-model="cijenaDo"
                type="number"
                name=""
                id=""
              />
            </div>
            <div class="flexy">
              <div class="confirm">
                <button v-if="isFiltered" type="button" @click="makniFilter">
                  Resetiraj
                </button>
              </div>
              <div class="confirm">
                <button type="button" @click="filtriraj">Filtriraj</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Filterr from "@/components/Filterr.vue";
import { mapActions } from "vuex";
export default {
  name: "FilterOpened",
  data() {
    return {
      tip: null,
      vrsta: null,
      cijenaOd: null,
      cijenaDo: null,
      isFiltered: false,
    };
  },
  methods: {
    ...mapActions({ filterObjave: "filterPosts", getPosts: "getPosts" }),
    debugMe() {
      console.log(this.vrsta);
    },
    makniFilter() {
      this.isFiltered = false;
      this.getPosts();
      this.tip = null;
      this.vrsta = null;
      this.cijenaOd = null;
      this.cijenaDo = null;
    },
    filtriraj() {
      let filter = {};
      filter.tip = this.tip;
      filter.vrsta = this.vrsta;
      filter.cijenaOd = this.cijenaOd;
      filter.cijenaDo = this.cijenaDo;

      this.filterObjave(filter);
      this.isFiltered = true;
    },
    handleTip(e) {
      const value = e.target.value;
      if (value == "true") {
        this.tip = true;
      }
      if (value == "false") {
        this.tip = false;
      }
    },
  },
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

.filter-mobile {
  display: none;
  text-decoration: none;
  color: black;
  font-weight: bold;
}
label {
  padding-left: 5px;
}

.flexy {
  display: flex;
  justify-content: space-between;
}
@media only screen and (max-width: 600px) {
  .btn1 {
    margin-right: 0px;
  }
}
</style>
