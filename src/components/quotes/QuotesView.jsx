// src/components/quotes/QuotesView.jsx
// TODO: Port from redhammer-platform-v2.html lines 5155-5450
// This shows the list of saved quotes with search, sort, actions

import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';

export default function QuotesView() {
  const { savedQuotes, loadQuote, newQuote } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredQuotes = savedQuotes.filter(q =>
    (q.customer_name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (q.project_name || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Quotes</h2>
          <p className="text-sm text-gray-500">{savedQuotes.length} quote{savedQuotes.length !== 1 ? 's' : ''}</p>
        </div>
        <button
          onClick={newQuote}
          className="px-4 py-2 bg-[#802629] text-white rounded-lg font-medium hover:bg-[#6a1f22]"
        >
          + New Quote
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search quotes..."
            className="w-full max-w-sm px-3 py-2 border border-gray-200 rounded-lg text-sm"
          />
        </div>

        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-gray-600">Customer</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-600">Project</th>
              <th className="text-center px-4 py-3 font-semibold text-gray-600">Status</th>
              <th className="text-center px-4 py-3 font-semibold text-gray-600">Version</th>
              <th className="text-right px-4 py-3 font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredQuotes.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-gray-400">
                  No quotes found
                </td>
              </tr>
            ) : (
              filteredQuotes.map(q => (
                <tr 
                  key={q.id} 
                  className="hover:bg-gray-50 cursor-pointer"
                  onDoubleClick={() => loadQuote(q)}
                >
                  <td className="px-4 py-3 font-medium text-gray-800">{q.customer_name || '-'}</td>
                  <td className="px-4 py-3 text-gray-600">{q.project_name || '-'}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                      q.status === 'Final' ? 'bg-green-100 text-green-800' :
                      q.status === 'Change Order' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {q.status || 'Draft'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600">v{q.version || 1}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => loadQuote(q)}
                      className="text-blue-600 hover:text-blue-800 mr-3"
                    >
                      Edit
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
