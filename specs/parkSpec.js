var assert = require("assert");
var Dinosaur = require("../dinosaur");
var Park = require("../park");
var dino1
var dino2
var dino3
var park


describe("Park Test", function(){

  beforeEach(function(){
    dino1 = new Dinosaur("T-Rex", 4);
    dino2 = new Dinosaur("Triceratops", 2);
    dino3 = new Dinosaur("T-Rex", 9);

    park = new Park();
  })

  it("park is empty", function(){
    assert.strictEqual(park.register.length, 0);
  })

  it("add dinosaur to park", function(){
    park.add(dino1)
    assert.strictEqual(park.register[0], dino1)
  })

  it("remove T-Rex from park", function(){
    park.add(dino1)
    park.add(dino2)
    park.add(dino3)
    park.remove("T-Rex")
    assert.strictEqual(park.register[0], dino2)
  })

  it("remove Dino with less than 4 bairns", function(){
    park.add(dino1)
    park.add(dino2)
    park.add(dino3)
    park.dinoWithSoManyBairns(4)
    assert.strictEqual(park.register[1], dino3)
  })


})
