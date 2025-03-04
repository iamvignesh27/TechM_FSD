package week3_iostreams;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

//10. Write a Java program to read file content line by line.
public class ReadLineByLine {

	public static void main(String[] args) {
		String filePath = "\"C:\\Users\\91944\\Downloads\\Core Java Consolidated Tasks.pdf\"";

		try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
			String line;

			while ((line = reader.readLine()) != null) {
				System.out.println("Line : " + line);

			}

		} catch (IOException e) {
			System.err.println("Error reading file: " + e.getMessage());
		}
	}
}
