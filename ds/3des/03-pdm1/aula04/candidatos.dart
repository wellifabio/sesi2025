import 'dart:io';

void main() {
  List<String> candidatos = [];
  List<int> votos = [];
  int totalVotos = 0;

  while (true) {
    print('1 - Adicionar candidato');
    print('2 - Excluir candidato');
    print('3 - Mostrar porcentagem de votos');
    print('4 - Sair');
    int opcao = int.parse(stdin.readLineSync()!);

    if (opcao == 1) {
      print('Digite o nome do candidato:');
      String nome = stdin.readLineSync()!;
      candidatos.add(nome);

      print('Digite a quantidade de votos:');
      int voto = int.parse(stdin.readLineSync()!);
      votos.add(voto);

      totalVotos += voto;
    } else if (opcao == 2) {
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
    } else if (opcao == 3) {
      print('Candidatos\tVotos\tPorcentagem');
      for (int i = 0; i < candidatos.length; i++) {
        double porcentagem = (votos[i] / totalVotos) * 100;
        print(
          '${candidatos[i]}\t${votos[i]}\t${porcentagem.toStringAsFixed(2)}%',
        );
      }
    } else if (opcao == 4) {
      break;
    }
  }
}
