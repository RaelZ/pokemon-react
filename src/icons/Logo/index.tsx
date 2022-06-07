import React from 'react'
import useTheme from '../../hooks/useTheme'
import { themes } from '../../themes'

const Logo = () => {
  const { theme } = useTheme()

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 840"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_85_177" fill="white">
        <path d="M0 400C0 179.086 179.086 0 400 0C620.914 0 800 179.086 800 400H0Z" />
      </mask>
      <path
        d="M0 350C0 129.086 179.086 -50 400 -50C620.914 -50 800 129.086 800 350V400C800 206.7 620.914 50 400 50C179.086 50 0 206.7 0 400V350ZM800 400H0H800ZM0 400V0V400ZM800 0V400V0Z"
        fill={themes[theme].colors.secondary}
        mask="url(#path-1-inside-1_85_177)"
      />
      <mask id="path-3-inside-2_85_177" fill="white">
        <path d="M800 440C800 660.914 620.914 840 400 840C179.086 840 1.56562e-05 660.914 3.49691e-05 440L800 440Z" />
      </mask>
      <path
        d="M800 480C800 700.914 620.914 880 400 880C179.086 880 1.21593e-05 700.914 3.14722e-05 480L3.49691e-05 440C1.75875e-05 638.822 179.086 800 400 800C620.914 800 800 638.823 800 440L800 480ZM3.49691e-05 440L800 440L3.49691e-05 440ZM800 440L800 840L800 440ZM0 840L3.49691e-05 440L0 840Z"
        fill={themes[theme].colors.alternative}
        mask="url(#path-3-inside-2_85_177)"
      />
      <mask id="path-5-inside-3_85_177" fill="white">
        <path d="M0 480C0 413.726 53.7258 360 120 360H680C746.274 360 800 413.726 800 480H0Z" />
      </mask>
      <path
        d="M0 480C0 408.203 58.203 350 130 350H670C741.797 350 800 408.203 800 480C800 419.249 746.274 370 680 370H120C53.7258 370 0 419.249 0 480ZM800 480H0H800ZM0 480V360V480ZM800 360V480V360Z"
        fill={themes[theme].colors.alternative}
        mask="url(#path-5-inside-3_85_177)"
      />
      <mask id="path-7-inside-4_85_177" fill="white">
        <path d="M800 393C800 441.049 761.049 480 713 480L86.9999 480C38.9512 480 3.40522e-06 441.049 7.60578e-06 393L800 393Z" />
      </mask>
      <path
        d="M800 393C800 446.572 756.572 490 703 490L96.9999 490C43.4283 490 2.9224e-06 446.572 7.60578e-06 393C3.88804e-06 435.526 38.9512 470 86.9999 470L713 470C761.049 470 800 435.526 800 393ZM7.60578e-06 393L800 393L7.60578e-06 393ZM800 393L800 480L800 393ZM0 480L7.60578e-06 393L0 480Z"
        fill={themes[theme].colors.secondary}
        mask="url(#path-7-inside-4_85_177)"
      />
      <mask
        id="path-9-outside-5_85_177"
        maskUnits="userSpaceOnUse"
        x="310"
        y="380"
        width="180"
        height="150"
        fill="black"
      >
        <rect fill="white" x="310" y="380" width="180" height="150" />
        <path d="M310 500C310 450.294 350.294 410 400 410C449.706 410 490 450.294 490 500V530H310V500Z" />
      </mask>
      <path
        d="M310 470C310 420.294 350.294 380 400 380C449.706 380 490 420.294 490 470V500C490 466.863 449.706 440 400 440C350.294 440 310 466.863 310 500V470ZM490 530H310H490ZM310 530V410V530ZM490 410V530V410Z"
        fill={themes[theme].colors.secondary}
        mask="url(#path-9-outside-5_85_177)"
      />
      <mask
        id="path-11-outside-6_85_177"
        maskUnits="userSpaceOnUse"
        x="310"
        y="464"
        width="180"
        height="125"
        fill="black"
      >
        <rect fill="white" x="310" y="464" width="180" height="125" />
        <path d="M490 464C490 513.706 449.706 554 400 554C350.294 554 310 513.706 310 464L490 464Z" />
      </mask>
      <path
        d="M490 499C490 548.706 449.706 589 400 589C350.294 589 310 548.706 310 499L310 464C310 494.376 350.294 519 400 519C449.706 519 490 494.376 490 464L490 499ZM310 464L490 464L310 464ZM490 464L490 554L490 464ZM310 554L310 464L310 554Z"
        fill={themes[theme].colors.alternative}
        mask="url(#path-11-outside-6_85_177)"
      />
    </svg>
  )
}

export default Logo
