<template>
  <a-layout-header
    >Header
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
  </a-layout-header>
</template>

<script setup>
import { ref, reactive, toRefs } from "vue";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";

let collapsed = ref(false);
const emit = defineEmits(["handleCollapsed"]);
const toggleCollapsed = () => {
  collapsed.value = !collapsed.value;
  emit("handleCollapsed", collapsed.value);
};
</script>

<style scoped>
.ant-layout-header {
  color: #fff;
  background: #7dbcea;
}
[data-theme="dark"] .ant-layout-header {
  background: #6aa0c7;
}
</style>
