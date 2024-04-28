<!--
 * @Author: Hong.Zhang
 * @Date: 2024-04-28 13:52:48
 * @Description: 
-->
<script setup lang="ts">
import { onMounted } from "vue";
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;

onMounted(() => {
  const gitalk = new Gitalk({
    clientID: "50e2b0842c74106c4671",
    clientSecret: "63c66cb4aba43932a1621a0a1420b9992cf580b2",
    repo: "hank619.github.io", // The repository of store comments,
    owner: "hank619",
    admin: ["hank619"],
    id: location.pathname, // Ensure uniqueness and length less than 50
    distractionFreeMode: false, // Facebook-like distraction free mode
  });
  gitalk.render("gitalk-container");
});
</script>

<template>
  <Layout>
    <template #doc-bottom>
      <div id="gitalk-container"></div>
    </template>
  </Layout>
</template>
