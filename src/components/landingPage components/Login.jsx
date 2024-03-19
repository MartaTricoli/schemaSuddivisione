import Logo from "../shared/Logo";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../store/reducers/authSlice";
import { constants } from "../../constants";

const Login = ({ handleCloseLoginModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setForm((form) => ({ ...form, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const results = await axios({
        url: `${constants.API_HOST}/auth/users/token`,
        method: "POST",
        data: form,
      });

      const data = results.data;
      dispatch(login(data));
      navigate("/myprofile");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="absolute top-0 left-0 flex justify-center items-center w-screen h-screen z-[999] ">
        <section className="bg-black bg-opacity-50 w-full h-screen flex justify-center items-center">
          <div className=" relative flex justify-center items-center max-w-[1480px] h-[80vh] bg-white w-full rounded-2xl">
            <button
              className="absolute w-4 h-4 text-black font-bold bg-transparent top-10 right-10"
              onClick={handleCloseLoginModal}
            >
              X
            </button>
            <div className="absolute left-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="500"
                height="500"
                viewBox="0 0 731.67004 625.99672"
              >
                <path
                  id="uuid-5ef434d5-ec3b-4be2-96d4-c13c471d6de8-1950"
                  d="M376.76337,311.69684c2.62042,10.50058-.88501,20.35364-7.82874,22.00711-6.9437,1.6535-14.69479-5.51819-17.31467-16.02283-1.10635-4.18195-1.15591-8.56552-.14453-12.784l-10.51895-44.63046,21.86432-4.45937,8.04852,44.47118c2.88568,3.29129,4.90674,7.20667,5.89404,11.41837,0,0,0,.00003,0,0Z"
                  fill="#fdadb0"
                />
                <g>
                  <polygon
                    points="285.09476 566.89746 286.44183 596.14917 285.0928 604.24353 289.81448 613.68689 326.91345 617.73407 328.93704 600.19635 309.37576 590.07843 308.80716 573.55005 285.09476 566.89746"
                    fill="#fdadb0"
                  />
                  <path
                    d="M324.21533,610.98877l-2.02359,2.69812-38.85165-11.19604s1.75269,17.26678,1.75269,20.63947,64.08002,3.37262,73.72256,2.02356,6.54608-10.11792,6.54608-10.11792l-39.9877-18.92865-1.15842,14.88147h.00003Z"
                    fill="#2f2e43"
                  />
                </g>
                <g>
                  <polygon
                    points="188.43921 545.36505 180.3541 573.50946 176.48561 580.7464 177.93686 591.20416 211.78952 606.91113 219.31921 590.94342 204.0247 575.09747 213.6188 550.21924 188.43921 545.36505"
                    fill="#fdadb0"
                  />
                  <path
                    d="M211.39197,599.65723l-2.78062,1.90863-33.22536-23.04083s-3.86533,16.91962-4.94466,20.11487,59.63062,23.70258,69.19777,25.51038,9.43983-7.49084,9.43983-7.49084l-31.82701-30.73029-5.85995,13.72815h.00002l-.00002-.00006Z"
                    fill="#2f2e43"
                  />
                </g>
                <polygon
                  points="287.70996 83.9671 289.12659 106.97251 246.16866 109.15169 259.47134 78.84175 287.70996 83.9671"
                  fill="#fdadb0"
                />
                <path
                  d="M290.22263,103.53149c-11.5144,5.13574-29.93115,3.73068-50.80225,0l-3.26205,144.59672s65.2879,13.12622,87.73538-11.0934l-11.81445-118.14453-21.85663-15.3588s0,.00002,0,.00002Z"
                  fill="#e0e1e2"
                />
                <polygon
                  points="316.80505 240.57915 224.63489 249.689 179.1496 558.53558 214.00221 558.53558 273.68228 346.90921 278.40808 586.74255 310.3071 586.74255 337.48035 293.15347 316.80505 240.57915"
                  fill="#2f2e43"
                />
                <path
                  d="M252.52422,94.67065l-30.96834,18.32601c-11.73149,6.9423-17.26108,20.9566-13.43071,34.03909l23.9342,81.74651s-38.97484,66.95746-26.31018,72.86465c28.4593,13.27441,70.92659,10.04227,70.92659,10.04227l-9.49146-160.30917-14.66013-56.70937,.00002,.00002s0-.00002,0-.00002Z"
                  fill="#3f3d58"
                />
                <path
                  d="M288.87726,102.92358l35.01645,13.60382,8.27011,101.01359,23.16013,81.37585c-39.22784,14.31915-35.56531,7.64648-35.56531,7.64648l-6.49796-140.41524-24.38345-63.22452,.00003,.00002s0-.00002,0-.00002Z"
                  fill="#3f3d58"
                />
                <path
                  d="M340.03061,297.19608l-.11996-.5528-35.79376-165.55103c-1.00015-4.62562,.2789-9.2623,3.50848-12.72181,3.22968-3.46,7.76883-5.05348,12.453-4.37245,5.77716,.83993,10.4024,5.04821,11.7822,10.72128l39.31598,161.6061-31.1459,10.8707h-.00003Z"
                  fill="#3f3d58"
                />
                <circle
                  cx="269.06998"
                  cy="55.22682"
                  r="34.85209"
                  fill="#fdadb0"
                />
                <path
                  d="M285.65121,10.07328c7.67664,2.69811,12.06934,4.24203,16.09317,8.11845,6.7966,6.5479,7.9184,15.29825,8.96057,23.4287,.8154,6.36049,1.86963,14.5842-1.85501,23.97997-1.27109,3.20641-7.43674,17.49225-19.23843,19.29762-2.31772,.3545-7.75916,.44773-6.19073-.71022,14.51544-10.71641,20.71027-17.18593,20.20239-33.70173-.31549-10.26221-15.99649-21.34199-25.30756-23.33377-3.92233-.83893-9.14426-.07252-12.88876,3.00152-7.82565,6.42446-7.49179,32.99092-15.74361,38.5444-3.39352,2.2839-1.13228-13.79295-3.52356-11.18581-4.71809,5.14422-1.69165,13.02216-.84383,16.02233,4.02164,14.23081,11.60382,15.62369,15.53183,27.77607,4.24091,13.12018-1.09653,25.47273-2.3623,28.40192-2.20163,5.0956-5.98048,13.84068-14.61356,18.03613-10.95815,5.32527-19.59561-1.60928-24.69019,4.33572-2.84799,3.32346-1.30746,6.84323-6.45113,17.1805-1.67912,3.37442-2.51868,5.06184-3.26193,5.00195-3.51727-.2832-9.21196-28.43777-.00171-54.65797,3.86536-11.00368,7.65221-21.78448,17.80276-30.21467,5.36661-4.45687,9.86757-6.0607,11.14871-11.2654,1.83022-7.4356-5.76976-10.60925-7.29326-22.3414-1.04176-8.02364-1.77267-19.49902,1.06029-26.85414,2.67509-6.94578,4.99741-12.97519,11.076-18.44197,1.4599-1.31307,13.24496-10.23845,25.7406-10.49022,5.75281-.11574,9.97934,7.72783,16.64917,10.072h.00006Z"
                  fill="#2f2e43"
                />
                <g>
                  <circle
                    cx="359.29443"
                    cy="229.27966"
                    r="85.24289"
                    fill="#0077b5"
                  />
                  <g>
                    <path
                      d="M337.72504,284.89374c5.17474-18.66635,10.34946-37.3327,15.52423-55.99905,1.10168-3.97395,1.95407-8.3876,4.47568-11.76016,1.94949-2.60733,5.01575-4.31322,8.26102-3.24098,7.7373,2.55643,7.61206,13.72102,7.47461,20.23466-.20746,9.83305-2.42706,19.64349-6.51288,28.59372-.56033,1.22742-.35031,2.69101,.89688,3.42047,1.07474,.6286,2.85709,.33725,3.42047-.89688,4.09116-8.96194,6.52292-18.55484,7.08868-28.39792,.48813-8.49306,.52472-19.69337-6.83652-25.48187-3.59787-2.82918-8.19009-3.66963-12.40845-1.71413-4.16846,1.93239-6.71384,5.93346-8.31454,10.0761-1.77991,4.60645-2.83997,9.54617-4.15762,14.29919l-4.24594,15.31598c-3.16235,11.40723-6.32468,22.81442-9.487,34.22165-.86093,3.10547,3.96158,4.43073,4.82141,1.32919h0v.00003h-.00003Z"
                      fill="#fff"
                    />
                    <path
                      d="M359.89587,258.89703c3.20197-12.01877,4.83801-24.44736,4.85159-36.88538,.00351-3.21741-4.99649-3.22243-5,0-.01312,12.01666-1.57947,23.94449-4.67297,35.55618-.82922,3.11255,3.99252,4.44043,4.82141,1.32919h-.00003Z"
                      fill="#fff"
                    />
                    <path
                      d="M308.49368,258.7525c3.35089-16.15695,6.97797-32.36552,11.62894-48.20441,3.77136-12.84329,10.27396-27.39745,23.99814-32.05405,6.81589-2.31264,14.20358-1.94012,21.17993-.59821,6.91779,1.33066,13.92474,3.31119,20.30063,6.34035,6.03555,2.86748,11.61917,6.81976,15.59235,12.26434,3.92212,5.37459,6.36456,11.61198,7.68094,18.10706,3.05499,15.07307-.54111,30.47136-4.56973,44.9991-.53616,1.93353-1.08441,3.86365-1.63303,5.79367-.88138,3.10052,3.94162,4.4241,4.82141,1.32919,4.45242-15.66275,9.07721-32.02472,7.00284-48.46307-.89713-7.10921-2.89136-14.09305-6.4451-20.35001-3.6416-6.41167-8.896-11.65268-15.19507-15.46211-6.35269-3.84186-13.5043-6.28763-20.66531-8.12315-7.60632-1.94968-15.52185-3.14977-23.35599-2.06024-7.3873,1.02737-14.04276,4.52979-19.2739,9.81796-5.35913,5.41759-8.98306,12.18707-11.65723,19.26202-2.94922,7.80266-4.87515,15.99947-6.90399,24.07716-2.14438,8.53775-4.14493,17.11163-6.0004,25.71681-.45087,2.09097-.89249,4.18393-1.32687,6.27838-.27393,1.32083,.38547,2.70145,1.74609,3.07529,1.23889,.34042,2.79984-.41788,3.07529-1.74609h.00006Z"
                      fill="#fff"
                    />
                    <path
                      d="M334.26349,207.06648c3.89905-11.83141,16.45471-19.15616,28.61121-18.34444,13.4747,.89973,25.15411,10.74054,29.88474,23.12387,2.811,7.35831,3.6362,15.45682,2.45441,23.24283-.20236,1.33325,.33603,2.68785,1.74609,3.0753,1.18198,.32478,2.87146-.40312,3.07529-1.74609,2.36209-15.56232-1.97873-32.51962-14.22617-43.04318-5.7431-4.93472-12.77701-8.35027-20.30704-9.37296-7.24118-.98344-14.5412,.35677-20.95197,3.8819-7.03223,3.86688-12.58749,10.20531-15.108,17.85359-1.00946,3.06313,3.81729,4.37608,4.82141,1.32919h0l.00003-.00002Z"
                      fill="#fff"
                    />
                    <path
                      d="M323.62473,229.9975c-1.07385,12.82616-4.30664,25.50906-9.53668,37.27271-.5481,1.23282-.35834,2.68628,.89688,3.42047,1.06537,.62314,2.8692,.34311,3.42047-.89688,5.61353-12.62622,9.06622-26.02362,10.2193-39.7963,.11279-1.34721-1.22977-2.5-2.5-2.5-1.44635,0-2.3869,1.14893-2.5,2.5h.00003Z"
                      fill="#fff"
                    />
                    <path
                      d="M384.02057,244.31487c-1.07385,12.82616-4.30664,25.50905-9.53668,37.27272-.5481,1.23282-.35834,2.68628,.89688,3.42047,1.06537,.62314,2.8692,.34311,3.42047-.89688,5.61353-12.62622,9.06622-26.02362,10.2193-39.7963,.11279-1.34721-1.22977-2.5-2.5-2.5-1.44635,0-2.3869,1.14893-2.5,2.5h0l.00003-.00002Z"
                      fill="#fff"
                    />
                    <path
                      d="M336.20508,234.36423c3.21506-12.74895,8.54202-24.83105,15.76917-35.81441,1.77386-2.6958-2.55405-5.20335-4.31735-2.52361-7.44406,11.313-12.96176,23.87781-16.27319,37.0088-.78705,3.12094,4.03378,4.45233,4.82141,1.32919h0v.00002h-.00003Z"
                      fill="#fff"
                    />
                  </g>
                </g>
                <path
                  id="uuid-ed8d5917-2465-4251-8a73-24d647765b28-1951"
                  d="M287.3429,211.89523c10.76318-1.13242,20.03201,3.71107,20.70233,10.81741,.67032,7.10631-7.51099,13.78305-18.27817,14.91438-4.29523,.51312-8.64301-.04831-12.67953-1.63736l-45.66046,4.20064-1.37079-22.27231,45.15866-1.77646c3.66113-2.39919,7.81982-3.85522,12.12796-4.24631,0,0,.00003,0,0,0Z"
                  fill="#fdadb0"
                />
                <path
                  d="M231.71271,114.05334h-.00005c-11.05269-1.55672-21.42206,5.71055-23.71935,16.63335-8.01482,38.10753-22.39742,119.28123,.19211,120.63661,29.53613,1.77217,57.89081-5.3165,57.89081-5.3165l-7.08868-40.75986-23.03818-2.36288,13.55157-63.38637c2.5731-12.03547-5.60107-23.72783-17.78825-25.44434l.00002-.00002Z"
                  fill="#3f3d58"
                />
              </svg>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Logo />
                <div className="w-full  bg-white rounded-lg shadow  sm:max-w-md xl:p-0">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-new_dark_blue md:text-2xl dark:text-white">
                      Sign in to your account
                    </h1>
                    <form
                      className="space-y-4 md:space-y-6"
                      action="#"
                      onSubmit={handleSubmit}
                    >
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-new_dark_blue dark:text-white"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email_login"
                          className="z-[1000] bg-gray-50 border border-gray-300 text-new_dark_blue sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="name@company.com"
                          required=""
                          onInput={handleInput}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-new_dark_blue dark:text-white"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          className="bg-gray-50 border border-gray-300 text-new_dark_blue sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required=""
                          onInput={handleInput}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="remember"
                              aria-describedby="remember"
                              type="checkbox"
                              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                              required=""
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="remember"
                              className="text-gray-500 dark:text-gray-300"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                          Forgot password?
                        </a>
                      </div>
                      <button
                        type="submit"
                        className="w-full text-white bg-new_pastel_blue hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Sign In
                      </button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet?{" "}
                        <a
                          href="#"
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                          Sign up
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
