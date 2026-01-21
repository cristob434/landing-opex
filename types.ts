import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

export interface TrainingProgram {
  title: string;
  level: string;
  description: string;
  tags: string[];
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  METHODOLOGY = 'methodology',
  TRAINING = 'training',
  CONTACT = 'contact'
}