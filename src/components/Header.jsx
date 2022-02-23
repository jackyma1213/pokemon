import Image from "next/image";

const Header = () => {
  return (
    <div className="w-screen h-20 sticky">
      <div className="w-max mx-auto">
        <Image src="/img/pokemonLogo.png"/>
      </div>
    </div>
  )
}

export default Header