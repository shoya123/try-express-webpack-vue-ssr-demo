<template>
  <div id="app">
    <div><input v-model="text" type="text"></div>
    {{ text }}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        text: 'Hello express + webpack + Vue + SSR!!'
      }
    }
  }
</script>

<style>
</style>
