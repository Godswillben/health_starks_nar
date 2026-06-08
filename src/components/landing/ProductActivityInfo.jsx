import React from "react";

const ProductActivityInfo = ({data, info}) => {
   return (
      <div className="flex flex-col space-y-4 text-center">
         <p className="text-brown700 text-2xl font-Kurale">{data}</p>
         <p className="font-Pop font-medium text-lg">Active Experts Online</p>
      </div>
   );
};

export default ProductActivityInfo;
