export const fakeMenu = [
    {
        id: 1,
        title: "Tương lai tiên phong",
        menuChild: [
            {
                title: "Digital Consulting",
                path: "",
                menuChild: []
            },
            {
                title: "Digital Transformation Implementation",
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
        title: "Chuyển đổi số",
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
        title: "Bảo mật kinh doanh",
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
        title: "Trung tâm tài năng",
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
        id: 5,
        title: "Khơi nguồn thành công",
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
    }
]
export interface IMenu {
    id: number;
    title: string;
    menuChild: IMenuChild2[];
}

export interface IMenuChild2 {
    title: string;
    path: string;
    menuChild: IMenuChild3[][];
}

export interface IMenuChild3 {
    title: string;
    path: string;
    menuChild: any[];
}