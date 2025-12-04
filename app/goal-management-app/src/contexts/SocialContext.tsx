import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Post {
  id: string;
  content: string;
  author: string;
  createdAt: Date;
}

interface SocialContextType {
  posts: Post[];
  addPost: (content: string, author: string) => void;
  deletePost: (id: string) => void;
}

const SocialContext = createContext<SocialContextType | undefined>(undefined);

export const SocialProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (content: string, author: string) => {
    const newPost: Post = {
      id: Math.random().toString(36).substr(2, 9),
      content,
      author,
      createdAt: new Date(),
    };
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  const deletePost = (id: string) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  return (
    <SocialContext.Provider value={{ posts, addPost, deletePost }}>
      {children}
    </SocialContext.Provider>
  );
};

export const useSocial = () => {
  const context = useContext(SocialContext);
  if (!context) {
    throw new Error('useSocial must be used within a SocialProvider');
  }
  return context;
};