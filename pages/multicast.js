import React, { useEffect } from "react";
import { from, Subject } from "rxjs";

export default function multicast() {
  useEffect(() => {
    const subject = new Subject();
    const observable = from([1, 2, 3, 4, 5, 6]);

    // 在底层使用了 `source.subscribe(subject)`:

    setTimeout(() => {
        multicasted.connect();
    }, 2000);
  }, []);
  return <div>multicast</div>;
}
