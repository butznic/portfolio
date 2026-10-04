export const RESUME_DATA = {
  name: "ERWIN BUTCH D. NICOLAS",
  title: "Full-Stack Web Developer & IT Instructor",
  location: "Parañaque City, Metro Manila, Philippines",
  phone: "+639556939103",
  email: "erwinbutchnicolas@gmail.com",
  summary: "Full-Stack Web Developer and IT professional with over 14 years of experience in developing, maintaining, and customizing web-based applications and websites for global clients and academic institutions. Experienced in front-end and back-end web development (ReactJS, Vue.js, PHP, MySQL, Firebase) paired with strong systems administration, server virtualisation (Proxmox, TrueNAS), pfSense network security, and Linux web hosting.",
  
  stats: [
    { label: "Years IT Experience", value: "14+" },
    { label: "Current Role", value: "Freelance @ BearNCo. AU" },
    { label: "Academic Rank", value: "IT Faculty @ Olivarez" },
    { label: "Core Expertise", value: "Full-Stack & DevOps" }
  ],

  skills: {
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "ReactJS", "Vue.js", "Responsive Web Design", "Tailwind CSS", "WordPress", "Joomla"],
    backend: ["PHP", "REST API", "XMPP REST API", "MySQL", "Firebase Integration", "Database Design","ExpressJS","MongoDB"],
    systems: ["Linux (CentOS / Ubuntu)", "Proxmox VE", "TrueNAS Storage", "pfSense", "Windows Server", "Active Directory", "Docker", "Azure Cloud", "Openfire XMPP"],
    support: ["Hardware & Software Troubleshooting", "PC & Server Maintenance", "Network Infrastructure & Cabling", "IT Helpdesk Management"],
    multimedia: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "Adobe After Effects"]
  },

  experience: [
    {
      id: "bearnco",
      role: "FREELANCE WEB DEVELOPER",
      company: "BearNCo.",
      location: "Australia (Remote)",
      period: "January 2024 – Present",
      type: "Freelance",
      description: "Designing, developing, and customizing web-based applications and responsive client websites tailored to Australian business standards.",
      highlights: [
        "Develop scalable web applications utilizing React, PHP, HTML5, CSS3, and JavaScript.",
        "Engineered responsive designs optimized for multi-device cross-browser performance.",
        "Engage directly with international clients for requirements gathering, solution prototyping, and iterative feature rollouts.",
        "Perform web server optimizations and troubleshoot front-end/back-end application issues."
      ],
      tech: ["ReactJS", "PHP", "JavaScript", "CSS3", "MySQL"]
    },
    {
      id: "olivarez-faculty-2",
      role: "PART-TIME FACULTY / IT INSTRUCTOR",
      company: "Olivarez College",
      location: "Parañaque, Philippines",
      period: "August 2024 – Present",
      type: "Academic",
      description: "Delivering core CS/IT curriculum and training the next generation of software engineers.",
      highlights: [
        "Develop and deliver course materials covering Computer Programming, Software Engineering, Database Management, and Web Development.",
        "Formulate practical coding exercises, laboratory activities, and real-world web application projects.",
        "Evaluate student programming submissions and mentor capstone thesis groups."
      ],
      tech: ["Java", "C++", "Web Development", "MySQL", "Software Engineering"]
    },
    {
      id: "duzon",
      role: "IT SPECIALIST / SAFETY OFFICER (BOSH SO2)",
      company: "Duzon E&H",
      location: "Philippines",
      period: "October 2014 – May 2024",
      type: "Full-Time",
      description: "Dual-responsibility role managing enterprise IT infrastructure, internal web application development, and workplace safety compliance.",
      highlights: [
        "Architected custom web applications: IT Inventory System, Technical Problem Data Gathering, IT Device Tracker, and QA Document Management System.",
        "Engineered a real-time Teacher & Staff Mapping System utilizing XMPP REST APIs.",
        "Managed virtualization clusters with Proxmox VE and network storage with TrueNAS.",
        "Configured perimeter firewall routing, bandwidth monitoring, and VPNs using pfSense.",
        "Administered Openfire XMPP instant messaging servers and Linux hosting (CentOS/Ubuntu)."
      ],
      tech: ["PHP", "MySQL", "XMPP API", "Proxmox", "TrueNAS", "pfSense", "CentOS", "Ubuntu"]
    },
    {
      id: "olivarez-faculty-1",
      role: "ASSOCIATE INSTRUCTOR",
      company: "Olivarez College",
      location: "Parañaque, Philippines",
      period: "June 2011 – March 2015",
      type: "Academic",
      description: "Taught fundamental IT courses and served as technical adviser/panelist for student capstone research.",
      highlights: [
        "Instructed courses in Computer Fundamentals, C++ Programming, Web Development, and Multimedia.",
        "Served as technical adviser and thesis panelist for student graduation projects."
      ],
      tech: ["Programming Principles", "Web Basics", "Multimedia Design"]
    },
    {
      id: "ideal-models",
      role: "IT STAFF",
      company: "Ideal People Models Management",
      location: "Makati, Philippines",
      period: "August 2010 – June 2011",
      type: "Full-Time",
      description: "Managed online database systems and produced digital multimedia content.",
      highlights: [
        "Maintained and updated web-based talent and model database systems.",
        "Provided full-scope photography, graphic layout, and promotional video editing services."
      ],
      tech: ["Database Management", "Adobe Suite", "Web Admin"]
    }
  ],

  projects: [
    {
      id: "redpower-website",
      title: "Red Power Website",
      category: "Website",
      client: "Red Power Corporation",
      summary: "Red Power Corp. is providing electrical services all over the Philippines",
      details: "Red Power Corporation needs a professional website to prove its legitimacy and for marketing. They showcase their latest and archived projects on this website. ",
      tech: ["PHP", "WordPress", "Elementor", "Astra", "CSS3","SEO"],
      highlights: ["Clear Value Proposition", "Mobile Responsiveness","Strong Calls to Action ","Intuitive Navigation","Search Engine Optimation"]
    },
    {
      id: "ahtspl-website",
      title: "AHTSPL Website",
      category: "Website",
      client: "ASIA HAZSAFE TECHNICAL SERVICES (AHTS) PTE LTD",
      summary: "AHTS is a company located at singapore.",
      details: "The company website is built in Joomla CMS. They need a company website to promote their services in Singapore and other neighboring countries.",
      tech: ["Joomla", "CSS" ,"SEO"],
      highlights: ["Clear Value Proposition", "Mobile Responsiveness","Strong Calls to Action ","Intuitive Navigation","Search Engine Optimation"]
    },
    {
      id: "project-inventory",
      title: "Web-Based IT Inventory System",
      category: "Web Applications",
      client: "Duzon E&H",
      summary: "Comprehensive asset management portal tracking hardware specifications, lifecycle status, warranty dates, and equipment assignments across departments.",
      details: "Built to replace manual spreadsheet tracking. Features automated log tracking, barcode label scanning compatibility, and maintenance alert scheduling.",
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "CSS3"],
      highlights: ["Reduced asset audit time by 60%", "Tracked 500+ workstations and network gear"]
    },
    {
      id: "project-tracker",
      title: "Technical Problem Management & Analytics",
      category: "Web Applications",
      client: "Duzon E&H",
      summary: "Internal ticketing and telemetry reporting tool capturing hardware/software faults reported by online teaching staff.",
      details: "Includes real-time dashboard analytics, severity tagging, response SLA metrics, and automatic escalation pathways.",
      tech: ["PHP", "MySQL", "Chart.js", "REST APIs"],
      highlights: ["Improved ticket resolution efficiency", "Categorized recurring hardware issues"]
    },
    {
      id: "project-device",
      title: "Web-Based IT Device Tracker",
      category: "Web Applications",
      client: "Duzon E&H",
      summary: "Real-time hardware status monitor showing active device IP mapping, assigned employee, and hardware health.",
      details: "Integrated with local ping agents to show live online/offline states of critical office hardware and peripherals.",
      tech: ["PHP", "JavaScript", "AJAX", "MySQL"],
      highlights: ["Instant notification on peripheral outages", "Automated device logs"]
    },
    {
      id: "project-docman",
      title: "QA Document Management System",
      category: "Web Applications",
      client: "Duzon E&H",
      summary: "Secure file repository built for Quality Assurance ISO documentation and internal compliance audits.",
      details: "Features role-based access control (RBAC), document version control, PDF previewing, and revision audit logs.",
      tech: ["PHP", "MySQL", "JavaScript", "HTML5"],
      highlights: ["Streamlined QA audit readiness", "Strict access logging for confidential documents"]
    },
    {
      id: "project-mapping",
      title: "Teacher & Staff XMPP Mapping System",
      category: "Network & Systems",
      client: "Duzon E&H",
      summary: "Interactive seat map integrated with Openfire XMPP server to display live teacher presence, schedule, and online status.",
      details: "Uses XMPP REST APIs to pull presence indicators onto a graphical visual map of the facility floor plan.",
      tech: ["XMPP REST API", "Openfire", "PHP", "JavaScript", "SVG"],
      highlights: ["Real-time staff location visibility", "Instant messaging integration"]
    },
    {
      id: "project-homelab",
      title: "High-Availability Virtualization Hub",
      category: "Network & Systems",
      client: "Infrastructure / Homelab",
      summary: "Enterprise homelab cluster configured with Proxmox VE, TrueNAS storage, and pfSense perimeter router.",
      details: "Demonstrates advanced sysadmin competencies: VLAN segmentation, ZFS storage pools, containerized Docker applications, and pfSense bandwidth shaping.",
      tech: ["Proxmox", "TrueNAS", "pfSense", "Linux CentOS", "Docker"],
      highlights: ["99.9% uptime for internal tools", "Automated off-site ZFS backups"]
    }
  ],

  blogPosts: [
    {
      id: 1,
      slug: "custom-web-apps-react-firebase",
      title: "Building Custom Web Applications with React & Firebase for Enterprise Workflows",
      category: "ReactJS & Web Dev",
      date: "February 18, 2026",
      readTime: "6 min read",
      author: "Erwin Nicolas",
      excerpt: "How modern full-stack web applications leverage React's modular ecosystem and Firebase's real-time database to eliminate paper-heavy workflows.",
      content: `
        <p class="mb-4">Throughout my career managing IT systems for large organizations like Duzon E&H, I encountered constant challenges with paper-based document routing, disjointed spreadsheets, and delayed reporting. Moving these workflows to custom full-stack web applications changed everything.</p>

        <h3 class="text-xl font-bold text-emerald-400 mt-6 mb-3">1. Decoupling Front-End and Back-End</h3>
        <p class="mb-4">Using ReactJS on the front end allows developers to build stateful, highly responsive interfaces that feel like desktop software. Component-driven architecture means UI elements like asset tables, problem reports, and dynamic search inputs can be reused across multiple admin modules with zero redundancy.</p>

        <h3 class="text-xl font-bold text-emerald-400 mt-6 mb-3">2. Real-Time Data Flow with Firebase or WebSockets</h3>
        <p class="mb-4">When a teacher reports a hardware malfunction during an online class, waiting for a periodic page refresh is unacceptable. Firebase Realtime Database or Firestore syncs data instantly across open client sessions. When an entry is updated, every dashboard reflects the state immediately without polling server endpoints.</p>

        <h3 class="text-xl font-bold text-emerald-400 mt-6 mb-3">3. Key Takeaway for IT Teams</h3>
        <p class="mb-4">Custom internal apps don't need over-complicated enterprise bloatware. A clean React front-end, secured with proper authentication and backed by PHP/MySQL or Firebase, provides the exact custom tools your operations need.</p>
      `,
      likes: 42,
      tags: ["ReactJS", "Firebase", "Web Development", "UI/UX"]
    },
    {
      id: 2,
      slug: "self-hosting-proxmox-truenas-pfsense",
      title: "Self-Hosting and Managing Infrastructure with Proxmox, TrueNAS, and pfSense",
      category: "Server & Homelab",
      date: "January 28, 2026",
      readTime: "8 min read",
      author: "Erwin Nicolas",
      excerpt: "A deep dive into setting up a resilient, enterprise-grade virtualized environment for web applications and secure data management.",
      content: `
        <p class="mb-4">As both an IT Specialist and Web Developer, I strongly believe a developer who understands host infrastructure builds significantly better software. Here is how I structure high-reliability virtual environments.</p>

        <h3 class="text-xl font-bold text-emerald-400 mt-6 mb-3">Proxmox VE: The Virtualization Core</h3>
        <p class="mb-4">Proxmox hypervisor gives you bare-metal management over system resources. Spinning up isolated LXC containers for web servers (CentOS/Ubuntu running Nginx/Apache) ensures that a spike in web traffic won't starve storage or security daemons.</p>

        <h3 class="text-xl font-bold text-emerald-400 mt-6 mb-3">pfSense: Perimeter Firewall and Traffic Shaping</h3>
        <p class="mb-4">pfSense handles network routing, VLAN isolation, and bandwidth management. In operational environments with hundreds of active workstations, prioritizing VoIP and real-time Web sockets over bulk file transfers is critical for smooth operations.</p>

        <h3 class="text-xl font-bold text-emerald-400 mt-6 mb-3">TrueNAS: Immutable ZFS Storage</h3>
        <p class="mb-4">Data integrity is non-negotiable. TrueNAS utilizes the ZFS file system to offer snapshot capabilities, raid-z redundancy, and seamless NFS/SMB shares for continuous server backups.</p>
      `,
      likes: 68,
      tags: ["Proxmox", "TrueNAS", "pfSense", "Linux", "DevOps"]
    },
    {
      id: 3,
      slug: "bridging-it-experience-into-education",
      title: "Bridging Real-World IT Experience into Computer Science & Web Dev Education",
      category: "EduTech",
      date: "December 14, 2025",
      readTime: "5 min read",
      author: "Erwin Nicolas",
      excerpt: "Insights from an active IT practitioner and college instructor on closing the gap between academic CS theory and industry requirements.",
      content: `
        <p class="mb-4">Teaching Computer Science and Web Development at Olivarez College has given me a unique perspective on technical education. Students often learn algorithm syntax, but miss out on how code behaves in production servers.</p>

        <h3 class="text-xl font-bold text-emerald-400 mt-6 mb-3">Teaching Problem-Solving Over Syntax Memorization</h3>
        <p class="mb-4">Syntax can be looked up in seconds or assisted by AI tooling, but systematic debugging cannot. In my classes, I place heavy emphasis on browser developer tools, server error logging, and analyzing network payloads using REST clients.</p>

        <h3 class="text-xl font-bold text-emerald-400 mt-6 mb-3">Simulating Industry Environments</h3>
        <p class="mb-4">Instead of static homework, students submit web application projects using Git version control, deployment on Linux cloud servers, and proper database normalization. This direct exposure ensures they enter the software workforce ready to contribute day one.</p>
      `,
      likes: 51,
      tags: ["Education", "Career Advice", "Web Dev", "Teaching"]
    },
    {
      id: 4,
      slug: "realtime-mapping-messaging-xmpp-rest-php",
      title: "Real-Time Mapping and Messaging with XMPP REST APIs and PHP",
      category: "Linux Hosting",
      date: "November 05, 2025",
      readTime: "7 min read",
      author: "Erwin Nicolas",
      excerpt: "How we implemented a visual employee presence map using Openfire XMPP server integrations.",
      content: `
        <p class="mb-4">During my time at Duzon E&H, tracking teacher availability across multiple floor levels was essential for smooth student routing. We built a custom visual map powered by XMPP.</p>

        <h3 class="text-xl font-bold text-emerald-400 mt-6 mb-3">Why XMPP / Openfire?</h3>
        <p class="mb-4">XMPP is an open, battle-tested standard for instant messaging and presence subscription. Openfire provides a lightweight Java-based server that handles thousands of concurrent presence sessions reliably.</p>

        <h3 class="text-xl font-bold text-emerald-400 mt-6 mb-3">Connecting Front-End SVG Maps with REST Endpoints</h3>
        <p class="mb-4">By exposing Openfire's state via XMPP REST APIs, our PHP back-end queried status states (Available, Away, Do Not Disturb, Offline) and dynamically populated an interactive floorplan map using vector graphics.</p>
      `,
      likes: 39,
      tags: ["XMPP", "PHP", "APIs", "Openfire", "Mapping"]
    }
  ],

  education: [
    {
      degree: "Master in Information Technology (MIT)",
      institution: "Pamantasang Lungsod ng Muntinlupa",
      location: "Muntinlupa, Philippines",
      status: "Ongoing"
    },
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: "Olivarez College",
      location: "Parañaque, Philippines",
      status: "Graduated (Oct 2005 – Oct 2010)"
    },
    {
      degree: "Teaching Certificate Program (9 Units)",
      institution: "Olivarez College",
      location: "Parañaque, Philippines",
      status: "Completed (June 2012)"
    }
  ],

  certifications: [
    {
      title: "The Ultimate 2025 Fullstack Web Development Bootcamp",
      issuer: "Udemy",
      year: "2025"
    },
    {
      title: "Contact Center Services NC II",
      issuer: "TESDA / Olivarez College",
      year: "2025"
    },
    {
      title: "Basic Occupational Safety & Health (BOSH SO2)",
      issuer: "Safetyhouse, Inc. (40-Hour Training)",
      year: "2021"
    },
    {
      title: "Front-End Web Developers-PH (Vue.js, Docker, Azure)",
      issuer: "WebmobilePH",
      year: "2019"
    },
    {
      title: "Full-Stack Developer #Codecamp (Vue.js, Firebase, Feathers)",
      issuer: "WebmobilePH",
      year: "2018"
    },
    {
      title: "Computer Technician & Consumer Electronics",
      issuer: "TESDA",
      year: "2003"
    }
  ]
};
