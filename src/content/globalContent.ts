import type { GlobalContent } from "../types/globals";

export const globalContent: GlobalContent = {
  siteName: "Glasgow Rangers VC",
  siteDescription:
    "Welcome to the official website of Glasgow Rangers Volleyball Club. Stay updated with our latest news, events, and team information.",
  seoDefaults: {
    metaTitle: "Glasgow Rangers Volleyball Club - Official Site",
    metaDescription:
      "Welcome to the official website of Glasgow Rangers Volleyball Club. Stay updated with our latest news, events, and team information.",
    metaImage: {
      url: "https://example.com/default-seo-image.jpg",
      alternativeText: "Default SEO Image",
    },
    metaKeywords: [
      "volleyball",
      "Glasgow Rangers",
      "sports club",
      "volleyball club",
    ],
    metaCanonicalUrl: "https://www.glasgowrangersvolleyball.com",
  },
  socialLinks: [
    {
      platform: "facebook",
      url: "https://www.facebook.com/profile.php?id=61576745250601",
      icon: "line-md:facebook",
    },
    {
      platform: "instagram",
      url: "https://www.instagram.com/glasgowrangersvolleyball",
      icon: "line-md:instagram",
    },
    {
      platform: "tiktok",
      url: "https://www.tiktok.com/@glasgowrangers.vo",
      icon: "line-md:tiktok",
    },
    {
      platform: "youtube",
      url: "https://www.youtube.com/glasgowrangersvolleyball",
      icon: "line-md:youtube",
    },
  ],
  contactEmail: "glasgowrangersvolleyballclub@gmail.com",
  phoneNumber: "+592 222 2222",
  location: "Linden, Guyana",
  footerData: {
    pages: [
      { category: "Club Directory", title: "Home", slug: "home" },
      { category: "Club Directory", title: "About Us", slug: "about" },
      { category: "Club Directory", title: "Teams", slug: "teams" },
      { category: "Club Directory", title: "Players", slug: "players" },
      { category: "Club Directory", title: "Training", slug: "training" },
      { category: "Media & Community", title: "Events", slug: "events" },
      { category: "Media & Community", title: "News", slug: "news" },
      { category: "Media & Community", title: "Gallery", slug: "gallery" },
      { category: "Media & Community", title: "Sponsors", slug: "sponsors" },
      { category: "Join Us", title: "Registration", slug: "registration" },
      { category: "Join Us", title: "Contact", slug: "contact" },
    ],
  },

  navbarData: {
    pages: [
      {
        title: "About Us",
        slug: "about",
        parent: { title: "About Us" },
        icon: "mdi:information-outline",
      },
      {
        title: "Teams",
        slug: "teams",
        parent: { title: "Teams & Training" },
        icon: "mdi:account-group",
      },
      {
        title: "Players",
        slug: "players",
        parent: { title: "Teams & Training" },
        icon: "mdi:person-card-details",
      },
      {
        title: "Events",
        slug: "events",
        parent: { title: "News & Media" },
        icon: "mdi:calendar",
      },
      {
        title: "Training",
        slug: "training",
        parent: { title: "Teams & Training" },
        icon: "mdi:dumbbell",
      },
      {
        title: "News",
        slug: "news",
        parent: { title: "News & Media" },
        icon: "mdi:newspaper",
      },
      {
        title: "Gallery",
        slug: "gallery",
        parent: { title: "News & Media" },
        icon: "mdi:camera",
      },
      {
        title: "Sponsors",
        slug: "sponsors",
        parent: { title: "About Us" },
        icon: "mdi:handshake",
      },
      {
        title: "Contact",
        slug: "contact",
        parent: null,
        icon: "mdi:email-outline",
      },
    ],
    cta: {
      title: "Join Club",
      url: "/registration",
      backgroundColor: "primary",
      textColor: "white",
    },
  },

  affiliations: [
    {
      name: "Guyana Volleyball Federation",
      abbreviation: "GVF",
      url: "https://www.facebook.com/p/Guyana-Volleyball-Federation-GVF-100063123977290/",
    },
    {
      name: "Demerara Volleyball Association",
      abbreviation: "DVA",
      url: "https://www.facebook.com/p/Demerara-Volleyball-Association-100086251352743/",
    },
    {
      name: "Guyana Beach Volleyball Association",
      abbreviation: "GBVA",
      url: "https://www.facebook.com/profile.php?id=61587344016292#",
    },
  ],
};
