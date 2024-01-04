export const BlueWallet = (props: { width?: number; height?: number }) => {
  return (
    <svg viewBox="0 0 58 58" version="1.1" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>logo-bluewallet</title>
      <defs>
        <filter x="-14.0%" y="-13.8%" width="128.1%" height="127.6%" filterUnits="objectBoundingBox" id="filter-1">
          <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.137729458 0"
            type="matrix"
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"></feColorMatrix>
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
        <linearGradient x1="50%" y1="2.83824061%" x2="50%" y2="100%" id="linearGradient-2">
          <stop stopColor="#174697" offset="0%"></stop>
          <stop stopColor="#0C2550" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="97.8843027%" id="linearGradient-3">
          <stop stopColor="#3F78DC" offset="0%"></stop>
          <stop stopColor="#2F5FB3" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="2.72534321%" x2="50%" y2="100%" id="linearGradient-4">
          <stop stopColor="#8BD7F9" offset="0%"></stop>
          <stop stopColor="#68BBE1" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g id="bluewallet" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="bluewallet-site-copy-2">
          <g id="logo-bluewallet">
            <g id="Group-Copy" filter="url(#filter-1)">
              <path
                d="M16.6652538,-1.58013034e-15 L39.9523933,-2.33537939e-16 C45.7472651,1.35692268e-16 47.8486256,0.603366472 49.9671441,1.73636257 C52.0856627,2.86935868 53.7482884,4.53198441 54.8812845,6.65050293 C56.0142806,8.76902145 56.6176471,10.870382 56.6176471,16.6652538 L56.6176471,39.9523933 C56.6176471,45.7472651 56.0142806,47.8486256 54.8812845,49.9671441 C53.7482884,52.0856627 52.0856627,53.7482884 49.9671441,54.8812845 C47.8486256,56.0142806 45.7472651,56.6176471 39.9523933,56.6176471 L16.6652538,56.6176471 C10.870382,56.6176471 8.76902145,56.0142806 6.65050293,54.8812845 C4.53198441,53.7482884 2.86935868,52.0856627 1.73636257,49.9671441 C0.603366472,47.8486256 2.60802988e-16,45.7472651 -4.48864133e-16,39.9523933 L-4.57970006e-16,16.6652538 C2.66093762e-16,10.870382 0.603366472,8.76902145 1.73636257,6.65050293 C2.86935868,4.53198441 4.53198441,2.86935868 6.65050293,1.73636257 C8.76902145,0.603366472 10.870382,9.18101232e-16 16.6652538,-1.58013034e-15 Z"
                id="Rectangle-Copy"
                fill="url(#linearGradient-2)"></path>
              <path
                d="M16.6652538,13.2352941 L39.9523933,13.2352941 C45.7472651,13.2352941 47.8486256,13.8386606 49.9671441,14.9716567 C52.0856627,16.1046528 53.7482884,17.7672785 54.8812845,19.885797 C56.0142806,22.0043156 56.6176471,24.1056761 56.6176471,29.9005479 L56.6176471,39.2170991 C56.6176471,45.011971 56.0142806,47.1133315 54.8812845,49.23185 C53.7482884,51.3503685 52.0856627,53.0129943 49.9671441,54.1459904 C47.8486256,55.2789865 45.7472651,55.8823529 39.9523933,55.8823529 L16.6652538,55.8823529 C10.870382,55.8823529 8.76902145,55.2789865 6.65050293,54.1459904 C4.53198441,53.0129943 2.86935868,51.3503685 1.73636257,49.23185 C0.603366472,47.1133315 2.60802988e-16,45.011971 -4.48864133e-16,39.2170991 L-1.36480415e-15,29.9005479 C7.92990512e-16,24.1056761 0.603366472,22.0043156 1.73636257,19.885797 C2.86935868,17.7672785 4.53198441,16.1046528 6.65050293,14.9716567 C8.76902145,13.8386606 10.870382,13.2352941 16.6652538,13.2352941 Z"
                id="Rectangle-Copy-2"
                fill="url(#linearGradient-3)"></path>
              <path
                d="M13.2492834,27.2058824 L43.3683637,27.2058824 C47.2492145,27.2058824 49.1977058,27.7164232 50.9902984,28.6751122 C52.782891,29.6338012 54.1897282,31.0406384 55.1484172,32.833231 C56.1071062,34.6258236 56.6176471,36.5743149 56.6176471,40.4551657 L56.6176471,44.1036578 C56.6176471,47.9845086 56.1071062,49.933 55.1484172,51.7255925 C54.1897282,53.5181851 52.782891,54.9250223 50.9902984,55.8837113 C49.1977058,56.8424003 47.2492145,57.3529412 43.3683637,57.3529412 L13.2492834,57.3529412 C9.36843258,57.3529412 7.41994122,56.8424003 5.62734863,55.8837113 C3.83475604,54.9250223 2.42791888,53.5181851 1.46922987,51.7255925 C0.510540861,49.933 -2.77257755e-16,47.9845086 3.82228307e-16,44.1036578 L2.75457766e-16,40.4551657 C-1.99809382e-16,36.5743149 0.510540861,34.6258236 1.46922987,32.833231 C2.42791888,31.0406384 3.83475604,29.6338012 5.62734863,28.6751122 C7.41994122,27.7164232 9.36843258,27.2058824 13.2492834,27.2058824 Z"
                id="Rectangle-Copy-3"
                fill="url(#linearGradient-4)"></path>
              <path
                d="M30.8453034,44.2612592 C30.8453034,44.8309235 30.7830721,45.343135 30.6586077,45.797909 C30.5341432,46.252683 30.3546298,46.6404319 30.1200622,46.9611673 C29.8854945,47.2819026 29.5970764,47.5284343 29.2547991,47.7007698 C28.9125218,47.8731052 28.5235761,47.9592716 28.0879505,47.9592716 C27.8725312,47.9592716 27.6714762,47.9389268 27.4847795,47.8982364 C27.2980828,47.8575461 27.1197662,47.7917246 26.9498243,47.7007698 C26.7798825,47.609815 26.6123367,47.4949264 26.4471819,47.3561006 C26.2820271,47.2172749 26.1132845,47.0497291 25.9409491,46.8534582 L25.9409491,47.549977 C25.9409491,47.6026351 25.9277848,47.646915 25.9014558,47.6828182 C25.8751268,47.7187215 25.8320435,47.7486404 25.7722049,47.7725758 C25.7123662,47.7965113 25.6321835,47.8132659 25.5316545,47.8228401 C25.4311255,47.8324143 25.3090564,47.8372013 25.1654436,47.8372013 C25.0170437,47.8372013 24.8937778,47.8324143 24.7956424,47.8228401 C24.6975069,47.8132659 24.618521,47.7965113 24.5586823,47.7725758 C24.4988437,47.7486404 24.4569572,47.7187215 24.4330217,47.6828182 C24.4090862,47.646915 24.3971187,47.6026351 24.3971187,47.549977 L24.3971187,38.1074793 C24.3971187,38.0596084 24.4114798,38.0165252 24.4402023,37.9782284 C24.4689249,37.9399316 24.5179919,37.9076192 24.5874048,37.8812902 C24.6568176,37.8549612 24.7489678,37.8346163 24.8638581,37.8202551 C24.9787484,37.8058938 25.1247526,37.7987132 25.3018751,37.7987132 C25.4789976,37.7987132 25.6250018,37.8058938 25.7398921,37.8202551 C25.8547824,37.8346163 25.9469326,37.8549612 26.0163455,37.8812902 C26.0857584,37.9076192 26.1348253,37.9399316 26.1635479,37.9782284 C26.1922705,38.0165252 26.2066316,38.0596084 26.2066316,38.1074793 L26.2066316,41.6475184 C26.3693928,41.4847572 26.5321516,41.3459335 26.6949128,41.2310432 C26.857674,41.1161529 27.0204328,41.0216092 27.1831941,40.9474092 C27.3459553,40.8732093 27.5135011,40.8193553 27.6858365,40.7858456 C27.8581719,40.7523359 28.0400788,40.7355813 28.2315626,40.7355813 C28.705485,40.7355813 29.107595,40.8301251 29.4379045,41.0192153 C29.7682141,41.2083056 30.0374841,41.4632145 30.2457228,41.7839499 C30.4539614,42.1046853 30.6059494,42.4792698 30.7016913,42.9077148 C30.7974332,43.3361598 30.8453034,43.7873368 30.8453034,44.2612592 Z M28.9711651,44.3905101 C28.9711651,44.1176457 28.9508203,43.8543594 28.91013,43.6006434 C28.8694396,43.3469273 28.7988311,43.1219373 28.6983021,42.9256664 C28.5977731,42.7293955 28.4673267,42.5726205 28.306959,42.4553366 C28.1465913,42.3380528 27.9443396,42.2794118 27.7001977,42.2794118 C27.5805204,42.2794118 27.4632383,42.2961663 27.348348,42.329676 C27.2334577,42.3631857 27.1149789,42.42063 26.992908,42.5020106 C26.8708371,42.5833912 26.7451777,42.6887057 26.6159261,42.8179573 C26.4866746,42.9472088 26.3502444,43.1075741 26.2066316,43.2990579 L26.2066316,45.4245175 C26.4603476,45.7500399 26.703289,45.9977684 26.9354631,46.1677102 C27.1676372,46.3376521 27.4105787,46.4226218 27.6642947,46.4226218 C27.8988624,46.4226218 28.0975238,46.362784 28.2602851,46.2431066 C28.4230463,46.1234292 28.5582797,45.967851 28.6659893,45.7763672 C28.773699,45.5848834 28.8514881,45.3670738 28.899359,45.122932 C28.94723,44.8787901 28.9711651,44.634652 28.9711651,44.3905101 Z M34.0347841,47.549977 C34.0347841,47.597848 34.020423,47.6397344 33.9917004,47.6756376 C33.9629779,47.7115409 33.9139109,47.7414597 33.844498,47.7653952 C33.7750851,47.7893307 33.6829349,47.807282 33.5680446,47.8192498 C33.4531544,47.8312175 33.3071502,47.8372013 33.1300276,47.8372013 C32.9529051,47.8372013 32.8069009,47.8312175 32.6920106,47.8192498 C32.5771204,47.807282 32.4849702,47.7893307 32.4155573,47.7653952 C32.3461444,47.7414597 32.2970774,47.7115409 32.2683548,47.6756376 C32.2396323,47.6397344 32.2252712,47.597848 32.2252712,47.549977 L32.2252712,38.1074793 C32.2252712,38.0596084 32.2396323,38.0165252 32.2683548,37.9782284 C32.2970774,37.9399316 32.3461444,37.9076192 32.4155573,37.8812902 C32.4849702,37.8549612 32.5771204,37.8346163 32.6920106,37.8202551 C32.8069009,37.8058938 32.9529051,37.7987132 33.1300276,37.7987132 C33.3071502,37.7987132 33.4531544,37.8058938 33.5680446,37.8202551 C33.6829349,37.8346163 33.7750851,37.8549612 33.844498,37.8812902 C33.9139109,37.9076192 33.9629779,37.9399316 33.9917004,37.9782284 C34.020423,38.0165252 34.0347841,38.0596084 34.0347841,38.1074793 L34.0347841,47.549977 Z M41.8485754,47.549977 C41.8485754,47.597848 41.8366078,47.6397344 41.8126723,47.6756376 C41.7887369,47.7115409 41.7468504,47.7414597 41.6870117,47.7653952 C41.627173,47.7893307 41.5481871,47.807282 41.4500517,47.8192498 C41.3519163,47.8312175 41.2286504,47.8372013 41.0802505,47.8372013 C40.9222763,47.8372013 40.7942235,47.8312175 40.696088,47.8192498 C40.5979526,47.807282 40.5201634,47.7893307 40.4627183,47.7653952 C40.4052732,47.7414597 40.3645835,47.7115409 40.340648,47.6756376 C40.3167125,47.6397344 40.3047449,47.597848 40.3047449,47.549977 L40.3047449,46.8103745 C39.9504999,47.1933421 39.5902764,47.4805635 39.2240636,47.6720473 C38.8578509,47.8635311 38.4784793,47.9592716 38.0859375,47.9592716 C37.6455248,47.9592716 37.2757272,47.8874663 36.9765338,47.7438534 C36.6773403,47.6002406 36.4355957,47.4039726 36.2512925,47.1550437 C36.0669894,46.9061147 35.9353462,46.6176966 35.8563591,46.2897806 C35.7773721,45.9618646 35.7378791,45.5537708 35.7378791,45.0654871 L35.7378791,41.1448759 C35.7378791,41.097005 35.7510434,41.0551185 35.7773725,41.0192153 C35.8037015,40.9833121 35.8515717,40.9533932 35.9209846,40.9294577 C35.9903975,40.9055222 36.0837444,40.8875709 36.2010283,40.8756032 C36.3183121,40.8636354 36.4631195,40.8576517 36.635455,40.8576517 C36.8125775,40.8576517 36.9585817,40.8636354 37.073472,40.8756032 C37.1883622,40.8875709 37.2805124,40.9055222 37.3499253,40.9294577 C37.4193382,40.9533932 37.4684052,40.9833121 37.4971278,41.0192153 C37.5258503,41.0551185 37.5402114,41.097005 37.5402114,41.1448759 L37.5402114,44.7639017 C37.5402114,45.0989983 37.561753,45.355104 37.6048369,45.5322266 C37.6479207,45.7093491 37.7137423,45.8613371 37.8023035,45.9881951 C37.8908648,46.1150531 38.0033598,46.2131871 38.139792,46.2826 C38.2762243,46.3520128 38.4353928,46.3867188 38.6173024,46.3867188 C38.847083,46.3867188 39.0780568,46.3029458 39.3102309,46.1353975 C39.542405,45.9678492 39.7901335,45.723711 40.0534237,45.4029756 L40.0534237,41.1448759 C40.0534237,41.097005 40.066588,41.0551185 40.092917,41.0192153 C40.1192461,40.9833121 40.1671163,40.9533932 40.2365292,40.9294577 C40.3059421,40.9055222 40.3980923,40.8875709 40.5129825,40.8756032 C40.6278728,40.8636354 40.773877,40.8576517 40.9509995,40.8576517 C41.1281221,40.8576517 41.2741263,40.8636354 41.3890165,40.8756032 C41.5039068,40.8875709 41.5948603,40.9055222 41.6618796,40.9294577 C41.7288989,40.9533932 41.7767692,40.9833121 41.8054917,41.0192153 C41.8342143,41.0551185 41.8485754,41.097005 41.8485754,41.1448759 L41.8485754,47.549977 Z M49.5187545,44.1607307 C49.5187545,44.3809371 49.4696875,44.5436959 49.3715521,44.6490119 C49.2734166,44.754328 49.1381832,44.8069853 48.9658478,44.8069853 L45.0667784,44.8069853 C45.0667784,45.0798497 45.0990908,45.3275782 45.1637166,45.5501781 C45.2283424,45.772778 45.3312634,45.9618654 45.4724827,46.117446 C45.613702,46.2730266 45.7956089,46.3915054 46.0182088,46.472886 C46.2408087,46.5542666 46.5076853,46.5949563 46.8188464,46.5949563 C47.1347947,46.5949563 47.4124421,46.572218 47.6517968,46.5267406 C47.8911516,46.4812632 48.0981903,46.4309994 48.2729193,46.3759478 C48.4476483,46.3208962 48.5924557,46.2706325 48.707346,46.2251551 C48.8222363,46.1796777 48.9155832,46.1569393 48.9873896,46.1569393 C49.0304735,46.1569393 49.0663762,46.1653166 49.0950987,46.1820715 C49.1238213,46.1988263 49.1477564,46.2287452 49.1669048,46.271829 C49.1860532,46.3149129 49.1992175,46.3759474 49.2063981,46.4549345 C49.2135788,46.5339216 49.2171691,46.6332523 49.2171691,46.7529297 C49.2171691,46.8582458 49.2147755,46.9480025 49.2099884,47.0222024 C49.2052014,47.0964024 49.1980208,47.1598305 49.1884466,47.2124885 C49.1788724,47.2651466 49.1645114,47.3094265 49.145363,47.3453297 C49.1262146,47.3812329 49.1010827,47.4159389 49.0699666,47.4494485 C49.0388505,47.4829582 48.9538808,47.5284349 48.8150551,47.5858801 C48.6762293,47.6433252 48.4991095,47.6995727 48.2836902,47.7546243 C48.0682709,47.8096759 47.8217392,47.8575461 47.5440877,47.8982364 C47.2664362,47.9389268 46.9696408,47.9592716 46.6536925,47.9592716 C46.0840282,47.9592716 45.584981,47.8874663 45.156536,47.7438534 C44.728091,47.6002406 44.370261,47.382431 44.0830353,47.0904182 C43.7958096,46.7984054 43.5815903,46.4298046 43.440371,45.9846048 C43.2991517,45.5394049 43.2285431,45.0176194 43.2285431,44.4192325 C43.2285431,43.8495682 43.302742,43.33616 43.4511419,42.8789924 C43.5995419,42.4218248 43.8149579,42.034076 44.0973965,41.7157341 C44.3798351,41.3973923 44.7233041,41.1544509 45.1278136,40.9869026 C45.5323231,40.8193542 45.9882871,40.7355813 46.4957191,40.7355813 C47.0318738,40.7355813 47.4902313,40.8145672 47.8708053,40.9725414 C48.2513794,41.1305155 48.5637326,41.3495218 48.8078745,41.6295669 C49.0520163,41.9096119 49.2315297,42.2411133 49.34642,42.6240809 C49.4613103,43.0070485 49.5187545,43.4235195 49.5187545,43.8735064 L49.5187545,44.1607307 Z M47.7666865,43.643727 C47.7810478,43.136295 47.6793236,42.7377753 47.4615107,42.448156 C47.2436979,42.1585368 46.9074095,42.0137293 46.4526355,42.0137293 C46.2228549,42.0137293 46.0229967,42.0568125 45.8530549,42.1429802 C45.683113,42.2291479 45.5418958,42.3452333 45.4293991,42.4912397 C45.3169023,42.6372461 45.2307359,42.8095789 45.1708972,43.0082433 C45.1110585,43.2069078 45.0763526,43.4187336 45.0667784,43.643727 L47.7666865,43.643727 Z"
                id="blue"
                fill="#FFFFFF"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
export default BlueWallet;
