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

  return (
    <div className="container">
      <Head>
        <title>Emoji List by Category</title>
        <meta name="description" content="List of emojis by category with copy functionality" />
      </Head>

      <nav className="navbar">
        Emoji List
      </nav>

      <main className="main">
        <h1 className="title">Emoji List by Category</h1>

        {Object.entries(emojis).map(([category, emojiList]) => (
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
        ))}
      </main>
    </div>
  );
}
