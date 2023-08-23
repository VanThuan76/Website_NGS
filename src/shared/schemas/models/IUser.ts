import { IBaseModel } from "../typedef/IBaseModel";


export interface IUser extends IBaseModel {
    id: number;
    userName: string;
    fullName: string;
    phoneNumber: string;
    email: string;
    role: string,
    organizationDto: string,
}

