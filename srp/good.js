function printer(data) {
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
  }
}

const q = new Question([
  "Nguyễn Huệ và Quang Trung có phải cùng một người?",
  "Tại sao những trái cam lại có màu cam?",
  "Ai đã đặt tên cho dòng sông?",
  "Question 1"
]);

q.remove("Question 1");
q.printReport();
q.add("Question 2");
q.printReport();
