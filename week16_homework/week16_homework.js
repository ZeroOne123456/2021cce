function setup() {
    initializeFields();
    createCanvas(400, 200);
    fill(255, 0, 0);
    textSize(40);
}

var shift, v;

function mousePressed() {
    v = random(10) + 5;
}

function draw() {
    background(57, 255, 127);
    for (var i = 0; i < 24; i++) {
        if (i % 3 == 0)
            fill(0);
        if (i % 3 == 1)
            fill(255);
        if (i % 3 == 2)
            fill(200, 180, 0);
        var start = radians(0 + shift + i * 360 / 24);
        var stop = radians(360 / 24 + shift + i * 360 / 24);
        arc(100, 100, 180, 180, start, stop);
    }
    if (v > 0.0001) {
        shift += v;
        v = v * 0.99;
        text(shift, 200, 100);
        text(v, 200, 150);
    }
}

function initializeFields() {
    shift = 0;
    v = 0;
}
