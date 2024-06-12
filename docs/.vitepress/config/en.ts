import { defineConfig, type DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  title: "Hank's website",
  description: "A website for hank to share interesting information",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Essays",
        link: "/essays/traps-github-user-site",
        activeMatch: "/essays/",
      },
      { text: "Tools", link: "/tools/" },
      { text: "About Me", link: "/about-me/" },
    ],
    sidebar: {
      "/essays": {
        base: "/essays",
        items: sidebarEssays(),
      },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/hank619" }],
  },
});

function sidebarEssays(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Trap with github user site", link: "/traps-github-user-site" },
    { text: "Google doc view", link: "/google-doc-view" },
    { text: "App store link", link: "/app-store-link" },
    { text: "Web fingerprint research", link: "/web-fingerprint-research" },
    { text: "Traps with Vitepress comment", link: "/traps-vitepress-comment" },
    { text: "React countdown", link: "/react-countdown" },
    { text: "IOS engineering", link: "/ios-engineering" },
    { text: "GA and GTM", link: "/ga-and-gtm" },
    { text: "Neural network", link: "/neural-network" },
    { text: "Python Basis", link: "/python-basis" },
    { text: "Objective-C basis", link: "/objective-c-basis" },
    { text: "Console rewrite", link: "/console-rewrite" },
    // { text: "Phone hardware detection", link: "/phone-hardware-detection" },
  ];
}
