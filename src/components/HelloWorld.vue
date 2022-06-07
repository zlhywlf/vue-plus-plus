<script setup lang="ts">
  import { count } from './data'
  import { Button as AButton } from 'ant-design-vue'
  import 'ant-design-vue/es/button/style/css'

  defineProps<{ msg: string }>()
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

  <AButton type="danger" @click="count++">count is: {{ count }}</AButton>
</template>

<style scoped lang="less">
  @import 'style';
</style>
