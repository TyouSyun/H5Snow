/**
 * Created by TS on 2017/8/12.
 */
/**
 *
 * @param fillStyle 填充颜色
 * @param strokeStyle 边线颜色
 * @param lineWidth 边线宽度
 * @param R 五角星内圆半径
 * @param site 所在位置
 * @param rotate 五角星旋转角度
 * @constructor
 */
var StarRandom = function(){
//    this.fillStyle = fillStyle;
//    this.strokeStyle = strokeStyle;
//    this.lineWidth = lineWidth;
//    this.R = R;
//    this.site = site;
//    this.rotate = rotate;
    var color = ["red","orange","orange yellow","yellow","greenish yellow","violet","leaf green","violet red","ultramarine violet"];

//    this.fillStyle = color[Math.floor(Math.random()*color.length)];
//    this.strokeStyle = color[Math.floor(Math.random()*color.length)];
    this.fillStyle = getRandomColor();
    this.strokeStyle = getRandomColor();
    this.lineWidth = Math.floor(Math.random()*3 + 1);
    this.R = Math.floor(Math.random()*6 + 3);
    this.site_x = Math.floor(Math.random()*(window.innerWidth - 20) + 20);
    this.site_y = Math.floor(Math.random()*(window.innerHeight - 20) + 20);
    this.rotate =  Math.floor(Math.random()*30 + 1);

//    var lineWidth = Math.floor(Math.random()*3 + 1);
//    var R = Math.floor(Math.random()*20 + 3);
//    var site = Math.floor(Math.random()*400 + 200);
//    var rotate = Math.floor(Math.random()*6 + 1);
//    var fillStyle = color[Math.floor(Math.random()*color.length)];
//    var strokeStyle = color[Math.floor(Math.random()*color.length)];

    StarRandom.prototype.CreateStar = function()
    {
        <!--画一个五角星星-->
        ctx.beginPath();
        //设置是个顶点的坐标，根据顶点制定路径
        for (var i = 0; i < 5; i++) {
            ctx.lineTo(Math.cos((this.rotate+i*72)/180*Math.PI)*2.5*this.R+this.site_x,
                    -Math.sin((this.rotate+i*72)/180*Math.PI)*2.5*this.R+this.site_y);
            ctx.lineTo(Math.cos((36+this.rotate+i*72)/180*Math.PI)*this.R+this.site_x,
                    -Math.sin((36+this.rotate+i*72)/180*Math.PI)*this.R+this.site_y);
        }
        ctx.closePath();

        //设置边框样式以及填充颜色
        ctx.lineWidth= this.lineWidth;
        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = this.strokeStyle;
        ctx.fill();
        ctx.stroke();
    }
};

function getRandomColor(){
    return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
}

var Star = function(fillStyle,strokeStyle,lineWidth,R,site_x,site_y,rotate){
    this.fillStyle = fillStyle;
    this.strokeStyle = strokeStyle;
    this.lineWidth = lineWidth;
    this.R = R;
    this.site_x = site_x;
    this.site_y = site_y;
    this.rotate = rotate;

    Star.prototype.CreateStar = function()
    {
        <!--画一个五角星星-->
        ctx.beginPath();
        //设置是个顶点的坐标，根据顶点制定路径
        for (var i = 0; i < 5; i++) {
            ctx.lineTo(Math.cos((this.rotate+i*72)/180*Math.PI)*2.5*this.R+this.site_x,
                    -Math.sin((this.rotate+i*72)/180*Math.PI)*2.5*this.R+this.site_y);
            ctx.lineTo(Math.cos((36+this.rotate+i*72)/180*Math.PI)*this.R+this.site_x,
                    -Math.sin((36+this.rotate+i*72)/180*Math.PI)*this.R+this.site_y);
        }
        ctx.closePath();

        //设置边框样式以及填充颜色
        ctx.lineWidth= this.lineWidth;
        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = this.strokeStyle;
        ctx.fill();
        ctx.stroke();
    }
};

var StarPolygon = function(){
//    this.fillStyle = fillStyle;
//    this.strokeStyle = strokeStyle;
//    this.lineWidth = lineWidth;
//    this.R = R;
//    this.site = site;
//    this.rotate = rotate;
    var color = ["red","orange","orange yellow","yellow","greenish yellow","violet","leaf green","violet red","ultramarine violet"];

//    this.fillStyle = color[Math.floor(Math.random()*color.length)];
//    this.strokeStyle = color[Math.floor(Math.random()*color.length)];
    this.fillStyle = getRandomColor();
    this.strokeStyle = getRandomColor();
    this.lineWidth = Math.floor(Math.random()*3 + 1);
    this.R = Math.floor(Math.random()*3 + 3);
    this.site_x = Math.floor(Math.random()*(window.innerWidth - 20) + 20);
    this.site_y = Math.floor(Math.random()*(window.innerHeight - 20) + 20);
    this.rotate =  Math.floor(Math.random()*30 + 1);
    this.sideNum = Math.floor(Math.random()*5 + 4);

//    var lineWidth = Math.floor(Math.random()*3 + 1);
//    var R = Math.floor(Math.random()*20 + 3);
//    var site = Math.floor(Math.random()*400 + 200);
//    var rotate = Math.floor(Math.random()*6 + 1);
//    var fillStyle = color[Math.floor(Math.random()*color.length)];
//    var strokeStyle = color[Math.floor(Math.random()*color.length)];

    StarPolygon.prototype.CreateStar = function()
    {
        <!--画一个五角星星-->
        ctx.beginPath();
        //设置是个顶点的坐标，根据顶点制定路径
        for (var i = 0; i < this.sideNum; i++) {
            ctx.lineTo(Math.cos((this.rotate+i*360/this.sideNum)/180*Math.PI)*2.5*this.R+this.site_x,
                    -Math.sin((this.rotate+i*360/this.sideNum)/180*Math.PI)*2.5*this.R+this.site_y);
            ctx.lineTo(Math.cos((36+this.rotate+i*360/this.sideNum)/180*Math.PI)*this.R+this.site_x,
                    -Math.sin((36+this.rotate+i*360/this.sideNum)/180*Math.PI)*this.R+this.site_y);
        }
        ctx.closePath();

        //设置边框样式以及填充颜色
        ctx.lineWidth= this.lineWidth;
        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = this.strokeStyle;
        ctx.fill();
        ctx.stroke();
    }
};