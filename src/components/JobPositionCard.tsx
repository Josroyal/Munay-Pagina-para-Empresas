import React, { useState } from 'react';
import { Users, MapPin, Calendar, ChevronRight, Bell, Bot } from 'lucide-react';

interface Candidate {
  id: number;
  name: string;
  match: number;
  experience: string;
  skills: string[];
  photo: string;
  accessibility?: string;
}

interface Position {
  id: number;
  title: string;
  department: string;
  applicants: number;
  qualified: number;
  status: 'active' | 'draft';
  location: string;
  created: string;
  accessibility: string | null;
  topCandidates: Candidate[];
}

interface Props {
  position: Position;
}

const JobPositionCard: React.FC<Props> = ({ position }) => {
  const [expanded, setExpanded] = useState(false);

  const getStatusText = (status: string) => {
    return status === 'active' ? 'Activo' : 'Borrador';
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-white hover:bg-white/20 transition-all cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex space-x-2 mb-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                position.status === 'active'
                  ? 'bg-green-500/20 text-green-300'
                  : 'bg-yellow-500/20 text-yellow-300'
              }`}
            >
              {getStatusText(position.status)}
            </span>
            {position.accessibility && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300">
                {position.accessibility}
              </span>
            )}
          </div>
          <h3 className="text-xl font-semibold">{position.title}</h3>
          <p className="text-white/60">{position.department}</p>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="p-2 hover:bg-white/10 rounded-xl transition-colors"
        >
          <ChevronRight
            className={`w-5 h-5 transform transition-transform ${
              expanded ? 'rotate-90' : ''
            }`}
          />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center text-white/60">
          <Users className="w-4 h-4 mr-2" />
          <span className="text-sm">{position.applicants} Postulantes</span>
        </div>
        <div className="flex items-center text-white/60">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{position.location}</span>
        </div>
        <div className="flex items-center text-white/60">
          <Users className="w-4 h-4 mr-2" />
          <span className="text-sm">{position.qualified} Calificados</span>
        </div>
        <div className="flex items-center text-white/60">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm">
            {new Date(position.created).toLocaleDateString()}
          </span>
        </div>
      </div>

      {expanded && (
        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-2 mb-2">
            <Bot className="w-4 h-4 text-purple-300" />
            <h4 className="text-sm font-medium text-purple-300">
              Candidatos Recomendados por Munay
            </h4>
          </div>
          {position.topCandidates.map((candidate) => (
            <div
              key={candidate.id}
              className="flex items-center justify-between bg-white/5 rounded-xl p-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={candidate.photo}
                  alt={candidate.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h5 className="font-medium">{candidate.name}</h5>
                    {candidate.accessibility && (
                      <span className="px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                        {candidate.accessibility}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-white/60">
                    {candidate.experience}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-green-300">
                  {candidate.match}% Match
                </span>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <Bell className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobPositionCard;
