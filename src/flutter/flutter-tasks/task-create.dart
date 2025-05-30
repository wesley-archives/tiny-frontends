import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class TaskCreatePage extends StatelessWidget {
  FirebaseFirestore firestore = FirebaseFirestore.instance;
  final TextEditingController txtName = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("New Task"),
      ),
      body: Container(
        margin: EdgeInsets.all(10),
        child: Column(
          children: [
            TextField(
              controller: txtName,
              decoration: InputDecoration(
                hintText: "Enter the task you need to do...",
              ),
              keyboardType: TextInputType.text,
            ),
            Container(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: () async {
                  await firestore
                      .collection('tasks')
                      .add({'name': txtName.text, 'finished': false});
                  Navigator.of(context).pop();
                },
                child: Text("Add Task"),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
