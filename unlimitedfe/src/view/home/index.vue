<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-14 13:54:02
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-16 14:30:55
 * @FilePath: \unlimitedfe\src\view\home\index.vue
-->

<template>
    <div class="home-container">
     <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    </div> 
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { defineComponent ,provide ,ref} from 'vue'

const Home = defineComponent({
  components:{
    HelloWorld
  },
  beforeRouteEnter (to, from, next) {
  next(vm => {
   console.log('-------beforeRouteEnter');
  })
},
beforeRouteUpdate (to, from) {
  console.log(this);
  console.log('--------beforeRouteUpdate');
},
beforeRouteLeave (to, from) {
console.log('----------beforeRouteLeave');
},
created() {
   const location = ref('North Pole')
    provide('location',location )
  },
  methods: {
 
  }
})

export default Home
</script>

<style lang="scss">
.work-order-recall {
    .search-main {
        margin-bottom: 12px;
    }
}
</style>