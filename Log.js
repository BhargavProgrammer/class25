class Log extends BaseClass{
    constructor(x,y,height,angle){

        //JSON - JAVASCRIPT OBJECT NOTATION: DATA STRUCTURE: DATA FORMAT
       super(x,y,20,height,angle);
       Matter.Body.setAngle(this.wbox.angle)
    }
}