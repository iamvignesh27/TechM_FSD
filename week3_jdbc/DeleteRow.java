package week3_jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class DeleteRow {

	public static void main(String[] args) {
		// Database URL, username, and password
		String url = "jdbc:mysql://localhost:3306/techm"; // Change to your database URL
		String user = "root"; // Change to your database username
		String password = "Vicky@2003"; // Change to your database password

		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter the Employee ID to delete: ");
		int empId = scanner.nextInt();

		// SQL delete statement
		String sql = "DELETE FROM employees WHERE EmpId = ?";

		try (Connection connection = DriverManager.getConnection(url, user, password);
				PreparedStatement preparedStatement = connection.prepareStatement(sql)) {

			// Set the parameter
			preparedStatement.setInt(1, empId);

			// Execute the delete
			int rowsAffected = preparedStatement.executeUpdate();
			if (rowsAffected > 0) {
				System.out.println("Employee with ID " + empId + " deleted successfully.");
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
