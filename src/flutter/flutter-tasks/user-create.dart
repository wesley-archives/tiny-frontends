import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class UserCreatePage extends StatefulWidget {
  @override
  _UserCreatePageState createState() => _UserCreatePageState();
}

class _UserCreatePageState extends State<UserCreatePage> {
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
        title: Text("Create New Account"),
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
                    await auth.createUserWithEmailAndPassword(
                        email: txtemail.text, password: txtsenha.text);
                    Navigator.of(context).pushReplacementNamed('/user-login');
                  } catch (e) {
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(content: Text('Registration failed: $e')),
                    );
                  }
                },
                child: Text("Register"),
              ),
            ),
            Container(
              width: double.infinity,
              margin: EdgeInsets.all(48),
              child: ElevatedButton(
                onPressed: () {
                  Navigator.of(context).pushNamed('/user-login');
                },
                child: Text("Already have an account?"),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
