/*
 * @Author: Hong.Zhang
 * @Date: 2024-04-25 14:49:45
 * @Description:
 */
import { defineConfig, type DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export const zh = defineConfig({
  title: "Hank的小站",
  description: "Hank用于分享信息的小站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/zh/" },
      {
        text: "随笔",
        link: "/zh/essays/traps-github-user-site",
        activeMatch: "/zh/essays/",
      },
      { text: "工具", link: "/zh/tools/" },
      { text: "关于我", link: "/zh/about-me/" },
    ],
    sidebar: {
      "/zh/essays": {
        base: "/zh/essays",
        items: sidebarEssays(),
      },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/hank619" }],
  },
});

function sidebarEssays(): DefaultTheme.SidebarItem[] {
  return [
    { text: "VitePress部署github用户站的坑", link: "/traps-github-user-site" },
    { text: "使用Google服务预览文档", link: "/google-doc-view" },
  ];
}
