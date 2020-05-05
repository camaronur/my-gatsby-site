export const query = graphql`
  fragment fragmentPhotoPost on MarkdownRemark {
    id
    frontmatter {
      title
      desc
      location
      device
      url
      date
      category
      photo {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  fragment fragmentMetaData on Site {
    siteMetadata {
      title
      description
      author
      socialLinks {
        github {
          name
          url
        }
        instagram {
          name
          url
        }
        twitter {
          name
          url
        }
      }
      url
    }
  }
`