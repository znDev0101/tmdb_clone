import React from "react"

const Description = ({ data }) => {
  return <div>{data.name || data.title}</div>
}

export default Description
