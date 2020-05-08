<template>
  <div id="app">
    <Foo/>
    <Bar/>
  </div>
</template>

<script>
import Foo from './components/foo.vue'
import Bar from './components/bar.vue'

export default {
  name: 'App',
  components: {
    Foo,
    Bar
  }
}
</script>

<style>
.com {
 width: 700px;
 height: 200px;
 border: 1px dashed pink;
 text-align: center;
}
</style>
