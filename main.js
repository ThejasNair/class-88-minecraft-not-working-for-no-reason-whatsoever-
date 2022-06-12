canvas = new fabric.Canvas("myCanvas");

block_width = 30;
block_height = 30;

player_x = 30
player_y= 20;

player = "";
block = "";

function stuff() {
    fabric.Image.fromURL("player.png", function(Img) {
        player = Img;
        player.scaleToWidth(150);
        player.scaleToHeight(140);
        player.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player);
    });
}

function new_image(get_image) {

    fabric.Image.fromURL(get_image, function(Img) {
        block = Img;
        block.scaleToWidth(block_width);
        block.scaleToHeight(block_height)
        block.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block);
    })

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
var keypressed = e.keyCode;
console.log(keypressed);

if(e.shiftKey == true && keypressed == "80") {
    block_width = block_width +10;
    block_height = block_height +10;
    document.getElementById("current_width").innerHTML =  block_width;
    document.getElementById("current_height").innerHTML =  block_height;
    console.log("p and shift key has indeed been pressed");
    }
if(e.shiftKey == true && keypressed == "77") {
    block_width = block_width - 10;
    block_height = block_height - 10;
    document.getElementById("current_width").innerHTML =  block_width;
    document.getElementById("current_height").innerHTML =  block_height;
    console.log("m and shift key has indeed been pressed");
    }

    if(keypressed == "40") {
        down();
        console.log("it has gone down sire");
    }
    if(keypressed == "39") {
        right();
        console.log("it has gone right sire");
    }
    if(keypressed == "38") {
        up();
        console.log("it has gone up sire");
    }
    if(keypressed == "37") {
        left();
        console.log("it has gone left sire");
    }
    
    if(keypressed == "71") {
        new_image("ground.png");
        console.log("THE G HAS BEEN *GASP* PRESSED!");
    }

    if(keypressed == "87") {
        new_image("wall.jpg");
        console.log("THE W HAS BEEN *GASP* PRESSED!");
    }

    if(keypressed == "76") {
        new_image("light_green.png");
        console.log("THE LLLLLLLLL HAS BEEN *GASP* PRESSED!");
    }

    if(keypressed == "84") {
        new_image("trunk.jpg");
        console.log("THE T HAS BEEN *GASP* PRESSED!");
    }

    if(keypressed == "82") {
        new_image("roof.jpg");
        console.log("THE r HAS BEEN *GASP* PRESSED!");
    }

    if(keypressed == "89") {
        new_image("yellow_wall.png");
        console.log("THE y HAS BEEN *GASP* PRESSED!");
    }

    if(keypressed == "68") {
        new_image("dark_green.png");
        console.log("THE d HAS BEEN *GASP* PRESSED!");
    }

    if(keypressed == "85") {
        new_image("unique.png");
        console.log("THE U HAS BEEN *GASP* PRESSED!");
    }

    if(keypressed == "67") {
        new_image("cloud.jpg");
        console.log("THE C HAS BEEN *GASP* PRESSED!");
    }

}
    function up() {
        if(player_y >0) {
     player_y = player_y - block_height;
     console.log("block_height does indeed equal" + block_height + "mmmm, yes indubitably");
     console.log("player x EQUALLLSSSSS" + player_x + "player y does indeed happen to be the same as" + player_y);
     canvas.remove(player);
     stuff();

    }
}


    function down() {
        if(player_y <600) {
            player_y = player_y + block_height;
     console.log("block_height does indeed equal" + block_height + "mmmm, yes indubitably");
     console.log("player x EQUALLLSSSSS" + player_x + "player y does indeed happen to be the same as" + player_y);
     canvas.remove(player);
     stuff();

    }
}


    function right() {
        if(player_x >0) {
     player_x = player_x - block_width;
     console.log("block_width does indeed equal" + block_width + "mmmm, yes indubitably");
     console.log("player x EQUALLLSSSSS" + player_x + "player y does indeed happen to be the same as" + player_y);
     canvas.remove(player);
     stuff();

    }
}

function left() {
    if(player_x >800) {
 player_x = player_x + block_width;
 console.log("block_width does indeed equal" + block_width + "mmmm, yes indubitably");
 console.log("player x EQUALLLSSSSS" + player_x + "player y does indeed happen to be the same as" + player_y);
 canvas.remove(player);
 stuff();

}
}


