export type Project = {
  title: string;
  description: string;
  image: string;
  imageSrcSet: string;
  imageAlt: string;
  href: string;
  compact?: boolean;
};

export const projects: Project[] = [
  {
    title: "Bipbip",
    description:
      "A carpooling app connecting university students for safer, more affordable rides.",
    image: "/assets/bipbip-1600.webp",
    imageSrcSet: "/assets/bipbip-800.webp 800w, /assets/bipbip-1600.webp 1600w",
    imageAlt: "Bipbip carpooling app interface and illustrated characters",
    href: "https://www.behance.net/gallery/224952691/Bipbip-Carpooling-Mobile-App-UXUI",
  },
  {
    title: "Lumi",
    description:
      "A wearable and mobile app that helps students build healthier eating and hydration habits.",
    image: "/assets/lumi-1600.webp",
    imageSrcSet: "/assets/lumi-800.webp 800w, /assets/lumi-1600.webp 1600w",
    imageAlt: "Lumi wearable and mobile app design",
    href: "https://www.behance.net/gallery/239424711/Lumi-wearable-app-HCI",
  },
  {
    title: "¿Dónde comemos hoy?",
    description:
      "A group dining tool that matches restaurants to everyone's food preferences for fairer decisions.",
    image: "/assets/dining-1600.webp",
    imageSrcSet: "/assets/dining-800.webp 800w, /assets/dining-1600.webp 1600w",
    imageAlt: "A group conversation exploring where to eat together",
    href: "https://www.behance.net/gallery/250954473/Donde-comemos-hoy-Sociotechnical-Interaction-Case",
    compact: true,
  },
  {
    title: "SolarApp GDO",
    description:
      "A mobile app that simplifies solar energy monitoring and empowers homeowners to make informed decisions.",
    image: "/assets/solar-1600.webp",
    imageSrcSet: "/assets/solar-800.webp 800w, /assets/solar-1600.webp 1600w",
    imageAlt: "SolarApp GDO solar energy monitoring interface",
    href: "https://www.behance.net/gallery/250429999/SolarApp-GDO",
  },
];
