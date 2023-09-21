import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  },[]);

  return (
    <div className='flex flex-col gap-16 lg:mx-24 mx-4 my-24 mb-8'>
      <div className='flex lg:flex-row flex-col justify-between w-full'>
        <div data-aos="fade-left" className=' lg:w-1/2'>
          <h1 className='xl:text-7xl lg:text-5xl text-4xl mb-8'>From concept to creation, let's make it happen</h1>
          <p className='text-gray-500'>I'd love to tell you more about my projects and other stuffs. So, connect with me today and let's start a conversation about what matters most to you.</p>
        </div>
        <div data-aos="fade-right" className='lg:w-1/2 flex lg:justify-end justify-center'>
          <img src='https://s6.uupload.ir/files/clip_path_group_lfyy.png' alt='' className="px-8 my-8 lg:my-0 lg:px-0"/>
        </div>
      </div>
      <hr className="opacity-10 w-full"/>

      {/* Footer  */}
      <div className="flex lg:flex-row flex-col justify-between items-center gap-y-10">
        <div>
          <p className='text-gray-500'>Let Talk :</p>
          <h1 className='font-medium text-lg'>SINAB.WORK@GMAIL.COM</h1>
        </div>
        <div>
          <div className='flex flex-row items-center gap-8 md:gap-8 sm:gap-16'>
            <a href='#'>
              <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M9.00001 18C7.22011 18 5.48017 17.4723 4.00019 16.4835C2.52021 15.4947 1.36665 14.0892 0.685374 12.4449C0.00409673 10.8005 -0.174307 8.99104 0.172719 7.24529C0.519746 5.49954 1.37662 3.89589 2.63499 2.6371C3.89337 1.37831 5.49674 0.520903 7.24238 0.1733C8.98801 -0.174304 10.7975 0.00350218 12.4421 0.684236C14.0867 1.36497 15.4925 2.51806 16.4818 3.99771C17.4711 5.47737 17.9994 7.21713 18 8.99704C17.9979 11.3836 17.0491 13.6719 15.3618 15.3597C13.6746 17.0476 11.3866 17.9971 9.00001 18ZM16.1933 10.1662C14.7205 9.73868 13.173 9.63249 11.6556 9.8548C12.2748 11.5415 12.7483 13.2783 13.0706 15.046C13.8966 14.4892 14.5997 13.7691 15.1368 12.9302C15.6738 12.0913 16.0334 11.1513 16.1933 10.1682V10.1662ZM11.846 15.7193C11.5033 13.8329 10.9827 11.9831 10.2911 10.1949L10.2435 10.2108C7.83238 10.9512 5.79074 12.5765 4.52877 14.7604C5.5523 15.5582 6.77055 16.0678 8.05729 16.2364C9.34403 16.405 10.6524 16.2265 11.847 15.7193H11.846ZM3.58771 13.8828C4.96054 11.6565 7.04793 9.9617 9.50872 9.07538C9.60788 9.04464 9.69911 9.01588 9.7953 8.98911C9.61284 8.57461 9.41352 8.1611 9.20032 7.75255C6.76736 8.44895 4.24815 8.79782 1.7175 8.7888C1.7175 8.86317 1.7175 8.93754 1.7175 9.01092C1.71503 10.8106 2.3816 12.547 3.58771 13.8828ZM1.86823 7.51952C4.14152 7.50597 6.40417 7.20782 8.60336 6.63201C7.77987 5.18001 6.87814 3.7738 5.90217 2.41958C4.88182 2.90071 3.98669 3.61149 3.28685 4.49626C2.58701 5.38104 2.10147 6.41579 1.86823 7.51952ZM7.29243 1.92971C8.29021 3.29042 9.19816 4.71478 10.0105 6.19371C11.5089 5.70074 12.8341 4.78758 13.8282 3.56292C12.951 2.78427 11.8986 2.22913 10.7606 1.94477C9.62267 1.6604 8.43283 1.65524 7.29243 1.92971ZM14.6384 4.40878C13.5568 5.7051 12.1553 6.69639 10.5727 7.2845C10.7423 7.63256 10.9049 7.98558 11.0567 8.34058C11.1095 8.46685 11.1618 8.59213 11.2133 8.71641C12.9069 8.54023 14.6174 8.61945 16.2875 8.95143C16.2745 7.29196 15.6928 5.68713 14.6394 4.40481L14.6384 4.40878Z'
                  fill='#7A7A7A'
                />
              </svg>
            </a>

            <a href='#'>
              <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M17.9588 5.29229C17.9442 4.54599 17.8027 3.80761 17.5403 3.10879C17.3082 2.51039 16.9536 1.96702 16.4994 1.51345C16.0452 1.05987 15.5013 0.706084 14.9024 0.474717C14.2033 0.212671 13.4648 0.0711953 12.7183 0.0563224C11.7546 0.0110633 11.4487 0 9.00506 0C6.5614 0 6.25355 0.0110633 5.29279 0.0522994C4.54628 0.0668801 3.8077 0.208365 3.10868 0.470694C2.50698 0.695808 1.96198 1.05011 1.5121 1.50864C1.0548 1.95929 0.700895 2.5039 0.47488 3.10477C0.211062 3.80338 0.067845 4.54171 0.0513384 5.28827C0.0100909 6.25178 3.05176e-05 6.55753 3.05176e-05 9.00152C3.05176e-05 11.4455 0.0100909 11.7513 0.0513384 12.7118C0.0662061 13.4581 0.208072 14.1965 0.470855 14.8953C0.702585 15.4934 1.05661 16.0366 1.5103 16.4902C1.96399 16.9437 2.50736 17.2977 3.10566 17.5293C3.80477 17.7914 4.5433 17.9328 5.28977 17.9477C6.24953 17.99 6.55637 18 9.00003 18C11.4437 18 11.7505 17.99 12.7103 17.9477C13.4568 17.9332 14.1954 17.7917 14.8944 17.5293C15.4929 17.298 16.0364 16.9442 16.4902 16.4906C16.9439 16.037 17.2978 15.4936 17.5292 14.8953C17.7912 14.1963 17.9327 13.458 17.9477 12.7118C17.99 11.7523 18 11.4455 18 9.00253C18 6.55955 18 6.25279 17.9548 5.2933L17.9588 5.29229ZM16.3371 12.6414C16.3312 13.2119 16.2263 13.7772 16.0272 14.3119C15.8771 14.7004 15.6475 15.0532 15.3529 15.3476C15.0584 15.6421 14.7055 15.8717 14.3169 16.0217C13.7819 16.2204 13.2166 16.3252 12.6459 16.3315C11.6962 16.3737 11.4115 16.3838 9.00908 16.3838C6.60667 16.3838 6.31794 16.3737 5.37226 16.3315C4.80152 16.3257 4.23611 16.2209 3.70124 16.0217C3.31029 15.878 2.95679 15.648 2.66703 15.3489C2.3689 15.0585 2.13932 14.7052 1.995 14.3149C1.79622 13.7801 1.69139 13.2149 1.68514 12.6444C1.64289 11.6949 1.63283 11.4103 1.63283 9.00856C1.63283 6.60682 1.64289 6.31816 1.68514 5.37275C1.69091 4.80216 1.79575 4.23691 1.995 3.70219C2.13753 3.31128 2.36737 2.95801 2.66703 2.66928C2.958 2.37088 3.31205 2.14132 3.70325 1.99743C4.23826 1.79875 4.80358 1.69395 5.37428 1.68766C6.32397 1.64542 6.60868 1.63536 9.0111 1.63536C11.4135 1.63536 11.7022 1.64642 12.6479 1.68766C13.2187 1.69353 13.784 1.79834 14.3189 1.99743C14.7098 2.14079 15.0633 2.37044 15.3531 2.66928C15.6513 2.95967 15.8809 3.31289 16.0252 3.7032C16.2239 4.23805 16.3288 4.80322 16.335 5.37376C16.3773 6.32319 16.3874 6.60782 16.3874 9.00957C16.3874 11.4113 16.3763 11.6929 16.335 12.6424L16.3371 12.6414Z'
                  fill='#7A7A7A'
                />
                <path
                  d='M9.00451 4.37805C8.08922 4.37805 7.19449 4.64939 6.43346 5.15775C5.67243 5.66612 5.07928 6.38867 4.72901 7.23405C4.37875 8.07943 4.2871 9.00967 4.46566 9.90712C4.64422 10.8046 5.08498 11.6289 5.73219 12.2759C6.37939 12.923 7.20398 13.3636 8.10167 13.5421C8.99937 13.7206 9.92986 13.629 10.7755 13.2788C11.6211 12.9287 12.3439 12.3357 12.8524 11.5749C13.3609 10.814 13.6323 9.91957 13.6323 9.00454C13.6323 7.77752 13.1447 6.60075 12.2768 5.73311C11.409 4.86548 10.2319 4.37805 9.00451 4.37805ZM9.00451 12.0017C8.41116 12.0017 7.83115 11.8258 7.3378 11.4962C6.84445 11.1667 6.45993 10.6983 6.23287 10.1503C6.00581 9.60223 5.9464 8.99919 6.06215 8.41741C6.17791 7.83563 6.46363 7.30123 6.88319 6.88179C7.30275 6.46235 7.8373 6.17671 8.41924 6.06099C9.00118 5.94526 9.60438 6.00466 10.1526 6.23166C10.7007 6.45866 11.1693 6.84307 11.4989 7.33628C11.8286 7.82949 12.0045 8.40935 12.0045 9.00253C12.0042 9.79787 11.6881 10.5606 11.1255 11.123C10.563 11.6854 9.80007 12.0014 9.00451 12.0017Z'
                  fill='#7A7A7A'
                />
                <path d='M14.8953 4.19503C14.8953 4.40847 14.832 4.61711 14.7134 4.79458C14.5949 4.97205 14.4263 5.11037 14.2291 5.19205C14.0319 5.27373 13.8149 5.2951 13.6056 5.25346C13.3963 5.21182 13.204 5.10904 13.0531 4.95812C12.9021 4.80719 12.7993 4.6149 12.7577 4.40556C12.7161 4.19622 12.7374 3.97924 12.8191 3.78204C12.9008 3.58485 13.0391 3.41631 13.2166 3.29773C13.3941 3.17914 13.6027 3.11584 13.8162 3.11584C14.1024 3.11584 14.3769 3.22955 14.5793 3.43193C14.7816 3.63432 14.8953 3.90881 14.8953 4.19503Z' fill='#7A7A7A' />
              </svg>
            </a>

            <a href='#'>
              <svg width='19' height='16' viewBox='0 0 19 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M19 1.89938C18.2871 2.22268 17.5314 2.43312 16.7581 2.52365C17.5753 2.02993 18.1844 1.23661 18.4651 0.300196C17.7021 0.771584 16.8657 1.10149 15.9934 1.2751C15.6357 0.880544 15.2051 0.564437 14.7274 0.345502C14.2497 0.126568 13.7344 0.00925807 13.2121 0.000526192C12.6899 -0.00820569 12.1712 0.0918177 11.6869 0.294667C11.2026 0.497517 10.7625 0.799069 10.3927 1.18146C10.0247 1.55163 9.73386 1.99601 9.53796 2.48722C9.34206 2.97843 9.24531 3.50605 9.25366 4.03752C9.25605 4.34862 9.28969 4.65861 9.35402 4.96249C7.79174 4.88581 6.26392 4.4599 4.87522 3.71394C3.50455 2.98908 2.29518 1.97514 1.3247 0.737186C0.98782 1.33682 0.80534 2.0162 0.794795 2.71005C0.784251 3.40391 0.945996 4.08891 1.26449 4.69925C1.56716 5.27823 2.00198 5.77156 2.53096 6.13612C1.91309 6.11362 1.30945 5.93771 0.770748 5.62318V5.67312C0.758336 6.61207 1.07296 7.52417 1.65687 8.24201C2.22215 8.96384 3.01373 9.45722 3.89376 9.63622C3.55931 9.72734 3.21495 9.7735 2.86915 9.77356C2.6228 9.77169 2.37692 9.75082 2.13355 9.71113C2.38374 10.5127 2.86903 11.2134 3.52171 11.7153C4.17439 12.2172 4.96191 12.4954 5.77439 12.511C4.40218 13.6457 2.69447 14.255 0.939343 14.2361C0.625598 14.2382 0.31199 14.2219 3.05176e-05 14.1872C1.77876 15.3864 3.85843 16.0168 5.98012 15.9997C7.30642 16.0095 8.62417 15.7789 9.87385 15.3182C11.0091 14.9106 12.0633 14.2922 12.9848 13.4932C13.8436 12.7315 14.5922 11.8457 15.2077 10.8629C15.816 9.90388 16.2853 8.85748 16.6006 7.75716C16.9025 6.70516 17.0573 5.6137 17.0602 4.51613C17.0602 4.28307 17.0562 4.10966 17.0481 3.9959C17.8109 3.41943 18.4713 2.71006 19 1.89938Z'
                  fill='#7A7A7A'
                />
              </svg>
            </a>

            <a href='#'>
              <svg width='19' height='18' viewBox='0 0 19 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M4.00003 6H3.05176e-05V18H4.00003V6Z' fill='#7A7A7A' />
                <path d='M17.6974 6.95989C17.2662 6.498 16.739 6.1344 16.1524 5.89417C15.5658 5.65395 14.9336 5.54281 14.2995 5.56843C13.8209 5.56292 13.344 5.62706 12.8842 5.75879C12.4952 5.86781 12.1305 6.04873 11.8092 6.29203C11.3364 6.64186 10.9358 7.07854 10.6292 7.57831V5.85136H6.56549L6.57821 6.44033C6.58669 6.83298 6.59092 8.04247 6.59092 10.0688C6.59092 12.0952 6.5828 14.7389 6.56654 18H10.6323V11.2152C10.6204 10.879 10.6663 10.5433 10.768 10.2224C10.935 9.81125 11.2051 9.44924 11.5526 9.17064C11.9237 8.88239 12.3855 8.7334 12.8566 8.74995C13.1583 8.72777 13.4606 8.78319 13.7344 8.91088C14.0082 9.03856 14.2441 9.23418 14.4193 9.4788C14.7851 10.0863 14.9594 10.7885 14.9197 11.495V17.9916H18.9855V11.0291C19.089 9.56002 18.6289 8.10648 17.6974 6.95989Z' fill='#7A7A7A' />
                <path d='M2.01087 0.00262467C1.4762 -0.0226914 0.953844 0.180829 0.556996 0.569083C0.375511 0.751066 0.232012 0.972813 0.136077 1.21952C0.0401419 1.46623 -0.00602205 1.73223 0.000666054 1.99977C-0.00545777 2.26493 0.0394298 2.52857 0.132484 2.77399C0.225537 3.0194 0.364728 3.24124 0.541233 3.42544C0.731239 3.61946 0.955422 3.77013 1.20042 3.86848C1.44542 3.96684 1.70623 4.01085 1.96729 3.99791H1.98862C2.52745 4.02388 3.05385 3.81805 3.45269 3.42544C3.63328 3.24432 3.77556 3.02318 3.86981 2.77712C3.96407 2.53107 4.00808 2.26591 3.99882 1.99977C4.0025 1.73308 3.95552 1.46841 3.86078 1.22215C3.76605 0.975888 3.62557 0.753272 3.44806 0.568081C3.25527 0.375295 3.02888 0.225994 2.78211 0.128905C2.53535 0.0318154 2.27316 -0.011114 2.01087 0.00262467Z' fill='#7A7A7A' />
              </svg>
            </a>

            <a href='#'>
              <svg width='29' height='18' viewBox='0 0 29 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M15.1242 12.7742C15.2051 11.7471 14.9179 10.7248 14.3138 9.88999C13.7097 9.05521 12.8283 8.46244 11.827 8.21767C12.5791 7.92727 13.2211 7.4085 13.6628 6.73435C14.1045 6.0602 14.3236 5.2646 14.2893 4.4595C14.2893 0.873993 11.6116 0 8.51812 0H3.05176e-05V18H8.75699C12.0403 18 15.1242 16.4311 15.1242 12.7742ZM3.97116 3.07283H7.69702C9.12915 3.07283 10.4194 3.47359 10.4194 5.12991C10.4194 6.65834 9.416 7.27333 7.99774 7.27333H3.97116V3.07283ZM3.97116 14.9432V9.98591H8.29845C10.0462 9.98591 11.152 10.7117 11.152 12.5557C11.152 14.374 9.83188 14.9421 8.21634 14.9421L3.97116 14.9432Z' fill='#7A7A7A' />
                <path
                  d='M22.7022 17.9816C24.0612 18.0903 25.4152 17.7182 26.5235 16.9313C27.6319 16.1445 28.423 14.9938 28.7562 13.6837H25.6222C25.374 14.2068 24.9745 14.645 24.4745 14.9426C23.9745 15.2403 23.3966 15.3841 22.814 15.3556C22.3773 15.3972 21.9367 15.3408 21.525 15.1905C21.1133 15.0402 20.7411 14.7999 20.4361 14.4874C20.131 14.175 19.9009 13.7984 19.7629 13.3858C19.6248 12.9731 19.5824 12.5349 19.6388 12.1038H28.9693C28.9851 11.8948 28.9998 11.6722 28.9998 11.4475C28.9998 7.66793 26.7621 4.51636 22.7043 4.51636C21.8124 4.49749 20.9261 4.66108 20.1009 4.99691C19.2757 5.33273 18.5292 5.83358 17.9081 6.46815C17.287 7.10272 16.8047 7.85739 16.4912 8.68502C16.1777 9.51264 16.0398 10.3954 16.0861 11.2782C16.084 15.2522 18.6191 17.9816 22.7022 17.9816ZM22.5967 7.16218C22.969 7.1354 23.3427 7.18703 23.6934 7.31367C24.044 7.4403 24.3636 7.63907 24.6312 7.8969C24.8988 8.15473 25.1082 8.46578 25.2458 8.80958C25.3833 9.15337 25.4458 9.52213 25.4292 9.89159H19.6441C19.646 9.51687 19.7252 9.1465 19.8769 8.80323C20.0285 8.45996 20.2494 8.15103 20.5259 7.89542C20.8025 7.63981 21.1288 7.44291 21.4849 7.31682C21.841 7.19073 22.2194 7.1381 22.5967 7.16218Z'
                  fill='#7A7A7A'
                />
                <path d='M19.1048 1H26.1691V3H19.1048V1Z' fill='#7A7A7A' />
              </svg>
            </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
