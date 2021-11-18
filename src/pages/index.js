import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Header from '../components/Header'
import '../assets/style.css'

const Index = ({ data }) => {
    return (
        <div>
            <Header />
            <p>Testando</p>
            {data.allFile.edges.map(item => {
                const image = getImage(item.node)
                return (
                    <GatsbyImage image={image} />
                )
            })}
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