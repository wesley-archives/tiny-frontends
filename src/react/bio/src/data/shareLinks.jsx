import {
  LinkedinLogo,
  TwitterLogo,
  FacebookLogo,
  WhatsappLogo,
  Envelope,
} from "@phosphor-icons/react";

const links = [
  {
    title: "LinkedIn",
    link: `https://www.linkedin.com/sharing/share-offsite/?url=${window.location}`,
    icon: LinkedinLogo,
    iconWeight: "fill",
    bg: "bg-blue-600",
    color: "text-white",
  },
  {
    title: "Twitter",
    link: `https://twitter.com/intent/tweet?text=Check%20out%20this%20Links%20Hub!%20-%20${window.location}`,
    icon: TwitterLogo,
    iconWeight: "fill",
    bg: "bg-sky-500",
    color: "text-white",
  },
  {
    title: "Facebook",
    link: `https://www.facebook.com/sharer.php?u=${window.location}`,
    icon: FacebookLogo,
    iconWeight: "fill",
    bg: "bg-blue-600",
    color: "text-white",
  },
  {
    title: "WhatsApp",
    link: `https://wa.me/?text=Check%20out%20this%20Links%20Hub!%20-%20${window.location}`,
    icon: WhatsappLogo,
    iconWeight: "fill",
    bg: "bg-green-500",
    color: "text-white",
  },
  {
    title: "E-mail",
    link: `mailto:?subject= Check out this Links Hub! &body= Check out this Links Hub! - ${window.location}`,
    icon: Envelope,
    iconWeight: "fill",
    bg: "bg-zinc-800",
    color: "text-white",
  },
];

export default links;
