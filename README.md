# DOcument Guide

## Before code

1. Nodejs 16+
2. Yarn or npm
3. Enable tsLint, prettier in your edior. (Notice setting prettier file path refer to <b>.prettierrc</b>)
4. Git clone <url>

## Techstack

- next 13 page router
- frame-motion
- radix/shadui
- redux
- react-query
- tailwind-css (khái niệm mobile first, làm mobile đầu tiên)

## Run

- install lib: `yarn install`
- start dev: `yarn dev`
- format code : `yarn format`
- check lint : `yarn lint`

- install lib: `npm install`
- start dev: `npm run dev`

## Tổ chức code :

- pages : trang web (Lưu ý các trang page,section,component được tổ chức theo mã định danh(khác mã code thuần) -> thống nhất để dễ hiểu)
- shared :
  - components :
    - business : các component theo nghiệp vụ
    - common : các component dùng chung
    - core : các component như table , form 
    - icons : icon export từ figma về thành file svg
    - layout : Page Layout
  - hooks : các custom hook , còn lại sử dụng từ thư viện use-hook
  - mocks : để mockup dữ liệu fake
  - schema:
    - models : định nghĩa type các đối tượng, và các service (api call)
    - typeDef : Kiểu dữ liệu cơ sở
  - stores: quản lý state
  - utils:
    - contants : hằng số
    - functions : hàm tiện ích
- styles : các file style
- public :
  - locales : đa ngôn ngữ

## Git flow

- name convention:
  - Tính năng : feature/devname-featureName (Ví dụ feature/sypv-booking)
  - Bug : fix/devname-featureName
  - Refactor: refactor/devname-featureName
- Create new Branch:
  - Git fetch origin
  - git checkout -b new-local-branch origin/develop
- Before create merge
  - Git fetch origin
  - Git rebase origin/develop then do rebase flow
  - Git push -f
  - Don't commit .env file

## Khái niệm landing page
- Page: page trong landing page là một trang web độc lập
- Section: section là một khu vực hoặc khối nội dung trên trang
- Component: component theo ngữ cảnh dùng reactJs là những file có thể tái sử dụng lại giữa các sections(ví dụ button,...)

## Lưu ý với website NGS
- Các folder, file được đặt tên theo ký tự(ngắn) của trang page/ đã được định nghĩa sẵn trong figma
- Tổ chức page, section, component rõ ràng để tránh bị trùng lắp
- Chú ý dữ liệu đặc biệt có khoảng cách hoặc cần thể hiện theo figma. Ngăn cách bằng dấu "." hoặc quy ước riêng
  + Trường content: YNG_Common_Introduction_Section