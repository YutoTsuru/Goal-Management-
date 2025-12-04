import React, { useState } from 'react';
import MarkdownEditor from '../../components/journal/MarkdownEditor';
import { useJournal } from '../../hooks/useJournal';

const JournalEditor: React.FC = () => {
    const { addEntry } = useJournal();
    const [entryContent, setEntryContent] = useState<string>('');
    const [title, setTitle] = useState<string>('');

    const handleSave = () => {
        if (title && entryContent) {
            addEntry({ title, content: entryContent });
            setTitle('');
            setEntryContent('');
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">日誌エディタ</h1>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="タイトル"
                className="border p-2 mb-4 w-full"
            />
            <MarkdownEditor content={entryContent} setContent={setEntryContent} />
            <button
                onClick={handleSave}
                className="bg-blue-500 text-white p-2 rounded mt-4"
            >
                保存
            </button>
        </div>
    );
};

export default JournalEditor;