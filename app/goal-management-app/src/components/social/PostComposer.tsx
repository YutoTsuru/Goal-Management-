import React, { useState } from 'react';

const PostComposer: React.FC = () => {
    const [content, setContent] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Here you would typically send the content to your backend
        // For example: await socialService.createPost({ content });

        // Simulate a network request
        setTimeout(() => {
            console.log('Post submitted:', content);
            setContent('');
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <div className="p-4 border rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
                <textarea
                    className="w-full p-2 border rounded-md"
                    rows={4}
                    placeholder="What's on your mind?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className={`mt-2 px-4 py-2 text-white rounded-md ${isSubmitting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Posting...' : 'Post'}
                </button>
            </form>
        </div>
    );
};

export default PostComposer;