import { Database, QuestionAndAnswers } from "./types";

export const database: Database = {
  projects: [
    {
      id: 1,
      title: "Personal Portfolio",
      description:
        "A personal portfolio website to showcase my projects and skills.",
      technologies: ["React", "Chakra-UI", "Vite", "HTML/CSS", "Framer Motion"],
      secondImage: "/My-Portfolio/images/portfolio/banner.png",
      viewCodeLink: "https://github.com/your-portfolio-repo",
      image: "/My-Portfolio/images/portfolio/page.png",
      detailedDescription:
        "This portfolio showcases my work as a developer, featuring a variety of projects that highlight my skills in web development and design. I took full ownership of the design process, serving as the UX/UI designer to create a cohesive and visually appealing layout. Each project reflects my commitment to functionality and aesthetics. The design is completely my own, ensuring a unique touch throughout. The layout is responsive and user-friendly, providing an optimal experience on all devices, whether you're using a desktop, tablet, or smartphone. I invite you to explore my work and see how I bring ideas to life through thoughtful design and innovative solutions.",
      features: [
        "Responsive design : The layout adapts seamlessly to different screen sizes, ensuring an optimal viewing experience on desktops, tablets, and mobile devices.",
        "Smooth navigation and user experience: Intuitive, easy-to-use navigation enables users to browse effortlessly, with a focus on accessibility and fluid transitions.",
        "Projects showcased with images and links",
        "Build with React.js ",
      ],
      duration: "September 2024 - November 2024",
    },
    {
      id: 2,
      title: "MHRA - Macedonian Association for Human Resources",
      description:
        "A website with filtering and search functionality for blogs and events, aligned with the clients's goals of supporting human resource management and organizational development.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "SPA"],
      viewCodeLink: "https://github.com/Klimentina2709/MHRA",
      secondImage: "/My-Portfolio/images/MHRA/banner.png",
      image: "/My-Portfolio/images/MHRA/page.png",
      detailedDescription:
        "As a Front-End Developer, I had the exciting opportunity to build a website from scratch using Next.js and Tailwind CSS. A major part of this project was integrating Framer Motion to add engaging animations, making the user experience more dynamic and visually appealing. I also implemented search and filter functionality, which allowed users to easily find the information they needed using data from a provided JSON file. This feature greatly enhanced the usability of the website, making it more interactive and user-friendly. This project was a valuable learning experience for me, as it laid a strong foundation in developing functional web applications. I enjoyed every moment of bringing the website to life and am proud of the skills I developed along the way.",
      features: [
        "Developed over 10 pages, fully integrating components from a design system while following UX/UI best practices",
        "Implemented server-side data fetching with Next.js to improve application performance and ensure data is available when the page loads.",
        "Created filtering functionality on card components across 2 pages, allowing users to easily search and navigate content from a JSON file",
        "Integrated Framer Motion animations on the homepage, adding over 5 smooth transitions to enhance visual appeal and user engagement",
      ],
      duration: "July 2024 - August 2024",
    },
    {
      id: 3,
      title: "Safeblink",
      description:
        "A responsive website with secure user authentication, featuring filtering, commenting, and a badge system to enhance user experience.",
      technologies: [
        "HTML",
        "CSS",
        "Local Storage",
        "Tailwind CSS",
        "JavaScript",
      ],
      viewCodeLink: "https://github.com/Klimentina2709/Safeblink",
      secondImage: "/My-Portfolio/images/Safeblink/banner.png",
      image: "/My-Portfolio/images/Safeblink/page.png",
      detailedDescription:
        "As a Front-End Developer, I worked on the Safeblink webpage, where I focused on making sure users could securely log in and access the app. I implemented user authentication using a backend to ensure that only authorized users could use the application. This helped keep user data safe and built trust in the platform. I used JavaScript and Tailwind CSS to create a responsive design that looks great on desktops, tablets, and mobile devices. My goal was to make it easy for all users to navigate and interact with the app, no matter what device they were using. By focusing on both how the app works and how it looks, I aimed to create a product that meets user needs while also being enjoyable to use. I'm proud to have contributed to a project that values security and user engagement, making Safeblink a reliable choice for its users.",
      features: [
        "Developed 5+ pages with a secure login and authentication system, enhancing user access control and ensuring user authentication for enhanced security.",
        "Integrated filtering and commenting features to allow user interaction through commenting, with data saved in local storage for data persistence, enabling a seamless user experience upon re-login.",
        "Prioritized clean design and functionality to create an intuitive user experience, allowing users to earn access to 6+ badges based on their activity on the platform",
      ],
      duration: "April 2024 - May 2024",
    },
    {
      id: 4,
      title: "larger.world",
      description:
        "A website developed to introduce users to the concept of unlearning, promoting a sustainable and inclusive world.",
      technologies: ["React", "CSS", "Material UI", "Postman"],
      viewCodeLink: "https://github.com/Klimentina2709/larger-world",
      secondImage: "/My-Portfolio/images/largerWorld/banner.png",
      image: "/My-Portfolio/images/largerWorld/page.png",
      detailedDescription:
        "As a developer, I had the pleasure of working in a team of four to create a single-page application (SPA) during a 48-hour hackathon. Our goal was to develop a website that introduces users to the concept of unlearning, promoting a more sustainable and inclusive world. Starting from scratch, we followed a detailed Figma design provided by the client, which called for a minimalistic and user-friendly interface that would make the information easily accessible and engaging. Given the tight deadline, we prioritized implementing essential features that would enhance the user experience, focusing on simplicity and functionality. Working remotely, we relied on Git and GitHub to communicate efficiently and manage our codebase, which allowed us to stay organized and collaborate seamlessly despite the high-pressure environment. This project not only strengthened my technical skills with React but also taught me the importance of clear communication and teamwork in delivering a cohesive product within strict time constraints. I am proud of what our team accomplished and grateful for the opportunity to contribute to a meaningful, values-driven project.",
      features: [
        "Minimalistic Aesthetics: Stayed true to the client’s vision by maintaining a clean, distraction-free interface.",
        "Efficient Remote Collaboration: Leveraged Git and GitHub for effective communication and code management across the team",
        "Content Animation: Incorporated subtle animations to highlight key content and make the experience more engaging",
      ],
      duration: "August - 2024",
    },
    {
      id: 5,
      title: "Brainster Labs",
      description:
        "A platform for filtering through available courses, featuring a validation-enabled form.",
      technologies: ["HTML", "Sass", "JavaScript"],
      viewProjectLink: "https://klimentina2709.github.io/BrainsterLabs/",
      viewCodeLink: "https://github.com/Klimentina2709/BrainsterLabs",
      image: "/My-Portfolio/images/BrainsterLabs/homepage.png",
      secondImage: "/My-Portfolio/images/BrainsterLabs/banner.png",
      detailedDescription:
        "This project provides users with an intuitive way to filter available courses while ensuring their inputs are validated in a user-friendly manner. Brainster Labs was one of the first projects I undertook when I started learning front-end development. It allowed me to create a multi-page application and style everything using Sass, which was an exciting experience. Utilizing the filter() method and implementing form validation for the first time was particularly rewarding. This project is special, as it represents my educational journey at the Brainster Front-end Academy and marks the beginning of my career in web development.",
      features: [
        "Developed filtering functionality: Implemented filtering system that allows users to easily filter content or products based on three distinct themes, enhancing search efficiency and improving user engagement.",
        "Validation-enabled form: Designed and implemented a form with integrated validation features to ensure accurate data entry, prevent submission errors, and enhance overall user experience by providing real-time feedback on invalid inputs.",
        "User-friendly navigation: Created an intuitive and accessible navigation system.",
      ],

      duration: "December - 2023",
    },
    {
      id: 6,
      title: "Simple Portfolio Demo",
      description:
        "A side project (portfolio) I created when I first started learning web development.",
      technologies: ["HTML", "CSS", "JavaScript", "Materialize"],
      viewProjectLink:
        "https://klimentina2709.github.io/Simple-Portfolio-Demo/",
      viewCodeLink: "https://github.com/Klimentina2709/Simple-Portfolio-Demo",
      image: "/My-Portfolio/images/ShowcaseProject/about.png",
      secondImage: "/My-Portfolio/images/ShowcaseProject/page.png",
      detailedDescription:
        "This project is a multi-page portfolio website built using HTML, JavaScript, and Materialize CSS for styling. It was my first attempt at creating a personal portfolio, featuring a carousel to showcase various projects, a simple filtering option to navigate through them, an About Me section, and a contact form. Developing this portfolio was a valuable starting point for me to dive into coding and design, providing hands-on experience with structuring a web application and implementing interactive elements. ",
      features: [
        "Multi-page layout: Developed a multi-page structure to organize content effectively, allowing users to seamlessly navigate between sections like projects, about me, and contact.",
        "Carousel for project showcase: Implemented a carousel feature to visually highlight various projects, making it easier for users to browse through the portfolio's key works",
        "Simple filtering functionality: Added a filtering system that lets users quickly filter projects.",
      ],

      duration: "June - 2023",
    },
  ],
};

export const questionsAndAnswers: QuestionAndAnswers = {
  accordion: [
    {
      question:
        "How has your background in classical painting influenced your approach to web design and development?",
      answer:
        "My artistic skills help me create visually appealing designs, focusing on composition, color theory, and user experience.",
    },
    {
      question:
        "What are your favorite features of React.js that you utilize in your projects?",
      answer:
        "I love the component-based architecture and the ability to manage state efficiently.",
    },
    {
      question:
        "What strategies do you use to ensure your websites are responsive across different devices?",
      answer:
        "I utilize CSS media queries, flexible layouts, and frameworks like Bootstrap and Tailwind CSS for responsive design.",
    },
    {
      question:
        "What was the most challenging aspect of your Front-End Academy experience, and how did you overcome it?",
      answer:
        "The most challenging part was mastering JavaScript, but consistent practice and collaboration with peers helped me improve.",
    },
    {
      question:
        "Can you share a specific project from Brainster that you're particularly proud of and explain why?",
      answer:
        "I worked on Safeblink, a single-page application (SPA), where I had the chance to integrate the backend as well.",
    },

    {
      question:
        "What areas of front-end development are you interested in exploring further?",
      answer:
        "I'm interested in learning more about animation because it adds a dynamic, interactive element to web design. I’d love to explore how animations can enhance user experience and bring interfaces to life.",
    },
    {
      question:
        "What tools or resources do you rely on for learning new technologies or keeping current in the industry?",
      answer:
        "I use online courses, documentation, and community forums to stay updated with the latest trends.",
    },
    {
      question: "Fun facts about you?",
      answer:
        "I enjoy creating traditional art in my free time, and I also love learning new languages. Right now, Italian is on my list. :)",
    },
  ],
};
