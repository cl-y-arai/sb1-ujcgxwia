import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Users, Award, Tag, Download, Trophy, BarChart } from 'lucide-react';
import { competitions } from '../data/competitions';
import { useLanguage } from '../contexts/LanguageContext';

export const CompetitionDetail: React.FC = () => {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const competition = competitions[language].find(c => c.id === id);

  if (!competition) {
    return <div>Competition not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="w-full h-64 bg-gradient-to-r from-blue-600 to-blue-800 relative">
        <img
          src={competition.imageUrl}
          alt={competition.title}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">{competition.title}</h1>
            <div className="flex items-center justify-center gap-6">
              <span className="flex items-center gap-2">
                <Trophy size={20} />
                {competition.prize}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={20} />
                {t('home.deadline')}: {competition.deadline}
              </span>
              <span className="flex items-center gap-2">
                <Users size={20} />
                {competition.participants} {t('home.participants')}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex gap-4 mb-8">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              {t('competition.join')}
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Download size={20} />
              {t('competition.downloadDataset')}
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{t('competition.overview')}</h2>
                <p className="text-gray-600">{competition.overview}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{t('competition.rules')}</h2>
                <ul className="list-disc list-inside text-gray-600">
                  {competition.rules?.map((rule, index) => (
                    <li key={index} className="mb-2">{rule}</li>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{t('competition.evaluation')}</h2>
                <p className="text-gray-600">{competition.evaluation}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{t('competition.dataset')}</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">{competition.dataset?.description}</p>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <BarChart size={20} className="text-gray-500" />
                      <span>Size: {competition.dataset?.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag size={20} className="text-gray-500" />
                      <span>Format: {competition.dataset?.format}</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">{t('competition.timeline')}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">{t('competition.startDate')}</p>
                    <p className="font-medium">{competition.timeline?.start}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('competition.endDate')}</p>
                    <p className="font-medium">{competition.timeline?.end}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('competition.evaluationDate')}</p>
                    <p className="font-medium">{competition.timeline?.evaluation}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">{t('competition.prizes')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Trophy size={24} className="text-yellow-500" />
                    <div>
                      <p className="text-sm text-gray-500">{t('competition.firstPlace')}</p>
                      <p className="font-medium">{competition.prizes?.first}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trophy size={24} className="text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">{t('competition.secondPlace')}</p>
                      <p className="font-medium">{competition.prizes?.second}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trophy size={24} className="text-amber-600" />
                    <div>
                      <p className="text-sm text-gray-500">{t('competition.thirdPlace')}</p>
                      <p className="font-medium">{competition.prizes?.third}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};