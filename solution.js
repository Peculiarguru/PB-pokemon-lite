// AttackSkill class
class AttackSkill {
  constructor(name, damage, magic) {
    this.name = name;
    this.damage = damage;
    this.magic = magic;
  }
}

// Pokemon class
class Pokemon {
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
  }

  learnAttackSkill(skill) {
    this.skills.push(skill);
  }

  showStatus() {
    console.log(`${this.name} status`);
    console.log(`health: ${this.health}`);
    console.log(`magic: ${this.magic}`);
  }

  attack(skillIndex, target) {
    const skill = this.skills[skillIndex];
    if (!skill) {
      console.log(`${this.name} does not have that skill!`);
      return;
    }
    if (this.magic < skill.magic) {
      console.log(
        `${this.name} does not have enough magic to use ${skill.name}!`
      );
      return;
    }
    this.magic -= skill.magic;
    target.health -= skill.damage;
    console.log(`${this.name} launched skill '${skill.name}' successfully!`);
    console.log(`${target.name} got ${skill.damage} damage`);
    if (target.health <= 0) {
      console.log(`${target.name} is killed!`);
    }
  }

  getMagic() {
    const restoredMagic = Math.floor(Math.random() * 10) + 1;
    this.magic += restoredMagic;
    console.log(`${this.name} got ${restoredMagic} magic back`);
  }
}

// Example usage
let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill("poison seed", 20, 20);

pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);

pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);

pikachu.showStatus();
bulbasaur.showStatus();

pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.getMagic();
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
bulbasaur.attack(0, pikachu);
