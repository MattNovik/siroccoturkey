import './index.scss';

const InfoBlock = ({ image, data }) => {
  return (
    <div className="info-block">
      <img src={image} alt="#" className="info-block__img" />
      <p className="info-block__text">{data.text}</p>
    </div>
  );
};

export default InfoBlock;
