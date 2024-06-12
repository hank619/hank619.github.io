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
    { text: "App的应用商店访问地址", link: "/app-store-link" },
    { text: "浏览器指纹调研", link: "/web-fingerprint-research" },
    { text: "Vitepress添加评论系统的坑", link: "/traps-vitepress-comment" },
    { text: "React实现倒计时", link: "/react-countdown" },
    { text: "IOS工程化相关", link: "/ios-engineering" },
    { text: "GA和GTM", link: "/ga-and-gtm" },
    { text: "神经网络", link: "/neural-network" },
    { text: "Python基础", link: "/python-basis" },
    { text: "Objective-C基础", link: "/objective-c-basis" },
    { text: "Console重写", link: "/console-rewrite" },
  ];
}
