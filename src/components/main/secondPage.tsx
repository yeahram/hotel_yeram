import Navbar from "../Navbar";
import NavbarBlack from "../NavbarBlack";
import FourCaroucel from "../caroucel/FourCaroucel";

const SecondPage = () => {
  return (
    <div
      className="
       relative
       h-[100vh]
        "
    >
      <div className="absolute top-0 l-0 w-full h-[85px]">
        <Navbar colorType="black" />
      </div>

      <div className="absolute top-1/4 w-full flex justify-center">
        <div className="w-full left-1/2">
          <FourCaroucel />
        </div>
      </div>
    </div>
  );
};
export default SecondPage;
