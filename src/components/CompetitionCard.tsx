import React from 'react';
import { Calendar, Users, Award, Tag } from 'lucide-react';
import { Competition } from '../types';
import { Link } from 'react-router-dom';

interface CompetitionCardProps {
  competition: Competition;
}

export const CompetitionCard: React.FC<CompetitionCardProps> = ({ competition }) => {
  return (
    <Link to={`/competition/${competition.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img 
          src={competition.imageUrl} 
          alt={competition.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-900">{competition.title}</h3>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {competition.difficulty}
            </span>
          </div>
          <p className="text-gray-600 mb-4 line-clamp-2">{competition.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {competition.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                <Tag size={14} />
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center text-gray-600">
            <div className="flex items-center gap-2">
              <Award className="text-yellow-500" size={20} />
              <span>{competition.prize}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={20} />
              <span>{competition.deadline}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} />
              <span>{competition.participants}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};