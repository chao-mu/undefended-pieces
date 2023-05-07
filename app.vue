<script setup lang="ts">
// Vue
import { onMounted, ref } from 'vue'

// Ours
import FENS from "@/src/fens";

const currentFen = ref("")
const lastFen = ref("")
const squares = ref({})
const score = ref(0)
const highScore = ref(0)
const undefendedSquares = ref(new Set<string>())

onMounted(() => {
  const puzzle = randomPuzzle()
  nextBoard(puzzle)
})

type Puzzle = {
  fen: string
  solution: Array<string>
}

function nextBoard(puzzle: Puzzle) {
  lastFen.value = currentFen.value
  currentFen.value = puzzle.fen
  squares.value = fenToChessPieces(currentFen.value)
  undefendedSquares.value =  new Set<string>(puzzle.solution)
}

function gainPoints() {
  score.value += 1
  if (score.value > highScore.value) {
    highScore.value = score.value
  }
}

function failGame() {
  score.value = 0
}

function randomPuzzle() {
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
  } else {
    failGame()
    square.add("incorrect")
  }

  console.log(undefendedSquares.value.size)
  if (undefendedSquares.value.size == 0) {
    nextBoard(randomPuzzle())
  }
}
</script>

<template>
  <div class="app bg-gray-100 min-h-screen flex flex-col items-center">
    <div class="container flex flex-col max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-4 items-stretch">
      <header class="bg-gray-800 text-white px-4 py-2">
        <div class="title text-3xl font-bold">Click Undefended</div>         
        <div class="explainer text-lg flex justify-between flex-wrap">
          <div class="whitespace-nowrap mr-1">Kings can't defend attacked pieces</div>
          <div class="whitespace-nowrap">White on bottom</div>
        </div>
      </header>                                       
      <main class="px-4 py-2">
        <ChessBoard class="board m-auto aspect-square" :squares="squares" @squareClick='selectSquare'/>
      </main>                                       
      <footer class="bg-gray-100 px-4 py-2 flex flex-col text-xl">
        <div class="flex justify-between items-center font-bold">
          <div>Score: {{ score }}</div>
          <div>Still more to go</div>
          <div>High Score: {{ highScore }}</div>
        </div>
        <div class="fen text-md pt-2">FEN: {{ currentFen }}</div>
        <div class="fen text-md pt-2">Last FEN: {{ lastFen }}</div>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* style */
</style>
