// src/components/home/HomeView.jsx
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function HomeView() {
  const { user, setView, newQuote, savedQuotes, savedTemplates, customers } = useContext(AppContext);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome back{user?.email ? `, ${user.email.split('@')[0]}` : ''}!
        </h1>
        <p className="text-gray-500">Here's what's happening with your quotes</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={newQuote}
          className="bg-[#802629] text-white rounded-xl p-6 text-left hover:bg-[#6a1f22] transition-colors"
        >
          <span className="text-3xl mb-2 block">📝</span>
          <span className="font-semibold">New Quote</span>
          <p className="text-sm opacity-80 mt-1">Start a new maintenance quote</p>
        </button>

        <button
          onClick={() => setView('templates')}
          className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:shadow-md transition-shadow"
        >
          <span className="text-3xl mb-2 block">📋</span>
          <span className="font-semibold text-gray-800">Templates</span>
          <p className="text-sm text-gray-500 mt-1">{savedTemplates.length} templates available</p>
        </button>

        <button
          onClick={() => setView('customers')}
          className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:shadow-md transition-shadow"
        >
          <span className="text-3xl mb-2 block">👥</span>
          <span className="font-semibold text-gray-800">Customers</span>
          <p className="text-sm text-gray-500 mt-1">{customers.length} customers</p>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Total Quotes</p>
          <p className="text-2xl font-bold text-gray-800">{savedQuotes.length}</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Draft</p>
          <p className="text-2xl font-bold text-yellow-600">
            {savedQuotes.filter(q => q.status === 'Draft').length}
          </p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Final</p>
          <p className="text-2xl font-bold text-green-600">
            {savedQuotes.filter(q => q.status === 'Final').length}
          </p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Customers</p>
          <p className="text-2xl font-bold text-blue-600">{customers.length}</p>
        </div>
      </div>

      {/* Recent Quotes */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="font-semibold text-gray-800">Recent Quotes</h2>
          <button
            onClick={() => setView('quotes')}
            className="text-sm text-[#802629] hover:underline"
          >
            View All →
          </button>
        </div>
        <div className="divide-y divide-gray-100">
          {savedQuotes.slice(0, 5).map(q => (
            <div key={q.id} className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
              <div className="font-medium text-gray-800">{q.customer_name} - {q.project_name}</div>
              <div className="text-sm text-gray-500">{q.status} • v{q.version}</div>
            </div>
          ))}
          {savedQuotes.length === 0 && (
            <div className="px-4 py-8 text-center text-gray-400">
              No quotes yet. Create your first quote!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
