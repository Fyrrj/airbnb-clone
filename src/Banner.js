import React, { useState } from "react";
import Search from "./Search";
import "./css/Banner.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && (
          <h1>
            <Search />
          </h1>
        )}
        <Button
          className="banner__searchButton"
          variant="outlined"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of gateway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined" onClick={() => history.push("/search")}>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;