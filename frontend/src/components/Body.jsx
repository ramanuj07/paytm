import Navbar from "./Navbar";

const Body = () => {
  return (
    <div>
      <Navbar />
      <div className="flex mx-[6rem] my-[12rem]">
        <div className="w-1/2">
          <img
            src="https://assetscdn1.paytm.com/images/catalog/view/310944/1697527183231.png"
            alt="paytm"
            className="h-16 mb-12"
          />
          <h1 className="text-5xl font-bold my-8 leading-[4rem]">
            India ka Most-loved Payments App
          </h1>
          <p className="text-xl">
            Recharge & pay bills, book flights & movie tickets, open a savings
            account, invest in stocks & mutual funds, and do a lot more.
          </p>
        </div>
        <div className="w-1/2 flex justify-end">
          <img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/850762/1697527211984.png"
            alt="body"
            className="w-[30rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
