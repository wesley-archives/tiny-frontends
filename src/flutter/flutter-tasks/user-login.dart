import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class UserLoginPage extends StatefulWidget {
  @override
  _UserLoginPageState createState() => _UserLoginPageState();
}

class _UserLoginPageState extends State<UserLoginPage> {
  FirebaseAuth auth = FirebaseAuth.instance;
  final TextEditingController txtemail = TextEditingController();
  final TextEditingController txtsenha = TextEditingController();

  @override
  void dispose() {
    txtemail.dispose();
    txtsenha.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Login"),
      ),
      body: Container(
        margin: EdgeInsets.all(10),
        child: Column(
          children: [
            TextField(
              controller: txtemail,
              decoration: InputDecoration(
                labelText: "Email",
              ),
            ),
            TextField(
              controller: txtsenha,
              decoration: InputDecoration(
                labelText: "Password",
              ),
              obscureText: true,
            ),
            Container(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: () async {
                  try {
                    await auth.signInWithEmailAndPassword(
                        email: txtemail.text, password: txtsenha.text);
                    Navigator.of(context).pushReplacementNamed('/task-list');
                  } catch (e) {
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(content: Text('Login failed: $e')),
                    );
                  }
                },
                child: Text("Log In"),
              ),
            ),
            Container(
              width: double.infinity,
              margin: EdgeInsets.all(48),
              child: ElevatedButton(
                onPressed: () {
                  Navigator.of(context).pushNamed('/user-create');
                },
                child: Text("Don’t have an account?"),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
