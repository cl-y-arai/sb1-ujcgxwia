import React from 'react';
import { CompetitionCard } from '../components/CompetitionCard';
import { competitions } from '../data/competitions';
import { useLanguage } from '../contexts/LanguageContext';

export const Home: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">{t('home.activeCompetitions')}</h2>
        <div className="flex gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
            <option>{t('home.allCategories')}</option>
            <option>Machine Learning</option>
            <option>Deep Learning</option>
            <option>Computer Vision</option>
            <option>NLP</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
            <option>{t('home.sortByLatest')}</option>
            <option>{t('home.prizeAmount')}</option>
            <option>{t('home.participants')}</option>
            <option>{t('home.deadline')}</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competitions[language].map((competition) => (
          <CompetitionCard key={competition.id} competition={competition} />
        ))}
      </div>
    </main>
  );
};