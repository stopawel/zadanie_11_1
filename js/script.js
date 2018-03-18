function Phone(brand , price, color){
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function(){
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "zł.");
}

var OnePlusOne = new Phone("One Plus", 555.99, "black");
var SamsungGalaxyS6 = new Phone("Samsung", 999.99, "black");
var iPhone6S = new Phone("Apple", 2222.99, "silver");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();