import React from 'react';

interface CommentItemProps {
    username: string;
    content: string;
    timestamp: string;
}

const CommentItem: React.FC<CommentItemProps> = ({ username, content, timestamp }) => {
    return (
        <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
                <span className="font-semibold">{username}</span>
                <span className="text-sm text-gray-500">{timestamp}</span>
            </div>
            <p className="mt-2 text-gray-700">{content}</p>
        </div>
    );
};

export default CommentItem;