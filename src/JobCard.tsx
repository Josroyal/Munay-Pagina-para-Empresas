import React from 'react';
import { MapPin, Calendar, DollarSign, Clock, ChevronRight, Bot } from 'lucide-react';

interface Requirement {
  type: 'location' | 'experience' | 'certification' | 'skills' | 'education';
  description: string;
  met: boolean;
}

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  match: number;
  applications: number;
  publishedDate: string;
  salary: string;
  schedule: string;
  description: string;
  requirements: Requirement[];
  liaInsights: string[];
}

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-purple-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-purple-900 mb-1">{job.title}</h3>
          <p className="text-purple-600 font-medium">{job.company}</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
            {job.match}% Match
          </div>
          <span className="text-sm text-gray-500 mt-1">
            {job.applications} applications
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2 text-purple-500" />
          <span className="text-sm">{job.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2 text-purple-500" />
          <span className="text-sm">{job.publishedDate}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <DollarSign className="w-4 h-4 mr-2 text-purple-500" />
          <span className="text-sm">{job.salary}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2 text-purple-500" />
          <span className="text-sm">{job.schedule}</span>
        </div>
      </div>

      <p className="text-gray-600 mb-4 text-sm">{job.description}</p>

      <div className="space-y-2 mb-4">
        {job.requirements.map((req, index) => (
          <div
            key={index}
            className={`flex items-center text-sm ${
              req.met ? 'text-green-600' : 'text-gray-500'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full mr-2 ${
                req.met ? 'bg-green-500' : 'bg-gray-300'
              }`}
            />
            {req.description}
          </div>
        ))}
      </div>

      <div className="bg-purple-50 rounded-xl p-4 mb-4">
        <h4 className="text-purple-800 font-semibold mb-2 flex items-center">
          <Bot className="w-4 h-4 mr-2" />
          Lía's Insights
        </h4>
        <ul className="space-y-2">
          {job.liaInsights.map((insight, index) => (
            <li key={index} className="text-sm text-purple-700 flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 mr-2 flex-shrink-0" />
              {insight}
            </li>
          ))}
        </ul>
      </div>

      <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-xl font-medium hover:from-purple-700 hover:to-blue-600 transition-colors flex items-center justify-center group">
        View Details
        <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default JobCard;