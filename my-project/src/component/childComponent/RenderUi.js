import { Img } from "../../css/cssHome";
const RenderUi = (props) => {
  const { item } = props;
  return (
    <div className="col-3">
      <div className="caretory-game">
        <Img className="caretory-img" src={item.imgItem} />
        <p>{item.name}</p>
      </div>
    </div>
  );
};
export default RenderUi;
