import './index.scss';
import logo2 from '../../assets/logo2.png';
import { ReactComponent as TelIcon } from '../../assets/telephone.svg';
import { ReactComponent as EmailIcon } from '../../assets/email.svg';
import { ReactComponent as PlaceIcon } from '../../assets/place.svg';

const Footer = ({ data }) => {
  const companyInfo = data.companyInfo;

  return (
    <footer id="contacts" className="footer">
      <div className="footer__wrapper">
        <div className="footer__left">
          <p className="footer__company-name">{companyInfo.companyName}</p>
          <a
            href={companyInfo.companyAdressLink}
            className="footer__company-adress"
          >
            <PlaceIcon />
            {companyInfo.companyAdress}
          </a>
        </div>
        <div className="footer__logo-wrapper">
          <img
            src={logo2}
            alt="logo2"
            width="150"
            height="120"
            className="footer__logo"
          />
        </div>

        <div className="footer__right">
          {/*           <a href={companyInfo.companyTelLink} className="footer__company-tel">
            <TelIcon />
            {companyInfo.companyTel}
          </a> */}
          <a
            href={companyInfo.companyEmailLink}
            className="footer__company-email"
          >
            <EmailIcon />
            {companyInfo.companyEmail}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
