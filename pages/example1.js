import React, { useEffect } from "react";
import {
  from,
  throwError,
  timeout,
  retry,
  retryWhen,
  map,
  catchError,
  TimeoutError,
  takeWhile,
  interval,
  delay,
} from "rxjs";
import Axios from "axios";

export default function Example1() {
  const axios = Axios.create();
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      throwError(() => new Error(error));
    }
  );
  useEffect(() => {
    const $source = from(axios.get("/api/hello"));
    /** 消息的订阅者设置超时时间，如果3秒没有返回对象，订阅者认为已经超时了，进行两次次重试 */
    const subscription = $source
      .pipe(
        timeout(5000),
        catchError((error) => {
          if (error instanceof TimeoutError) {
            console.log("TimeoutError");
            return throwError(() => new Error("error"));
          }
        }),
        retry(2)
      )
      .subscribe({
        error: (error) => {
          console.log("timeout");
        },
        next: (value) => {
          console.log(`next`, value);
        },
        complete: (value) => {
          console.log(`complete`, value);
        },
      });
    return () => {
      subscription.unsubscribe();
    };
  });

  return <div>E</div>;
}
