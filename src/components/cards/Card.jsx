import Header from "../header/Header";
import CardStyle from "./card.module.css";

const Card = ({ title, desc, image }) => {
  return (
    <div className={CardStyle.card}>
      <Header title={title} />
      <div className={CardStyle.imgDiv}>
        <img src={image} alt="" />
      </div>
      <p className={CardStyle.desc}>{desc}</p>
    </div>
  );
};

export default Card;
