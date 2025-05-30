import 'package:flutter/material.dart';
import 'dart:math';

void main() {
  runApp(TicTacToeApp());
}

class TicTacToeApp extends StatefulWidget {
  @override
  State<TicTacToeApp> createState() => _TicTacToeAppState();
}

class _TicTacToeAppState extends State<TicTacToeApp> {
  List<List<String>> matrix = List.generate(3, (_) => List.filled(3, ""));
  String status = "You are X\nTap a square to play";

  @override
  void initState() {
    super.initState();
    resetMatrix();
  }

  void resetMatrix() {
    setState(() {
      matrix = List.generate(3, (_) => List.filled(3, ""));
      status = "You are X\nTap a square to play";
    });
  }

  void play(int row, int col) {
    if (matrix[row][col] == "" && status != "You Win!" && status != "You Lose!") {
      setState(() {
        matrix[row][col] = "X";
      });

      if (checkWinner("X")) {
        setState(() => status = "You Win!");
        return;
      }

      makeMoveForO();
    }
  }

  void makeMoveForO() {
    List<Point<int>> emptyCells = [];

    for (int i = 0; i < 3; i++) {
      for (int j = 0; j < 3; j++) {
        if (matrix[i][j] == "") {
          emptyCells.add(Point(i, j));
        }
      }
    }

    if (emptyCells.isEmpty) return;

    Point<int> move = emptyCells[Random().nextInt(emptyCells.length)];
    setState(() => matrix[move.x][move.y] = "O");

    if (checkWinner("O")) {
      setState(() => status = "You Lose!");
    }
  }

  bool checkWinner(String player) {
    for (int i = 0; i < 3; i++) {
      if (matrix[i][0] == player && matrix[i][1] == player && matrix[i][2] == player) return true;
      if (matrix[0][i] == player && matrix[1][i] == player && matrix[2][i] == player) return true;
    }

    if (matrix[0][0] == player && matrix[1][1] == player && matrix[2][2] == player) return true;
    if (matrix[0][2] == player && matrix[1][1] == player && matrix[2][0] == player) return true;

    return false;
  }

  Widget buildCell(int i, int j, Color color) {
    return GestureDetector(
      onTap: () => play(i, j),
      child: Container(
        width: 120,
        height: 120,
        decoration: BoxDecoration(
          color: color,
          border: Border.all(color: Colors.black),
        ),
        alignment: Alignment.center,
        child: Text(
          matrix[i][j],
          style: TextStyle(fontSize: 48, fontWeight: FontWeight.bold),
        ),
      ),
    );
  }

  Widget buildRow(int rowIndex) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: List.generate(3, (colIndex) {
        Color color = (rowIndex + colIndex) % 2 == 0 ? Colors.grey[300]! : Colors.white;
        return buildCell(rowIndex, colIndex, color);
      }),
    );
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Tic Tac Toe",
      theme: ThemeData(primarySwatch: Colors.blue),
      home: Scaffold(
        appBar: AppBar(title: Text("Tic Tac Toe")),
        body: Column(
          children: [
            Container(
              height: 100,
              alignment: Alignment.center,
              padding: EdgeInsets.all(12),
              child: Text(
                status,
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 20),
              ),
            ),
            ...List.generate(3, (i) => buildRow(i)),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: resetMatrix,
              child: Text("Reset"),
            ),
          ],
        ),
      ),
    );
  }
}
