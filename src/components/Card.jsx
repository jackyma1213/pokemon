import Image from "next/image";
import Link from "next/link";

const Card = ({ data }) => {
  console.log("data", data);
  const { name, image, id } = data;
  return (
    <Link href={`/pokemon/${id}`}>
      <div className="w-[calc(33.33%-2rem)] h-[500px] hover:scale-105 rounded overflow-hidden shadow-slate-300 shadow-lg bg-white cursor-pointer ">
        <div className="text-center">
          <Image src={image} height={300} width={300} />
        </div>
        <div className="text-xl text-center text-slate-700 font-bold">
          {name}
        </div>
      </div>
    </Link>
  );
};

export default Card;
