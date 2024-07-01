import "./Contact.css";
import instagram_icon from '../../db/instagram_icon.png'
import pintester_icon from '../../db/pintester_icon.png'
import whatsapp_icon from '../../db/whatsapp_icon.png'


const Colors = () => {
  return (
    <>
      <div>
      <h2 className="color-title">Contact</h2>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
      </div>
    </>
  );
};

export default Colors;
