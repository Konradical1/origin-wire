export const servicesData = {
  videography: {
    headline: "Videography that sells, not just stuns.",
    subheadline: "From product explainers to short-form series, we plan and produce content tied to revenue.",
    bullets: [
      "Script, shoot, edit, captions, thumbnails",
      "Formats for TikTok, IG, YouTube, web",
      "Performance cuts and A/B hooks"
    ],
    packages: [
      {
        name: "Starter Reel Kit",
        priceFrom: 1200,
        deliverables: [
          "8 short-form videos/month",
          "Captions & thumbnails",
          "Post scheduling"
        ],
        slug: "starter-reel-kit"
      },
      {
        name: "Launch Bundle", 
        priceFrom: 3500,
        deliverables: [
          "2 hero videos",
          "12 short-form videos",
          "Landing page snippets"
        ],
        slug: "launch-bundle"
      },
      {
        name: "Always-On Content",
        priceFrom: 5500,
        deliverables: [
          "20+ shorts/month",
          "On-site shoot days",
          "Paid ad cutdowns"
        ],
        slug: "always-on"
      }
    ],
    whatsIncluded: [
      "Scripting & shot lists",
      "Professional b-roll footage",
      "Color grading & sound design",
      "Multiple aspect ratios (9:16, 1:1, 16:9)",
      "Captions & thumbnail design"
    ],
    outcomes: [
      "↑ Watch time & engagement",
      "↑ Saves & shares",
      "↑ Quality leads generated"
    ]
  },
  social: {
    headline: "Your weekly content machine.",
    subheadline: "We plan, post, and optimize across TikTok, Instagram, YouTube, and Facebook.",
    services: [
      "Content Strategy - ICP, offers, pillars, calendar",
      "Distribution - Native posts, timing, CTAs, community mgmt",
      "Paid Support - Boost best posts, UGC seeding, retargeting",
      "Reporting - Monthly KPI deck with actionable insights"
    ],
    plans: [
      {
        name: "Essentials",
        postsPerWeek: 3,
        communityHours: 2,
        reporting: "Monthly",
        priceFrom: 800
      },
      {
        name: "Growth", 
        postsPerWeek: 5,
        communityHours: 4,
        reporting: "Monthly + experiments",
        priceFrom: 1500
      },
      {
        name: "Scale",
        postsPerWeek: 7,
        communityHours: 6,
        reporting: "Weekly + paid support",
        priceFrom: 2500
      }
    ],
    integrations: [
      "Meta Business Suite",
      "TikTok for Business",
      "YouTube Studio",
      "UTM link tracking"
    ]
  },
  web: {
    headline: "Websites that convert the attention your content earns.",
    subheadline: "Landing pages, speed optimization, SEO, and lead capture designed to turn visitors into customers.",
    focus: [
      "Campaign landing pages",
      "Site speed optimization",
      "SEO & schema markup", 
      "Lead capture & conversion"
    ]
  },
  analytics: {
    headline: "Data that drives decisions.",
    subheadline: "Monthly reports, dashboards, and content insights that show what's working.",
    kpis: [
      "Views & Watch Time",
      "Saves & Engagement Rate",
      "Click-Through Rate (CTR)",
      "Leads & Cost Per Lead (CPL)"
    ]
  }
} as const
