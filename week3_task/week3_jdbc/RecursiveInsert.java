package week3_jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class RecursiveInsert {
	private static final String URL = "jdbc:mysql://localhost:3306/techm"; // Change to your database URL
	private static final String USER = "root"; // Change to your database username
	private static final String PASSWORD = "Vicky@2003"; // Change to your database password

	public static void main(String[] args) {
		try (Connection connection = DriverManager.getConnection(URL, USER, PASSWORD)) {
			// Prepare the SQL statement
			String sql = "INSERT INTO employees (EmpId, EmpName, EmpAge) VALUES (?, ?, ?)";
			PreparedStatement preparedStatement = connection.prepareStatement(sql);

			// Start the recursive insertion
			insertEmployee(preparedStatement);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	private static void insertEmployee(PreparedStatement preparedStatement) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter employee ID (or -1 to stop): ");
		int id = scanner.nextInt();
		if (id == -1) {
			return; // Base case: stop recursion
		}

		System.out.print("Enter employee name: ");
		String name = scanner.next();

		System.out.print("Enter employee age: ");
		int age = scanner.nextInt();

		try {
			// Set parameters and execute the insert
			preparedStatement.setInt(1, id);
			preparedStatement.setString(2, name);
			preparedStatement.setInt(3, age);
			preparedStatement.executeUpdate();
			System.out.println("Employee inserted: ID=" + id + ", Name=" + name + ", Age=" + age);
		} catch (SQLException e) {
			e.printStackTrace();
		}

		// Recursive call to insert another employee
		insertEmployee(preparedStatement);
		scanner.close();
	}
}