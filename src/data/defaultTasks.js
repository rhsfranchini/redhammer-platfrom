// src/data/defaultTasks.js
export 
const DEFAULT_TASKS=[
  // ============================================
  // MODULE 1: ACCOUNTS PAYABLE (9 tasks)
  // ============================================
  {key:"ap_invoice_entry",section:"ap",name:"AP Invoice Entry",levels:{1:true,2:true,3:true},
    variables:[{key:"invoices",label:"Invoices/month",type:"number",default:150}],
    lookupType:"software",
    lookupTable:{key:"minutes_per_invoice",label:"Minutes per Invoice",rows:{"Computer Ease":{AT:5,AC:0,SA:0,CO:0,MA:0},"Foundation":{AT:5,AC:0,SA:0,CO:0,MA:0},"Quickbooks Desktop":{AT:5,AC:0,SA:0,CO:0,MA:0},"Quickbooks Online":{AT:5,AC:0,SA:0,CO:0,MA:0},"Sage 100 (Master Builder)":{AT:5,AC:0,SA:0,CO:0,MA:0},"Sage 300 (Timberline)":{AT:5,AC:0,SA:0,CO:0,MA:0},"Viewpoint":{AT:5,AC:0,SA:0,CO:0,MA:0},"Vista":{AT:5,AC:0,SA:0,CO:0,MA:0},"Other":{AT:5,AC:0,SA:0,CO:0,MA:0}}},
    formula:"invoices * minutes_per_invoice / 60",
    hammerTimeMapping:{AT:"AP.015",AC:"AP.015",SA:"AP.015",CO:"AP.015",MA:"AP.015"}},
  
  {key:"ap_approvals",section:"ap",name:"AP Approvals",levels:{1:true,2:true,3:true},
    variables:[{key:"invoices",label:"Invoices",type:"number",default:150},{key:"use_ap_automation",label:"Use AP Automation",type:"enum",options:["Yes","No"],default:"Yes"}],
    lookupType:"ap_automation",
    lookupTable:{key:"minutes_per_invoice",label:"Minutes per Invoice",rows:{"Yes":{AT:0,AC:0,SA:0,CO:0.5,MA:0},"No":{AT:0,AC:0,SA:0,CO:0,MA:0}}},
    formula:"invoices * minutes_per_invoice / 60",
    hammerTimeMapping:{AT:"AP.075",AC:"AP.075",SA:"AP.075",CO:"AP.075",MA:"AP.075"}},
  
  {key:"ap_credit_card",section:"ap",name:"Credit Card Entry",levels:{1:true,2:true,3:true},
    variables:[{key:"txns",label:"CC Transactions/month",type:"number",default:500}],
    lookupType:"software",
    lookupTable:{key:"minutes_per_txn",label:"Minutes per Transaction",rows:{"Computer Ease":{AT:0.5,AC:0,SA:0,CO:0,MA:0},"Foundation":{AT:2,AC:0,SA:0,CO:0,MA:0},"Quickbooks Desktop":{AT:0.5,AC:0,SA:0,CO:0,MA:0},"Quickbooks Online":{AT:0.5,AC:0,SA:0,CO:0,MA:0},"Sage 100 (Master Builder)":{AT:0.5,AC:0,SA:0,CO:0,MA:0},"Sage 300 (Timberline)":{AT:0.5,AC:0,SA:0,CO:0,MA:0},"Viewpoint":{AT:0.5,AC:0,SA:0,CO:0,MA:0},"Vista":{AT:0.5,AC:0,SA:0,CO:0,MA:0},"Other":{AT:0.5,AC:0,SA:0,CO:0,MA:0}}},
    formula:"txns * minutes_per_txn / 60",
    hammerTimeMapping:{AT:"AP.015",AC:"AP.015",SA:"AP.015",CO:"AP.015",MA:"AP.015"}},
  
  {key:"ap_recording_payments",section:"ap",name:"Recording Invoice Payments",levels:{1:true,2:true,3:true},
    variables:[{key:"payments",label:"Payments/month",type:"number",default:100},{key:"approval_required",label:"Approval Required",type:"enum",options:["Yes","No"],default:"Yes"},{key:"approval_type",label:"Approval Type",type:"enum",options:["Manual","Automated"],default:"Automated"},{key:"invoice_capture",label:"Use TimberScan/Bill.com",type:"enum",options:["Yes","No"],default:"No"},{key:"po_system",label:"PO System Utilized",type:"enum",options:["Yes","No"],default:"No"}],
    lookupType:"software",
    lookupTable:{key:"minutes_per_payment",label:"Minutes per Payment",rows:{"Computer Ease":{AT:5,AC:0,SA:0,CO:0,MA:0},"Foundation":{AT:5,AC:0,SA:0,CO:0,MA:0},"Quickbooks Desktop":{AT:5,AC:0,SA:0,CO:0,MA:0},"Quickbooks Online":{AT:5,AC:0,SA:0,CO:0,MA:0},"Sage 100 (Master Builder)":{AT:5,AC:0,SA:0,CO:0,MA:0},"Sage 300 (Timberline)":{AT:5,AC:0,SA:0,CO:0,MA:0},"Viewpoint":{AT:5,AC:0,SA:0,CO:0,MA:0},"Vista":{AT:5,AC:0,SA:0,CO:0,MA:0},"Other":{AT:5,AC:0,SA:0,CO:0,MA:0}}},
    formula:"payments * minutes_per_payment * LOOKUP(approval_required, \"Yes\", 1.2, \"No\", 1, 1) * LOOKUP(approval_type, \"Manual\", 1.2, \"Automated\", 1, 1) * LOOKUP(invoice_capture, \"Yes\", 0.5, \"No\", 1, 1) * LOOKUP(po_system, \"Yes\", 0.8, \"No\", 1, 1) / 60",
    hammerTimeMapping:{AT:"AP.016",AC:"AP.016",SA:"AP.016",CO:"AP.016",MA:"AP.016"}},
  
  {key:"ap_po_matching",section:"ap",name:"PO Matching",levels:{1:true,2:true,3:true},
    variables:[{key:"pos",label:"POs/month",type:"number",default:50}],
    lookupType:"software",
    lookupTable:{key:"minutes_per_po",label:"Minutes per PO",rows:{"Computer Ease":{AT:4,AC:0,SA:0,CO:0,MA:0},"Foundation":{AT:4,AC:0,SA:0,CO:0,MA:0},"Quickbooks Desktop":{AT:4,AC:0,SA:0,CO:0,MA:0},"Quickbooks Online":{AT:4,AC:0,SA:0,CO:0,MA:0},"Sage 100 (Master Builder)":{AT:4,AC:0,SA:0,CO:0,MA:0},"Sage 300 (Timberline)":{AT:4,AC:0,SA:0,CO:0,MA:0},"Viewpoint":{AT:4,AC:0,SA:0,CO:0,MA:0},"Vista":{AT:4,AC:0,SA:0,CO:0,MA:0},"Other":{AT:4,AC:0,SA:0,CO:0,MA:0}}},
    formula:"pos * minutes_per_po / 60",
    hammerTimeMapping:{AT:"AP.060",AC:"AP.060",SA:"AP.060",CO:"AP.060",MA:"AP.060"}},
  
  {key:"ap_vendor_statement",section:"ap",name:"Vendor Statement Reconciliation",levels:{1:true,2:true,3:true},
    variables:[{key:"vendors",label:"Vendors",type:"number",default:30}],
    lookupType:"role",
    lookupTable:{key:"minutes_per_vendor",label:"Minutes per Vendor",rows:{AT:20,AC:0,SA:0,CO:0,MA:0}},
    formula:"vendors * minutes_per_vendor / 60",
    hammerTimeMapping:{AT:"AP.130",AC:"AP.130",SA:"AP.130",CO:"AP.130",MA:"AP.130"}},
  
  {key:"ap_sub_compliance",section:"ap",name:"Subcontractor Compliance",levels:{1:true,2:true,3:true},
    variables:[{key:"subs",label:"Subcontractors",type:"number",default:50},{key:"method",label:"Method",type:"enum",options:["Software","Manual"],default:"Software"}],
    lookupType:"method",
    lookupTable:{key:"minutes_per_sub",label:"Minutes per Subcontractor",rows:{"Software":{AT:0,AC:0,SA:0,CO:10,MA:0},"Manual":{AT:0,AC:0,SA:0,CO:20,MA:0}}},
    formula:"subs * minutes_per_sub / 60",
    hammerTimeMapping:{AT:"AP.100",AC:"AP.100",SA:"AP.100",CO:"AP.100",MA:"AP.100"}},
  
  {key:"ap_vendor_maintenance",section:"ap",name:"Create/Maintain Vendors",levels:{1:true,2:true,3:true},
    variables:[{key:"new_vendors",label:"New Vendors/year",type:"number",default:24}],
    lookupType:"role",
    lookupTable:{key:"minutes_per_vendor",label:"Minutes per Vendor",rows:{AT:20,AC:0,SA:0,CO:0,MA:0}},
    formula:"new_vendors * minutes_per_vendor / 60 / 12",
    hammerTimeMapping:{AT:"AP.010",AC:"AP.010",SA:"AP.010",CO:"AP.010",MA:"AP.010"}},
  
  {key:"ap_aging_review",section:"ap",name:"AP Aging Review Meeting",levels:{1:true,2:true,3:true},
    variables:[{key:"freq",label:"Frequency",type:"enum",options:["Weekly","Monthly"],default:"Monthly"}],
    lookupType:"frequency",
    lookupTable:{key:"hours_per_period",label:"Hours per Period",rows:{"Weekly":{AT:8,AC:0,SA:0,CO:8,MA:2},"Monthly":{AT:2,AC:0,SA:0,CO:2,MA:0.5}}},
    formula:"hours_per_period",
    hammerTimeMapping:{AT:"AP.150",AC:"AP.150",SA:"AP.150",CO:"AP.150",MA:"AP.150"}},

  // ============================================
  // MODULE 2: ACCOUNTS RECEIVABLE (5 tasks)
  // ============================================
  {key:"ar_create_invoices",section:"ar",name:"Create Invoices",levels:{1:true,2:true,3:true},
    variables:[{key:"invoices",label:"Invoices/month",type:"number",default:100}],
    lookupType:"software",
    lookupTable:{key:"minutes_per_invoice",label:"Minutes per Invoice",rows:{"Computer Ease":{AT:10,AC:0,SA:0,CO:0,MA:0},"Foundation":{AT:10,AC:0,SA:0,CO:0,MA:0},"Quickbooks Desktop":{AT:10,AC:0,SA:0,CO:0,MA:0},"Quickbooks Online":{AT:10,AC:0,SA:0,CO:0,MA:0},"Sage 100 (Master Builder)":{AT:10,AC:0,SA:0,CO:0,MA:0},"Sage 300 (Timberline)":{AT:10,AC:0,SA:0,CO:0,MA:0},"Viewpoint":{AT:10,AC:0,SA:0,CO:0,MA:0},"Vista":{AT:10,AC:0,SA:0,CO:0,MA:0},"Other":{AT:10,AC:0,SA:0,CO:0,MA:0}}},
    formula:"invoices * minutes_per_invoice / 60",
    hammerTimeMapping:{AT:"AR.015",AC:"AR.015",SA:"AR.015",CO:"AR.015",MA:"AR.015"}},
  
  {key:"ar_customer_payments",section:"ar",name:"Record Customer Payments",levels:{1:true,2:true,3:true},
    variables:[{key:"payments",label:"Payments/month",type:"number",default:80},{key:"invoice_reference",label:"Remittances Reference Invoice",type:"enum",options:["Yes","No"],default:"Yes"}],
    lookupType:"software",
    lookupTable:{key:"minutes_per_payment",label:"Minutes per Payment",rows:{"Computer Ease":{AT:5,AC:0,SA:0,CO:0,MA:0},"Foundation":{AT:5,AC:0,SA:0,CO:0,MA:0},"Quickbooks Desktop":{AT:5,AC:0,SA:0,CO:0,MA:0},"Quickbooks Online":{AT:5,AC:0,SA:0,CO:0,MA:0},"Sage 100 (Master Builder)":{AT:5,AC:0,SA:0,CO:0,MA:0},"Sage 300 (Timberline)":{AT:5,AC:0,SA:0,CO:0,MA:0},"Viewpoint":{AT:5,AC:0,SA:0,CO:0,MA:0},"Vista":{AT:5,AC:0,SA:0,CO:0,MA:0},"Other":{AT:5,AC:0,SA:0,CO:0,MA:0}}},
    formula:"payments * minutes_per_payment * LOOKUP(invoice_reference, \"Yes\", 1, \"No\", 1.5, 1) / 60",
    hammerTimeMapping:{AT:"AR.045",AC:"AR.045",SA:"AR.045",CO:"AR.045",MA:"AR.045"}},
  
  {key:"ar_customer_deposits",section:"ar",name:"Record Customer Deposits",levels:{1:true,2:true,3:true},
    variables:[{key:"deposits",label:"Deposits/month",type:"number",default:20}],
    lookupType:"software",
    lookupTable:{key:"minutes_per_deposit",label:"Minutes per Deposit",rows:{"Computer Ease":{AT:2,AC:0,SA:0,CO:0,MA:0},"Foundation":{AT:2,AC:0,SA:0,CO:0,MA:0},"Quickbooks Desktop":{AT:2,AC:0,SA:0,CO:0,MA:0},"Quickbooks Online":{AT:2,AC:0,SA:0,CO:0,MA:0},"Sage 100 (Master Builder)":{AT:2,AC:0,SA:0,CO:0,MA:0},"Sage 300 (Timberline)":{AT:2,AC:0,SA:0,CO:0,MA:0},"Viewpoint":{AT:2,AC:0,SA:0,CO:0,MA:0},"Vista":{AT:2,AC:0,SA:0,CO:0,MA:0},"Other":{AT:2,AC:0,SA:0,CO:0,MA:0}}},
    formula:"deposits * minutes_per_deposit / 60",
    hammerTimeMapping:{AT:"AR.045",AC:"AR.045",SA:"AR.045",CO:"AR.045",MA:"AR.045"}},
  
  {key:"ar_new_customers",section:"ar",name:"Set Up New Customers",levels:{1:true,2:true,3:true},
    variables:[{key:"new_customers",label:"New Customers/month",type:"number",default:5}],
    lookupType:"software",
    lookupTable:{key:"minutes_per_customer",label:"Minutes per Customer",rows:{"Computer Ease":{AT:10,AC:0,SA:0,CO:0,MA:0},"Foundation":{AT:10,AC:0,SA:0,CO:0,MA:0},"Quickbooks Desktop":{AT:10,AC:0,SA:0,CO:0,MA:0},"Quickbooks Online":{AT:10,AC:0,SA:0,CO:0,MA:0},"Sage 100 (Master Builder)":{AT:10,AC:0,SA:0,CO:0,MA:0},"Sage 300 (Timberline)":{AT:10,AC:0,SA:0,CO:0,MA:0},"Viewpoint":{AT:10,AC:0,SA:0,CO:0,MA:0},"Vista":{AT:10,AC:0,SA:0,CO:0,MA:0},"Other":{AT:10,AC:0,SA:0,CO:0,MA:0}}},
    formula:"new_customers * minutes_per_customer / 60",
    hammerTimeMapping:{AT:"AR.080",AC:"AR.080",SA:"AR.080",CO:"AR.080",MA:"AR.080"}},
  
  {key:"ar_aging_review",section:"ar",name:"AR Aging Review Meeting",levels:{1:true,2:true,3:true},
    variables:[{key:"freq",label:"Frequency",type:"enum",options:["Weekly","Monthly"],default:"Monthly"}],
    lookupType:"frequency",
    lookupTable:{key:"hours_per_period",label:"Hours per Period",rows:{"Weekly":{AT:8,AC:0,SA:0,CO:8,MA:2},"Monthly":{AT:2,AC:0,SA:0,CO:2,MA:0.5}}},
    formula:"hours_per_period",
    hammerTimeMapping:{AT:"AR.090",AC:"AR.090",SA:"AR.090",CO:"AR.090",MA:"AR.090"}},

  // ============================================
  // MODULE 3: CASH MANAGEMENT (9 tasks)
  // ============================================
  {key:"cm_bank_recon",section:"cm",name:"Reconcile Bank Accounts",levels:{1:true,2:true,3:true},
    variables:[{key:"accounts",label:"Bank Accounts",type:"number",default:3},{key:"online_access",label:"Online Access",type:"enum",options:["Yes","No"],default:"Yes"}],
    lookupType:"online_access",
    lookupTable:{key:"minutes_per_account",label:"Minutes per Account",rows:{"Yes":{AT:150,AC:0,SA:0,CO:30,MA:0},"No":{AT:120,AC:0,SA:0,CO:0,MA:0}}},
    formula:"accounts * minutes_per_account / 60",
    hammerTimeMapping:{AT:"CM.085",AC:"CM.085",SA:"CM.085",CO:"CM.100",MA:"CM.100"}},
  
  {key:"cm_cc_recon",section:"cm",name:"Reconcile Credit Cards",levels:{1:true,2:true,3:true},
    variables:[{key:"cards",label:"Credit Cards",type:"number",default:2},{key:"online_access",label:"Online Access",type:"enum",options:["Yes","No"],default:"Yes"}],
    lookupType:"online_access",
    lookupTable:{key:"minutes_per_card",label:"Minutes per Card",rows:{"Yes":{AT:150,AC:0,SA:0,CO:30,MA:0},"No":{AT:120,AC:0,SA:0,CO:45,MA:0}}},
    formula:"cards * minutes_per_card / 60",
    hammerTimeMapping:{AT:"CM.085",AC:"CM.085",SA:"CM.085",CO:"CM.100",MA:"CM.100"}},
  
  {key:"cm_loan_recon",section:"cm",name:"Reconcile Loans",levels:{1:true,2:true,3:true},
    variables:[{key:"loans",label:"Loans",type:"number",default:1},{key:"online_access",label:"Online Access",type:"enum",options:["Yes","No"],default:"Yes"}],
    lookupType:"online_access",
    lookupTable:{key:"minutes_per_loan",label:"Minutes per Loan",rows:{"Yes":{AT:0,AC:30,SA:0,CO:0,MA:0},"No":{AT:0,AC:30,SA:0,CO:10,MA:0}}},
    formula:"loans * minutes_per_loan / 60",
    hammerTimeMapping:{AT:"LN.030",AC:"LN.030",SA:"LN.030",CO:"LN.010",MA:"LN.010"}},
  
  {key:"cm_investment_recon",section:"cm",name:"Reconcile Investments",levels:{1:true,2:true,3:true},
    variables:[{key:"investments",label:"Investment Accounts",type:"number",default:0},{key:"online_access",label:"Online Access",type:"enum",options:["Yes","No"],default:"Yes"}],
    lookupType:"online_access",
    lookupTable:{key:"minutes_per_inv",label:"Minutes per Account",rows:{"Yes":{AT:0,AC:120,SA:0,CO:30,MA:0},"No":{AT:0,AC:150,SA:0,CO:45,MA:0}}},
    formula:"investments * minutes_per_inv / 60",
    hammerTimeMapping:{AT:"CM.065",AC:"CM.065",SA:"CM.065",CO:"CM.100",MA:"CM.100"}},
  
  {key:"cm_new_bank",section:"cm",name:"Set Up New Bank Account",levels:{1:true,2:true,3:true},
    variables:[{key:"new_accounts",label:"New Accounts/year",type:"number",default:1}],
    lookupType:"role",
    lookupTable:{key:"minutes_per_account",label:"Minutes per Account",rows:{AT:0,AC:0,SA:0,CO:20,MA:0}},
    formula:"new_accounts * minutes_per_account / 60 / 12",
    hammerTimeMapping:{AT:"CM.065",AC:"CM.065",SA:"CM.065",CO:"CM.065",MA:"CM.065"}},
  
  {key:"cm_new_cc",section:"cm",name:"Set Up New Credit Card",levels:{1:true,2:true,3:true},
    variables:[{key:"new_cards",label:"New Cards/year",type:"number",default:1}],
    lookupType:"role",
    lookupTable:{key:"minutes_per_card",label:"Minutes per Card",rows:{AT:0,AC:0,SA:0,CO:20,MA:0}},
    formula:"new_cards * minutes_per_card / 60 / 12",
    hammerTimeMapping:{AT:"CM.065",AC:"CM.065",SA:"CM.065",CO:"CM.065",MA:"CM.065"}},
  
  {key:"cm_new_investment",section:"cm",name:"Set Up New Investment Account",levels:{1:true,2:true,3:true},
    variables:[{key:"new_investments",label:"New Accounts/year",type:"number",default:0}],
    lookupType:"role",
    lookupTable:{key:"minutes_per_account",label:"Minutes per Account",rows:{AT:0,AC:0,SA:0,CO:20,MA:0}},
    formula:"new_investments * minutes_per_account / 60 / 12",
    hammerTimeMapping:{AT:"CM.065",AC:"CM.065",SA:"CM.065",CO:"CM.065",MA:"CM.065"}},
  
  {key:"cm_new_loan",section:"cm",name:"Set Up New Loans",levels:{1:true,2:true,3:true},
    variables:[{key:"new_loans",label:"New Loans/year",type:"number",default:0}],
    lookupType:"role",
    lookupTable:{key:"minutes_per_loan",label:"Minutes per Loan",rows:{AT:0,AC:0,SA:0,CO:20,MA:0}},
    formula:"new_loans * minutes_per_loan / 60 / 12",
    hammerTimeMapping:{AT:"LN.020",AC:"LN.020",SA:"LN.020",CO:"LN.020",MA:"LN.020"}},
  
  {key:"cm_forecast",section:"cm",name:"Cash Forecasting",levels:{1:true,2:true,3:true},
    variables:[{key:"freq",label:"Frequency",type:"enum",options:["Weekly","Monthly"],default:"Monthly"}],
    lookupType:"frequency",
    lookupTable:{key:"hours_per_period",label:"Hours per Period",rows:{"Weekly":{AT:0,AC:0,SA:0,CO:4,MA:0},"Monthly":{AT:0,AC:0,SA:0,CO:1,MA:0}}},
    formula:"hours_per_period",
    hammerTimeMapping:{AT:"CM.040",AC:"CM.040",SA:"CM.040",CO:"CM.040",MA:"CM.040"}},

  // ============================================
  // MODULE 4: FIXED ASSETS (2 tasks)
  // ============================================
  {key:"fa_depreciation",section:"fa",name:"Calculate & Record Depreciation",levels:{1:true,2:true,3:true},
    variables:[{key:"assets",label:"Fixed Assets",type:"number",default:20}],
    lookupType:"role",
    lookupTable:{key:"minutes_per_asset",label:"Minutes per Asset",rows:{AT:0,AC:5,SA:0,CO:0,MA:0}},
    formula:"assets * minutes_per_asset / 60",
    hammerTimeMapping:{AT:"FA.030",AC:"FA.030",SA:"FA.030",CO:"FA.010",MA:"FA.030"}},
  
  {key:"fa_new_assets",section:"fa",name:"Set Up New Fixed Assets/Dispose",levels:{1:true,2:true,3:true},
    variables:[{key:"new_assets",label:"New Assets/year",type:"number",default:5}],
    lookupType:"role",
    lookupTable:{key:"minutes_per_asset",label:"Minutes per Asset",rows:{AT:0,AC:60,SA:0,CO:0,MA:0}},
    formula:"new_assets * minutes_per_asset / 60 / 12",
    hammerTimeMapping:{AT:"FA.020",AC:"FA.020",SA:"FA.020",CO:"FA.010",MA:"FA.020"}},

  // ============================================
  // MODULE 5: PAYROLL (12 tasks)
  // ============================================
  {key:"pr_time_entry",section:"pr",name:"Payroll Time Entry",levels:{1:true,2:true,3:true},
    variables:[{key:"timekeeping_software",label:"Use Timekeeping Software",type:"enum",options:["Yes","No"],default:"Yes"}],
    lookupType:"software",
    lookupTable:{key:"minutes_per_employee",label:"Minutes per Employee",rows:{"Computer Ease":{AT:4,AC:0,SA:0,CO:0.8,MA:0},"Foundation":{AT:4,AC:0,SA:0,CO:0.8,MA:0},"Quickbooks Desktop":{AT:4,AC:0,SA:0,CO:0.8,MA:0},"Quickbooks Online":{AT:4,AC:0,SA:0,CO:0.8,MA:0},"Sage 100 (Master Builder)":{AT:4,AC:0,SA:0,CO:0.8,MA:0},"Sage 300 (Timberline)":{AT:4,AC:0,SA:0,CO:0.8,MA:0},"Viewpoint":{AT:4,AC:0,SA:0,CO:0.8,MA:0},"Vista":{AT:4,AC:0,SA:0,CO:0.8,MA:0},"Other":{AT:4,AC:0,SA:0,CO:0.8,MA:0}}},
    formula:"employees * minutes_per_employee * LOOKUP(timekeeping_software, \"Yes\", 1, \"No\", 1.5, 1) * payroll_freq_mult / 60",
    hammerTimeMapping:{AT:"PR.035",AC:"PR.035",SA:"PR.035",CO:"PR.035",MA:"PR.035"}},
  
  {key:"pr_processing",section:"pr",name:"Process Payroll",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"software",
    lookupTable:{key:"minutes_per_employee",label:"Minutes per Employee",rows:{"Computer Ease":{AT:4,AC:0,SA:0,CO:0.8,MA:0},"Foundation":{AT:4,AC:0,SA:0,CO:0.8,MA:0},"Quickbooks Desktop":{AT:4,AC:0,SA:0,CO:0.8,MA:0},"Quickbooks Online":{AT:4,AC:0,SA:0,CO:0.8,MA:0},"Sage 100 (Master Builder)":{AT:4,AC:0,SA:0,CO:0.8,MA:0},"Sage 300 (Timberline)":{AT:4,AC:0,SA:0,CO:0.8,MA:0},"Viewpoint":{AT:4,AC:0,SA:0,CO:0.8,MA:0},"Vista":{AT:4,AC:0,SA:0,CO:0.8,MA:0},"Other":{AT:4,AC:0,SA:0,CO:0.8,MA:0}}},
    formula:"employees * minutes_per_employee * payroll_freq_mult / 60",
    hammerTimeMapping:{AT:"PR.035",AC:"PR.035",SA:"PR.035",CO:"PR.035",MA:"PR.035"}},
  
  {key:"pr_tax_filings",section:"pr",name:"Payroll Tax Filings & Deposits",levels:{1:true,2:true,3:true},
    variables:[{key:"payroll_states",label:"No. of Payroll States",type:"number",default:1}],
    lookupType:"role",
    lookupTable:{key:"minutes_per_state",label:"Minutes per State",rows:{AT:0,AC:0,SA:0,CO:60,MA:0}},
    formula:"payroll_states * minutes_per_state / 60",
    hammerTimeMapping:{AT:"PR.085",AC:"PR.085",SA:"PR.085",CO:"PR.085",MA:"PR.085"}},
  
  {key:"pr_journal_entry",section:"pr",name:"Third-Party Payroll Journal Entry",levels:{1:true,2:true,3:true},
    variables:[{key:"integration",label:"Third-Party Integration",type:"enum",options:["Yes","No"],default:"No"}],
    lookupType:"integration",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{"Yes":{AT:0,AC:60,SA:0,CO:0,MA:0},"No":{AT:0,AC:120,SA:0,CO:0,MA:0}}},
    formula:"minutes_per_period * payroll_freq_mult / 60",
    hammerTimeMapping:{AT:"PR.130",AC:"PR.130",SA:"PR.130",CO:"PR.130",MA:"PR.130"}},
  
  {key:"pr_new_employees",section:"pr",name:"Setup New Employees",levels:{1:true,2:true,3:true},
    variables:[{key:"new_employees",label:"New Employees/month",type:"number",default:2}],
    lookupType:"software",
    lookupTable:{key:"minutes_per_employee",label:"Minutes per Employee",rows:{"Computer Ease":{AT:0,AC:0,SA:0,CO:20,MA:0},"Foundation":{AT:0,AC:0,SA:0,CO:20,MA:0},"Quickbooks Desktop":{AT:0,AC:0,SA:0,CO:20,MA:0},"Quickbooks Online":{AT:0,AC:0,SA:0,CO:20,MA:0},"Sage 100 (Master Builder)":{AT:0,AC:0,SA:0,CO:20,MA:0},"Sage 300 (Timberline)":{AT:0,AC:0,SA:0,CO:20,MA:0},"Viewpoint":{AT:0,AC:0,SA:0,CO:20,MA:0},"Vista":{AT:0,AC:0,SA:0,CO:20,MA:0},"Other":{AT:0,AC:0,SA:0,CO:20,MA:0}}},
    formula:"new_employees * minutes_per_employee / 60",
    hammerTimeMapping:{AT:"PR.120",AC:"PR.120",SA:"PR.120",CO:"PR.120",MA:"PR.120"}},
  
  {key:"pr_union_reports",section:"pr",name:"Union Reports",levels:{1:true,2:true,3:true},
    variables:[{key:"unions",label:"Number of Unions",type:"number",default:0}],
    lookupType:"role",
    lookupTable:{key:"minutes_per_union",label:"Minutes per Union",rows:{AT:0,AC:0,SA:0,CO:120,MA:0}},
    formula:"unions * minutes_per_union / 60",
    hammerTimeMapping:{AT:"PR.150",AC:"PR.150",SA:"PR.150",CO:"PR.150",MA:"PR.150"}},
  
  {key:"pr_benefits",section:"pr",name:"Benefits Enrollment",levels:{1:true,2:true,3:true},
    variables:[{key:"new_employees",label:"New Employees/month",type:"number",default:2}],
    lookupType:"role",
    lookupTable:{key:"minutes_per_employee",label:"Minutes per Employee",rows:{AT:0,AC:0,SA:0,CO:60,MA:0}},
    formula:"new_employees * minutes_per_employee / 60",
    hammerTimeMapping:{AT:"PR.020",AC:"PR.020",SA:"PR.020",CO:"PR.020",MA:"PR.020"}},
  
  {key:"pr_tax_recon",section:"pr",name:"Reconcile Payroll Taxes",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:240,SA:120,CO:30,MA:0}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"PR.110",AC:"PR.110",SA:"PR.110",CO:"PR.110",MA:"PR.110"}},
  
  {key:"pr_certified",section:"pr",name:"Certified Payroll Reports",levels:{1:true,2:true,3:true},
    variables:[{key:"projects",label:"Certified Projects",type:"number",default:0}],
    lookupType:"role",
    lookupTable:{key:"minutes_per_project",label:"Minutes per Project",rows:{AT:0,AC:0,SA:0,CO:120,MA:30}},
    formula:"projects * minutes_per_project / 60",
    hammerTimeMapping:{AT:"PR.030",AC:"PR.030",SA:"PR.030",CO:"PR.030",MA:"PR.030"}},
  
  {key:"pr_401k",section:"pr",name:"401K Processing",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:0,SA:0,CO:60,MA:0}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"PR.010",AC:"PR.010",SA:"PR.010",CO:"PR.010",MA:"PR.010"}},
  
  {key:"pr_garnishments",section:"pr",name:"Garnishments & Other Deductions",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:0,SA:0,CO:60,MA:0}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"PR.160",AC:"PR.160",SA:"PR.160",CO:"PR.160",MA:"PR.160"}},
  
  {key:"pr_ocip",section:"pr",name:"OCIP/CCIP Support",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:0,SA:0,CO:60,MA:0}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"PR.170",AC:"PR.170",SA:"PR.170",CO:"PR.170",MA:"PR.170"}},

  // ============================================
  // MODULE 6: JOB COST (7 tasks)
  // ============================================
  {key:"jc_estimates",section:"jc",name:"Enter Cost Estimates",levels:{1:true,2:true,3:true},
    variables:[{key:"jobs",label:"Jobs/month",type:"number",default:5}],
    lookupType:"software",
    lookupTable:{key:"minutes_per_job",label:"Minutes per Job",rows:{"Computer Ease":{AT:0,AC:0,SA:0,CO:12,MA:0},"Foundation":{AT:0,AC:0,SA:0,CO:12,MA:0},"Quickbooks Desktop":{AT:0,AC:0,SA:0,CO:12,MA:0},"Quickbooks Online":{AT:0,AC:0,SA:0,CO:12,MA:0},"Sage 100 (Master Builder)":{AT:0,AC:0,SA:0,CO:12,MA:0},"Sage 300 (Timberline)":{AT:0,AC:0,SA:0,CO:12,MA:0},"Viewpoint":{AT:0,AC:0,SA:0,CO:12,MA:0},"Vista":{AT:0,AC:0,SA:0,CO:12,MA:0},"Other":{AT:0,AC:0,SA:0,CO:12,MA:0}}},
    formula:"jobs * minutes_per_job / 60",
    hammerTimeMapping:{AT:"JC.060",AC:"JC.060",SA:"JC.060",CO:"JC.060",MA:"JC.060"}},
  
  {key:"jc_contracts",section:"jc",name:"Enter Contracts & Change Orders",levels:{1:true,2:true,3:true},
    variables:[{key:"jobs",label:"Jobs/month",type:"number",default:5}],
    lookupType:"software",
    lookupTable:{key:"minutes_per_job",label:"Minutes per Job",rows:{"Computer Ease":{AT:0,AC:0,SA:0,CO:12,MA:0},"Foundation":{AT:0,AC:0,SA:0,CO:12,MA:0},"Quickbooks Desktop":{AT:0,AC:0,SA:0,CO:12,MA:0},"Quickbooks Online":{AT:0,AC:0,SA:0,CO:12,MA:0},"Sage 100 (Master Builder)":{AT:0,AC:0,SA:0,CO:12,MA:0},"Sage 300 (Timberline)":{AT:0,AC:0,SA:0,CO:12,MA:0},"Viewpoint":{AT:0,AC:0,SA:0,CO:12,MA:0},"Vista":{AT:0,AC:0,SA:0,CO:12,MA:0},"Other":{AT:0,AC:0,SA:0,CO:12,MA:0}}},
    formula:"jobs * minutes_per_job / 60",
    hammerTimeMapping:{AT:"JC.070",AC:"JC.070",SA:"JC.070",CO:"JC.070",MA:"JC.070"}},
  
  {key:"jc_new_jobs",section:"jc",name:"Setup New Jobs",levels:{1:true,2:true,3:true},
    variables:[{key:"new_jobs",label:"New Jobs/month",type:"number",default:3}],
    lookupType:"software",
    lookupTable:{key:"minutes_per_job",label:"Minutes per Job",rows:{"Computer Ease":{AT:10,AC:0,SA:0,CO:0,MA:0},"Foundation":{AT:10,AC:0,SA:0,CO:0,MA:0},"Quickbooks Desktop":{AT:10,AC:0,SA:0,CO:0,MA:0},"Quickbooks Online":{AT:10,AC:0,SA:0,CO:0,MA:0},"Sage 100 (Master Builder)":{AT:10,AC:0,SA:0,CO:0,MA:0},"Sage 300 (Timberline)":{AT:10,AC:0,SA:0,CO:0,MA:0},"Viewpoint":{AT:10,AC:0,SA:0,CO:0,MA:0},"Vista":{AT:10,AC:0,SA:0,CO:0,MA:0},"Other":{AT:10,AC:0,SA:0,CO:0,MA:0}}},
    formula:"new_jobs * minutes_per_job / 60",
    hammerTimeMapping:{AT:"JC.010",AC:"JC.010",SA:"JC.010",CO:"JC.010",MA:"JC.010"}},
  
  {key:"jc_wip_adjustments",section:"jc",name:"WIP Adjustment Entries",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:240,SA:60,CO:60,MA:120}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"JC.100",AC:"JC.100",SA:"JC.100",CO:"JC.120",MA:"JC.120"}},
  
  {key:"jc_indirect_cost",section:"jc",name:"Indirect Cost Allocations",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:125,SA:0,CO:0,MA:0}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"JC.090",AC:"JC.090",SA:"JC.090",CO:"JC.090",MA:"JC.090"}},
  
  {key:"jc_reports",section:"jc",name:"Job Cost Reports",levels:{1:true,2:true,3:true},
    variables:[{key:"freq",label:"Frequency",type:"enum",options:["Weekly","Monthly"],default:"Monthly"}],
    lookupType:"frequency",
    lookupTable:{key:"hours_per_period",label:"Hours per Period",rows:{"Weekly":{AT:8,AC:0,SA:0,CO:8,MA:0},"Monthly":{AT:2,AC:0,SA:0,CO:2,MA:0}}},
    formula:"hours_per_period",
    hammerTimeMapping:{AT:"JC.050",AC:"JC.050",SA:"JC.050",CO:"JC.050",MA:"JC.050"}},
  
  {key:"jc_meetings",section:"jc",name:"Job Cost Meetings",levels:{1:true,2:true,3:true},
    variables:[{key:"freq",label:"Frequency",type:"enum",options:["Weekly","Monthly"],default:"Monthly"}],
    lookupType:"frequency",
    lookupTable:{key:"hours_per_period",label:"Hours per Period",rows:{"Weekly":{AT:0,AC:0,SA:0,CO:1,MA:0},"Monthly":{AT:0,AC:0,SA:0,CO:4,MA:0}}},
    formula:"hours_per_period",
    hammerTimeMapping:{AT:"JC.080",AC:"JC.080",SA:"JC.080",CO:"JC.080",MA:"JC.080"}},

  // ============================================
  // MODULE 7: GENERAL LEDGER (5 tasks)
  // ============================================
  {key:"gl_journal_entries",section:"gl",name:"Prepaid/Accrual/Journal Entries",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"software",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{"Computer Ease":{AT:0,AC:60,SA:60,CO:0,MA:30},"Foundation":{AT:0,AC:60,SA:60,CO:0,MA:30},"Quickbooks Desktop":{AT:0,AC:60,SA:60,CO:0,MA:30},"Quickbooks Online":{AT:0,AC:60,SA:60,CO:0,MA:30},"Sage 100 (Master Builder)":{AT:0,AC:60,SA:60,CO:0,MA:30},"Sage 300 (Timberline)":{AT:0,AC:60,SA:60,CO:0,MA:30},"Viewpoint":{AT:0,AC:60,SA:60,CO:0,MA:30},"Vista":{AT:0,AC:60,SA:60,CO:0,MA:30},"Other":{AT:0,AC:60,SA:60,CO:0,MA:30}}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"GL.130",AC:"GL.130",SA:"GL.130",CO:"GL.130",MA:"GL.130"}},
  
  {key:"gl_intercompany",section:"gl",name:"Intercompany Reconciliations",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:60,SA:60,CO:60,MA:0}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"GL.090",AC:"GL.090",SA:"GL.090",CO:"GL.090",MA:"GL.090"}},
  
  {key:"gl_inventory",section:"gl",name:"Record Inventory",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:60,SA:60,CO:60,MA:0}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"GL.100",AC:"GL.100",SA:"GL.100",CO:"GL.100",MA:"GL.100"}},
  
  {key:"gl_management",section:"gl",name:"General Ledger Management",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:120,SA:0,CO:0,MA:0}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"GL.130",AC:"GL.130",SA:"GL.130",CO:"GL.130",MA:"GL.130"}},
  
  {key:"gl_new_accounts",section:"gl",name:"Setup New GL Accounts",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:60,SA:0,CO:0,MA:0}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"GL.010",AC:"GL.010",SA:"GL.010",CO:"GL.010",MA:"GL.010"}},

  // ============================================
  // MODULE 8: TAX COMPLIANCE (2 tasks)
  // ============================================
  {key:"tx_use_tax",section:"tx",name:"Calculate and Process Use Tax",levels:{1:true,2:true,3:true},
    variables:[{key:"use_tax_states",label:"No. of Use Tax States",type:"number",default:1}],
    lookupType:"role",
    lookupTable:{key:"minutes_per_state",label:"Minutes per State",rows:{AT:60,AC:0,SA:0,CO:120,MA:0}},
    formula:"use_tax_states * minutes_per_state / 60",
    hammerTimeMapping:{AT:"TX.005",AC:"TX.005",SA:"TX.005",CO:"TX.060",MA:"TX.005"}},
  
  {key:"tx_cpa_coordination",section:"tx",name:"Coordinate with CPA",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:120,SA:60,CO:140,MA:60}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"TX.020",AC:"TX.020",SA:"TX.020",CO:"TX.020",MA:"TX.020"}},

  // ============================================
  // MODULE 9: MONTH-END RECONCILIATIONS (11 tasks)
  // ============================================
  {key:"me_recon_ap",section:"me",name:"Reconcile AP to GL",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:40,SA:21,CO:0,MA:0}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"AP.150",AC:"AP.150",SA:"AP.150",CO:"FS.032",MA:"FS.032"}},
  
  {key:"me_recon_ar",section:"me",name:"Reconcile AR to GL",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:46,SA:24,CO:0,MA:0}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"AR.090",AC:"AR.090",SA:"AR.090",CO:"FS.032",MA:"FS.032"}},
  
  {key:"me_recon_cash",section:"me",name:"Reconcile Cash to GL",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:108,SA:58,CO:0,MA:0}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"CM.115",AC:"CM.115",SA:"CM.115",CO:"FS.032",MA:"FS.032"}},
  
  {key:"me_recon_payroll",section:"me",name:"Reconcile Payroll to GL",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:130,SA:70,CO:0,MA:0}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"PR.180",AC:"PR.180",SA:"PR.180",CO:"FS.032",MA:"FS.032"}},
  
  {key:"me_recon_jc",section:"me",name:"Reconcile Job Cost to GL",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:140,SA:75,CO:0,MA:0}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"JC.130",AC:"JC.130",SA:"JC.130",CO:"FS.032",MA:"FS.032"}},
  
  {key:"me_recon_fa",section:"me",name:"Reconcile Fixed Assets to GL",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:58,SA:31,CO:0,MA:0}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"FA.040",AC:"FA.040",SA:"FA.040",CO:"FS.032",MA:"FS.032"}},
  
  {key:"me_recon_prepaid",section:"me",name:"Reconcile Prepaid",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:76,SA:41,CO:0,MA:0}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"GL.130",AC:"GL.130",SA:"GL.130",CO:"FS.032",MA:"FS.032"}},
  
  {key:"me_recon_prepaid_gl",section:"me",name:"Reconcile Prepaid Entries to GL",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:64,SA:34,CO:0,MA:0}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"GL.130",AC:"GL.130",SA:"GL.130",CO:"FS.032",MA:"FS.032"}},
  
  {key:"me_recon_taxes",section:"me",name:"Reconcile Taxes to GL",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:47,SA:25,CO:0,MA:0}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"TX.090",AC:"TX.090",SA:"TX.090",CO:"FS.032",MA:"FS.032"}},
  
  {key:"me_recon_other",section:"me",name:"Reconcile Other BS Accounts to GL",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:83,SA:45,CO:0,MA:0}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"GL.110",AC:"GL.110",SA:"GL.110",CO:"FS.032",MA:"FS.032"}},
  
  {key:"me_close",section:"me",name:"Close Month",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:0,SA:0,CO:30,MA:0}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"FS.032",AC:"FS.032",SA:"FS.032",CO:"FS.032",MA:"FS.032"}},

  // ============================================
  // MODULE 10: FINANCIAL REPORTING (3 tasks)
  // ============================================
  {key:"fr_reports",section:"fr",name:"Generate & Review Financial Reports",levels:{1:true,2:true,3:true},
    variables:[{key:"freq",label:"Frequency",type:"enum",options:["Monthly","Quarterly"],default:"Monthly"}],
    lookupType:"frequency",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{"Monthly":{AT:0,AC:240,SA:60,CO:60,MA:60},"Quarterly":{AT:0,AC:80,SA:20,CO:20,MA:20}}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"FS.065",AC:"FS.065",SA:"FS.065",CO:"FS.065",MA:"FS.065"}},
  
  {key:"fr_wip",section:"fr",name:"Generate WIP",levels:{1:true,2:true,3:true},
    variables:[{key:"freq",label:"Frequency",type:"enum",options:["Monthly","Quarterly"],default:"Monthly"}],
    lookupType:"frequency",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{"Monthly":{AT:0,AC:240,SA:60,CO:60,MA:60},"Quarterly":{AT:0,AC:80,SA:20,CO:20,MA:20}}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"JC.115",AC:"JC.115",SA:"JC.115",CO:"JC.115",MA:"JC.115"}},
  
  {key:"fr_budget",section:"fr",name:"Quarterly Budget Updates",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:0,SA:0,CO:120,MA:0}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"FS.100",AC:"FS.100",SA:"FS.100",CO:"FS.100",MA:"FS.100"}},

  // ============================================
  // MODULE 11: YEAR-END (3 tasks)
  // ============================================
  {key:"ye_1099s",section:"ye",name:"Generate 1099s",levels:{1:true,2:true,3:true},
    variables:[{key:"vendors_1099",label:"1099 Vendors",type:"number",default:20},{key:"vendors_flagged",label:"Vendors Flagged in System",type:"enum",options:["Yes","No"],default:"Yes"}],
    lookupType:"flagged",
    lookupTable:{key:"hours_per_vendor",label:"Hours per Vendor",rows:{"Yes":{AT:0,AC:0,SA:0,CO:0,MA:0},"No":{AT:0,AC:5,SA:0,CO:0,MA:0}}},
    formula:"vendors_1099 * hours_per_vendor / 12",
    hammerTimeMapping:{AT:"YE.040",AC:"YE.040",SA:"YE.040",CO:"YE.040",MA:"YE.040"}},
  
  {key:"ye_w2s",section:"ye",name:"Generate W-2s",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"software",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{"Computer Ease":{AT:0,AC:0,SA:0,CO:15,MA:0},"Foundation":{AT:0,AC:0,SA:0,CO:15,MA:0},"Quickbooks Desktop":{AT:0,AC:0,SA:0,CO:15,MA:0},"Quickbooks Online":{AT:0,AC:0,SA:0,CO:15,MA:0},"Sage 100 (Master Builder)":{AT:0,AC:0,SA:0,CO:15,MA:0},"Sage 300 (Timberline)":{AT:0,AC:0,SA:0,CO:15,MA:0},"Viewpoint":{AT:0,AC:0,SA:0,CO:15,MA:0},"Vista":{AT:0,AC:0,SA:0,CO:15,MA:0},"Other":{AT:0,AC:0,SA:0,CO:15,MA:0}}},
    formula:"minutes_per_period * payroll_freq_mult / 60",
    hammerTimeMapping:{AT:"YE.050",AC:"YE.050",SA:"YE.050",CO:"YE.050",MA:"YE.050"}},
  
  {key:"ye_close",section:"ye",name:"Year-End Close",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_period",label:"Minutes per Period",rows:{AT:0,AC:20,SA:20,CO:10,MA:10}},
    formula:"minutes_per_period / 60",
    hammerTimeMapping:{AT:"YE.060",AC:"YE.060",SA:"YE.060",CO:"YE.030",MA:"YE.030"}},

  // ============================================
  // MODULE 12: OVERHEAD (7 tasks)
  // ============================================
  {key:"oh_weekly_status",section:"oh",name:"Weekly Status Calls",levels:{1:true,2:true,3:true},
    variables:[{key:"calls_per_month",label:"Calls/month",type:"number",default:4}],
    lookupType:"role",
    lookupTable:{key:"minutes_per_call",label:"Minutes per Call",rows:{AT:0,AC:15,SA:30,CO:30,MA:15}},
    formula:"calls_per_month * minutes_per_call / 60",
    hammerTimeMapping:{AT:"OH.010",AC:"OH.010",SA:"OH.010",CO:"OH.010",MA:"OH.010"}},
  
  {key:"oh_email_comm",section:"oh",name:"Email/Slack Communication",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_month",label:"Minutes per Month",rows:{AT:60,AC:30,SA:60,CO:120,MA:30}},
    formula:"minutes_per_month / 60",
    hammerTimeMapping:{AT:"OH.020",AC:"OH.020",SA:"OH.020",CO:"OH.020",MA:"OH.020"}},
  
  {key:"oh_internal_coord",section:"oh",name:"Internal Team Coordination",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_month",label:"Minutes per Month",rows:{AT:30,AC:30,SA:60,CO:60,MA:30}},
    formula:"minutes_per_month / 60",
    hammerTimeMapping:{AT:"OH.030",AC:"OH.030",SA:"OH.030",CO:"OH.030",MA:"OH.030"}},
  
  {key:"oh_client_training",section:"oh",name:"Client Training/Q&A",levels:{1:true,2:true,3:true},
    variables:[{key:"sessions_per_month",label:"Sessions/month",type:"number",default:2}],
    lookupType:"role",
    lookupTable:{key:"minutes_per_session",label:"Minutes per Session",rows:{AT:0,AC:30,SA:60,CO:30,MA:15}},
    formula:"sessions_per_month * minutes_per_session / 60",
    hammerTimeMapping:{AT:"OH.040",AC:"OH.040",SA:"OH.040",CO:"OH.040",MA:"OH.040"}},
  
  {key:"oh_issue_resolution",section:"oh",name:"Issue Resolution Buffer",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_month",label:"Minutes per Month",rows:{AT:60,AC:30,SA:60,CO:30,MA:15}},
    formula:"minutes_per_month / 60",
    hammerTimeMapping:{AT:"OH.050",AC:"OH.050",SA:"OH.050",CO:"OH.050",MA:"OH.050"}},
  
  {key:"oh_month_end_review",section:"oh",name:"Month-End Review Meeting",levels:{1:true,2:true,3:true},
    variables:[],
    lookupType:"role",
    lookupTable:{key:"minutes_per_month",label:"Minutes per Month",rows:{AT:0,AC:30,SA:60,CO:60,MA:30}},
    formula:"minutes_per_month / 60",
    hammerTimeMapping:{AT:"OH.060",AC:"OH.060",SA:"OH.060",CO:"OH.060",MA:"OH.060"}},
  
  {key:"oh_adhoc",section:"oh",name:"Ad-Hoc Requests Buffer",levels:{1:true,2:true,3:true},
    variables:[{key:"buffer_hours",label:"Buffer Hours/month",type:"number",default:2}],
    lookupType:"role",
    lookupTable:{key:"allocation_pct",label:"Allocation %",rows:{AT:0.3,AC:0.2,SA:0.2,CO:0.2,MA:0.1}},
    formula:"buffer_hours * allocation_pct",
    hammerTimeMapping:{AT:"OH.070",AC:"OH.070",SA:"OH.070",CO:"OH.070",MA:"OH.070"}}
];

