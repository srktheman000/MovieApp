import React from "react";
import "./Detailpage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Cast from "./Cast/Cast";

function Detailpage() {
  const [data, setData] = useState();
  const { itemid } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${itemid}?api_key=029522b8eac38746f4c41545b4c6aaad&language=en-US`;
  async function fetchdetail() {
    try {
      const res = await fetch(url);
      const resjson = await res.json();
      setData(resjson);
    } catch (e) {
      console.log(e.status_message);
    }
  }

  useEffect(() => {
    fetchdetail();
  }, []);
  return (
    <div className="main">
      {data ? (
        data.id ? (
          <>
            <div className="maincontainer">
              <div className="leftcontainer">
                <div className="leftup">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
                    alt="Movieimage"
                    className="detailImg"
                  />
                  <div className="rightup">
                    <div className="name">{data.original_title}</div>
                    <div className="detailrating">
                      Rating:{data.vote_average}{" "}
                    </div>
                    <div className="movietype">
                      {data.genres.map((type) => type.name + ",")}
                    </div>
                    <div className="ReleaseDate">
                      Release Date {data.release_date}
                    </div>
                  </div>
                </div>
                <div className="Overview">
                  <h5>Overview</h5>
                  {data.overview}
                </div>
              </div>
              <div className="rightcontainer">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                  alt="Movie Name"
                  className="detailposterimg"
                />
              </div>
            </div>
            <div>
              <h3 className="castcontainer">Cast</h3>
              <div className="container">
                <Cast itemid={itemid} />
              </div>
            </div>
          </>
        ) : (
          <div>Data not available</div>
        )
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}

export default Detailpage;
