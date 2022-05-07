import React from "react";
import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./TopRatedPage.css";

function TopRatedPage() {
  const [data, setdata] = useState();
  const TopRated = () => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=029522b8eac38746f4c41545b4c6aaad"
    )
      .then((res) => res.json())
      .then((datas) => {
        setdata(datas.results);
      });
  };
  useEffect(() => {
    TopRated();
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

export default TopRatedPage;
