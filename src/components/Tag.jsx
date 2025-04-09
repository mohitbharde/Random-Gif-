import React, { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

const Tag = () => {
  const [tag, setTag] = useState("");

  const { gif, loading, fetchData } = useGif(tag);

  function clickHandler() {
    fetchData();
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className="w-1/2 bg-blue-500 rounded-lg flex flex-col items-center gap-y-5 mt-[15px] mb-[15px] border-black">
      <h1 className="text-3xl underline uppercase font-bold">
        Random {tag} Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} alt="" width="450" />}

      <input
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={changeHandler}
        value={tag}
      />

      <button
        onClick={clickHandler}
        className="w-10/12 bg-yellow-400 opacity-20 py-2 rounded-lg mb-4 "
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
