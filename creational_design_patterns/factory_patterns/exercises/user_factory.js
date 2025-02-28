class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  printDetails() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor(firstName, lastName, enrollmentId) {
    super(firstName, lastName);
    this.enrollmentId = enrollmentId;
  }

  printDetails() {
    return `${super.printDetails()}, Enrollment ID: ${this.enrollmentId}`;
  }
}

class Teacher extends User {
  constructor(firstName, lastName, teacherId) {
    super(firstName, lastName);
    this.teacherId = teacherId;
  }

  printDetails() {
    return `${super.printDetails()}, Teacher ID: ${this.teacherId}`;
  }
}

class UserFactory {
  /**
   * Creates a user based on the specified type
   * @param {string} type - The type of user ('student' or 'teacher')
   * @param {string} firstName - User's first name
   * @param {string} lastName - User's last name
   * @param {string} id - Enrollment ID for students or Teacher ID for teachers
   * @returns {User} A new User instance
   * @throws {Error} If type is invalid or required parameters are missing
   */
  createUser(type, firstName, lastName, id) {
    // Validate input parameters
    if (!firstName || !lastName || !id) {
      throw new Error("Missing required parameters");
    }

    switch (type.toLowerCase()) {
      case "student":
        return new Student(firstName, lastName, id);
      case "teacher":
        return new Teacher(firstName, lastName, id);
      default:
        throw new Error("Invalid user type");
    }
  }
}

// Usage examples
try {
  const factory = new UserFactory();

  // Create a student
  const student = factory.createUser("student", "John", "Doe", "ST001");
  console.log(student.printDetails()); // John Doe, Enrollment ID: ST001

  // Create a teacher
  const teacher = factory.createUser("teacher", "Jane", "Smith", "TC001");
  console.log(teacher.printDetails()); // Jane Smith, Teacher ID: TC001

  // This will throw an error
  const invalidUser = factory.createUser("admin", "Invalid", "User", "AD001");
} catch (error) {
  console.error("Error:", error.message);
}
