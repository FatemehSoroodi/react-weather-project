import React from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Lodder() {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#f9a01b"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
}
