
import RightCradContent from "./RightCradContent";

const RightCard = (props) => {
  const img = props.img;


  return (
    <div className="h-full w-80 shrink-0 bg-red-600 rounded-4xl overflow-hidden relative">
      <img
        className="h-full w-full object-cover "
        src={img}
        alt="Card 1 Pic"
      />
      <RightCradContent button={props.button} intro={props.intro} tag={props.tag} />
    </div>
  );
};

export default RightCard;
