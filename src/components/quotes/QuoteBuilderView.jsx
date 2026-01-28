// src/components/quotes/QuoteBuilderView.jsx
// TODO: Port from redhammer-platform-v2.html lines 3952-5153
// This is the main quote builder with pricing cards, task rows, etc.

import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function QuoteBuilderView() {
  const { isTemplate, quoteCustomerName, quoteProjectName } = useContext(AppContext);
  
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h1 className="text-xl font-bold text-gray-800">
          {isTemplate ? 'Template Builder' : 'Quote Builder'}
        </h1>
        <p className="text-gray-500">
          {quoteCustomerName} - {quoteProjectName}
        </p>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-yellow-800">
          <strong>TODO:</strong> Port QuoteBuilderView component from original file.
          This includes:
        </p>
        <ul className="list-disc ml-6 mt-2 text-yellow-700 text-sm">
          <li>Header toolbar with customer, project, date, status, version</li>
          <li>Client variables section</li>
          <li>Level pricing summary cards</li>
          <li>Module sections with task rows</li>
          <li>Flex tasks</li>
          <li>Report modal</li>
        </ul>
      </div>
    </div>
  );
}
