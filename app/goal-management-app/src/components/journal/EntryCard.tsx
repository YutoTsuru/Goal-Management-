import React from 'react';

interface EntryCardProps {
    title: string;
    date: string;
    content: string;
}

const EntryCard: React.FC<EntryCardProps> = ({ title, date, content }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-500 text-sm">{date}</p>
            <p className="mt-2">{content}</p>
        </div>
    );
};

export default EntryCard;