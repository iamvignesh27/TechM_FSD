package programs;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Anagram {

	public static List<Integer> findAnagrams(String s, String p) {
		List<Integer> result = new ArrayList<>();

		int[] pCount = new int[26], sCount = new int[26];

		// Count the frequency of each character in p
		for (char c : p.toCharArray()) {
			pCount[c - 'a']++;
		}

		// Iterate through the string s
		for (int i = 0; i < s.length(); i++) {
			sCount[s.charAt(i) - 'a']++;

			if (i >= p.length()) {
				sCount[s.charAt(i - p.length()) - 'a']--;
			}

			if (Arrays.equals(pCount, sCount)) {

				result.add(i - p.length() + 1);
			}
		}

		return result;
	}

	public static void main(String[] args) {

		System.out.println(findAnagrams("xyzabcxyz", "xyz"));
	}
}
