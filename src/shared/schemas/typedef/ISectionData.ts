export interface SectionData {
  title: string;
  description: string;
  image: string;
  link : string;
  keyword : string;
  content: string;
}
export interface ISection {
  id: number;
  name: string;
  description: string;
  order: number;
  code: string;
  isArray : boolean
}