import { IBaseModel } from './../typedef/IBaseModel';
export interface ISeo extends IBaseModel {
    title: string,
    description: string,
    sharedImage: string,
    keywords: string[]
}