import Image from "next/image";
import Link from "next/link";
import UnitsDropdown from "./Dropdown/UnitsDropdown";

export default function Navbar() {
  return (
    <header>
      <nav className="my-10 flex justify-between">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={200}
            height={200}
            alt="Weather Now logo"
          />
        </Link>
        <UnitsDropdown />
      </nav>
    </header>
  );
}
