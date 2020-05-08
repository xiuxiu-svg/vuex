<template>
<div class="com">
<h2>foo</h2>
<!-- 直接获取 -->
<!-- <p> {{ $store.state.count }} </p> -->
<!-- 计算属性获取 -->
<p> {{ count }} </p>
<!-- <button @click="increment">+</button> -->
<button @click="$store.dispatch({
  type:'asyncIncrement'
})">async+</button>
<br>
<!-- <button @click="abc">1</button> -->
<button @click="$store.commit({
  type: 'increment',
  count: 2
})">+</button>
<!-- 传多个参数就要用对象 且第一个必须是 type： '' -->
<!-- <button @click="$store.commit( 'increment', 2)">+</button> -->
</div>
</template>

<script>
// 第三种方法 vuex 提供的辅助方法 mapState(['共享数据'])
// import { mapState, mapMutations } from 'vuex'
import { mapState } from 'vuex'
// const set = mapState(['count'])

// console.log(set)
export default {
  name: 'Foo',
  props: {},
  components: {},
  data () {
    return {}
  },
  // computed: {
    // count () {
    //   return this.$store.state.count
    // }
  // },
  // computed: mapState(['count']),
  computed: {
    // 改名字
    ...mapState({
      count: state => state.count,
      abc: state => state.count
    })
  },
  watch: {},
  created () {},
  methods: {
    // 把容器中的mutation方法映射到本地组件方法中
    // ...mapMutations({
    //   increment: 'increment'
    //   // abc: 'hello'
    // })
  },
  mounted () {},
  beforeDestroy () {}
}
</script>

<style>

</style>