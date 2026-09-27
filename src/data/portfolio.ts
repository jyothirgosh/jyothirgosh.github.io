export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: string;
  technologies: string[];
  image: string;
  video?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
  metrics?: { label: string; value: string }[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'Security' | 'Development' | 'Design & Media' | 'Core';
  level: string;
  highlight: string;
  tags: string[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  category: string;
  description: string;
  achievement: string;
  image?: string;
}

export interface MediaItem {
  id: string;
  title: string;
  category: string;
  type: 'video' | 'image';
  src: string;
  poster?: string;
  aspect: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'JYOTHIR GOSH',
    firstName: 'JYOTHIR',
    lastName: 'GOSH',
    role: 'DEVELOPER • EDITOR',
    specialties: 'DEVELOPMENT • VIDEO EDITING',
    shortBio: "I'm Jyothir Gosh — a developer and editor who enjoys building websites, creating digital content, experimenting with technology, and turning ideas into real projects.",
    missionStatement: 'BUILDING DIGITAL EXPERIENCES AND CREATIVE WORK WITH PURPOSE.',
    mantra: ['BUILD.', 'EDIT.', 'CREATE.'],
    status: 'OPEN TO PROJECTS & COLLABORATIONS',
    location: 'Kerala, India',
    education: 'BCA — Cybersecurity',
    focus: 'Development & Creative Editing',
    interests: 'Technology • Design • Video Editing • Entrepreneurship',
    systemStatus: 'ONLINE // BUILDING & CREATING',
  },

  socials: [
    { name: 'Instagram', handle: '@jyothir_gosh', url: 'https://www.instagram.com/jyothir_gosh/' },
    { name: 'GitHub', handle: 'github.com/jyothirgosh', url: 'https://github.com/jyothirgosh' },
    { name: 'LinkedIn', handle: 'linkedin.com/in/jyothir-gosh-97bbb43a7', url: 'https://www.linkedin.com/in/jyothir-gosh-97bbb43a7/' },
    { name: 'Email', handle: 'jyothirgosh2008@gmail.com', url: 'mailto:jyothirgosh2008@gmail.com' },
  ],

  skills: [
    {
      id: 'web-dev',
      name: 'WEB DEVELOPMENT',
      category: 'Development',
      level: 'PRACTICAL',
      highlight: 'Building responsive websites and interactive interfaces with modern web technologies.',
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite']
    },
    {
      id: 'video-editing',
      name: 'VIDEO EDITING',
      category: 'Design & Media',
      level: 'PRACTICAL',
      highlight: 'Editing short-form and creative video content with a focus on pacing, visuals, and presentation.',
      tags: ['CapCut', 'Editing', 'Transitions', 'Reels']
    },
    {
      id: 'graphic-design',
      name: 'GRAPHIC DESIGN',
      category: 'Design & Media',
      level: 'PRACTICAL',
      highlight: 'Creating visual designs, branding concepts, posters, thumbnails, and digital assets.',
      tags: ['Branding', 'Typography', 'Posters', 'Thumbnails']
    },
    {
      id: 'python',
      name: 'PYTHON',
      category: 'Development',
      level: 'LEARNING',
      highlight: 'Learning Python programming and applying it through small projects and problem-solving practice.',
      tags: ['Python Basics', 'Problem Solving', 'Scripting']
    },
    {
      id: 'javascript',
      name: 'JAVASCRIPT',
      category: 'Development',
      level: 'LEARNING',
      highlight: 'Learning JavaScript for interactive web experiences and frontend development.',
      tags: ['ES6+', 'DOM', 'Interactions']
    },
    {
      id: 'cybersecurity',
      name: 'CYBERSECURITY',
      category: 'Security',
      level: 'LEARNING',
      highlight: 'Developing foundational cybersecurity knowledge alongside BCA studies and practical experimentation.',
      tags: ['Security Basics', 'Networking', 'Linux', 'Cybersecurity']
    },
    {
      id: 'ui-design',
      name: 'UI DESIGN',
      category: 'Design & Media',
      level: 'LEARNING',
      highlight: 'Exploring clean layouts, visual hierarchy, responsive interfaces, and modern design systems.',
      tags: ['UI', 'Layout', 'Typography', 'Responsive Design']
    },
    {
      id: 'tech-projects',
      name: 'TECH PROJECTS',
      category: 'Core',
      level: 'BUILDING',
      highlight: 'Turning ideas into practical projects across websites, creative technology, and digital tools.',
      tags: ['Prototyping', 'Web Projects', 'Creative Tech']
    }
  ] as Skill[],

  projects: [
    {
      id: 'ax-yno',
      number: '01',
      title: 'AXYNO',
      subtitle: 'Premium Technology Brand Website',
      description: 'Futuristic digital brand flagship featuring high-end dark editorial aesthetics, 3D visual mockups, and reactive product showcase animations.',
      longDescription: 'Designed and engineered for an innovative consumer electronics brand. Built with a bespoke design system featuring deep charcoal palettes, fluid motion transitions, and interactive 3D product previews.',
      category: 'Creative Web / Brand Platform',
      technologies: ['HTML5 / Canvas', 'Modern JavaScript', 'CSS3 Architecture', 'Responsive UI', 'Motion Design'],
      image: '/media/axyno-mockup-building.png',
      video: '/media/axyno-intro.mp4',
      liveUrl: 'https://axyno.tech',
      featured: true,
      year: '2026',
      metrics: [
        { label: 'Performance', value: '99/100' },
        { label: 'Aesthetic', value: 'Cinematic Dark' },
        { label: 'Frame Rate', value: '60 FPS' }
      ]
    },
    {
      id: 'malabar-agro-park',
      number: '02',
      title: 'MALABAR AGRO PARK',
      subtitle: 'Agriculture / Mushroom Business Platform',
      description: 'Modern high-trust agricultural enterprise portal showcasing commercial mushroom biotechnology, facility infrastructure, and regional distribution.',
      longDescription: 'Comprehensive corporate and commercial platform engineered for an agricultural enterprise in Kerala. Delivers high-density visual storytelling, facility galleries, and product catalogues.',
      category: 'Commercial Enterprise',
      technologies: ['Modular Architecture', 'Responsive CSS', 'SEO Optimization', 'Interactive Galleries'],
      image: '/images/div-mushroom.png',
      liveUrl: 'https://malabaragropark.netlify.app/',
      featured: true,
      year: '2026',
      metrics: [
        { label: 'Platform', value: 'Responsive Web' },
        { label: 'Project Type', value: 'Business Website' },
        { label: 'Location', value: 'Kerala, India' }
      ]
    },
    {
      id: 'instant-queue',
      number: '03',
      title: 'INSTANT QUEUE',
      subtitle: 'Digital Queue Management System (QueueFlow)',
      description: 'Real-time multi-counter queuing architecture with instantaneous client sync, audio notifications, and administrative dispatch analytics.',
      longDescription: 'Engineered to eliminate physical bottleneck delays in high-density facilities like clinics and banking counters. Implements low-latency token generation, WebSocket status propagation, and resilient local storage fallbacks.',
      category: 'Full-Stack / Systems',
      technologies: ['Python Backend', 'WebSockets', 'Real-time State', 'Progressive Web App', 'Zero-Trust Security'],
      image: '/media/axyno-mockup-card.png',
      featured: true,
      year: '2024',
      metrics: [
        { label: 'Latency', value: '< 25ms' },
        { label: 'Reliability', value: '99.9%' },
        { label: 'Dispatch Rate', value: '150/hr' }
      ]
    },
    {
      id: 'gaming-project',
      number: '04',
      title: 'CYBER SENTINEL',
      subtitle: 'Interactive Gaming & Threat Defense Experience',
      description: 'Web-based interactive cyber simulation game where players neutralize incoming packet breaches and patch server infrastructure in real-time.',
      longDescription: 'An experimental convergence of game design and cybersecurity concepts. Built using custom 2D Canvas particle systems, real-time audio synthesis, and procedural intrusion vectors.',
      category: 'Game / Cyber Simulation',
      technologies: ['Canvas 2D Engine', 'Web Audio API', 'Physics & Particles', 'Cyber Defense Logic'],
      image: '/media/axyno-icon-3d.png',
      liveUrl: '#',
      featured: true,
      year: '2024',
      metrics: [
        { label: 'Engine', value: 'Canvas 2D' },
        { label: 'Audio', value: 'Web Audio Synth' },
        { label: 'Game Modes', value: 'Survival & Breach' }
      ]
    }
  ] as Project[],

  timeline: [
    {
      year: '2025',
      title: 'CREATIVE FOUNDATIONS',
      category: 'Learning & Exploration',
      description: 'Built an interest in web development, graphic design, video editing, and technology through personal projects and creative experimentation.',
      achievement: 'Started turning ideas into practical digital projects.'
    },
    {
      year: '2026',
      title: 'BCA & CYBERSECURITY',
      category: 'Education',
      description: 'Started BCA with a focus on Cybersecurity and continued developing practical skills in programming, web development, and digital creation.',
      achievement: 'Began formal higher education while continuing hands-on project work.'
    },
    {
      year: '2026',
      title: 'PROJECTS & CREATIVE WORK',
      category: 'Development & Media',
      description: 'Worked on projects including Malabar Agro Park, AXYNO, Instant Queue, and creative editing and web-development work.',
      achievement: 'Continued building a portfolio around development, editing, and creative technology.'
    }
  ] as TimelineMilestone[],

  mediaReel: [
    {
      id: 'axyno-cinematic',
      title: 'AXYNO Cinematic Reel',
      category: 'Motion & Identity',
      type: 'video',
      src: '/media/axyno-intro.mp4',
      poster: '/media/axyno-mockup-building.png',
      aspect: '16/9',
      description: 'Official 3D motion trailer introducing the AX YNO brand visual system.'
    },
    {
      id: 'cyber-interface',
      title: '3D Spatial Emblem',
      category: '3D & Asset Creation',
      type: 'image',
      src: '/media/axyno-icon-3d.png',
      aspect: '1/1',
      description: 'Volumetric glass and chrome rendering with glowing laser refractions.'
    },
    {
      id: 'mobile-interface',
      title: 'Mobile Architecture Concept',
      category: 'UI/UX & Mobile',
      type: 'image',
      src: '/media/axyno-mockup-mobile.png',
      aspect: '9/16',
      description: 'Ultra-minimalist dark mode mobile operating shell and biometric dashboard.'
    },
    {
      id: 'agro-park-facility',
      title: 'Malabar Agro Biotechnology',
      category: 'Commercial Production',
      type: 'image',
      src: '/images/div-mushroom.png',
      aspect: '16/9',
      description: 'Industrial biotechnology mushroom cultivation showcase.'
    }
  ] as MediaItem[]
};
