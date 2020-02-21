import React from 'react'

// Styles
import { colors, TColor } from '../../styles'

// ===========================================================
const Section = ({ children, height = '35rem', background = 'blue' }) => (
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
