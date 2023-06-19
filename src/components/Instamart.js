import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  //   const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-black p-2 m-2 ">
      <h1 className="font-bold text-xl">{title}</h1>
      {isVisible ? (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}

      {isVisible && <h1>{description}</h1>}
    </div>
  );
};

const Instamart = () => {
  //   const [sectionConfig, setSectionConfig] = useState({
  //     showAbout: false,
  //     showTeam: false,
  //     showCareer: false,
  //     showProduct: false,
  //     showDetail: false,
  //   });
  const [visibleSection, setVisibleSection] = useState("about");

  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About InstaMart"}
        description={"This is the about session of instamart"}
        isVisible={visibleSection == "about"}
        setIsVisible={() => {
          setVisibleSection("about");
        }}
      />
      <Section
        title={"Team InstaMart"}
        description={
          "This is the Team  of instamart..The Team has more menbers"
        }
        isVisible={visibleSection == "team"}
        setIsVisible={() => {
          setVisibleSection("team");
        }}
      />
      <Section
        title={"Careers InstaMart"}
        description={"This is the career  of instamart.."}
        isVisible={visibleSection == "careers"}
        setIsVisible={() => {
          setVisibleSection("careers");
        }}
      />
      <Section
        title={"Product InstaMart"}
        description={"This is the product  of instamart.."}
        isVisible={visibleSection == "product"}
        setIsVisible={() => {
          setVisibleSection("product");
        }}
      />
      <Section
        title={"Detail InstaMart"}
        description={"This is the detail  of instamart.."}
        isVisible={visibleSection == "detail"}
        setIsVisible={() => {
          setVisibleSection("detail");
        }}
      />
      {/* <AboutInstaMart/>
            <DetailsOfInstaMart/>
            <TeamInstaMart/>
            <Product/>
            <Careers/> */}
    </div>
  );
};

export default Instamart;
