import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div id="right" className="h-full w-2/3 p-6 rounded-4xl flex flex-nowrap gap-10 ">
      {props.users.map(function (elem, idx) {
        return (
          <RightCard
            key={idx}
            img={elem.img}
            button={elem.button}
            intro={elem.intro}
            tag={elem.tag}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
