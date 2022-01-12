const callToApi = () => {
  return fetch('http://opentdb.com/api.php?amount=10&category=19&type=multiple')
    .then((response) => response.json())
    .then((response) => {
      const data = response.results.map((data) => {
        return {
          questions: data.question,
          correctAnswer: data.correct_answer,
          incorrectAnswers: data.incorrect_answers,
        };
      });
      return data;
    })
    .catch((error) => {
      console.error(error);
      alert(
        'Hubo un error en la página, vuelve a cargar la página y si no espera unos minutos.'
      );
    });
};
export default callToApi;
