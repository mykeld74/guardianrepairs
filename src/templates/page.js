import React from 'react'
import { Container } from '../components/containers'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Page = ({ pageContext }) => {
  const { name, content } = pageContext

  return (
    <Layout>
      <SEO title={name} />
      <Container>
        <h1>{name}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </Container>
    </Layout>
  )
}

export default Page
