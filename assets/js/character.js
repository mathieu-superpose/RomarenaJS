class Character {
    constructor(hp, dmg, mana, status = 'playing') {
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.status = status;
    }
}

class Fighter extends Character {
    constructor(name, hp = 12, dmg = 4, mana = 160, status) {
        super(hp, dmg, mana, status);
        this.name = name;

        //Le Fighter aura une attaque spéciale Dark Vision, infligeant 5 dégâts.
        //Jusqu'au prochain tour, il prendra 2 dégâts de moins par coup reçu. 
        //Elle coute 20 mana.
    }
}