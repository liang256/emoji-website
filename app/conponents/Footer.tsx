import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Emoji Picker. All rights reserved.</p>
        <p className="mb-2">Developed by <a href="https://github.com/liang256" className="text-blue-400 hover:underline">Liang</a></p>
      </div>
    </footer>
  );
};

export default Footer;
