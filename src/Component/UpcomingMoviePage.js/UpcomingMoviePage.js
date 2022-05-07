import React from "react";
import "./UpcomingMoviePage.css";
import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
function UpcomingMoviePage() {
  const [data, setdata] = useState();
  const Upcoming = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=029522b8eac38746f4c41545b4c6aaad&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((datas) => {
        setdata(datas.results);
      });
  };
  useEffect(() => {
    Upcoming();
  }, []);

  return (
    <Layout className="container">
      <div className="row movierow">
        {data &&
          data.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
      </div>
    </Layout>
  );
}

export default UpcomingMoviePage;
