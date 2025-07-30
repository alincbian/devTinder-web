import axios from "axios";
import { BASE_URL } from "../utils/contstants";
// import { useEffect, useState } from "react";

const Premium = () => {
  //   const [isUserPremium, setIsUserPremium] = useState(false);
  //   useEffect(() => {
  //     verifyPremiumUser();
  //   }, []);

  // const verifyPremiumUser = async () => {
  //   const res = await axios.get(BASE_URL + "/premium/verify", {
  //     withCredentials: true,
  //   });

  //   if (res.data.isPremium) {
  //     setIsUserPremium(true);
  //   }
  // };

  const handleBuyClick = async (type) => {
    const order = await axios.post(
      `${BASE_URL}payment/create`,
      {
        membershipType: type,
      },
      { withCredentials: true }
    );

    const { checkoutUrl } = order?.data;

    console.log(checkoutUrl);

    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  };

  //    isUserPremium ? (
  //     "You're are already a premium user"
  //   ) : (

  return (
    <div className="m-10">
      <div className="flex w-full">
        <div className="card bg-base-300 rounded-box grid h-80 flex-grow place-items-center">
          <h1 className="font-bold text-3xl">Silver Membership</h1>
          <ul>
            <li> - Chat with other people</li>
            <li> - 100 connection Requests per day</li>
            <li> - Blue Tick</li>
            <li> - 3 months</li>
          </ul>
          <button
            onClick={() => handleBuyClick("gold")}
            className="btn btn-secondary"
          >
            Buy Silver
          </button>
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="card bg-base-300 rounded-box grid h-80 flex-grow place-items-center">
          <h1 className="font-bold text-3xl">Gold Membership</h1>
          <ul>
            <li> - Chat with other people</li>
            <li> - Inifiniye connection Requests per day</li>
            <li> - Blue Tick</li>
            <li> - 6 months</li>
          </ul>
          <button
            onClick={() => handleBuyClick("gold")}
            className="btn btn-primary"
          >
            Buy Gold
          </button>
        </div>
      </div>
    </div>
  );
  //   );
};
export default Premium;
