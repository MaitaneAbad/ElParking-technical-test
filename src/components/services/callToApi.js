const callToApi = () => {
  return fetch('http://opentdb.com/api.php?amount=10&category=19&type=multiple')
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      const data = response.results.map((data) => {
        return {
          names: data.question,
          correctAnswer: data.correct_answer,
        };
      });
      console.log(data);
      return data;
    });
};
export default callToApi;
