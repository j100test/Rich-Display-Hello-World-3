
function app() {

  pjs.defineDisplay("display", "app.json");
  
  // Display screen and wait for input
  display.helloScreen.execute();

  if (submit) {
    pjs.messageBox("Welcome to NodeRun, " + yourName + "!");
  }

}

exports.default = app;
