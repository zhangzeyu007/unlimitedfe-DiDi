<!--
 * @Description: 组件
 * @Author: 海象
 * @Date: 2022-04-14 13:54:02
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-15 13:49:31
-->
<template>
    <div class="home-container">
     <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
     <a-button type="primary">{{name}}</a-button>
    </div> 
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { onMounted, ref } from "vue";
const name = ref("");

onMounted(() => {
 name.value = '添加'
});

</script>

<style lang="scss">
.work-order-recall {
    .search-main {
        margin-bottom: 12px;
    }
}
</style>