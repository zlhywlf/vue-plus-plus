<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.svg" />
  <RouterLink to="/main">main</RouterLink>
  <RouterLink to="/login">login</RouterLink>
  <RouterView />
</template>

<style>
  #app {
    margin-top: 60px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    text-align: center;
    user-select: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
