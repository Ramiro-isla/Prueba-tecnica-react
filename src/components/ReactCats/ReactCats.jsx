import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./ReactCats.scss";

const ReactCats = () => {
  const [catImageUrl, setCatImageUrl] = useState("");

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((data) => setCatImageUrl(data[0].url));
  }, []);

  return (
    <div className="ReactCats">
    <Header/>
      {catImageUrl ? (
        <img src={catImageUrl} alt="Cat" style={{ maxWidth: "500px" }} />
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ReactCats;
