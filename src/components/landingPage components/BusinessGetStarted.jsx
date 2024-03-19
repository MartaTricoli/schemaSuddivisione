import { useState } from "react";
import { constants } from "../../constants";
import { createNewPublisher } from "../../utilities/publisher";

const BusinessGetStarted = ({ handleCloseGetStartedModal }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    _password: "",
    business_info: {
      business_name: "",
      city: "",
      p_iva: "",
      address: "",
      cap: ""
    }
  });

  const _setRecrusiveKey = (key, value) => {
    return key.split(".").reverse().reduce((a,c) => ({[c]:a}), value);
  }

  const handleInput = (event) => {
    const { name, value } = event.target;

    setData({ 
      ...data,
      ..._setRecrusiveKey(name, value),
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (data.password !== data._password) {
      //gestire l'errore
      alert("passwords do not match");
      return;
    }

    const { _password, ...formData } = data;

    createNewPublisher(formData, (error, response) => {
      if (error) {
        //metti a display l'errore per l'utente
        console.log(error);
        return;
      }

      //cosa fare se la registrazione va buon fine
      alert("publisher registration completed");
      console.log(response);
    });
  };

  return (
    <>
      <div className="relative flex  items-center justify-between bg-white p-12 max-w-[1480px] rounded-2xl ">
        <button
          className="absolute w-4 h-4 text-black font-bold bg-transparent top-10 right-10"
          onClick={handleCloseGetStartedModal}
        >
          X
        </button>
        <div className="px-4 py-4 flex-initial">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            data-name="Layer 1"
            width="654.23657"
            height="682.11354"
            viewBox="0 0 654.23657 682.11354"
          >
            <path
              d="M892.88171,744.55677c0,25.68-138.79,46.5-310,46.5s-310-20.82-310-46.5c0-18.18,69.57-33.93,170.96-41.57,41.81-3.16,89.05-4.93,139.04-4.93,20.55,0,40.63.3,60.05.87C785.40173,703.12678,892.88171,721.95673,892.88171,744.55677Z"
              transform="translate(-272.88171 -108.94323)"
              fill="#3f3d56"
            />
            <ellipse cx="270" cy="630.61354" rx="119" ry="14.5" opacity="0.1" />
            <ellipse
              cx="269.5"
              cy="521.11354"
              rx="112.5"
              ry="120"
              fill="#3f3d56"
            />
            <rect x="235" y="592.11354" width="70" height="64" fill="#A93226" />
            <polygon
              points="396.5 607.614 392.5 629.614 418.5 633.614 435.5 623.614 434.5 607.614 396.5 607.614"
              fill="#575a89"
            />
            <path
              d="M538.38171,303.55677s-2,23-7,24,11,41,11,41h24l19-5-9-22s-12-16-3-29S538.38171,303.55677,538.38171,303.55677Z"
              transform="translate(-272.88171 -108.94323)"
              fill="#a0616a"
            />
            <path
              d="M538.38171,303.55677s-2,23-7,24,11,41,11,41h24l19-5-9-22s-12-16-3-29S538.38171,303.55677,538.38171,303.55677Z"
              transform="translate(-272.88171 -108.94323)"
              opacity="0.1"
            />
            <path
              d="M488.38171,479.55677s-26,50-5,60,26,9,26,12-4,2-2,7-4,25,2,37,4,21,4,21,0,1,2,5,3,7,2,9-7,15-1,18,37,5,40,0-3-8,0-11,5-4,3-6-4-27-4-27,5-29,3-33-5-8-3-11,4-2,5-6,3-13,3-13l11-1,26,5s29,32,61,42c0,0,9,9,12,9s3,0,2,2-4,2-2,4,5-1,3,2-4,3-2,5-1,13-1,14-9,95-6,97,45,8,48,0-2-18-2-18,15-120,11-128-18-44-93-67c0,0-21-4-21-7s-2-22-6-23-27-2-27-2l-29,9-40-7Z"
              transform="translate(-272.88171 -108.94323)"
              fill="#2f2e41"
            />
            <path
              d="M523.38171,647.55677l-5,18s-4,29,1,36c3.92739,5.49834,10.93965,12.23063,23.94449,13.4122a16.07115,16.07115,0,0,0,16.77855-11.11774,5.00653,5.00653,0,0,0,.277-1.29446c0-2-3-26-3-26l-5-25-1-7Z"
              transform="translate(-272.88171 -108.94323)"
              fill="#2f2e41"
            />
            <path
              d="M669.38171,733.55677s-5-5-6,0-5,26,2,27,74,11,81,7,20-10,12-13-31-12-31-12-13-17-15-18-13,1-18,5S669.38171,733.55677,669.38171,733.55677Z"
              transform="translate(-272.88171 -108.94323)"
              fill="#2f2e41"
            />
            <circle cx="289.5" cy="184.61354" r="31" fill="#a0616a" />
            <path
              d="M559.38171,363.55677l-12-13-13.30147-26s-9.69853-3-11.69853,2-38,21-38,21,9,84,5,92-11,40-5,43,34,0,43,4,35,4,42-1,9-9,16-6c5.95926,2.554,19.89075-84.761,23.90164-110.781a11.844,11.844,0,0,0-4.90807-11.50971c-8.97276-6.29384-25.13277-17.13965-27.99357-15.70925C572.38171,343.55677,559.38171,363.55677,559.38171,363.55677Z"
              transform="translate(-272.88171 -108.94323)"
              fill="#575a89"
            />
            <path
              d="M602.38171,359.55677h0a11.85952,11.85952,0,0,1,8.91063,10.19577l8.08936,72.80423s-20,43-30,14S602.38171,359.55677,602.38171,359.55677Z"
              transform="translate(-272.88171 -108.94323)"
              fill="#575a89"
            />
            <path
              d="M600.38171,449.55677l22-6s4,28,8,28-14,16-23,14-22-9-23-14,9-26,9-26Z"
              transform="translate(-272.88171 -108.94323)"
              fill="#575a89"
            />
            <path
              d="M538.98,306.92974c2.10792-4.648,1.74193-10.06966,3.48463-14.86653a17.72716,17.72716,0,0,1,26.95315-8.38071c2.24178,1.59841,4.48928,3.84417,7.22559,3.539,2.94671-.32859,5.575-3.61593,8.2842-2.41116,3.00277,1.33533,2.19174,6.71676,5.23391,7.95972,1.6013.65426,3.49355-.35311,4.41715-1.8157a11.2246,11.2246,0,0,0,1.28583-4.97622c.41976-4.26508.79909-8.779-1.05062-12.64493a30.28893,30.28893,0,0,1-2.02829-4.08992,13.99385,13.99385,0,0,1-.38561-4.03439c-.01689-5.01309-.38281-10.24215-2.90568-14.57417-2.79955-4.80711-7.97447-7.881-13.37326-9.22227s-11.055-1.13561-16.59807-.66635c-9.16324.77574-18.71927,2.43858-25.93856,8.135a10.14728,10.14728,0,0,0-2.49336,2.61953,13.525,13.525,0,0,0-1.32811,3.84148,79.44958,79.44958,0,0,1-6.96764,18.27716,39.65627,39.65627,0,0,0-3.59543,7.76544c-.76559,2.75442-.71387,5.89343.8887,8.26085,1.30475,1.92745,3.39065,2.95463,5.02945,4.53044,1.62387,1.56146,2.38368,4.56438,4.18252,5.74673,1.57033,1.03215,3.4513.30356,5.0529,1.39752C536.40966,302.72479,536.55818,305.80443,538.98,306.92974Z"
              transform="translate(-272.88171 -108.94323)"
              fill="#2f2e41"
            />
            <path
              d="M564.38171,378.55677l3-6s44,13,53,25c0,0,22-14,34-12l12,2-37,33-47-4Z"
              transform="translate(-272.88171 -108.94323)"
              fill="#f2f2f2"
            />
            <path
              d="M562.38171,372.55677l-41,57,59,29s5.51572,3,9.75786,0l39.24214-18,37-53-37,19s-4-8-12-4Z"
              transform="translate(-272.88171 -108.94323)"
              fill="#A93226"
            />
            <path
              d="M625.38171,473.55677l8-21s18-23,8-34-21,32-21,32Z"
              transform="translate(-272.88171 -108.94323)"
              fill="#a0616a"
            />
            <path
              d="M533.07939,470.20556l17.45624-14.152s27.11-10.865,23.97851-25.39746-34.22053,17.14513-34.22053,17.14513Z"
              transform="translate(-272.88171 -108.94323)"
              fill="#a0616a"
            />
            <path
              d="M489.88171,369.05677h-1s-15.5-18.5-18.5,6.5-13,108,13,111,44.5-12.5,44.5-12.5,19-29,12-29c-3.38691,0-12.59835-1.52116-21-1-8.96272.556-17.01615,3.08078-16.5.5C503.38171,439.55677,517.88171,376.05677,489.88171,369.05677Z"
              transform="translate(-272.88171 -108.94323)"
              opacity="0.1"
            />
            <path
              d="M488.38171,349.55677l-4-2s-16,3-19,28-13,108,13,111,61-4,61-4,7-38,0-38-43,5-42,0S516.38171,356.55677,488.38171,349.55677Z"
              transform="translate(-272.88171 -108.94323)"
              fill="#575a89"
            />
            <polygon
              points="338 353.114 349.027 336.213 356 364.114 338 372.114 338 353.114"
              fill="#575a89"
            />
            <circle cx="111.47314" cy="85.11354" r="27" fill="#f2f2f2" />
            <rect
              x="79.47314"
              y="286.11354"
              width="64"
              height="64"
              fill="#f2f2f2"
            />
            <polygon
              points="372 0 388.199 28.057 404.397 56.114 372 56.114 339.603 56.114 355.801 28.057 372 0"
              fill="#f2f2f2"
            />
          </svg>
        </div>
        <div className="px-4 py-4 flex-1">
          <form onSubmit={handleSubmit}>
            <label className="mb-5 block text-base font-semibold text-new_red sm:text-xl">
              Owner Info:
            </label>
            <div className="-mx-3 flex flex-wrap">
              <div className="mb-5 w-full px-3 sm:w-1/2">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-new_red"
                >
                  Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={data.name}
                  onInput={handleInput}
                  placeholder="Name"
                  className="w-[550px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-new_red"
              >
                Business Email Address
              </label>
              <input
                required
                type="email"
                name="email"
                value={data.email}
                onInput={handleInput}
                placeholder="Enter your email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-new_red"
                  >
                    Password
                  </label>
                  <input
                    required
                    type="password"
                    name="password"
                    value={data.password}
                    onInput={handleInput}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="time"
                    className="mb-3 block text-base font-medium text-new_red"
                  >
                    Confirm Password
                  </label>
                  <input
                    required
                    type="password"
                    name="_password"
                    value={data._password}
                    onInput={handleInput}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <label className="mb-5 block text-base font-semibold text-new_red sm:text-xl">
              Company Info:
            </label>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="business_info.business_name"
                    className="mb-3 block text-base font-medium text-new_dark_blue"

                  >
                    Business Name
                  </label>
                  <input
                    required
                    type="text"
                    name="business_info.business_name"
                    value={data.business_info.business_name}
                    onInput={handleInput}
                    placeholder="Business Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <label
                  htmlFor="Iva"
                  className="mb-3 block text-base font-medium text-new_red"
                >
                  Business P-Iva
                </label>
                <input
                  required
                  type="text"
                  name="business_info.p_iva"
                  value={data.business_info.p_iva}
                  onInput={handleInput}
                  placeholder="Partita Iva"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
              <div className="mb-5 w-full px-3 sm:w-1/2">
                <label
                  htmlFor="address"
                  className="mb-3 block text-base font-medium text-new_dark_blue"
                >
                  Address
                </label>
                <input
                  required
                  type="text"
                  name="business_info.address"
                  value={data.business_info.address}
                  onInput={handleInput}
                  placeholder="Address"
                  className="w-[550px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

            <div className="mb-5 pt-3">
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <label
                    htmlFor="city"
                    className="mb-3 block text-base font-medium text-new_red"
                  >
                    Business City
                  </label>
                  <div className="mb-5">
                    <select
                      required
                      name="business_info.city"
                      value={data.city}
                      onChange={handleInput}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                      <option value="">Select a City...</option>
                      {constants.CITY_IT.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mb-5 w-full px-3 sm:w-1/2">
                  <label
                    htmlFor="business_info.cap"
                    className="mb-3 block text-base font-medium text-new_dark_blue"

                  >
                    Cap
                  </label>
                  <input
                    required
                    type="text"

                    
                    name="cap"
                    value={data.business_info.cap}
                    onInput={handleInput}
                    placeholder="Cap"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div>
              <button className="hover:shadow-form w-full rounded-md bg-[#A93226] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BusinessGetStarted;
