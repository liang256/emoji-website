'use client'

import React, { useState } from 'react';
import { EmojiCategory } from './types';
import emojiData from './emoji.json';

const emojis: EmojiCategory = emojiData;

const Home: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Function to copy emoji to clipboard
  const copyEmoji = (emoji: string) => {
    navigator.clipboard.writeText(emoji).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // Display message for 2 seconds
    }).catch(() => {
      console.error('Failed to copy emoji.');
    });
  };

  // Generate emoji list
  const emojiList = Object.entries(emojis).map(([category, emojiList]) => (
    <div>
      <h2 className="text-2xl font-bold mb-4">{category}</h2>
      <div className="flex flex-wrap">
        {emojiList.map((emoji) => (
          <span key={emoji} className="text-4xl cursor-pointer m-2" onClick={() => copyEmoji(emoji)}>
            {emoji}
          </span>
        ))}
      </div>
    </div>
  ));

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="mb-8 p-4 bg-green-500 text-white max-w-screen-md mx-auto">
        {copied && <div className="fixed top-4 right-4 bg-blue-500 text-white p-2 rounded">Copied!</div>}
        {emojiList}
      </div>
    </div>
  );
};

export default Home;
