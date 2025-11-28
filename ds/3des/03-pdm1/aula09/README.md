# Aula09 - Flutter

## Alô mundo
```dart
import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      title: 'MeuAplicativo',
      home: Scaffold(
        appBar: AppBar(title: const Text('Tela inicial')),
        body: Center(child: Text('Alô mundo!'))),
    ),
  );
}
```

## Formulários básicos
Aplicativo básico desenvolvido em aula como exemplo de entrada e saída de dados com formulários.
### App pava verifiar para quem uma pessoa pode doar sangue:

|![Print](./assets/print00.png?raw=true)|![Print](./assets/print01.png?raw=true)|![Print](./assets/print02.png?raw=true)|
|:-:|:-:|:-:|
|Tela01|Alert em branco|Resultado|

- main.dart
```dart
import 'package:flutter/material.dart';
import '/ui/sangue_screen.dart';

void main() {
  runApp(MaterialApp(title: 'Doação de sangue', home: SangueScreen()));
}
```
- ./ui/sangue_screen.dart
```dart
import 'package:flutter/material.dart';

class SangueScreen extends StatefulWidget {
  const SangueScreen({super.key});

  @override
  State<SangueScreen> createState() => _SangueScreenState();
}

class _SangueScreenState extends State<SangueScreen> {
  String nome = '';
  String tipo = '';
  String tipos = '';

  validar(BuildContext context) {
    if (nome.isEmpty || tipo.isEmpty) {
      showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text('Atenção'),
            content: Text('Preencha todos os campos'),
            actions: [
              TextButton(
                onPressed: () {
                  Navigator.of(context).pop();
                },
                child: Text('OK'),
              ),
            ],
          );
        },
      );
    } else {
      setState(() {
        if (tipo.toUpperCase() == 'O-') {
          tipos = 'A+, A-, B+, B-, AB+, AB-, O+, O-';
        } else if (tipo.toUpperCase() == 'O+') {
          tipos = 'A+, B+, AB+, O+';
        } else if (tipo.toUpperCase() == 'A-') {
          tipos = 'A+, A-, AB+, O-';
        } else if (tipo.toUpperCase() == 'A+') {
          tipos = 'A+, AB+';
        } else if (tipo.toUpperCase() == 'B-') {
          tipos = 'B+, B-, AB+, O-';
        } else if (tipo.toUpperCase() == 'B+') {
          tipos = 'B+, AB+';
        } else if (tipo.toUpperCase() == 'AB-') {
          tipos = 'AB+, O-';
        } else if (tipo.toUpperCase() == 'AB+') {
          tipos = 'AB+';
        } else {
          tipos = 'Nenhum tipo';
        }
      });

      showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text(nome),
            content: Text('Seu sangue pode ser doado para os tipos: $tipos'),
            actions: [
              TextButton(
                onPressed: () {
                  Navigator.of(context).pop();
                },
                child: Text('OK'),
              ),
            ],
          );
        },
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Doação de sangue", style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.brown,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Text('Nome do doador'),
            TextField(
              decoration: InputDecoration(
                border: OutlineInputBorder(),
                hintText: 'Digite seu nome',
              ),
              onChanged: (value) {
                setState(() {
                  nome = value;
                });
              },
            ),
            Text('Tipo sanguíneo'),
            TextField(
              decoration: InputDecoration(
                border: OutlineInputBorder(),
                hintText: 'Digite seu tipo sanguíneo',
              ),
              onChanged: (value) {
                setState(() {
                  tipo = value;
                });
              },
            ),
            ElevatedButton(
              onPressed: () {
                validar(context);
              },
              child: Text('Calcular'),
            ),
            Text('Você $nome pode doar sangue para os tipos:$tipos'),
          ],
        ),
      ),
    );
  }
}
```

## Exercícios/Desafios
Crie a mesma calculadora de IMC que foi criada em App Inventor na aula 02, mas utilizando o Flutter. Para isso, crie um novo projeto chamado **AvaliacaoIMC** e siga os passos desta aula.
- O Aplicativo terá apenas uma tela, onde o usuário irá informar o peso e a altura, e ao clicar no botão "Calcular", o aplicativo irá calcular o IMC e exibir o resultado em um **AlertDialog**.

|![IMC](https://github.com/wellifabio/senai2025/blob/main/ds/3des/03-pdm1/aula08/prints/imc0.png?raw=true)|![IMC](https://github.com/wellifabio/senai2025/blob/main/ds/3des/03-pdm1/aula08/prints/imc1.png?raw=true)|
|:-:|:-:|
|Tela Inicial|Resultado|

### Desafios
|Wireframes01|Wireframes02|Wireframes03|Desafios|
|-|-|-|-|
|![Financ 0](https://github.com/wellifabio/senai2025/blob/main/ds/3des/03-pdm1/aula08/prints/financ0.png?raw=true)|![Financ 1](https://github.com/wellifabio/senai2025/blob/main/ds/3des/03-pdm1/aula08/prints/financ1.png?raw=true)|![Financ 2](https://github.com/wellifabio/senai2025/blob/main/ds/3des/03-pdm1/aula08/prints/financ2.png?raw=true)|**Contextualização:** As taxas de juros continuam autíssimas dificultando a aquisição de bens e serviços. Antes de comprar um bem financiado como um carro, uma moto, um imóvel ou até mesmo um eletrodoméstico, é importante simular o valor das parcelas e o custo total do financiamento.<br>**Objetivo:** Desenvolver um aplicativo semelhante ao da imagem ao lado que recebe como entrada o valor do bem, o número de parcelas, a taxa de juros mensal e as taxas adicionais e exibe o valor da parcela e o Montante total do financiamento:<br>**Fórmula do juros compostos:** $M = C \times (1+i)^t$|
|![Invest 0](https://github.com/wellifabio/senai2025/blob/main/ds/3des/03-pdm1/aula08/prints/invest0.png?raw=true)|![invest 1](https://github.com/wellifabio/senai2025/blob/main/ds/3des/03-pdm1/aula08/prints/invest1.png?raw=true)|![Invest 2](https://github.com/wellifabio/senai2025/blob/main/ds/3des/03-pdm1/aula08/prints/invest2.png?raw=true)|**Contextualização:** Uma alternativa ao financiamento é a paciência, quando a aquisição de um bem não é de necessidade básica ou essencial. Neste caso, é possível investir o dinheiro e esperar o tempo necessário para adquirir o bem à vista.<br>**Objetivo:** Desenvolver um aplicativo semelhante ao da imagem ao lado que recebe como entrada o valor mensal que podemos investir o número de meses e a taxa de juros mensal e exibe o montante acumulado sem juros e com juros compostos.<br>**Fórmula** laço de repetição, exemplo na planilha de Excel nesta pasta testes.xlsx|
|![Bitola](https://github.com/wellifabio/senai2025/blob/main/ds/3des/03-pdm1/aula08/prints/bitola0.png?raw=true)|![Bitola](https://github.com/wellifabio/senai2025/blob/main/ds/3des/03-pdm1/aula08/prints/bitola1.png?raw=true)|![Bitola](https://github.com/wellifabio/senai2025/blob/main/ds/3des/03-pdm1/aula08/prints/bitola2.png?raw=true)|**Contextualização:** O professor de instalações elétricas ensina seus alunos como calcular a bitola adequada para cada uso de uma instalação. Solicitou que os alunos de Desenvolvimento de sistemas criem um aplicativo que faça este cálculo.<br>**Objetivo:** Desenvolver um aplicativo semelhante ao da imagem ao lado que recebe como entrada a corrente elétrica em ampères e a distância em metros e exibe a bitola do fio em milímetros quadrados, tanto para tensão de 110V quanto para 220V.<br>**Fórmula:**<br>bitola110 = (2 * corrente * distância) / 294.64<br>bitola220 = (2 * corrente * distância) / 510.4|

#### Fórmulas em flutter
- Financiamento
```dart
  m = c * pow(1 + i, t) + outras;
  p = m / t;
```
- Investimento
```dart
  montanteS = mensal * t;
  for (int j = 1; j <= t; j++) {
    montanteR = montanteR + montanteR * i + mensal;
  }
```

Faça os exercícios utilizando o Flutter, na IDE **Android Studio** ou **VsCode** ou **IDX**

## Firebase Studio
- Acessar o firebase no endereço idx.google.com
- Procurar o <img src='./assets/icone.png' width='30px'> ícone do Flutter e criar um novo projeto.
- Programar testando no **navegador** ou emulador.
- Ao concluir a atividade após testar enviar para o github.
- Tirar prints das telas do projeto e mostrar estes prints em README.md como no [projeto de exemplo](https://github.com/wellifabio/doasangue2025.git)
#### Criar o APK (Para testar no celular)
- Caso queira testar no próprio celular basta **"buidar o projeto"** no terminal **CTRL + '**
```bash
flutter clean
flutter build apk --release
```
- O arquivo .apk vai ser gerado na pasta **build>apps>output>apk**
  - Caso faça commit e push para o github ele não é enviado pois a pasta **build** está no .gitignore
  - Mova o arquivo .apk para a raiz do projeto e faça commit.
  - Pronto agora abra o repositório do git pelo navegador do seu celular, baixe o APK e instale no celular.
    - **Obs**: você vai precisar habilitar o modo desenvolvedor no celular para instalar app de fonte desconhecida.


## Entregas
- Cada projeto deve estar em um **repositório público separado no GitHub**.
- Nomes sugeridos para os repositórios:
  - AvaliacaoIMC
  - Financiamento
  - Investimento
  - Bitola
- Os links dos repositórios devem ser enviados para o professor neste **[Form](https://docs.google.com/forms/d/e/1FAIpQLScZ30qAUjTgdJv-965ifp7boK7-9ogXd0YHtLBr_snxBHZBog/viewform?usp=dialog)**.
- Todos os repositórios devem ter no arquivo **README.md**
  - Descrição do projeto
  - Print das telas (salvos em uma pasta assets no projeto)
  - Tecnologias
  - Passo a passo de como executar
- **Estas entregas junto com o Design Figma da aula anterior valem como a avaliação do primeiro bimestre.**
