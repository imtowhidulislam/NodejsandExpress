const express = require("express");

const app = express();
const { person } = require("./data");

app.get("/api/person/:personId", (req, res) => {
  const { personId } = req.params;
  console.log(personId);
  const singlePerson = person.find((onePerson) => onePerson.id === +personId);
  if (!singlePerson) {
    return res.status(404).send(`content doesn't found`);
  }
  res.json(singlePerson);
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let filterData = [...person];

  if (search) {
    filterData = filterData.filter((person) => person.name.startsWith(search));
  }

  if (limit) {
    filterData = filterData.slice(0, Number(limit));
  }

  if (filterData.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }

  return res.status(200).json(filterData);
});

/* app.get("/contact", (req, res) => {
  res.send("This is contact page");
}); */

/* app.get("/profile/:profileId", (req, res) => {
  res.send("You requested the profile with the Id of :" + req.params.profileId);
}); */

// ? Absolute path for the file..
app.get("/about", (req, res) => {
  res.sendfile(__dirname + "/about.html");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
