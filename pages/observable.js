import React from "react";
import Rx, { Observable } from "rxjs";

/**
 * 观察者模式推拉模型
 */

// function是惰性的评估运算，调用时会同步地返回一个单一值。
function fooFunction() {
  console.log("fooFunction");
}
//你调用他会立刻返回一个同步的值，fooFunction属于一个消息的生产者，你调用这个方法
//，他给你执行的结果，他的生产这个结果，产生这个结果，消息的生产者，你是调用也就是拉取
fooFunction();

/**
 * 迭代器，数组也算一个迭代器，同步的，你调用这个迭代器，迭代器会产生多个值同步给你，因为是你调用，所以属于拉取
 */
function* fooFunctionGenerator() {
  yield 1;
  yield 2;
}

const generator = fooFunctionGenerator();
for (let item of generator) {
  console.log(item);
}

/**
 * promise 异步调用，你调用方法不会立刻给你返回值，你只是发送一个请求，具体什么时候拿到的值，你需要订阅这个异步
 */
function fooPromise() {
  return new Promise((resovle) => {
    setTimeout(() => {
      resovle("fooPromise");
    }, 2000);
  });
}
//then相当于subscription，相当于定于了这个方法，一旦消息的生产发送消息，你是观察者，既是消息的消费者，但是promise只能异步推送一次
fooPromise().then((data) => console.log(data));

//一个方法订阅可以推送多次的值 属于推送，你开启订阅请求，数据的生产者主动推送数据给你
const observable = new Observable((subscriber) => {
  setTimeout(() => subscriber.next(0), 1000);
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
});

observable.subscribe({
  next: (value) => {
    console.log(`nextValue:${value}`);
  },
});

export default function observablePage() {
  return <div>O</div>;
}
