'use client'

// Import necessary modules and data
import { EmojiCategory } from './types';
import emojiData from './emoji.json';

// Convert JSON data to EmojiCategory type
const emojis: EmojiCategory = emojiData;

const Home: React.FC = () => {
  // Function to copy emoji to clipboard
  const copyEmoji = (emoji: string) => {
    navigator.clipboard.writeText(emoji).then(() => {
      alert(`Emoji copied: ${emoji}`);
    }).catch(() => {
      alert('Failed to copy emoji.');
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
        {emojiList}
      </div>
    </div>
  );
};

export default Home;
