/**
 * Created by TS on 2017/8/14.
 */
//流星
var MeteorRain = function()
{
    this.x = -1;
    this.y = -1;
    this.length = -1;//长度
    this.angle = 30; //倾斜角度
    this.width = -1;//宽度
    this.height = -1;//高度
    this.speed = 1;//速度
    this.offset_x = -1;//横轴移动偏移量
    this.offset_y = -1;//纵轴移动偏移量
    this.alpha = 1; //透明度
    this.color1= "yellow";//流星的色彩
    this.color2 = "blue"; //流星的色彩

    /****************初始化函数********************/
    this.init = function () //初始化
    {
        this.getPos();
        this.alpha = 1;//透明度
        this.getRandomColor(); //最小长度，最大长度
        var x = Math.random() * 80 + 150;
        this.length = Math.ceil(x); //
        x = Math.random()*10+30;
        this.angle = 30; //流星倾斜角
        x = Math.random()+0.5;
        this.speed = Math.ceil(x); //流星的速度
        var cos = Math.cos(this.angle*3.14/180);
        var sin = Math.sin(this.angle*3.14/180) ;
        this.width = this.length*cos ;//流星所占宽度
        this.height = this.length*sin ;//流星所占高度
        this.offset_x = this.speed*cos ;
        this.offset_y = this.speed*sin;
    }

    /**************获取随机颜色函数*****************/
    this.getRandomColor = function ()
    {
        var a = 255 * Math.random();
        a = Math.ceil(a);
        var a1 = 255 * Math.random();
        a1 = Math.ceil(a1);
        var a2 = 255 * Math.random();
        a2 = Math.ceil(a2); //中段颜色

        this.color1 = "rgba(" + a.toString() + "," + a1.toString() + "," + a2.toString() + ",1)"; //结束颜色
        this.color2 = "black";
    }

    /***************重新计算流星坐标的函数******************/
    this.countPos = function ()//
    {
        //往左下移动,x减少，y增加
        this.x = this.x - this.offset_x;
        this.y = this.y + this.offset_y;
    }

    /*****************获取随机坐标的函数*****************/
    this.getPos = function () //
    {
        //横坐标200--1200
        var x = Math.random() * 1000 + 400;
        this.x = Math.ceil(x);
        x = Math.random() * 600; //纵坐标小于600
        this.y = Math.ceil(x);
    }

    /****绘制流星***************************/
    this.draw = function () //绘制一个流星的函数
    {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.globalAlpha = this.alpha; //设置透明度 //创建横向渐变颜色,起点坐标至终点坐标
        var line = ctx.createLinearGradient(this.x, this.y, this.x + this.width, this.y - this.height); //分段设置颜色
        line.addColorStop(0, "white");
        line.addColorStop(0.1, this.color1);
        line.addColorStop(0.6, this.color2);
        ctx.strokeStyle = line; //起点
        ctx.moveTo(this.x, this.y); //终点
        ctx.lineTo(this.x + this.width, this.y - this.height);
        ctx.closePath(); ctx.stroke(); ctx.restore();
    }

    this.move = function()
    { //清空流星像素
        var x = this.x+this.width-this.offset_x;
        var y = this.y-this.height;
        ctx.clearRect(x-3,y-3,this.offset_x+5,this.offset_y+5); //
        ctx.strokeStyle="red"; //
        ctx.strokeRect(x,y-1,this.offset_x+1,this.offset_y+1); //重新计算位置，往左下移动
        this.countPos(); //透明度增加
        this.alpha -= 0.002; //重绘
        this.draw();
    }
}

//全局变量
var rains = new Array();
var rainCount = 20; //onload监听中加入 //流星来了

function playRains()
{
    for (var n = 0; n < rainCount; n++)
    {
        var rain = rains[n];
        rain = new MeteorRain();
        rain.init();
        rain.move();//移动
        if(rain.y>600)
        {//超出界限后重来
            ctx.clearRect(rain.x,rain.y-rain.height,rain.width,rain.height);
            //rains[n] = new MeteorRain();
            rains[n].init();
        }
        //setTimeout(playRains,50);
    }
}
