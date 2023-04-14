import MnetChatbox from "../components/Mnet/MnetChatbox";
import WhatIsBoysplanet from "../components/Mnet/WhatIsBoysplanet";

export const metadata = {
  title: "Not Official Mnet | BoysPlanet",
  description: "98 Participants of the survival show Boysplanet",
};

const page = () => {
  return (
    <main className="bg-[#120A30]  pb-20  ">
      <WhatIsBoysplanet />
      <MnetChatbox />
    </main>
  );
};

export default page;
