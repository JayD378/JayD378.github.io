buttonArray = new Array('Generate Options!', 'Reroll!');

//let diceOption = document.getElementById('diceType');
//let diceValue = selection;
//console.log(diceValue);

function generateFull() {
      classLibrary = new Array('Artificer', 'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorceror', 'Warlock', 'Wizard')
      document.getElementById("reset").onclick = generateFull;
      chooseClass = Math.floor(Math.random()* classLibrary.length);
      document.getElementById("outputClass").innerHTML = classLibrary[chooseClass];
      
      raceLibrary = new Array('Human', 'Dwarf', 'Elf', 'Halfling', 'Gnome', 'Dragonborn', 'Teifling', 'Half-elf', 'Half-orc')
      document.getElementById("reset").onclick = generateFull;
      chooseRace = Math.floor(Math.random()* raceLibrary.length);
      document.getElementById("outputRace").innerHTML = raceLibrary[chooseRace];

      let submissions = 1;
      document.getElementById("reset").innerHTML = buttonArray[submissions];

}
//function saveChange(){
  //    let diceOption = $(this).value;
//}


