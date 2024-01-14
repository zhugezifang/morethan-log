const CONFIG = {
  // profile setting (required)
  profile: {
    name: "诸葛子房",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "前京东、BAT程序员",
    bio: "",
    email: "xiaoqiu2017wy@163.com",
    linkedin: "",
    github: "zhugezifang",
    gzh: "https://mp.weixin.qq.com/s/RB9OKzftBbpl5FewTqK2Dg",
    instagram: "",
  },
  //projects: [
  //  {
  //    name: `微信公众号`,
  //    href: "https://mp.weixin.qq.com/s/RB9OKzftBbpl5FewTqK2Dg",
  //  },
  // ],
  // blog setting (required)
  blog: {
    title: "诸葛子房的博客",
    description: "欢迎来到诸葛子房的博客",
  },

  // CONFIG configration (required)
  link: "https://zgzf.online/",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: "d1b6fbdd17dc46afb7810c63d5a08dd2",
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
