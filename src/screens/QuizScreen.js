import { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Fonts } from '../styles';
import Card from '../components/Card';
import {
  fetchRandomQuestions,
  fetchVideoGameQuestions,
  fetchMovieQuestions,
  fetchHistoryQuestions,
  fetchGeographyQuestions,
  fetchScienceQuestions,
  fetchBoardGameQuestions,
  fetchCelebrityQuestions,
  fetchAnimalQuestions,
} from '../api/QuizApi';
import QuizPopup from '../components/QuizPopup';

const QuizScreen = () => {
  const [quizOptions, setQuizOptions] = useState([
    { key: 'random', title: 'Random', fetchData: fetchRandomQuestions },
    { key: 'video-games', title: 'Video Games', fetchData: fetchVideoGameQuestions },
    { key: 'movies', title: 'Movies', fetchData: fetchMovieQuestions },
    { key: 'celebrities', title: 'Celebrities', fetchData: fetchCelebrityQuestions },
    { key: 'history', title: 'History', fetchData: fetchHistoryQuestions },
    { key: 'geography', title: 'Geography', fetchData: fetchGeographyQuestions },
    { key: 'board-games', title: 'Board Games', fetchData: fetchBoardGameQuestions },
    { key: 'animals', title: 'Animals', fetchData: fetchAnimalQuestions },
    { key: 'science', title: 'Science', fetchData: fetchScienceQuestions },
  ]);

  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizData, setQuizData] = useState([]);
  const [showQuizPopup, setShowQuizPopup] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const startQuiz = (quizOption) => {
    setSelectedQuiz(quizOption);
    quizOption
      .fetchData()
      .then((data) => {
        setQuizData(data);
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizCompleted(false);
        setShowQuizPopup(true);
      })
      .catch((error) => {
        console.error('Error fetching quiz questions:', error);
      });
  };

  const handleAnswerSelection = (selectedAnswer) => {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct_answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleCloseQuiz = () => {
    setShowQuizPopup(false);
  };

  return (
    <View style={styles.container}>
      <Text style={[Fonts.heading, { marginTop: 15 }]}>Quiz topics</Text>
      <FlatList
        data={quizOptions}
        style={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => startQuiz(item)}
            accessibilityLabel={`Start ${item.title} Quiz`}
            accessibilityRole="button"
          >
            <View>
              <Card body={item.title} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />

      {showQuizPopup && (
        <QuizPopup
          data={quizData}
          currentQuestionIndex={currentQuestionIndex}
          score={score}
          onAnswerSelection={handleAnswerSelection}
          onNextQuestion={handleNextQuestion}
          onClose={handleCloseQuiz}
          quizCompleted={quizCompleted}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  listContainer: {
    marginTop: 10,
    marginBottom: 35,
  },
});

export default QuizScreen;
