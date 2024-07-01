import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="men" title="Men Wardrobe" />
          <Button onClickHandler={handleClick} value="women" title="Women Wardrobe" />
          <Button onClickHandler={handleClick} value="office" title="Office Equipment" />
          <Button onClickHandler={handleClick} value="car" title="Automobiles" />
          <Button onClickHandler={handleClick} value="communication" title="Phone and Telecommunication" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
