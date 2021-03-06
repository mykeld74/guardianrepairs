import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const ServiceType = styled(Link)`
  max-width: 45%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #222;
  text-decoration: none;
  transition: all 0.3s;
  .serviceIcon {
    fill: #222;
    transition: fill 0.3s;
  }
  h3 {
    width: 100%;
    text-align: center;
  }
  &:hover {
    color: red;
    .serviceIcon {
      fill: red;
    }
  }
`
const Icon = styled.div`
  width: clamp(100px, 20vw, 150px);
  height: clamp(115px, 20vw, 150px);
`

export const Repair = () => (
  <ServiceType to="/repair">
    <Icon>
      <svg viewBox="0 0 100 125">
        <g>
          <path
            className="serviceIcon"
            d="M91.7,87.4c-3.2,3.2-8.5,3.3-11.7,0L53.7,61l4.2-4.2l25.6,25.6c0.9,0.9,2.5,0.9,3.4,0s0.9-2.5,0-3.4L61.3,53.5l4.2-4.2   l26.3,26.3C95,78.9,95,84.1,91.7,87.4z M26.2,25.3c-2.3,2.3-6.1,2.3-8.4,0l-7.1-7.1c-0.6-0.6-1.6-0.3-1.8,0.5   C7.7,24.8,9.4,31.3,14.1,36c4.1,4.1,9.6,5.9,14.9,5.5c3.1-0.2,6,0.9,8.2,3.1l3.9,3.9l4.2-4.2l-5.3-5.3c-0.9-0.9-0.9-2.5,0-3.4   s2.5-0.9,3.4,0l5.3,5.3l4.2-4.2l-3.3-3.3c-2.3-2.3-3.5-5.6-3.1-8.8c0.7-5.6-1.1-11.4-5.4-15.7c-5-5-12.1-6.6-18.5-4.9   c-0.8,0.2-1,1.2-0.5,1.8l7.5,7.5c2.3,2.3,2.3,6.1,0,8.4L26.2,25.3z M9.9,73l11.6-11.6c0.4-0.4,1-0.6,1.6-0.6   c1.7,0.1,3.5-0.4,4.8-1.8c1.3-1.3,1.9-3.1,1.8-4.8c0-0.6,0.2-1.2,0.6-1.6l2.5-2.5c0.7-0.7,1.8-0.7,2.4,0l16.9,16.9   c0.7,0.7,0.7,1.8,0,2.4l-2.5,2.5c-0.4,0.4-1,0.6-1.6,0.6c-1.7-0.1-3.5,0.4-4.8,1.8c-1.3,1.3-1.9,3.1-1.8,4.8c0,0.6-0.2,1.2-0.6,1.6   L28.9,92.6c-5.4,5.4-14.2,5.3-19.5-0.2C4.2,87,4.6,78.3,9.9,73z M20,85.5c-0.9,0.9-0.9,2.3,0,3.2c0.9,0.9,2.3,0.9,3.2,0l11-11   c0.9-0.9,0.9-2.3,0-3.2c-0.9-0.9-2.3-0.9-3.2,0L20,85.5z M13.5,82.2c0.9,0.9,2.3,0.9,3.2,0l11-11c0.9-0.9,0.9-2.3,0-3.2   c-0.9-0.9-2.3-0.9-3.2,0l-11,11C12.6,79.9,12.6,81.3,13.5,82.2z M93.8,11.2l-2.9-2.9c-0.5-0.5-1.2-0.6-1.8-0.3l-16,8   c-0.5,0.3-0.8,0.8-0.8,1.4v6.8L45.8,50.6c-0.8,0.8-0.8,2,0,2.8l2.8,2.8c0.8,0.8,2,0.8,2.8,0l26.4-26.4h6.8c0.6,0,1.1-0.3,1.4-0.8   l8-16C94.4,12.4,94.3,11.7,93.8,11.2z"
          />
        </g>
      </svg>
    </Icon>
    <h3>Repair</h3>
  </ServiceType>
)

export const Replace = () => (
  <ServiceType to="/replacement/">
    <Icon>
      <svg viewBox="0 0 100 125">
        <g>
          <path
            className="serviceIcon"
            d="M89.6699,16.0552h-80.29c-0.0688,0-0.125,0.0562-0.125,0.125V87.54c0,0.0688,0.0562,0.125,0.125,0.125h80.29     c0.0688,0,0.125-0.0562,0.125-0.125V16.1802C89.7949,16.1113,89.7388,16.0552,89.6699,16.0552z M9.5049,85.5h80.04v0.5103h-80.04     V85.5z M89.5449,69.885h-80.04v-0.4202h80.04V69.885z M9.5049,52.1152v-0.5h80.04v0.5H9.5049z M9.5049,34.2749v-0.5h80.04v0.5     H9.5049z M28.9648,17.8052v14.25H10.9951v-14.25H28.9648z M48.665,17.8052v14.25H30.6948v-14.25H48.665z M68.355,17.8052v14.25     H50.3848v-14.25H68.355z M88.0449,17.8052v14.25H70.105v-14.25H88.0449z"
          />
          <path
            className="serviceIcon"
            d="M93.3901,12.21h-87.71c-0.1382,0-0.25,0.1118-0.25,0.25V87.54c0,0.1382,0.1118,0.25,0.25,0.25h2.9697     c0.1382,0,0.25-0.1118,0.25-0.25V15.71h81.27V87.54c0,0.1382,0.1118,0.25,0.25,0.25h2.9702c0.1382,0,0.25-0.1118,0.25-0.25V12.46     C93.6401,12.3218,93.5283,12.21,93.3901,12.21z"
          />
          <path
            className="serviceIcon"
            d="M11.6201,31.48h16.7197c0.0278,0,0.0498-0.022,0.0498-0.0498v-13c0-0.0278-0.022-0.0498-0.0498-0.0498H11.6201     c-0.0278,0-0.0498,0.022-0.0498,0.0498v13C11.5703,31.458,11.5923,31.48,11.6201,31.48z M11.6699,31.3804V18.48H28.29v12.9004     H11.6699z"
          />
          <path
            className="serviceIcon"
            d="M31.3198,31.48H48.04c0.0278,0,0.0498-0.022,0.0498-0.0498v-13c0-0.0278-0.022-0.0498-0.0498-0.0498H31.3198     c-0.0278,0-0.0498,0.022-0.0498,0.0498v13C31.27,31.458,31.292,31.48,31.3198,31.48z M47.9902,18.48v12.9004H31.3696V18.48     H47.9902z"
          />
          <path
            className="serviceIcon"
            d="M51.0098,31.48H67.73c0.0278,0,0.0498-0.022,0.0498-0.0498v-13c0-0.0278-0.022-0.0498-0.0498-0.0498H51.0098     c-0.0278,0-0.0498,0.022-0.0498,0.0498v13C50.96,31.458,50.9819,31.48,51.0098,31.48z M67.6802,18.48v12.9004H51.0596V18.48     H67.6802z"
          />
          <path
            className="serviceIcon"
            d="M70.7202,31.48h16.73c0.0278,0,0.0498-0.022,0.0498-0.0498v-13c0-0.0278-0.022-0.0498-0.0498-0.0498h-16.73     c-0.0278,0-0.0498,0.022-0.0498,0.0498v13C70.6704,31.458,70.6924,31.48,70.7202,31.48z M87.4004,18.48v12.9004H70.77V18.48     H87.4004z"
          />
        </g>
      </svg>
    </Icon>
    <h3>Replacement</h3>
  </ServiceType>
)

export const Estimate = () => (
  <ServiceType to="free-estimates">
    <Icon>
      <svg viewBox="0 0 100 125">
        <rect
          className="serviceIcon"
          x="14.62"
          y="56.88"
          width="7.75"
          height="6"
        />
        <rect
          className="serviceIcon"
          x="24.62"
          y="56.88"
          width="7.75"
          height="6"
        />
        <rect
          className="serviceIcon"
          x="34.62"
          y="56.88"
          width="7.75"
          height="6"
        />
        <rect
          className="serviceIcon"
          x="14.62"
          y="66.88"
          width="7.75"
          height="6"
        />
        <rect
          className="serviceIcon"
          x="24.62"
          y="66.88"
          width="7.75"
          height="6"
        />
        <rect
          className="serviceIcon"
          x="34.62"
          y="66.88"
          width="7.75"
          height="6"
        />
        <rect
          className="serviceIcon"
          x="14.62"
          y="76.88"
          width="7.75"
          height="6"
        />
        <rect
          className="serviceIcon"
          x="24.62"
          y="76.88"
          width="7.75"
          height="6"
        />
        <rect
          className="serviceIcon"
          x="34.62"
          y="76.88"
          width="7.75"
          height="6"
        />
        <rect
          className="serviceIcon"
          x="14.62"
          y="46.88"
          width="27.75"
          height="6"
        />
        <path
          className="serviceIcon"
          d="M93.87,75.88V11.13a3,3,0,0,0-3-3H34.12a3,3,0,0,0-3,3v27h-22a3,3,0,0,0-3,3V88.88a3,3,0,0,0,3,3H47.87a3,3,0,0,0,3-3v-10h40A3,3,0,0,0,93.87,75.88Zm-49,10H12.12V44.13H44.87Zm43-13h-37V41.13a3,3,0,0,0-3-3H37.12v-24H87.87Z"
        />
        <rect
          className="serviceIcon"
          x="40.62"
          y="20.88"
          width="7.75"
          height="6"
        />
        <rect
          className="serviceIcon"
          x="53.62"
          y="20.88"
          width="27.75"
          height="6"
        />
        <rect
          className="serviceIcon"
          x="40.62"
          y="30.88"
          width="7.75"
          height="6"
        />
        <rect
          className="serviceIcon"
          x="53.62"
          y="30.88"
          width="27.75"
          height="6"
        />
        <rect
          className="serviceIcon"
          x="53.62"
          y="40.88"
          width="27.75"
          height="6"
        />
        <rect
          className="serviceIcon"
          x="53.62"
          y="50.88"
          width="27.75"
          height="6"
        />
        <rect
          className="serviceIcon"
          x="53.62"
          y="60.88"
          width="27.75"
          height="6"
        />
      </svg>
    </Icon>
    <h3>Estimate</h3>
  </ServiceType>
)

export const Opener = () => (
  <ServiceType to="/garage-door-openers">
    <Icon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
        <g>
          <path
            className="serviceIcon"
            d="M92.93,90.813h-8.684V26.637c0-0.001,0-0.002,0-0.002c0-0.001,0-0.002,0-0.002v-9.626    c0-0.001,0-0.002,0-0.002c0-0.001,0-0.001,0-0.002V7.375c0-0.001,0-0.001,0-0.002c0-1.001-0.811-1.812-1.812-1.812l0,0H17.091    c-1.001,0-1.812,0.811-1.812,1.812v77.694l-5.961,5.747H7.069c-1.001,0-1.812,0.811-1.812,1.812c0,1.001,0.811,1.812,1.812,1.812    h85.862c1.001,0,1.812-0.811,1.812-1.812C94.742,91.625,93.931,90.813,92.93,90.813z M33.635,90.813H14.541l18.226-17.573    c0.468-0.452,0.659-1.122,0.498-1.752c-0.004-0.015-0.39-1.548-0.536-3.237c-0.195-2.252,0.185-3.133,0.333-3.263    c1.539-1.357,6.606-4.296,8.429-5.315c0.051-0.028,0.1-0.059,0.148-0.092c0.745-0.516,2.762-1.469,3.33-0.767    c0.468,0.579,0.413,0.915,0.392,1.042c-0.109,0.668-0.925,1.393-1.338,1.667l-6.177,3.381c-0.643,0.352-0.987,1.037-0.937,1.723    c-0.003,0.043-0.005,0.086-0.005,0.129v8.95c0,1.001,0.811,1.812,1.812,1.812h15.355c-1.493,1.537-3.405,3.398-5.271,4.912    c-2.637,2.141-4.233,1.107-4.485,0.916c-0.682-0.659-1.693-0.619-2.401,0.016l-8.061,7.221    C33.771,90.655,33.699,90.733,33.635,90.813z M49.763,68.897c2.98,0,5.404-2.424,5.404-5.404c0-2.98-2.424-5.404-5.404-5.404    c-0.353,0-0.699,0.035-1.034,0.1c-0.186-0.525-0.484-1.083-0.944-1.652c-0.725-0.896-2.409-2.249-5.546-1.237    c-0.66,0.213-1.253,0.49-1.713,0.734v-2.866h18.473v20.726H40.526v-6.326l4.143-2.267C45.415,67.394,47.416,68.897,49.763,68.897z     M47.983,63.493c0-0.982,0.798-1.78,1.78-1.78s1.78,0.798,1.78,1.78c0,0.982-0.798,1.78-1.78,1.78S47.983,64.475,47.983,63.493z     M80.622,90.813H39.025l4.339-3.886c0.38,0.155,0.829,0.293,1.343,0.377c0.351,0.058,0.696,0.084,1.034,0.084    c2.197,0,4.083-1.124,5.342-2.146c3.326-2.699,6.665-6.294,7.957-7.726h1.772c1.001,0,1.812-0.811,1.812-1.812v-24.35    c0-1.001-0.811-1.812-1.812-1.812h-7.971c-0.629-1.042-1.772-1.739-3.078-1.739c-1.305,0-2.449,0.697-3.078,1.739h-7.971    c-1.001,0-1.812,0.811-1.812,1.812v6.439c0,0.11,0.01,0.218,0.029,0.322c-2.168,1.279-4.985,3.023-6.268,4.154    c-1.312,1.159-1.817,3.232-1.541,6.341c0.093,1.049,0.259,2.027,0.398,2.724L18.904,81.573V28.447h61.719L80.622,90.813    L80.622,90.813z M80.622,24.823H18.904v-6.007h61.719L80.622,24.823L80.622,24.823z M80.622,15.192H18.904V9.186h61.719    L80.622,15.192L80.622,15.192z"
          />
          <path
            className="serviceIcon"
            d="M40.568,41.215c0.355,0,0.685-0.106,0.966-0.28l0.002,0.002l-0.008,0.007c0,0,0.012-0.01,0.018-0.015    c0.118-0.074,0.229-0.158,0.325-0.256c0.361-0.268,1.001-0.7,1.881-1.127c1.872-0.907,3.894-1.367,6.011-1.367    s4.139,0.46,6.011,1.367c0.862,0.418,1.491,0.839,1.856,1.109c0.109,0.112,0.234,0.207,0.367,0.288l0,0l0,0    c0.278,0.169,0.601,0.271,0.95,0.271c1.015,0,1.837-0.822,1.837-1.837c0-0.414-0.143-0.792-0.374-1.1c0,0-0.043-0.076-0.108-0.131    c-0.135-0.149-0.294-0.272-0.471-0.37c-1.345-1.003-4.903-3.222-10.068-3.222c-5.13,0-8.674,2.189-10.04,3.201    c-0.203,0.106-0.382,0.247-0.532,0.418c-0.049,0.042-0.083,0.072-0.095,0.083l0.014,0.015c-0.235,0.308-0.378,0.689-0.378,1.106    C38.732,40.392,39.554,41.215,40.568,41.215z"
          />
          <path
            className="serviceIcon"
            d="M57.303,43.22c-0.972-0.734-3.652-2.445-7.541-2.445c-4.845,0-7.82,2.659-7.945,2.771    c-0.739,0.674-0.793,1.819-0.12,2.56c0.357,0.392,0.848,0.592,1.34,0.592c0.435,0,0.872-0.156,1.219-0.472    c0.02-0.018,2.102-1.827,5.505-1.827c3.391,0,5.43,1.762,5.516,1.837l-0.011-0.01l0.003-0.004    c0.325,0.292,0.751,0.476,1.223,0.476c1.015,0,1.837-0.822,1.837-1.837C58.331,44.14,57.91,43.521,57.303,43.22z"
          />
        </g>
      </svg>
    </Icon>
    <h3>Opener</h3>
  </ServiceType>
)
export const Fish = () => (
  <svg viewBox="0 0 1280 640">
    <g
      transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
      fill="#fff"
      stroke="none"
    >
      <path d="M4740 5724 c-25 -2 -103 -8 -175 -14 -1487 -119 -2892 -721 -4000 -1713 -151 -134 -350 -335 -432 -434 -116 -141 -157 -304 -118 -472 32 -135 106 -234 364 -491 707 -702 1633 -1266 2613 -1591 552 -183 1117 -291 1726 -330 237 -15 720 -7 902 15 1205 147 2528 707 4093 1733 109 71 194 120 200 116 61 -37 464 -345 742 -567 443 -354 766 -633 1148 -989 143 -133 262 -243 267 -245 4 -2 153 151 331 340 177 189 340 361 361 383 l38 41 -258 241 c-293 274 -457 420 -727 649 -281 237 -688 564 -895 719 -36 26 -75 57 -87 68 l-22 19 157 121 c580 444 1066 856 1579 1335 l253 236 -34 36 c-18 19 -178 189 -355 377 -177 188 -326 345 -331 348 -11 7 -33 -12 -288 -251 -449 -424 -1051 -926 -1627 -1360 -132 -99 -245 -183 -252 -187 -6 -4 -105 55 -230 136 -1394 917 -2690 1490 -3778 1671 -301 50 -402 58 -770 61 -192 1 -370 1 -395 -1z m820 -1078 c969 -137 2035 -586 3338 -1406 28 -18 52 -36 52 -40 0 -8 -53 -41 -335 -213 -1060 -646 -2042 -1058 -2866 -1202 -230 -40 -404 -55 -649 -55 -1182 0 -2325 367 -3300 1058 -138 99 -386 294 -475 376 l-50 46 45 41 c82 74 323 264 445 351 561 400 1219 709 1870 879 319 83 676 145 970 168 77 6 156 13 175 15 97 11 672 -3 780 -18z" />
    </g>
  </svg>
)
