import React from "react";
import videos from "./../videos";
import Video from "./Video";
import {
  Link,
  Switch,
  Route
} from "react-router-dom";

const Videos = () => (
  <div>
    <Switch>
      <Route path="/video/:videoId">
        <Video />
      </Route>
    </Switch>

    <ul>
      {videos.map(video => {
        return (
          <li key={video.id}>
            <Link to={`/video/${video.id}`}>
              <img src={video.thumbnail} alt={video.title}/>
            </Link>
          </li>
        )
      })}
    </ul>
  </div>
);

export default Videos;
