import { IBaseModel } from './../typedef/IBaseModel';
import { ISeo } from './ISeo';

export interface IPage extends IBaseModel {
    name: string,
    status: boolean,
    Seo: ISeo
    sections: any,
    parentId?: number,
}
// export interface ISection extends IBaseModel {
//     code: React.Key,
//     description: string,
//     order: number,
//     active: boolean,
//     content: { image: string, text: string, video: string }[],
//     rawHTML?: string
// }

export const fakeData = [
    {
        "id": 1,
        "name": "HomePage",
        "status": true,
    },
    {
        "id": 2,
        "name": "NextGen",
        "status": true,
        "parentId": 1
    },
    {
        "id": 3,
        "name": "Solution",
        "status": true,
        "parentId": 1
    },
    {
        "id": 4,
        "name": "Solution",
        "status": true,
        "parentId": 2
    },
] 