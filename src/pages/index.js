import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import {fragmentMetaData} from '../components/fragment';
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
function IndexPage({ location, data: { metaData, heroData } }) {
  const { twitter, instagram } = metaData.siteMetadata.socialLinks
  console.log({heroData});
  
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
              
                <Img backgroundColor="#ff0000" fluid={heroData.childImageSharp.fluid} />
                <p>
                  Ben Adem, evli ve iki çocuk babası olarak İstanbul'da
                  yaşıyorum. Askerlik vazifemi tamamladıktan sonra tanıştığım
                  web işçiliği serüvenimde 12 seneyi devirdim. Şu an Frontend
                  Geliştirici olarak <b>ICS Defense</b> şirketinde çalışıyorum.
                </p>
                <p>
                  Kendimi sürekli güncel tutmaya ve öğrendiklerimi insanlarla
                  paylaşmaya çalışıyorum. Özellikle youtube kanalımda{' '}
                  <Link to="/videos">eğitim videoları</Link> yayınlıyorum.
                </p>
                <p>
                  Hayatın içinden <Link to="/photos">fotoğraflar</Link> çekmeyi,
                  yeni yerler keşfetmeyi, dağları, rüzgarı ve bulutları çok
                  seviyorum.
                </p>
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
  }
`
export default IndexPage
