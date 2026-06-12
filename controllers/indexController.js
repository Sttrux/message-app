const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];





function getHome(req,res){
    res.render("home", {
      messages
    });
}

function getMessages(req,res){
    res.render(messagesHistory);
}

function getNewMessage(req,res){
  res.render("form");
}

function getFormInfo(req,res){
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  })
  res.redirect("/");
}

module.exports = {
    getHome, 
    getMessages,
    getNewMessage,
    getFormInfo
}