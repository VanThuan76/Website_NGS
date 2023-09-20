export const YNG_ERP_solution = [
    {
        name: "Ứng dụng cho E-Office",
        description: "We set the right processes and methodologies to boost innovation labs and digital product discoveries.",
        solutions: ["Messenger & Lịch biểu", "Đề xuất & Phê duyệt", "Quản lý giao việc", "Quản lý tài liệu", "E-Learning"]
    },
    {
        name: "Ứng dụng cho Quản lý chuỗi cung ứng",
        description: "We set the right processes and methodologies to boost innovation labs and digital product discoveries.",
        solutions: ["Quản lý mua hàng", "Quản lý kho", "Quản lý dự án", "Quản lý sản xuất", "Quản lý chất lượng", "Thiết bị và Bảo dưỡng"]
    },
    {
        name: "Ứng dụng cho Quản lý tài chính",
        description: "We set the right processes and methodologies to boost innovation labs and digital product discoveries.",
        solutions: ["Kế toán phải thu", "Kế toán phải trả", "Tài sản cố định & Công cụ dụng cụ", "Kế toán kho", "Kế toán tổng hợp", "Quản lý ngân sách"]
    }
]
export interface IYNGYourNextGenSolution {
  name: string;
  description: string;
  solutions: string[];
}