var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

var atticusObj = new Object(employees[0]);
var jemObj = new Object(employees[1]);
var booObj = new Object(employees[2]);
var scoutObj = new Object(employees[3]);
var empObjs = [atticusObj, jemObj, booObj, scoutObj];

function Object(empInfo){
	for(var i = 0; i < empInfo.length; i++) {
		this.name = empInfo[0];
		this.empNumber = empInfo[1];
		this.currentSalary = empInfo[2];
		this.rating = empInfo[3];
	}
}

function calculateSTI(empInfo) {
	var name = empInfo.name;
	var empNumber = empInfo.empNumber;
	var currentSalary = Math.round(parseFloat(empInfo.currentSalary));
	var rating = empInfo.rating;
	
	var processedEmployee = {};
	var bonus = 0;
	var bonusPercentage = 0;
	var adjSalary = currentSalary;	// base + STI
	var totalBonus = bonus;

	// calc sti
	switch(rating) {
		case 0:
		case 1:
		case 2:
			bonusPercentage = 0;
			break;
		case 3:
			bonusPercentage = .04;
			break;
		case 4:
			bonusPercentage = .06;
			break;
		case 5:
			bonusPercentage = .10;
			break;
		default:
			bonusPercentage = 0;
	}

	bonusPercentage = adjustBonusPercentage(empNumber, bonusPercentage, currentSalary);
	
	// build processed object
	processedEmployee.Name = name;
	processedEmployee.BonusPercentage = bonusPercentage * 100 + "%";

	bonus = Math.round(bonusPercentage * currentSalary);
	adjSalary = currentSalary + bonus;

	processedEmployee.Salary = "$" + adjSalary;
	processedEmployee.AdjustedBonus = "$" + bonus;

	return processedEmployee;
}

function adjustBonusPercentage(empNumber, bonusPercentage, currentSalary) {
	if(empNumber.length == 4) {
		bonusPercentage += .05;
	}

	if(currentSalary > 65000) {
		bonusPercentage -= .01;
	}

	if(bonusPercentage > .13) {
		bonusPercentage = .13;
	}

	return bonusPercentage;
}


for(var i = 0; i < employees.length; i++) {
	console.log(calculateSTI(empObjs[i]));

}