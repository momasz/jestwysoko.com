import React from "react";
import PropTypes from "prop-types";
import {
  useParams
} from "react-router-dom";

const Video = ({ width = 560, height = 315 }) => {
  let { videoId } = useParams();
  const src = `https://www.youtube.com/embed/${videoId}?controls=0`;
  const allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
  return (
    <iframe
      width={width}
      height={height}
      src={src}
      frameBorder="0"
      allow={allow}
      allowFullScreen
    ></iframe>
  )
};

Video.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default Video;
