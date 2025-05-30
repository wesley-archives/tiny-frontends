// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors

import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';

const firebaseOptions = FirebaseOptions(
  apiKey: "YOUR_API_KEY",
  appId: "YOUR_APP_ID",
  messagingSenderId: "YOUR_SENDER_ID",
  projectId: "YOUR_PROJECT_ID",
); // Replace with your Firebase credentials

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(options: firebaseOptions);
  runApp(QuestionsApp());
}

class QuestionsApp extends StatelessWidget {
  final FirebaseAuth auth = FirebaseAuth.instance;

  @override
  Widget build(BuildContext context) {
    if (auth.currentUser == null) {
      auth.signInAnonymously();
    }

    return MaterialApp(
      theme: ThemeData.light(),
      debugShowCheckedModeBanner: false,
      home: QuestionPage(),
    );
  }
}

class QuestionPage extends StatelessWidget {
  final FirebaseFirestore firestore = FirebaseFirestore.instance;
  final FirebaseAuth auth = FirebaseAuth.instance;
  final questionController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: const [
            Text("Q&A"),
            Text("CODE: CODE123")
          ],
        ),
      ),
      body: Container(
        margin: EdgeInsets.all(10),
        child: StreamBuilder<QuerySnapshot<Map<String, dynamic>>>(
          stream: firestore
              .collection('questions')
              .orderBy('likesCount', descending: true)
              .orderBy('date', descending: false)
              .snapshots(),
          builder: (_, snapshot) {
            if (!snapshot.hasData) {
              return Center(child: CircularProgressIndicator());
            }

            List<Widget> items = [];

            items.add(
              Card(
                child: Container(
                  margin: EdgeInsets.all(10),
                  child: Column(
                    children: [
                      TextField(
                        controller: questionController,
                        maxLines: 8,
                        minLines: 4,
                        decoration: InputDecoration(
                          hintText: "Ask your question...",
                          border: InputBorder.none,
                        ),
                        autofocus: true,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            "Posting as anonymous",
                            style: TextStyle(fontSize: 12, color: Colors.grey),
                          ),
                          ElevatedButton(
                            onPressed: () async {
                              final questionText = questionController.text.trim();
                              if (questionText.isNotEmpty) {
                                await firestore.collection('questions').add({
                                  'question': questionText,
                                  'uid': auth.currentUser!.uid,
                                  'likes': [],
                                  'likesCount': 0,
                                  'date': DateTime.now(),
                                });
                                questionController.clear();
                              }
                            },
                            child: Text("Submit"),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            );

            items.add(SizedBox(height: 10));

            var docs = snapshot.data!.docs;

            items.addAll(docs.map((doc) {
              return Card(
                child: ListTile(
                  contentPadding: EdgeInsets.fromLTRB(16, 4, 16, 10),
                  leading: CircleAvatar(child: Text("A")),
                  title: Text("Anonymous"),
                  subtitle: Text(doc['question']),
                  trailing: SizedBox(
                    width: 60,
                    child: Row(
                      children: [
                        IconButton(
                          icon: Icon(Icons.thumb_up),
                          onPressed: () async {
                            final uid = auth.currentUser!.uid;
                            final alreadyLiked =
                                (doc['likes'] as List).contains(uid);

                            if (!alreadyLiked) {
                              await doc.reference.update({
                                'likes': FieldValue.arrayUnion([uid]),
                              });

                              final updatedDoc = await doc.reference.get();

                              await doc.reference.update({
                                'likesCount': updatedDoc['likes'].length,
                              });
                            }
                          },
                        ),
                        Text(doc['likes'].length.toString()),
                      ],
                    ),
                  ),
                ),
              );
            }).toList());

            return ListView(children: items);
          },
        ),
      ),
    );
  }
}
