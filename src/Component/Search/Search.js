import React from "react";
import Layout from "../Layout/Layout";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";

function Search() {
  const [data, setdata] = useState();
  const { query } = useParams();
  const search = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=029522b8eac38746f4c41545b4c6aaad&language=en-US&query=${query}&page=1`
    )
      .then((res) => res.json())
      .then((datas) => {
        console.log(datas);
        setdata(datas.results);
      });
  };
  useEffect(() => {
    search();
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

export default Search;
