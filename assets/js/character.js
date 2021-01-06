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

class Paladin extends Character {
    constructor(name, hp = 16, dmg = 3, mana = 160, status) {
        super(hp, dmg, mana, status);
        this.name = name;

        //Le Paladin aura une attaque spéciale Healing Lighting, 
        //infligeant 4 dégâts et le soignant de 5.
        //Elle coute 40 mana.
    }
}

class Monk extends Character {
    constructor(name, hp = 8, dmg = 3, mana = 200, status) {
        super(hp, dmg, mana, status);
        this.name = name;

        //Le Monk, quand a lui, aura une attaque spéciale heal rendant 8 PV. 
        //Elle coute 25 mana.
    }
}

class Berzerker extends Character {
    constructor(name, hp = 40, dmg = 9, mana = 10, status) {
        super(hp, dmg, mana, status);
        this.name = name;

        //Le Berzerker aura une attaque spéciale Rage lui donnant +1 pour ses attaques 
        //pour tout le reste de la partie mais lui enlevant 1 hp. 
        //Elle coûte 0 mana. Elle peut être appelée plusieurs fois (par exemple, 
        //si le Berzerker a fait son attaque spéciale 2 fois, ses attaques infligeront 4 + 2 = 6 points de dégât).
    }
}

class Assassin extends Character {
    constructor(name, hp = 30, dmg = 6, mana = 90, status) {
        super(hp, dmg, mana, status);
        this.name = name;

        //L'Assassin aura une attaque spéciale Shadow hit lui permettant de 
        //ne pas prendre de dégâts lors du prochain tour. 
        //Il portera alors une attaque spéciale infligeant 7 dégâts puis, si l'adversaire n'est pas mort, 
        //l'assassin perdra 7 dégâts à son tour. Cette attaque coûte 20 mana.
    }
}