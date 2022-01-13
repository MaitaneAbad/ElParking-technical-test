const ResumenQuestion = (props) => {
  console.log(props);
  const resumenQuestion = props.questionAnswerPack.map((item, i) => {
    console.log(props);

    return (
      <li className='main__sectionQuestions--viewQuestion__list--item' key={i}>
        <p className='main__sectionQuestions--viewQuestion__list--item__question'>
          {item[0]}
        </p>
        <div className='main__sectionQuestions--viewQuestion__list--item__answer'>
          <div className='main__sectionQuestions--viewQuestion__list--item__answer--iconSection'>
            {item[2] === true ? (
              <i className=' main__sectionQuestions--viewQuestion__list--item__answer--iconSection__correct fas fa-check-circle'></i>
            ) : (
              <i className='main__sectionQuestions--viewQuestion__list--item__answer--iconSection__error fas fa-times-circle'></i>
            )}
            <p className='main__sectionQuestions--viewQuestion__list--item__answer--iconSection__answerClick'>
              {item[1]}
            </p>
          </div>
          {item[2] === false ? (
            <p className='main__sectionQuestions--viewQuestion__list--item__answer--correctAnswer'>
              Correct:
              <span className='main__sectionQuestions--viewQuestion__list--item__answer--correctAnswer__span'>
                {props.data[i].correctAnswer}{' '}
              </span>
            </p>
          ) : (
            ''
          )}
        </div>
      </li>
    );
  });
  console.log(props);
  return <>{resumenQuestion}</>;
};
export default ResumenQuestion;
