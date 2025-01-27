import { RiArrowLeftWideLine } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";
import useAdds from "../store/useAdds";
import { useEffect, useState } from "react";
import "../styles/ads.css";

const Ads = () => {
  const { adds } = useAdds();
  const [ad, setAd] = useState(0);

  useEffect(() => {
    if (adds.length > 0) {
      setAd(0);
    }
  }, [adds]);

  return (
    <div id="addblock">
      <RiArrowLeftWideLine
        className="slideadd"
        id="slideaddleft"
        onClick={() => {
          addscroll(adds, ad, setAd, "left");
        }}
      />
      <img src={adds[ad]} alt="" className="addimage" />
      <RiArrowRightWideFill
        className="slideadd"
        id="slideaddright"
        onClick={() => {
          addscroll(adds, ad, setAd, "right");
        }}
      />
    </div>
  );
};

function addscroll(adds, ad, setAd, side) {
  if (side == "left") {
    if (ad > 0) {
      setAd((a) => a - 1);
    } else {
      setAd(adds.length - 1);
    }
  } else {
    if (ad < adds.length - 1) {
      setAd((a) => a + 1);
    } else {
      setAd(0);
    }
  }
}

export default Ads;
