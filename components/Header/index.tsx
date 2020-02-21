import React, { FC } from 'react'

// Styles
import { colors } from '../../styles'

// ===========================================================
const Header: FC = () => {
  const top = true

  return (
    <nav
      style={{
        position: 'fixed',
        top: '0',

        height: '6rem',
        width: '100vw',
        background: colors[top ? 'blue' : 'white']
      }}
    >
      <div
        style={{
          width: '90%',
          height: 'inherit',
          margin: '0 auto',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div>Logo</div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <a style={{ marginRight: '1rem', color: colors['white'] }}>Work</a>
          <a style={{ marginRight: '1rem', color: colors['white'] }}>About</a>
          <a style={{ marginRight: '1rem', color: colors['white'] }}>News</a>
          <a style={{ color: colors['white'] }}> Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Header
