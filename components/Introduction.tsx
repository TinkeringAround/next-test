import React, { FC } from 'react'
import Typical from 'react-typical'

// Styles
import { colors } from '../styles'
import './Introduction.module.css'

// Components
import Section from './Section'

// ===========================================================
const Introduction: FC = () => (
  <Section>
    <div className="intro">
      <h1 style={{ fontSize: '5rem', color: colors['white'], margin: '0' }}>4ACES</h1>
      <Typical
        steps={[
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
    </div>
  </Section>
)

export default Introduction
