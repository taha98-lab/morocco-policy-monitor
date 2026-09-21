export type Language = 'en' | 'ar' | 'fr';

export type PromiseStatus = 'not-achieved' | 'partial' | 'achieved' | 'review';

export type ConfidenceLevel = 'High' | 'Medium' | 'Low';

export interface EvidenceEntry {
  date: string;
  source: string;
  type: string;
  summary: string;
}

export interface PromiseRecord {
  id: string;
  area: string;
  areaAr: string;
  title: string;
  titleAr: string;
  target: string;
  targetAr: string;
  status: PromiseStatus;
  statusLabelEn: string;
  statusLabelAr: string;
  confidence: ConfidenceLevel;
  confidenceAr: string;
  mandatePeriod: string;
  officialDeclaration: string;
  officialDeclarationAr: string;
  budgetAllocatedMad: string;
  budgetAllocatedMadAr: string;
  implementationOutputs: string[];
  implementationOutputsAr: string[];
  citizenOutcomes: string[];
  citizenOutcomesAr: string[];
  uncertaintyNotes: string;
  uncertaintyNotesAr: string;
  primarySources: { title: string; institution: string; date: string }[];
  evidenceLog: EvidenceEntry[];
}

export interface IndicatorDataPoint {
  period: string;
  value: number;
  label?: string;
}

export interface EconomicIndicator {
  id: string;
  nameEn: string;
  nameAr: string;
  category: 'gdp' | 'jobs' | 'prices' | 'finance';
  categoryLabelEn: string;
  categoryLabelAr: string;
  currentValue: string;
  unit: string;
  change: string;
  changeDirection: 'up' | 'down' | 'neutral';
  isPositive: boolean | null;
  sourceInstitution: string;
  sourceInstitutionAr: string;
  definitionEn: string;
  definitionAr: string;
  releaseDate: string;
  methodologyEn: string;
  methodologyAr: string;
  historicalSeries: IndicatorDataPoint[];
}

export interface CivicInstitution {
  id: string;
  number: string;
  titleEn: string;
  titleAr: string;
  summaryEn: string;
  summaryAr: string;
  constitutionalReference: string;
  keyResponsibilitiesEn: string[];
  keyResponsibilitiesAr: string[];
  checksAndBalancesEn: string;
  checksAndBalancesAr: string;
  officialBodyEn: string;
  officialBodyAr: string;
}

export interface BudgetFlowStage {
  stageId: 'revenue' | 'allocation' | 'execution' | 'outcomes';
  titleEn: string;
  titleAr: string;
  questionEn: string;
  questionAr: string;
  totalMmdh: number;
  breakdown: {
    nameEn: string;
    nameAr: string;
    amountMmdh: number;
    sharePercent: number;
    detailEn: string;
    detailAr: string;
  }[];
}

export interface MethodologyStep {
  stepNumber: string;
  titleEn: string;
  titleAr: string;
  questionEn: string;
  questionAr: string;
  descriptionEn: string;
  descriptionAr: string;
  auditStandardEn: string[];
  auditStandardAr: string[];
}
