// src/components/layout/Sidebar.jsx
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

// Icons
const HomeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const QuoteIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);

const TemplateIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <line x1="3" y1="9" x2="21" y2="9"/>
    <line x1="9" y1="21" x2="9" y2="9"/>
  </svg>
);

const CustomerIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const ToolsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const AdminIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const PinIcon = ({ pinned }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={pinned ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="17" x2="12" y2="22"/>
    <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24z"/>
  </svg>
);

export default function Sidebar() {
  const { view, setView, sidebarPinned, setSidebarPinned, user } = useContext(AppContext);

  const navItems = [
    { key: 'home', label: 'Home', icon: HomeIcon },
    { key: 'quotes', label: 'Quotes', icon: QuoteIcon },
    { key: 'templates', label: 'Templates', icon: TemplateIcon },
    { key: 'customers', label: 'Customers', icon: CustomerIcon },
    { key: 'tools', label: 'Tools', icon: ToolsIcon },
    { key: 'admin', label: 'Admin', icon: AdminIcon },
  ];

  return (
    <aside className={`fixed left-0 top-0 h-screen bg-[#333] text-white transition-all z-40 ${
      sidebarPinned ? 'w-[200px]' : 'w-[60px]'
    } hidden lg:block`}>
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-white/10">
        {sidebarPinned ? (
          <img src="/redhammer-logo.png" alt="RedHammer" className="h-10" />
        ) : (
          <span className="text-xl font-bold text-[#802629]">RH</span>
        )}
      </div>

      {/* Navigation */}
      <nav className="p-2 space-y-1">
        {navItems.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setView(key)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              view === key 
                ? 'bg-[#802629] text-white' 
                : 'text-gray-300 hover:bg-white/10'
            }`}
          >
            <Icon />
            {sidebarPinned && <span className="text-sm font-medium">{label}</span>}
          </button>
        ))}
      </nav>

      {/* Pin toggle */}
      <div className="absolute bottom-4 left-0 right-0 px-2">
        <button
          onClick={() => setSidebarPinned(!sidebarPinned)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 text-gray-400 hover:text-white transition-colors"
          title={sidebarPinned ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          <PinIcon pinned={sidebarPinned} />
          {sidebarPinned && <span className="text-xs">Pin sidebar</span>}
        </button>
      </div>
    </aside>
  );
}
