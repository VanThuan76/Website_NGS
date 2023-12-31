export const APP_SAVE_KEY = {
  LOCALE: process.env.NEXT_PUBLIC_APP_NAME + '::locale',
  TOKEN_KEY: process.env.NEXT_PUBLIC_APP_NAME + '::token_key',
  USER_DATA: process.env.NEXT_PUBLIC_APP_NAME + ':user_data',
  REFRESH_TOKEN_KEY: process.env.NEXT_PUBLIC_APP_NAME + '::refresh_token_key',
  LOGIN_STATUS: process.env.NEXT_PUBLIC_APP_NAME + '::login_status',
  CURRENT_LANG: process.env.NEXT_PUBLIC_APP_NAME + '::lang',
};
export const SCREENTYPE = {
  MOBILE: 'sm',
  IPAD: 'md',
  TABLET: 'lg',
  DESKTOP: 'xl',
};
export const URLS_SYSTEM = {
  ES: '/empower-success',
  NOTFOUND: '/404',
  ADMIN: {
    PAGES_MANAGE: {
      UPDATE: '/admin/pages-manage/update/',
    },
  },
};
export const URLS_EXTERNAL = {
  ISPACE_EDU: 'https://ispace.edu.vn/',
};
