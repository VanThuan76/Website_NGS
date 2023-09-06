import React, { SVGProps } from 'react';

export default function MouseScroll({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <path
        d='M19.9255 39.5606C19.7506 39.5606 19.5829 39.4911 19.4592 39.3675C19.3356 39.2438 19.2661 39.0761 19.2661 38.9013V29.9782C19.2661 29.8033 19.3356 29.6356 19.4592 29.512C19.5829 29.3883 19.7506 29.3188 19.9255 29.3188C20.1003 29.3188 20.268 29.3883 20.3917 29.512C20.5153 29.6356 20.5848 29.8033 20.5848 29.9782V38.8837C20.5871 38.9717 20.5718 39.0594 20.5397 39.1414C20.5077 39.2234 20.4595 39.2982 20.398 39.3613C20.3365 39.4244 20.2631 39.4746 20.1819 39.5088C20.1007 39.543 20.0135 39.5606 19.9255 39.5606Z'
        fill='white'
        fillOpacity='0.5'
      />
      <path
        d='M19.9253 39.5603C19.7632 39.5606 19.6067 39.5011 19.4857 39.3933L15.5297 35.9296C15.4647 35.8718 15.4118 35.8019 15.3739 35.7237C15.336 35.6455 15.3139 35.5607 15.3088 35.4739C15.3037 35.3872 15.3157 35.3003 15.3442 35.2182C15.3726 35.1361 15.417 35.0604 15.4747 34.9955C15.5325 34.9306 15.6024 34.8776 15.6806 34.8397C15.7588 34.8018 15.8437 34.7797 15.9304 34.7746C16.0171 34.7695 16.104 34.7815 16.1861 34.81C16.2682 34.8385 16.3439 34.8828 16.4088 34.9406L20.3648 38.4043C20.4304 38.4607 20.4841 38.5295 20.5229 38.6067C20.5617 38.6839 20.5848 38.7681 20.591 38.8543C20.5971 38.9405 20.5861 39.0271 20.5586 39.109C20.5311 39.191 20.4877 39.2667 20.4308 39.3318C20.3678 39.4039 20.2901 39.4616 20.2029 39.501C20.1157 39.5404 20.021 39.5607 19.9253 39.5603Z'
        fill='white'
        fillOpacity='0.5'
      />
      <path
        d='M19.9251 39.5603C19.7904 39.5616 19.6585 39.5215 19.5473 39.4455C19.436 39.3695 19.3507 39.2613 19.3028 39.1354C19.2549 39.0094 19.2468 38.8719 19.2794 38.7412C19.3121 38.6104 19.384 38.4929 19.4855 38.4043L23.4416 34.9406C23.5065 34.8828 23.5822 34.8385 23.6643 34.81C23.7464 34.7815 23.8333 34.7695 23.92 34.7746C24.0067 34.7797 24.0916 34.8018 24.1698 34.8397C24.248 34.8776 24.3179 34.9306 24.3756 34.9955C24.4334 35.0604 24.4777 35.1361 24.5062 35.2182C24.5347 35.3003 24.5467 35.3872 24.5416 35.4739C24.5365 35.5607 24.5144 35.6455 24.4765 35.7237C24.4386 35.8019 24.3856 35.8718 24.3207 35.9296L20.3647 39.3933C20.2443 39.5022 20.0874 39.5618 19.9251 39.5603Z'
        fill='white'
        fillOpacity='0.5'
      />
      <path
        d='M22.3559 26.6944H17.4899C15.7291 26.692 14.0411 25.9915 12.7961 24.7465C11.551 23.5014 10.8505 21.8134 10.8482 20.0526V7.30534C10.8464 6.43161 11.0169 5.5661 11.3498 4.75827C11.6827 3.95044 12.1715 3.21612 12.7883 2.59728C13.4051 1.97843 14.1378 1.4872 14.9445 1.15163C15.7512 0.81607 16.6162 0.642761 17.4899 0.641607H22.3559C23.229 0.640452 24.0938 0.811362 24.9009 1.14457C25.708 1.47778 26.4415 1.96675 27.0595 2.58356C27.6775 3.20036 28.168 3.9329 28.5028 4.73931C28.8376 5.54573 29.0102 6.41021 29.0108 7.28337V20.0526C29.0102 20.9258 28.8376 21.7902 28.5028 22.5967C28.168 23.4031 27.6775 24.1356 27.0595 24.7524C26.4415 25.3692 25.708 25.8582 24.9009 26.1914C24.0938 26.5246 23.229 26.6955 22.3559 26.6944ZM17.4899 1.96029C16.0785 1.96145 14.7252 2.52265 13.7272 3.52067C12.7292 4.51869 12.168 5.87195 12.1668 7.28337V20.0526C12.1692 21.4636 12.7307 22.8162 13.7285 23.814C14.7263 24.8118 16.0789 25.3733 17.4899 25.3757H22.3559C23.0558 25.3768 23.7492 25.24 24.3963 24.9731C25.0434 24.7062 25.6315 24.3143 26.1271 23.82C26.6226 23.3256 27.0159 22.7384 27.2845 22.092C27.553 21.4456 27.6915 20.7526 27.6921 20.0526V7.30534C27.6944 6.60351 27.5581 5.90814 27.2908 5.25917C27.0236 4.61021 26.6307 4.02045 26.1349 3.52376C25.639 3.02708 25.0499 2.63327 24.4014 2.36496C23.7528 2.09665 23.0577 1.95913 22.3559 1.96029H17.4899Z'
        fill='white'
        fillOpacity='0.5'
      />
      <path
        d='M19.9255 11.591C19.7506 11.591 19.5829 11.5215 19.4592 11.3979C19.3356 11.2742 19.2661 11.1065 19.2661 10.9316V7.62174C19.2661 7.44687 19.3356 7.27917 19.4592 7.15552C19.5829 7.03187 19.7506 6.9624 19.9255 6.9624C20.1003 6.9624 20.268 7.03187 20.3917 7.15552C20.5153 7.27917 20.5848 7.44687 20.5848 7.62174V10.9316C20.5848 11.1065 20.5153 11.2742 20.3917 11.3979C20.268 11.5215 20.1003 11.591 19.9255 11.591Z'
        fill='white'
        fillOpacity='0.5'
      />
    </svg>
  );
}
