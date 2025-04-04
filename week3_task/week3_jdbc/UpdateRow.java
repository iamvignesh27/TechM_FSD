package week3_jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class UpdateRow {
	public static void main(String[] args) {
		// Database URL, username, and password
		String url = "jdbc:mysql://localhost:3306/techm"; // Change to your database URL
		String user = "root"; // Change to your database username
		String password = "Vicky@2003"; // Change to your database password

		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter the Employee ID to update: ");
		int empId = scanner.nextInt();
		scanner.nextLine(); // Consume newline

		System.out.print("Enter the new Employee Name: ");
		String empName = scanner.nextLine();

		System.out.print("Enter the new Employee Age: ");
		int empAge = scanner.nextInt();

		// SQL update statement
		String sql = "UPDATE employees SET EmpName = ?, EmpAge = ? WHERE EmpId = ?";

		try (Connection connection = DriverManager.getConnection(url, user, password);
				PreparedStatement preparedStatement = connection.prepareStatement(sql)) {

			// Set the parameters
			preparedStatement.setString(1, empName);
			preparedStatement.setInt(2, empAge);
			preparedStatement.setInt(3, empId);

			// Execute the update
			int rowsAffected = preparedStatement.executeUpdate();
			if (rowsAffected > 0) {
				System.out.println("Employee updated successfully.");
			} else {
				System.out.println("No employee found with ID: " + empId);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			scanner.close();
		}
	}
}