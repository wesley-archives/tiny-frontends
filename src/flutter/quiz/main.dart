import 'package:flutter/material.dart';

void main() {
  runApp(QuizApp());
}

class QuizApp extends StatefulWidget {
  @override
  State<QuizApp> createState() => _QuizAppState();
}

class _QuizAppState extends State<QuizApp> {
  String status = "Tap to play";
  List<Color> answerColors = List.filled(4, Colors.white);
  int questionIndex = 0;

  final List<String> questions = [
    "What is 5 + 5?",
    "What is 14 + 7?",
    "What is 20 + 11?",
    "What is 22 + 2?",
    "What is 1 + 11?",
  ];

  final List<List<String>> answers = [
    ["10", "6", "4", "3"],
    ["53", "21", "42", "43"],
    ["2", "26", "31", "7"],
    ["13", "46", "24", "13"],
    ["56", "12", "34", "12"]
  ];

  final List<int> correctAnswers = [10, 21, 31, 24, 12];

  void checkAnswer(int index) {
    int selectedValue = int.tryParse(answers[questionIndex][index]) ?? -1;

    setState(() {
      if (selectedValue == correctAnswers[questionIndex]) {
        status = "Correct!";
        answerColors[index] = Colors.green;
      } else {
        status = "Incorrect!";
        answerColors[index] = Colors.red;
      }
    });

    Future.delayed(const Duration(seconds: 1), nextQuestion);
  }

  void nextQuestion() {
    setState(() {
      if (questionIndex < questions.length - 1) {
        questionIndex++;
        status = "Tap to play";
        answerColors = List.filled(4, Colors.white);
      } else {
        status = "Quiz finished!";
      }
    });
  }

  Widget buildAnswerButton(int index) {
    return GestureDetector(
      onTap: () => checkAnswer(index),
      child: Container(
        width: double.infinity,
        height: 48,
        margin: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
        color: answerColors[index],
        alignment: Alignment.center,
        child: Text(
          answers[questionIndex][index],
          style: const TextStyle(fontSize: 20),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Quiz Game",
      theme: ThemeData(primarySwatch: Colors.blue),
      home: Scaffold(
        appBar: AppBar(title: const Text("Quiz")),
        body: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Container(
              margin: const EdgeInsets.all(20),
              height: 48,
              child: Text(
                questions[questionIndex],
                style: const TextStyle(fontSize: 24),
              ),
            ),
            ...List.generate(4, (index) => buildAnswerButton(index)),
            Container(
              margin: const EdgeInsets.only(top: 20),
              alignment: Alignment.center,
              child: Text(
                status,
                style: const TextStyle(fontSize: 18),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
