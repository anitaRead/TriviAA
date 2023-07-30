import { useState, useEffect } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

import { Colors, Fonts } from '../styles';

const QuizPopup = ({
  visible,
  data,
  currentQuestionIndex,
  score,
  onNextQuestion,
  onAnswerSelection,
  onClose,
  quizCompleted,
}) => {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const currentQuestion = data[currentQuestionIndex];
    setQuestion(currentQuestion.question);

    const currentAnswers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
    const shuffledAnswers = shuffleAnswers(currentAnswers);
    setAnswers(shuffledAnswers);
  }, [currentQuestionIndex, data]);

  const shuffleAnswers = (answersList) => {
    const shuffledAnswers = [...answersList];
    for (let i = 0; i < answersList.length; i += 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
    }
    return shuffledAnswers;
  };

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    onAnswerSelection(selectedAnswer);
    setSelectedAnswer(null);
    onNextQuestion();
  };

  return (
    <Modal visible={visible} transparent>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
            accessibilityLabel="Close Quiz Popup"
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          {quizCompleted ? (
            <View style={styles.resultContainer}>
              <Text style={styles.scoreText}>Final Score:</Text>
              <Text style={styles.scoreText}>
                {score} / {data.length}
              </Text>
            </View>
          ) : (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <Text style={[Fonts.subHeading, styles.questionText]} accessibilityLabel={question}>
                {question}
              </Text>
              <View style={styles.answersContainer}>
                {answers.map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={[
                      styles.answerButton,
                      selectedAnswer === option && styles.selectedAnswerButton,
                    ]}
                    onPress={() => handleAnswerSelection(option)}
                    accessibilityLabel={option}
                  >
                    <Text style={Fonts.body}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              {selectedAnswer !== null && (
                <TouchableOpacity
                  style={styles.nextButton}
                  onPress={handleNextQuestion}
                  accessibilityLabel="Next Question"
                >
                  <Feather name="chevrons-right" size={30} color="black" />
                </TouchableOpacity>
              )}
            </ScrollView>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: Colors.background,
    borderRadius: 10,
    padding: 20,
    width: '80%',
    minHeight: '50%',
    justifyContent: 'flex-start',
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 15,
  },
  questionText: {
    marginBottom: 10,
    textAlign: 'center',
  },
  answersContainer: {
    marginTop: 10,
  },
  answerButton: {
    backgroundColor: Colors.background,
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  selectedAnswerButton: {
    backgroundColor: Colors.primary,
  },
  nextButton: {
    alignSelf: 'flex-end',
    color: Colors.secondary,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  resultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default QuizPopup;
