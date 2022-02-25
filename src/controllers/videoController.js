const fakeUser = {
  name: "YeongSoo",
  loggedIn: true,
};

export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", fakeUser });
export const see = (req, res) => {
  console.log(req.params);
  return res.render("watch");
};
export const edit = (req, res) => {
  console.log(req.params);
  return res.render("edit");
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Video");
};
