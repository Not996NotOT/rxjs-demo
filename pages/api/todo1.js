// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const timer =  Math.ceil(Math.random() * 10000);
  console.log(timer)
  setTimeout(
    () => res.status(200).json({ name: "todo1" }),
    timer
  );
}
