<template>
  <a-layout-sider :collapsed="collapsed" :trigger="null" collapsible>
    <a-menu
      id="vm-menu"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      @click="handleClick"
      @deselect="handleDeselect"
      @openChange="handleOpenChange"
      @select="handleSelect"
    >
      <template v-for="item in menuList" :key="item.path">
        <a-sub-menu
          v-if="item.children && item.children.length"
          :key="item.path"
          @titleClick="titleClick"
        >
          <template #icon>
            <MailOutlined />
          </template>
          <template #title>{{ item.name }}</template>
          <a-menu-item v-for="child in item.children" :key="child.path">
            {{ child.name }}
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item v-else :key="item.path">
          <template #icon>
            <MailOutlined />
          </template>
          {{ item.name }}
        </a-menu-item>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import {
  MailOutlined,
  QqOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";

defineProps({
  collapsed: Boolean,
});

let selectedKeys = ref([]);
let openKeys = ref([]);
let menuList = ref([]);
const router = useRouter();
const routes = router.options.routes;
const exclude = ["/", "/login", "/home"];
menuList = routes.filter((item) => !exclude.includes(item.path))[0].children;
// console.log("vvvvvvvvv");
const handleClick = (e) => {
  // console.log("click", e, openKeys);
  // router.push(e.key);
  // selectedKeys = [e.key];
  router.push(e.key);
  selectedKeys.value = [e.key];
  // selectedKeys.value.splice(0, 0, e.key);
};
const handleDeselect = (e) => {
  // console.log("handleDeselect", e);
};
const handleOpenChange = (e) => {
  openKeys.value = e;
  // openKeys.value.splice(0, 0, e);
};
const handleSelect = (e) => {
  // console.log("handleSelect", e);
};
const titleClick = (e) => {
  // console.log("titleClick", e);
};
watch(
  () => openKeys,
  (val) => {
    console.log("数组变化了openKeys", val);
  }
);

// import { ref,watch } from 'vue'

// import { ref, watch } from "vue";
// const emptyArray = ref([1, 2, 3, 4]);
// watch(emptyArray.value, () => {
//   //这个时候通过直接修改和利用数组的方法修改都可以监测到
//   console.log("数组变化了", emptyArray);
// });
// const pushEmptyArray = () => {
//   emptyArray.value.splice(0, 0, 19);
// };
// const changeEmptyArrayItem = () => {
//   emptyArray.value[0] = 10;
// };
</script>

<style scoped>
.ant-layout-sider {
  color: #fff;
  line-height: 120px;
  background: #fff;
}
[data-theme="dark"] .ant-layout-sider {
  background: #3499ec;
}
</style>
