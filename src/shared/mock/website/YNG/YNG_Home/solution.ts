import { IComponents } from "src/shared/schemas/typedef/IComponents";
export interface IYourNextGen extends IComponents {
    solutions: Array<string>;
}
export const YNG_Home_Solution_ERP = {
    section: {
        id: 1,
        name: 'Giải pháp Quản lý doanh nghiệp',
        code: 'PG002-1SE00002',
        image: '',
        description: '',
    },
    components: [
        {
            id: 1,
            language: 'vi',
            code: 'PG002-1SE00002CN000001',
            title: 'Ứng dụng cho Văn phòng Điện tử',
            description: 'Cung cấp môi trường làm việc và tương tác trực tuyến cho toàn bộ doanh nghiệp.',
            slug: '',
            content: '',
            image: '',
            video: '',
            thumbnail: '',
            solutions: ["Tin nhắn & Lịch biểu", "Đề xuất & Phê duyệt", "Quản lý giao việc", "Quản lý tài liệu", "Đào tạo trực tuyến"]
        },
        {
            id: 2,
            language: 'vi',
            code: 'PG002-1SE00002CN000002',
            title: 'Ứng dụng cho Quản lý chuỗi cung ứng',
            description: 'Kết nối toàn bộ quy trình trong chuỗi cung ứng trên cùng một nền tảng.',
            slug: '',
            content: '',
            image: '',
            video: '',
            thumbnail: '',
            solutions: ["Quản lý mua hàng", "Quản lý kho", "Quản lý dự án", "Quản lý sản xuất", "Quản lý chất lượng", "Thiết bị và Bảo dưỡng"]
        },
        {
            id: 3,
            language: 'vi',
            code: 'PG002-1SE00002CN000003',
            title: 'Ứng dụng cho Quản lý tài chính',
            description: 'Báo cáo tài chính tập trung, tự động kế thừa từ kết quả hoạt động kinh doanh.',
            slug: '',
            content: '',
            image: '',
            video: '',
            thumbnail: '',
            solutions: ["Kế toán phải thu", "Kế toán phải trả", "Tài sản cố định & Công cụ, dụng cụ", "Kế toán kho", "Kế toán tổng hợp", "Quản lý ngân sách"]
        }
    ]
}

export const YNG_Home_Solution_Sale = {
    section: {
        id: 1,
        name: 'Giải pháp Quản lý Bán hàng',
        code: 'PG002-2SE00002',
        image: '',
        description: '',
    },
    components: [
        {
            id: 1,
            language: 'vi',
            code: 'PG002-2SE00002CN000001',
            title: 'Ứng dụng cho Quản lý bán hàng',
            description:'Trọn bộ ứng dụng quản lý quy trình bán hàng và tự động báo cáo kết quả kinh doanh trên cùng một hệ thống.',
            slug: '',
            content: '',
            image: '',
            video: '',
            thumbnail: '',
            solutions: ["Quản lý khuyến mại & báo giá", "Quản lý khách hàng", "Quản lý hợp đồng", "Hệ thống POS", "Quản lý đại lý & bán sỉ", "Quản lý đội nhóm kinh doanh"]
        },
        {
            id: 2,
            language: 'vi',
            code: 'PG002-2SE00002CN000002',
            title: 'Ứng dụng cho Chăm sóc khách hàng',
            description:'Chăm sóc khách hàng trước, trong và sau bán đa kênh (Call Center, Email, Social,...).',
            slug: '',
            content: '',
            image: '',
            video: '',
            thumbnail: '',
            solutions: ["Quản lý quan hệ khách hàng", "Helpdesk - Chăm sóc sau bán", "Bảo trì & Bảo hành", "Khảo sát khách hàng"]
        },
    ]
}

export const YNG_Home_Solution_HRM = {
    section: {
        id: 1,
        name: 'Giải pháp Quản lý nhân sự',
        code: 'PG002-3SE00002',
        image: '',
        description: '',
    },
    components: [
        {
            id: 1,
            language: 'vi',
            code: 'PG002-3SE00002CN000001',
            title: 'Ứng dụng cho Phát triển tổ chức & Cá nhân',
            description:'Hệ thống đồng hành cùng quá trình phát triển tổ chức và cá nhân.',
            slug: '',
            content: '',
            image: '',
            video: '',
            thumbnail: '',
            solutions: ["Sơ đồ tổ chức", "Đánh giá hiệu suất"]
        },
        {
            id: 2,
            language: 'vi',
            code: 'PG002-3SE00002CN000002',
            title: 'Ứng dụng cho Tuyển dụng & Gia nhập',
            description:'Gia tăng trải nghiệm của nhân sự trong quá trình tuyển dụng và gia nhập.',
            slug: '',
            content: '',
            image: '',
            video: '',
            thumbnail: '',
            solutions: ["Tuyển dụng", "Quy trình gia nhập"]
        },
        {
            id: 3,
            language: 'vi',
            code: 'PG002-3SE00002CN000003',
            title: 'Ứng dụng cho Vận hành dịch vụ nhân sự',
            description:'Số hóa các quy trình định kỳ trong hoạt động vận hành dịch vụ nhân sự.',
            slug: '',
            content: '',
            image: '',
            video: '',
            thumbnail: '',
            solutions: ["Hồ sơ nhân viên", "Quản lý hợp đồng", "Chấm công", "Nghỉ phép & Tăng ca", "Tính lương", "Thuế & Bảo hiểm"]
        },
    ]
}

export const YNG_Home_Solution_Connect = {
    section: {
        id: 1,
        name: 'Giải pháp Quản lý Kết nối',
        code: 'PG002-4SE00002',
        image: '',
        description: '',
    },
    components: [
        {
            id: 1,
            language: 'vi',
            code: 'PG002-4SE00002CN000001',
            title: 'Ứng dụng cho Kết nối vận hành',
            description:'Tích hợp các hệ thống hỗ trợ vận hành ngay trên nền tảng Quản lý doanh nghiệp như Tuyển dụng, ngân hàng, e-learning,...',
            slug: '',
            content: '',
            image: '',
            video: '',
            thumbnail: '',
            solutions: ["Kết nối ngân hàng", "Kết nối tuyển dụng", "Kết nối E-Learning"]
        },
        {
            id: 2,
            language: 'vi',
            code: 'PG002-4SE00002CN000002',
            title: 'Ứng dụng cho Kết nối tiện ích',
            description:'Tích hợp sử dụng các dịch vụ tiện ích ngay trong quy trình vận hành như: Dịch vụ vận chuyển, Chữ ký số, Sàn TMĐT,...',
            slug: '',
            content: '',
            image: '',
            video: '',
            thumbnail: '',
            solutions: ["Chữ ký số", "Sàn TMĐT", "Đơn vị vận chuyển"]
        },
    ]
}