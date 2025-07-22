import axios from "axios";
import { BASE_URL } from "../utils/contstants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addrequest, removerequest } from "../utils/requestSlice";

const Requests = () => {
  const requests = useSelector((state) => state.requests);
  const dispatch = useDispatch();

  const reviewRequest = async (status, requestId) => {
    try {
      const res = await axios.post(
        `${BASE_URL}request/review/${status}/${requestId}`,
        {},
        { withCredentials: true }
      );
      dispatch(removerequest(requestId));
    } catch (err) {}
  };

  const fetchRequests = async () => {
    try {
      const res = await axios.get(`${BASE_URL}user/requests/received`, {
        withCredentials: true,
      });

      dispatch(addrequest(res?.data?.data));
    } catch (err) {
      // Handle error case
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests?.length === 0)
    return <h1 className="flex justify-center my-10">No Requests Found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Requests</h1>

      {requests?.map((request) => {
        const { id, firstName, lastName, photoUrl, age, gender, about } =
          request?.Sender;

        return (
          <div
            key={id}
            className="flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <div className="flex gap-4">
              <button
                className="btn btn-primary"
                onClick={() => reviewRequest("rejected", request?.id)}
              >
                Reject
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => reviewRequest("accepted", request?.id)}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
