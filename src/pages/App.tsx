import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import EnhancedLeadsList from '../components/EnhancedLeadsList';
import AddLeadModal from '../components/AddLeadModal';
import SuccessMessage from '../components/SuccessMessage';
import Settings from '../components/Settings';
import { Lead, LeadFormData } from '../types/Lead';
import { leadApi } from '../services/api';

const App = () => {
  const [activeSection, setActiveSection] = useState('leads');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // Fetch leads on component mount
  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const fetchedLeads = await leadApi.getLeads();
      setLeads(fetchedLeads);
    } catch (error) {
      console.error('Error fetching leads:', error);
      setError('Failed to fetch leads. Please make sure the server is running.');
    }
  };

  const handleSubmitLead = async (formData: LeadFormData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const newLead = await leadApi.createLead(formData);
      
      // Optimistic update - add to the beginning of the list
      setLeads(prevLeads => [newLead, ...prevLeads]);
      setSuccessMessage('Lead added successfully!');
      setShowAddModal(false);
    } catch (error) {
      console.error('Error creating lead:', error);
      setError('Failed to add lead. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteLead = async (id: string) => {
    setIsDeleting(id);
    setError(null);
    
    try {
      await leadApi.deleteLead(id);
      setLeads(prevLeads => prevLeads.filter(lead => lead._id !== id));
      setSuccessMessage('Lead deleted successfully!');
    } catch (error) {
      console.error('Error deleting lead:', error);
      setError('Failed to delete lead. Please try again.');
    } finally {
      setIsDeleting(null);
    }
  };

  const renderDashboard = () => (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Overview of your lead management system</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Leads</p>
              <p className="text-2xl font-bold text-gray-900">{leads.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Qualified</p>
              <p className="text-2xl font-bold text-gray-900">{leads.filter(l => l.status === 'Qualified').length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Converted</p>
              <p className="text-2xl font-bold text-gray-900">{leads.filter(l => l.status === 'Converted').length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Follow-ups</p>
              <p className="text-2xl font-bold text-gray-900">{leads.filter(l => l.status === 'Follow-Up').length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLeads = () => (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leads Management</h1>
          <p className="text-gray-600">Manage and track your leads</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Lead
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <div className="flex items-center">
            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        </div>
      )}

      <EnhancedLeadsList 
        leads={leads} 
        onDelete={handleDeleteLead}
        isDeleting={isDeleting}
      />
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return renderDashboard();
      case 'leads':
        return renderLeads();
      case 'follow-ups':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Follow-Ups</h1>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <p className="text-gray-500">Follow-ups feature coming soon...</p>
            </div>
          </div>
        );
      case 'sales-activity':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Sales Activity</h1>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <p className="text-gray-500">Sales activity tracking coming soon...</p>
            </div>
          </div>
        );
      case 'products':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Products</h1>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <p className="text-gray-500">Product management coming soon...</p>
            </div>
          </div>
        );
      case 'notifications':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Notifications</h1>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <p className="text-gray-500">Notification center coming soon...</p>
            </div>
          </div>
        );
      case 'settings':
        return <Settings />;
      default:
        return renderLeads();
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {renderContent()}
      </div>

      {/* Add Lead Modal */}
      <AddLeadModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={handleSubmitLead}
        isSubmitting={isSubmitting}
      />

      {/* Success Message */}
      {successMessage && (
        <SuccessMessage
          message={successMessage}
          onClose={() => setSuccessMessage(null)}
        />
      )}
    </div>
  );
};

export default App;