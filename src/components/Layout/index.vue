<template>
  <a-layout class="vm-layout">
    <Sider :collapsed="collapsed"></Sider>
    <!-- <a-layout>
      <Header @handleCollapsed="handleCollapsed"></Header>
      <a-layout-content
        ><router-view v-slot="{ Component, route }">
          <transition name="fade">
            <component :is="Component" :key="route.path" />
          </transition> </router-view
      ></a-layout-content>
      <Footer></Footer>
    </a-layout> -->
  </a-layout>
</template>

<script setup>
import { ref } from "vue";
import Header from "../Header/index.vue";
import Sider from "../Menu/index.vue";
import Footer from "../Footer/index.vue";

let collapsed = ref(false);

const handleCollapsed = (e) => {
  collapsed.value = e;
  //   console.log("9999", e);
};
</script>

<style scoped>
.ant-layout-content {
  min-height: 100vh;
  color: #fff;
  line-height: 120px;
  background: rgba(16, 142, 233, 1);
}
[data-theme="dark"] .ant-layout-content {
  background: #107bcb;
}
</style>
