var path = require('path');
const express = require('express');
const app = express();
const bp =require('body-parser');
const PORT = process.env.PORT || 8000;
const db = require('./models');
const User = db.User;
const Message = db.Message;
const Topics = db.Topics;


app.use(bp.urlencoded());
app.use(bp.json());

app.use(express.static("public"));

app.get("/users", (req,res) => {
   User.findAll()
      .then(user => {
        res.json(user);
      });
   });

app.get("/users/:id", (req,res) => {
    User.findById(parseInt(req.params.id))
      .then((user) => {
        res.json(user);
     })
    .catch((err) => {
      console.log(err);
    });
  });

app.post("/users", (req, res) => {
        User.create({
          name: req.body.name,
        }).then((user) => {
            res.json(user.dataValues);
            //res.end();
         })
        .catch((err) => {
          console.log(err);
        });
    });


app.get("/topics", (req,res) => {
   Topics.findAll()
      .then(topic => {
        res.json(topic);
      });
   });

app.post("/topics", (req, res) => {
        Topics.create({
          name: req.body.name,
        }).then((topic) => {
            console.log('TOPIC:',topic);
            res.json(topic.dataValues);
            //res.end();
         })
        .catch((err) => {
          console.log(err);
        });
    });

app.put("/topics/:id", (req,res) => {
  Topics.update(req.body,
  {
    where: {
      id: parseInt(req.params.id)
    }
  });
  res.end();
});


app.post("/message", (req, res) => {
        Message.create({
          body: req.body.body,
        }).then((message) => {
            console.log('MESSAGE:',message);
            //res.json(user.dataValues);
            res.end();

         })
        .catch((err) => {
          console.log(err);
        });
    });

app.get('*', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '/public')});
});

app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`Server running ${PORT}`);
});