import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Header from '../components/Header'

const Index = ({ data }) => {
    return (
        <div>
            <Header />
            <section className="p-4 grid grid-cols-2 gap-4">
                {data.allFile.edges.map(item => {
                    const image = getImage(item.node)
                    return (
                        <>
                            <GatsbyImage image={image} className="rounded" />
                        </>
                    )
                })}
            </section>
        </div>
    )
}

export const pageContent = graphql`
query MyQuery {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`

export default Index