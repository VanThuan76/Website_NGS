export const pageAdminData = [
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
export const pageAdminEditorData = [{
    "id": 1,
    "name": "Banner",
    "description": "Junonia genoveua",
    "order": 1,
    "code": "HO_banner",
    "isArray": true
}, {
    "id": 3,
    "name": "Giải pháp",
    "description": "Zonotrichia capensis",
    "order": 3,
    "code": "HO_solution",
    "isArray": true
},
{
    "id": 4,
    "name": "Bảo mật",
    "description": "Zonotrichia capensis",
    "order": 4,
    "code": "HO_security",
    "isArray": true
},
{
    "id": 6,
    "name": "Về chúng tôi",
    "description": "Zonotrichia capensis",
    "order": 6,
    "code": "HO_whyUs",
    "isArray": true
},
{
    "id": 7,
    "name": "Sự kiện",
    "description": "Zonotrichia capensis",
    "order": 7,
    "code": "HO_event",
    "isArray": true
},
{
    "id": 8,
    "name": "Tin tức",
    "description": "Zonotrichia capensis",
    "order": 8,
    "code": "HO_news",
    "isArray": true
},
{
    "id": 9,
    "name": "Đối tác",
    "description": "Zonotrichia capensis",
    "order": 9,
    "code": "HO_partner",
    "isArray": true
},
{
    "id": 10,
    "name": "Lời chứng thực",
    "description": "Zonotrichia capensis",
    "order": 10,
    "code": "HO_testimonial",
    "isArray": true
}]
export const pageSectionData = {
    "HO_banner": [
        {
            title: "Công nghệ bảo mật hệ thống bán vé VNA",
            description:
                "Chúng tôi tự hào chia sẻ những case study đặc biệt, trong đó chúng tôi đã giúp các khách hàng vượt qua thách thức và đạt được thành công đáng kể",
            image:
                "/images/background_1.png",
        },
        {
            title: "Bộ máy Marketting",
            description:
                "Chúng tôi tự hào chia sẻ những case study đặc biệt, trong đó chúng tôi đã giúp các khách hàng vượt qua thách thức và đạt được thành công đáng kể",
            image:
                "/images/background_2.png",
        },
        {
            title: "Công nghệ bảo mật thông tin",
            description:
                "Chúng tôi tự hào chia sẻ những case study đặc biệt, trong đó chúng tôi đã giúp các khách hàng vượt qua thách thức và đạt được thành công đáng kể",
            image:
                "/images/background_3.png",
        },
    ],
    "HO_solution": [
        {
            title: "Enterprise Application",
            description: "NGS (Next-Generation Solutions) là NGS nỗ lực trở thành doanh nghiệp"
        },
        {
            title: "Call Center",
            description: "NGS (Next-Generation Solutions) là NGS nỗ lực trở thành doanh nghiệp",
        },
        {
            title: "Application Managed",
            description: "NGS (Next-Generation Solutions) là NGS nỗ lực trở thành doanh nghiệp",
        },
        {
            title: "DX Strategy",
            description: "NGS (Next-Generation Solutions) là NGS nỗ lực trở thành doanh nghiệp",
        },
    ],
    "HO_security": [
        {
            title: "SOC",
            image: "/mockSVG/HO_SECURITY_icon.svg"
        },
        {
            title: "Penetration Testing",
            image: "/mockSVG/HO_SECURITY_icon_1.svg"
        },
        {
            title: "Penetration Testing",
            image: "/mockSVG/HO_SECURITY_icon.svg"
        },
        {
            title: "Penetration Testing",
            image: "/mockSVG/HO_SECURITY_icon_1.svg"
        },
        {
            title: "Penetration Testing",
            image: "/mockSVG/HO_SECURITY_icon.svg"
        },
        {
            title: "Penetration Testing",
            image: "/mockSVG/HO_SECURITY_icon.svg"
        },
        {
            title: "Penetration Testing",
            image: "/mockSVG/HO_SECURITY_icon.svg"
        },
        {
            title: "Penetration Testing",
            image: "/mockSVG/HO_SECURITY_icon.svg"
        },
        {
            title: "Penetration Testing",
            image: "/mockSVG/HO_SECURITY_icon.svg"
        },
    ],
    "HO_whyUs": [
        {
            key: 1,
            title: "Sáng tạo",
            description:
                "Với khát vọng trở thành người đồng hành trao quyền cho mọi cá nhân và tổ chức, NGS cam kết luôn nỗ lực phát triển những giải pháp công nghệ thông tin tối ưu",
        },
        {
            key: 2,
            title: "Linh hoạt",
            description:
                "NGS nỗ lực trở thành doanh nghiệp hàng đầu Việt Nam, cung cấp các giải pháp - dịch vụ thông minh; đem lại giá trị lớn và phù hợp nhất cho khách hàng.",
        },
        {
            key: 3,
            title: "Tập trung khách hàng",
            description:
                "Được cung cấp bởi Công ty NGS.IT với các sản phẩm công nghệ thông tin như bản quyền phần mềm; giải pháp phần mềm; giải pháp hạ tầng công nghệ thông tin và các dịch vụ công nghệ thông tin.",
        },
    ],
    "HO_event": [
        {
            title: "WorkShop",
            channel: "Offline",
            description:
                "Đổi mới tự động hoá trong thời đại 4.0",
            address: "Phòng New York, Tầng 4, Toà 6th Element",
            time: "20 thg 7 2023",
            image:
                "https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-nen-may-bay-vietnam-airline.jpg",
        },
        {
            title: "WorkShop",
            channel: "Offline",
            description:
                "Đổi mới tự động hoá trong thời đại 4.0",
            address: "Phòng New York, Tầng 4, Toà 6th Element",
            time: "20 thg 7 2023",
            image:
                "https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-nen-may-bay-vietnam-airline.jpg",
        },
        {
            title: "On board",
            channel: "Online",
            description:
                "Chào mừng thành viên NGS mới gia nhập",
            time: "20 thg 7 2023",

            address: "Phòng Công nghệ, Tầng 4, Toà 6th Element",
            image:
                "https://vanhoadoisong.vn/wp-content/uploads/2022/10/51-background-hinh-nen-powerpoint-ve-marketing-full-hd-thumbnail.jpg",
        },
        {
            title: "Training",
            channel: "Online",
            description:
                "Chúng tôi tự hào chia sẻ những case study đặc biệt, trong đó chúng tôi đã giúp các khách hàng vượt qua thách thức và đạt được thành công đáng kể",
            address: "Phòng Toronto, Tầng 4, Toà 6th Element",
            time: "20 thg 7 2023",
            image:
                "https://c4.wallpaperflare.com/wallpaper/624/21/247/microsoft-windows-windows-10-technology-hi-tech-wallpaper-preview.jpg",
        },
    ],
    "HO_news": [
        {
            category: "Công nghệ",
            createAt: "14, July 2023",
            title: "Tầm quan trọng của đánh giá trải nghiệm khách hàng",
            description: "Tầm quan trọng của đánh giá trải nghiệm khách hàng cần được quan tâm như thế nào? Các yếu tố Tầm quan trọng của đánh giá trải nghiệm khách hàng cần được quan tâm như thế nào? Các yếu tố",
            author: "Nguyễn Xuân Minh",
        },
        {
            category: "Công nghệ",
            createAt: "14, July 2023",
            title: "5 dấu hiệu bạn đã sẵn sàng sử dụng một hệ thống CRM",
            description: "5 dấu hiệu bạn đã sẵn sàng sử dụng một hệ thống CRM",
            author: "Nguyễn Xuân Minh",

        },
        {
            category: "Công nghệ",
            createAt: "14, July 2023",
            title: "Tầm quan trọng của đánh giá trải nghiệm khách hàng",
            description: "Tầm quan trọng của đánh giá trải nghiệm khách hàng cần được quan tâm như thế nào? Các yếu tố Tầm quan trọng của đánh giá trải nghiệm khách hàng cần được quan tâm như thế nào? Các yếu tố",
            author: "Nguyễn Xuân Minh",
        }
    ],
    "HO_partner": [
        {
            title: "Công ty TNHH Fivetran",
            rank: "Đối tác hạng đồng",
            description: "Fivesdasdsdtran là đối tác đã bước đi cùng NGS quang đường 5 năm. Với sự hợp tác  về công nghệ và dịch vụ. Hai bên cùng hợp tác trong lĩnh vực hàng hóa vận chuyển lớn",
            image: "/partner2.svg"
        },
        {
            title: "Công ty TNHH Fivetran",
            rank: "Đối tác hạng đồng",
            description: "Fivetra21321321n là đối tác đã bước đi cùng NGS quang đường 5 năm. Với sự hợp tác  về công nghệ và dịch vụ. Hai bên cùng hợp tác trong lĩnh vực hàng hóa vận chuyển lớn",
            image: "/partner2.svg"
        },
        {
            title: "Công ty TNHH Fivetran",
            rank: "Đối tác hạng đồng",
            description: "Fivetran wqeqweqwlà đối tác đã bước đi cùng NGS quang đường 5 năm. Với sự hợp tác  về công nghệ và dịch vụ. Hai bên cùng hợp tác trong lĩnh vực hàng hóa vận chuyển lớn",
            image: "/partner2.svg"
        },
        {
            title: "Công ty TNHH Fivetran",
            rank: "Đối tác hạng đồng",
            description: "Fivetran là đ231223ối tác đã bước đi cùng NGS quang đường 5 năm. Với sự hợp tác  về công nghệ và dịch vụ. Hai bên cùng hợp tác trong lĩnh vực hàng hóa vận chuyển lớn",
            image: "/partner2.svg"
        },
        {
            title: "Công ty TNHH Fivetran",
            rank: "Đối tác hạng đồng",
            description: "Fivetran là đ231223ối tác đã bước đi cùng NGS quang đường 5 năm. Với sự hợp tác  về công nghệ và dịch vụ. Hai bên cùng hợp tác trong lĩnh vực hàng hóa vận chuyển lớn",
            image: "/partner2.svg"
        }, {
            title: "Công ty TNHH Fivetran",
            rank: "Đối tác hạng đồng",
            description: "Fivetran là đ231223ối tác đã bước đi cùng NGS quang đường 5 năm. Với sự hợp tác  về công nghệ và dịch vụ. Hai bên cùng hợp tác trong lĩnh vực hàng hóa vận chuyển lớn",
            image: "/partner2.svg"
        },
        {
            title: "Công ty TNHH Fivetran",
            rank: "Đối tác hạng đồng",
            description: "Fivetran là đ231223ối tác đã bước đi cùng NGS quang đường 5 năm. Với sự hợp tác  về công nghệ và dịch vụ. Hai bên cùng hợp tác trong lĩnh vực hàng hóa vận chuyển lớn",
            image: "/partner2.svg"
        }, {
            title: "Công ty TNHH Fivetran",
            rank: "Đối tác hạng đồng",
            description: "Fivetran là đ231223ối tác đã bước đi cùng NGS quang đường 5 năm. Với sự hợp tác  về công nghệ và dịch vụ. Hai bên cùng hợp tác trong lĩnh vực hàng hóa vận chuyển lớn",
            image: "/partner2.svg"
        }
    ],
    "HO_testimonial": [
        {
            name: "Bà Nguyễn A Bê cê",
            position: "CEO",
            description:
                "Giải pháp giải quyết các vấn đề cốt lõi: dự trù đặt hàng kém hiệu quả, thống nhất quy trình bán hàng đa kênh, quản lý KPI, quản lý chính sách bán hàng, khuyến mại, chăm sóc khách",
            image:
                "https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-nen-may-bay-vietnam-airline.jpg",
        },
        {
            name: "Ong Nguyễn A Bê cê",
            position: "CEO123",
            description:
                "Lorem ipsum dolor sit amet consectetur. Malesuada nunc congue dignissim ut hendrerit id et fusce urna. Faucibus tempor viverra at nulla molestie hac. Morbi imperdiet vitae scelerisque in gravida purus egestas  entum eget. Maecenas tortor sem vulputate ue cursus pharetra at. Nunc elementum sed pellentesque ipsum nisl ultricies quam aliquam. Ante sodales nibh a egestas nunc tempor dis imperdiet a. Curabitur porttitor c blandit tellus ipsum arcu nec lorem bibendum iaculis aliquam. Neque adipiscing etiam a eget mauris fermentum ullamcorper volutpat id. Egestas gravida porttitor accumsan eu amet sapien nibh. Vel purus nunc lacus aliquam.",
            image:
                "https://vanhoadoisong.vn/wp-content/uploads/2022/10/51-background-hinh-nen-powerpoint-ve-marketing-full-hd-thumbnail.jpg",
        },
        {
            name: "Chu Nguyễn A Bê cê",
            position: "CEO123",
            description:
                "Giải pháp giải quyết các vấn đề cốt lõi: dự trù đặt hàng kém hiệu quả, thống nhất quy trình bán hàng đa kênh, quản lý KPI, quản lý chính sách bán hàng, khuyến mại, chăm sóc khách",
            image:
                "https://c4.wallpaperflare.com/wallpaper/624/21/247/microsoft-windows-windows-10-technology-hi-tech-wallpaper-preview.jpg",
        }
    ]
}