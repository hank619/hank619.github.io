<!--
 * @Author: Hong.Zhang
 * @Date: 2024-04-29 18:36:15
 * @Description: 
-->
# Vitepress 添加评论系统的坑

> 经过向 ChatGPT 和搜索询问，我找到了两个在 Vitepress 中实现评论系统非常流行的库，它们分别是 Gitalk 和 Valine，它们都利用 Github Issues 来存储评论。

## Gitalk

尽管 `Gitalk` 和 `Valine` 都已经不再维护了，但 `Gitalk` 在最后一次更新时间上较为新，所以我决定使用 `Gitalk`

### 问题 

1. 使用` Gitalk` 时，我们需要在 Github 中创建一个 OAuth 应用程序并将 `clientId` 和 `clientSecret` 保存在前端代码中，这可能会触发秘钥泄漏风险，但事实上是安全的。有关详细信息，请参考 [此处](https://github.com/gitalk/gitalk/issues/444)

2. T在 Vitepress 中使用暗黑模式时，文本为白色且与背景颜色没有对比度，看起来很奇怪，可以通过 [这个方法](https://github.com/gitalk/gitalk/issues/511#issuecomment-1474906859)解决

3. 所有文档共享相同的评论小部件，这意味着当我导航到一个新页面时，小部件不会被刷新，而是显示上一页的评论。这是因为`Vue` 的刷新机制，父组件的刷新不会触发子组件的刷新。因此需要监听路由，并删除和重新添加小部件。
    ::: details 查看代码
    ```js
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
                ...
              });
              gitalk.render("gitalk-page-container");
            }
          }
        });
      }
    );
    ```
    :::

## Giscus

过了一段时间，我发现了 `Giscus`，它活跃并具有更好的用户界面，基于 `Github Discussion`，所以我只是改用它了，证明这是一个明智的决定，`Giscus` 更容易集成，而且在 Vue 组件上有很好的支持

### Problem

只有一个问题，与`Gitalk` 的问题3相同，然而由于它支持 Vue 组件，我们可以向组件添加一个`:key`属性，并在导航到新页面时递增它，然后组件将自动刷新。

::: details 查看代码
```js
<template>
  <Layout>
    <template #doc-after>
      <Giscus
        ...
        :key="count"
      />
    </template>
  </Layout>
</template>

```
:::