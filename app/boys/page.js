export const metadata = {
  title: "Search | BoysPlanet",
  description: "98 Participants of the survival show Boysplanet",
};

import BoysContainer from "../components/Boys/BoysContainer";

const Boys = () => {
  return (
    <main className={"bg-[#120A30]"}>
      <section className="pb-24 pt-28 lg:pt-12">
        <BoysContainer />
      </section>
    </main>
  );
};

export default Boys;
