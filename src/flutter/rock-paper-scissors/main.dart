import 'package:flutter/material.dart';
import 'dart:math';

void main() {
  runApp(App());
}

enum Move { Rock, Paper, Scissors }

class App extends StatefulWidget {
  @override
  State<App> createState() => _AppState();
}

class _AppState extends State<App> {
  final textStyle = const TextStyle(
    color: Colors.white,
    fontSize: 32,
  );

  final titleStyle = const TextStyle(
    color: Colors.white,
    fontSize: 24,
  );

  String statusMessage = 'Tap on an option to play';
  Move? computerMove;

  void play(Move playerMove) {
    final randomIndex = Random().nextInt(3);
    computerMove = Move.values[randomIndex];

    String result;
    if (playerMove == computerMove) {
      result = 'It\'s a draw!';
    } else if (_winsAgainst(playerMove, computerMove!)) {
      result = 'You win!';
    } else {
      result = 'You lose!';
    }

    setState(() {
      statusMessage = '${_moveToString(computerMove!)}. $result';
    });
  }

  bool _winsAgainst(Move a, Move b) {
    return (a == Move.Rock && b == Move.Scissors) ||
        (a == Move.Paper && b == Move.Rock) ||
        (a == Move.Scissors && b == Move.Paper);
  }

  String _moveToString(Move move) {
    switch (move) {
      case Move.Rock:
        return 'Rock';
      case Move.Paper:
        return 'Paper';
      case Move.Scissors:
        return 'Scissors';
    }
  }

  Widget _buildOption(Move move, Color color) {
    return Expanded(
      child: GestureDetector(
        onTap: () => play(move),
        child: Container(
          color: color,
          width: double.infinity,
          margin: const EdgeInsets.fromLTRB(10, 10, 10, 0),
          child: Center(
            child: Text(_moveToString(move), style: textStyle),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Column(
          children: [
            Container(
              color: Colors.blue,
              width: double.infinity,
              height: 64,
              child: Center(
                child: Text(statusMessage, style: titleStyle),
              ),
            ),
            _buildOption(Move.Rock, Colors.red),
            _buildOption(Move.Paper, Colors.amber),
            _buildOption(Move.Scissors, Colors.green),
          ],
        ),
      ),
    );
  }
}
