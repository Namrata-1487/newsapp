import React from 'react'

export const Newsitem = ({src,url,title,description}) => {
  return (
    <div className="card m-5">
    <img src={src} className="card-img-top img-fluid w-100" />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <a href={url} className="btn btn-primary">
        Read More
      </a>
    </div>
  </div>
  )
}
