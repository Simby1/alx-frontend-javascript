//building a teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

//extending the teacher interface for directors
interface Director extends Teacher {
  numberOfReports: number;
}

//printing teachers

function printTeacher(firstName: string, lastName: string): string {
  const firstLetter = firstName.charAt(0);
  return `${firstLetter}. ${lastName}`;
}



//writing a student class
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

