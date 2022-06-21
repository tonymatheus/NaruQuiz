const form = document.querySelector(".quiz-form");
const finalResult = document.querySelector(".result");

const correctAnswers = ["B", "C", "A", "A"];

const submitAnswers = (event) => {
  event.preventDefault();
  let score = 0;
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ];

  const compareAnswers = (answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  };

  const showTextUser = (value) => {
    finalResult.querySelector("span").textContent = `${value}%`;
    finalResult.classList.remove("d-none");
  };

  const showUserData = (answer, index) => {
    compareAnswers(answer, index);
    scrollTo(0, 0);
    showTextUser(score);

    let counter = 0;

    const animatedScoreCounter = () => {
      showTextUser(counter);
      if (counter === score) {
        clearInterval(timer);
      }
      counter++;
    };

    const timer = setInterval(animatedScoreCounter, 10);
  };
  userAnswers.forEach(showUserData);
};

form.addEventListener("submit", submitAnswers);
