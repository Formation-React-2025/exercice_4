# Formation React 2025

## Exercice 4 - Composants d'input

### 1 - Initialisation du projet
Plusieurs possibilités :
- Continuer sur le même projet
- Télécharger le projet initialisé depuis le GitHub [Formation React 2025](https://github.com/orgs/Formation-React-2025/repositories) :
    - ```git clone https://github.com/Formation-React-2025/exercice_4.git```

### 2 - InputText
- Créer un composant ```InputText``` » dans le package ```./src/commons/components/input/input-text``` ».
- Le composant retourne un ```controlled``` input de type ```text``` dont la valeur est passée en props.
- Le composant prend en entrée les props suivantes :

|         Nom         | Description                                                                   |      Type      |  Required   | Valeur par défaut |
|:-------------------:|-------------------------------------------------------------------------------|:--------------:|:-----------:|:-----------------:|
|     ```label```     | Label du champ                                                                |  ```string```  | ```true```  |         -         |
|     ```value```     | Valeur de l'input                                                             |  ```string```  | ```false``` |  ```undefined```  |
| ```onValueChange``` | Fonction de callback ```(value: string) => void``` à exécuter lors d'un input | ```Function``` | ```false``` |  ```undefined```  |
|     ```name```      | Name de l'input                                                               |  ```string```  | ```false``` |  ```undefined```  |
|     ```error```     | Texte à afficher en cas d'erreur                                              |  ```string```  | ```false``` |  ```undefined```  |
|   ```disabled```    | Pour désactiver le champ                                                      | ```boolean```  | ```false``` |    ```false```    |
|   ```required```    | Pour rendre le champ obligatoire                                              | ```boolean```  | ```false``` |    ```false```    |

### 2 - LabelButton
- Créer un composant ```LabelButton``` dans le package ``` ./src/commons/components/input/buttons/label-button```.
- Le composant retourne un button et prend en entrée les props suivantes :

|      Nom       | Description                                                                                     |      Type      |  Required   | Valeur par défaut |
|:--------------:|-------------------------------------------------------------------------------------------------|:--------------:|:-----------:|:-----------------:|
|  ```label```   | Label du bouton                                                                                 |  ```string```  | ```true```  |         -         |
|   ```type```   | Définit le type de button (```submit```, ```button``` ou ```reset```)                           |  ```string```  | ```false``` |  ```'button'```   |
| ```onClick```  | Fonction de callback ```(event: HtmlEventt) => void``` à exécuter lors d'un clic sur le bouton  | ```Function``` | ```false``` |  ```undefined```  |
| ```disabled``` | Pour désactiver le champ                                                                        | ```boolean```  | ```false``` |    ```false```    |

### 3 - Découpage et réutilisation de composants
- Dans le package ```./src/features/exercice-4/pages```, créer le composant `Exercice4Page`
- Titre: "Exercice 4 - Composants d'input"
- Le comportement du composant est le même que celui de l’exercice 3 mais doit cette fois-ci utiliser les nouveaux composants ```InputText``` et ```LabelButton```.

### 4 - Conditionnal rendering
- Au clic sur le bouton, afficher en dessous-du formulaire "Le prénom est Jean !!" SSI la valeur du champ "Prénom" vaut "Jean"

### 5 - useEffect
- Mettre en place un useEffect qui affiche en console "Le nom saisit est Dupont !' dès que la valeur du champ "Nom" vaut "Dupont"
