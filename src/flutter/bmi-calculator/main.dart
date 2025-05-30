import 'package:flutter/material.dart';

void main() {
  runApp(BmiApp());
}

class BmiApp extends StatefulWidget {
  @override
  State<BmiApp> createState() => _BmiAppState();
}

class _BmiAppState extends State<BmiApp> {
  final weightController = TextEditingController();
  final heightController = TextEditingController();

  String? message;
  double? bmi;

  void calculateBmi() {
    final weight = double.tryParse(weightController.text);
    final height = double.tryParse(heightController.text);

    if (weight == null || height == null || height == 0) {
      setState(() {
        message = "Please enter valid weight and height.";
        bmi = null;
      });
      return;
    }

    final result = weight / (height * height);

    setState(() {
      bmi = result;

      if (bmi! < 18.5) {
        message = 'Underweight';
      } else if (bmi! < 24.9) {
        message = 'Normal weight';
      } else if (bmi! < 29.9) {
        message = 'Overweight';
      } else if (bmi! < 39.9) {
        message = 'Obesity Class I';
      } else {
        message = 'Obesity Class II';
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "BMI Calculator",
      theme: ThemeData(primarySwatch: Colors.blue),
      home: Scaffold(
        appBar: AppBar(title: Text("BMI Calculator")),
        body: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            children: [
              TextField(
                controller: weightController,
                decoration: const InputDecoration(labelText: "Weight (kg)"),
                keyboardType: TextInputType.number,
              ),
              TextField(
                controller: heightController,
                decoration: const InputDecoration(labelText: "Height (m)"),
                keyboardType: TextInputType.number,
              ),
              const SizedBox(height: 20),
              ElevatedButton(
                onPressed: calculateBmi,
                child: const Text("Calculate"),
              ),
              const SizedBox(height: 20),
              if (bmi != null)
                Text(
                  "Your BMI is ${bmi!.toStringAsFixed(1)}",
                  style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
                ),
              if (message != null)
                Text(
                  message!,
                  style: const TextStyle(fontSize: 20),
                ),
            ],
          ),
        ),
      ),
    );
  }
}
