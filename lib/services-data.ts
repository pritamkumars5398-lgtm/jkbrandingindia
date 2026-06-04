export type ServiceSlug =
  | "graphic-designing"
  | "digital-marketing"
  | "website-development"
  | "search-engine-optimization"
  | "hoarding-kiosk"
  | "exhibition-stall"
  | "photo-videography"
  | "google-ads"
  | "magazine-radio-cinema-ads";

export interface ServiceMeta {
  slug: ServiceSlug;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  icon: string;
}

export const services: ServiceMeta[] = [
  {
    slug: "graphic-designing",
    title: "Graphic Designing",
    tagline: "Visuals that speak louder than words.",
    description: "We craft stunning visual identities — logos, brochures, social media creatives and more — that make your brand unforgettable.",
    heroImage: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Team-8.jpg",
    icon: "✏️",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Reach the right audience, every time.",
    description: "Cost-effective brand awareness campaigns across every digital channel — from social media to email to paid ads.",
    heroImage: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-2.jpg",
    icon: "📱",
  },
  {
    slug: "website-development",
    title: "Website Development",
    tagline: "Websites that work as hard as you do.",
    description: "Responsive, fast, user-centric websites built with modern technology to drive business growth.",
    heroImage: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-3.jpg",
    icon: "💻",
  },
  {
    slug: "search-engine-optimization",
    title: "Search Engine Optimization",
    tagline: "Be found. Be chosen. Be first.",
    description: "Proven SEO strategies that improve your rankings on Google and Bing, driving organic traffic and qualified leads.",
    heroImage: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Team-8.jpg",
    icon: "🔍",
  },
  {
    slug: "hoarding-kiosk",
    title: "Hoarding & Kiosk",
    tagline: "Make your brand impossible to ignore.",
    description: "Eye-catching outdoor advertising solutions — hoardings, kiosks, flex boards and more — that dominate real-world spaces.",
    heroImage: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-2.jpg",
    icon: "🏙️",
  },
  {
    slug: "exhibition-stall",
    title: "Exhibition Stall",
    tagline: "Turn heads at every exhibition.",
    description: "Custom-designed exhibition stalls that create immersive brand experiences and generate direct client engagement.",
    heroImage: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-3.jpg",
    icon: "🏛️",
  },
  {
    slug: "photo-videography",
    title: "Photo & Videography",
    tagline: "Memories crafted, stories told.",
    description: "Stunning photography and cinematic videography that transforms your brand moments into lasting visual assets.",
    heroImage: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Team-8.jpg",
    icon: "🎥",
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    tagline: "Every click counts. Make them count for you.",
    description: "Targeted Google Ads campaigns that put your brand in front of high-intent audiences and maximise your return on investment.",
    heroImage: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-2.jpg",
    icon: "📊",
  },
  {
    slug: "magazine-radio-cinema-ads",
    title: "Magazine, Radio & Cinema Ads",
    tagline: "Multi-channel reach that resonates.",
    description: "Traditional advertising that still works — magazine spreads, radio spots, and cinema pre-rolls that build mass brand awareness.",
    heroImage: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-3.jpg",
    icon: "📰",
  },
];

export function getService(slug: string): ServiceMeta | undefined {
  return services.find(s => s.slug === slug);
}
