function draw_axes() {
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
}
function draw_circles() {
    for (var i = 0; i < data.length; i++) {
        if (labels[i][0] == 1) ctx.fillStyle = 'rgb(100,200,100)';
        else ctx.fillStyle = 'rgb(200,100,100)';
        ctx.lineWidth = 2;
        drawCircle(data[i][0], data[i][1], 5);
    }
}
function write_config() {
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillText(`K = ${K}`, 10, HEIGHT - 30);
    ctx.fillText(`Using L${dist} distance`, 10, HEIGHT - 15);
}