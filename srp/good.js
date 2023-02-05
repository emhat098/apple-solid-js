function printer(data) {
	console.log("3th party function called");
  log(`[${new Date().toLocaleString()}]--------------------------------`);
  log(data, "info");
}

function log(message, type = "log") {
  console?.[type](message);
}

function saveDatabase(data) {
  log({data}, "info");
  log(`Saved data to database`, "info");
}

function Question(questions) {
  this.questions = questions;

  this.printReport = () => {
    printer(this.questions);
  };

  this.remove = (question) => {
    log("removed question " + question);
    this.questions = this.questions.filter(q => q !== question);
    saveDatabase(this.questions);
  }

  this.add = (question) => {
    log("added " + question);
    this.questions.push(question);
		saveDatabase(this.questions);
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