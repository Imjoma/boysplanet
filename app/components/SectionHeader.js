import Image from "next/image";
import Link from "next/link";
import navigationIcon from "../../public/assets/icons/ico-slide-right@2x.png";
import { usePathname } from "next/navigation";

const SectionHeader = ({ title }) => {
  const pathname = usePathname();

  const icon = (
    <span>
      <Image
        src={navigationIcon}
        width={22}
        height={22}
        alt={title + "Navigation Button"}
      />
    </span>
  );

  const isMediaPage = pathname.includes("media") ? (
    <div className="flex flex-row text-white origin-bottom-left lg:scale-110 w-fit">
      <span>{title}</span>
    </div>
  ) : (
    <Link href={"/media"}>
      <div className="flex flex-row text-white origin-bottom-left select-none lg:scale-110 w-fit">
        <span>{title}</span>
        {icon}
      </div>
    </Link>
  );

  return (
    <>
      {title === "slug" ? "" : <div className="ml-4 w-fit">{isMediaPage}</div>}
    </>
  );
};
export default SectionHeader;
