import React from "react";
import { publicApiFunction } from "@uza/styleguide";

export default function Root(props) {
  return (
    <div className="h-16 flex items-center justify-between px-6 bg-primary text-white">
      <div className="flex items-center justify-between">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/customer">Customer</a>
      </div>
    </div>
  );
}
