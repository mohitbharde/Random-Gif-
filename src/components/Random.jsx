import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-1/2 bg-green-500 rounded-lg flex flex-col items-center gap-y-5 mt-[15px] p-5 border-black">
      <h1 className="text-3xl underline uppercase font-bold">Random Gif</h1>

      {loading ? <Spinner /> : <img src={gif} alt="" width="450" />}

      <button
        onClick={clickHandler}
        className="w-10/12 bg-yellow-400 opacity-20 py-2 rounded-lg mb-4"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
