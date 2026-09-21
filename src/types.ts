export type Language = 'bn' | 'en';

export type ServiceCategory = 'all' | 'screen' | 'power' | 'hardware' | 'software';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  iconName: string;
  turnaroundBn: string;
  turnaroundEn: string;
  warrantyBn: string;
  warrantyEn: string;
  startingPrice: number;
  highlight?: boolean;
  featuresBn: string[];
  featuresEn: string[];
}

export interface BrandOption {
  id: string;
  name: string;
  models: string[];
}

export interface ProblemOption {
  id: string;
  nameBn: string;
  nameEn: string;
  basePrice: number;
  turnaroundBn: string;
  turnaroundEn: string;
  warrantyBn: string;
  warrantyEn: string;
  category: string;
}

export type RepairStage = 'received' | 'inspecting' | 'repairing' | 'testing' | 'ready' | 'delivered';

export interface RepairTicket {
  ticketId: string;
  customerName: string;
  phoneLast4: string;
  device: string;
  issueBn: string;
  issueEn: string;
  stage: RepairStage;
  receivedDateBn: string;
  receivedDateEn: string;
  estimatedCost: string;
  technicianNoteBn: string;
  technicianNoteEn: string;
}

export interface ReviewItem {
  id: string;
  authorBn: string;
  authorEn: string;
  locationBn: string;
  locationEn: string;
  device: string;
  rating: number;
  commentBn: string;
  commentEn: string;
  dateBn: string;
  dateEn: string;
  verified: boolean;
}

export interface ShopStat {
  value: string;
  labelBn: string;
  labelEn: string;
}

export interface AnnouncementConfig {
  enabled: boolean;
  textBn: string;
  textEn: string;
  badgeBn?: string;
  badgeEn?: string;
}

export interface ShopInfo {
  nameBn: string;
  nameEn: string;
  taglineBn: string;
  taglineEn: string;
  subtitleBn: string;
  subtitleEn: string;
  email: string;
  phoneHotline: string;
  phoneAlt: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappRaw: string;
  addressBn: string;
  addressEn: string;
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  workingHoursBn: string;
  workingHoursEn: string;
  stats: ShopStat[];
  announcement?: AnnouncementConfig;
  backgroundTheme?: 'tech-circuit' | 'dark-slate' | 'clean-matrix';
}

