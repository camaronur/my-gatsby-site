import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { fragmentMetaData } from '../components/fragment'
import {
  SEO,
  Layout,
  Grid,
  ColSidebar,
  ColContent,
  ColExtra,
  Header,
  Html,
  ExternalList
} from '../components'
function IndexPage({ location, data: { metaData, heroData, strapiData } }) {
  const { twitter, instagram } = metaData.siteMetadata.socialLinks
  var { Image, Content, Başlık } = strapiData
console.log(Content);

  return (
    <Layout>
      <SEO title="Anasayfa" />
      <section id="section-hero">
        <div className="container">
          <Grid>
            <ColSidebar>
              <Header pathname={location.pathname} />
            </ColSidebar>
            <ColContent>
              <Html>
                <Img
                  backgroundColor="#ff0000"
                  fluid={Image.childImageSharp.fluid}
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<div> ${Content} </div>`
                  }}
                ></div>
              </Html>
            </ColContent>
            <ColExtra>
              <ExternalList urls={[twitter, instagram]} />
            </ColExtra>
          </Grid>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    metaData: site {
      ...fragmentMetaData
    }
    heroData: file(name: { eq: "gatsby-astronaut" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    strapiData: strapiPage(slug: { eq: "homepage" }) {
      id
      Content
      Title
      Publish
      Description
      slug
      Image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
export default IndexPage
