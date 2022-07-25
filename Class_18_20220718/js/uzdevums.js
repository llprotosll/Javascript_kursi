const human = {
    Name: "Peter",
    Surname: "Parker",
    age: 99,
  };
  
  
  function greet() {
    const string = `Hello. My name is ${this.Name} ${this.Surname}. I am ${this.age} years old.`;
    console.log(string);
  }

  greet.call(human);

  // object definition
const student_a = {
    name: "Arnold",
    age: "16",
    introduction: function () {
      console.log(`${this.name} is ${this.age} years old.`);
    },
  };
  
  // object definition
  const student_b = {
    name: "Ralph ",
    age: "15",
  };
  
  // the object student2 is borrowing introduction method from student1
  let result= student_a.introduction.bind(student_b);
  
  // invoking introduction() function
  result();
  