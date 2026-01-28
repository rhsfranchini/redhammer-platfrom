// src/context/AppContext.jsx
import { createContext, useState, useEffect, useCallback } from 'react';
import { supabase, QuoteStorage, CustomerStorage, AuditLog } from '../utils/supabase';
import { DEFAULT_ROLES, DEFAULT_SECTIONS, DEFAULT_INDUSTRIES } from '../data/defaultRoles';
import { DEFAULT_TASKS } from '../data/defaultTasks';
import { DEFAULT_VARIABLES, DEFAULT_LEVELS } from '../data/defaultVariables';
import { DEFAULT_HAMMERTIME_TASKS } from '../data/hammerTimeTasks';

export const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Auth state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Navigation state
  const [view, setView] = useState('home');
  const [sidebarPinned, setSidebarPinned] = useState(true);
  
  // Toast state
  const [toast, setToast] = useState(null);
  
  // Admin data
  const [roles, setRoles] = useState(DEFAULT_ROLES);
  const [tasks, setTasks] = useState(DEFAULT_TASKS);
  const [sections, setSections] = useState(DEFAULT_SECTIONS);
  const [variables, setVariables] = useState(DEFAULT_VARIABLES);
  const [levels, setLevels] = useState(DEFAULT_LEVELS);
  const [settings, setSettings] = useState({});
  const [industries, setIndustries] = useState(DEFAULT_INDUSTRIES);
  const [adminHasChanges, setAdminHasChanges] = useState(false);
  
  // Quote state
  const [isTemplate, setIsTemplate] = useState(false);
  const [currentQuoteId, setCurrentQuoteId] = useState(null);
  const [quoteGlobals, setQuoteGlobals] = useState({
    software: 'Quickbooks Online',
    staff_quality: 'No Skills/Good Attitude',
    annual_revenue: '$5M - $10M',
    payroll_frequency: 'Weekly',
    concurrent_jobs: 10,
    employees: 50
  });
  const [quoteMargins, setQuoteMargins] = useState({ 1: 100, 2: 100, 3: 100 });
  const [quoteBoxInputs, setQuoteBoxInputs] = useState({});
  const [flexTasks, setFlexTasks] = useState({});
  const [quoteVisibleLevels, setQuoteVisibleLevels] = useState([1, 2, 3]);
  const [quoteExpandedTasks, setQuoteExpandedTasks] = useState({});
  const [quoteActiveSection, setQuoteActiveSection] = useState('ap');
  const [quoteCustomerName, setQuoteCustomerName] = useState('');
  const [quoteProjectName, setQuoteProjectName] = useState('');
  const [quoteDate, setQuoteDate] = useState(new Date().toISOString().split('T')[0]);
  const [quoteStatus, setQuoteStatus] = useState('Draft');
  const [quoteVersion, setQuoteVersion] = useState(1);
  const [quoteVersionHistory, setQuoteVersionHistory] = useState([]);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [savingQuote, setSavingQuote] = useState(false);
  const [showVersionDropdown, setShowVersionDropdown] = useState(false);
  const [taskComments, setTaskComments] = useState({});
  const [validationErrors, setValidationErrors] = useState({});
  const [showCustomerSelect, setShowCustomerSelect] = useState(false);
  
  // Data from Supabase
  const [customers, setCustomers] = useState([]);
  const [savedQuotes, setSavedQuotes] = useState([]);
  const [savedTemplates, setSavedTemplates] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [auditLog, setAuditLog] = useState([]);

  // Auth listener
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
      setLoading(false);
    });
    
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Load user data when authenticated
  useEffect(() => {
    if (user) {
      loadUserData(user.id);
    }
  }, [user]);

  const loadUserData = async (userId) => {
    // Load quotes
    const { data: quotes } = await QuoteStorage.getQuotes(userId);
    setSavedQuotes(quotes || []);
    
    // Load templates
    const { data: templates } = await QuoteStorage.getTemplates(userId);
    setSavedTemplates(templates || []);
    
    // Load customers
    const { data: custData } = await CustomerStorage.getCustomers(userId);
    setCustomers(custData || []);
  };

  // Audit logging
  const logAudit = useCallback(async (action, entityType, entityId, oldValue, newValue, description) => {
    if (!user) return;
    await AuditLog.log(user.id, action, entityType, entityId, oldValue, newValue, description);
  }, [user]);

  // Show toast notification
  const showToast = useCallback((message, type = 'info', duration = 3000) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), duration);
  }, []);

  // Quote functions
  const newQuote = useCallback(() => {
    setCurrentQuoteId(null);
    setQuoteCustomerName('');
    setQuoteProjectName('');
    setQuoteDate(new Date().toISOString().split('T')[0]);
    setQuoteStatus('Draft');
    setQuoteVersion(1);
    setQuoteVersionHistory([]);
    setQuoteGlobals({
      software: 'Quickbooks Online',
      staff_quality: 'No Skills/Good Attitude',
      annual_revenue: '$5M - $10M',
      payroll_frequency: 'Weekly',
      concurrent_jobs: 10,
      employees: 50
    });
    setQuoteMargins({ 1: 100, 2: 100, 3: 100 });
    setQuoteBoxInputs({});
    setFlexTasks({});
    setQuoteVisibleLevels([1, 2, 3]);
    setTaskComments({});
    setIsTemplate(false);
    setHasUnsavedChanges(false);
    setView('quote');
  }, []);

  const loadQuote = useCallback((quote) => {
    setCurrentQuoteId(quote.id);
    setQuoteCustomerName(quote.customer_name || '');
    setQuoteProjectName(quote.project_name || quote.template_name || '');
    setQuoteGlobals(quote.globals || {});
    setQuoteMargins(quote.margins || { 1: 100, 2: 100, 3: 100 });
    setQuoteBoxInputs(quote.box_inputs || {});
    setFlexTasks(quote.flex_tasks || {});
    setQuoteVisibleLevels(quote.visible_levels || [1, 2, 3]);
    setQuoteStatus(quote.status || 'Draft');
    setQuoteVersion(quote.version || 1);
    setIsTemplate(quote.is_template || false);
    setHasUnsavedChanges(false);
    setView('quote');
  }, []);

  const closeQuote = useCallback(() => {
    setView(isTemplate ? 'templates' : 'quotes');
  }, [isTemplate]);

  const value = {
    // Auth
    user,
    loading,
    
    // Navigation
    view,
    setView,
    sidebarPinned,
    setSidebarPinned,
    
    // Toast
    toast,
    showToast,
    
    // Admin data
    roles,
    setRoles,
    tasks,
    setTasks,
    sections,
    setSections,
    variables,
    setVariables,
    levels,
    setLevels,
    settings,
    setSettings,
    industries,
    setIndustries,
    adminHasChanges,
    setAdminHasChanges,
    
    // Quote state
    isTemplate,
    setIsTemplate,
    currentQuoteId,
    setCurrentQuoteId,
    quoteGlobals,
    setQuoteGlobals,
    quoteMargins,
    setQuoteMargins,
    quoteBoxInputs,
    setQuoteBoxInputs,
    flexTasks,
    setFlexTasks,
    quoteVisibleLevels,
    setQuoteVisibleLevels,
    quoteExpandedTasks,
    setQuoteExpandedTasks,
    quoteActiveSection,
    setQuoteActiveSection,
    quoteCustomerName,
    setQuoteCustomerName,
    quoteProjectName,
    setQuoteProjectName,
    quoteDate,
    setQuoteDate,
    quoteStatus,
    setQuoteStatus,
    quoteVersion,
    setQuoteVersion,
    quoteVersionHistory,
    setQuoteVersionHistory,
    hasUnsavedChanges,
    setHasUnsavedChanges,
    savingQuote,
    setSavingQuote,
    showVersionDropdown,
    setShowVersionDropdown,
    taskComments,
    setTaskComments,
    validationErrors,
    setValidationErrors,
    showCustomerSelect,
    setShowCustomerSelect,
    
    // Data
    customers,
    setCustomers,
    savedQuotes,
    setSavedQuotes,
    savedTemplates,
    setSavedTemplates,
    teamMembers,
    setTeamMembers,
    auditLog,
    setAuditLog,
    
    // Functions
    logAudit,
    newQuote,
    loadQuote,
    closeQuote,
    loadUserData,
    
    // Constants
    DEFAULT_HAMMERTIME_TASKS
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
