// src/App.jsx
import { useContext } from 'react';
import { AppContext, AppProvider } from './context/AppContext';
import Sidebar from './components/layout/Sidebar';
import Toast from './components/layout/Toast';
import SignIn from './components/auth/SignIn';
import HomeView from './components/home/HomeView';
import QuoteBuilderView from './components/quotes/QuoteBuilderView';
import QuotesView from './components/quotes/QuotesView';
import TemplatesView from './components/templates/TemplatesView';
import CustomersView from './components/customers/CustomersView';
import ToolsView from './components/tools/ToolsView';
import AdminView from './components/admin/AdminView';

function AppContent() {
  const { user, loading, view, sidebarPinned, toast } = useContext(AppContext);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <SignIn />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      
      <main className={`flex-1 overflow-auto pb-20 bg-gray-50 transition-all ${
        view === 'quote' ? 'lg:mr-[240px]' : ''
      } ${sidebarPinned ? 'lg:ml-[200px]' : ''}`}>
        <div className="p-4 sm:p-6">
          {view === 'home' && <HomeView />}
          {view === 'quote' && <QuoteBuilderView />}
          {view === 'quotes' && <QuotesView />}
          {view === 'templates' && <TemplatesView />}
          {view === 'customers' && <CustomersView />}
          {view === 'tools' && <ToolsView />}
          {view === 'admin' && <AdminView />}
        </div>
      </main>

      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
