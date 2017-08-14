/**
 * Created by TS on 2017/8/14.
 */
var snow = function()
{
    this.site_x = Math.floor(Math.random()*(window.innerWidth - 20) + 20);
    this.site_y = Math.floor(Math.random()*(window.innerHeight - 20) + 20);
    this.R = Math.floor(Math.random()*8 + 0);

    snow.prototype.CreateSnowflake = function()
    {
        ctx.beginPath();
        ctx.arc(this.site_x,this.site_y,this.R,0,2*Math.PI);
        ctx.strokeStyle = "white";
        ctx.fillStyle="white";
        ctx.stroke();
        ctx.closePath();
        ctx.fill();
    }
}