import bipbipImage from "../imports/imgcarouselBipbip01.png";
import lumiImage from "../imports/imgcarouselLumi02-1.png";
import diningImage from "../imports/imgcarousel_D_nde_comemos_hoy_03.png";
import solarImage from "../imports/imgcarouselgdo04.png";

export type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
  compact?: boolean;
};

export const projects: Project[] = [
  {
    title: "Bipbip",
    description:
      "A carpooling app connecting university students for safer, more affordable rides.",
    image: bipbipImage,
    href: "https://www.behance.net/gallery/224952691/Bipbip-Carpooling-Mobile-App-UXUI",
  },
  {
    title: "Lumi",
    description:
      "A wearable and mobile app that helps students build healthier eating and hydration habits.",
    image: lumiImage,
    href: "https://www.behance.net/gallery/239424711/Lumi-wearable-app-HCI",
  },
  {
    title: "¿Dónde comemos hoy?",
    description:
      "A group dining tool that matches restaurants to everyone's food preferences for fairer decisions.",
    image: diningImage,
    href: "https://www.behance.net/gallery/250954473/Donde-comemos-hoy-Sociotechnical-Interaction-Case",
    compact: true,
  },
  {
    title: "SolarApp GDO",
    description:
      "A mobile app that simplifies solar energy monitoring and empowers homeowners to make informed decisions.",
    image: solarImage,
    href: "https://www.behance.net/gallery/250429999/SolarApp-GDO",
  },
];
