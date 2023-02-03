import Image from "next/image";
import spinner from "../asset/spinner.svg";

const Loader = () => {
  return (
    <div>
      <Image className="block w-10 m-auto " src={spinner} alt="Loading..." />
    </div>
  );
};

export default Loader;
