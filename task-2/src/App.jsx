import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [pincode, setPincode] = useState("");
  const [valid, setValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const increase = () => {
    setCount(count + 1);
    // Update price based on your logic
    setPrice(calcePrice(count + 1));
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
      // Update price based on your logic
      setPrice(calcePrice(count - 1));
    }
  };

  const calcePrice = (quantity) => {
    // Implement your logic to calculate price based on quantity
    // This is a placeholder, replace it with your actual logic
    return quantity * 2599; // Assuming each item costs 10 units
  };

  const checkPin = () => {
    // Check eligibility based on the provided pincodes
    const ineligiblePincodes = ["560017", "560018", "560019", "560020"];

    if (ineligiblePincodes.includes(pincode)) {
      setValid(false);
      setErrorMsg("Sorry, You are not eligible for COD");
      // Disable the add to cart button
      document.getElementById("addToCartBtn").disabled = true;
    } else {
      setValid(true);
      setErrorMsg("You are eligible for COD");
      // Enable the add to cart button
      document.getElementById("addToCartBtn").disabled = false;
    }
  };

  const addToCart = () => {
    // Handle the logic for adding to cart here
    alert("Item added to cart!");
    console.log("Item added to cart!");
  };

  return (
    <>
      <div className="border-2 border-gray-300 mx-10 md:mx-[20%] my-20">
        <div className="flex flex-col lg:flex-row justify-between items-cente px-4 md:px-10 text-gray-500 ">
          <div className="flex justify-center items-center lg:w-1/2 my-4 md:my-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0klXZt80NiacYZNdeebgET_ITOxwqQKgqKnzlJyWn_g&s"
              alt=""
              className="w-[60%] lg:w-[70%]  "
            />
          </div>

          <div className="w-full lg:w-1/2 text-center">
            <h1 className="text-[32px] my-7 ">CLASSIC DENIM SHIRT</h1>
            <div className="flex justify-center my-4">
              <div>
                <box-icon type="solid" name="star"></box-icon>
                <box-icon type="solid" name="star"></box-icon>
                <box-icon type="solid" name="star"></box-icon>
                <box-icon type="solid" name="star"></box-icon>
                <box-icon name="star-half" type="solid"></box-icon>
              </div>
              <div>
                <p>23 reviews</p>
              </div>
            </div>
            <p className="font-[500] my-2">QUANTITY</p>
            <div className="flex justify-center items-center my-4">
              <div className="flex  w-[100px] border-[2px] border-gray-500 ">
                <button className="mx-4 " onClick={decrease}>
                  -
                </button>
                <div>{count}</div>
                <button className="mx-4" onClick={increase}>
                  +
                </button>
              </div>
            </div>

            <div className="border-2 border-gray-300 w-full   md:mx-4 my-2 p-2 text-sm">
              <p className="my-2 font-[500]">CHECK COD AVAILABILITY</p>
              <div className="">
                <div className="flex justify-around items-center">
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="ENTER PINCODE"
                    className="font-[500] w-2/3 outline-none border-b border-gray-4300 text-center focus:border-b focus:border-gray-500 py-2"
                  />
                  <button
                    className="border-[1px] border-gray-400 px-4 py-2 mx-2"
                    onClick={checkPin}
                  >
                    CHECK
                  </button>
                </div>

                <p>{errorMsg}</p>
              </div>
            </div>

            <button
              id="addToCartBtn"
              onClick={addToCart}
              disabled={!valid}
              className={`border-[1px] py-2 text-black border-black w-full my-4 md:mx-5   ${
                !valid
                  ? "bg-red-300 border-none"
                  : "cursor-pointer active:bg-black active:text-white"
              }`}
            >
              ADD TO CART . &#8377; {price}
            </button>

            <div className="flex justify-center my-4 text-xs">
              <div className="flex justify-center items-center mx-4 ">
                {" "}
                <box-icon name="facebook" type="logo" size="xs"></box-icon>
                <p>SHARE</p>
              </div>
              <div className="flex justify-center items-center mx-4">
                {" "}
                <box-icon name="twitter" type="logo" size="xs"></box-icon>
                <p>TWEET</p>
              </div>
              <div className="flex justify-center items-center mx-4">
                <box-icon name="pinterest-alt" type="logo" size="xs"></box-icon>
                <p>PIN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
