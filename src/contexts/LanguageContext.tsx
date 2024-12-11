import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.search': 'Search competitions...',
    'home.activeCompetitions': 'Active Competitions',
    'home.allCategories': 'All Categories',
    'home.sortByLatest': 'Sort by Latest',
    'home.prizeAmount': 'Prize Amount',
    'home.participants': 'Participants',
    'home.deadline': 'Deadline',
    'competition.join': 'Join Competition',
    'competition.downloadDataset': 'Download Dataset',
    'competition.overview': 'Overview',
    'competition.rules': 'Rules',
    'competition.evaluation': 'Evaluation',
    'competition.dataset': 'Dataset',
    'competition.timeline': 'Timeline',
    'competition.prizes': 'Prizes',
    'competition.startDate': 'Start Date',
    'competition.endDate': 'End Date',
    'competition.evaluationDate': 'Evaluation Date',
    'competition.firstPlace': '1st Place',
    'competition.secondPlace': '2nd Place',
    'competition.thirdPlace': '3rd Place',
  },
  ja: {
    'nav.search': 'コンペティションを検索...',
    'home.activeCompetitions': '開催中のコンペティション',
    'home.allCategories': 'すべてのカテゴリー',
    'home.sortByLatest': '新着順',
    'home.prizeAmount': '賞金額',
    'home.participants': '参加者数',
    'home.deadline': '締切',
    'competition.join': 'コンペティションに参加',
    'competition.downloadDataset': 'データセットをダウンロード',
    'competition.overview': '概要',
    'competition.rules': 'ルール',
    'competition.evaluation': '評価方法',
    'competition.dataset': 'データセット',
    'competition.timeline': 'タイムライン',
    'competition.prizes': '賞金',
    'competition.startDate': '開始日',
    'competition.endDate': '終了日',
    'competition.evaluationDate': '評価日',
    'competition.firstPlace': '1位',
    'competition.secondPlace': '2位',
    'competition.thirdPlace': '3位',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};