function Question(questions) {
  this.questions = questions;

  this.printReport = () => {
    console.log("Printer called");
    this.questions.forEach((value, index) => {
      console.log(value);
    })
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
}

const q = new Question([
  "Nguyễn Huệ và Quang Trung có phải cùng một người?",
  "Tại sao những trái cam lại có màu cam?",
  "Ai đã đặt tên cho dòng sông?",
  "Question 1"
]);

console.log(q.questions);
q.remove("Question 1");
console.log(q.questions);
