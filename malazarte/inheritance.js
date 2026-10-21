class Rifle {
    constructor (ammo, damage, attachment) {
        this.ammo = ammo;
        this.damage = damage;
        this.attachment = attachment;

    }

    fire() {
        console.log("Gun is Firing!   Damage: " , this.damage);
        console.log("Ammo Used: " , this.ammo);
        console.log("Attachment: " , this.attachment);
    }

    standby() {
        console.log("Gun Standing By.... in parent");
    }

}

class DLQ extends Rifle {
    constructor(ammo, damage, attachment, range, target) {
        super(ammo,damage, attachment)
        this.range = range; 
        this.target = target;
    }

    aim() {
        console.log("Sniper is aiming far at", this.range);
        console.log("Target Status: ", this.target);

    }

    standby() {
        console.log("Gun Standing By.... in child");
    }

}

const dlq = new DLQ (".50 caliber mag", 100, "8x scope, MIP Stike Stock, OWC Marksman, Granulated Grip Tape, FMJ", "500m", "Terminated");

dlq.fire();
dlq.aim();
dlq.standby();

// const dlq = [new DLQ(".50 caliber mag", 100, "8x scope, MIP Stike Stock, OWC Marksman, Granulated Grip Tape, FMJ", "500m", "Terminated") ];

// for (const DLQ of dlq) {
//     console.log(DLQ.ammo);
//     console.log(DLQ.damage);
//     console.log(DLQ.attachment);
//     console.log(DLQ.range);
//     console.log(DLQ.target);
//     console.log(`${DLQ.ammo} so yummy`);
// }
