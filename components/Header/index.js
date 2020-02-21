import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

// Styles
import { colors } from '../../styles'

// Components
// const Navigation = styled.nav`
//   position: fixed;
//   top: 0;

//   height: 6rem;
//   width: 100vw;

//   background: ${colors['blue']};

//   transition: all 1s ease;
// `

// const A = styled.a<{ marginRight?: string }>`
//   margin: ${({ marginRight }) => (marginRight ? `0 ${marginRight} 0 0` : '0')};

//   font-size: 1rem;
//   text-decoration: none;
//   color: ${colors['white']};

//   cursor: pointer;
// `

// ===========================================================
const Header = () => {
  const [show, setShow] = useState(true)
  const [scrollValue, setScrollValue] = useState(0)

  const updateScroll = useCallback(() => {
    if (window.scrollY >= 100) {
      if (scrollValue > window.scrollY && !show) setShow(true)
      else if (scrollValue < window.scrollY && show) setShow(false)
    }
    setScrollValue(window.scrollY)
  }, [setScrollValue, show, setShow])

  useEffect(() => {
    window.addEventListener('scroll', updateScroll)
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: show ? '0' : '-6rem',
        height: '6rem',
        width: '100vw',
        background: colors['blue']
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
        <div>
          <Link href="/">
            <a>Logo</a>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Link href="/work">
            <a>Work</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <a>News</a>
          <a>Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Header
