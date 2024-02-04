import image1 from "../public/assets/love.png";
import image2 from "../public/assets/sustainable.png";
import image3 from "../public/assets/shield.png";
import image4 from "../public/assets/shipped.png";
function App() {
  return (
    <>
      <div className="border-2 border-gray-300 mx-10 md:mx-[20%] my-20 p-4 px-8">
        <h1 className="text-[#2e8882] md:text-base text-xl  font-[700] text-center md:text-left my-4 md:my-0  mt-6">
          Flat 50% Off ON ALL BRANDS
        </h1>
        <div className="flex flex-col lg:flex-row w-full justify-between items-center   text-gray-700 ">
          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <h1 className="text-yellow-500 font-[600] mb-4 text-lg ">
              {" "}
              Premium T-Shirt
            </h1>
            <p className="text-gray-500">
              This premium t-shirt is as close to perfect as can be. It is
              optimized for all types of print and will quickly become your
              favorite t-shirt. Soft, comfortable and durable, this is a
              definite must-own and a Spreadshirt recommended product. 100%
              cotton (heather gray is 95% cotton / 5% viscose. Heather Blue &
              Charcoal Gray are 80% Cotton/20% Polyester) | Fabric Weight: 5.29
              oz (heavyweight) Wide range of sizes from S-5XL Fairly produced,
              certified and triple audited. Double stitched, reinforced seams at
              shoulder, sleeve, collar and waist.
            </p>
          </div>
          <div className="order-1 lg:order-2 text-center">
            <div className="flex justify-center items-center w-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiZHd5xBinr-ilK98jtpl6zSH169oQO_yM4A&usqp=CAU"
                alt=""
                className="w-full sm:w-[70%] lg:w-full"
              />
            </div>
            <h1>Premium</h1>
            <p>T-Shirt</p>
            <div className="flex justify-center items-center my-2">
              <input type="radio" />
              <input type="radio" checked className=" mx-2 " />
              <input type="radio" />
            </div>
          </div>
        </div>
        <div className="felx md:justify-center xl:flex xl:justify-start my-10 lg:my-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:mx-auto text-gray-500">
            <div className="col-span-1  text-center lg:text-left">
              <img src={image1} alt="" className="w-1/4 mx-auto lg:mx-0" />
              <p className="text-[#29a79e] font-[500]">Designed with Love</p>
              <p>In India</p>
            </div>
            <div className="col-span-1 text-center lg:text-left">
              <img src={image2} alt="" className="w-1/4 mx-auto lg:mx-0" />
              <p className="text-[#29a79e] font-[500]">Environment</p>
              <p>Friendly</p>
            </div>
            <div className="col-span-1 text-center lg:text-left">
              <img src={image3} alt="" className="w-1/4 mx-auto lg:mx-0" />
              <p className="text-[#29a79e] font-[500]">100% Secure</p>
              <p>Online Payments</p>
            </div>
            <div className="col-span-1  text-center lg:text-left">
              <img src={image4} alt="" className="w-1/4 mx-auto lg:mx-0" />
              <p className="text-[#29a79e] font-[500]">Shipping</p>
              <p>across India</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
