export interface ISetting {
  enableSearch: boolean;
  enableFilter: boolean;
  entriesPerPage: number;
  defaultSort: 'asc' | 'desc';
  viewOrder: {
    property: string;
    order: number;
  };
}
export type PageSetting = Record<string, ISetting>;
