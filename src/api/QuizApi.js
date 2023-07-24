import axios from 'axios';

const BASE_URL = 'https://opentdb.com/api.php';

// Function to fetch 10 random questions
export const fetchRandomQuestions = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}?amount=10&difficulty=easy&type=multiple`);
    return data.results;
  } catch (error) {
    console.error('Error fetching random questions', error);
    return [];
  }
};

// Function to fetch 10 questions about video games
export const fetchVideoGameQuestions = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}?amount=10&category=15&difficulty=easy&type=multiple`
    );
    return data.results;
  } catch (error) {
    console.error('Error fetching video game questions', error);
    return [];
  }
};

// Function to fetch 10 questions about movies
export const fetchMovieQuestions = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}?amount=10&category=11&difficulty=easy&type=multiple`
    );
    return data.results;
  } catch (error) {
    console.error('Error fetching movie questions', error);
    return [];
  }
};

// Function to fetch 10 questions about history
export const fetchHistoryQuestions = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}?amount=10&category=23&difficulty=easy&type=multiple`
    );
    return data.results;
  } catch (error) {
    console.error('Error fetching history questions', error);
    return [];
  }
};

// Function to fetch 10 questions about geography
export const fetchGeographyQuestions = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}?amount=10&category=22&difficulty=easy&type=multiple`
    );
    return data.results;
  } catch (error) {
    console.error('Error fetching geography questions', error);
    return [];
  }
};

// Function to fetch 10 questions about board games
export const fetchBoardGameQuestions = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}?amount=10&category=16&difficulty=easy&type=multiple`
    );
    return data.results;
  } catch (error) {
    console.error('Error fetching board game questions', error);
    return [];
  }
};

// Function to fetch 10 questions about science
export const fetchScienceQuestions = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}?amount=10&category=17&difficulty=easy&type=multiple`
    );
    return data.results;
  } catch (error) {
    console.error('Error fetching science questions', error);
    return [];
  }
};

// Function to fetch 10 questions about animals
export const fetchAnimalQuestions = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}?amount=10&category=27&difficulty=easy&type=multiple`
    );
    return data.results;
  } catch (error) {
    console.error('Error fetching animals questions', error);
    return [];
  }
};

// Function to fetch 10 questions about celebrities
export const fetchCelebrityQuestions = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}?amount=10&category=26&difficulty=easy&type=multiple`
    );
    return data.results;
  } catch (error) {
    console.error('Error fetching celebrity questions', error);
    return [];
  }
};
