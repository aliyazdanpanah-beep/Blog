import Link from "next/link";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="Navwrapper">
      <Link href={"/"}> Home </Link>
      <Link href={"/blogs"}> Blog </Link>
    </div>
  );
};

export default Navbar;
