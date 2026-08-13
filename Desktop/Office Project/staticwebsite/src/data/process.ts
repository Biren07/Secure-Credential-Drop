export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We meet with you to discuss project goals, site parameters, architectural preferences, and budgetary constraints.',
    iconName: 'MessageSquare',
  },
  {
    step: '02',
    title: 'Planning & Design',
    description: 'Our engineers & architects draft 2D/3D plans, perform ETABS structural calculations, and finalize municipal submission drawings.',
    iconName: 'FileSpreadsheet',
  },
  {
    step: '03',
    title: 'Costing & Estimation',
    description: 'We generate an itemized Bill of Quantities (BOQ), material schedules, and contractor budget forecasts to eliminate financial surprises.',
    iconName: 'Calculator',
  },
  {
    step: '04',
    title: 'Project Supervision',
    description: 'Our licensed engineers perform rigorous site inspections during rebar placement, concrete casting, and structural assembly.',
    iconName: 'HardHat',
  },
  {
    step: '05',
    title: 'Completion',
    description: 'We conduct final structural quality verification, complete municipal compliance sign-offs, and hand over your project.',
    iconName: 'CheckCircle2',
  },
];
