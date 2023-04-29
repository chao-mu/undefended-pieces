<script setup lang="ts">
// Vue
import { onMounted, ref } from 'vue'

// 3rd Party
import { Chess } from 'chess.js'

// Ours
import FENS from "@/src/fens";

const currentFen = ref("")
const lastFen = ref("")
const squares = ref({})
const score = ref(0)
const highScore = ref(0)
const undefendedSquares = ref(new Set<string>())
const indicator = ref(":-)")

onMounted(() => {
  nextGame()
})

function nextBoard(nextFen?: string) {
  lastFen.value = currentFen.value
  currentFen.value = nextFen || randomFen()
  squares.value = fenToChessPieces(currentFen.value)
  undefendedSquares.value =  getUndefendedChessmen(Object.keys(squares.value), currentFen.value)
  console.log(undefendedSquares.value)
}

function getUndefendedChessmen(squareNames: Array<string>, fen: string) {
  const chess = new Chess(fen)
  const undefended = new Set<string>()

  for (const square of squareNames) {
    const piece = chess.get(square)
    if (piece && piece.type !== "k" && !chess.isAttacked(square, piece.color)) {
      undefended.add(square)
    }
  }

  return undefended
}

function gainPoints() {
  score.value += 1
  if (score.value > highScore.value) {
    highScore.value = score.value
  }
}

function resetGame() {
  score.value = 0
}

function failGame() {
  score.value = 0
  indicator.value = ":-("
}

function nextGame(fen?: string) {
  nextBoard(fen)
  resetGame()
}

function randomFen() {
  const randomIndex = Math.floor(Math.random() * FENS.length)
  return FENS[randomIndex]
}

function fenToChessPieces(fen: string): Record<string, Set<string>> {
  const rows = fen.split(' ')[0].split('/');
  const pieces: Record<string, string[]> = {};
  const names: Record<string, string> = {
    'p': 'black-pawn',
    'n': 'black-knight',
    'b': 'black-bishop',
    'r': 'black-rook',
    'q': 'black-queen',
    'k': 'black-king',
    'P': 'white-pawn',
    'N': 'white-knight',
    'B': 'white-bishop',
    'R': 'white-rook',
    'Q': 'white-queen',
    'K': 'white-king',
  }

  for (let i = 0; i < rows.length; i++) {
    let file = 1;
    for (let j = 0; j < rows[i].length; j++) {
      const char = rows[i][j];
      if (/\d/.test(char)) {
        file += parseInt(char, 10);
      } else {
        const square = `${String.fromCharCode(96 + file)}${8 - i}`;
        if (!pieces[square]) pieces[square] = new Set<string>();
        pieces[square].add(names[char]);
        file++;
      }
    }
  }

  return pieces;
}

function selectSquare(id: string) {
  if (!squares.value[id]) {
    squares.value[id] = new Set<string>()
  }

  const square = squares.value[id]

  if (square.has("correct") || square.has("incorrect")) return


  if (undefendedSquares.value.has(id)) {
    undefendedSquares.value.delete(id)
    gainPoints()
    square.add("correct")
    indicator.value = ":-)"
  } else {
    failGame()
    square.add("incorrect")
  }

  if (undefendedSquares.value.size == 0) {
    nextBoard()
  }
}
</script>

<style scoped lang="scss">
$default-board-size: 720px;


.app {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f0f0f0;
}

.container {
  flex-direction: column;
}

.container > * {
  width: $default-board-size;
}

main {
  height: $default-board-size;
  display: flex;
}

/* Media query for mobile */
@media (max-width: $default-board-size) {
  main {
    width: 100vw;
    height: 100vw; 
  }

  .container > * {
    width: 100%;
  }
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}

footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: auto;
  text-align: center;
  margin: 1rem;
}

.high-score {
  font-size: 1.5rem;
  text-align: left;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}

.explainer {
  font-size: 16px;
  font-style: italic;
  text-align: center;
  color: #666;
}

.status {
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.last-fen, .fen {
  font-size: 1.5rem;
  text-align: center;
  text-align: left;
}

main {
  background-color: #2980b9;
}
</style>

<!-- style scoped>
main {
  flex-grow: 1;
}

.app {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  min-height: 100vh;
}

.container {
  max-width: 720px;
}

footer {
  margin-top: auto;
  text-align: center;
  margin: 1rem;
}

.high-score {
  font-size: 1.5rem;
  text-align: left;
}

.status {
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.score {
  text-align: center;
}

.title {
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  margin: 1.5rem;
}

.last-fen, .fen {
  font-size: 1.5rem;
  text-align: center;
  text-align: left;
}

.explainer {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: italic;
}

footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
}
</!-->

<template>
  <div class="app">
    <div class="container">
      <header>
        <div class="title">Click Undefended Non-King Pieces/Pawns</div>
        <div class="explainer">Oriented with white on bottom</div>
      </header>
      <main>
        <ChessBoard :squares="squares" @squareClick='selectSquare'/>
      </main>
      <footer>
        <div class="status">
          <div class="score">Score: {{ score }}</div>
          <div class="indicator">{{ indicator }}</div>
        </div>
        <div class="high-score">High Score: {{ highScore }}</div>
        <div class="fen">FEN: {{ currentFen }}</div>
        <div class="last-fen" v-if="lastFen">Last FEN: <a href="#" @click.prevent='nextGame(lastFen)'>{{ lastFen }}</a></div>
      </footer>
    </div>
  </div>
</template>

