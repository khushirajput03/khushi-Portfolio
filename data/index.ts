export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: `lg:ml-0 lg:col-span-3 md:col-span-6 lg:row-span-4 md:row-span-1 lg:h-[110vh] lg:w-[55vw]  md:w-[120vw] lg:ml-0
     w-[88vw] h-[40vh] sm:ml-40 md:ml-40`,
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: `lg:ml-0 md:ml-40 sm:ml-40 lg:col-span-2  md:col-span-3 md:row-span-1 lg:row-span-2 md:w-[120vw] w-[88vw] h-[40vh] lg:ml-0 lg:w-[35vw] lg:h-[55vh]`,
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: `lg:ml-0 sm:ml-40 md:ml-40 lg:col-span-2 md:col-span-3 md:row-span-1 lg:row-span-2 lg:w-[35vw] lg:ml-0 lg:h-[50vh]
    md:col-span-6 md:w-[120vw]  w-full h-auto min-h-fit w-[88vw] h-[40vh] 
    `,
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: `lg:ml-0 sm:ml-40 md:ml-40 lg:col-span-2 md:col-span-3  lg:ml-0 lg:w-[35vw] lg:h-[25vh]
    md:w-[55vw] md:h-[38vh] w-[88vw] h-[20vh]
    `,
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: `lg:ml-0 sm:ml-40 md:ml-40 md:col-span-3 md:row-span-2 lg:w-[55vw] md:w-[60vw] md:h-[63vh] lg:h-[69vh] w-[88vw] h-[20vh]`,
    imgClassName: `absolute right-0 bottom-0 w-60 `,
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: `lg:ml-0  sm:ml-40 md:ml-40 lg:col-span-2 md:col-span-3 lg:ml-0 lg:h-[40vh] lg:w-[35vw]
    md:w-[55vw] md:h-[20vh]5 w-[88vw] `,
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];



export const projects = [
  {
    id: 1,
    title: "Hirrd Job Portal",
    des: "A modern web application showcasing efficient architecture, clean user interface, and seamless functionality to provide an optimized digital experience.",
    img: "/image.png",
    iconLists: ["/re.svg", "/tail.svg","/supabase.jpg"],
    link: "https://hirrd-psi-rust.vercel.app/",
  },
  {
    id: 2,
    title: "BlogBliss",
    des: "It's a content platform sharing insights, updates, and industry knowledge from the company.It showcases expertise, trends, and solutions to engage readers and strengthen brand presence.",
    img: "/blog.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg","/supabase.jpg"],
    link: "https://blog.visionandsolutions.com/",
  },
  {
    id: 3,
    title: "K72",
    des: "A visually immersive website featuring advanced animations, micro-interactions, and smooth scrolling effects that bring the design to life while ensuring a responsive and user-friendly experience.",
    img: "/k72.png",
    iconLists: ["/re.svg", "/tail.svg", "/gsap.jpg"],
    link: "https://k72-website-3172.onrender.com/",
  },
    {
    id: 4,
    title: "Google Gemini 2.0",
    des: "A web application replicating the Gemini platform by dynamically fetching and displaying real-time data through API integration, with a clean and responsive interface for seamless user experience.",
    img: "/gemini.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://gemini-clone-6di7rq8s3-khushis-projects-41646acf.vercel.app/",
  },
  
];


export const skills = [
  { id: 1, 
    img: "https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-3d-icon-png-download-7577991.png?f=webp" ,
    name:"Javascript"
  },
  { id: 2, 
    img: "https://cdn3d.iconscout.com/3d/free/thumb/free-react-3d-icon-png-download-7578010.png?f=webp",
    name:"React.js"
   },
  { id: 3, 
    img: "https://static.vecteezy.com/system/resources/previews/060/194/940/non_2x/bootstrap-3d-icon-transparent-background-free-png.png" ,
    name:"Bootstrap"
  },
  { id: 4,
     img: "https://cdn3d.iconscout.com/3d/free/thumb/free-css-3d-icon-png-download-7578024.png",
     name:"CSS",
     },
  { id: 5, 
    img: "/tail.svg" ,
    name:"Tailwind CSS"
  },
  {id : 6, 
    img : "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png",
    name:"Next js"
  },
  {id: 7, 
    img : "https://static.vecteezy.com/system/resources/thumbnails/060/194/946/small_2x/typescript-programming-language-3d-icon-transparent-background-free-png.png",
    name:"Typescript"
  },
    
    {id:8, 
    img:"https://cdn3d.iconscout.com/3d/free/thumb/free-html-3d-logo-png-download-3640299.png",
    name:"HTML"
  },
  {id:9, 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfSt0xBDTUkGqyLPvZa5PBHYNVg-WJ2OWPQ&s",
  name:"supabase",
  },
  {
    id:10,
    img:"https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    name:"Git"
  },
  {
    id:11,
    img:"/gsap.jpg",
    name:"GSAP"
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer",
    desc: "Assisted in the development of a web-based platform using React.js, Next.js enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];


export const approachItems = [
  {
    id: 1,
    title: "Research & Discovery",
    description: "Understanding client goals, target audience, and challenges to lay a strong foundation.",
  },
  {
    id: 2,
    title: "Design & Planning",
    description: "Creating wireframes, prototypes, and structured plans for smooth development.",
  },
  {
    id: 3,
    title: "Development",
    description: "Building responsive and scalable solutions with modern technologies.",
  },
  {
    id: 4,
    title: "Testing & Feedback",
    description: "Ensuring quality through rigorous testing and iteration.",
  },
  {
    id: 5,
    title: "Deployment",
    description: "Delivering a polished product ready for launch.",
  },
  {
    id: 6,
    title: "Support & Growth",
    description: "Providing ongoing support, updates, and improvements.",
  },
];



export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];