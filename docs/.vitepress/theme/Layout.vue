<!--
 * @Author: Hong.Zhang
 * @Date: 2024-04-28 13:52:48
 * @Description: 
-->
<script setup lang="ts">
import { onMounted, watch, nextTick } from "vue";
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import DefaultTheme from "vitepress/theme";
import { useRouter } from "vitepress";
import "./global.css";

const { Layout } = DefaultTheme;
const { route } = useRouter();

onMounted(() => {
  watch(
    () => route.path,
    () => {
      nextTick(() => {
        if (typeof window !== "undefined") {
          const contentDiv = document.querySelector(".content-container");
          if (contentDiv) {
            const oldGTDiv = document.getElementById("gitalk-page-container");
            if (oldGTDiv) {
              contentDiv.removeChild(oldGTDiv);
            }
            const newGTDiv = document.createElement("div");
            newGTDiv.setAttribute("id", "gitalk-page-container");
            contentDiv.appendChild(newGTDiv);
            const gitalk = new Gitalk({
              clientID: "50e2b0842c74106c4671",
              clientSecret: "63c66cb4aba43932a1621a0a1420b9992cf580b2",
              repo: "hank619.github.io",
              owner: "hank619",
              admin: ["hank619"],
              id: location.pathname,
              distractionFreeMode: false,
            });
            gitalk.render("gitalk-page-container");
          }
        }
      });
    }
  );
});
</script>

<template>
  <Layout />
</template>
