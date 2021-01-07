class Paper {
    constructor(x,y,radius){
    var option={
        isStatic:false,
        restiyution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body = Bodies.circle(x,y,radius,option);
      this.radius = radius;
      World.add(world, this.body);
    }

    display(){
          var pos =this.body.position;
           fill("pink");
          ellipseMode(RADIUS);
          ellipse(pos.x, pos.y, this.radius, this.radius);
         
    }
};