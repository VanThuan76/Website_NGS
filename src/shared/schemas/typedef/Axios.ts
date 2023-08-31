import { APP_SAVE_KEY } from '@/utils/constants';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { IBaseResponse } from './IBaseResponse';

class Axios {
    private api: AxiosInstance;

    constructor(baseURL: string, noAuth: boolean) {
        this.api = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!noAuth) {
            this.api.interceptors.request.use(
                (config) => {
                    const accessToken = this.getAccessToken();

                    if (accessToken) {
                        config.headers.Authorization = `Bearer ${accessToken}`;
                    }
                    return config;
                },
                (error) => {
                    return Promise.reject(error);
                }
            );
        }

        this.handleResponse(this.api)
    }

    handleResponse(axios: AxiosInstance) {
        axios.interceptors.response.use(
            async (response: AxiosResponse) => {
                const originalRequest = response.config
                if (typeof window !== 'undefined') {
                    const statusCode = response.data.statusCode
                    switch (statusCode) {
                        case 403:
                            window.location.href = '/login'
                            deleteCookie(APP_SAVE_KEY.TOKEN_KEY)
                            deleteCookie(APP_SAVE_KEY.REFRESH_TOKEN_KEY)
                            break;
                        case 401:
                            try {
                                await this.refreshToken();
                                // this.api.request(originalRequest)
                            } catch (e) {
                                // window.location.href = '/login'
                            }
                            break;
                        default:
                            break;
                    }
                }
                return response;
            },
            async (error) => {
                const originalRequest = error.config;
                if (error.response.status === 403 && typeof window !== 'undefined') {
                    window.location.href = '/login'
                    deleteCookie(APP_SAVE_KEY.TOKEN_KEY)
                    deleteCookie(APP_SAVE_KEY.REFRESH_TOKEN_KEY)
                }
                if (error.response.status === 401 && typeof window !== 'undefined') {
                    try {
                        await this.refreshToken();
                        // this.api.request(originalRequest)
                    } catch (e) {
                        window.location.href = '/login'
                    }
                }
                return Promise.reject(error);
            }
        );
    }
    async get<T>(url: string, configs?: AxiosRequestConfig): Promise<T> {
        try {
            const response = await this.api.get<T>(url, configs);
            return response.data;
        } catch (error) {
            console.error('GET request failed:', error);
            throw error;
        }
    }

    async post<T>(url: string, data: any, configs?: AxiosRequestConfig): Promise<T> {
        try {
            const response = await this.api.post<T>(url, data, configs);

            return response.data;
        } catch (error) {
            console.error('POST request failed:', error);
            throw error;
        }
    }

    async put<T>(url: string, data?: any, configs?: AxiosRequestConfig): Promise<T> {
        try {
            const response = await this.api.put<T>(url, data, configs);
            return response.data;
        } catch (error) {
            console.error('PUT request failed:', error);
            throw error;
        }
    }

    async delete<T>(url: string, configs?: AxiosRequestConfig): Promise<T> {
        try {
            const response = await this.api.delete<T>(url, configs);
            return response.data;
        } catch (error) {
            console.error('DELETE request failed:', error);
            throw error;
        }
    }

    private getAccessToken(): string {
        return getCookie(APP_SAVE_KEY.TOKEN_KEY) as string || 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTM0ODA5ODksInVzZXJfbmFtZSI6ImR1bmd0cWQyIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJqdGkiOiIzODIwMDRmNi1kYjc4LTRhZDAtOGFlZi1kNThjYzVmZDFkNjAiLCJjbGllbnRfaWQiOiJzcHJpbmdiYW5rQ2xpZW50Iiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl19.MxhFRtk5qLoftXL9DfRj2Pj5IFuUQ1araQlYcfk0fF27P_WS8ajeo4wk7Xvb3fudAg1w9JC8EWkEmBjvXozlaEnKGuH_aT5SgI_MM5oqzkb2sbf3m8CtQC8s4M9tLvRNHRSUFCoLISagxPYpSP6Obwz7U-0R7Kqrvh9lt1ZmJgyGrTU0vpnqlHZFC3GGHFd-vM5TQN7ZVHsQ7OMKth0QJkHgbF9daJu98r12GGchxPvgNWANcUUZNwleL_uDDSwhxlQ4HEIwPo7ONnQ-KnaYPqpwoYqGHwWdDLwLv4XvKgMftgOoPOmWus3_l0BYoo9tQCdg_uTDcaAg5ai-sEb0aA'
    }
    private getRefreshToken(): string {
        return getCookie(APP_SAVE_KEY.REFRESH_TOKEN_KEY) as string
    }
    private async refreshToken() {
        if (!getCookie(APP_SAVE_KEY.REFRESH_TOKEN_KEY)) throw Error('No Token in cookie')
        try {
            const Xaxios = axios.create(
                {
                    baseURL: process.env.NEXT_PUBLIC_DEV_API_URL,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )
            this.handleResponse(Xaxios)
            const data = await Xaxios.post<IBaseResponse<any>>(`/auth/refresh-token`,
                {
                    refreshToken: this.getRefreshToken()
                })
            const res = data.data.data
            if (!res.token) throw Error('No Token in cookie')
            setCookie(APP_SAVE_KEY.TOKEN_KEY, res.token)
            setCookie(APP_SAVE_KEY.REFRESH_TOKEN_KEY, res.refreshToken)
            setCookie(APP_SAVE_KEY.LOGIN_STATUS, 'true')
            window.location.reload()
        } catch (e) {
            console.log(e)
            throw Error('Call api refreshToken fail')
        }
    }
}


export const axiosInstance = new Axios(process.env.NEXT_PUBLIC_DEV_API_URL || 'http://localhost:3001', false);
export const axiosInstanceNoAuth = new Axios(process.env.NEXT_PUBLIC_DEV_API_URL || 'http://localhost:3001', true);
export const axiosInstanceUMS = new Axios(process.env.NEXT_PUBLIC_DEV_UMS_API_URL || 'http://localhost:3001', true);
export const axiosInstanceUMSNoAuth = new Axios(process.env.NEXT_PUBLIC_DEV_UMS_API_URL || 'http://localhost:3001', true);


