import { assets } from "@/lib/assets";

const CDN = "https://cdn.prod.website-files.com";

export const site = {
  name: "NVGraphy",
  fullName: "Mahadev",
  title: "NVGraphy — Boutique Design Studio",
  description:
    "Independent product design and engineering. Digital brands, platforms, and experiences that look suspiciously good — and actually ship.",
  url: "https://nv-portfolio-ruby.vercel.app",
  email: "hello@mahadev.dev",
  location: "India",
  hours: "Monday–Friday 10:00 – 17:00",
  github: "https://github.com/mahadevrollwin",
  twitter: "https://x.com/mahadevrollwin",
  linkedin: "https://www.linkedin.com/in/mahadevrollwin",
  tagline: "LOOKING SUSPICIOUSLY GOOD",
};

export const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Let's Talk" },
];

export const heroTags = [
  { label: "Independent studio", rotate: -8, x: "8%", y: "28%" },
  { label: "Branding & design", rotate: 6, x: "42%", y: "48%" },
  { label: "No funny business", rotate: -4, x: "62%", y: "22%" },
];

export const aboutBlurb = {
  eyebrow: "A BIT ABOUT US",
  body: "We believe creative work needs focus. That’s why we keep our team tight and our involvement high, so every project gets our full attention. We build brands from scratch or make them better.",
  pills: ["Professional overthinkers", "Nerding out on design", "Allergic to generic"],
  media: [
    { type: "video" as const, src: assets.aboutShot1Mp4 },
    { type: "image" as const, src: assets.aboutShot2 },
    { type: "video" as const, src: assets.aboutShot3Mp4 },
    { type: "image" as const, src: assets.aboutShot4 },
    { type: "image" as const, src: assets.aboutShot5 },
    { type: "image" as const, src: assets.aboutShot6 },
  ],
};

export const services = [
  {
    slug: "brand-strategy",
    words: ["Brand", "Strategy"],
    copy: "We find the idea, the angle and the reasons people should care.",
    lottie: "/lottie/brand-strategy.json",
    offset: { right: "-27%" },
  },
  {
    slug: "brand-identity",
    words: ["Brand", "identity"],
    copy: "We give your brand a distinctive look, feel and personality that feel unmistakably yours.",
    lottie: "/lottie/brand-identity.json",
    offset: { left: "-17%" },
  },
  {
    slug: "web-design",
    words: ["Web", "design"],
    copy: "We turn your brand into a digital experience that looks great, feels right and is easy to navigate.",
    lottie: "/lottie/web-design.json",
    offset: { right: "-5%" },
  },
  {
    slug: "illustration",
    words: ["Illustration"],
    copy: "We create distinctive illustrations that add character to your brand.",
    lottie: "/lottie/illustration.json",
    offset: { right: "-30%" },
  },
  {
    slug: "motion-design",
    words: ["Motion", "Design"],
    copy: "We make your brand move, cause standing still just isn’t enough.",
    lottie: "/lottie/motion-design.json",
    offset: { left: "-10%" },
  },
  {
    slug: "packaging",
    words: ["Packaging", "Design"],
    copy: "We create packaging that catches the eye and works better for your brand.",
    lottie: "/lottie/packaging.json",
    offset: { right: "-20%" },
  },
  {
    slug: "art-direction",
    words: ["Art", "direction"],
    copy: "We keep all the moving parts moving in the same direction, from the big idea down to the smallest detail.",
    lottie: "/lottie/art-direction.json",
    offset: { left: "-21%" },
  },
];

export const projects = [
  {
    slug: "heygluco",
    title: "HeyGluco",
    category: "Health & Wellness",
    image: `${CDN}/6aaad679fdb9d914f7f5203c/6ab266d33e964df940c04833_HeyGluco.png`,
    hover: `${CDN}/6aaad679fdb9d914f7f5203c/6ab392697fe7cc9c077d1bb5_HeyGluco_2_hover.jpg`,
    vertical: `${CDN}/6aaad679fdb9d914f7f5203c/6ab393770c697e34bcc4e4fb_Vertical6.jpg`,
    href: "/work",
    featured: true,
  },
  {
    slug: "bagel-bar",
    title: "THE BAGEL BAR",
    category: "Food & Beverage",
    image: `${CDN}/6aaad679fdb9d914f7f5203c/6ab270be80849a0a23faa24d_6ab27078c47da30c0af6b000_Bagel_1.jpeg`,
    hover: `${CDN}/6aaad679fdb9d914f7f5203c/6ab270be80849a0a23faa24a_6ab2707cc2a53666310f52d2_Bagel_2_hover.jpeg`,
    logo: `${CDN}/6aaad679fdb9d914f7f5203c/6ab2675e0b996d1415be46a3_The%20Bagel%20Bar.png`,
    href: "/work",
    featured: true,
  },
  {
    slug: "tanti-maria",
    title: "TANTI MARIA",
    category: "Food & Retail",
    image: `${CDN}/6aaad679fdb9d914f7f5203c/6ab2723d53bb370f04afa38a_6ab2722877656a8e8b50e7c0_Tanti_1.jpeg`,
    hover: `${CDN}/6aaad679fdb9d914f7f5203c/6ab2723d53bb370f04afa391_6ab2722d77656a8e8b50e941_Tanti_2_hover.jpeg`,
    logo: `${CDN}/6aaad679fdb9d914f7f5203c/6ab266e293685f22fedc573a_Tanti%20Maria.png`,
    href: "/work",
    featured: true,
  },
  {
    slug: "munchies",
    title: "MUNCHIES AND CREAM",
    category: "Food & Beverage",
    image: `${CDN}/6aaad679fdb9d914f7f5203c/6ab2723d53bb370f04afa381_6ab2721e4694c5c1d617273d_Munchies_1.jpeg`,
    hover: `${CDN}/6aaad679fdb9d914f7f5203c/6ab2723d53bb370f04afa375_6ab27223e0afaf640fd855d7_Munchies_2_hover.jpeg`,
    logo: `${CDN}/6aaad679fdb9d914f7f5203c/6ab26718a85417b42d23712f_Munchies%20%26%20Cream.png`,
    href: "/work",
    featured: true,
  },
  {
    slug: "mvp",
    title: "MVP",
    category: "Sports & Talent Management",
    image: `${CDN}/6aaad679fdb9d914f7f5203c/6ab270be80849a0a23faa284_6ab270907f6e9d96146209a1_MVP_Thumbnail1.jpeg`,
    hover: `${CDN}/6aaad679fdb9d914f7f5203c/6ab270be80849a0a23faa29e_6ab27093a089e1fd370a7310_MVP_Thumbnail2_hover.jpeg`,
    logo: `${CDN}/6aaad679fdb9d914f7f5203c/6ab26733f2ee3f3da2d70eeb_MVP.png`,
    href: "/work",
    featured: true,
  },
  {
    slug: "yum-yum",
    title: "YUM YUM",
    category: "Food & Beverage",
    image: `${CDN}/6aaad679fdb9d914f7f5203c/6ab2723d53bb370f04afa37d_6ab272335c44422412d81fb1_YumYum_1.jpeg`,
    hover: `${CDN}/6aaad679fdb9d914f7f5203c/6ab2723d53bb370f04afa372_6ab2723985afb9378f444d8b_YumYum_2_hover.jpeg`,
    logo: `${CDN}/6aaad679fdb9d914f7f5203c/6ab266f1e1ea593718edc309_YumYum.png`,
    href: "/work",
    featured: true,
  },
  {
    slug: "merci",
    title: "MERCI",
    category: "Food & Beverage",
    image: `${CDN}/6aaad679fdb9d914f7f5203c/6ab2723d53bb370f04afa38a_6ab2722877656a8e8b50e7c0_Tanti_1.jpeg`,
    hover: `${CDN}/6aaad679fdb9d914f7f5203c/6ab2723d53bb370f04afa391_6ab2722d77656a8e8b50e941_Tanti_2_hover.jpeg`,
    href: "/work",
    featured: false,
  },
  {
    slug: "lp-one",
    title: "LP ONE",
    category: "Automotive & Motorsport",
    image: `${CDN}/6aaad679fdb9d914f7f5203c/6ab270be80849a0a23faa284_6ab270907f6e9d96146209a1_MVP_Thumbnail1.jpeg`,
    hover: `${CDN}/6aaad679fdb9d914f7f5203c/6ab270be80849a0a23faa29e_6ab27093a089e1fd370a7310_MVP_Thumbnail2_hover.jpeg`,
    href: "/work",
    featured: false,
  },
];

export const testimonials = [
  {
    quote:
      "They're sharp, always responsive, and have a real talent for turning briefs into compelling visuals. No matter the challenge: tight deadlines, shifting requirements, tricky creative constraints, they always show up with solutions. Highly recommend working with them!",
    author: "Ruxandra Florescu",
    role: "COO, Dare Digital",
    highlight: "Smoothest collaboration",
    photo: `${CDN}/6aaad679fdb9d914f7f5203c/6ab3d538dbdbc6a5f1d1d3f4_Rux.jpg`,
  },
  {
    quote:
      "Both of them are truly amazing humans, with an incredible amount of creativity and talent. They took our vision, understood it completely, and brought it to life in ways that went beyond anything we could have imagined.",
    author: "Luiza Zamfirescu",
    role: "Co-Founder, HeyGluco",
    highlight: "Beyond what we imagined",
    photo: `${CDN}/6aaad679fdb9d914f7f5203c/6ab3d1f99d28cf11d2e8f501_luiza.jpg`,
  },
  {
    quote:
      "Always fun, always insightful, always constructive. It hardly feels like working, cause the whole process is always so smooth. That's what you get for getting the job done with cool creatives, I guess.",
    author: "Vlad Belcin",
    role: "Sr. Copywriter, Dare Digital",
    highlight: "Hardly feels like working",
    photo: `${CDN}/6aaad679fdb9d914f7f5203c/6ab3d5ec9cfd634776e95758_Vlad.jpg`,
  },
  {
    quote:
      "We’ve worked together on two websites and two visual identities so far, and it’s been a pleasure every time. Great ideas, really well executed, and just lovely people to work with.",
    author: "Ionut Belet",
    role: "Founder, MVP Agency",
    highlight: "Four projects and counting",
    photo: `${CDN}/6aaad679fdb9d914f7f5203c/6ab3d72a667c6ab560a03d5b_Ionut.jpg`,
  },
  {
    quote:
      "Working with the studio on our brand identity was a great experience from start to finish. They’re incredibly creative and thoughtful, but also easy to work with and genuinely invested in getting things right.",
    author: "Monica Tantu",
    role: "Co-Founder, Merci",
    highlight: "Better than we imagined",
    photo: `${CDN}/6aaad679fdb9d914f7f5203c/6ab3d7f19cfd634776eaf212_Monica.jpg`,
  },
];

export const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Branding is our main thing, from strategy and identity to packaging, illustration, motion and web design. We like projects where there’s room to think, question things and build something with a bit of character.",
  },
  {
    q: "How much does a branding project cost?",
    a: "It depends on what we’re making. Every project is a little different, so we price based on scope rather than pulling a mysterious number out of a hat. Tell us what you have in mind and we’ll take it from there.",
  },
  {
    q: "Can you work with a brand that already exists?",
    a: "Of course. Not everything needs to be burned to the ground and rebuilt. Sometimes a brand just needs a fresh pair of eyes and a few very intentional changes.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Absolutely. We’re based in India, but our Wi-Fi travels remarkably well. We’re happy to work with people pretty much anywhere.",
  },
  {
    q: "What if we don’t like the first concepts?",
    a: "We talk about why. Feedback is part of the process, and nothing is presented just because “we thought it looked cool.” Although we do like when things look cool.",
  },
  {
    q: "How involved do we need to be?",
    a: "Involved enough. We’ll need your knowledge, feedback and decisions along the way. Don’t worry, we won’t make you sit next to us while we move things two pixels to the left.",
  },
  {
    q: "Can you start yesterday?",
    a: "We checked. Unfortunately, yesterday is fully booked. But send us a message and we’ll tell you when we can realistically get started.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Yep. Company size matters less to us than the project, the people behind it and what we can actually do together.",
  },
  {
    q: "Do you also develop websites?",
    a: "We design them. For development, we work with people we trust and can bring them into the project when needed. So yes, your website can actually become a website.",
  },
];

export const aboutPage = {
  hero: "BIG BRAND ENERGY",
  intro: "Independent studio founded on years across design, advertising, and making things that feel inevitable.",
  storyTitle: "One shared itch to make better brands.",
  story: [
    "After years building for others, we put that experience into a practice of our own — a tight studio where briefs get questioned, details get obsessed over, and the work is meant to make people smile.",
    "Less size, more scope. We stay a focused core, pulling in trusted collaborators when a project demands it. That means staying involved, moving quickly, and building the right team around each situation.",
  ],
  rules: [
    {
      n: "01",
      title: "THE BRIEF IS NOT SET IN STONE",
      body: "A brief is a starting point, not a set of commandments. We’ll challenge it if there’s a better way to get where we need to go.",
    },
    {
      n: "02",
      title: "GOOD IDEAS NEED SPACE",
      body: "We don’t rush to the first solution that kind of works. Give an idea room to breathe, and it might just be the one.",
    },
    {
      n: "03",
      title: "PRETTY IS NOT A STRATEGY",
      body: "Looking good is only part of the job. First: meaning. Everything that ships needs a reason to exist.",
    },
    {
      n: "04",
      title: "IF IT CAN BE SIMPLE, SIMPLIFY",
      body: "Complexity for complexity’s sake isn’t cool. If your brand can say more with less, we’ll make it happen.",
    },
  ],
  range: [
    "Brand Strategy",
    "Visual Identity",
    "Illustration",
    "Packaging",
    "Web Design",
    "Motion Design",
    "Art Direction",
    "Naming",
  ],
};

export const workPage = {
  line1: "A few projects",
  line2: "to brag about",
  pills: ["Just a few", "Kind of proud"],
  intro:
    "A selection of brands, identities, websites and other things we’ve helped bring to life. Different challenges, various approaches, same focus on getting everything right.",
};
