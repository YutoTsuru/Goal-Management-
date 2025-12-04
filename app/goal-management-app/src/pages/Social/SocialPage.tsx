import React from 'react';
import PostList from '../../components/social/PostList';
import PostComposer from '../../components/social/PostComposer';

const SocialPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold mb-4">Social Feed</h1>
            <PostComposer />
            <PostList />
        </div>
    );
};

export default SocialPage;