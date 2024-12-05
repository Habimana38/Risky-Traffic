// Sélection du conteneur principal
const app = document.getElementById('app');

// Fonction pour afficher l'accueil
function showHomePage() {
    app.innerHTML = `
        <!-- Logo principal -->
        <img src="IMAGE/Logo Of Risky Traffic-05.png" alt="Logo du haut" class="logo">
        
        <!-- Boutons de navigation -->
        <div class="button" onclick="showDicePage()">
            <img src="IMAGE/dice.png" alt="Icône des règles">
            <span class="button-title">ROLL DIE</span>
        </div>
        <div class="button" onclick="showRulesPage()">
            <img src="IMAGE/Rules.png" alt="Icône des règles">
            <span class="button-title">RULES</span>
        </div>
        
        <!-- Logo en bas de page -->
        <img src="IMAGE/BMB.png" alt="Logo du bas" class="logo2">
    `;
}

// Fonction pour afficher la page "Dice"
function showDicePage() {
    app.innerHTML = `
        
        <!-- Conteneur du dé 3D -->
        <div id="dice-container">
            <div class="dice" id="dice">
                <div class="face front">1</div>
                <div class="face back">2</div>
                <div class="face right">3</div>
                <div class="face left">4</div>
                <div class="face top">5</div>
                <div class="face bottom">6</div>
            </div>
        </div>

        <div onclick="rollDice()" style="cursor: pointer; text-align: center;">
            <img src="IMAGE/RollDice.png" alt="Icône des règles" style="width: 350px; height: auto;">
        </div>
        <div class="button2" onclick="showHomePage()">
            <img src="IMAGE/Home.png" alt="Icône des règles" style="width: 150px; height: auto;">
        </div>
    `;
}

// Fonction pour lancer le dé
function rollDice() {
    // Générer un numéro aléatoire entre 1 et 6
    const diceResult = Math.floor(Math.random() * 6) + 1;

    // Calculer les rotations en fonction du résultat
    let rotationX = 0;
    let rotationY = 0;

    switch (diceResult) {
        case 1: rotationX = 0; rotationY = 0; break;
        case 2: rotationX = 0; rotationY = 180; break;
        case 3: rotationX = 0; rotationY = -90; break;
        case 4: rotationX = 0; rotationY = 90; break;
        case 5: rotationX = -90; rotationY = 0; break;
        case 6: rotationX = 90; rotationY = 0; break;
    }

    // Appliquer la rotation au dé
    const dice = document.getElementById('dice');
    dice.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

    // Afficher le résultat
    document.getElementById('dice-result').textContent = `Result : ${diceResult}`;
}

// Fonction pour afficher la page "Rules"
function showRulesPage() {
    app.innerHTML = `
    <img src="IMAGE/Rules.png" alt="Icône des règles" style="width: 100px; height: auto; display: block; margin: 0 auto;">

    <h2 style="text-align: center !important">Setup</h2>
    <ol>
        <li>Place all player pawns on the starting field of the Visitors’ Track.</li>
        <li>Each player collects 5 coins from the common bank.</li>
        <li>Shuffle the Strategy Card Deck and place them face-down on the “Strategy Deck” location. Do the same for the “Global Cards” and the “Buzz Cards”. Draw the top card of the Strategy Deck and add the Strategy Card face-up to the Public Offer Area.</li>
    </ol>

    <h2 style="text-align: center !important">Objective</h2>
    <p style="text-align: center;">
        Take on the role of website owners competing to attract the most visitors!  
        Race to attract the most visitors as you navigate your pawn along a dynamic spiral-shaped Visitors’ Track. Every field you land on brings you closer to dominating the digital world, with each number marking your growing empire of visitors. 
        Only the most strategic and daring in Traffic Acquisition will come out on top!
    </p>
    <p style="text-align: center;">
        A game created by... <strong>Bright Minds Brigade (BMB)!</strong>
    </p>
    <p style="text-align: center;">
        Every 1 visitor in the game represents 1000 visitors in a real-life environment. 1 = 1,000k.
    </p>

    <h2 style="text-align: center !important">How to Play?</h2>
    <ol>
        <li>
            <strong>Use a Strategy Card from the Public Offer (optional action):</strong><br>
            After using the effect, discard the card to its corresponding Discard Pile and refill the Public Offer by revealing a new card from the Strategy Card Deck.
        </li>
        <li>
            <strong>Roll the die and move (mandatory action):</strong><br>
            Roll the die and move your pawn forward the corresponding number of spaces on the Visitors’ Track.<br>
            If your pawn lands on a field with a Global or Buzz Card symbol, draw the matching card from its deck and follow the instructions. If the player cannot pay the required cost in coins, discard the card and pass your turn.<br>
            If the effect moves your pawn on another Card field, continue performing the actions.<br>
            If the card is a Strategy Card:
            <ul>
                <li>Pay the required number of coins (if stated). Then, gain the indicated number of visitors and/or coins.</li>
                <li>If you cannot or choose not to resolve the card, place it face-up in the Public Offer Area.</li>
                <li>If another card is already in the Public Offer Area, replace it by discarding it.</li>
            </ul>
        </li>
    </ol>

    <h2 style="text-align: center !important">End of the Game</h2>
    <p style="text-align: center;">
        When a player reaches or exceeds “100k” on the Track, that player places their pawn on the “100k” field and this indicates the end of the race for Traffic Acquisition!  
        All remaining players in the current round can still take one final turn before scoring.
        When all is done, move to scoring below to find out who is the winner!
    </p>

    <h2 style="text-align: center !important">Scoring: How to win!</h2>
    <p style="text-align: center;">
        The player with the highest number of visitors on the Visitors’ Track wins. 
        In the event of a tie, the tied player with the most Coins in their personal inventory wins. 
        If there is still a tie, the tied players share the victory. 
    </p>
    <p style="text-align: center;"><strong>And don’t forget to have fun!</strong></p>
    <div class="button2" onclick="showHomePage()">
            <img src="IMAGE/Home.png" alt="Icône des règles" style="width: 150px; height: auto;">
        </div>
    `;
}

// Initialiser avec la page d'accueil
showHomePage();
