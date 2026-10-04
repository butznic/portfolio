import React, { useState, useEffect, useMemo } from 'react';
import { 
  Code, Server, Shield, Cpu, BookOpen, Terminal, Mail, Phone, MapPin, 
 Search, ExternalLink, Calendar, User, Award, 
  Download, Moon, Sun, CheckCircle, ThumbsUp, MessageSquare, ChevronRight, 
  X, Filter, Monitor, Layers, HardDrive, Wrench, Video, Send, ArrowUpRight
} from 'lucide-react';
import './index.css';

const RESUME_DATA = {
  name: "ERWIN BUTCH D. NICOLAS",
  title: "Full-Stack Web Developer & IT Instructor",
  location: "Parañaque City, Metro Manila, Philippines",
  phone: "+63 943 440 9922",
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
    backend: ["PHP", "REST API", "XMPP REST API", "MySQL", "Firebase Integration", "Database Design"],
    systems: ["Linux (CentOS / Ubuntu)", "Proxmox VE", "TrueNAS Storage", "pfSense Firewall", "Windows Server", "Active Directory", "Docker", "Azure Cloud", "Openfire XMPP"],
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

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProjectCategory, setSelectedProjectCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Blog state
  const [blogSearch, setBlogSearch] = useState('');
  const [blogCategory, setBlogCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);
  const [postLikes, setPostLikes] = useState({ 1: 42, 2: 68, 3: 51, 4: 39 });
  const [likedPosts, setLikedPosts] = useState({});
  const [comments, setComments] = useState({
    1: [{ name: "Alex Santos", text: "Great insights on Firebase integration!", date: "1 day ago" }],
    2: [{ name: "DevOps Engineer", text: "Proxmox + pfSense is the gold standard for homelabs.", date: "3 days ago" }]
  });
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');

  // Contact form state
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Sync Theme Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Handle Like
  const handleLike = (postId) => {
    if (likedPosts[postId]) {
      setPostLikes(prev => ({ ...prev, [postId]: prev[postId] - 1 }));
      setLikedPosts(prev => ({ ...prev, [postId]: false }));
    } else {
      setPostLikes(prev => ({ ...prev, [postId]: prev[postId] + 1 }));
      setLikedPosts(prev => ({ ...prev, [postId]: true }));
    }
  };

  // Add Comment
  const handleAddComment = (e, postId) => {
    e.preventDefault();
    if (!newCommentName.trim() || !newCommentText.trim()) return;
    
    const newEntry = {
      name: newCommentName,
      text: newCommentText,
      date: 'Just now'
    };

    setComments(prev => ({
      ...prev,
      [postId]: [newEntry, ...(prev[postId] || [])]
    }));

    setNewCommentName('');
    setNewCommentText('');
  };

  // Handle Contact Form Submit
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setFormError('Please complete all required fields.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  // Filter Projects
  const filteredProjects = useMemo(() => {
    if (selectedProjectCategory === 'All') return RESUME_DATA.projects;
    return RESUME_DATA.projects.filter(p => p.category === selectedProjectCategory);
  }, [selectedProjectCategory]);

  // Filter Blog Posts
  const filteredBlogPosts = useMemo(() => {
    return RESUME_DATA.blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(blogSearch.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(blogSearch.toLowerCase()) ||
                            post.tags.some(t => t.toLowerCase().includes(blogSearch.toLowerCase()));
      const matchesCategory = blogCategory === 'All' || post.category === blogCategory;
      return matchesSearch && matchesCategory;
    });
  }, [blogSearch, blogCategory]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      
      {}
      <nav className={`sticky top-0 z-40 backdrop-blur-md border-b ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'} transition-colors`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Brand Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
              <div className="w-10 h-10 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-xl shadow-lg shadow-emerald-500/20">
                EN
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight block leading-tight">
                  ERWIN NICOLAS
                </span>
                <span className="text-xs text-emerald-500 font-semibold uppercase tracking-wider block">
                  Full-Stack & IT Specialist
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About & Skills' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'blog', label: 'Tech Blog' },
                { id: 'contact', label: 'Contact' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    const elem = document.getElementById(item.id);
                    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === item.id 
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                      : darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800/60' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right Header Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-slate-800 text-amber-400 hover:bg-slate-700' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}
                title="Toggle Theme"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <a
                href={`mailto:${RESUME_DATA.email}`}
                className="hidden sm:inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm shadow-md shadow-emerald-500/20 transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                <span>Hire Erwin</span>
              </a>
            </div>

          </div>
        </div>

        {/* Mobile Nav Bar */}
        <div className="md:hidden flex overflow-x-auto px-4 py-2 gap-2 border-t border-slate-800/40 bg-slate-900/40">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'experience', label: 'Experience' },
            { id: 'projects', label: 'Projects' },
            { id: 'blog', label: 'Blog' },
            { id: 'contact', label: 'Contact' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                const elem = document.getElementById(item.id);
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-3 py-1.5 rounded-md text-xs whitespace-nowrap font-medium ${
                activeTab === item.id 
                  ? 'bg-emerald-500 text-slate-950 font-bold' 
                  : darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {}
      <section id="home" className="relative pt-12 pb-20 overflow-hidden border-b border-slate-800/40">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Main Hero Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Available for Freelance & IT Projects
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Web Solutions</span> & IT Infrastructure
              </h1>

              <p className={`text-lg sm:text-xl ${darkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                Hi, I'm <strong className={darkMode ? 'text-white' : 'text-slate-900'}>Erwin Butch D. Nicolas</strong>. I blend 14+ years of hands-on Web Development (ReactJS, Vue.js, PHP, MySQL) with heavy Enterprise Systems Administration (Proxmox, TrueNAS, pfSense, Linux).
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    setActiveTab('projects');
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-3 rounded-xl text-base shadow-lg shadow-emerald-500/25 transition-all hover:scale-105"
                >
                  <Code className="w-5 h-5" />
                  View Portfolio Projects
                </button>

                <button
                  onClick={() => {
                    setActiveTab('blog');
                    document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border transition-all hover:scale-105 ${
                    darkMode 
                      ? 'border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200' 
                      : 'border-slate-300 bg-white hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <BookOpen className="w-5 h-5 text-emerald-400" />
                  Read Tech Blog
                </button>

                <a
                  href={`mailto:${RESUME_DATA.email}`}
                  className={`p-3 rounded-xl border transition-colors ${
                    darkMode 
                      ? 'border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300' 
                      : 'border-slate-200 bg-white hover:bg-slate-100 text-slate-700'
                  }`}
                  title="Contact Directly"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              {/* Meta information tags */}
              <div className="pt-4 flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Parañaque City, Metro Manila, PH</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>+63 943 440 9922</span>
                </div>
              </div>
            </div>

            {/* Right Card Visual & Quick Stats */}
            <div className="lg:col-span-5">
              <div className={`p-6 sm:p-8 rounded-2xl border shadow-2xl relative overflow-hidden ${
                darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                {/* Tech Code Visual Header */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800/40">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">erwin_stack_overview.json</span>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {RESUME_DATA.stats.map((stat, i) => (
                    <div 
                      key={i} 
                      className={`p-4 rounded-xl border ${
                        darkMode ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="text-2xl font-black text-emerald-400 mb-1">{stat.value}</div>
                      <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Current Roles List */}
                <div className="mt-6 space-y-3">
                  <div className="text-xs uppercase font-bold tracking-wider text-slate-400">Current Engagement</div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                    <Terminal className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold">Freelance Web Developer</div>
                      <div className="text-xs text-slate-400">BearNCo., Australia (Jan 2024 – Present)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                    <BookOpen className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold">Part-Time Faculty / IT Instructor</div>
                      <div className="text-xs text-slate-400">Olivarez College (Aug 2024 – Present)</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {}
      <section id="about" className="py-20 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Professional Summary & <span className="text-emerald-400">Technical Skills</span>
            </h2>
            <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'} text-base leading-relaxed`}>
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Grouped Skills Matrix */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Front-End & Web */}
            <div className={`p-6 rounded-2xl border transition-all ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-emerald-500/40' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Front-End & Web</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {RESUME_DATA.skills.frontend.map((skill, idx) => (
                  <span key={idx} className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                    darkMode ? 'bg-slate-950 text-slate-300 border-slate-800' : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Back-End & Database */}
            <div className={`p-6 rounded-2xl border transition-all ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-emerald-500/40' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Back-End & Database</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {RESUME_DATA.skills.backend.map((skill, idx) => (
                  <span key={idx} className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                    darkMode ? 'bg-slate-950 text-slate-300 border-slate-800' : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Systems & Infrastructure */}
            <div className={`p-6 rounded-2xl border transition-all ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-emerald-500/40' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <HardDrive className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Systems & DevOps</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {RESUME_DATA.skills.systems.map((skill, idx) => (
                  <span key={idx} className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                    darkMode ? 'bg-slate-950 text-slate-300 border-slate-800' : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Support */}
            <div className={`p-6 rounded-2xl border transition-all ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-emerald-500/40' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">IT Support & Hardware</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {RESUME_DATA.skills.support.map((skill, idx) => (
                  <span key={idx} className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                    darkMode ? 'bg-slate-950 text-slate-300 border-slate-800' : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Multimedia Production */}
            <div className={`p-6 rounded-2xl border transition-all ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-emerald-500/40' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Multimedia & Design</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {RESUME_DATA.skills.multimedia.map((skill, idx) => (
                  <span key={idx} className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                    darkMode ? 'bg-slate-950 text-slate-300 border-slate-800' : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Professional Safety Officer */}
            <div className={`p-6 rounded-2xl border transition-all ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-emerald-500/40' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-rose-500/10 text-rose-400">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Certifications & Safety</h3>
              </div>
              <div className="text-xs text-slate-400 space-y-2">
                <p><strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>BOSH SO2 Safety Officer:</strong> Certified for workplace occupational safety management (40-hr training).</p>
                <p><strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>TESDA NC II:</strong> Contact Center Services & Consumer Electronics.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {}
      <section id="experience" className="py-20 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Professional <span className="text-emerald-400">Experience Timeline</span>
            </h2>
            <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
              A track record of engineering web applications, managing server clusters, and mentoring IT students.
            </p>
          </div>

          {/* Interactive Work Experience Cards */}
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-ml-px before:w-0.5 before:bg-slate-800">
            {RESUME_DATA.experience.map((item, index) => (
              <div key={item.id} className={`relative flex items-center md:justify-between group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot Icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-500 text-slate-950 border-4 border-slate-950 flex items-center justify-center font-bold z-10 shadow-lg">
                  <Calendar className="w-5 h-5" />
                </div>

                {/* Content Box */}
                <div className="ml-16 md:ml-0 md:w-[45%]">
                  <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                    darkMode ? 'bg-slate-900/80 border-slate-800 hover:border-emerald-500/40' : 'bg-white border-slate-200 shadow-md'
                  }`}>
                    
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {item.period}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {item.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-black mb-1">{item.role}</h3>
                    <div className="text-sm font-bold text-emerald-400 mb-4">{item.company}</div>

                    <p className={`text-sm mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {item.description}
                    </p>

                    <ul className="space-y-2 mb-6 text-xs sm:text-sm">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/40">
                      {item.tech.map((t, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded text-[11px] font-medium bg-slate-800/60 text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {}
      <section id="projects" className="py-20 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
                Featured <span className="text-emerald-400">Projects Showcase</span>
              </h2>
              <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                Select web applications and custom systems developed for enterprise clients and operations.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Web Applications', 'Network & Systems'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedProjectCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedProjectCategory === cat
                      ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                      : darkMode ? 'bg-slate-900 text-slate-300 hover:bg-slate-800' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(proj => (
              <div 
                key={proj.id}
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all group hover:-translate-y-1 ${
                  darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-emerald-500/50' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      {proj.category}
                    </span>
                    <span className="text-xs text-slate-400">{proj.client}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                    {proj.title}
                  </h3>

                  <p className={`text-sm mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'} line-clamp-3`}>
                    {proj.summary}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.tech.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 transition-all"
                  >
                    <span>View Architecture Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {}
      <section id="blog" className="py-20 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
              <BookOpen className="w-4 h-4" />
              Interactive Tech Journal
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Erwin's <span className="text-emerald-400">Tech Blog</span>
            </h2>
            <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
              Articles, tutorials, and practical reflections on Web Engineering, Proxmox Homelabs, and Tech Pedagogy.
            </p>
          </div>

          {/* Blog Search & Category Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles by title or tag..."
                value={blogSearch}
                onChange={(e) => setBlogSearch(e.target.value)}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-emerald-500 ${
                  darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-300 text-slate-800'
                }`}
              />
            </div>

            {/* Blog Categories */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {['All', 'ReactJS & Web Dev', 'Server & Homelab', 'EduTech', 'Linux Hosting'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setBlogCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    blogCategory === cat
                      ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                      : darkMode ? 'bg-slate-900 text-slate-300 hover:bg-slate-800' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredBlogPosts.map(post => (
              <article 
                key={post.id}
                className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between transition-all hover:border-emerald-500/50 ${
                  darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{post.date}</span>
                  </div>

                  <h3 
                    onClick={() => setSelectedPost(post)}
                    className="text-2xl font-bold mb-3 hover:text-emerald-400 cursor-pointer transition-colors leading-snug"
                  >
                    {post.title}
                  </h3>

                  <p className={`text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs font-mono text-slate-400">#{tag}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/40 text-xs">
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center gap-1.5 font-bold transition-colors ${
                          likedPosts[post.id] ? 'text-emerald-400' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <ThumbsUp className="w-4 h-4" />
                        <span>{postLikes[post.id]}</span>
                      </button>

                      <div className="flex items-center gap-1.5 text-slate-400">
                        <MessageSquare className="w-4 h-4" />
                        <span>{(comments[post.id] || []).length}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedPost(post)}
                      className="text-emerald-400 font-bold hover:underline inline-flex items-center gap-1"
                    >
                      Read Full Article →
                    </button>
                  </div>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      {}
      <section className="py-20 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Academic Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <User className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Education & Academia</h2>
              </div>

              <div className="space-y-4">
                {RESUME_DATA.education.map((edu, idx) => (
                  <div key={idx} className={`p-6 rounded-2xl border ${
                    darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
                  }`}>
                    <h3 className="text-lg font-bold mb-1">{edu.degree}</h3>
                    <div className="text-sm text-emerald-400 font-medium mb-2">{edu.institution}</div>
                    <div className="text-xs text-slate-400">{edu.status}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Training */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400">
                  <Award className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Certifications & Training</h2>
              </div>

              <div className="space-y-4">
                {RESUME_DATA.certifications.map((cert, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border flex items-center justify-between ${
                    darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
                  }`}>
                    <div>
                      <h4 className="text-sm font-bold">{cert.title}</h4>
                      <p className="text-xs text-slate-400">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-slate-800 text-slate-300">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl font-extrabold tracking-tight">
                Let's Build Something <span className="text-emerald-400">Great Together</span>
              </h2>
              <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                Have a project requirement, web application idea, homelab infrastructure query, or teaching collaboration? Feel free to reach out directly.
              </p>

              <div className="space-y-4 pt-4">
                <div className={`p-4 rounded-xl border flex items-center gap-4 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <MapPin className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">Location</div>
                    <div className="text-sm font-bold">{RESUME_DATA.location}</div>
                  </div>
                </div>

                <div className={`p-4 rounded-xl border flex items-center gap-4 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <Phone className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">Phone / Mobile</div>
                    <div className="text-sm font-bold">{RESUME_DATA.phone}</div>
                  </div>
                </div>

                <div className={`p-4 rounded-xl border flex items-center gap-4 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <Mail className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">Email Address</div>
                    <div className="text-sm font-bold">{RESUME_DATA.email}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleContactSubmit} className={`p-8 rounded-2xl border ${
                darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-lg'
              }`}>
                <h3 className="text-xl font-bold mb-6">Send Erwin a Message</h3>

                {formSubmitted && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-semibold">Thank you! Your message has been simulated and sent successfully.</span>
                  </div>
                )}

                {formError && (
                  <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm font-semibold">
                    {formError}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Your Name *</label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Maria Santos"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-emerald-500 ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-800'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Your Email *</label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. maria@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-emerald-500 ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-800'
                      }`}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Subject</label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Web Development Inquiry / IT Consulting"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-emerald-500 ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-800'
                    }`}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Message *</label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Detail your application project or tech support needs..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-emerald-500 ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-800'
                    }`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${darkMode ? 'bg-slate-950 border-slate-900 text-slate-500' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
        <div className="max-w-7xl mx-auto px-4 text-center text-xs space-y-2">
          <p>© {new Date().getFullYear()} Erwin Butch D. Nicolas. All Rights Reserved.</p>
          <p>Full-Stack Web Developer & IT Instructor | Parañaque City, Metro Manila, Philippines</p>
        </div>
      </footer>

      {}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className={`max-w-2xl w-full p-6 sm:p-8 rounded-2xl border shadow-2xl relative max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
          }`}>
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
              {selectedProject.category} • {selectedProject.client}
            </span>

            <h3 className="text-2xl font-black mb-4">{selectedProject.title}</h3>

            <div className="space-y-4 text-sm mb-6">
              <div>
                <h4 className="font-bold text-xs uppercase text-slate-400 mb-1">Architecture Overview</h4>
                <p className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{selectedProject.details}</p>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase text-slate-400 mb-2">Key Accomplishments</h4>
                <ul className="space-y-1.5">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase text-slate-400 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold"
            >
              Close Project Overview
            </button>

          </div>
        </div>
      )}

      {}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className={`max-w-3xl w-full p-6 sm:p-10 rounded-2xl border shadow-2xl relative max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
          }`}>
            
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold mb-3">
              <span>{selectedPost.category}</span>
              <span>•</span>
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span>{selectedPost.readTime}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black mb-6 leading-tight">
              {selectedPost.title}
            </h2>

            {/* Article Content */}
            <div 
              className={`prose ${darkMode ? 'prose-invert text-slate-300' : 'text-slate-700'} text-sm leading-relaxed mb-8 border-b border-slate-800/60 pb-8`}
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            ></div>

            {/* Like and Interactive Actions */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => handleLike(selectedPost.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold border transition-all ${
                  likedPosts[selectedPost.id]
                    ? 'bg-emerald-500 text-slate-950 border-emerald-500'
                    : 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                }`}
              >
                <ThumbsUp className="w-4 h-4" />
                <span>{postLikes[selectedPost.id]} Likes</span>
              </button>

              <div className="text-xs text-slate-400 font-medium">
                Written by <strong className="text-emerald-400">{selectedPost.author}</strong>
              </div>
            </div>

            {/* Interactive Comment Section */}
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>Discussion & Comments ({(comments[selectedPost.id] || []).length})</span>
              </h3>

              {/* Submit Comment */}
              <form onSubmit={(e) => handleAddComment(e, selectedPost.id)} className="mb-6 space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={newCommentName}
                  onChange={(e) => setNewCommentName(e.target.value)}
                  className={`w-full px-4 py-2 rounded-xl border text-xs focus:outline-none focus:border-emerald-500 ${
                    darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-300'
                  }`}
                />
                <textarea
                  rows={2}
                  placeholder="Share your technical thoughts on this article..."
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  className={`w-full px-4 py-2 rounded-xl border text-xs focus:outline-none focus:border-emerald-500 ${
                    darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-300'
                  }`}
                ></textarea>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-600 transition-colors"
                >
                  Post Comment
                </button>
              </form>

              {/* Comment List */}
              <div className="space-y-3">
                {(comments[selectedPost.id] || []).map((c, idx) => (
                  <div key={idx} className={`p-3 rounded-xl text-xs border ${
                    darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-100 border-slate-200'
                  }`}>
                    <div className="flex items-center justify-between font-bold mb-1">
                      <span className="text-emerald-400">{c.name}</span>
                      <span className="text-slate-500 text-[10px]">{c.date}</span>
                    </div>
                    <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{c.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default App