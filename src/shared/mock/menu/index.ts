export const fakeMenu = [
    {
        id: 1,
        title: "Giải pháp tiên phong",
        menuChild: [
            {
                title: "ERP",
                path: "/erp",
                menuChild: []
            },
            {
                title: "CRM",
                path: "",
                menuChild: [
                    {
                        title: "Infrastructure as a Service",
                        path: "/service",
                        menuChild: []
                    },
                    {
                        title: "Data as a Service",
                        path: "/service",
                        menuChild: []
                    },
                    {
                        title: "System Migration Service",
                        path: "/service",
                        menuChild: []
                    }
                ]
            },
            {
                title: "Digital Foundation",
                path: "",
                menuChild: [
                    {
                        title: "Infrastructure as a Service",
                        path: "/service",
                        menuChild: []
                    },
                    {
                        title: "Data as a Service",
                        path: "/service",
                        menuChild: []
                    },
                    {
                        title: "System Migration Service",
                        path: "/service",
                        menuChild: []
                    }
                ]
            }
            ,
            {
                title: "IT Management Service",
                path: "",
                menuChild: [
                    {
                        title: "Infrastructure as a Service",
                        path: "/service",
                        menuChild: []
                    },
                    {
                        title: "Data as a Service",
                        path: "/service",
                        menuChild: []
                    },
                    {
                        title: "System Migration Service",
                        path: "/service",
                        menuChild: []
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Dịch vụ xuất sắc",
        path: "",
        menuChild: [
            {
                title: "Digital Consulting",
                path: "",
                menuChild: [
                    {
                        title: "Infrastructure as a Service",
                        path: "/service",
                        menuChild: []
                    },
                    {
                        title: "Data as a Service",
                        path: "/service",
                        menuChild: []
                    },
                    {
                        title: "System Migration Service",
                        path: "/service",
                        menuChild: []
                    }
                ]
            },
            {
                title: "Digital Foundation",
                path: "",
                menuChild: [
                    {
                        title: "Infrastructure as a Service",
                        path: "/service",
                        menuChild: []
                    },
                    {
                        title: "Data as a Service",
                        path: "/service",
                        menuChild: []
                    },
                    {
                        title: "System Migration Service",
                        path: "/service",
                        menuChild: []
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Bảo mật xuất sắc",
        path: "",
        menuChild: [
            {
                title: "Digital Consulting",
                path: "",
                menuChild: [
                    {
                        title: "Infrastructure as a Service",
                        path: "/service",
                        menuChild: []
                    },
                    {
                        title: "Data as a Service",
                        path: "/service",
                        menuChild: []
                    },
                    {
                        title: "System Migration Service",
                        path: "/service",
                        menuChild: []
                    }
                ]
            },
            {
                title: "Digital Foundation",
                path: "",
                menuChild: [
                    {
                        title: "Infrastructure as a Service",
                        path: "/service",
                        menuChild: []
                    },
                    {
                        title: "Data as a Service",
                        path: "/service",
                        menuChild: []
                    },
                    {
                        title: "System Migration Service",
                        path: "/service",
                        menuChild: []
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Về chúng tôi",
        path: "",
        menuChild: [
        ]
    }
]
export interface IMenu {
    id: number;
    path?: string;
    title: string;
    menuChild: IMenuChild2[];
}

export interface IMenuChild2 {
    title: string;
    path: string;
    menuChild: IMenuChild3[];
}

export interface IMenuChild3 {
    title: string;
    path: string;
    menuChild: any[];
}