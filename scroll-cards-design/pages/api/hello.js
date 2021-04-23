// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    data: [
      {
        img: "/bali.jpg",
        title: "bali",
        para:
          "Sunt laboris et aute nisi magna est et magna aute ex. Ad ex nisi dolor sint in.",
        index: "01",
      },
      {
        img: "/canada.jpg",
        title: "Canada",
        para:
        "Sunt laboris et aute nisi magna est et magna aute ex. Ad ex nisi dolor sint in.",
        index: "02",
      },
      {
        img: "/london.jpg",
        title: "London",
        para:
        "Sunt laboris et aute nisi magna est et magna aute ex. Ad ex nisi dolor sint in.",
        index: "03",
      },
      {
        img: "/safari.jpg",
        title: "Safari",
        para:
        "Sunt laboris et aute nisi magna est et magna aute ex. Ad ex nisi dolor sint in.",
        index: "04",
      },
      {
        img: "/goa.jpg",
        title: "Goa",
        para:
        "Sunt laboris et aute nisi magna est et magna aute ex. Ad ex nisi dolor sint in.",
        index: "05",
      },
      {
        img: "/mumbai.jpg",
        title: "Mumbai",
        para:
        "Sunt laboris et aute nisi magna est et magna aute ex. Ad ex nisi dolor sint in.",
        index: "06",
      },
      {
        img: "/paris.jpg",
        title: "paris",
        para:
        "Sunt laboris et aute nisi magna est et magna aute ex. Ad ex nisi dolor sint in.",
        index: "07",
      },
      {
        img: "/tokyo.jpg",
        title: "Tokyo",
        para:
        "Sunt laboris et aute nisi magna est et magna aute ex. Ad ex nisi dolor sint in.",
        index: "08",
      },
    ],
  });
};
