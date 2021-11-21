<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">majstor</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="/">Vrt</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Na kući</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Po kući</a>
        </li>
      </ul>

      <div class="account">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/login">log in</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signup">sign up</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name: "Navbar",
}
</script>

<style scoped>
a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  text-decoration: none;
  font-weight: bold;
  color: #467db5;
}

.navbar {
  position: fixed;
  background-color: #cccccc !important;
  padding: 0;
  width: 100%;
}
.navbar-brand {
  font-family: "Dancing Script", cursive;
  font-size: 50px;
  padding-left: 35px;
}

form {
  padding: 0px 20px 0px 20px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}
.form-control {
  background-color: rgba(0, 0, 0, 0.323);
  border: 1px solid black;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.form-control::placeholder {
  color: white;
}

.btn {
  color: black;
  border: 1px solid black;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
.navbar-toggler {
  border-color: transparent !important;
}
</style>
