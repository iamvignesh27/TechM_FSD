package oops;

public class CarImplementation {
	public static void main(String[] args) {
		// Create an array of Car objects
		Car[] cars = new Car[4];
		cars[0] = new Car("BMW", "iX1 LWB", 2025);
		cars[1] = new ElectricCar("Mahindra", "BE 6 ", 2025, 535);
		cars[2] = new Car("Lotus", "Emira", 2025);
		cars[3] = new ElectricCar("Hyundai", "Creta", 2025, 390);

		// Loop through the array and call startEngine() on each object
		for (Car car : cars) {
			car.startEngine();
			if (car instanceof ElectricCar) {
				((ElectricCar) car).chargeBattery(); // Call chargeBattery if it's an ElectricCar
			}
		}
	}
} 