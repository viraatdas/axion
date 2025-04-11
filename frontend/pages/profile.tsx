import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

type HistoryItem = {
  id: string;
  date: string;
  inputType: string;
  title: string;
  status: 'verified' | 'error';
};

export default function Profile() {
  const [activeTab, setActiveTab] = useState<'history' | 'saved' | 'settings'>('history');
  
  // Mock history data
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([
    {
      id: 'proof-1',
      date: '2025-04-10',
      inputType: 'natural',
      title: 'Constant force motion derivation',
      status: 'verified',
    },
    {
      id: 'proof-2',
      date: '2025-04-09',
      inputType: 'latex',
      title: 'Conservation of momentum proof',
      status: 'verified',
    },
    {
      id: 'proof-3',
      date: '2025-04-08',
      inputType: 'lean',
      title: 'Vector calculus theorem',
      status: 'error',
    },
  ]);
  
  // Mock saved items (same structure as history for now)
  const [savedItems, setSavedItems] = useState<HistoryItem[]>([
    {
      id: 'proof-1',
      date: '2025-04-10',
      inputType: 'natural',
      title: 'Constant force motion derivation',
      status: 'verified',
    },
  ]);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Profile - Axion</title>
        <meta name="description" content="Your Axion profile and history" />
      </Head>
      
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Your account details and proof history</p>
          </div>
          
          {/* Profile Summary */}
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-xl">
                U
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-900">User Name</h2>
                <p className="text-sm text-gray-500">user@example.com</p>
              </div>
              <div className="ml-auto">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                  Free Tier
                </span>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="border-t border-gray-200">
            <div className="px-4 sm:px-6">
              <nav className="-mb-px flex space-x-8">
                <button
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'history'
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('history')}
                >
                  History
                </button>
                <button
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'saved'
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('saved')}
                >
                  Saved Proofs
                </button>
                <button
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'settings'
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('settings')}
                >
                  Settings
                </button>
              </nav>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="px-4 py-5 sm:px-6">
            {activeTab === 'history' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Proof History</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Title
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Input Type
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {historyItems.map((item) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.title}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.inputType}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {item.status === 'verified' ? (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Verified ✅
                              </span>
                            ) : (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                Error ❌
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button className="text-primary-600 hover:text-primary-900 mr-2">
                              View
                            </button>
                            <button className="text-primary-600 hover:text-primary-900">
                              Save
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            {activeTab === 'saved' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Saved Proofs</h3>
                {savedItems.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Title
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Input Type
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {savedItems.map((item) => (
                          <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {item.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {item.title}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {item.inputType}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {item.status === 'verified' ? (
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  Verified ✅
                                </span>
                              ) : (
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                  Error ❌
                                </span>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <button className="text-primary-600 hover:text-primary-900 mr-2">
                                View
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                Remove
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <p className="text-gray-500">No saved proofs yet</p>
                    <button className="mt-4 btn btn-primary">
                      Go to Home
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Account Settings</h3>
                
                <div className="space-y-6">
                  {/* Subscription Section */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-md font-medium text-gray-900 mb-2">Subscription</h4>
                    <p className="text-sm text-gray-500 mb-4">You are currently on the <span className="font-medium">Free Tier</span></p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4 bg-white">
                        <h5 className="text-lg font-medium text-gray-900">Free</h5>
                        <p className="text-2xl font-bold mt-2">$0<span className="text-sm font-normal text-gray-500">/month</span></p>
                        <ul className="mt-4 space-y-2 text-sm text-gray-500">
                          <li>5 requests/day</li>
                          <li>No API access</li>
                          <li>Basic features</li>
                        </ul>
                        <button className="mt-4 w-full btn btn-outline" disabled>
                          Current Plan
                        </button>
                      </div>
                      
                      <div className="border border-primary-200 rounded-lg p-4 bg-white ring-2 ring-primary-500">
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white text-xs px-2 py-0.5 rounded-full">
                          Popular
                        </div>
                        <h5 className="text-lg font-medium text-gray-900">Pro</h5>
                        <p className="text-2xl font-bold mt-2">$20<span className="text-sm font-normal text-gray-500">/month</span></p>
                        <ul className="mt-4 space-y-2 text-sm text-gray-500">
                          <li>200 proofs/month</li>
                          <li>Export options</li>
                          <li>Saved work</li>
                        </ul>
                        <button className="mt-4 w-full btn btn-primary">
                          Upgrade
                        </button>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4 bg-white">
                        <h5 className="text-lg font-medium text-gray-900">Team</h5>
                        <p className="text-2xl font-bold mt-2">$99<span className="text-sm font-normal text-gray-500">/month</span></p>
                        <ul className="mt-4 space-y-2 text-sm text-gray-500">
                          <li>Shared history</li>
                          <li>Private API</li>
                          <li>Batch uploads</li>
                        </ul>
                        <button className="mt-4 w-full btn btn-outline">
                          Upgrade
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* API Keys Section */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-md font-medium text-gray-900 mb-2">API Keys</h4>
                    <p className="text-sm text-gray-500 mb-4">API access is available on Pro and Team plans</p>
                    
                    <button className="btn btn-outline" disabled>
                      Generate API Key
                    </button>
                  </div>
                  
                  {/* Account Section */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-md font-medium text-gray-900 mb-2">Account</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="mt-1 input"
                          value="user@example.com"
                          readOnly
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="mt-1 input"
                          defaultValue="User Name"
                        />
                      </div>
                      
                      <div className="flex justify-end">
                        <button className="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
