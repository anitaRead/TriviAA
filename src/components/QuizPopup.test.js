import { render, screen, fireEvent } from '@testing-library/react-native';
import QuizPopup from './QuizPopup';

describe('QuizPopup component', () => {
  const data = [
    {
      question: 'What is the capital of France?',
      correct_answer: 'Paris',
      incorrect_answers: ['London', 'Berlin', 'Madrid'],
    },
    {
      question: 'Which city is not in Italy?',
      correct_answer: 'Montevideo',
      incorrect_answers: ['Palermo', 'Rome', 'Lucca'],
    },
    {
      question: 'Which building is the tallest in the world?',
      correct_answer: 'Burj Khalifa',
      incorrect_answers: ['Shanghai Tower', 'London Eye', 'Eiffel Tower'],
    },
  ];

  test('renders with first question and all answers', () => {
    render(
      <QuizPopup
        visible
        data={data}
        currentQuestionIndex={0}
        score={0}
        onNextQuestion={jest.fn()}
        onAnswerSelection={jest.fn()}
        onClose={jest.fn()}
        quizCompleted={false}
      />
    );

    // Check first question is displayed
    const questionText = screen.getByText('What is the capital of France?');
    expect(questionText).toBeTruthy();
    expect(questionText.props.children).toBe(data[0].question);

    // Check answers are displayed
    const answers = [...data[0].incorrect_answers, data[0].correct_answer];
    answers.forEach((answer) => {
      const answerText = screen.getByText(answer);
      expect(answerText).toBeTruthy();
    });
  });

  test('renders with second question and all answers', async () => {
    render(
      <QuizPopup
        visible
        data={data}
        currentQuestionIndex={1}
        score={1}
        onNextQuestion={jest.fn()}
        onAnswerSelection={jest.fn()}
        onClose={jest.fn()}
        quizCompleted={false}
      />
    );

    // Check second question is displayed
    const questionText = screen.getByText('Which city is not in Italy?');
    expect(questionText).toBeTruthy();
    expect(questionText.props.children).toBe(data[1].question);

    // Check answers are displayed
    const answers = [...data[1].incorrect_answers, data[1].correct_answer];
    answers.forEach((answer) => {
      const answerText = screen.getByText(answer);
      expect(answerText).toBeTruthy();
    });
  });

  test('calls onNextQuestion when "Next Question" button is pressed', async () => {
    const onNextQuestionMock = jest.fn();
    render(
      <QuizPopup
        visible
        data={data}
        currentQuestionIndex={2}
        score={1}
        onNextQuestion={onNextQuestionMock}
        onAnswerSelection={jest.fn()}
        onClose={jest.fn()}
        quizCompleted={false}
      />
    );

    // Check Next Question button is not visible
    const nextButton = screen.queryByLabelText('Next Question');
    expect(nextButton).toBeNull();

    // Select an answer to enable the Next Question button
    fireEvent.press(screen.getByLabelText(data[2].incorrect_answers[0]));

    // Check Next Question button is visible
    expect(screen.queryByLabelText('Next Question')).toBeDefined();

    // Press the Next Question button
    fireEvent.press(screen.queryByLabelText('Next Question'));

    // Check onNextQuestion was called
    expect(onNextQuestionMock).toHaveBeenCalledTimes(1);
  });

  test('calls onClose when "Close Quiz Popup" button is pressed', () => {
    const onCloseMock = jest.fn();
    render(
      <QuizPopup
        visible
        data={data}
        currentQuestionIndex={2}
        score={0}
        onNextQuestion={jest.fn()}
        onAnswerSelection={jest.fn()}
        onClose={onCloseMock}
        quizCompleted={false}
      />
    );

    const closeButton = screen.getByLabelText('Close Quiz Popup');
    fireEvent.press(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test('displays final score when quiz is completed', () => {
    render(
      <QuizPopup
        visible
        data={data}
        currentQuestionIndex={0}
        score={3}
        onNextQuestion={jest.fn()}
        onAnswerSelection={jest.fn()}
        onClose={jest.fn()}
        quizCompleted
      />
    );

    const finalScoreText = screen.getByText('Final Score:');
    const scoreText = screen.getByText('3 / 3');

    expect(finalScoreText).toBeTruthy();
    expect(scoreText).toBeTruthy();
  });
});
