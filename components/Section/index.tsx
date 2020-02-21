import React, { FC } from 'react'

// Styles
import { colors, TColor } from '../../styles'

// ===========================================================
interface Props {
  height?: string
  background?: TColor
}

// ===========================================================
const Section: FC<Props> = ({ children, height = '35rem', background = 'blue' }) => (
  <div
    style={{
      height: height,
      minHeight: height,
      width: '100vw',
      background: colors[background]
    }}
  >
    {children}
  </div>
)

export default Section
