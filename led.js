// This is an example to show how to use the LEDs on the mbot.
// mbot maps WS2812 pixels in a 2 pixel strip attached to pin 13.

var five = require("johnny-five");
var pixel = require("node-pixel");

var opts = {};
opts.port = process.argv[2] || "";

var board = new five.Board(opts);
var strip = null;

var fps = 3; // how many frames per second do you want to try?

var led1 = 0;
var led2 = 1;

board.on("ready", function() {

    console.log("Board ready, let's add light");

    strip = new pixel.Strip({
        data: 13,
        length: 2,
        board: this,
        controller: "FIRMATA",
    });

    strip.on("ready", function() {

        var colours = getColours();

        var i=0;
        var j=colours.length-1;
        var changer = setInterval(function() {
            strip.pixel(led1).color(colours[i]);
            strip.pixel(led2).color(colours[j]);
            strip.show();
            i++;
            j--;
            if(i > colours.length) {
                i=0;
                j=colours.length-1;
            }
        }, 1000/fps);
    });
});

function getColours() {

    return [
            '#ff0000',
            '#ff1000',
            '#ff2000',
            '#ff3000',
            '#ff4000',
            '#ff4f00',
            '#ff5f00',
            '#ff6f00',
            '#ff7f00',
            '#ff8f00',
            '#ff9f00',
            '#ffaf00',
            '#ffbf00',
            '#ffcf00',
            '#ffdf00',
            '#ffef00',
            '#ffff00',
            '#e3ff00',
            '#c6ff00',
            '#aaff00',
            '#8eff00',
            '#71ff00',
            '#55ff00',
            '#39ff00',
            '#1cff00',
            '#00ff00',
            '#00ff20',
            '#00ff40',
            '#00ff60',
            '#00ff80',
            '#00ff9f',
            '#00ffbf',
            '#00ffdf',
            '#00ffff',
            '#00dfff',
            '#00bfff',
            '#009fff',
            '#0080ff',
            '#0060ff',
            '#0040ff',
            '#0020ff',
            '#0000ff',
            '#1100ff',
            '#2300ff',
            '#3400ff',
            '#4600ff',
            '#5700ff',
            '#6800ff',
            '#7a00ff',
            '#8b00ff',
            '#9a00df',
            '#a800bf',
            '#b7009f',
            '#c50080',
            '#d40060',
            '#e20040',
            '#f10020',
            '#ff0000',
            '#ff0e00',
            '#ff1c00',
            '#ff2a00',
            '#ff3800',
            '#ff4700',
            '#ff5500',
            '#ff6300',
            '#ff7100',
            '#ff7f00',
            '#ff8f00',
            '#ff9f00',
            '#ffaf00',
            '#ffbf00',
            '#ffcf00',
            '#ffdf00',
            '#ffef00',
            '#ffff00',
            '#dfff00',
            '#bfff00',
            '#9fff00',
            '#80ff00',
            '#60ff00',
            '#40ff00',
            '#20ff00',
            '#00ff00',
            '#00ff20',
            '#00ff40',
            '#00ff60',
            '#00ff80',
            '#00ff9f',
            '#00ffbf',
            '#00ffdf',
            '#00ffff',
            '#00e3ff',
            '#00c6ff',
            '#00aaff',
            '#008eff',
            '#0071ff',
            '#0055ff',
            '#0039ff',
            '#001cff',
            '#0000ff',
            '#1100ff',
            '#2300ff',
            '#3400ff',
            '#4600ff',
            '#5700ff',
            '#6800ff',
            '#7a00ff',
            '#8b00ff',
            '#9a00df',
            '#a800bf',
            '#b7009f',
            '#c50080',
            '#d40060',
            '#e20040',
            '#f10020',
            '#ff0000',
            '#ff1000',
            '#ff2000',
            '#ff3000',
            '#ff4000',
            '#ff4f00',
            '#ff5f00',
            '#ff6f00',
            '#ff7f00',
            '#ff8f00',
            '#ff9f00',
            '#ffaf00',
            '#ffbf00',
            '#ffcf00',
            '#ffef00',
            '#ffff00',
            '#e3ff00',
            '#c6ff00',
            '#aaff00',
            '#8eff00',
            '#71ff00',
            '#55ff00',
            '#39ff00',
            '#1cff00',
            '#00ff00',
            '#00ff20',
            '#00ff40',
            '#00ff60',
            '#00ff80',
            '#00ff9f',
            '#00ffbf',
            '#00ffdf',
            '#00ffff',
            '#00dfff',
            '#00bfff',
            '#009fff',
            '#0080ff',
            '#0060ff',
            '#0040ff',
            '#0020ff',
            '#0000ff'
    ];
}
