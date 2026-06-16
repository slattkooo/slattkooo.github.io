$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     



    // TODO 2 - Create Platforms
    createPlatform(0, 610, 100, 50)
    createPlatform(300, 500, 100, 50, "red");
    createPlatform(550, 400, 100, 50, "blue");
    createPlatform(250, 300, 100, 50, "purple");
    createPlatform(850, 530, 200, 150, "green");
    createPlatform(1300, 500, 50, 50, "black");
    createPlatform(1350, 400, 50, 50, "white");
    createPlatform(1100, 300, 100, 20,"grey");
    createPlatform(1300, 200, 100, 20, "orange");




    // TODO 3 - Create Collectables
    createCollectable("steve", 50, 700, 3, 1);
    createCollectable("database", 250, 250, 1, 1);
    createCollectable("grace", 1350, 150, 1, 1);



    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 850);
    createCannon("left", 300, 1200);
    createCannon("bottom", 1200,1350)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
