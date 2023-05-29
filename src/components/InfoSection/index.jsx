import './index.scss';
import { nanoid } from 'nanoid';
import AdditionalInfoBlock from '../AdditionalInfoBlock';
import addInfo1 from '../../assets/addinfo1.jpg';
import addInfo2 from '../../assets/addinfo2.jpg';
import addInfo3 from '../../assets/addinfo3.jpg';
import addInfo4 from '../../assets/addinfo4.jpg';
import addInfo5 from '../../assets/addinfo5.jpg';
import addInfo6 from '../../assets/addinfo6.jpg';
import addInfo7 from '../../assets/addinfo7.jpg';

const InfoSection = ({ data }) => {
  const dataList = data.additionalInfo;

  return (
    <section id="services" className="info-section">
      <h2 className="info-section__kind-of-work">{data.secondBLockName}</h2>
      <ul className="info-section__list">
        {dataList.map((item, index) => (
          <li className="info-section__item" key={nanoid()}>
            <AdditionalInfoBlock
              image={
                index === 0
                  ? addInfo3
                  : index === 1
                  ? addInfo6
                  : index === 2
                  ? addInfo5
                  : index === 3
                  ? addInfo7
                  : index === 4
                  ? addInfo1
                  : index === 5
                  ? addInfo2
                  : index === 6
                  ? addInfo7
                  : ''
              }
              data={item}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InfoSection;
