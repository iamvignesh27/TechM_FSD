package week3_iostreams;

import java.io.File;
import java.util.Scanner;
//1. Write a Java program to get a list of all file/directory names in the given directory
public class FileAndDirectories {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter the directory path: ");
		String directoryPath = scanner.nextLine();

		// Create a File object for the specified directory
		File directory = new File(directoryPath);

		// Check if the path is a directory
		if (directory.isDirectory()) {
			// Get the list of files and directories
			String[] fileList = directory.list();

			if (fileList != null && fileList.length > 0) {
				System.out.println("Files and directories in " + directoryPath + ":");
				for (String fileName : fileList) {
					System.out.println(fileName);
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
