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
