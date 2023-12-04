import React from 'react';

const isValidYoutubeLink = (url) => {
  // Use a regular expression to check if the URL is a YouTube link
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})$/;
  return youtubeRegex.test(url);
};

const isValidDataURI = (url) => {
  // Use a regular expression to check if the URL is a base64-encoded data URI representing an image
  return url
};

const MediaComponent = ({ url }) => {
  const isYoutubeLink = isValidYoutubeLink(url);
  const isDataURI = isValidDataURI(url);

  return (
    <div className="media">
      {isYoutubeLink ? (
        // If it's a YouTube link, render the iframe
        <iframe
          className="videoMedia"
          width="1050"
          height="615"
          src={`https://www.youtube.com/embed/${url}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : isDataURI ? (
        // If it's a data URI, render the img
        <img
          className="imgMedia"
          alt=''
          style={{ width: '60%', overflow: 'hidden' }}
          src={url}
        />
      ) : (
            // If it's neither a YouTube link nor a data URI, render a placeholder or handle it as needed
            null
      )}
    </div>
  );
};

export default MediaComponent;
