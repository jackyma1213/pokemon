import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <header className="w-screen sticky top-0 z-30 bg-gradient-to-t from-gray-700/95 via-slate-800 to-slate-900">
    <div className="w-max mx-auto cursor-pointer">
      <Link href="/">
        <div>
          <Image src="/img/pokemonLogo.png" width={250} height={100} />
        </div>
      </Link>
    </div>
  </header>
);

export default Header;
