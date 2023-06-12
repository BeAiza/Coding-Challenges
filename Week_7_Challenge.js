class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		if(this.age < other.age) {
			return `${other.name} is older than me.`;
		} else if(this.age > other.age) {
			return `${other.name} is younger than me.`;
		} else {
			return `${other.name} is the same age as me.`;
		}
		
		
	}
}