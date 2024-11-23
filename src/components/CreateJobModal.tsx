import React, { useState } from 'react';
import {
  X,
  Bot,
  Users,
  CheckCircle,
  BrainCircuit,
  MessageSquare,
} from 'lucide-react';

interface Props {
  onClose: () => void;
}

const CreateJobModal: React.FC<Props> = ({ onClose }) => {
  const [useAI, setUseAI] = useState(false);
  const [step, setStep] = useState(1);
  const [jobGenerated, setJobGenerated] = useState(false);

  const jobOverview = {
    title: 'Especialista en Atención al Cliente por Chat',
    department: 'Soporte al Cliente',
    location: 'Remoto',
    salary: '$1200 - $1800',
    type: 'Tiempo Completo',
    accessibility: 'Apto para Sordos',
    requirements: [
      'Excelentes habilidades de comunicación escrita',
      'Experiencia en atención al cliente por chat',
      'Capacidad de resolución de problemas',
      'Habilidad para realizar múltiples tareas',
      'Conocimientos básicos de soporte técnico',
    ],
    munayInsights: [
      'Este puesto es particularmente adecuado para personas sordas ya que se centra en la comunicación escrita',
      'El trabajo remoto proporciona beneficios adicionales de accesibilidad',
      'El soporte basado en chat permite una comunicación efectiva sin requisitos de audio',
    ],
    recommendedTests: [
      {
        name: 'Evaluación de Personalidad para Servicio al Cliente',
        type: 'Apto para Sordos',
        duration: '30 minutos',
        description:
          'Evalúa empatía, paciencia y capacidad de resolución de problemas',
      },
      {
        name: 'Habilidades de Comunicación Escrita',
        type: 'Apto para Sordos',
        duration: '45 minutos',
        description: 'Prueba de gramática, claridad y escritura profesional',
      },
      {
        name: 'Simulación de Soporte por Chat',
        type: 'Apto para Sordos',
        duration: '60 minutos',
        description:
          'Escenarios reales manejando múltiples conversaciones por chat',
      },
    ],
    recommendedCandidates: [
      {
        name: 'Daniela Acosta',
        match: 88,
        experience: '3 meses en soporte por chat',
        skills: [
          'Comunicación Escrita',
          'Atención al Cliente',
          'Resolución de Problemas',
        ],
        photo:
          'https://i.pinimg.com/280x280_RS/f3/a3/e5/f3a3e583559f914ffcfd960628b0b74b.jpg',
        accessibility: 'Sorda',
      },
      {
        name: 'Alex Rivera',
        match: 83,
        experience: '1 mes en atención al cliente digital',
        skills: [
          'Soporte por Chat',
          'Resolución de Conflictos',
          'Soporte Técnico',
        ],
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
        accessibility: 'Sordo',
      },
    ],
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="mb-8">
              <button
                onClick={() => {
                  setUseAI(true);
                  setJobGenerated(true);
                }}
                className={`w-full p-4 rounded-xl border-2 transition-colors ${
                  useAI
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-600'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-gray-900">
                      Deja que Munay cree esta posición
                    </h3>
                    <p className="text-sm text-gray-500">
                      Describe el rol en texto simple, y generaré todo por ti
                    </p>
                  </div>
                </div>
              </button>
            </div>

            {jobGenerated ? (
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-center space-x-2 text-green-700 mb-2">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">
                      Posición Generada Exitosamente
                    </span>
                  </div>
                  <p className="text-green-600 text-sm">
                    Munay ha creado una posición apta para personas sordas
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {jobOverview.title}
                      </h3>
                      <p className="text-gray-500">{jobOverview.department}</p>
                    </div>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {jobOverview.accessibility}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-gray-600">
                      <span className="font-medium">Ubicación:</span>{' '}
                      {jobOverview.location}
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Salario:</span>{' '}
                      {jobOverview.salary}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Requisitos</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {jobOverview.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-indigo-50 rounded-xl p-4">
                    <h4 className="font-medium text-indigo-900 flex items-center mb-2">
                      <BrainCircuit className="w-4 h-4 mr-2" />
                      Perspectivas de Munay
                    </h4>
                    <ul className="space-y-2">
                      {jobOverview.munayInsights.map((insight, index) => (
                        <li
                          key={index}
                          className="text-sm text-indigo-700 flex items-start"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 mr-2 flex-shrink-0" />
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors"
                >
                  Siguiente: Revisar Plan de Evaluación
                </button>
              </div>
            ) : null}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Plan de Evaluación Recomendado
            </h3>
            <div className="space-y-4">
              {jobOverview.recommendedTests.map((test, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">{test.name}</h4>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      {test.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {test.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    Duración: {test.duration}
                  </p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setStep(3)}
              className="w-full py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors"
            >
              Siguiente: Revisar y Publicar
            </button>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {jobOverview.title}
                  </h3>
                  <p className="text-gray-500">{jobOverview.department}</p>
                </div>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  {jobOverview.accessibility}
                </span>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">
                  Ruta de Evaluación creada por Munay!
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {jobOverview.recommendedTests.map((test, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl p-4"
                    >
                      <h5 className="font-medium text-gray-900 mb-1">
                        {test.name}
                      </h5>
                      <p className="text-sm text-gray-600">{test.duration}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">
                  Candidatos Recomendados
                </h4>
                <div className="space-y-3">
                  {jobOverview.recommendedCandidates.map((candidate, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 rounded-xl p-4"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={candidate.photo}
                          alt={candidate.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h5 className="font-medium text-gray-900">
                            {candidate.name}
                          </h5>
                          <p className="text-sm text-gray-500">
                            {candidate.experience}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium text-green-600">
                          {candidate.match}% Coincidencia
                        </span>
                        <button className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors">
                          Notificar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors"
            >
              Publicar Posición
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Crear Nueva Posición
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-6">{renderStep()}</div>
      </div>
    </div>
  );
};

export default CreateJobModal;
