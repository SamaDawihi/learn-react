import React from 'react';

function Post({ article }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex-1">
        <h3 className="text-xl font-bold mb-2">{article.title}</h3>
        <p className="text-gray-600 mb-2">{new Date(article.created_at).toLocaleDateString()} | {article.tags}</p>
        <p className="text-gray-800">
          {article.content}
        </p>
    </div>
  );
}

export default Post;
