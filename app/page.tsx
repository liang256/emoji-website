'use client'

import Head from 'next/head';
import './home.module.css';

interface EmojiCategory {
  [category: string]: string[];
}

const emojis: EmojiCategory = {
  'Smileys & People': ['😀', '😃', '😄'],
  'Animals & Nature': ['🐱', '🐶', '🐭'],
  // Add more categories and emojis
};

export default function Home() {
  const copyEmoji = (emoji: string) => {
    navigator.clipboard.writeText(emoji).then(() => {
      alert(`Emoji copied: ${emoji}`);
    }).catch(() => {
      alert('Failed to copy emoji.');
    });
  };

  const emojiList = Object.entries(emojis).map(([category, emojiList]) => (
    <div key={category} className={category}>
      <h2>{category}</h2>
      <div>
        {emojiList.map((emoji) => (
          <span key={emoji} className={emoji} onClick={() => copyEmoji(emoji)}>
            {emoji}
          </span>
        ))}
      </div>
    </div>
  ));

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-green-500 text-white p-4">
        {emojiList}
      </div>
    </div>
  );
}
