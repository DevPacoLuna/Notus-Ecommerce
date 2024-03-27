"use client";

import { increase } from "@/redux/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React from "react";

const ReduxTest = () => {
  const counterState = useAppSelector((state) => state.counter.counterState);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>Counter: {counterState}</p>
      <div>
        <button
          onClick={() => {
            dispatch(increase(1));
          }}
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default ReduxTest;
