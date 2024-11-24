class Student {
    constructor(name,age,grade = []){
        this.name = name
        this.age = age
        this.grade = grade
    }

    addGrade(...newgrade){
        this.grade.push(...newgrade)
    }

    getAverage(){
        let sum = 0;
        let ile = this.grade.length

        for (let i = 0; i < ile; i++) {
          sum = sum + this.grade[i];
        }
        
        return sum / ile;

    }
}

const student1 = new Student("Zbigniew", 83,[2,4,3])
const student2 = new Student("Anna",21,[6,5,6])

console.log(`${student1.name}, wiek: ${student1.age}, oceny: ${student1.grade}`);

student1.addGrade(1,1,5,2);

console.log(`${student1.name}, wiek: ${student1.age}, oceny: ${student1.grade}`);
console.log(`${student2.name}, wiek: ${student2.age}, oceny: ${student2.grade}`);

console.log(`Średnia ocen ${student1.name}: ${student1.getAverage()}`);
console.log(`Średnia ocen ${student2.name}: ${student2.getAverage()}`);

