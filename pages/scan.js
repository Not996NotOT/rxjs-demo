import React, { useEffect, useRef } from "react";
import { fromEvent, scan } from "rxjs";

/**
 * @description 一个使用react hook 和ref 来观察,scan 相当于reduce
 */
export default function Scan() {
  const ref = useRef(null);
  useEffect(() => {
    const observable = fromEvent(ref.current, "click")
      .pipe(scan((count) => count + 1, 0))
      .subscribe((x) => console.log(`${x}`));
    return () => {
      observable.unsubscribe();
    };
  });
  return <button ref={ref}>click</button>;
}
