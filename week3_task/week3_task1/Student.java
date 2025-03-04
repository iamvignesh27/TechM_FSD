package week3_task1;

public class Student {

	String name;
	int[] marks;
	int total;
	double average;

	public Student(String name, int[] marks) {
		this.name = name;
		this.marks = marks;
		calculateTotalAndAverage();
	}

	private void calculateTotalAndAverage() {
		total = 0;
		for (int mark : marks) {
			total += mark;
		}
		average = (double) total / marks.length;
	}

	@Override
	public String toString() {
		return "Name: " + name + ", Total Marks: " + total + ", Average Marks: " + average;
	}
}
