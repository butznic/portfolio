import React from "react";
import { MessageSquare, ThumbsUp, X } from "lucide-react";

function BlogModal({
  post, darkMode, onClose, postLikes, likedPosts, handleLike,
  comments, newCommentName, setNewCommentName, newCommentText, setNewCommentText, handleAddComment
}) {
  if (!post) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className={`max-w-3xl w-full p-6 sm:p-10 rounded-2xl border shadow-2xl relative max-h-[90vh] overflow-y-auto ${
        darkMode ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-800"
      }`}>
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>

        <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold mb-3">
          <span>{post.category}</span><span>•</span><span>{post.date}</span><span>•</span><span>{post.readTime}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black mb-6 leading-tight">{post.title}</h2>

        <div className={`prose ${darkMode ? "prose-invert text-slate-300" : "text-slate-700"} text-sm leading-relaxed mb-8 border-b border-slate-800/60 pb-8`}
          dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="flex items-center justify-between mb-8">
          <button onClick={() => handleLike(post.id)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold border transition-all ${
              likedPosts[post.id] ? "bg-emerald-500 text-slate-950 border-emerald-500" : "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700"
            }`}>
            <ThumbsUp className="w-4 h-4" /><span>{postLikes[post.id]} Likes</span>
          </button>
          <div className="text-xs text-slate-400 font-medium">Written by <strong className="text-emerald-400">{post.author}</strong></div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><MessageSquare className="w-5 h-5 text-emerald-400" />Discussion & Comments ({(comments[post.id] || []).length})</h3>
          <form onSubmit={(e) => handleAddComment(e, post.id)} className="mb-6 space-y-3">
            <input type="text" placeholder="Your Name" value={newCommentName} onChange={(e) => setNewCommentName(e.target.value)}
              className={`w-full px-4 py-2 rounded-xl border text-xs focus:outline-none focus:border-emerald-500 ${darkMode ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-slate-50 border-slate-300"}`} />
            <textarea rows={2} placeholder="Share your technical thoughts on this article..." value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
              className={`w-full px-4 py-2 rounded-xl border text-xs focus:outline-none focus:border-emerald-500 ${darkMode ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-slate-50 border-slate-300"}`} />
            <button type="submit" className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-600 transition-colors">Post Comment</button>
          </form>

          <div className="space-y-3">
            {(comments[post.id] || []).map((c, idx) => (
              <div key={idx} className={`p-3 rounded-xl text-xs border ${darkMode ? "bg-slate-950/60 border-slate-800" : "bg-slate-100 border-slate-200"}`}>
                <div className="flex items-center justify-between font-bold mb-1">
                  <span className="text-emerald-400">{c.name}</span><span className="text-slate-500 text-[10px]">{c.date}</span>
                </div>
                <p className={darkMode ? "text-slate-300" : "text-slate-700"}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogModal;