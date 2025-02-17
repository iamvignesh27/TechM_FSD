package week3_jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class Menu {
	private static final String DB_URL = "jdbc:mysql://localhost:3306/techm";
	private static final String USER = "root";
	private static final String PASSWORD = "Vicky@2003";
	private static Scanner scanner = new Scanner(System.in);

	public static void main(String[] args) {
		try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASSWORD)) {
			while (true) {
				System.out.println("\nMenu:");
				System.out.println("1. Insert a new Row");
				System.out.println("2. Update a Row");
				System.out.println("3. Delete a Row");
				System.out.println("4. Select the Row");
				System.out.println("5. Exit");

				System.out.print("Enter your choice: ");
				int choice = scanner.nextInt();
				scanner.nextLine(); // Consume newline

				switch (choice) {
				case 1:
					insertEmployee(conn);
					break;
				case 2:
					updateEmployee(conn);
					break;
				case 3:
					deleteEmployee(conn);
					break;
				case 4:
					selectEmployee(conn);
					break;
				case 5:
					System.out.println("Exiting the program.");
					return;
				default:
					System.out.println("Invalid choice. Please try again.");
				}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	private static void insertEmployee(Connection conn) throws SQLException {
		System.out.print("Enter Employee ID: ");
		int empId = scanner.nextInt();
		scanner.nextLine();
		System.out.print("Enter Employee Name: ");
		String empName = scanner.nextLine();
		System.out.print("Enter Employee Age: ");
		int empAge = scanner.nextInt();

		String sql = "INSERT INTO employees (EmpId, EmpName, EmpAge) VALUES (?, ?, ?)";
		try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
			pstmt.setInt(1, empId);
			pstmt.setString(2, empName);
			pstmt.setInt(3, empAge);
			pstmt.executeUpdate();
			System.out.println("Employee added successfully.");
		}
	}

	private static void updateEmployee(Connection conn) throws SQLException {
		System.out.print("Enter Employee ID to update: ");
		int empId = scanner.nextInt();
		scanner.nextLine();
		System.out.print("Enter new Employee Name: ");
		String empName = scanner.nextLine();
		System.out.print("Enter new Employee Age: ");
		int empAge = scanner.nextInt();

		String sql = "UPDATE employees SET EmpName = ?, EmpAge = ? WHERE EmpId = ?";
		try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
			pstmt.setString(1, empName);
			pstmt.setInt(2, empAge);
			pstmt.setInt(3, empId);
			int rowsUpdated = pstmt.executeUpdate();
			if (rowsUpdated > 0) {
				System.out.println("Employee updated successfully.");
			} else {
				System.out.println("Employee ID not found.");
			}
		}
	}

	private static void deleteEmployee(Connection conn) throws SQLException {
		System.out.print("Enter Employee ID to delete: ");
		int empId = scanner.nextInt();

		String sql = "DELETE FROM employees WHERE EmpId = ?";
		try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
			pstmt.setInt(1, empId);
			int rowsDeleted = pstmt.executeUpdate();
			if (rowsDeleted > 0) {
				System.out.println("Employee deleted successfully.");
			} else {
				System.out.println("Employee ID not found.");
			}
		}
	}

	private static void selectEmployee(Connection conn) throws SQLException {
		System.out.print("Enter Employee ID to select: ");
		int empId = scanner.nextInt();

		String sql = "SELECT * FROM employees WHERE EmpId = ?";
		try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
			pstmt.setInt(1, empId);
			ResultSet rs = pstmt.executeQuery();
			if (rs.next()) {
				System.out.println("Employee ID: " + rs.getInt("EmpId") + ", Name: " + rs.getString("EmpName")
						+ ", Age: " + rs.getInt("EmpAge"));
			} else {
				System.out.println("Employee ID not found.");
			}
		}
	}
}
