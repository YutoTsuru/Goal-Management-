import React, { useEffect, useState } from 'react';
import { EntryCard } from '../../components/journal/EntryCard';
import { MarkdownEditor } from '../../components/journal/MarkdownEditor';
import { useJournal } from '../../hooks/useJournal';

const JournalPage: React.FC = () => {
    const { entries, addEntry } = useJournal();
    const [newEntry, setNewEntry] = useState('');

    const handleAddEntry = () => {
        if (newEntry.trim()) {
            addEntry(newEntry);
            setNewEntry('');
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Journal</h1>
            <MarkdownEditor value={newEntry} onChange={setNewEntry} />
            <button 
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded" 
                onClick={handleAddEntry}
            >
                Add Entry
            </button>
            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Entries</h2>
                {entries.map((entry, index) => (
                    <EntryCard key={index} entry={entry} />
                ))}
            </div>
        </div>
    );
};

export default JournalPage;