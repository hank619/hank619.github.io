<!--
 * @Author: Hong.Zhang
 * @Date: 2024-04-28 13:52:48
 * @Description: 
-->
<script setup lang="ts">
import { onMounted, watch, nextTick } from "vue";
import DefaultTheme from "vitepress/theme";
import { useRouter } from "vitepress";
import Giscus from "@giscus/vue";

const { Layout } = DefaultTheme;
const { route } = useRouter();
</script>

<template>
  <Layout>
    <template #doc-after>
      <Giscus
        id="comments"
        repo="hank619/hank619.github.io"
        repoId="R_kgDOLy7dmQ"
        category="Announcements"
        categoryId="DIC_kwDOLy7dmc4Ce_7U"
        mapping="pathname"
        term="Welcome to Hank's website"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
      />
      <div style="height: 100px"></div>
    </template>
  </Layout>
</template>
