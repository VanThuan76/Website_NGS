import { IComponents } from "src/shared/schemas/typedef/IComponents";
export interface IYourNextGen extends IComponents {
    solutions: Array<string>;
}
export const YNG_Home_Solution_ERP = {
    section: {
        id: 1,
        name: 'Giải pháp ERP',
        code: 'TY1232323454',
        image: '',
        description: '',
    },
    components: [
        {
            id: 1,
            language: 'vi',
            code: 'CPN12312',
            title: 'Ứng dụng cho E-Office',
            description:'We set the right processes and methodologies to boost innovation labs and digital product discoveries.',
            slug: '',
            content: '',
            image: '',
            video: '',
            thumbnail: '',
            solutions: ["Messenger & Lịch biểu", "Đề xuất & Phê duyệt", "Quản lý giao việc", "Quản lý tài liệu", "E-Learning"]
        },
        {
            id: 1,
            language: 'vi',
            code: 'CPN12312',
            title: 'Ứng dụng cho Quản lý chuỗi cung ứng',
            description:'We set the right processes and methodologies to boost innovation labs and digital product discoveries.',
            slug: '',
            content: '',
            image: '',
            video: '',
            thumbnail: '',
            solutions: ["Quản lý mua hàng", "Quản lý kho", "Quản lý dự án", "Quản lý sản xuất", "Quản lý chất lượng", "Thiết bị và Bảo dưỡng"]
        },
    ]
}