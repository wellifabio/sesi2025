# Aula04 - DART
- Site oficial https://dart.dev/

## Demonstração
- Utilizando o VsCode instale a extensão **Dart**
- Crie uma pasta e abra com o **VsCode**
- Início, crie um arquivo chamado main.dart com o seguinte conteúdo
```dart
main() {
  print('Alô mundo!');
}
```
### Vamos estudar os tipos de variáveis
```dart
void main() {
  int codigo = 1;
  double preco = 3.14;
  String produto = 'Lapis';
  bool ativo = true;
  var naotipada;
  dynamic dinamica = 1;
  
  print(codigo);
  print(preco);
  print(produto);
  print(ativo);
  print(naotipada);
  print(dinamica);
  
  naotipada = 'Oi';
  print(naotipada);
  dinamica = 'Oi';
  print(dinamica);
}
```
### Vamos estudar Strings
```dart
void main() {
  int codigo = 1;
  double preco = 3.14;
  String produto = 'Lapis';
  bool ativo = true;
  var naotipada;
  dynamic dinamica = 1;
  
  //Concatenando string nas saídas
  print('Código = ' + codigo.toString());
  print('Preco = R\$' + preco.toString());
  print('Produto = '+produto);
  print('Ativo = ' + ativo.toString());
  print('Informação ainda não determinada = ' + naotipada.toString());
  print('informação dinâmia = ' + dinamica.toString());
  
  naotipada = 'Oi';
  //Concatenando de forma simples com o sinal de mais
  print('informação definida = ' + naotipada.toString());
  dinamica = 'Oi';
  //Concatenando a string de saída com template string
  print('informação dinâmia = ${dinamica}');
}
```
### Vamos estudar **Funções**
- Crie uma função que receba um número inteiro e retorne se é 'Par' ou 'Impar'
```dart
main() {
  String result = numero(15);
  print(result);
}

numero(int n) {
  if (n % 2 == 0)
    return 'Par';
  else
    return 'Impar';
}
```
- Crie uma função que receba dois números, divida o primeiro pelo segundo, retorne somente a parte inteira do resultado, valide se o segundo número não é 0.
```dart
main() {
  int result = divisao(15,2);
  print(result);
}

divisao(int a, int b) {
  if(b==0){
    print('Não é possível dividir por 0')
    return 0;
  }
  return a ~/ b
}
```
- A mesma função retornando nulo ao invez de zero quando tentamos dividir por 0
```dart
main() {
  int? result = divisao(15,0);
  print(result);
}

divisao(int a, int b) {
  if(b==0){
    print('É proibido dividir por 0')
    return null;
  }
  return a ~/ b
}
```
### Importações e entrada de dados pelo teclado
- O principal uso do dart é para programação Web então a interação direta com teclado e saída no console é apenas para testes.
- Para receber dados do telcado precisamos importar a biblioteca 'dart:io'
- O programa a seguir importa duas bibliotecas uma para entradas e saídas e outra para operações matemáticas avançadas como potências:
```dart
import 'dart:io';
import 'dart:math';

main() {
  print("Digite o primeiro número: ");
  String? num1 = stdin.readLineSync();
  print("Digite o segundo número: ");
  String? num2 = stdin.readLineSync();
  if (num1 != null && num2 != null) {
    int n1 = int.parse(num1);
    int n2 = int.parse(num2);
    print("${n1} elevado a ${n2} é: ${pow(n1, n2)}");
  } else {
    print("Os números digitados não são válidos");
  }
}
```
- **OBS**: para executar via VsCode não utilize o botão play, mas sim abra um terminal e digite:
```bash
dart main.dart
```

### Listas
- Listas numéricas e ordenação
```dart
void main() {
  List<int> numbers = [1, 8, 3, 2, 5];
  numbers.sort();
  print(numbers);
  numbers.sort((a, b) => b - a);
  print(numbers);
}
```
- Relembrando ordenação com booble sort
```dart
void main() {
  List<int> numbers = [1, 8, 3, 2, 5];
  //Ordenar com booble sort
  for (int i = 0; i < numbers.length; i++) {
    for (int j = 0; j < numbers.length - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        int temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  print(numbers);
}
```
- Lista de Strings e manipulação
```dart
void main() {
  List<String> nomes = ['Daniel', 'Maria', 'João', 'Ana'];
  print(nomes);
  nomes.add('Pedro');
  print(nomes);
  nomes.removeAt(2);
  print(nomes);
  nomes.insert(1, 'João');
  print(nomes);
  nomes.remove('Maria');
  print(nomes);
  nomes.removeLast();
  print(nomes);
  nomes.removeRange(0, 2);
  print(nomes);
  nomes.clear();
  print(nomes);
}
```

## Atividades
- 1 Crie um programa que calcule a porcentagem de votos de candidatos:
  - Deve possuir um menú com opções de adicionar, excluir, mostrar porcentagem e sair.
  - Ao adicionar um candidato deve pedir o nome e a quantidade de votos
  - Ao mostrar a lista exiba na tela o nome dos candidatos, total e a porcentagem de votos de cada um.
  - Exemplo de saída:
```cmd
dart candidatos.dart
1 - Adicionar candidato
2 - Excluir candidato
3 - Mostrar porcentagem de votos
4 - Sair
1
Digite o nome do candidato:
Lula
1 - Adicionar candidato
2 - Excluir candidato
3 - Mostrar porcentagem de votos
4 - Sair
1
Digite o nome do candidato:
Lula
2 - Excluir candidato
3 - Mostrar porcentagem de votos
4 - Sair
1
Digite o nome do candidato:
Lula
3 - Mostrar porcentagem de votos
4 - Sair
1
Digite o nome do candidato:
Lula
1
Digite o nome do candidato:
Lula
Lula
Digite a quantidade de votos:
100
Digite a quantidade de votos:
100
1 - Adicionar candidato
2 - Excluir candidato
3 - Mostrar porcentagem de votos
3 - Mostrar porcentagem de votos
4 - Sair
1
1
Digite o nome do candidato:
Digite o nome do candidato:
Jair
Digite a quantidade de votos:
50
1 - Adicionar candidato
2 - Excluir candidato
3 - Mostrar porcentagem de votos
4 - Sair
1
Digite o nome do candidato:
Jurema
Digite a quantidade de votos:
75
1 - Adicionar candidato
2 - Excluir candidato
3 - Mostrar porcentagem de votos
4 - Sair
3
Candidatos      Votos   Porcentagem
Lula    100     44.44%
Jair    50      22.22%
Jurema  75      33.33%
1 - Adicionar candidato
2 - Excluir candidato
3 - Mostrar porcentagem de votos
4 - Sair
```
- 2 Crie um programa com funcionalidades semelhantes a acima, porém que liste e classifique pacientes aptos ou não aptos a tomar a vacina contra a dengue.
  - Como entrada deve receber o nome do paciente, idade e sexo:
  - Estão aptos homens entre 14 e 50 anos e mulheres entre 20 e 40 anos de idade.