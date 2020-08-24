import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  useParams
} from "react-router-dom";

const Video = ({ width = 560, height = 315 }) => {
  const [loaded, setLoaded] = useState(false);
  let { videoId } = useParams();
  const src = `https://www.youtube.com/embed/${videoId}?controls=0`;
  const allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';

  useEffect(() => {
    setLoaded(false);
  });

  function onLoad() {
    setLoaded(true);
  }

  return (
    <div className={"movie-content"}>
      <div className={"movie-container open"}>
        <div className={"video-container"}>
          <div className={"video-element"}>
            <div className={loaded ? "loader loaded" : "loader"}></div>
            <div className={"video-wrapper"}>
              <div className={loaded ? "video loaded" : "video"}>
                <iframe
                  onLoad={onLoad}
                  loading="lazy"
                  width={width}
                  height={height}
                  src={src}
                  frameBorder="0"
                  allow={allow}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

Video.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default Video;
