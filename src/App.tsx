import React, { useState } from 'react';
import {
  Plus,
  Bot,
  Briefcase,
  Users,
  Settings,
  Bell,
  Search,
  Sparkles,
  ChevronRight,
  Heart,
  TrendingUp,
} from 'lucide-react';
import JobPositionCard from './components/JobPositionCard';
import CreateJobModal from './components/CreateJobModal';
import OnboardingOverlay from './components/OnboardingOverlay';

const mockPositions = [
  {
    id: 1,
    title: 'Barista Turno Noche',
    department: 'Restaurantes',
    applicants: 24,
    qualified: 12,
    status: 'active',
    location: 'Presencial',
    created: '2024-10-14',
    accessibility: 'Apto para Baja Visión',
    topCandidates: [
      {
        id: 1,
        name: 'Piero Flores',
        match: 95,
        experience: '1 año',
        skills: ['Amable', '1 año', 'Sociable'],
        photo:
          'https://plus.unsplash.com/premium_photo-1689568158814-3b8e9c1a9618?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        name: 'Jordy Rodriguez',
        match: 92,
        experience: '6 meses',
        skills: ['Vue', 'JavaScript', 'AWS'],
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      },
    ],
  },
  {
    id: 2,
    title: 'Especialista en Atención al Cliente por Chat',
    department: 'Soporte',
    applicants: 18,
    qualified: 8,
    status: 'active',
    location: 'Remoto',
    created: '2024-10-15',
    accessibility: 'Apto para Sordos',
    topCandidates: [
      {
        id: 3,
        name: 'Daniella Acosta',
        match: 88,
        experience: '3 Meses',
        skills: [
          'Atención al Cliente',
          'Comunicación Escrita',
          'Resolución de Problemas',
        ],
        photo:
          'https://i.pinimg.com/280x280_RS/f3/a3/e5/f3a3e583559f914ffcfd960628b0b74b.jpg',
      },
    ],
  },
];

const App: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const diversityStats = {
    currentEmployees: 15,
    employeesWithDisabilities: 2,
    requiredForQuota: 3,
    progress: (2 / 3) * 100,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700">
      {showOnboarding && (
        <OnboardingOverlay onClose={() => setShowOnboarding(false)} />
      )}
      {showCreateModal && (
        <CreateJobModal onClose={() => setShowCreateModal(false)} />
      )}

      <div className="max-w-7xl mx-auto min-h-screen flex">
        {/* Sidebar */}
        <div className="w-20 bg-white/10 backdrop-blur-xl flex flex-col items-center py-8 space-y-8">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-indigo-600" />
          </div>
          <nav className="flex-1 flex flex-col items-center space-y-6">
            <button className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors">
              <Briefcase className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 rounded-xl text-white/60 flex items-center justify-center hover:bg-white/20 transition-colors">
              <Users className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 rounded-xl text-white/60 flex items-center justify-center hover:bg-white/20 transition-colors">
              <Settings className="w-6 h-6" />
            </button>
          </nav>
          <button className="w-12 h-12 rounded-xl text-white/60 flex items-center justify-center hover:bg-white/20 transition-colors">
            <Bell className="w-6 h-6" />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Puestos de Trabajo
              </h1>
              <p className="text-white/80">
                Gestiona tus posiciones abiertas y candidatos
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowCreateModal(true)}
                className="flex items-center px-6 py-3 bg-white rounded-xl text-indigo-600 font-medium hover:bg-white/90 transition-colors"
              >
                <Plus className="w-5 h-5 mr-2" />
                Crear Posición
              </button>
              <button className="flex items-center px-6 py-3 bg-white/20 backdrop-blur-xl rounded-xl text-white font-medium hover:bg-white/30 transition-colors">
                <Bot className="w-5 h-5 mr-2" />
                Preguntar a Munay
              </button>
            </div>
          </div>

          {/* Diversity Stats */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                Diversidad Laboral
              </h2>
              <div className="flex items-center text-white/80">
                <TrendingUp className="w-5 h-5 mr-2" />
                Progreso hacia la cuota del 3%
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 mb-4">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-3xl font-bold text-white mb-1">
                  {diversityStats.employeesWithDisabilities}
                </div>
                <div className="text-white/60 text-sm">
                  Empleados con Discapacidad
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-3xl font-bold text-white mb-1">
                  {diversityStats.requiredForQuota}
                </div>
                <div className="text-white/60 text-sm">
                  Requeridos para Cuota
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-3xl font-bold text-white mb-1">
                  {diversityStats.currentEmployees}
                </div>
                <div className="text-white/60 text-sm">Total de Empleados</div>
              </div>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-white">
                    {Math.round(diversityStats.progress)}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded-full bg-white/10">
                <div
                  style={{ width: `${diversityStats.progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                ></div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Buscar posiciones..."
              className="w-full h-14 bg-white/10 backdrop-blur-xl rounded-2xl pl-14 pr-6 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-4 w-6 h-6 text-white/60" />
          </div>

          {/* Position Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPositions.map((position) => (
              <JobPositionCard key={position.id} position={position} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
