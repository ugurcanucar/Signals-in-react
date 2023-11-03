import React from "react";
import { selectedProductList } from "../../signals/productSignals";

const Header = () => {
  console.log("Header Rendered");
  return (
    <div className="">
      <header className="text-4xl">
        Product Count - {selectedProductList.value.length}
      </header>
      <hr />
    </div>
  );
};

export default Header;
