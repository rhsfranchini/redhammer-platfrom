// src/components/customers/CustomersView.jsx
// TODO: Port from redhammer-platform-v2.html lines 4806-5153

import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';

export default function CustomersView() {
  const { customers } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customers.filter(c =>
    (c.name || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Customers</h2>
          <p className="text-sm text-gray-500">{customers.length} customer{customers.length !== 1 ? 's' : ''}</p>
        </div>
        <button className="px-4 py-2 bg-[#802629] text-white rounded-lg font-medium hover:bg-[#6a1f22]">
          + Add Customer
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search customers..."
            className="w-full max-w-sm px-3 py-2 border border-gray-200 rounded-lg text-sm"
          />
        </div>

        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-gray-600">Name</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-600">Contact</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-600">Industry</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-600">Software</th>
              <th className="text-right px-4 py-3 font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredCustomers.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-gray-400">
                  No customers found
                </td>
              </tr>
            ) : (
              filteredCustomers.map(c => (
                <tr key={c.id} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-4 py-3 font-medium text-gray-800">{c.name}</td>
                  <td className="px-4 py-3 text-gray-600">
                    {c.contacts?.[0]?.name || '-'}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{c.industry || '-'}</td>
                  <td className="px-4 py-3 text-gray-600">{c.software || '-'}</td>
                  <td className="px-4 py-3 text-right">
                    <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                    <button className="text-red-600 hover:text-red-800">Delete</button>
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
