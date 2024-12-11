import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as 'en' | 'ja')}
      className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
    >
      <option value="en">English</option>
      <option value="ja">日本語</option>
    </select>
  );
};