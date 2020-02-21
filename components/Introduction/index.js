import React from 'react'
import Typical from 'react-typical'

// Styles
import { colors } from '../../styles'

// Components
import Section from '../Section'

// ===========================================================
const Introduction = () => (
  <Section>
    <div
      style={{
        height: 'inherit',
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }}
    >
      <h1 style={{ fontSize: '5rem', color: colors['white'], margin: '0' }}>4ACES</h1>
      <Typical
        steps={[
          '',
          250,
          'Autonomous.',
          250,
          'Autonomous. Connected.',
          250,
          'Autonomous. Connected. Electric.',
          250,
          'Autonomous. Connected. Electric. Shared.',
          1000
        ]}
        loop={Infinity}
        wrapper="h2"
      />
      <style jsx>{`
        h2 {
          margin: 0.75rem 0 8rem;

          font-size: 1rem;
          color: ${colors['white']};
        }
      `}</style>
    </div>
  </Section>
)

export default Introduction
