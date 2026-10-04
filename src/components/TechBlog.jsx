import React from "react";
import { BookOpen, MessageSquare, Search, ThumbsUp } from "lucide-react";
import { RESUME_DATA } from "../data/resumeData";

function TechBlog({
  darkMode, blogSearch, setBlogSearch, blogCategory, setBlogCategory,
  postLikes, likedPosts, handleLike, comments, onOpenArticle
}) {
  const categories = ["All", "ReactJS & Web Dev", "Server & Homelab", "EduTech", "Linux Hosting"];
  const posts = RESUME_DATA.blogPosts.filter((post) => {
    const query = blogSearch.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some((t) => t.toLowerCase().includes(query));
    return matchesSearch && (blogCategory === "All" || post.category === blogCategory);
  });

  return (
    <section id="blog" className="py-20 border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <BookOpen className="w-4 h-4" /> Interactive Tech Journal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Erwin's <span className="text-emerald-400">Tech Blog</span>
          </h2>
          <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
            Articles, tutorials, and practical reflections on Web Engineering, Proxmox Homelabs, and Tech Pedagogy.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="relative w-full md:w-96">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type="text" placeholder="Search articles by title or tag..." value={blogSearch}
              onChange={(e) => setBlogSearch(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-emerald-500 ${
                darkMode ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-300 text-slate-800"
              }`} />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setBlogCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  blogCategory === cat ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                  : darkMode ? "bg-slate-900 text-slate-300 hover:bg-slate-800" : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}>{cat}</button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.id} className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between transition-all hover:border-emerald-500/50 ${
              darkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{post.category}</span>
                  <span className="text-xs text-slate-400 font-medium">{post.date}</span>
                </div>
                <h3 onClick={() => onOpenArticle(post.slug)}
                  className="text-2xl font-bold mb-3 hover:text-emerald-400 cursor-pointer transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className={`text-sm mb-6 ${darkMode ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>{post.excerpt}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {post.tags.map((tag) => <span key={tag} className="text-xs font-mono text-slate-400">#{tag}</span>)}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/40 text-xs">
                  <div className="flex items-center gap-4">
                    <button onClick={() => handleLike(post.id)}
                      className={`flex items-center gap-1.5 font-bold transition-colors ${likedPosts[post.id] ? "text-emerald-400" : "text-slate-400 hover:text-white"}`}>
                      <ThumbsUp className="w-4 h-4" /><span>{postLikes[post.id]}</span>
                    </button>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <MessageSquare className="w-4 h-4" /><span>{(comments[post.id] || []).length}</span>
                    </div>
                  </div>
                  <button onClick={() => onOpenArticle(post.slug)} className="text-emerald-400 font-bold hover:underline">
                    Read Full Article →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechBlog;