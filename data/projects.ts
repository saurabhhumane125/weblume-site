export const projects = [
  {
    title: "Online Voting App",
    slug: "online-voting-app",
    stack: ["Android", "Firebase", "Java"],
    description: "Secure mobile voting platform",
    brief:
      "A secure mobile voting application with authentication, event management, and real-time vote tracking.",
    image: "/images/voting-app.png",
    client: "Confidential",
    timeline: "6 weeks",
    year: "2024",
    platform: "Android",
    tech: "Java, Firebase, XML",
    challenge: `Our client needed a mobile voting application that could handle multiple events, manage voter authentication, and ensure each vote was counted accurately and securely. The existing process was manual, time-consuming, and prone to errors.

The application needed to be simple enough for non-technical users while being robust enough to handle concurrent voting sessions without data conflicts.`,
    solution: `We built a native Android application using Java and XML with Firebase as the backend infrastructure. Firebase Authentication handles user login and identity verification, while the Realtime Database manages event data, candidate information, and vote counts.

The app flow is straightforward: users log in, select an active event, view candidates, cast their vote, and receive confirmation. We designed the interface to minimize steps and prevent common user errors like double-voting.`,
    keyFeatures: [
      "User authentication via Firebase",
      "Event selection and management",
      "Candidate listing and voting interface",
      "Real-time vote submission and tracking",
      "Secure data handling",
    ],
    keyDecisions: [
      "Firebase Realtime Database for instant data sync across all users",
      "Transaction-based vote counting to prevent race conditions",
      "Clean separation of authentication and voting logic",
      "Minimal UI focused on accessibility and ease of use",
    ],
    result: `The application was delivered on schedule and deployed successfully. The voting process that previously took hours of manual work now runs in minutes through the app. The client reported zero issues during their first live voting event.`,
  },
  {
    title: "Home Decor Website",
    slug: "home-decor-website",
    stack: ["React", "Modern UI", "Responsive"],
    description: "Modern decor showcase website",
    brief:
      "A multi-page showcase website with contemporary design for a home decor brand.",
    image: "/images/decor-site.png",
    client: "Home Decor Brand",
    timeline: "4 weeks",
    year: "2024",
    platform: "Web",
    tech: "React, CSS, Responsive Design",
    challenge: `A home decor brand needed a modern online presence to showcase their products and design projects. Their existing web presence was outdated and didn't reflect the quality of their work.

They needed a website that felt contemporary and premium — matching the aesthetic standards of their industry while being fast, responsive, and easy to navigate.`,
    solution: `We built the website using React, creating a component-based architecture that makes future updates and content additions straightforward. The multi-page layout includes dedicated sections for product categories, project showcases, and brand information.

The design prioritizes visual impact — large imagery, generous whitespace, and a carefully selected color palette that complements the client's brand identity. Every page is fully responsive, ensuring a consistent experience from desktop to mobile.`,
    keyFeatures: [
      "Component-based React architecture",
      "Multi-page responsive layout",
      "Product category showcases",
      "Optimized image loading",
      "Mobile-first design approach",
    ],
    keyDecisions: [
      "React for component reusability and future scalability",
      "CSS Grid and Flexbox for responsive layouts",
      "Lazy loading for image-heavy pages",
      "Modular component structure for easy content updates",
    ],
    result: `The new website gives the brand a professional digital presence that matches the quality of their physical work. Page load times are fast, the design has received positive feedback from the client's customers, and the React architecture makes it simple to add new products and projects as the business grows.`,
  },
];
