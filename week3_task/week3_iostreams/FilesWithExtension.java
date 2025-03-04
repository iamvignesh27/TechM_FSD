package week3_iostreams;

import java.io.File;
import java.util.Scanner;
//2. Write a Java program to get specific files with extensions from a specified folder.
public class FilesWithExtension {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter the directory path: ");
		String directoryPath = scanner.nextLine();

		System.out.print("Enter the file extension (e.g., .txt, .jpg): ");
		String fileExtension = scanner.nextLine();

		// Create a File object for the specified directory
		File directory = new File(directoryPath);

		// Check if the path is a directory
		if (directory.isDirectory()) {
			// Get the list of files in the directory
			File[] files = directory.listFiles();

			if (files != null && files.length > 0) {
				System.out.println("Files with extension '" + fileExtension + "' in " + directoryPath + ":");
				boolean found = false;
				for (File file : files) {
					// Check if the file has the specified extension
					if (file.isFile() && file.getName().endsWith(fileExtension)) {
						System.out.println(file.getName());
						found = true;
					}
				}
				if (!found) {
					System.out.println("No files with the specified extension found.");
				}
			} else {
				System.out.println("The directory is empty.");
			}
		} else {
			System.out.println("The specified path is not a directory.");
		}

		scanner.close();
	}
}
