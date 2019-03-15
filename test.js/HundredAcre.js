var Heffalumps = { character : "Heffalumps"};
var Eeyore = { character : "Eeyore"};
var Kanga = { character : "Kanga"};
var Owl = { character: "Owl" };
var ChristoperRobin = { character : "ChristopherRobin"};
var Rabbit = { character : "Rabbit"};
var Gopher = { character : "Gopher"};
var Piglet = { character : "Piglet"};
var Pooh = { character : "Pooh"};
var Bees = { character : "Bees"};
var Tigger = { character : "Tigger"};
Tigger.north= Pooh;
Pooh.south=Tigger;
Pooh.east= Bees;
Pooh.west= Piglet;
Pooh.north= ChristoperRobin;
Piglet.east=Pooh;
Piglet.north=Owl;
Owl.south=Piglet;
Owl.east=ChristoperRobin;
ChristoperRobin.west=Owl;
ChristoperRobin.east=Rabbit;
ChristoperRobin.south=Pooh;
ChristoperRobin.north=Kanga;
Rabbit.west=ChristoperRobin;
Rabbit.east=Gopher;
Rabbit.south=Bees;
Bees.north=Rabbit;
Bees.west=Pooh;
Gopher.west=Rabbit;
Kanga.south=ChristoperRobin;
Kanga.north=Eeyore;
Eeyore.south=Kanga;
Eeyore.east=Heffalumps;
Heffalumps.west=Eeyore;


function move()
var north = "north";
var south = "south";
var east = "east";
var west = "west";
{
    if(direction = )
}
