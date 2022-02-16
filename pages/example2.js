import React, { useEffect } from "react";
import { ajax } from "rxjs/ajax";
import {
  race,
} from "rxjs";
import Axios from "axios";
/**
 * 并行请求
 */
// const source = forkJoin(requestUrls.map((item) => axios.get(item)));
// const subscription = source.pipe();
// subscription.subscribe({
//   error: (e) => console.log(e),
//   next: (value) => console.log("next", value),
// });

export default function example2() {
  /**
   * 同时请求但是筛选，取最先，取消其他的
   */
  useEffect(() => {
    const requestUrls = ["/api/todo1", "/api/todo2", "/api/todo3"];
    const source1 = race(requestUrls.map((url) => ajax(url)));
    const subscription1 = source1.pipe();
    subscription1.subscribe({
      error: (e) => console.log(e),
      next: (value) => {
        console.log("next", value);
      },
    });
  });
  return <div>example2</div>;
}
