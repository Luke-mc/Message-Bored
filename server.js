var path = require('path');
const express = require('express');
const app = express();
const bp =require('body-parser');
const PORT = process.env.PORT || 8000;
const db = require('./models');
const Users = db.Users;
const Messages = db.Messages;
const Topics = db.Topics;


app.use(bp.urlencoded());
app.use(bp.json());

app.use(express.static("public"));

app.get("/users", (req,res) => {
   Users.findAll()
      .then(user => {
        res.json(user);
      });
   });

app.get("/users/:id", (req,res) => {
    Users.findById(parseInt(req.params.id))
      .then((user) => {
        res.json(user);
     })
    .catch((err) => {
      console.log(err);
    });
  });

app.post("/users", (req, res) => {
  console.log('APP-POST:',  req.body);
        Users.create({
          name: req.body.username
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
  console.log('ROUTE TOPIC:',req.body.created_by);
        Topics.create({
          name: req.body.name,
          created_by: req.body.created_by
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

app.get("/messages", (req,res) => {
   Messages.findAll()
      .then(message => {
        res.json(message);
      });
   });

app.get("/messages", (req,res) => {
   Messages.findAll()
      .then(message => {
        res.json(message);
      });
   });


app.post("/messages", (req, res) => {
        Messages.create({
          body: req.body.body,
          topic_id: req.body.topic_id,
          author_id: req.body.author_id,
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
  //db.sequelize.sync({force:true});
  console.log(`Server running ${PORT}`);
});