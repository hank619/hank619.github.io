import { defineConfig, type DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hank's website",
  description: "A website for hank to share interesting information",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Essays", link: "/essays/" },
      { text: "Tools", link: "/tools/" },
      { text: "About Me", link: "/about-me/" },
    ],
    sidebar: {
      "/essays/": {
        base: "/essays/",
        items: sidebarEssays(),
      },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/hank619" }],
  },
});

function sidebarEssays(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Examples1",
      items: [
        { text: "Markdown Examples", link: "/index" },
        { text: "Runtime API Examples", link: "/api-examples" },
      ],
    },
  ];
}
