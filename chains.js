class chains {
constructor(bodyA,bodyB){

    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.04,
        langth:10
             }
             var bay = Constraints.create(options);
             World.add(world,bay);

}

display(){

var posA = this.bay.bodyA.position;
var posB = this.bay.bodyB.position;

line(posA.x,posA.y,posB.x,posB.y);





}








}