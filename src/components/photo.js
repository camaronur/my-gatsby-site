import React from 'react'
import Img from 'gatsby-image'

import AspectRatio from './aspect-ratio'

import styles from './photo.module.css'

function Photo({ img, aspectRatio, children }) {
  return (
    <figure className={styles.photo}>
      {img && (
        <AspectRatio ratio={aspectRatio}>
          <Img backgroundColor="#ff0000" className={styles.photoHover} fluid={img} />
        </AspectRatio>
       
      )}
      {children && (
        <figcaption className={styles.caption}>{children}</figcaption>
      )}
    </figure>
  )
}

export default Photo
