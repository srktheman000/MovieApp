import React from "react";
import { useEffect, useState } from "react";
import "./Cast.css";
import actorimage from "../../../Assets/actorimage.png";

function Cast(props) {
  const [data, setData] = useState();
  const itemid = props.itemid;
  const url = `https://api.themoviedb.org/3/movie/${itemid}/credits?api_key=029522b8eac38746f4c41545b4c6aaad&language=en-US`;
  async function fetchcast() {
    await fetch(url)
      .then((res) => res.json())
      .then((datas) => {
        console.log(datas);
        setData(datas.cast);
      });
  }

  useEffect(() => {
    fetchcast();
  }, []);

  return (
    <div className="row">
      {data ? (
        data.map((cast) => {
          console.log(cast);
          return (
            <div className="col-lg-2  col-md-4 castdiv">
              {cast.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  alt="actorimage"
                  className="castImage"
                />
              ) : (
                <img
                  src={actorimage}
                  alt="actorimage"
                  className="dummycastImage"
                />
              )}

              <div>{cast.name}</div>
              <div>Character : {cast.character}</div>
            </div>
          );
        })
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default Cast;
