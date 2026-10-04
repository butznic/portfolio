import React, { useEffect } from "react";
import { ArrowLeft, BookOpen, MessageSquare, Share2, ThumbsUp } from "lucide-react";

function BlogArticlePage({ post, darkMode, onBack, postLikes, likedPosts, handleLike, comments, newCommentName, setNewCommentName, newCommentText, setNewCommentText, handleAddComment, relatedPosts, onOpenArticle }) {
  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} | Erwin Nicolas`;
    window.scrollTo({ top: 0, behavior: "instant" });
    return () => { document.title = "Erwin Nicolas | Full-Stack Web Developer & IT Instructor"; };
  }, [post]);

  if (!post) {
    return <div className={`min-h-screen flex items-center justify-center px-4 ${darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"}`}><div className="text-center"><BookOpen className="w-12 h-12 mx-auto mb-4 text-emerald-400" /><h1 className="text-2xl font-black mb-2">Article Not Found</h1><p className="text-sm text-slate-400 mb-6">The article you requested does not exist.</p><button onClick={onBack} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold"><ArrowLeft className="w-4 h-4" /> Back to Tech Blog</button></div></div>;
  }

  const commentsForPost = comments[post.id] || [];
  const related = relatedPosts.filter((item) => item.id !== post.id).slice(0, 3);
  const handleShare = async () => {
    const shareData = { title: post.title, text: post.excerpt, url: window.location.href };
    if (navigator.share) { await navigator.share(shareData).catch(() => {}); return; }
    await navigator.clipboard?.writeText(window.location.href);
  };

  return <div className={`min-h-screen ${darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"}`}>
    <header className={`sticky top-0 z-40 backdrop-blur-md border-b ${darkMode ? "bg-slate-900/90 border-slate-800" : "bg-white/90 border-slate-200"}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300"><ArrowLeft className="w-4 h-4" /> Back to Tech Blog</button>
        <button onClick={handleShare} className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold ${darkMode ? "bg-slate-800 text-slate-200 hover:bg-slate-700" : "bg-slate-200 text-slate-700 hover:bg-slate-300"}`}><Share2 className="w-4 h-4" /> Share</button>
      </div>
    </header>

    <main><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-5"><span>{post.category}</span><span>•</span><span>{post.date}</span><span>•</span><span>{post.readTime}</span></div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">{post.title}</h1>
        <p className={`text-lg sm:text-xl leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{post.excerpt}</p>
        <div className="flex flex-wrap items-center gap-4 mt-7 text-sm"><span className="font-bold">Written by <span className="text-emerald-400">{post.author}</span></span></div>
      </div>

      <div className={`rounded-2xl border p-6 sm:p-10 ${darkMode ? "bg-slate-900/70 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
        <div className={`prose max-w-none ${darkMode ? "prose-invert" : ""} prose-headings:scroll-mt-24 prose-a:text-emerald-400 prose-strong:text-emerald-400`} dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-8 border-b border-slate-800/50">
        {/* <button onClick={() => handleLike(post.id)} className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold border transition-all ${likedPosts[post.id] ? "bg-emerald-500 text-slate-950 border-emerald-500" : darkMode ? "bg-slate-900 border-slate-800 text-slate-200 hover:border-emerald-500" : "bg-white border-slate-200 hover:border-emerald-500"}`}><ThumbsUp className="w-4 h-4" /> {postLikes[post.id]} Likes</button> */}
        <div className="flex flex-wrap gap-2">{post.tags.map((tag) => <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-400 bg-slate-800/50">#{tag}</span>)}</div>
      </div>
{/* 
      <section className="py-10">
        <h2 className="text-2xl font-black mb-5 flex items-center gap-2"><MessageSquare className="w-5 h-5 text-emerald-400" /> Discussion & Comments ({commentsForPost.length})</h2>
        <form onSubmit={(e) => handleAddComment(e, post.id)} className="mb-7 space-y-3">
          <input type="text" placeholder="Your Name" value={newCommentName} onChange={(e) => setNewCommentName(e.target.value)} className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-emerald-500 ${darkMode ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-300"}`} />
          <textarea rows={3} placeholder="Share your technical thoughts on this article..." value={newCommentText} onChange={(e) => setNewCommentText(e.target.value)} className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-emerald-500 ${darkMode ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-300"}`} />
          <button type="submit" className="px-5 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-600">Post Comment</button>
        </form>
        <div className="space-y-3">{commentsForPost.map((comment, index) => <div key={`${comment.name}-${index}`} className={`p-4 rounded-xl border ${darkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200"}`}><div className="flex items-center justify-between gap-3 mb-1"><strong className="text-emerald-400 text-sm">{comment.name}</strong><span className="text-xs text-slate-500">{comment.date}</span></div><p className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-700"}`}>{comment.text}</p></div>)}</div>
      </section> */}

      {related.length > 0 && <section className="pt-8 border-t border-slate-800/50"><h2 className="text-2xl font-black mb-6">Related Articles</h2><div className="grid md:grid-cols-3 gap-5">{related.map((item) => <button key={item.id} onClick={() => onOpenArticle(item.slug)} className={`text-left p-5 rounded-2xl border transition-all hover:-translate-y-1 hover:border-emerald-500/50 ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}><span className="text-[11px] font-bold uppercase text-emerald-400">{item.category}</span><h3 className="font-bold mt-2 leading-snug">{item.title}</h3><p className="text-xs text-slate-400 mt-2">{item.readTime}</p></button>)}</div></section>}
    </article></main>

    <footer className={`py-8 border-t ${darkMode ? "bg-slate-950 border-slate-900 text-slate-500" : "bg-slate-100 border-slate-200 text-slate-600"}`}><div className="max-w-5xl mx-auto px-4 text-center text-xs">© {new Date().getFullYear()} Erwin Butch D. Nicolas. All Rights Reserved.</div></footer>
  </div>;
}

export default BlogArticlePage