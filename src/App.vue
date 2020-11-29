<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>
    <router-link to="/">Go to Home</router-link>
    <span> | </span>
    <router-link to="/profile/1">Go to Profile 1</router-link>
    <span> | </span>
    <router-link to="/profile/2">Go to Profile 2</router-link>
  </p>
  <router-view></router-view>
  <p id="footer">MIT Licensed | Copyright © 2020-present Felix Yang.</p>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#footer {
  margin-top: 60px;
}
</style>
