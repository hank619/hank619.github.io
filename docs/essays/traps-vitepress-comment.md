<!--
 * @Author: Hong.Zhang
 * @Date: 2024-04-29 17:55:13
 * @Description: 
-->
# Traps to add a comment system to Vitepress

> By asking chatgpt and search, I found two popular libraries to implement comment system in Vitepress, they are `Gitalk` and `Valine`, they both leverage the `Github Issues` to store the comments.

## Gitalk

Although `Gitalk` and `Valine` are both not in maintenance anymore, `Gitalk` is newer in terms of the last update time, So I decided to use Gitalk

### Problems 

1. When using `Gitalk`, we need to create an OAuth App in Github and save `clientId` and `clientSecret` in frontend code, it may trigger a secret key leak risk, however, it's safe in fact. For details you can refer to [here](https://github.com/gitalk/gitalk/issues/444)

2. The using dark mode in Vitepress, the text is white and there is no contrast to the background color, it looks weird, can be solved by [this](https://github.com/gitalk/gitalk/issues/511#issuecomment-1474906859)

3. All docs share the same comment widget, which means when I navigate to a new page, the widget is not refreshed and shows the comment of the previous page. This is due to the refresh mechanism of `Vue`, parent component refresh won't trigger the child component refresh. So need to watch the route and remove and re-append the widget.
    ::: details View code
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

After a while, I found `Giscus` which is active and has a better UI, it's based on `Github Discussion`, so I just changed to it, it's proved that this is a wise decision, `Giscus` is much easier to integrate and it has great support on Vue component

### Problem

There is only one problem, it's the same as problem3 of `Gitalk`, however since it supports Vue component, we can add a `:key` props to the component and increment it when routed to a new page, and then the component will get refreshed automatically.

::: details View code
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