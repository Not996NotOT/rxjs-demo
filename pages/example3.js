import React, { useEffect, useRef, useState } from "react";
import { map, debounceTime, mergeMap, takeLast, throttleTime } from "rxjs";
import { useEventCallback } from "rxjs-hooks";

const searchStr = ["zhangxing", "zx", "zh"];

/**
 * @description 搜索截流，等输入完成 rxjs-hooks,0.5秒内无论触发多少次onchange，只搜索一次
 * @returns
 */
export default function example3() {
  const [onChange, array] = useEventCallback(
    ($source) =>
      $source.pipe(
        map((event) => event.target.value),
        throttleTime(500),
        map((value) => {
          console.log("搜索", value);
          const array = searchStr.filter((item) => item.indexOf(value) !== -1);
          return array;
        })
      ),
    []
  );
  return (
    <>
      <ul>
        {array.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <input onChange={onChange}></input>
    </>
  );
}
