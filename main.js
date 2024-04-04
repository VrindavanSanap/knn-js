
var dist = "2"
var K = "1"
var N = 10; //number of data points
var data = new Array(N);
var labels = new Array(N);
const ss = 50
var density = 4.0;
knn = new knnjs.KNN()
function myinit() {

    data[0] = [-0.4326, 1.1909];
    data[1] = [3.0, 4.0];
    data[2] = [0.1253, -0.0376];
    data[3] = [0.2877, 0.3273];
    data[4] = [-1.1465, 0.1746];
    data[5] = [1.8133, 2.1139];
    data[6] = [2.7258, 3.0668];
    data[7] = [1.4117, 2.0593];
    data[8] = [4.1832, 1.9044];
    data[9] = [1.8636, 1.1677];
    labels[0] = 1;
    labels[1] = 1;
    labels[2] = 1;
    labels[3] = 1;
    labels[4] = 1;
    labels[5] = -1;
    labels[6] = -1;
    labels[7] = -1;
    labels[8] = -1;
    labels[9] = -1;
    grid = knn.train(data, labels, 1, "L1", ss, (WIDTH / density) + 1)
    console.log(grid)
}
function retrain() {
    grid = knn.train(data, labels, 1, "L1", ss, (WIDTH / density) + 1)
}


function update() {
}

function draw() {


    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    // draw decisions in the grid
    for (let x = 0.0; x <= WIDTH; x += density) {
        for (let y = 0.0; y <= HEIGHT; y += density) {
            if (grid[x / density][y / density] > 0) ctx.fillStyle = `rgb(150,250,150)`;
            else ctx.fillStyle = 'rgb(250,150,150)';
            ctx.fillRect(x - density / 2 - 1, y - density - 1, density + 2, density + 2);
        }
    }

    // draw axes
    ctx.beginPath();
    ctx.strokeStyle = 'rgb(50,50,50)';
    ctx.lineWidth = 1;
    ctx.moveTo(0, HEIGHT / 2);
    ctx.lineTo(WIDTH, HEIGHT / 2);
    ctx.moveTo(WIDTH / 2, 0);
    ctx.lineTo(WIDTH / 2, HEIGHT);
    ctx.stroke();
    ctx.strokeStyle = 'rgb(0,0,0)';
    for (var i = 0; i < N; i++) {
        if (labels[i] == 1) ctx.fillStyle = 'rgb(100,200,100)';
        else ctx.fillStyle = 'rgb(200,100,100)';
        ctx.lineWidth = 2;
        drawCircle(data[i][0] * ss + WIDTH / 2, data[i][1] * ss + HEIGHT / 2, 6);
    }



    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillText(`K = ${K}`, 10, HEIGHT - 30);
    ctx.fillText(`Using L${dist} distance`, 10, HEIGHT - 15);
}

function mouseClick(x, y, shiftPressed) {

    // add datapoint at location of click
    data[N] = [(x - WIDTH / 2) / ss, (y - HEIGHT / 2) / ss];
    labels[N] = shiftPressed ? 1 : -1;
    N += 1;
    retrain()
}


function keyDown(key) {
}


// UI stuff
function refreshC(event, ui) {
    K = ui.value;

    $("#creport").text(`K = ${K}`);

}

function refreshSig(event, ui) {
    dist = ui.value;

    $("#sigreport").text(`L${dist} Distance`);
}

$(function () {
    // for C parameter
    $("#slider1").slider({
        orientation: "horizontal",
        slide: refreshC,
        max: 10,
        min: 1,
        step: 1,
        value: 1
    });

    // for rbf kernel sigma
    $("#slider2").slider({
        orientation: "horizontal",
        slide: refreshSig,
        max: 10,
        min: 1,
        step: 1,
        value: 1
    });
});