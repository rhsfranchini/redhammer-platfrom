// src/components/admin/AdminView.jsx
// TODO: Port from redhammer-platform-v2.html lines 2345-3950

import { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { supabase } from '../../utils/supabase';

const ADMIN_TABS = [
  { key: 'profile', label: 'My Profile' },
  { key: 'users', label: 'Users' },
  { key: 'roles', label: 'Roles & Rates' },
  { key: 'tasks', label: 'Tasks' },
  { key: 'variables', label: 'Variables' },
  { key: 'settings', label: 'Settings' },
];

export default function AdminView() {
  const [activeTab, setActiveTab] = useState('profile');
  const { user, roles } = useContext(AppContext);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Admin</h2>
          <p className="text-sm text-gray-500">Manage your account and settings</p>
        </div>
        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
        >
          Sign Out
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-1 overflow-x-auto pb-2">
        {ADMIN_TABS.map(tab => (
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
        {activeTab === 'profile' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">My Profile</h3>
            <div className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  value={user?.email || ''}
                  disabled
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50"
                />
              </div>
              <p className="text-sm text-gray-500">
                TODO: Add first name, last name, phone, timezone fields
              </p>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Team Members</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>TODO:</strong> Port team member management (invite, roles, deactivate)
              </p>
            </div>
          </div>
        )}

        {activeTab === 'roles' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Roles & Hourly Rates</h3>
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2">Code</th>
                  <th className="text-left px-4 py-2">Name</th>
                  <th className="text-right px-4 py-2">Cost Rate</th>
                  <th className="text-center px-4 py-2">Color</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {Object.entries(roles).map(([code, role]) => (
                  <tr key={code}>
                    <td className="px-4 py-2 font-mono">{code}</td>
                    <td className="px-4 py-2">{role.name}</td>
                    <td className="px-4 py-2 text-right">${role.cost_rate.toFixed(2)}</td>
                    <td className="px-4 py-2 text-center">
                      <span 
                        className="inline-block w-6 h-6 rounded"
                        style={{ backgroundColor: role.color }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'tasks' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Task Configuration</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>TODO:</strong> Port task editor with formulas, role allocation, HammerTime mapping
              </p>
            </div>
          </div>
        )}

        {activeTab === 'variables' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Variables</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>TODO:</strong> Port variable tables (software, staff quality, annual revenue, etc.)
              </p>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Settings</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>TODO:</strong> Port settings (level names, industries, etc.)
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
