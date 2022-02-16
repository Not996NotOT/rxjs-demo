import React, { useEffect, useRef } from "react";
import { fromEvent, scan, throttleTime } from "rxjs";

/**
 * @description 一个使用react hook 和ref 来观察,scan 相当于reduce,怎么让他节流，一秒产生一次呢
 */
export default function Throttle() {
  const ref = useRef(null);
  useEffect(() => {
    const observable = fromEvent(ref.current, "click")
      .pipe(
        throttleTime(1000),
        scan((count) => count + 1, 0)
      )
      .subscribe((x) => console.log(`${x}`));
    return () => {
      observable.unsubscribe();
    };
  });
  return <button ref={ref}>click</button>;
}
