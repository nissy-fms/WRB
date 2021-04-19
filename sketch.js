let capture;
let page1;
let page3;
function preload() {
    page1 = loadImage('page1.PNG');
    page3 = loadImage('page3.PNG');
}

function setup() {
    //createCanvas(windowWidth, windowHeight);
    createCanvas(563, 945);
    capture = createCapture(VIDEO);
    capture.size(640, 480);
    capture.hide();
}

function draw() {
    background(0);
    let skip = 40;
    let col_r = 0;
    let col_g = 0;
    let col_b = 0;
    let count = 0;
    //image(capture, 0, 0, 640, 480);
    for (let j = 0; j < height; j += skip) {
        for (let i = 0; i < width; i += skip) {
            let x = map(i, 0, width, 0, 640);
            let y = map(j, 0, height, 0, 480);
            let col = capture.get(x, y);
            // console.log(red(col));
            col_r = col_r + col[0];
            col_g = col_g + col[1];
            col_b = col_b + col[2];
            count++;
        }
    }
    col_r = col_r / count;
    col_g = col_g / count;
    col_b = col_b / count;
    console.log(col_r, col_g, col_b);
    if (col_r > 140 && col_g < 120 && col_b < 120) {
        //fill(255, 0, 0);
        //noStroke();
        //rect(25, 25, 50, 50);
        background(0);
        //imageMode(CENTER);
        //image(page1, width / 2, height / 2);
        drawimg(page1.PNG,canvas);
    } else {
        
        background(0);
        //imageMode(CENTER);
        //image(page3, width / 2, height / 2);
        drawimg(page1.PNG,canvas);
        fill(col_r, col_g, col_b);
        noStroke();
        //rect(25, 25, 50, 50);
    }

    function drawimg(filename, canvasname) {
        var img = new Image();
        img.onload = function() {     // 画像ファイル読込後の処理
            // 画像サイズ取得
            var imgw = img.width;
            var imgh = img.height;
            // canvasの定義
            var canvas = document.getElementById(canvasname);
            var ctx = canvas.getContext('2d');
            canvas.width = imgw;     // 画像ファイルの横幅がcanvasの横幅になります
            canvas.height = imgh;
            // 画像を canvas に表示
            ctx.drawImage(img, 0, 0);
        }
        img.src = filename;
    }
}