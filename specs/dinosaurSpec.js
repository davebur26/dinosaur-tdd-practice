var assert = require("assert");
var Dinosaur = require("../dinosaur");
var dino1
var dino2


describe("Dinosaur Test", function(){

  beforeEach(function(){
    dino1 = new Dinosaur("T-Rex", 4);
    dino2 = new Dinosaur("Triceratops", 2);
  })

  it("dinosaur type", function(){
    assert.strictEqual(dino1.type, "T-Rex");
  })

  it("dinosaur number of children", function(){
    assert.strictEqual(dino2.numOfBairns, 2);
  })

})
