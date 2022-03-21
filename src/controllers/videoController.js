let videos = [
  {
    title: "소년심판",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "DP",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "호텔델루나",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 3,
  },
];

export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  console.log(req.params);
  const { id } = req.params; // const id = req.params.id; 랑 같은건데 ES6로 쓴게 왼쪽꺼
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title; // videos[0]번쨰.title 은 새로 입력되어 온 title값(form에서 입력된 title값) 으로 변경되는 로직임
  return res.redirect(`/videos/${id}`);
};
export const search = (req, res) => res.send("Search");
