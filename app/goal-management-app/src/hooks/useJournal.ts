import { useState, useEffect } from 'react';
import { JournalEntry } from '../types';
import { fetchJournalEntries, createJournalEntry, updateJournalEntry, deleteJournalEntry } from '../services/journalService';

const useJournal = () => {
    const [entries, setEntries] = useState<JournalEntry[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadEntries = async () => {
            try {
                const data = await fetchJournalEntries();
                setEntries(data);
            } catch (err) {
                setError('Failed to load journal entries');
            } finally {
                setLoading(false);
            }
        };

        loadEntries();
    }, []);

    const addEntry = async (entry: JournalEntry) => {
        try {
            const newEntry = await createJournalEntry(entry);
            setEntries((prevEntries) => [...prevEntries, newEntry]);
        } catch (err) {
            setError('Failed to add journal entry');
        }
    };

    const editEntry = async (entry: JournalEntry) => {
        try {
            const updatedEntry = await updateJournalEntry(entry);
            setEntries((prevEntries) =>
                prevEntries.map((e) => (e.id === updatedEntry.id ? updatedEntry : e))
            );
        } catch (err) {
            setError('Failed to update journal entry');
        }
    };

    const removeEntry = async (id: string) => {
        try {
            await deleteJournalEntry(id);
            setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
        } catch (err) {
            setError('Failed to delete journal entry');
        }
    };

    return {
        entries,
        loading,
        error,
        addEntry,
        editEntry,
        removeEntry,
    };
};

export default useJournal;