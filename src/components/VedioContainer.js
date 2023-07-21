import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "./Constant";
import VedioCard from "./VedioCard";
import { Link } from "react-router-dom";

const VedioContainer = () => {
  const [vedios, setVedios] = useState([]);
  useEffect(() => {
    getVedio();
  }, []);

  const getVedio = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVedios(json?.items);
  };
  return (
    <div className="flex flex-wrap">
      {/* <AdVedioCard info=vedio[0]/> */}
      {vedios.map((vedio) => (
        <Link to={"/watch?v=" + vedio.id} key={vedio.id}>
          <VedioCard info={vedio} />
        </Link>
      ))}
    </div>
  );
};

export default VedioContainer;
