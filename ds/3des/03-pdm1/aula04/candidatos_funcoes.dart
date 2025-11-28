import 'dart:io';

//Variaveis globais
List<String> candidatos = [];
List<int> votos = [];
int totalVotos = 0;

//Prigrama principal
void main() {
  while (true) {
    int opcao = menu([
      'Adicionar candidato',
      'Excluir candidato',
      'Mostrar porcentagem de votos',
      'Sair',
    ]);
    switch (opcao) {
      case 1:
        create();
        break;
      case 2:
        delete();
        break;
      case 3:
        read();
        break;
      case 4:
        print('Saindo...\n');
        return;
      default:
        print('Opção inválida!\n\n\n');
        break;
    }
  }
}

//Funções
int menu(List<String> itens) {
  print('\n\n');
  for (int i = 0; i < itens.length; i++) {
    print('${i + 1} - ${itens[i]}');
  }
  return int.parse(stdin.readLineSync()!);
}

void create() {
  print('Nome do candidato:');
  String nome = stdin.readLineSync()!;
  candidatos.add(nome);

  print('Quantidade de votos:');
  int voto = int.parse(stdin.readLineSync()!);
  votos.add(voto);

  totalVotos += voto;
}

void read() {
  print('\nCandidatos\tVotos\tPorcentagem');
  for (int i = 0; i < candidatos.length; i++) {
    double porcentagem = (votos[i] / totalVotos) * 100;
    print('${candidatos[i]}\t${votos[i]}\t${porcentagem.toStringAsFixed(2)}%');
  }
}

void delete() {
  print('Digite o nome do candidato que deseja excluir:');
  String nome = stdin.readLineSync()!;
  int index = candidatos.indexOf(nome);
  if (index == -1) {
    print('Candidato não encontrado');
  } else {
    totalVotos -= votos[index];
    candidatos.removeAt(index);
    votos.removeAt(index);
    print('Candidato removido com sucesso');
  }
}
