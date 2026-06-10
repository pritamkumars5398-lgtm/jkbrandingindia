export type ServiceSlug =
  | "graphic-designing"
  | "logo-design"
  | "stationery-design"
  | "banner-standee-design"
  | "packaging-label-design"
  | "menu-design"
  | "invitation-card-design"
  | "tag-design"
  | "brochure-design"
  | "bag-design"
  | "website-development"
  | "search-engine-optimization"
  | "digital-marketing";

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
    slug: "logo-design",
    title: "Logo Design",
    tagline: "The first impression your brand makes.",
    description: "A professional, distinctive logo that captures your company's values and becomes the face of your brand across every touchpoint.",
    heroImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1600&q=70",
    icon: "🎯",
  },
  {
    slug: "stationery-design",
    title: "Stationery Design",
    tagline: "Cohesive identity, from the very first touch.",
    description: "Letterheads, business cards, envelopes, folders and more — polished stationery that strengthens your corporate identity.",
    heroImage: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=1600&q=70",
    icon: "📄",
  },
  {
    slug: "banner-standee-design",
    title: "Banner & Standee Design",
    tagline: "High-impact displays that get you noticed.",
    description: "Fixed, X-style, expandable or retractable stands and banners — portable, high-impact visuals that work at any size, any placement.",
    heroImage: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1600&q=70",
    icon: "🚩",
  },
  {
    slug: "packaging-label-design",
    title: "Packaging & Label Design",
    tagline: "Your product's first physical handshake.",
    description: "Standout packaging and labels that convey your brand's identity, quality and reputation — and win the shelf.",
    heroImage: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&q=70",
    icon: "📦",
  },
  {
    slug: "menu-design",
    title: "Menu Design",
    tagline: "Menus that sell, not just list.",
    description: "Menus that express your eatery's personality, help customers grasp your concept and drive profitability.",
    heroImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=70",
    icon: "🍽️",
  },
  {
    slug: "invitation-card-design",
    title: "Invitation Card Design",
    tagline: "Set the tone before the event begins.",
    description: "Beautifully crafted invitations for weddings, events and celebrations — designed to make a memorable first impression.",
    heroImage: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=1600&q=70",
    icon: "💌",
  },
  {
    slug: "tag-design",
    title: "Tag & Label Design",
    tagline: "Small details, premium feel.",
    description: "Custom tags — price, care, gift and product tags — designed for clarity, character and a premium finish.",
    heroImage: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1600&q=70",
    icon: "🏷️",
  },
  {
    slug: "brochure-design",
    title: "Brochure Design",
    tagline: "Tell your brand's story in print.",
    description: "Beautifully designed brochures that introduce your company and showcase your products, services and key features.",
    heroImage: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=1600&q=70",
    icon: "📖",
  },
  {
    slug: "bag-design",
    title: "Bag Design",
    tagline: "A walking advertisement for your brand.",
    description: "Custom-designed bags that carry your brand wherever your customers go — practical, premium and unmistakably you.",
    heroImage: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=1600&q=70",
    icon: "🛍️",
  },
  {
    slug: "website-development",
    title: "Website Development",
    tagline: "Websites that turn visitors into customers.",
    description: "Fast, responsive, SEO-ready websites — from business sites and landing pages to full e-commerce stores — built to grow your brand online.",
    heroImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&q=70",
    icon: "💻",
  },
  {
    slug: "search-engine-optimization",
    title: "Search Engine Optimization",
    tagline: "Rank higher. Get found. Grow organically.",
    description: "Data-driven SEO that lifts your rankings, drives qualified traffic and keeps your brand on the first page where customers are searching.",
    heroImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1600&q=70",
    icon: "📈",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Reach the right audience at the right time.",
    description: "Full-funnel digital marketing — social media, paid ads, content and email — that builds awareness, engagement and measurable growth.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=70",
    icon: "🚀",
  },
];

export function getService(slug: string): ServiceMeta | undefined {
  return services.find(s => s.slug === slug);
}
