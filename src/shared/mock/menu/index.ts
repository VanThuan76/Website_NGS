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
                        title: "Feature Solution",
                        path: "/digital-consulting",
                        menuChild: [
                            {
                                title: "Digital Strategy & Planning",
                                path: "/digital-strategy-planning",
                                menuChild: []
                            },
                        ]
                    },
                ]
            },
            {
                title: "Digital Transformation Implementation",
                path: "",
                menuChild: [
                    {
                        title: "Customer Engagement",
                        path: "/digital-transformation-implementation",
                        menuChild: [
                            {
                                title: "Customer Data Platform",
                                path: "/customer-data-platform",
                                menuChild: []
                            },
                            {
                                title: "Customer Relationship Management",
                                path: "/customer-relationship-management",
                                menuChild: []
                            },
                        ]
                    },
                    {
                        title: "Business Core Operation",
                        path: "/digital-transformation-implementation",
                        menuChild: [
                            {
                                title: "Core Banking",
                                path: "/core-banking",
                                menuChild: []
                            },
                            {
                                title: "Core Insurance",
                                path: "/core-insurance",
                                menuChild: []
                            },
                            {
                                title: "Core Airline",
                                path: "/core-airline",
                                menuChild: []
                            },
                            {
                                title: "Core Oil & Gas",
                                path: "/core-oil-gas",
                                menuChild: []
                            },
                        ]
                    },
                    {
                        title: "ERP management",
                        path: "/transform-your-organization",
                        menuChild: [
                            {
                                title: "Enterprise Resource Planning",
                                path: "/enterprise-resource-planning",
                                menuChild: []
                            },
                            {
                                title: "Supply Chain Management",
                                path: "/supply-chain-management",
                                menuChild: []
                            },
                            {
                                title: "Financial Management",
                                path: "/financial-management",
                                menuChild: []
                            },
                            {
                                title: "Spend Management",
                                path: "/spend-management",
                                menuChild: []
                            },
                            {
                                title: "Core Banking",
                                path: "/core-banking",
                                menuChild: []
                            },
                            {
                                title: "Human Capital Management",
                                path: "/human-capital-management",
                                menuChild: []
                            },
                            {
                                title: "Small and Midsize Enterprises",
                                path: "/small-and-midsize-enterprises",
                                menuChild: []
                            },
                            {
                                title: "Extended Planning and Analysis",
                                path: "/extended-planning-and-analysis",
                                menuChild: []
                            },
                            {
                                title: "Data and Analytics",
                                path: "/data-and-analysis",
                                menuChild: []
                            },
                        ]
                    }
                ]
            },
            {
                title: "IT Management Service",
                path: "",
                menuChild: [
                    {   
                        title: "Feature Solution",
                        path: "/it-management-service",
                        menuChild: [
                            {
                                title: "Application Management Services",
                                path: "/application-management-services",
                                menuChild: []
                            },
                        ]
                    },
                ]
            },
            {
                title: "IT Service",
                path: "",
                menuChild: [
                    {   
                        title: "Feature Solution",
                        path: "/it-service",
                        menuChild: [
                            {
                                title: "Application development & modernization",
                                path: "/application-development-modernization",
                                menuChild: []
                            },
                            {
                                title: "Resource Fulfillment by competencies",
                                path: "/resource-fulfillment-by-competencies",
                                menuChild: []
                            },
                        ]
                    },
                ]
            },
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
export const defaultMenu3:IMenuChild3  = {
    title: "Not found",
    path: "",
    menuChild: []
}
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
    menuChild: IMenuChild4[];
}
export interface IMenuChild4 {
    title: string;
    path: string;
    menuChild: any[];
}