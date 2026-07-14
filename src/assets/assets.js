import {
  BeefIcon,
  Building2Icon,
  CroissantIcon,
  FishIcon,
  GlobeIcon,
  LeafIcon,
  MailIcon,
  Share2Icon,
  UtensilsCrossedIcon,
} from "lucide-react";


import restaurant1 from "../../public/restaurant_1.png";
import restaurant2 from "../../public/restaurant_2.jpg";
import restaurant3 from "../../public/restaurant_3.jpg";
import restaurant4 from "../../public/restaurant_4.png";
// import restaurant5 from "../../public/restaurant_5.png";
// import restaurant6 from "../../public/restaurant_6.png";
// import restaurant7 from "../../public/restaurant_7.png";
// import restaurant8 from "../../public/restaurant_8.png";

export const cuisines = [
  { name: "Italian", icon: UtensilsCrossedIcon, label: "ITALIAN" },
  { name: "Japanese", icon: FishIcon, label: "SUSHI" },
  { name: "French", icon: CroissantIcon, label: "FRENCH" },
  { name: "Rooftop", icon: Building2Icon, label: "ROOFTOP" },
  { name: "Steakhouse", icon: BeefIcon, label: "STEAKHOUSE" },
  { name: "Vegetarian", icon: LeafIcon, label: "VEGETARIAN" },
];

export const restaurants = [
  {
    _id: "1",
    name: "The Golden Table",
    slug: "the-golden-table",
    cuisine: "Italian",
    priceRange: "$$$",
    rating: 4.8,
    reviewCount: 124,
    location: "Vancouver, BC",
    image: restaurant1,
    availableSlots: ["17:30", "18:00", "19:00", "20:30"],
    featured: true,
    exclusive: true,
  },
  {
    _id: "2",
    name: "Sakura Dining",
    slug: "sakura-dining",
    cuisine: "Japanese",
    priceRange: "$$",
    rating: 4.6,
    reviewCount: 89,
    location: "Burnaby, BC",
    image: restaurant2,
    availableSlots: ["16:30", "18:30", "21:00"],
    featured: false,
    exclusive: true,
  },
  {
    _id: "3",
    name: "The Golden Table",
    slug: "the-golden-table",
    cuisine: "Italian",
    priceRange: "$$$",
    rating: 4.8,
    reviewCount: 124,
    location: "Vancouver, BC",
    image: restaurant3,
    availableSlots: ["17:30", "18:00", "19:00", "20:30"],
    featured: true,
    exclusive: false,
  },
  {
    _id: "4",
    name: "Sakura Dining",
    slug: "sakura-dining",
    cuisine: "Japanese",
    priceRange: "$$",
    rating: 4.6,
    reviewCount: 89,
    location: "Burnaby, BC",
    image: restaurant4,
    availableSlots: ["16:30", "18:30", "21:00"],
    featured: false,
    exclusive: true,
  },
];


export const socialLinks = [
    { icon: GlobeIcon, href: "#" },
    { icon: Share2Icon, href: "#" },
    { icon: MailIcon, href: "#" },
];

export const bottomLinks = [
    { label: "Terms", path: "#" },
    { label: "Privacy", path: "#" },
];

export const footerSections = [
    {
        title: "COMPANY",
        links: [
            { label: "About Us", path: "#" },
            { label: "Partner with Us", path: "#" },
            { label: "Careers", path: "#" },
        ],
    },
    {
        title: "LEGAL",
        links: [
            { label: "Terms of Service", path: "#" },
            { label: "Privacy Policy", path: "#" },
            { label: "Cookies", path: "#" },
        ],
    },
];