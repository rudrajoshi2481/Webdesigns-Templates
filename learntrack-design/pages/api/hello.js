// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ number:"01",title: "The Story",para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",img:"./img01" });
};
