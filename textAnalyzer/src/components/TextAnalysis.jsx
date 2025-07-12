import React from 'react';

function TextAnalysis({ stats }) {
    return (
        <div className="bg-white text-gray-500 shadow-md rounded-lg p-4 mt-4 w-lg">
            <p className="text-xl font-semibold mb-4">Text Analysis</p>
            <p>Word Count: {stats.wordCount || 0}</p>
            <p>Character Count: {stats.charCount || 0}</p>
            <p>Longest Word: {stats.longestWord || '-'}</p>
            <p>Typing Speed: {stats.typingSpeed || 0} WPM</p>
        </div>
    );
}

export default TextAnalysis;
