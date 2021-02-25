function Start() {
  var startDiv = document.getElementById("start");
  var name1 = document.getElementById("name1").value;
  var name2 = document.getElementById("name2").value;
  var name3 = document.getElementById("name3").value;
  var name4 = document.getElementById("name4").value;
  startDiv.innerHTML =
    "<div> <h2> Level 1: Embodiment </h2> </div> <div> Please mime out the use of your first object, and input the answers decided by all players: </div> <div>" +
    name2 +
    ": verb (ending in ing) <input id=verb />  </div> <div>" +
    name3 +
    ": location <input id=location /> </div> <div>" +
    name4 +
    " : time <input id=time /> </div> <div>" +
    name1 +
    ": enter <b> your object </b> <input id=alpha /> </div> <div> <button id=level1-button> Start Level 1! </button> </div> <div id=level1></div>";

  function Level1() {
    var name1 = document.getElementById("name1").value;
    var level1Div = document.getElementById("level1");
    var verb = document.getElementById("verb").value;
    var location = document.getElementById("location").value;
    var time = document.getElementById("time").value;
    var alpha = document.getElementById("alpha").value;
    level1Div.innerHTML =
      "Our journey starts with " +
      name1 +
      ",this universes agent. They were " +
      verb +
      " while in vicinity of " +
      location +
      " at " +
      time +
      ". with what, you may be asking. with their trusty " +
      alpha +
      " of course! <div id=level2Start></div> <div> <button id=level2Start-button> next level </button></div>";

    function Level2Start() {
      var level2StartDiv = document.getElementById("level2Start");
      var name1 = document.getElementById("name1").value;
      var name2 = document.getElementById("name2").value;
      var name3 = document.getElementById("name3").value;
      var name4 = document.getElementById("name4").value;
      level2StartDiv.innerHTML =
        "<div><h2>Level 2: Sound </h2></div> <div>" +
        name1 +
        ", make a sound with your <b> beta object </b> and document the answers from each player as follows: </div> <div>" +
        name2 +
        " verb (ending in ing) <input id= verb2></input> and awesome contraption <input id=idea1></input> </div> <div>" +
        name3 +
        " verb (ending in ing) <input id= verb3></input> and awesome contraption <input id=idea2></input> </div> <div>" +
        name4 +
        " verb (ending in ing) <input id= verb4></input> and awesome contraption <input id=idea3></input> </div> <div> when all players have responded press Start Level 2!</div><div> <button id=Level2-button> Start Level 2! </button> </div>";
    }
    var level2StartButton = document.getElementById("level2Start-button");
    level2StartButton.addEventListener("click", Level2Start);
  }

  var level1Button = document.getElementById("level1-button");
  level1Button.addEventListener("click", Level1);
}

var startButton = document.getElementById("start-button");
startButton.addEventListener("click", Start);
