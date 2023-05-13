import { defineStore } from 'pinia'
import { ref } from 'vue'

import FENS from "@/src/fens";

type Puzzle = {
  fen: string
  solution: Array<string>
}

export const useGameStore = defineStore('game', () => {
  const currentFen = ref("")
  const lastFen = ref("")
  const squares = ref({} as Record<string, Set<string>>)
  const score = ref(0)
  const highScore = ref(0)
  const solutions = ref(new Set<string>())

  function nextPuzzle() {
    const puzzle = FENS[Math.floor(Math.random() * FENS.length)] as Puzzle
    lastFen.value = currentFen.value
    currentFen.value = puzzle.fen
    squares.value = fenToChessPieces(puzzle.fen)


  function reset() {
    currentFen.value = ""
    lastFen.value = ""
    squares.value = {}
    score.value = 0
  }

  function guess(squareId: string) {
    if (!squares.value[squareId]) {
      squares.value[squareId] = new Set<string>()
    }

    const square = squares.value[squareId]

    if (square.has("correct") || square.has("incorrect")) return


    if (undefendedSquares.value.has(squareId)) {
      undefendedSquares.value.delete(squareId)
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

  function newGame() {
    reset()
    nextPuzzle()
  }

  return {
    currentFen,
    lastFen,
    squares,
    score,
    highScore,
    solutions,
  }
})

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

