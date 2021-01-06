class Character {
    constructor(hp, dmg, mana, status = 'playing') {
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.status = status;
    }
}