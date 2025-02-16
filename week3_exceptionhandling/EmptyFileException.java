package week3_exceptionhandling;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class EmptyFileException {
	public static void main(String[] args) {
		String filePath = "example.txt"; // Change this to the path of your input file

		try {
			readFile(filePath);
		} catch (FileNotFoundException e) {
			System.out.println("Caught an exception: " + e.getMessage());
		} catch (IllegalArgumentException e) {
			System.out.println("Caught an exception: " + e.getMessage());
		}
	}

	// Method that reads a file and throws an exception if the file is empty
	public static void readFile(String filePath) throws FileNotFoundException {
		File file = new File(filePath);
		Scanner scanner = new Scanner(file); // This line can throw FileNotFoundException

		// Check if the file is empty
		if (!scanner.hasNextLine()) {
			scanner.close(); // Close the scanner before throwing the exception
			throw new IllegalArgumentException("The file is empty: " + filePath);
		}

		// Read the file line by line
		while (scanner.hasNextLine()) {
			String line = scanner.nextLine();
			System.out.println(line);
		}
		scanner.close();
	}
}