const Card = ({ image, selected, onClick }) => {
  return (
    <div className="card">
      <div className={selected && "selected"}>
        <img alt="" src={image} className="card-face" />

        <img
          alt=""
          className="card-back"
          src={"/assets/ms-icon-150x150.png"}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Card;
