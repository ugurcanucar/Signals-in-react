import NewsBar from "../NewsBar";
import ProductListSelector from "../ProductListSelector";

const Content = () => {
  return (
    <div className=" border p-5 max-w-5xl w-full">
      <div className="mt-10 flex justify-between">
        <ProductListSelector />
        <div className="w-1 bg-yellow-500"></div>
        <NewsBar />
      </div>
    </div>
  );
};

export default Content;
