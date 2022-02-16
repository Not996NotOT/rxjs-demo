import React, { useEffect } from "react";
import { from, Subject } from "rxjs";

/**
 * @description subject 特殊的observable ，相当于主体，当然subject也可以是subscription
 * @returns
 */
export default function subject() {
  useEffect(() => {
    const subject = new Subject();
    const subject2 = new Subject();
    const subscription11 = subject2.subscribe({
      /**
       * next方法可以多次接收被推送的值
       */
      next: (value) => console.log(`subscription11:${value}`),
    });
    const subscription12 = subject2.subscribe({
      /**
       * next方法可以多次接收被推送的值
       */
      next: (value) => console.log(`subscription22:${value}`),
    });

    from([1, 2, 3, 4, 5]).subscribe(subject2);

    /**
     * 一秒后广播主题
     */
    setTimeout(() => {
      subject.next(1);
      subject.next(2);
    }, 1000);
    //添加一个消费者（消息的订阅者，观察者）
    const subscription1 = subject.subscribe({
      /**
       * next方法可以多次接收被推送的值
       */
      next: (value) => console.log(`subscription1:${value}`),
    });
    //添加第二个消费者（消息的订阅者，观察者）
    const subscription2 = subject.subscribe({
      /**
       * next方法可以多次接收被推送的值
       */
      next: (value) => console.log(`subscription2:${value}`),
    });
    return () => {
      //组件销毁取消订阅
      subscription1.unsubscribe();
      subscription2.unsubscribe();
    };
  });
  return <div>subject</div>;
}
