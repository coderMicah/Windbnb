import { useForm } from "react-hook-form";
import { StaysContext } from "@/context/StaysContext";
import { useContext, useEffect, useState } from "react";

function SearchModal(props) {
  const { register, handleSubmit } = useForm();
  const { state: stays } = useContext(StaysContext);
  const [filteredStays, setFilteredStays] = useState([]);
  const [filteredGuests, setFilteredGuests] = useState([]);
  const { dispatch } = useContext(StaysContext);
  const [city,setCity] = useState("")
  const onSubmit = (data) => console.log(data);
  const handleCityInput = () => {
    
  }

  // useEffect(() => {
  //   dispatch({type:"FILTERED_GUESTS",payload:filteredGuests})
  // },[filteredGuests])

  return (
    <div className="h-max w-full bg-white absolute top-0 left-0">
      <div className="relative top-10 left-6 w-[95%] mb-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-start  rounded-2xl"
        >
          <div className="w-[45%] sm:w-full">
            <input
              {...register("stay")}
              onChange={(e) =>
                setFilteredStays(
                  stays.filter((stay) =>
                    stay.city.toLowerCase().includes(e.target.value)
                  )
                )
              }
              className="w-full text-md p-2 pl-4 border-r shadow  rounded-l-2xl border-r-gray-300 focus:outline-none"
              type="text"
              placeholder="Helsinki,Finland"
            />
            <div>
              {filteredStays &&
                [...new Set(filteredStays.map((value) => value.city))]
                  .map((city) => {
                    return filteredStays.find((value) => value.city === city);
                  })
                  .map((stay) => (
                    <p
                      key={stay.title}
                      className="flex items-center space-x-1 text-sm p-2"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-[#4F4F4F]"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span onClick={() => setCity(stay.city)}>
                        {" "}
                        {stay.city},{stay.country}
                      </span>
                    </p>
                  ))}
            </div>
          </div>

          <div className="w-[50%] sm:w-full ">
            <div>
              <input
                {...register("guest")}
                onChange={(e) =>
                  setFilteredGuests(
                    filteredStays.filter(
                      (stay) => stay.maxGuests >= e.target.value
                    )
                  )
                }
                className="w-full text-md p-2 pl-4 shadow border-r border-r-gray-300 focus:outline-none"
                type="text"
                placeholder="Add Guests"
              />
              <div className="p-4">
                <h3 className="font-bold text-sm">Adults</h3>
                <p className="text-[#BDBDBD] text-sm">Age 13 or above</p>
                <p className="flex pt-3 items-center space-x-2 font-bold text-sm">
                  <span className="p-[2px] border rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  </span>
                  <span>0</span>
                  <span className="p-[2px] border rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </span>
                </p>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm">Children</h3>
                <p className="text-[#BDBDBD] text-sm">2 - 12</p>
                <p className="flex pt-3 items-center space-x-2 font-bold text-sm">
                  <span className="p-[2px] border rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  </span>
                  <span>0</span>
                  <span className="p-[2px] border rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <button className="w-max shadow p-3 rounded-r" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchModal;
