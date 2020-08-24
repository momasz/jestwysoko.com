import React, { useState } from "react";
import PropTypes from "prop-types";
import ProgressiveImage from "react-progressive-graceful-image";
import Video from "./Video";
import {
  Link,
  Switch,
  Route
} from "react-router-dom";
import { shuffle } from "../utils";
import videos from "../videos";

const randomised = shuffle(videos);

const Videos = ({ randomizeVideos = false }) => {
  const videosData = randomizeVideos ? randomised : videos;
  const [ filteredVideos, setFilteredVideos ] = useState(videosData);

  function filterVideos(e) {
    const filter = e.target.value;
    setFilteredVideos(videosData.filter(v =>
      v.title.match(new RegExp(filter, 'gi'))));
  }

  return (
    <div>
      <Switch>
        <Route path="/video/:videoId">
          <Video />
        </Route>
      </Switch>

      <div className="navbar-wrapper">
        <div className="navbar">
          <div className={"video-filter"}>
            <span>👋 yo!</span>
            <input
              onChange={filterVideos}
              className={"video-filter"}
              type="text"
              placeholder={"szukaj filmu ..."}
            />
          </div>
          <a className="logo" href="/">
            <img src="/static/images/logo.png" alt=""/>
          </a>
        </div>
      </div>

      <div className={"movies-wrapper"}>
        {filteredVideos.length === 0 && (
          <div className={"shrug"}>
            <span>¯\_(ツ)_/¯</span>
          </div>
        )}

        <ul className={"movies-container"}>
          {filteredVideos.length > 0 && filteredVideos.map(video => {
            return (
              <li key={video.id} className={"movie"}>
                <Link to={`/video/${video.id}`}>
                  <div className={"image-wrapper"}>
                    <div className={"progressive-image"}>
                      <ProgressiveImage
                        src={video.poster}
                        placeholder={video.thumbnail}>
                        {
                          (src, loading) =>
                            <img
                              style={{ filter: loading ? 'blur(10px)' : 'blur(0)' }}
                              src={src}
                              alt={video.title}
                            />
                        }
                      </ProgressiveImage>
                    </div>
                    <div className={"meta-wrapper"}>
                      <div className={"meta"}>
                        <span className={"title"}>{video.title}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
};

Videos.propTypes = {
  randomizeVideos: PropTypes.bool
};

export default Videos;
