import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor: React.FC = () => {
    const [markdown, setMarkdown] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMarkdown(event.target.value);
    };

    return (
        <div className="flex flex-col p-4">
            <textarea
                className="border rounded-md p-2 mb-4"
                rows={10}
                value={markdown}
                onChange={handleChange}
                placeholder="Write your journal entry in Markdown..."
            />
            <div className="prose">
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
};

export default MarkdownEditor;