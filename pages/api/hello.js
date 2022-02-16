// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let counter = 0;
let timer = 20000;
export default function handler(req, res) {
  // counter++;
  console.log(`counter:${counter}`);
  /**
   * 做的假的计数器
   */
  if (counter >= 2) {
    timer = 0;
  }
  setTimeout(() => res.status(200).json({ name: "John Doe" }), timer);
  //res.status(200).json({ name: "John Doe" })
}
