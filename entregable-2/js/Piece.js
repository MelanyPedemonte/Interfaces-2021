"use strict";
class Piece{
     //Constructor
     constructor(x, y, radius, fill, ctx, relleno){
        this.x = x;
        this.y = y;
        this.fill = fill;
        this.ctx = ctx;
        this.relleno = relleno;
        this.radius = radius;
    }

    //Metodos GET && SET
    getPosition(x,y){
        return{
            x : this.getX(),
            y : this.getY()
        };
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    setPosition(x,y){
        this.x = x;
        this.y = y;
    }

    getRadius(){
        return this.radius;
    }

    setRadius(radius){
        this.radius = radius;
    }

    setResaltado(resaltado){
        this.resaltado =resaltado;
    }

    //Metodo Especifico
    draw(){
        this.ctx.beginPath();
        this.relleno.onload=function() { //la imagen debe cargarse
            relleno=cxt1.createPattern(imagen1,"repeat"); //método createPattern
            cxt1.fillStyle=relleno; //imagen como relleno
        }
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
    }
} 