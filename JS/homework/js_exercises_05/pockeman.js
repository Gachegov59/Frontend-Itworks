function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

const pickachu = new Pokemon("Pickachu", "Electric", [
  "Thunderbolt",
  "Thunder",
  "Electro Ball",
]);
const squirtle = new Pokemon("Squirtle", "Water", [
  "Water Gun",
  "Bubble",
  "Water Pulse",
]);
const caterpie = new Pokemon("Caterpie", "Bug", ["String Shot", "Bug Bite"]);

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you, ${this.name}`);
};

Pokemon.prototype.attack = function(attackList) {
    if (!this.attackList[attackList]) {
        console.log(`I don't know this attack`);
        return;
    }
    console.log(`I choose you, ${this.attackList[attackList]}`);
}


pickachu.callPokemon()
caterpie.attack(4)