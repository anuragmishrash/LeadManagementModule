import React from 'react';
import { Lead } from '../types/Lead';

interface LeadsListProps {
  leads: Lead[];
  onDelete: (id: string) => Promise<void>;
  isDeleting: string | null;
}

const LeadsList: React.FC<LeadsListProps> = ({ leads, onDelete, isDeleting }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (leads.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Leads List</h2>
        <div className="text-center py-8">
          <p className="text-gray-500">No leads found. Submit the form above to add your first lead!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        Leads List ({leads.length})
      </h2>
      
      <div className="grid gap-4">
        {leads.map((lead) => (
          <div
            key={lead._id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Basic Info */}
                <div>
                  <h3 className="font-semibold text-gray-900">{lead.name}</h3>
                  <p className="text-sm text-gray-600">{lead.email}</p>
                  {lead.phone && (
                    <p className="text-sm text-gray-600">{lead.phone}</p>
                  )}
                </div>

                {/* Company & Source */}
                <div>
                  {lead.company && (
                    <p className="text-sm">
                      <span className="font-medium">Company:</span> {lead.company}
                    </p>
                  )}
                  <p className="text-sm">
                    <span className="font-medium">Source:</span>{' '}
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {lead.source}
                    </span>
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Marketing:</span>{' '}
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      lead.optIn 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {lead.optIn ? 'Opted In' : 'Opted Out'}
                    </span>
                  </p>
                </div>

                {/* Notes & Date */}
                <div>
                  {lead.notes && (
                    <p className="text-sm mb-2">
                      <span className="font-medium">Notes:</span> {lead.notes}
                    </p>
                  )}
                  {lead.createdAt && (
                    <p className="text-xs text-gray-500">
                      Created: {formatDate(lead.createdAt)}
                    </p>
                  )}
                </div>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => lead._id && onDelete(lead._id)}
                disabled={isDeleting === lead._id}
                className={`ml-4 px-3 py-1 rounded text-sm font-medium transition-colors ${
                  isDeleting === lead._id
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500'
                }`}
              >
                {isDeleting === lead._id ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadsList;