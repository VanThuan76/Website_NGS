import { IBaseModel } from "../typedef/IBaseModel";

export interface ISection extends IBaseModel {
    name: string
    description: string,
    order: number,
    content: any,
    code: string,
    type: 'single' | 'loop'
}

export const fakeData = [{
    "id": 1,
    "name": "Banner",
    "description": "Junonia genoveua",
    "order": 1,
    "code": "HO_banner"
}, {
    "id": 2,
    "name": "Người NGS",
    "description": "Meles meles",
    "order": 2,
    "code": "HO_solution"
}, {
    "id": 3,
    "name": "Tin tức",
    "description": "Zonotrichia capensis",
    "order": 3,
    "code": "HO_3"
}, {
    "id": 4,
    "name": "Footer",
    "description": "Bubalus arnee",
    "order": 4,
    "code": "HO_4"
}, {
    "id": 5,
    "name": "Call us",
    "description": "unavailable",
    "order": 5,
    "code": "HO_5"
}]