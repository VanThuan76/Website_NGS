export interface IComponents {
  id: number;
  language: string;
  code: string;
  title: string;
  description: string;
  slug: string;
  content: string;
  image: string;
  video: string;
  thumbnail: string;
}
export interface IComponentsCreate {
  language: string;
  title: string;
  code: string;
  description: string;
  content: string;
  image: string;
  video: string;
  thumbnail: string;
  companyId: number;
  sectionId: number;
}

export interface IComponentById {
  active: boolean;
  isDelete: boolean;
  createdDate: string;
  updatedDate: string;
  id: number;
  language: string;
  code: string;
  title: string;
  description: string;
  slug: string;
  content: string;
  image: string;
  video: string;
  thumbnail: string;
}
