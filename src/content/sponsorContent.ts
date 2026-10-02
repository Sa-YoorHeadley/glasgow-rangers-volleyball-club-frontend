import type { SponsorContent } from "../types/globals";

export const sponsorContent: SponsorContent = {
  title: "Support the Rangers",
  subtitle:
    "Partner with Guyana's premier volleyball club and help us continue our legacy of excellence. One Shot One Kill.",
  whySponsorUs: {
    title: "Why Sponsor Us?",
    points: [
      {
        icon: "mdi:eye",
        title: "Brand Visibility",
        subtitle:
          "Showcase your brand to a wide audience through our events, social media, and merchandise.",
      },
      {
        icon: "mdi:account-group",
        title: "Community Impact",
        subtitle:
          "Directly fund youth development programs and local community sports initiatives in Guyana.",
      },
      {
        icon: "mdi:school",
        title: "Youth Development",
        subtitle:
          "Support the growth of young athletes and contribute to the future of volleyball in Guyana.",
      },
    ],
  },
  ourCorporatePartners: {
    title: "Our Corporate Partners",
    subtitle:
      "We thank the following organizations for their continued support:",
    partners: [
      {
        name: "Ezra Glasgow",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Digicel_logo.svg/1920px-Digicel_logo.svg.png?_=20180104174818",
        website: "https://www.digicelgroup.com/",
      },
      {
        name: "RDC Region 10",
        logo: "https://enetworks.gy/assets/images/enet-logo_colour.png",
        website: "https://www.enetworks.gy/",
      },
    ],
  },
  donationMethods: {
    title: "Direct Transfer Methods",
    methods: [
      {
        icon: "mdi:cellphone-iphone",
        title: "Mobile Money Guyana (MMG)",
        subtitle: "Send your sponsorship directly to our MMG account.",
        accountDetails: {
          accountName: "Glasgow Rangers Volleyball Club",
          accountNumber: "123-456-789",
        },
      },
      {
        icon: "mdi:bank-transfer",
        title: "Direct Bank Transfer",
        subtitle: "Send your sponsorship directly to our bank account.",
        accountDetails: {
          bankName: "Republic Bank (Guyana) Limited",
          accountName: "Glasgow Rangers Volleyball Club",
          accountNumber: "123-456-789",
          branch: "Linden Branch",
        },
      },
    ],
    cta: {
      title: "Make a Cash Donation",
      url: "/about",
      backgroundColor: "secondary",
      textColor: "primary",
    },
  },
};
