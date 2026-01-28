// src/components/templates/TemplatesView.jsx
// TODO: Port from redhammer-platform-v2.html lines 5670-5950

import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';

export default function TemplatesView() {
  const { savedTemplates, loadQuote, setIsTemplate } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEditTemplate = (template) => {
    loadQuote({ ...template, is_template: true });
    setIsTemplate(true);
  };

  const filteredTemplates = savedTemplates.filter(t =>
    (t.template_name || t.title || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Templates</h2>
          <p className="text-sm text-gray-500">{savedTemplates.length} template{savedTemplates.length !== 1 ? 's' : ''}</p>
        </div>
        <button className="px-4 py-2 bg-[#802629] text-white rounded-lg font-medium hover:bg-[#6a1f22]">
          + New Template
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search templates..."
            className="w-full max-w-sm px-3 py-2 border border-gray-200 rounded-lg text-sm"
          />
        </div>

        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-gray-600">Name</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-600">Description</th>
              <th className="text-right px-4 py-3 font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredTemplates.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-4 py-8 text-center text-gray-400">
                  No templates found
                </td>
              </tr>
            ) : (
              filteredTemplates.map(t => (
                <tr 
                  key={t.id} 
                  className="hover:bg-gray-50 cursor-pointer"
                  onDoubleClick={() => handleEditTemplate(t)}
                >
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {t.template_name || t.project_name || t.title || 'Untitled'}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{t.template_description || '-'}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => handleEditTemplate(t)}
                      className="text-blue-600 hover:text-blue-800 mr-3"
                    >
                      Edit
                    </button>
                    <button className="text-green-600 hover:text-green-800 mr-3">
                      Apply
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
