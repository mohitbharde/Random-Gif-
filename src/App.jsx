import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="min-w-full h-screen flex flex-col background relative items-center">
      <h1 className="bg-white rounded-lg absolute w-11/12 mt-[40px] px-10 py-2 text-3xl text-center font-bold ">
        Random Gifs
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[90px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
