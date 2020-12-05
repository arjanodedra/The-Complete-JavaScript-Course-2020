'use Strict'

const markBMI = {
    firstName: 'Mark',
    lastName: 'Miller',
    height: 1.69,
    weight: 78,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}

const johnBMI = {
    firstName: 'John',
    lastName: 'Smith',
    height: 1.95,
    weight: 92,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}
johnBMI.calcBMI();
markBMI.calcBMI();
if (johnBMI.bmi > markBMI.bmi) {
    console.log(`${johnBMI.firstName} BMI (${johnBMI.bmi}) is Higher Then ${markBMI.firstName} BMI (${markBMI.bmi}) `);
}
else {
    console.log(`${markBMI.firstName} BMI (${markBMI.bmi}) is Higher Then ${johnBMI.firstName} BMI (${johnBMI.bmi}) `);
}