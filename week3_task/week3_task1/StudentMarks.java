package week3_task1;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;

public class StudentMarks {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		List<Student> students = new ArrayList<>();

		System.out.print("Enter the number of students: ");
		int numberOfStudents = scanner.nextInt();
		scanner.nextLine(); 
		for (int i = 0; i < numberOfStudents; i++) {
			System.out.print("Enter the name of student " + (i + 1) + ": ");
			String name = scanner.nextLine();

			System.out.print("Enter the number of subjects: ");
			int numberOfSubjects = scanner.nextInt();
			int[] marks = new int[numberOfSubjects];

			for (int j = 0; j < numberOfSubjects; j++) {
				System.out.print("Enter marks for subject " + (j + 1) + ": ");
				marks[j] = scanner.nextInt();
			}
			scanner.nextLine(); 

			students.add(new Student(name, marks));
		}

		// Sort students by average marks in descending order
		Collections.sort(students, new Comparator<Student>() {
			@Override
			public int compare(Student s1, Student s2) {
				return Double.compare(s2.average, s1.average); // Descending order
			}
		});

		// Display the sorted list of students
		System.out.println("\nSorted list of students by average marks:");
		for (Student student : students) {
			System.out.println(student);
		}

		scanner.close();
	}
}
