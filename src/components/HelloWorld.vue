<script setup lang="ts">
  import { ref } from 'vue'
  import { ElButton } from 'element-plus'
  import 'element-plus/es/components/button/style/css'

  defineProps<{ msg: string }>()

  const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <ElButton type="success" @click="count++">count is: {{ count }}</ElButton>
</template>

<style scoped>
  a {
    color: #42b983;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    padding: 2px 4px;
    color: #304455;
    background-color: #eee;
    border-radius: 4px;
  }
</style>
