import React, { useEffect, useState } from "react";
import { RESUME_DATA } from "./data/resumeData";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ProfessionalSummary from "./components/ProfessionalSummary";
import ProfessionalExperience from "./components/ProfessionalExperience";
import FeaturedProjects from "./components/FeaturedProjects";
import TechBlog from "./components/TechBlog";
import EducationAcademia from "./components/EducationAcademia";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";
import BlogArticlePage from "./components/BlogArticlePage";

function getArticleSlug() {
  const match = window.location.pathname.match(/^\/blog\/([^/]+)\/?$/);
  return match ? decodeURIComponent(match[1]) : null;
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("home");
  const [articleSlug, setArticleSlug] = useState(getArticleSlug);
  const [selectedProjectCategory, setSelectedProjectCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [blogSearch, setBlogSearch] = useState("");
  const [blogCategory, setBlogCategory] = useState("All");
  const [postLikes, setPostLikes] = useState(Object.fromEntries(RESUME_DATA.blogPosts.map((post) => [post.id, post.likes])));
  const [likedPosts, setLikedPosts] = useState({});
  const [comments, setComments] = useState({
    1: [{ name: "Alex Santos", text: "Great insights on Firebase integration!", date: "1 day ago" }],
    2: [{ name: "DevOps Engineer", text: "Proxmox + pfSense is the gold standard for homelabs.", date: "3 days ago" }],
  });
  const [newCommentName, setNewCommentName] = useState("");
  const [newCommentText, setNewCommentText] = useState("");
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => { document.documentElement.classList.toggle("dark", darkMode); }, [darkMode]);

  useEffect(() => {
    const handlePopState = () => setArticleSlug(getArticleSlug());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (id) => {
    setArticleSlug(null);
    setActiveTab(id);
    window.history.pushState({}, "", `/#${id}`);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openArticle = (slug) => {
    window.history.pushState({}, "", `/blog/${encodeURIComponent(slug)}`);
    setArticleSlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToBlog = () => {
    window.history.pushState({}, "", "/#blog");
    setArticleSlug(null);
    setActiveTab("blog");
    requestAnimationFrame(() => document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" }));
  };

  const handleLike = (postId) => {
    setPostLikes((prev) => ({ ...prev, [postId]: prev[postId] + (likedPosts[postId] ? -1 : 1) }));
    setLikedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const handleAddComment = (e, postId) => {
    e.preventDefault();
    if (!newCommentName.trim() || !newCommentText.trim()) return;
    const newEntry = { name: newCommentName, text: newCommentText, date: "Just now" };
    setComments((prev) => ({ ...prev, [postId]: [newEntry, ...(prev[postId] || [])] }));
    setNewCommentName("");
    setNewCommentText("");
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", "65a7911d-18db-44bf-95c1-2e6da6e3f2ff");
    
    if (!formState.name || !formState.email || !formState.message) { setFormError("Please complete all required fields."); return; }
    setFormError("");
    setFormSubmitted(true);
    setTimeout(() => { setFormSubmitted(false); setFormState({ name: "", email: "", subject: "", message: "" }); }, 10000);
    
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    
  };


  const selectedArticle = RESUME_DATA.blogPosts.find((post) => post.slug === articleSlug);

  if (articleSlug) {
    return <BlogArticlePage post={selectedArticle} darkMode={darkMode} onBack={backToBlog} postLikes={postLikes} likedPosts={likedPosts} handleLike={handleLike} comments={comments} newCommentName={newCommentName} setNewCommentName={setNewCommentName} newCommentText={newCommentText} setNewCommentText={setNewCommentText} handleAddComment={handleAddComment} relatedPosts={RESUME_DATA.blogPosts} onOpenArticle={openArticle} />;
  }

  return <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"}`}>
    <Navigation darkMode={darkMode} setDarkMode={setDarkMode} activeTab={activeTab} setActiveTab={setActiveTab} />
    <main>
      <Hero darkMode={darkMode} navigate={navigate} />
      <ProfessionalSummary darkMode={darkMode} />
      <ProfessionalExperience darkMode={darkMode} />
      <FeaturedProjects darkMode={darkMode} selectedProjectCategory={selectedProjectCategory} setSelectedProjectCategory={setSelectedProjectCategory} setSelectedProject={setSelectedProject} />
      <TechBlog darkMode={darkMode} blogSearch={blogSearch} setBlogSearch={setBlogSearch} blogCategory={blogCategory} setBlogCategory={setBlogCategory} postLikes={postLikes} likedPosts={likedPosts} handleLike={handleLike} comments={comments} onOpenArticle={openArticle} />
      <EducationAcademia darkMode={darkMode} />
      <Contact darkMode={darkMode} formState={formState} setFormState={setFormState} formSubmitted={formSubmitted} formError={formError} handleContactSubmit={handleContactSubmit} />
    </main>
    <Footer darkMode={darkMode} />
    <ProjectModal project={selectedProject} darkMode={darkMode} onClose={() => setSelectedProject(null)} />
  </div>;
}


export default App;