import React from "react";
import "./MainHeading.css";

function MainHeading({ imageURL, title, publishedAt, content, url }) {
  return (
    <a href={url}>
      <main>
        <div className='cards-container container flex'></div>
      </main>

      <div className='card'>
        <div className='card-content'>
          <img src={imageURL} alt='newsimage' className='card-image' />
          <h3 className='main-heading'>{title}</h3>
          <h6 className='sub-heading'>{publishedAt}</h6>
          <p className='news-desc'>{content}</p>
        </div>
      </div>
    </a>
  );
}

export default MainHeading;
