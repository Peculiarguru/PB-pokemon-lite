// Pokemon class
class Pokemon {
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
  }
  //   learn skill method
  learnAttackSkill(skill) {
    this.skills.push(skill);
  }
  //   show status method
  showStatus() {
    console.log(`${this.name} status`);
    console.log(`health: ${this.health}`);
    console.log(`magic: ${this.magic}`);
  }
  //   show status method

  // attack method
  attack(skillIndex, target) {
    const skill = this.skills[skillIndex];
    if (!skill) {
      console.log(`${this.name} does not have that skill!`);
    } else if (this.magic < skill.amountOfMagic) {
      console.log(`not enough magic, cannot launch attack!`);
    } else if (this.health <= 0) {
      console.log(`${this.name} is already dead!`);
    } else {
      if (target.health <= 0) {
        console.log(`${target.name} is killed!`);
      } else {
        this.magic -= skill.amountOfMagic;
        target.health -= skill.amountOfDamage;
        console.log(
          `${this.name} launched skill '${skill.name}' successfully!`
        );
        console.log(`${target.name} got ${skill.amountOfDamage} damage`);
      }
    }
  }
  //   getMagic method
  getMagic() {
    const magic = 20;
    this.magic += magic;
    console.log(`${this.name} got ${magic} magic back`);
  }
}

// AttackSkill class
class AttackSkill {
  constructor(name, amountOfDamage, amountOfMagic) {
    this.name = name;
    this.amountOfDamage = amountOfDamage;
    this.amountOfMagic = amountOfMagic;
  }
}
let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

//Each skill should do a certain amount of damage, and consume a certain amount of magic from the Pokemon that used the skill.
let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill("poison seed", 20, 20);

pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);

//The first argument to `attack` should be the index (or key) of the attack
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.getMagic();
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
