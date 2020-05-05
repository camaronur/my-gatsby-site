import React from 'react'
import { graphql } from 'gatsby'

import { Link, Photo, Meta } from './index'

function PhotoPost({ aspectRatio, url, desc, photo, title, location, device }) {
  return (
    <article>
      <Link url={url}>
        <Photo aspectRatio={aspectRatio} img={photo.childImageSharp.fluid}>
          <Meta
            title={title}
            desc1={[location, device].join(' • ')}
            desc2={desc}
          />
        </Photo>
      </Link>
    </article>
  )
}

export default PhotoPost
