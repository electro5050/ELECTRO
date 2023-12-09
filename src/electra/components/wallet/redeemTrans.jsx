import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';
import Button from 'react-bootstrap/Button';
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form } from 'react-bootstrap';

const containerStyle = {
  background: 'rgb(0, 0, 0)',
  height: '30vh',
  borderRadius: '0.6vw',
  width: '30%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const RedeemTrans = ({handleButtonClick, selectedButton})  => {

  const [selectedAccountType, setSelectedAccountType] = useState('upi');

  const handleAccountTypeClick = (type) => {
    setSelectedAccountType(type);
  };

  
  return (
    <div style={{marginTop:"5vh"}}>
      <div className='font-6'>
      To continue with the transaction please chose a payment method.
      </div>

    <div className='d-flex' style={{marginTop:"5vh", alignItems:"center"}}>
      <div className={`redeem-options  ${selectedAccountType === 'upi' ? 'selected' : ''}`} onClick={() => handleAccountTypeClick('upi')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="165" height="76" viewBox="0 0 165 76" fill="none">
              <g filter="url(#filter0_d_1_414)">
                <g filter="url(#filter1_d_1_414)">
                  <path d="M15.8071 55.3699H16.8222L15.8715 59.332C15.7265 59.9142 15.7588 60.367 15.9521 60.6581C16.1455 60.9492 16.5 61.0947 17.0317 61.0947C17.5473 61.0947 17.9824 60.9492 18.3208 60.6581C18.6591 60.367 18.8847 59.9142 19.0297 59.332L19.9804 55.3699H21.0117L20.0449 59.429C19.8354 60.3023 19.4648 60.9653 18.917 61.402C18.3852 61.8386 17.6762 62.065 16.8061 62.065C15.936 62.065 15.3398 61.8548 15.0175 61.4181C14.6953 60.9815 14.6308 60.3185 14.8403 59.4452L15.8071 55.3699ZM20.8667 61.8871L22.478 55.1111L25.5395 59.0894C25.6201 59.2026 25.7006 59.3158 25.7812 59.4452C25.8618 59.5746 25.9423 59.7201 26.039 59.8818L27.1186 55.3699H28.0693L26.458 62.1297L23.332 58.0706L23.0903 57.731C23.0097 57.6016 22.9453 57.4884 22.8969 57.3429L21.8173 61.871H20.8667V61.8871ZM27.9887 61.8871L29.5356 55.3699H30.5669L29.02 61.8871H27.9887ZM30.4863 61.8871L32.0332 55.3699H35.562L35.3525 56.2755H32.8549L32.4682 57.8927H34.9658L34.7402 58.8145H32.2426L31.5175 61.871H30.4863V61.8871ZM35.1591 61.8871L36.706 55.3699H37.7373L36.1904 61.8871H35.1591ZM37.6567 61.8871L39.2036 55.3699H42.7324L42.5229 56.2755H40.0253L39.6386 57.9089H42.1362L41.9106 58.8307H39.413L38.9135 60.933H41.4111L41.1855 61.8871H37.6567ZM42.3779 61.8871L43.9248 55.3699H45.3105C46.2129 55.3699 46.8413 55.4184 47.1796 55.5154C47.518 55.6125 47.8081 55.758 48.0336 55.9844C48.3237 56.2755 48.517 56.6475 48.5976 57.0841C48.6782 57.5369 48.646 58.0544 48.517 58.6204C48.372 59.2026 48.1626 59.7039 47.8725 60.1567C47.5825 60.6096 47.2119 60.9653 46.7768 61.2564C46.4545 61.4828 46.1001 61.6284 45.7133 61.7254C45.3427 61.8224 44.7788 61.871 44.0376 61.871H42.3779V61.8871ZM43.6347 60.9168H44.5048C44.9721 60.9168 45.3427 60.8845 45.6005 60.8198C45.8584 60.7551 46.0839 60.6419 46.2934 60.4964C46.5835 60.2861 46.8252 60.0274 47.0185 59.7039C47.2119 59.3967 47.3569 59.0247 47.4536 58.6043C47.5503 58.1838 47.5825 57.828 47.5341 57.5207C47.4858 57.2135 47.373 56.9386 47.1796 56.7283C47.0346 56.5666 46.8574 56.4696 46.6157 56.4049C46.374 56.3402 46.0034 56.3079 45.4716 56.3079H44.7304L43.6347 60.9168ZM53.2544 58.96L52.5615 61.8871H51.5947L53.1416 55.3699H54.7045C55.1718 55.3699 55.4941 55.4022 55.7036 55.4508C55.913 55.4993 56.0742 55.5801 56.2031 55.7095C56.3642 55.855 56.477 56.0653 56.5253 56.324C56.5737 56.5828 56.5576 56.8577 56.4931 57.165C56.4126 57.4722 56.2998 57.7633 56.1225 58.0221C55.9453 58.2808 55.7358 58.491 55.5102 58.6366C55.3169 58.7498 55.1074 58.8468 54.8818 58.8953C54.6562 58.9439 54.3017 58.9762 53.8505 58.9762H53.2544V58.96ZM53.5283 58.0868H53.7861C54.3501 58.0868 54.7529 58.0221 54.9785 57.8927C55.2041 57.7633 55.3491 57.5369 55.4296 57.2135C55.5102 56.8739 55.4619 56.6151 55.3007 56.4857C55.1235 56.3402 54.769 56.2755 54.2373 56.2755H53.9795L53.5283 58.0868ZM59.9897 61.8871L59.6674 60.2053H57.1538L56.0258 61.8871H54.9462L59.6191 55.1111L61.0693 61.8871H59.9897ZM57.7661 59.3158H59.5224L59.2324 57.828C59.2163 57.731 59.2002 57.6178 59.2002 57.5046C59.184 57.3752 59.184 57.2458 59.184 57.1003C59.1196 57.2458 59.0551 57.3752 58.9746 57.5046C58.9101 57.6339 58.8457 57.7471 58.7812 57.8442L57.7661 59.3158ZM62.5517 61.8871L63.2607 58.9115L61.9716 55.3861H63.0512L63.8569 57.6016C63.873 57.6663 63.8891 57.731 63.9213 57.828C63.9536 57.925 63.9697 58.0221 64.0019 58.1191L64.1953 57.828C64.2597 57.731 64.3242 57.6501 64.3886 57.5693L66.2739 55.3861H67.3051L64.292 58.8953L63.583 61.871H62.5517V61.8871ZM72.3647 58.6689C72.3647 58.6204 72.3808 58.4749 72.413 58.2485C72.4292 58.0544 72.4453 57.9089 72.4614 57.7795C72.3969 57.925 72.3325 58.0706 72.2519 58.2323C72.1713 58.3778 72.0747 58.5396 71.9619 58.6851L69.4804 62.162L68.6748 58.6204C68.6425 58.4749 68.6103 58.3293 68.5942 58.2C68.5781 58.0706 68.562 57.925 68.562 57.7957C68.5297 57.925 68.4814 58.0706 68.4331 58.2323C68.3847 58.3778 68.3203 58.5396 68.2397 58.7013L66.7895 61.9033H65.8388L68.9487 55.1111L69.8349 59.2188C69.851 59.2835 69.8671 59.3967 69.8833 59.5422C69.8994 59.6878 69.9316 59.8818 69.9638 60.1082C70.0766 59.9142 70.2216 59.6878 70.415 59.3967C70.4633 59.3158 70.5117 59.2673 70.5278 59.2188L73.3315 55.1111L73.2348 61.9033H72.2841L72.3647 58.6689ZM74.0727 61.8871L75.6196 55.3699H79.1484L78.9389 56.2755H76.4414L76.0546 57.9089H78.5522L78.3266 58.8307H75.8291L75.3295 60.933H77.8271L77.6015 61.8871H74.0727ZM78.7778 61.8871L80.3891 55.1111L83.4506 59.0894C83.5312 59.2026 83.6118 59.3158 83.6923 59.4452C83.7729 59.5746 83.8535 59.7201 83.9501 59.8818L85.0297 55.3699H85.9804L84.3691 62.1297L81.2431 58.0706L81.0014 57.731C80.9209 57.6016 80.8564 57.4884 80.8081 57.3429L79.7285 61.871H78.7778V61.8871ZM89.2675 56.2593L87.9301 61.871H86.8989L88.2363 56.2593H86.5605L86.77 55.3537H91.1528L90.9433 56.2593H89.2675ZM90.3471 60.5772L91.2656 60.1891C91.2817 60.4802 91.3623 60.7066 91.5395 60.8521C91.7167 60.9977 91.9585 61.0785 92.2807 61.0785C92.5869 61.0785 92.8447 60.9977 93.0703 60.8198C93.2958 60.6419 93.4409 60.4155 93.5053 60.1244C93.602 59.7363 93.3764 59.3967 92.8286 59.1056C92.748 59.0571 92.6997 59.0247 92.6513 59.0085C92.039 58.6528 91.6523 58.3455 91.4912 58.0544C91.33 57.7633 91.2978 57.4237 91.3945 57.0194C91.5234 56.4857 91.7973 56.0653 92.2324 55.7257C92.6674 55.4022 93.1508 55.2243 93.7309 55.2243C94.1982 55.2243 94.5688 55.3214 94.8427 55.4993C95.1166 55.6772 95.2617 55.9521 95.31 56.2917L94.4077 56.7122C94.3271 56.5019 94.2304 56.3564 94.1015 56.2593C93.9726 56.1623 93.8115 56.1138 93.6181 56.1138C93.3442 56.1138 93.1025 56.1947 92.9091 56.3402C92.7158 56.4857 92.5869 56.6798 92.5224 56.9386C92.4257 57.3267 92.6997 57.6986 93.3281 58.0382C93.3764 58.0706 93.4087 58.0868 93.4409 58.1029C93.9887 58.394 94.3593 58.6851 94.5205 58.9762C94.6816 59.2673 94.7138 59.6069 94.6171 60.0435C94.4721 60.6581 94.166 61.1432 93.6987 61.5152C93.2314 61.871 92.6835 62.065 92.039 62.065C91.5073 62.065 91.0883 61.9356 90.7983 61.6769C90.476 61.4181 90.331 61.0462 90.3471 60.5772ZM97.9365 61.8871L99.4834 55.3699H100.515L98.9677 61.8871H97.9365ZM100.45 61.8871L102.061 55.1111L105.123 59.0894C105.204 59.2026 105.284 59.3158 105.365 59.4452C105.445 59.5746 105.526 59.7201 105.623 59.8818L106.702 55.3699H107.653L106.041 62.1297L102.915 58.0706L102.674 57.731C102.593 57.6016 102.529 57.4884 102.48 57.3429L101.401 61.871H100.45V61.8871ZM110.94 56.2593L109.603 61.871H108.571L109.909 56.2593H108.233L108.442 55.3537H112.825L112.616 56.2593H110.94ZM112.052 61.8871L113.599 55.3699H117.144L116.934 56.2755H114.436L114.05 57.9089H116.547L116.322 58.8307H113.824L113.325 60.933H115.822L115.597 61.8871H112.052ZM118.416 58.96L117.724 61.871H116.757L118.304 55.3537H119.738C120.157 55.3537 120.479 55.3861 120.688 55.4346C120.914 55.4831 121.091 55.5801 121.22 55.7095C121.381 55.8712 121.478 56.0653 121.526 56.324C121.575 56.5666 121.559 56.8415 121.494 57.1488C121.365 57.6663 121.156 58.0868 120.833 58.3778C120.511 58.6689 120.108 58.8468 119.625 58.9115L121.091 61.871H119.931L118.529 58.96H118.416ZM118.674 58.1353H118.868C119.415 58.1353 119.786 58.0706 119.996 57.9412C120.205 57.8118 120.35 57.5854 120.431 57.2458C120.511 56.89 120.479 56.6313 120.318 56.4857C120.157 56.3402 119.818 56.2593 119.303 56.2593H119.109L118.674 58.1353ZM121.72 61.8871L123.267 55.3699H126.795L126.586 56.2755H124.088L123.702 57.8927H126.199L125.974 58.8145H123.476L122.751 61.871H121.72V61.8871ZM130.227 61.8871L129.905 60.2053H127.392L126.264 61.8871H125.184L129.857 55.1111L131.307 61.8871H130.227ZM127.988 59.3158H129.744L129.454 57.828C129.438 57.731 129.422 57.6178 129.422 57.5046C129.406 57.3752 129.406 57.2458 129.406 57.1003C129.341 57.2458 129.277 57.3752 129.196 57.5046C129.132 57.6339 129.067 57.7471 129.003 57.8442L127.988 59.3158ZM138.01 56.9547C137.785 56.696 137.511 56.5019 137.221 56.3887C136.931 56.2593 136.608 56.1947 136.238 56.1947C135.545 56.1947 134.933 56.4211 134.385 56.8739C133.837 57.3267 133.482 57.925 133.305 58.6528C133.144 59.3482 133.208 59.9303 133.531 60.3993C133.837 60.8521 134.32 61.0785 134.965 61.0785C135.335 61.0785 135.706 61.0139 136.077 60.8683C136.447 60.7389 136.818 60.5287 137.205 60.2538L136.915 61.4505C136.592 61.6607 136.254 61.8063 135.899 61.9033C135.545 62.0003 135.19 62.0488 134.804 62.0488C134.32 62.0488 133.885 61.968 133.515 61.8063C133.144 61.6445 132.838 61.402 132.596 61.0785C132.354 60.7713 132.209 60.3993 132.145 59.9789C132.081 59.5584 132.097 59.1056 132.226 58.6204C132.338 58.1353 132.532 57.6986 132.79 57.2782C133.047 56.8577 133.386 56.4857 133.772 56.1785C134.159 55.855 134.578 55.6125 135.029 55.4508C135.48 55.289 135.932 55.2082 136.399 55.2082C136.769 55.2082 137.108 55.2567 137.43 55.3699C137.736 55.4831 138.026 55.6448 138.284 55.8712L138.01 56.9547ZM138.107 61.8871L139.654 55.3699H143.183L142.973 56.2755H140.476L140.089 57.9089H142.586L142.361 58.8307H139.863L139.364 60.933H141.861L141.636 61.8871H138.107Z" fill="#3D3D3C"/>
                </g>
                <g filter="url(#filter2_d_1_414)">
                  <path d="M119.351 49.6936H112.277L122.106 14.0671H129.18L119.351 49.6936ZM115.677 15.183C115.194 14.5038 114.436 14.1642 113.405 14.1642H74.54L72.6225 21.1504H107.975L105.913 28.6056H77.6337V28.5894H70.56L64.6948 49.8553H71.7685L75.7001 35.5918H107.492C108.491 35.5918 109.425 35.2522 110.295 34.573C111.165 33.8938 111.746 33.0528 112.019 32.0502L115.951 17.7867C116.257 16.7193 116.161 15.8622 115.677 15.183ZM60.5698 47.4619C60.1831 48.8688 58.894 49.8553 57.4438 49.8553H20.9794C19.9804 49.8553 19.2392 49.5157 18.7558 48.8365C18.2724 48.1573 18.1596 47.3164 18.4497 46.3137L27.3442 14.1642H34.4179L26.4741 42.8853H54.769L62.7128 14.1642H69.7866L60.5698 47.4619Z" fill="#70706E"/>
                </g>
                <g filter="url(#filter3_d_1_414)">
                  <path d="M141.394 14.1318L150.337 31.9855L131.533 49.8392L141.394 14.1318Z" fill="#098041"/>
                </g>
                <g filter="url(#filter4_d_1_414)">
                  <path d="M135.11 14.1318L144.053 31.9855L125.232 49.8392L135.11 14.1318Z" fill="#E97626"/>
                </g>
              </g>
              <defs>
                <filter id="filter0_d_1_414" x="-4" y="0.272583" width="173" height="83.3606" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_414"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_414" result="shape"/>
                </filter>
                <filter id="filter1_d_1_414" x="10.7192" y="55.1111" width="136.463" height="15.0509" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_414"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_414" result="shape"/>
                </filter>
                <filter id="filter2_d_1_414" x="14.2915" y="14.0671" width="118.889" height="43.7882" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_414"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_414" result="shape"/>
                </filter>
                <filter id="filter3_d_1_414" x="127.533" y="14.1318" width="26.8042" height="43.7073" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_414"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_414" result="shape"/>
                </filter>
                <filter id="filter4_d_1_414" x="121.232" y="14.1318" width="26.8203" height="43.7073" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_414"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_414" result="shape"/>
                </filter>
              </defs>
            </svg>
      </div>

      <div className={`redeem-options  ${selectedAccountType === 'wallet' ? 'selected' : ''}`} onClick={() => handleAccountTypeClick('wallet')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="101" viewBox="0 0 100 101" fill="none">
            <g clip-path="url(#clip0_1_912)">
              <path d="M49.8919 100.525C77.422 100.525 99.7394 78.2074 99.7394 50.6774C99.7394 23.1474 77.422 0.829895 49.8919 0.829895C22.3619 0.829895 0.0444336 23.1474 0.0444336 50.6774C0.0444336 78.2074 22.3619 100.525 49.8919 100.525Z" fill="#FFA40B"/>
              <g filter="url(#filter0_d_1_912)">
                <path d="M66.0299 30.7384C61.9174 30.7384 58.5527 34.1031 58.5527 38.2155C58.5527 42.3279 61.9174 45.6927 66.0299 45.6927C70.1423 45.6927 73.507 42.3279 73.507 38.2155C73.507 34.1031 70.1423 30.7384 66.0299 30.7384ZM66.0299 33.2308C66.7776 33.2308 67.276 33.7293 67.276 34.477V38.2155C67.276 38.9632 66.7776 39.4617 66.0299 39.4617C65.2821 39.4617 64.7837 38.9632 64.7837 38.2155V34.477C64.7837 33.7293 65.2821 33.2308 66.0299 33.2308ZM29.8904 38.2155C27.7719 38.2155 26.1519 39.8356 26.1519 41.9541V64.3855C26.1519 66.504 27.7719 68.124 29.8904 68.124H64.7837C66.9022 68.124 68.5222 66.504 68.5222 64.3855V63.1393H58.4281C55.0634 63.1393 52.3218 60.3977 52.3218 56.9083C52.3218 53.419 55.0634 50.6774 58.4281 50.6774H68.5222V47.8112C67.7745 48.0604 66.9022 48.185 66.0299 48.185C60.5466 48.185 56.0604 43.6988 56.0604 38.2155H29.8904ZM66.0299 40.7079C66.3414 40.7079 66.6505 40.8325 66.8997 41.0818C67.1489 41.331 67.2748 41.7049 67.2748 41.9541C67.2748 42.2033 67.1502 42.5772 66.9009 42.8264C66.6517 43.0757 66.4025 43.2003 66.0286 43.2003C65.6548 43.2003 65.4055 43.0757 65.1563 42.8264C64.907 42.5772 64.7824 42.2033 64.7824 41.9541C64.7824 41.5802 64.907 41.331 65.1563 41.0818C65.4055 40.8325 65.7183 40.7079 66.0299 40.7079ZM58.4281 53.1698C56.4342 53.1698 54.8142 54.7898 54.8142 56.9083C54.8142 59.0269 56.4342 60.6469 58.4281 60.6469H68.5222V53.1698H58.4281ZM58.5527 55.6622C59.1758 55.6622 59.7989 56.1606 59.7989 56.9083C59.7989 57.6561 59.1758 58.1545 58.5527 58.1545C57.9296 58.1545 57.3065 57.6561 57.3065 56.9083C57.3065 56.1606 57.805 55.6622 58.5527 55.6622Z" fill="white"/>
              </g>
            </g>
            <defs>
              <filter id="filter0_d_1_912" x="22.1519" y="30.7384" width="55.355" height="45.3856" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_912"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_912" result="shape"/>
              </filter>
              <clipPath id="clip0_1_912">
                <rect width="99.695" height="99.695" fill="white" transform="translate(0.0444336 0.829895)"/>
              </clipPath>
            </defs>
          </svg>
      </div> 

      <div className={`redeem-options  ${selectedAccountType === 'bank' ? 'selected' : ''}`} onClick={() => handleAccountTypeClick('bank')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="106" height="107" viewBox="0 0 106 107" fill="none">
            <g filter="url(#filter0_d_1_917)">
              <path d="M76.2531 22.5934C77.5022 26.1929 77.8474 30.0717 77.3707 33.852H97.3075V29.7595L76.1709 22.3633C76.1709 22.3633 76.2202 22.5276 76.2531 22.5934Z" fill="url(#paint0_linear_1_917)"/>
            </g>
            <g filter="url(#filter1_d_1_917)">
              <path d="M56.0203 55.005C53.6864 55.3338 51.3525 55.2352 49.0185 54.9064L48.0488 84.8034H57.8118L56.8421 54.9064C56.5626 54.9557 56.2832 54.9722 56.0203 55.005Z" fill="url(#paint1_linear_1_917)"/>
            </g>
            <g filter="url(#filter2_d_1_917)">
              <path d="M61.1483 88.0906H44.7124V91.3778H61.1483V88.0906Z" fill="url(#paint2_linear_1_917)"/>
            </g>
            <g filter="url(#filter3_d_1_917)">
              <path d="M68.0351 15.4602C58.3708 5.40138 40.62 7.94895 34.1771 20.3416C27.3069 32.4549 34.6045 48.5293 48.2298 51.4056C69.087 55.909 83.0247 30.7292 68.0351 15.4602ZM52.9305 28.9212C62.1018 29.1184 63.4167 41.9713 54.5741 44.0751V47.0007C54.5741 47.9047 53.8345 48.6443 52.9305 48.6443C52.0265 48.6443 51.2869 47.9047 51.2869 47.0007V44.0751C47.8518 43.3191 45.2549 40.262 45.2549 36.5968C45.2878 34.4272 48.5257 34.4437 48.5421 36.5968C48.6901 42.3658 57.171 42.3658 57.3189 36.5968C57.3189 34.1807 55.3466 32.2084 52.9305 32.2084C43.7593 32.0112 42.4444 19.1583 51.2869 17.0545V14.1289C51.2869 13.2249 52.0265 12.4853 52.9305 12.4853C53.8345 12.4853 54.5741 13.2249 54.5741 14.1289V17.0545C58.0092 17.8105 60.6061 20.8676 60.6061 24.5328C60.6061 25.4532 59.8665 26.1764 58.9625 26.1764C58.0585 26.1764 57.3189 25.4532 57.3189 24.5328C57.3189 22.1167 55.3466 20.1609 52.9305 20.1609C47.1451 20.3088 47.1451 28.7733 52.9305 28.9212Z" fill="url(#paint3_linear_1_917)"/>
            </g>
            <g filter="url(#filter4_d_1_917)">
              <path d="M8.55322 33.852H28.49C27.9969 29.9896 28.3914 26.0285 29.6898 22.3633L8.55322 29.7595V33.852Z" fill="url(#paint4_linear_1_917)"/>
            </g>
            <g filter="url(#filter5_d_1_917)">
              <path d="M18.4644 84.8034H28.2273L26.6823 37.1392H20.0093L18.4644 84.8034Z" fill="url(#paint5_linear_1_917)"/>
            </g>
            <g filter="url(#filter6_d_1_917)">
              <path d="M31.5639 88.0906H15.1279V91.3778H31.5639V88.0906Z" fill="url(#paint6_linear_1_917)"/>
            </g>
            <g filter="url(#filter7_d_1_917)">
              <path d="M97.3073 94.6649H8.55322V97.9521H97.3073V94.6649Z" fill="url(#paint7_linear_1_917)"/>
            </g>
            <g filter="url(#filter8_d_1_917)">
              <path d="M90.7333 88.0906H74.2974V91.3778H90.7333V88.0906Z" fill="url(#paint8_linear_1_917)"/>
            </g>
            <g filter="url(#filter9_d_1_917)">
              <path d="M79.1788 37.1392L77.6338 84.8034H87.3967L85.8518 37.1392H79.1788Z" fill="url(#paint9_linear_1_917)"/>
            </g>
            <defs>
              <filter id="filter0_d_1_917" x="72.1709" y="22.3633" width="29.1367" height="19.4887" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_917"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_917" result="shape"/>
              </filter>
              <filter id="filter1_d_1_917" x="44.0488" y="54.9064" width="17.7632" height="37.897" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_917"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_917" result="shape"/>
              </filter>
              <filter id="filter2_d_1_917" x="40.7124" y="88.0906" width="24.436" height="11.2872" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_917"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_917" result="shape"/>
              </filter>
              <filter id="filter3_d_1_917" x="27.5537" y="9.25269" width="50.7607" height="50.6841" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_917"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_917" result="shape"/>
              </filter>
              <filter id="filter4_d_1_917" x="4.55322" y="22.3633" width="29.1367" height="19.4887" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_917"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_917" result="shape"/>
              </filter>
              <filter id="filter5_d_1_917" x="14.4644" y="37.1392" width="17.7632" height="55.6642" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_917"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_917" result="shape"/>
              </filter>
              <filter id="filter6_d_1_917" x="11.1279" y="88.0906" width="24.436" height="11.2872" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_917"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_917" result="shape"/>
              </filter>
              <filter id="filter7_d_1_917" x="4.55322" y="94.6649" width="96.7539" height="11.2872" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_917"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_917" result="shape"/>
              </filter>
              <filter id="filter8_d_1_917" x="70.2974" y="88.0906" width="24.436" height="11.2872" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_917"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_917" result="shape"/>
              </filter>
              <filter id="filter9_d_1_917" x="73.6338" y="37.1392" width="17.7632" height="55.6642" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_917"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_917" result="shape"/>
              </filter>
              <linearGradient id="paint0_linear_1_917" x1="46.0603" y1="-15.9818" x2="117.918" y2="67.217" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFFC48"/>
                <stop offset="1" stop-color="#E94700"/>
              </linearGradient>
              <linearGradient id="paint1_linear_1_917" x1="7.25483" y1="17.5476" x2="79.1292" y2="100.73" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFFC48"/>
                <stop offset="1" stop-color="#E94700"/>
              </linearGradient>
              <linearGradient id="paint2_linear_1_917" x1="-2.29438" y1="25.7984" x2="69.5635" y2="108.997" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFFC48"/>
                <stop offset="1" stop-color="#E94700"/>
              </linearGradient>
              <linearGradient id="paint3_linear_1_917" x1="26.9782" y1="0.503475" x2="98.8361" y2="83.7022" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFFC48"/>
                <stop offset="1" stop-color="#E94700"/>
              </linearGradient>
              <linearGradient id="paint4_linear_1_917" x1="8.83263" y1="16.1834" x2="80.6905" y2="99.3821" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFFC48"/>
                <stop offset="1" stop-color="#E94700"/>
              </linearGradient>
              <linearGradient id="paint5_linear_1_917" x1="-5.44993" y1="28.5267" x2="66.408" y2="111.709" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFFC48"/>
                <stop offset="1" stop-color="#E94700"/>
              </linearGradient>
              <linearGradient id="paint6_linear_1_917" x1="-19.2396" y1="40.4428" x2="52.6183" y2="123.625" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFFC48"/>
                <stop offset="1" stop-color="#E94700"/>
              </linearGradient>
              <linearGradient id="paint7_linear_1_917" x1="-5.54881" y1="28.6089" x2="66.3091" y2="111.808" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFFC48"/>
                <stop offset="1" stop-color="#E94700"/>
              </linearGradient>
              <linearGradient id="paint8_linear_1_917" x1="14.6513" y1="11.1704" x2="86.5093" y2="94.3527" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFFC48"/>
                <stop offset="1" stop-color="#E94700"/>
              </linearGradient>
              <linearGradient id="paint9_linear_1_917" x1="28.4246" y1="-0.745672" x2="100.299" y2="82.4531" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFFC48"/>
                <stop offset="1" stop-color="#E94700"/>
              </linearGradient>
            </defs>
          </svg>
      </div>
      </div>
      <div style={{    marginLeft: "2vw", marginRight: "2vw", marginTop: "2vh"}}>
      <Form.Group controlId="formBasicEmail">
      {/* <Form.Label>Email address</Form.Label> */}
      <Form.Control type="text" placeholder="upi id" className="custom-input" style={{width: "30%"}} />
      {/* <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text> */}
    </Form.Group>
      </div>


      <div style={{    marginLeft: "2vw", marginRight: "2vw" , marginTop: "2vh"}}>

        <span className='font-4'>your withdrawal amount is </span>
      <div className="redeem-money">
              
              <img
                    className="coin-image"
                    id="logo_header"
                    src={"/assets/electra/gold-coin.png"}
                    srcSet={"/assets/electra/gold-coin.png"}
                    alt="electra"
                />

                <hr className="custom-horizontal-line" />
                <span className='wallet-value font-6 ml-10 d-flex v-cen'>
              
                  $

                  <span className="font-6 ml-10" >
                    200
                  </span>


                </span>
            </div>
      </div>
    <div style={{    marginLeft: "2vw", marginRight: "2vw", marginTop: "2vh" }}>
    <Button
        variant={`outline-primary checkout-btn submit font-4 ${selectedButton === 'buy' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('sell-trasaction')}
      >
        Submit
      </Button>
    </div>



 



    </div>
  );
};

export default RedeemTrans;
