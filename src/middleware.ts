import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { APP_SAVE_KEY } from './shared/utils/constants';

export default function middleware(request: NextRequest) {
  return NextResponse.next({});

  // try {
  //   const userData = request.cookies.get(APP_SAVE_KEY.USER_DATA);

  //   // Bỏ qua đường dẫn /admin/login
  //   if (request.nextUrl.pathname === '/admin/login') {
  //     return NextResponse.next({});
  //   }

  //   if (userData !== undefined) {
  //     const user = JSON.parse(userData.value as string);
  //     if (user) {
  //       return NextResponse.next({});
  //     }
  //   }
  //   return NextResponse.redirect(new URL('/admin/login', request.url));
  // } catch (e) {
  //   return NextResponse.redirect(new URL('/admin/login', request.url));
  // }
}

// export const config = {
//   matcher: ["/admin/:path*"],
// };
