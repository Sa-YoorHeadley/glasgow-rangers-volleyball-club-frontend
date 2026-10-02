// Global site-wide content
export type GlobalContent = {
  siteName: string;
  siteDescription: string;
  logo?: Logo;
  seoDefaults: Seo;
  socialLinks: SocialLink[];
  contactEmail: string;
  phoneNumber: string;
  location: string;
  footerData: {
    pages: PageLink[];
  };
  navbarData: { pages: PageLink[]; cta: Button };
  affiliations: Affiliation[];
};

// PageLink structure for navigation and footer links
export type PageLink = {
  title: string;
  slug: string;
  parent?: { title: string } | null;
  category?: string;
  icon?: string;
};
// Logo object, includes image and text
export type Logo = {
  logoImage: Image;
  logoText: string;
};

// Image object with URL and alt text
export type Image = {
  url: string;
  alternativeText: string | null;
};

// SEO metadata for pages
export type Seo = {
  metaTitle: string;
  metaDescription: string;
  metaImage: Image | null;
  metaKeywords?: string[];
  metaCanonicalUrl?: string;
};

// Dropdown menu structure for navigation
export type DropdownLink = {
  name: string;
  links: Link[];
};

// Simple navigation link
export type Link = {
  name: string;
  url: string;
};

// Social media link with icon
export type SocialLink = {
  platform: "facebook" | "instagram" | "tiktok" | "youtube";
  url: string;
  icon: string;
};

export type Affiliation = {
  name: string;
  url: string;
  abbreviation: string;
};

// Player profile for team roster
export type Player = {
  name: string;
  tagline?: string;
  accolades?: string[] | null;
  gender: "Male" | "Female";
  isCaptain?: boolean;
  isActive: boolean;
  position:
    | "Middle Blocker"
    | "Outside Hitter"
    | "Setter"
    | "Libero"
    | "Opposite Hitter"
    | "Defensive Specialist";
  height: string | null;
  standingReach?: string | null;
  verticalJump?: string | null;
  shoeSize: {
    US: number;
    EU: number;
    UK: number;
  } | null;
  shirtSize: "XS" | "S" | "M" | "L" | "XL" | "XXL" | null;
  waistSize: number | null;
  jerseyNumber: number | null;
  isJunior: boolean;
  photo: Image | null;
};

// Custom color palette for consistent theming
export type CustomColors =
  | "primary"
  | "secondary"
  | "secondary-dark"
  | "tertiary"
  | "neutral";

// Button definition for CTAs and forms
export type Button = {
  title: string;
  url?: string | null;
  backgroundColor: CustomColors | "white" | "black" | "transparent";
  textColor: CustomColors | "white" | "black";
  type?: "button" | "submit" | "link";
};

export type HomeContent = {
  hero: {
    title: string;
    tagline: string;
    subtitle: string;
    image: Image | null;
    primaryCta: Button;
    secondaryCta: Button;
  };
};

export type AboutContent = {
  hero: {
    title: string;
    tagline: string;
    subtitle: string;
    image: Image | null;
  };
  moreInfo: {
    title: string;
    content: string;
    icon: string;
  }[];
  executives: {
    title: string;
    subtitle: string;
    members: ExecutiveMember[];
  };
};

export type ExecutiveMember = {
  name: string;
  role: string;
  photo: Image | null;
  emailAddress: string | null;
  phoneNumber: string | null;
};

export type EventContent = { title: string; subtitle: string; events: Event[] };

// Event card content
export type Event = {
  title: string;
  subtitle: string;
  location: {
    title: string;
    url: string;
  };
  date: string;
  type: "Match" | "Tournament" | "Social" | "Fundraiser";
};

export type TeamContent = {
  title: string;
  subtitle: string;
  teams: Team[];
};

export type Team = {
  teamName: string;
  description: string;
  url: string;
  division: string | null;
  accolades: string[] | null;
  players: Player[];
  teamPhoto?: Image | null;
};

// Registration content for the registration page
export type RegistrationContent = {
  title: string;
  tagline: string;
  subtitle: string;
  form: {
    fields: FormField[];
    submitButton: Button;
  };
  whatToExpect: {
    title: string;
    points: {
      icon: string;
      title: string;
      subtitle: string;
    }[];
  };
};

export type FormField = {
  name: string;
  label: string;
  type:
    | "text"
    | "number"
    | "email"
    | "tel"
    | "select"
    | "checkbox"
    | "text-area";
  options?: string[]; // For select fields
  required: boolean;
  placeholder?: string;
};

// Contact content for the contact page
export type ContactContent = {
  title: string;
  subtitle: string;
  form: {
    fields: FormField[];
    submitButton: Button;
  };
};

// Sponsor content for the sponsor page
export type SponsorContent = {
  title: string;
  subtitle: string;
  whySponsorUs: {
    title: string;
    points: { icon: string; title: string; subtitle: string }[];
  };
  ourCorporatePartners: {
    title: string;
    subtitle: string;
    partners: CorporatePartner[];
  };
  donationMethods: {
    title: string;
    methods: {
      icon: string;
      title: string;
      subtitle: string;
      accountDetails: {
        accountName: string;
        accountNumber?: string;
        bankName?: string;
        branch?: string;
      };
    }[];
    cta: Button;
  };
};

export type CorporatePartner = {
  name: string;
  logo?: string;
  website: string;
};

export type TrainingContent = {
  hero: {
    title: string;
    tagline: string;
    subtitle: string;
    cta: Button;
    calendarEmbedUrl: string;
  };
  trainingScheduleSection: {
    title: string;
    description: string;
    trainingSchedules: TrainingSchedule[];
  };
};

export type TrainingSchedule = {
  title: string;
  icon: string;
  times: {
    day: string;
    time: string;
    location: { name: string; url: string };
  }[];
};

export type GalleryContent = {
  title: string;
  subtitle: string;
  categories: ("All" | "Matches" | "Social" | "Fundraisers")[];
  media: (MediaItem | EmbedMediaItem)[];
};

export type MediaItem = {
  title: string;
  featuredHighlight: boolean;
  date: string;
  category: "Matches" | "Social" | "Fundraisers";
  coverImage: Image;
  images: Image[];
};

export type EmbedMediaItem = {
  title: string;
  featuredHighlight: boolean;
  date: string;
  category: "Matches" | "Social" | "Fundraisers";
  embedUrl: string;
};

export type NewsContent = {
  title: string;
  subtitle: string;
  newsItems: NewsItem[];
};

export type NewsItem = ClubArticle | ExternalArticle;

export type ClubArticle = {
  type: "club";
  category:
    | "Announcement"
    | "Match Report"
    | "Player Spotlight"
    | "Event Recap";
  slug: string;
  title: string;
  date: string;
  content: string;
};

export type ExternalArticle = {
  type: "external";
  category:
    | "Announcement"
    | "Match Report"
    | "Player Spotlight"
    | "Event Recap";
  source: string;
  url: string;
  title: string;
  date: string;
  summary: string;
};
