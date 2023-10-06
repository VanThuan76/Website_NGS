import React from 'react';
export interface IPage {
  id: React.Key;
  name: string;
  active?: boolean;
}
export interface IDetailPageByCompany {
  id: number;
  name: string;
  seo: string;
  description: string;
  image: string;
  views: number;
}
interface Company {
  active: boolean;
  isDelete: boolean;
  createdDate: string;
  updatedDate: string;
  id: number;
  name: string;
  phone: string;
  taxCode?: any;
  address: string;
  issuedDate: string;
  career: string;
  legalRepresentation: string;
}
export interface IDetailPageById {
  active: boolean;
  isDelete: boolean;
  createdDate: string;
  updatedDate: string;
  id: number;
  company: Company;
  name: string;
  seo: string;
  description: string;
  image?: any;
  views: number;
}
