<template>
  <div id="app">
    <keep-alive exclude="Detail"> <!-- exclude取消缓存 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
