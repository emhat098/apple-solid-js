function Question(questions) {
  this.questions = questions;

  this.printReport = () => {
    console.log("Printer called");
    console.log("3th party printer function called");
  };

  this.saveDatabase = (questions) => {
    console.log({questions});
    console.log(`Saved to database`);
  };

  this.remove = (question) => {
    console.log("removed question " + question);
    this.questions = this.questions.filter(q => q !== question);
    this.saveDatabase(this.questions);
  }

  this.add = (question) => {
    console.log("added " + question);
    this.questions.push(question);
		this.saveDatabase(this.questions);
  }
}

const q = new Question([
  "Question 1",
  "Question 2",
  "Question 3",
  "Question 4"
]);

q.remove("Question 1");
q.printReport();
q.add("Question 5");
q.printReport();