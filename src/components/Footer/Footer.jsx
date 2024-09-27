import React from 'react';
import './Footer.css'
import logo2 from '../../assets/logo2.jpeg'

const Footer = () =>{
  return (
    <footer className="footer">
    <div className='bid'>
    <div><svg xmlns="http://www.w3.org/2000/svg" width="107" height="109" viewBox="0 0 107 109" fill="none">  <path d="M100.054 109H20.3626C9.11647 109 0 99.921 0 88.7247V6.82578C0 3.05419 3.0668 0 6.85396 0H83.7372C96.5359 0 106.908 10.3362 106.908 23.0788V102.181C106.908 105.949 103.844 109.003 100.057 109.003" fill="white"/>  <path d="M37.6407 68.8985C36.735 68.8985 35.6755 68.4493 35.0705 67.8538L22.8173 55.7694C22.062 55.0241 21.7612 54.1291 21.7612 53.2341C21.7612 52.3391 22.2158 51.2943 22.8173 50.6988L25.5414 48.0137C25.8456 47.7142 26.4471 47.7142 26.9017 48.0137C27.2024 48.3098 27.2024 48.9088 26.9017 49.3545L24.1776 52.0396C23.8734 52.3391 23.723 52.7848 23.723 53.2341C23.723 53.6833 23.8734 54.1291 24.1776 54.4286L36.4308 66.513C36.735 66.8125 37.1861 66.9588 37.6407 66.9588C38.0953 66.9588 38.5499 66.809 38.8507 66.513L41.5713 63.828C41.8755 63.5285 42.4805 63.5285 42.9316 63.828C43.2358 64.1275 43.2358 64.723 42.9316 65.1722L40.2075 67.8573C39.6025 68.6025 38.5429 68.902 37.6372 68.902L37.6407 68.8985Z" fill="#0C77A2"/>  <path d="M30.2308 45.6247C29.9266 45.6247 29.7762 45.475 29.6259 45.3253C29.3216 45.0292 29.3216 44.4302 29.6259 43.9845L42.9386 30.8553C43.2429 30.5558 43.8443 30.5558 44.2989 30.8553C44.6032 31.1513 44.6032 31.7503 44.2989 32.1961L30.9862 45.3253C30.8358 45.6247 30.5316 45.6247 30.2308 45.6247Z" fill="#0C77A2"/>  <path d="M56.4018 51.5903C56.0976 51.5903 55.9472 51.4406 55.7968 51.2908C55.4961 50.9948 55.4961 50.3958 55.7968 49.9501L59.1259 46.6695C59.4266 46.37 60.0316 46.37 60.4862 46.6695C60.7904 46.969 60.7904 47.5645 60.4862 48.0138L57.1571 51.2943C56.8529 51.4441 56.5522 51.5938 56.4018 51.5938V51.5903Z" fill="#0C77A2"/>  <path d="M46.2675 61.439C45.9633 61.439 45.8129 61.2892 45.6626 61.1395C45.3618 60.84 45.3618 60.2444 45.6626 59.7952L48.9916 56.5146C49.2924 56.2186 49.8973 56.2186 50.3519 56.5146C50.8065 56.8141 50.6562 57.4097 50.3519 57.8589L47.0229 61.1395C46.8725 61.439 46.5683 61.439 46.2675 61.439Z" fill="#0C77A2"/>  <path d="M79.6981 85.9038C78.184 85.9038 76.8237 85.3083 75.6137 84.2635L48.9882 57.8589C48.684 57.5594 48.684 56.9639 48.9882 56.5147L55.6428 49.9501C55.7932 49.8003 56.0974 49.6506 56.2478 49.6506C56.3982 49.6506 56.7024 49.8003 56.8528 49.9501L83.4783 76.2049C84.5379 77.2497 85.1428 78.7402 85.1428 80.2342C85.1428 81.7282 84.5379 83.069 83.4783 84.2635C82.5691 85.3083 81.2088 85.9038 79.6946 85.9038H79.6981ZM50.957 57.2599L76.9775 82.9193C77.7329 83.6645 78.6421 83.964 79.6981 83.964C80.7542 83.964 81.6669 83.5183 82.4222 82.9193C83.1776 82.174 83.4818 81.279 83.4818 80.2342C83.4818 79.1895 83.0272 78.2945 82.4222 77.5492L56.4017 52.0396L50.957 57.2599Z" fill="#0C77A2"/> <path d="M63.6648 44.284C63.3605 44.284 63.2102 44.1342 63.0598 43.9845C62.7591 43.685 62.7591 43.0895 63.0598 42.6402L65.7839 39.9552C66.0881 39.6557 66.2385 39.2099 66.2385 38.7607C66.2385 38.3114 66.0881 37.8656 65.7839 37.5661L53.5307 25.4817C53.2265 25.1822 52.7754 25.036 52.3208 25.036C51.8662 25.036 51.4116 25.1857 51.1108 25.4817L48.3902 28.1668C48.086 28.4663 47.481 28.4663 47.0299 28.1668C46.7257 27.8708 46.7257 27.2718 47.0299 26.826L49.754 24.141C50.5094 23.3957 51.4186 23.0962 52.3243 23.0962C53.23 23.0962 54.2895 23.542 54.8945 24.141L67.1477 36.2254C67.903 36.9706 68.2073 37.8656 68.2073 38.7607C68.2073 39.6557 67.7527 40.7004 67.1477 41.2959L64.4236 43.981C64.2732 44.2805 63.969 44.2805 63.6683 44.2805L63.6648 44.284Z" fill="#0C77A2"/>  <path d="M44.2988 66.5095C43.5435 66.5095 42.6343 66.21 42.1797 65.6145L25.0832 48.9053C23.8733 47.7108 23.8733 45.7745 25.0832 44.58L26.1428 43.5352C26.7478 42.9362 27.5031 42.6402 28.2584 42.6402C29.0138 42.6402 29.923 42.9397 30.3776 43.5352L30.8322 43.981L47.3201 60.241C48.5301 61.4355 48.5301 63.3752 47.3201 64.5663L46.5648 65.611C45.9598 66.2065 45.2045 66.506 44.2953 66.506L44.2988 66.5095ZM28.2619 44.58C27.9612 44.58 27.657 44.7297 27.3562 44.8795L26.447 45.9242C25.9924 46.37 25.9924 47.1187 26.447 47.5645L43.5435 64.2737C43.6938 64.4235 43.9981 64.5732 44.4492 64.5732C44.7534 64.5732 45.0541 64.4235 45.3584 64.2737L46.4179 63.229C46.8725 62.7832 46.8725 62.0345 46.4179 61.5887L45.9633 61.1429L29.1711 44.883C28.8669 44.7332 28.5662 44.5835 28.2619 44.5835V44.58Z" fill="#0C77A2"/>  <path d="M61.696 49.3546C60.9372 49.3546 60.0315 49.0551 59.5769 48.4595L42.4804 31.7503C41.2705 30.5558 41.2705 28.6195 42.4804 27.425L43.54 26.3802C44.145 25.7812 44.9003 25.4852 45.6556 25.4852C46.411 25.4852 47.3202 25.7847 47.7748 26.3802L64.8712 43.2357C65.4762 43.8312 65.7804 44.5765 65.7804 45.3218C65.7804 46.067 65.4762 46.962 64.8712 47.4113L63.8117 48.4561C63.3571 49.0516 62.6017 49.3511 61.696 49.3511V49.3546ZM45.6591 27.425C45.3584 27.425 45.0542 27.5748 44.7534 27.7245L43.6939 28.7693C43.2393 29.215 43.2393 29.9638 43.6939 30.4095L60.7903 47.2685C60.9407 47.4183 61.2449 47.5645 61.6995 47.5645C62.1541 47.5645 62.3045 47.4148 62.6052 47.2685L63.6648 46.2237C63.8151 46.074 63.969 45.778 63.969 45.3287C63.969 45.0327 63.8151 44.7332 63.6648 44.4337L46.5683 27.7245C46.2641 27.5748 45.9634 27.425 45.6591 27.425Z" fill="#0C77A2"/>
    <img src={logo2} alt="BidHub" className="bidImage" /></svg></div>
    <div className='logoText'>
  <svg xmlns="http://www.w3.org/2000/svg" width="146" height="73" viewBox="0 0 146 73" fill="none">
  <path d="M0.314862 34.6212H4.22791L8.23887 25.7198H26.6536L30.6157 34.6212H34.7245L19.3031 0.680332H15.7293L0.307861 34.6212H0.314862ZM9.73905 22.2965L17.4742 5.11361L25.164 22.2965H9.73905ZM55.1291 35.2027C60.8325 35.2027 65.5674 32.8416 68.7111 30.0486V16.6164H54.7409V20.0363H65.0358V28.4118C62.7139 30.2889 59.1365 31.7794 55.2724 31.7794C47.0547 31.7794 41.8792 25.8138 41.8792 17.7726V17.6716C41.8792 10.1668 47.247 3.85989 54.7374 3.85989C59.5212 3.85989 62.4236 5.44793 65.0323 7.7081L67.4977 4.82455C64.1126 1.9828 60.5808 0.346008 54.8773 0.346008C44.7292 0.346008 37.9102 8.52649 37.9102 17.7726V17.8667C37.9102 27.4959 44.4844 35.2027 55.1256 35.2027M77.6492 34.6212H81.4679V0.92411H77.6492V34.6212ZM91.3746 34.6212H114.237V31.1073H95.1933V0.92411H91.3746V34.6212ZM121.294 34.6212H145.996V31.156H125.113V19.3607H143.577V15.8921H125.113V4.38924H145.752V0.920628H121.291V34.6177L121.294 34.6212Z" fill="white"/>
  <path d="M28.8147 54.3463H32.3711C33.8013 54.3463 34.9028 54.5169 35.6687 54.8547C36.438 55.1925 37.0429 55.7114 37.4906 56.4114C37.9347 57.1114 38.1585 57.888 38.1585 58.7447C38.1585 59.5422 37.9626 60.2701 37.5745 60.9248C37.1828 61.5795 36.6093 62.1123 35.854 62.5198C36.7912 62.8367 37.5115 63.2093 38.0186 63.6377C38.5256 64.066 38.9173 64.5814 39.1971 65.1874C39.4768 65.7934 39.6202 66.4516 39.6202 67.1585C39.6202 68.6003 39.0921 69.8192 38.0326 70.8152C36.973 71.8112 35.5533 72.3127 33.7698 72.3127H28.8147V54.3463ZM30.5806 56.1049V61.8581H31.6122C32.8641 61.8581 33.7873 61.7432 34.3783 61.5098C34.9693 61.2765 35.4344 60.9108 35.7806 60.4093C36.1267 59.9079 36.2981 59.3541 36.2981 58.7412C36.2981 57.9193 36.0079 57.2751 35.4309 56.8049C34.8539 56.3383 33.9342 56.1015 32.6718 56.1015H30.5841L30.5806 56.1049ZM30.5806 63.662V70.5505H32.8152C34.1335 70.5505 35.0987 70.4217 35.7141 70.1674C36.3296 69.9097 36.8226 69.5092 37.1933 68.966C37.5675 68.4192 37.7528 67.8306 37.7528 67.1933C37.7528 66.3958 37.4906 65.6993 36.966 65.1038C36.4415 64.5083 35.7211 64.1008 34.8049 63.8814C34.1895 63.7352 33.1194 63.662 31.5982 63.662H30.5771H30.5806Z" fill="white"/>
  <path d="M43.5017 53.5522C43.8934 53.5522 44.2256 53.6915 44.5018 53.9667C44.7781 54.2453 44.918 54.5761 44.918 54.9696C44.918 55.3632 44.7781 55.6836 44.5018 55.9587C44.2256 56.2338 43.8899 56.3731 43.5017 56.3731C43.1136 56.3731 42.7883 56.2338 42.5121 55.9587C42.2358 55.6836 42.0959 55.3527 42.0959 54.9696C42.0959 54.5866 42.2358 54.2453 42.5121 53.9667C42.7883 53.6915 43.1171 53.5522 43.5017 53.5522ZM42.6485 59.0233H44.3655V72.3127H42.6485V59.0233Z" fill="white"/>
  <path d="M61.2556 53.8935V72.3127H59.5631V70.0281C58.8428 70.8988 58.035 71.5535 57.1398 71.9958C56.2446 72.4346 55.2654 72.654 54.2023 72.654C52.314 72.654 50.7019 71.9714 49.3626 70.6097C48.0268 69.2446 47.3589 67.5869 47.3589 65.6332C47.3589 63.6795 48.0338 62.0845 49.3836 60.7228C50.7334 59.3646 52.356 58.682 54.2513 58.682C55.3458 58.682 56.339 58.9153 57.2237 59.3785C58.1119 59.8417 58.8882 60.5382 59.5596 61.468V53.897H61.2521L61.2556 53.8935ZM54.3912 60.3293C53.4365 60.3293 52.5553 60.5626 51.744 61.0292C50.9362 61.4959 50.2928 62.1541 49.8137 63.0004C49.3346 63.8466 49.0969 64.7416 49.0969 65.6854C49.0969 66.6292 49.3381 67.5172 49.8207 68.3704C50.3033 69.2237 50.9502 69.8888 51.7615 70.3659C52.5728 70.843 53.447 71.0799 54.3772 71.0799C55.3074 71.0799 56.2061 70.843 57.0488 70.3729C57.8916 69.9028 58.5385 69.262 58.9896 68.4575C59.4442 67.653 59.668 66.7441 59.668 65.7376C59.668 64.2018 59.161 62.9168 58.1434 61.8825C57.1258 60.8482 55.8739 60.3327 54.3877 60.3327L54.3912 60.3293Z" fill="white"/>
  <path d="M72.3513 54.3463H74.1557V61.8825H83.3421V54.3463H85.1465V72.3127H83.3421V63.6411H74.1557V72.3127H72.3513V54.3463Z" fill="white"/>
  <path d="M89.0316 59.0233H90.7486V65.2292C90.7486 66.7441 90.829 67.7854 90.9933 68.3565C91.2381 69.1714 91.7067 69.8157 92.3991 70.2858C93.0915 70.7595 93.9168 70.9928 94.8749 70.9928C95.8331 70.9928 96.6444 70.763 97.3123 70.3033C97.9802 69.8436 98.4418 69.2376 98.6936 68.4889C98.8649 67.9769 98.9523 66.8904 98.9523 65.2292V59.0233H100.704V65.5461C100.704 67.3779 100.491 68.757 100.061 69.6868C99.6307 70.6167 98.9873 71.3411 98.1236 71.8669C97.2598 72.3928 96.1793 72.654 94.8784 72.654C93.5776 72.654 92.4935 72.3928 91.6228 71.8669C90.7521 71.3411 90.1016 70.6097 89.6715 69.6694C89.2414 68.7292 89.0281 67.3152 89.0281 65.4242V59.0233H89.0316Z" fill="white"/>
  <path d="M104.631 72.3092V53.89H106.348V61.3044C107.065 60.4268 107.873 59.7686 108.761 59.3333C109.653 58.8979 110.629 58.6785 111.688 58.6785C113.576 58.6785 115.185 59.3611 116.521 60.7228C117.857 62.0879 118.525 63.7422 118.525 65.6889C118.525 67.6356 117.85 69.2515 116.503 70.6097C115.157 71.9714 113.534 72.6505 111.639 72.6505C110.552 72.6505 109.569 72.4172 108.688 71.954C107.807 71.4908 107.027 70.7943 106.348 69.8645V72.3057H104.631V72.3092ZM111.499 71.0033C112.454 71.0033 113.335 70.7699 114.143 70.2998C114.951 69.8331 115.594 69.1749 116.07 68.3287C116.545 67.4824 116.787 66.5874 116.787 65.6401C116.787 64.6929 116.545 63.7944 116.066 62.9412C115.584 62.0879 114.94 61.4193 114.125 60.9457C113.311 60.472 112.447 60.2318 111.524 60.2318C110.601 60.2318 109.695 60.4686 108.849 60.9457C108.006 61.4228 107.355 62.0636 106.904 62.868C106.453 63.6725 106.226 64.5814 106.226 65.5914C106.226 67.1307 106.733 68.4157 107.751 69.45C108.765 70.4844 110.017 70.9998 111.499 70.9998V71.0033Z" fill="white"/>
   <h2><span>AGILE</span></h2><h5>Bid Hub</h5></svg></div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="1029" height="2" viewBox="0 0 1125 2" fill="none">
  <path d="M0 1H1125" stroke="white"/>
</svg>    
<div className='footerItems'>
<div className='footerItem1'>
  <ul>
    <li className='footerHeader'>Reach Us</li>
    <div className='fitem'> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none"><path d="M18.1426 10.999H19.8997C19.8997 5.869 16.4971 2 11.9839 2V4C15.5526 4 18.1426 6.943 18.1426 10.999Z" fill="white"/>  <path d="M11.9927 7.99999C13.8403 7.99999 14.6284 8.89699 14.6284 11H16.3855C16.3855 7.77499 14.826 5.99999 11.9927 5.99999V7.99999ZM14.9991 13.443C14.8303 13.2683 14.6085 13.1752 14.3804 13.1832C14.1524 13.1912 13.936 13.2998 13.777 13.486L11.6746 15.947C11.1686 15.837 10.1512 15.476 9.10395 14.287C8.0567 13.094 7.73954 11.933 7.64554 11.361L9.80592 8.96699C9.9697 8.78612 10.0652 8.53982 10.0723 8.2802C10.0793 8.02059 9.99735 7.76804 9.8437 7.57599L6.59741 3.51299C6.4437 3.32035 6.23006 3.2035 6.00188 3.18725C5.77369 3.17101 5.54893 3.25665 5.37533 3.42599L3.46885 5.28699C3.31695 5.46051 3.22629 5.69145 3.21406 5.93599C3.20088 6.18599 2.94962 12.108 6.98398 16.702C10.5035 20.707 14.9121 21 16.1263 21C16.3038 21 16.4127 20.994 16.4417 20.992C16.6565 20.9783 16.8593 20.8747 17.011 20.701L18.6451 18.53C18.794 18.3325 18.8694 18.0768 18.8553 17.817C18.8412 17.5573 18.7387 17.3141 18.5696 17.139L14.9991 13.443Z" fill="white"/></svg> 
    <li>+254 758 497 753</li></div>
    <div className='fitem'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none"> <path d="M19.8996 4H2.32837V20H19.8996V4ZM18.1425 8L11.114 13L4.0855 8V6L11.114 11L18.1425 6V8Z" fill="white"/>   </svg>
    <li>info@agilebidhub.com</li></div>
    <div className='fitem'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none"> <path d="M11.1141 1.5C9.19249 1.50258 7.35021 2.3726 5.99141 3.91922C4.63261 5.46584 3.86824 7.56276 3.86597 9.75C3.86367 11.5374 4.37663 13.2763 5.32615 14.7C5.32615 14.7 5.52382 14.9963 5.55611 15.039L11.1141 22.5L16.6748 15.0353C16.7038 14.9955 16.9021 14.7 16.9021 14.7L16.9028 14.6978C17.8518 13.2747 18.3645 11.5366 18.3623 9.75C18.36 7.56276 17.5956 5.46584 16.2368 3.91922C14.878 2.3726 13.0358 1.50258 11.1141 1.5ZM11.1141 12.75C10.5928 12.75 10.0832 12.5741 9.64981 12.2444C9.21637 11.9148 8.87855 11.4462 8.67906 10.8981C8.47957 10.3499 8.42738 9.74667 8.52907 9.16473C8.63077 8.58279 8.8818 8.04824 9.25041 7.62868C9.61901 7.20912 10.0886 6.9234 10.5999 6.80764C11.1112 6.69189 11.6411 6.7513 12.1228 6.97836C12.6044 7.20542 13.016 7.58994 13.3056 8.08329C13.5952 8.57664 13.7498 9.15666 13.7498 9.75C13.7489 10.5453 13.471 11.3078 12.9769 11.8702C12.4828 12.4326 11.8129 12.749 11.1141 12.75Z" fill="white"/>
    </svg><li>P.O Box 28245-00100 GPO,<br></br>Nairobi,Kenya.</li></div>
  </ul>
  </div>
  <div className='company-footer'>
  <ul className='company'>
    <li className='footerHeader'>Company</li>
    <li>About</li>
    <li>Contact</li>
    <li>Blogs</li>
  </ul>
  <ul className='legal'>
    <li className='footerHeader'>Legal</li>
    <li>Privacy Policy</li>
    <li>Terms & Services</li>
    <li>Terms Of Use</li>
    <li>Refund Policy</li>
  </ul>
  <ul className='qlinks'>
    <li className='footerHeader'>Quick Links</li>
    <li>Services</li>
    <li>Downloads</li>
    <li>Forum</li>
  </ul>
  </div>
   <form className="footerForm">
   <h2>Join our newsletter</h2>
    <input className="finput"type="email" placeholder='Your email address' />
    <button className="fbutton">Subscribe</button>
    <h5>* We'll send you weekly updates for your better tool management</h5>
   </form>
    </div>
    </footer>
  );
}

export default Footer;
