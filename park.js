var Park = function(){
  this.register = []
}

Park.prototype.add = function (dinosaur) {
  this.register.push(dinosaur)
}

Park.prototype.remove = function(type) {
  for (var i = 0; i < this.register.length; i++) {
    if (this.register[i].type === type){
      this.register.splice(i,1)
    }
  }
}

Park.prototype.dinoWithSoManyBairns = function (number) {
  for (var i = 0; i < this.register.length; i++) {
    if (this.register[i].numOfBairns < number){
      this.register.splice(i,1)
    }
  }
};


module.exports = Park;
