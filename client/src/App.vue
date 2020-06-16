<template>
  <div id="app">
    <nav id="nav">
      <router-link :to="{ name: 'home', }">
        <div>V1</div>
      </router-link>
      <router-link :to="{ name: 'v2', }">
        <div>V2</div>
      </router-link>
      <router-link :to="{ name: 'zoom', params: { id: 1 }, }">
        <div>Zoom</div>
      </router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 2rem;
}

#nav {
  display: flex;
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 1rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
