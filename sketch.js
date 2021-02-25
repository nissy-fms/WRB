let capture;

function setup() {
createCanvas(640, 480);
capture = createCapture(VIDEO);
capture.size(640, 480);
capture.hide();
}

function draw() {
background(0);
image(capture, 0, 0, 640, 480);
filter(POSTERIZE, 3);
}
