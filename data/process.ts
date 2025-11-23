export const processData = {
  title: "How We Turn Video Into Sales",
  subtitle: "Our proven 6-step process that transforms your content into a revenue-generating machine",
  steps: [
    {
      number: "01",
      title: "Discover",
      description: "We dive deep into your business, target audience, and goals to understand what drives your customers.",
      icon: "Search",
      whatYouDo: [
        "Share business goals & challenges",
        "Provide customer insights",
        "Define success metrics"
      ],
      whatWeDo: [
        "Conduct market research",
        "Analyze competitor content",
        "Identify content opportunities"
      ]
    },
    {
      number: "02", 
      title: "Strategy",
      description: "We create a comprehensive content strategy aligned with your business objectives and audience preferences.",
      icon: "Target",
      whatYouDo: [
        "Review & approve strategy",
        "Provide brand guidelines",
        "Set campaign timelines"
      ],
      whatWeDo: [
        "Develop content pillars",
        "Create posting calendars",
        "Plan distribution strategy"
      ]
    },
    {
      number: "03",
      title: "Pre-Production", 
      description: "We plan every detail from scripts to shot lists, ensuring efficient and effective content creation.",
      icon: "FileText",
      whatYouDo: [
        "Approve scripts & concepts",
        "Schedule shoot dates",
        "Prepare locations & props"
      ],
      whatWeDo: [
        "Write compelling scripts",
        "Create detailed shot lists",
        "Plan equipment & logistics"
      ]
    },
    {
      number: "04",
      title: "Production",
      description: "Our professional team captures high-quality footage that tells your story and showcases your value.",
      icon: "Video",
      whatYouDo: [
        "Be available for shoots",
        "Provide access & guidance",
        "Review rough cuts"
      ],
      whatWeDo: [
        "Professional filming",
        "Multiple format capture",
        "Real-time quality checks"
      ]
    },
    {
      number: "05",
      title: "Distribution",
      description: "We optimize and distribute your content across all relevant platforms for maximum reach and engagement.",
      icon: "Share2",
      whatYouDo: [
        "Review scheduled posts",
        "Engage with comments",
        "Share feedback"
      ],
      whatWeDo: [
        "Platform-native posting",
        "Optimal timing & hashtags",
        "Community management"
      ]
    },
    {
      number: "06",
      title: "Reporting",
      description: "We track, analyze, and report on performance metrics that matter to your business growth.",
      icon: "BarChart3",
      whatYouDo: [
        "Review monthly reports",
        "Provide business feedback",
        "Set next month goals"
      ],
      whatWeDo: [
        "Track key metrics",
        "Analyze performance data",
        "Optimize future content"
      ]
    }
  ],
  timeline: {
    discovery: "Week 1",
    strategy: "Week 1-2", 
    preProduction: "Week 2-3",
    production: "Week 3-4",
    distribution: "Ongoing",
    reporting: "Monthly"
  }
} as const
