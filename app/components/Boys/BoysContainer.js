import BoysGrid from "./BoysGrid";
import localData from "../../../data/data";

// async function getData() {
//   const res = await fetch(
//     // "https://service.mnetplus.world/api/boysplanet/artist"
//   );
//   return res.json();
// }

const BoysContainer = () => {
  const data = localData;
  const filterKor = data?.filter((b) => b.globalCode === "KOR");
  const filterGlo = data?.filter((b) => b.globalCode === "GLO");
  return (
    <>
      <BoysGrid data={data} glo={filterGlo} kor={filterKor} />
    </>
  );
};

export default BoysContainer;
