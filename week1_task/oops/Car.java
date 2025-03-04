package oops;

import util.Constants;

public class Car {
	// Private instance variables
	private String make;
	private String model;
	private int year;

	// Constructor
	public Car(String make, String model, int year) {
		this.make = make;
		this.model = model;
		this.year = year;
	}

	// Getters and Setters
	public String getMake() {
		return make;
	}

	public void setMake(String make) {
		this.make = make;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	// Method to start the engine
	public void startEngine() {
		System.out.println(make + " " + model + " " + year + " " + Constants.START_ENGINE);
	}

}