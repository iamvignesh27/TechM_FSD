package abstraction;

import util.Constants;

public class Dog extends Animal {

	// Overrides the makeSound method for sound of dog
	@Override
	void makeSound() {
		System.out.println(Constants.DOG_BARK_SOUND);
	}
}
