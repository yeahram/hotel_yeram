import Navbar from "../Navbar";
import NavbarBlack from "../NavbarBlack";

const SecondPage = () => {
  return (
    <div
      className="
        flex
        justify-center
        items-center
        h-[100vh]
       
        "
    >
      <Navbar colorType="black" />

      <div
        className="
        border-[1px]
          border-state-50

      "
      >
        캐러셀입장
      </div>
    </div>
  );
};
export default SecondPage;
