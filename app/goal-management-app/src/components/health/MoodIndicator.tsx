import React from 'react';

interface MoodIndicatorProps {
  mood: number; // Mood index from 1 to 5
}

const MoodIndicator: React.FC<MoodIndicatorProps> = ({ mood }) => {
  const moodColors = [
    'bg-red-500', // 1 - Very Bad
    'bg-orange-500', // 2 - Bad
    'bg-yellow-500', // 3 - Neutral
    'bg-green-500', // 4 - Good
    'bg-blue-500', // 5 - Very Good
  ];

  return (
    <div className="flex items-center">
      <div className={`w-16 h-16 rounded-full ${moodColors[mood - 1]}`} />
      <span className="ml-4 text-lg font-semibold">
        {mood === 1 ? 'Very Bad' :
         mood === 2 ? 'Bad' :
         mood === 3 ? 'Neutral' :
         mood === 4 ? 'Good' :
         'Very Good'}
      </span>
    </div>
  );
};

export default MoodIndicator;