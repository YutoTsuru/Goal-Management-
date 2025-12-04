import { JournalEntry } from '../types';

const journalEntries: JournalEntry[] = [];

export const getJournalEntries = (): JournalEntry[] => {
    return journalEntries;
};

export const addJournalEntry = (entry: JournalEntry): void => {
    journalEntries.push(entry);
};

export const updateJournalEntry = (id: string, updatedEntry: JournalEntry): void => {
    const index = journalEntries.findIndex(entry => entry.id === id);
    if (index !== -1) {
        journalEntries[index] = { ...journalEntries[index], ...updatedEntry };
    }
};

export const deleteJournalEntry = (id: string): void => {
    const index = journalEntries.findIndex(entry => entry.id === id);
    if (index !== -1) {
        journalEntries.splice(index, 1);
    }
};