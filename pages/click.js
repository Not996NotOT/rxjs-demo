import React, { useEffect, useRef } from "react";
import { fromEvent } from "rxjs";

/**
 * @description 一个使用react hook 和ref 来观察
 */
export default function Click() {
  const ref = useRef(null);
  useEffect(() => {
    const observable = fromEvent(ref.current, "click").subscribe((x) =>
      console.log("clicked")
    );
    return () => {
      observable.unsubscribe();
    };
  });
  return <button ref={ref}>click</button>;
}
