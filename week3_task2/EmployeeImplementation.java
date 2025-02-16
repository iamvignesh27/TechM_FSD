package week3_task2;

public class EmployeeImplementation {
	public static void main(String[] args) {
		Employee emp1 = new Employee("raakesh", 27, 2400000, 8);
		emp1.getEmployeeDetails();
		System.out.println(emp1.getLoanEligibility());
	}
}
