const Navbar = () => {
  return (
    <div className="grid grid-cols-10 mx-16 my-4">
      <div className="col-span-2 flex items-center">
        <img
          src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo.svg"
          alt="logo"
        />
      </div>

      <div className="col-span-7 flex items-center cursor-pointer">
        <ul className="flex justify-evenly gap-[4rem] font-semibold">
          <li>Paytm for Consumer</li>
          <li>Paytm for Business</li>
          <li>Investor Relations</li>
          <li>Company</li>
          <li>Career</li>
        </ul>
      </div>
      <div className="col-span-1 flex items-center">
        <button className="bg-[#00baf2] rounded-3xl p-2 m-2 cursor-pointer text-[#fff] font-semibold">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
