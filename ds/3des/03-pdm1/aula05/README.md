# Aula05 - Dart
## Classes e Objetos
Exemplo de um programa com classes e objetos
- Atributos
- Métodos de entrada e saída
- Métodos lógicos para regras de negócio
```dart
class Funcionario {
  //Atributos
  int id = 0;
  String nome = '';
  double salario = 0.0;
  int? dependentes;

  //Métodos
  //Construtor - Entrada de dados
  Funcionario(this.id, this.nome, this.salario, [this.dependentes]);

  //Método de lógica - calcular o salário família
  double salFamilia() {
    return dependentes != null
        ? salario < 2000
            ? dependentes! * 60.0
            : 0.0
        : 0.0;
  }

  //Método toJSON - Saída de dados
  String toJSON() {
    return '{ "id": $id, "nome": "$nome", "salario": $salario, "salFamilia": ${salFamilia()} }';
  }
}

void main() {
  Funcionario f1 = new Funcionario(1, 'Arnaldo', 1850.0, 1);
  Funcionario f2 = new Funcionario(2, 'Juliana', 2850.0, 1);
  Funcionario f3 = new Funcionario(3, 'Hemanoteu', 1650.0);
  Funcionario f4 = new Funcionario(4, 'Zebedeu', 1950.0, 3);
  print(f1.toJSON());
  print(f2.toJSON());
  print(f3.toJSON());
  print(f4.toJSON());
}
```
- O mesmo programa agora com lista
```dart
class Funcionario {
  //Atributos
  int id = 0;
  String nome = '';
  double salario = 0.0;
  int? dependentes;

  //Métodos
  //Construtor - Entrada de dados
  Funcionario(this.id, this.nome, this.salario, [this.dependentes]);

  //Método de lógica - calcular o salário família
  double salFamilia() {
    return dependentes != null
        ? salario < 2000
            ? dependentes! * 60.0
            : 0.0
        : 0.0;
  }

  //Método toJSON - Saída de dados
  String toJSON() {
    return '{ "id": $id, "nome": "$nome", "salario": $salario, "salFamilia": ${salFamilia()} }';
  }
}

void main() {
  List<Funcionario> funcionarios = [];
  funcionarios.add(new Funcionario(1, 'Arnaldo', 1850.0, 1));
  funcionarios.add(new Funcionario(2, 'Juliana', 2850.0, 1));
  funcionarios.add(new Funcionario(3, 'Hemanoteu', 1650.0));
  funcionarios.add(new Funcionario(4, 'Zebedeu', 1950.0, 3));
  for (var f in funcionarios) {
    print(f.toJSON());
  }
}
```

## Desafio A
Implemente no main() um menú CRUD de funcionários na lista com as opções:
- 1 Adicionar funcionário
- 2 Listar funcionário
- 3 Excluir funcionário
- 4 Sair

## Desafios B
- Acrescente na classe Funcionario um método para calcular o INSS
- Acrescente na classe Funcionario um método para calcular o IRPF
- Acrescente na classe Funcionario um método para calcular o salário líquido
- Todos os dados calculados devem aparecer no método toJSON()