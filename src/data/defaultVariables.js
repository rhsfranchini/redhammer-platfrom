// src/data/defaultVariables.js
export 
const DEFAULT_VARIABLES={
  client:{label:"Client Questionnaire",color:"#2D3436",tables:{
    software:{label:"Accounting Software",type:"options",options:["Computer Ease","Foundation","Quickbooks Desktop","Quickbooks Online","Sage 100 (Master Builder)","Sage 300 (Timberline)","Viewpoint","Vista","Other"]},
    staff_quality:{label:"Quality of Accounting Staff",type:"multiplier",rows:{"Excellent":0,"Average":0.05,"No Skills/Good Attitude":0.10,"No Staff":0.15,"Bad Attitude":0.20}},
    annual_revenue:{label:"Annual Revenue",type:"multiplier",rows:{"Under $3M":1,"$3M - $5M":1.1,"$5M - $10M":1.15,"$10M - $20M":1.2,"$20M +":1.3}}
  }},
  payroll:{label:"Payroll",color:"#333",tables:{
    payroll_frequency:{label:"Payroll Frequency",type:"multiplier",rows:{"Weekly":4,"Twice Monthly":2,"Monthly":1}}
  }},
  jobcost:{label:"Job Costing",color:"#0891B2",tables:{
    concurrent_jobs:{label:"Avg # Concurrent Jobs",type:"multiplier",rows:{"0-10":60,"10-25":90,"25-50":120,"50+":180}}
  }}
};

export 
const DEFAULT_LEVELS={
  1:{name:'Basic',color:'#6B7280',bgColor:'#F9FAFB',gross_margin:40},
  2:{name:'Standard',color:'#802629',bgColor:'#F9FAFB',gross_margin:45},
  3:{name:'Premium',color:'#4A1516',bgColor:'#F9FAFB',gross_margin:50}
};
