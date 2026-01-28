// src/components/tools/ToolsView.jsx
// TODO: Port from redhammer-tools.html
// This will contain all the business development tools with sub-tabs

import { useState } from 'react';

const TOOL_TABS = [
  { key: 'overview', label: 'Overview' },
  { key: 'meeting', label: 'Intro Meeting' },
  { key: 'emails', label: 'NDA & Emails' },
  { key: 'assessment', label: 'Assessment' },
  { key: 'sow', label: 'SOW Prompts' },
  { key: 'rfi', label: 'RFI Generator' },
  { key: 'budget', label: 'Project Budget' },
  { key: 'philosophy', label: 'Sales Philosophy' },
];

export default function ToolsView() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-gray-800">Business Development Tools</h2>
        <p className="text-sm text-gray-500">Sales scripts, prompts, and resources</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-1 overflow-x-auto pb-2">
        {TOOL_TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.key
                ? 'bg-[#802629] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        {activeTab === 'overview' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Sales Process Overview</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>TODO:</strong> Port sales process overview content from redhammer-tools.html
              </p>
            </div>
          </div>
        )}

        {activeTab === 'meeting' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Introductory Meeting Script</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>TODO:</strong> Port introductory meeting script content
              </p>
            </div>
          </div>
        )}

        {activeTab === 'emails' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">NDA & Email Templates</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>TODO:</strong> Port email templates content
              </p>
            </div>
          </div>
        )}

        {activeTab === 'assessment' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Assessment Script</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>TODO:</strong> Port assessment script content
              </p>
            </div>
          </div>
        )}

        {activeTab === 'sow' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Scope of Work Prompts</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>TODO:</strong> Port SOW prompts with copy-to-clipboard functionality
              </p>
            </div>
          </div>
        )}

        {activeTab === 'rfi' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">RFI Generator</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>TODO:</strong> Port RFI generator content
              </p>
            </div>
          </div>
        )}

        {activeTab === 'budget' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Project Budget</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>TODO:</strong> Port project budget content
              </p>
            </div>
          </div>
        )}

        {activeTab === 'philosophy' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Sales Philosophy</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>TODO:</strong> Port sales philosophy content
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
