import Image from "next/image";

const Card = ({ data }) => {
  console.log("data", data);
  const { name, image } = data;
  return (
    <div className="w-[calc(33.33%-2rem)] h-[500px] hover:scale-105 rounded overflow-hidden  shadow-slate-300 shadow-lg bg-white ">
      <div className="text-center">
        <Image src={image} height={300} width={300} />
      </div>
      <div className="text-xl text-center text-slate-700 font-bold">{name}</div>
    </div>
  );
};

export default Card;
