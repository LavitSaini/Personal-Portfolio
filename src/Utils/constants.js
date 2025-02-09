import { Home, MessageCircle, PanelsTopLeft, Star } from "lucide-react";
import { animate } from "motion";

export const navItems = [
  {
    icon: Home,
    label: "home",
  },
  {
    icon: PanelsTopLeft,
    label: "projects",
  },
  {
    icon: Star,
    label: "testimonials",
  },
  {
    icon: MessageCircle,
    label: "contact",
  },
];

export const mediaItems = [
  {
    label: "linkedin",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/sonalika-saini-5554b0196/",
  },
  {
    label: "upwork",
    icon: "briefcase",
    href: "https://www.upwork.com/freelancers/~01a866f60af1568d12?p=1844996237033086976",
  },
];

export const projectsCategories = [
  { label: "Shopify Stores", y: -30 },
  { label: "Templates", y: 30 },
  { label: "Posts", y: -30 },
  { label: "Logo's", y: 30 },
  { label: "Flyres", y: -30 },
];

export const projects = [
  {
    name: "Delaphe Sport",
    media: "../assets/images/projects_images/delaphesport.png",
    category: "shopify stores",
    description: [
      "Store Setup",
      "Theme Development & Customization",
      "App Integration",
      "Widget Customization",
      "Payment method and Shipping configuration",
      "Integration of Third-Party Add-ons like Mailchimp, Wishlist, Live chat, SSL etc",
      "Experienced in JavaScript, jQuery, HTML5, CSS3, Twitter Bootstrap, UI/UX design.",
    ],
    link: "https://www.delaphesport.com/",
  },
  {
    name: "REC Watches",
    media: "../assets/images/projects_images/rec_watches.png",
    category: "shopify stores",
    description: [
      " Integrated the theme according to PSD design",
      "Integrated the Oberlo app to get the data (Products, Customers, Orders) import",
      "App Integration",
      "Integrated the API for the payments and integrated the Mailchimp to get the leads capture",
      "Integrated Gmail and Facebook API, So that the users can easily signup on the website",
    ],
    link: "https://www.recwatches.com/",
  },
  {
    name: "Belly Bands",
    media: "../assets/images/projects_images/belly_bands.png",
    category: "shopify stores",
    description: [
      "Store Setup",
      "Theme Development & Customization",
      "App Integration",
      "Widget Customization",
      "Payment method and Shipping configuration",
      "Integration of Third-Party Add-ons like Mailchimp, Wishlist, Live chat, SSL etc",
      "Experienced in JavaScript, jQuery, HTML5, CSS3, Twitter Bootstrap, UI/UX design.",
    ],
    link: "https://www.bellybands.com.au/",
  },
  {
    name: "Mavori",
    media: "../assets/images/projects_images/mavori.png",
    category: "shopify stores",
    description: [
      "PSD design",
      "Store Setup",
      "Theme customization",
      "Design stuff",
      "Styling of pages",
      "Custom development",
    ],
    link: "https://mavori.de/",
  },
  {
    name: "Prolon Life",
    media: "../assets/images/projects_images/prolon_life.png",
    category: "shopify stores",
    description: [
      "Store Setup",
      "Theme Development & Customization",
      "App Integration",
      "Widget Customization",
      "Payment method and Shipping configuration",
      "Integration of Third-Party Add-ons like Mailchimp, Wishlist, Live chat, SSL etc",
      "Experienced in JavaScript, jQuery, HTML5, CSS3, Twitter Bootstrap, UI/UX design.",
    ],
    link: "https://prolonlife.com/",
  },
  {
    name: "Pure Plates",
    media: "../assets/images/projects_images/pure_plates.png",
    category: "shopify stores",
    description: [
      "PSD design",
      "PSD to HTML conversion after approval",
      "Store Integration from HTML to SHOPIFY",
      "Theme customization",
      "Design stuff",
      "Styling of pages",
      "Custom development if required",
      "UI/UX Design for Web and Mobile",
    ],
    link: "https://pureplatesstl.com/",
  },
  {
    name: "Success Shoppin",
    media: "../assets/images/projects_images/success_shoppin.png",
    category: "shopify stores",
    description: [
      "Design major pages based on requirement",
      "HTML conversion after design approval",
      "Store Integration from HTML to SHOPIFY",
      "Widget Customization based on requirement",
      "Payment method and shipping configuration",
      "UI/UX Design for Web and Mobile",
    ],
    link: null,
  },
  {
    name: "Isabel Claudia",
    media: "../assets/images/projects_images/isabel_claudia.jpg",
    category: "logo's",
    description: null,
    link: null,
  },
  {
    name: "Donna Stroupe",
    media: "../assets/images/projects_images/donna_stroupe.jpg",
    category: "logo's",
    description: null,
    link: null,
  },
  {
    name: "Avery Davis",
    media: "../assets/images/projects_images/avery_davis.jpg",
    category: "logo's",
    description: null,
    link: null,
  },
  {
    name: "Creative Design",
    media: "../assets/images/projects_images/creative_design.jpg",
    category: "logo's",
    description: null,
    link: null,
  },
  {
    name: "Financial Success",
    media: "../assets/images/projects_images/financial_success.jpg",
    category: "posts",
    description: null,
    link: null,
  },
  {
    name: "Marketing Fundamentals",
    media: "../assets/images/projects_images/marketing_fundamentals.jpg",
    category: "posts",
    description: null,
    link: null,
  },
  {
    name: "Marketing",
    media: "../assets/videos/projects_videos/marketing.mp4",
    category: "posts",
    description: null,
    link: null,
  },
  {
    name: "Creative Marketing Ayency",
    media: "../assets/videos/projects_videos/creative_marketing_ayency.mp4",
    category: "posts",
    description: null,
    link: null,
  },
  {
    name: "Beauty Salon & Spa",
    media: "../assets/videos/projects_videos/beauty_salon_spa.mp4",
    category: "flyres",
    description: null,
    link: null,
  },
  {
    name: "Serenity Grand Hotel",
    media: "../assets/images/projects_images/serenity_grand_hotel.png",
    category: "flyres",
    description: null,
    link: null,
  },
  {
    name: "A Beautifull Morning",
    media: "../assets/videos/projects_videos/a_beautifull_morning.mp4",
    category: "flyres",
    description: null,
    link: null,
  },
  {
    name: "The Larana's",
    media: "../assets/images/projects_images/the_larana's.png",
    category: "flyres",
    description: null,
    link: null,
  },
  {
    name: "Business Webinar",
    media: "../assets/images/projects_images/business_webinar.jpg",
    category: "templates",
    description: null,
    link: null,
  },
  {
    name: "Team Building Workshop",
    media: "../assets/images/projects_images/team_building_workshop.jpg",
    category: "templates",
    description: null,
    link: null,
  },
  {
    name: "Painting Exhibit",
    media: "../assets/images/projects_images/painting_exhibit.jpg",
    category: "templates",
    description: null,
    link: null,
  },
  {
    name: "Wedding Invitation",
    media: "../assets/images/projects_images/wedding_invitation.jpg",
    category: "templates",
    description: null,
    link: null,
  },
  {
    name: "Images Frame",
    media: "../assets/images/projects_images/images_frame.jpg",
    category: "templates",
    description: null,
    link: null,
  },
];

export const testimonials = [
  {
    name: "Connor",
    rating: 5,
    experience:
      "Great work completed the project within the time and ironed out everything. Had great feedback from many people. Made it easy to use and an enjoyable experience. Was also very patients.",
    duration: "Aug 27, 2024 - Sep 2, 2024",
    project: "Delaphe Brand",
  },
  {
    name: "Mitchell",
    rating: 5,
    experience: "Very talented and executed everything I need for my store.",
    duration: "Feb 11, 2024 - Feb 17, 2024",
    project: "Shopify Store Redesign for Conversion-Focused Look",
  },
  {
    name: "Andrea",
    rating: 5,
    experience:
      "Sonalika is great; attentive and detailed she’s my go to anytime I need updating on my Shopify site.",
    duration: "Dec 18, 2021 - Jan 4, 2022",
    project: "Success Shoppin",
  },
  {
    name: "Marco",
    rating: 4,
    experience:
      "No question, Sonalika is an expert in shopify. The communication was friendly and the response times were short.",
    duration: "Jul 16, 2021 - Sep 4, 2021",
    project: "Expert needed for a professional shopify set up",
  },
  {
    name: "DeAngelo",
    rating: 5,
    experience:
      "I recommend her services and I will continue to work with her when needed.",
    duration: "Jul 29, 2021 - Aug 12, 2021",
    project: "Build Shopify Store for Brand",
  },
];

export const technologiesIcons = [
  {
    label: "HTML5",
    url: "../assets/images/technologies_icons/html-5.png",
    rotateAngle: Math.floor(Math.random() * 360),
    animate: true,
  },
  {
    label: "CSS3",
    url: "../assets/images/technologies_icons/css-3.png",
    rotateAngle: Math.floor(Math.random() * 360),
    animate: false,
  },
  {
    label: "JS",
    url: "../assets/images/technologies_icons/js.png",
    rotateAngle: Math.floor(Math.random() * 360),
    animate: true,
  },
  {
    label: "Bootstrap",
    url: "../assets/images/technologies_icons/bootstrap.png",
    rotateAngle: Math.floor(Math.random() * 360),
    animate: false,
  },
  {
    label: "Figma",
    url: "../assets/images/technologies_icons/figma.png",
    rotateAngle: Math.floor(Math.random() * 360),
    animate: false,
  },
  {
    label: "Shopify",
    url: "../assets/images/technologies_icons/shopify.png",
    rotateAngle: Math.floor(Math.random() * 360),
    animate: true,
  },
  {
    label: "Upwork",
    url: "../assets/images/technologies_icons/upwork.png",
    rotateAngle: Math.floor(Math.random() * 360),
    animate: true,
  },
];
