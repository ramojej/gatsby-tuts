import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import img from "../images/image-3.jpeg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixedImage: file(relativePath: { eq: "image-1.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluidImage: file(relativePath: { eq: "image-2.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <Wrapper>
      <article>
        <h3>Basic Image</h3>
        <img src={img} alt="" className="basic" />
      </article>
      <article>
        <h3>Fixed Image with Blur Effect</h3>
        <Image fixed={data.fixedImage.childImageSharp.fixed} />
      </article>
      <article>
        <h3>Fluid Image using SVG</h3>
        <Image fluid={data.fluidImage.childImageSharp.fluid} />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem;
  .basic {
    width: 100%;
  }
  article {
    border: 3px solid skyblue;
    padding: 1rem 0;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`

export default Images
