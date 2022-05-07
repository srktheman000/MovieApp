import React from "react";
import Layout from "../Layout/Layout";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Home.css";

function Home() {
  const [data, setdata] = useState();
  const Home = () => {
    fetch(
      " https://api.themoviedb.org/3/movie/popular?api_key=029522b8eac38746f4c41545b4c6aaad&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((datas) => {
        setdata(datas.results);
      });
  };
  useEffect(() => {
    Home();
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

export default Home;
