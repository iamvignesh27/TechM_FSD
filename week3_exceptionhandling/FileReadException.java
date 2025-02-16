package week3_exceptionhandling;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class FileReadException {
	public static void main(String[] args) {
		String filePath = "non_existent_file.txt"; 

		try {
			readFile(filePath);
		} catch (FileNotFoundException e) {
			// Catching the exception and printing the error message
			System.out.println("Caught an exception: " + e.getMessage());
		}
	}

	// Method that reads a file and throws an exception if the file is not found
	public static void readFile(String filePath) throws FileNotFoundException {
		File file = new File(filePath);
		Scanner scanner = new Scanner(file); // This line can throw FileNotFoundException

		// Reading the file line by line
		while (scanner.hasNextLine()) {
			String line = scanner.nextLine();
			System.out.println(line);
		}
		scanner.close();
	}
}
