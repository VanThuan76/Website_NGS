export interface ISection {
  id: number;
  name: string;
  code: string;
  image: string;
  description: string;
}
export interface ISectionCreate {
  code: string;
  name: string;
  description: string;
  image: string;
  companyId: number;
  pageId: number;
}
