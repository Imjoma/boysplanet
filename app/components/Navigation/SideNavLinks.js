import Link from "next/link";

const SideNavLinks = ({ menu, setMenu }) => {
  const isSideNavShow = menu === false ? "sidebarHide" : "sidebarShow";
  return (
    <div
      className={
        isSideNavShow +
        " lg:hidden duration-500 ease-out fixed top-0 z-40 left-0 w-screen h-screen  bg-purple-500 bg-opacity-60"
      }
    >
      <ul className="flex flex-col justify-center h-full px-5 space-y-6 ">
        <Link href="/">
          <span onClick={() => setMenu(!menu)}>Home</span>
        </Link>
        <Link href="/news">
          <span onClick={() => setMenu(!menu)}>News</span>
        </Link>
        <Link href="/boys">
          <span onClick={() => setMenu(!menu)}>Boys</span>
        </Link>
        <Link href="/vote">
          <span onClick={() => setMenu(!menu)}>Vote</span>
        </Link>
        <Link href="/media">
          <span onClick={() => setMenu(!menu)}>Media</span>
        </Link>
      </ul>
    </div>
  );
};

export default SideNavLinks;
