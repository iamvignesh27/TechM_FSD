package oops;

import util.Constants;

public class ElectricCar extends Car {

	private int batteryRange;

	// Constructor
	public ElectricCar(String make, String model, int year, int batteryRange) {
		super(make, model, year); // Call the constructor of the superclass
		this.batteryRange = batteryRange;
	}

	// Getter and Setter
	public int getBatteryRange() {
		return batteryRange;
	}

	public void setBatteryRange(int batteryRange) {
		this.batteryRange = batteryRange;
	}

	// Method to charge the battery
	public void chargeBattery() {
		System.out.println(getMake() + " " + getModel() + getYear() + " " +Constants.CHARGE_BATTERY);
	}

	// Override startEngine method
	@Override
	public void startEngine() {
		System.out.println(getMake() + " " + getModel() + getYear() +" " + Constants.START_ENGINE);
	}
}
