import Image from "next/image";

const Header = () => {
  return (
    <div className="w-screen sticky top-0 z-30 bg-gradient-to-b from-indigo-200 via-red-200 to-yellow-100/5">
      <div className="w-max mx-auto">
        <Image src="/img/pokemonLogo.png" width={250} height={100} />
      </div>
    </div>
  );
};

export default Header;
