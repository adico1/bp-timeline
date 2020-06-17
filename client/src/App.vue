<template>
  <div id="app">
    <nav id="nav">
      <a href="/">V1</a>
      <a href="/v2">V2</a>
      <a href="/zoom/1">Zoom</a>
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
