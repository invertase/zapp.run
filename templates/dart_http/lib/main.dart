import 'dart:convert' as convert;

import 'package:http/http.dart' as http;

void main(List<String> arguments) async {
  // This example will fetch a random quote from the
  // dummyjson.com service...
  final url = Uri.https(
    'dummyjson.com',
    '/quotes/random',
  );

  // You can hover your cursor over the .get() method to learn more about it, or,
  // right click it and select 'Go to Definition' to view the source.
  final response = await http.get(url);

  // ...and print the quote if the fetch was succesful.
  if (response.statusCode == 200) {
    final json = convert.jsonDecode(response.body);
    final quote = json['quote'];
    final author = json['author'];
    print('"$quote" - $author');
  } else {
    print('Request failed with code: ${response.statusCode}.');
  }
}