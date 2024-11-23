import React, { useState } from 'react';
import { X, ArrowRight, Bot, Users, Bell } from 'lucide-react';

interface Props {
  onClose: () => void;
}

const OnboardingOverlay: React.FC<Props> = ({ onClose }) => {
  const [step, setStep] = useState(1);

  const steps = [
    {
      title: 'Welcome to Your Job Management Dashboard',
      description:
        'This is your central hub for managing job positions and finding the perfect candidates.',
      icon: Users,
    },
    {
      title: 'Meet Munay, Your AI Assistant',
      description:
        'Let Munay help you create job positions and evaluation routes with just a simple description.',
      icon: Bot,
    },
    {
      title: 'Smart Candidate Matching',
      description:
        'Our AI automatically ranks candidates based on their skills and experience, helping you find the best fit.',
      icon: Bell,
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-2xl">
        <div className="p-6 flex justify-end">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="px-12 pb-12">
          <div className="flex justify-center mb-8">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full mx-2 ${
                  index + 1 === step ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              {React.createElement(steps[step - 1].icon, {
                className: 'w-10 h-10 text-indigo-600',
              })}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {steps[step - 1].title}
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              {steps[step - 1].description}
            </p>
          </div>

          <div className="flex justify-center">
            {step < steps.length ? (
              <button
                onClick={() => setStep(step + 1)}
                className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors"
              >
                Next
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            ) : (
              <button
                onClick={onClose}
                className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingOverlay;