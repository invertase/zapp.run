Future<void> main() async {
  for (var i = 0; i < 5; i++) {
    print('Hello from Dart ($i)!');
    await Future.delayed(Duration(milliseconds: 500));
  }
}
