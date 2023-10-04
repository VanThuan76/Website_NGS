import { IYourNextGen } from '@/mocks/website/YNG/YNG_Home/solution';
import { IWebsiteNews } from '../models/INews';
import { IComponents } from './IComponents';
import { ISection } from './ISection';

export interface IBaseSectionComponent {
  section: ISection;
  components: IComponents[];
}
export interface IBaseSectionComponentNews {
  section: ISection;
  components: IWebsiteNews[];
}
export interface IBaseSectionComponentYourNextGen {
  section: ISection;
  components: IYourNextGen[];
}
