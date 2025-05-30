import 'package:flutter/material.dart';
import 'dart:math';

void main() {
  runApp(GameApp());
}

class GameApp extends StatefulWidget {
  @override
  State<GameApp> createState() => _GameAppState();
}

class _GameAppState extends State<GameApp> {
  final TextStyle mainStyle = const TextStyle(
    color: Colors.white,
    fontSize: 32,
  );
  final TextStyle statusStyle = const TextStyle(
    color: Colors.white,
    fontSize: 16,
  );

  String statusText = 'Select Even or Odd to play';

  void play(String choice) {
    int number = Random().nextInt(100);
    bool isEven = number % 2 == 0;

    setState(() {
      if ((isEven && choice == 'even') || (!isEven && choice == 'odd')) {
        statusText = '$number. You Win!';
      } else {
        statusText = '$number. You Lose!';
      }
    });
  }

  Widget buildOptionButton(String label, Color color, String value) {
    return Expanded(
      child: GestureDetector(
        onTap: () => play(value),
        child: Container(
          color: color,
          width: double.infinity,
          margin: const EdgeInsets.fromLTRB(10, 10, 10, 0),
          child: Center(
            child: Text(label, style: mainStyle),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Even or Odd Game",
      home: Scaffold(
        body: Column(
          children: [
            Container(
              color: Colors.brown,
              width: double.infinity,
              height: 48,
              child: Center(
                child: Text(statusText, style: statusStyle),
              ),
            ),
            buildOptionButton('Even', Colors.red, 'even'),
            buildOptionButton('Odd', Colors.blue, 'odd'),
          ],
        ),
      ),
    );
  }
}
