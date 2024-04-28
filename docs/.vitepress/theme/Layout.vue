<!--
 * @Author: Hong.Zhang
 * @Date: 2024-04-28 13:52:48
 * @Description: 
-->
<script setup lang="ts">
import { onMounted, watch, ref } from "vue";
import DefaultTheme from "vitepress/theme";
import { useRouter } from "vitepress";
import Giscus from "@giscus/vue";

const { Layout } = DefaultTheme;
const { route } = useRouter();
const count = ref(0);

onMounted(() => {
  watch(
    () => route.path,
    () => {
      count.value++;
    }
  );
});
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
        :key="count"
      />
    </template>
  </Layout>
</template>
