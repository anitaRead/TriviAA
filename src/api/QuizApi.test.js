import axios from 'axios';
import { fetchRandomQuestions } from './QuizApi';

jest.mock('axios');

const BASE_URL = 'https://opentdb.com/api.php';

describe('QuizApi', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('fetches random questions from API and decodes HTML entities', async () => {
    const mockedData = {
      data: {
        results: [
          {
            question: 'What is the capital of &auml;merica?',
            correct_answer: 'W&auml;shington &quot;D.C.&quot;',
            incorrect_answers: ['L&ouml;ndon', 'B&eacute;rlin', 'M&aacute;drid'],
          },
        ],
      },
    };

    axios.get.mockResolvedValueOnce(mockedData);

    const decodedResults = await fetchRandomQuestions();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}?amount=10&difficulty=easy&type=multiple`);
    expect(decodedResults).toEqual([
      {
        question: 'What is the capital of ämerica?',
        correct_answer: 'Wäshington "D.C."',
        incorrect_answers: ['Löndon', 'Bérlin', 'Mádrid'],
      },
    ]);
  });
});
