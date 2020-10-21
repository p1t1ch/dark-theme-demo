import React from 'react'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <ol>
        <li>Build with Gatsby, React, Typescript, Emotion</li>
        <li>Use CSS variables for theming</li>
        <li>Respect OS preferences</li>
        <li>Save user choice in Local Storage</li>
        <li>Avoid theme FLIC effect with body script</li>
      </ol>
    </Layout>
  )
}

export default IndexPage
