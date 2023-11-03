import React from "react";

const NewsBar = () => {
  console.log("Newsbar Rendered");
  return (
    <div>
      <h2 className="font-bold text-2xl">News</h2>
      <hr />
      <ul className="mt-2 list-disc">
        <li>Uğurcan Is Dope</li>
        <li>Follow Me From Instagram @ugurcannucar</li>
        <li>Another Unnecessary New</li>
      </ul>
    </div>
  );
};

export default NewsBar;
