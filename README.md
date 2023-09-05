# DOcument Guide

## Before code

1. Nodejs 16+
2. Yarn
3. Enable tsLint, prettier in your edior. (Notice setting prettier file path refer to <b>.prettierrc</b>)

## Techstack

- next 13 page router
- frame-motion
- radix/shadui
- redux
- react-query
- tailwind-css

## Run

- install lib: `yarn install`
- start dev: `yarn dev`
- format code : `yarn format`
- check lint : `yarn lint`

## Tổ chức code :

- pages : trang web (Lưu ý các trang page,section,component được tổ chức theo mã định danh(khác mã code thuần) -> thống nhất để dễ hiểu)
- shared :
  - components :
    - business : các component theo nghiệp vụ
    - common : các component dùng chung
    - core : các component như table , form (lúc đầu định build nhưng vì thời gian nên dùng của antd)
    - icons : icon export từ figma về thành file svg
    - layout : Page Layout
  - hooks : các custom hook , còn lại sử dụng từ thư viện use-hook
  - mocks : để mockup dữ liệu sử dụng json-server
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