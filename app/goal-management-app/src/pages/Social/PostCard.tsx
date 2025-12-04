import React from 'react';

interface Post {
  id: number;
  user: string;
  content: string;
  timestamp: string;
}

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex items-center mb-2">
        <span className="font-bold text-lg">{post.user}</span>
        <span className="text-gray-500 text-sm ml-2">{post.timestamp}</span>
      </div>
      <p className="text-gray-800">{post.content}</p>
    </div>
  );
};

export default PostCard;