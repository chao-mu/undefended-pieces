<script setup lang="ts">
const emit = defineEmits<{
  (e: 'squareClick', id: string): void
}>()

const props = defineProps<{
  squares: {[key: string]: void}
}>()

const onSquareClick = (event) => {
  emit('squareClick', event.target.id)
}
</script>

<template>
  <div class="board">
    <div class="rank">
      <div :class='[...(squares["a8"] || []), "square"]' @click='onSquareClick($event)' id="a8"></div>
      <div :class='[...(squares["b8"] || []), "square"]' @click='onSquareClick($event)' id="b8"></div>
      <div :class='[...(squares["c8"] || []), "square"]' @click='onSquareClick($event)' id="c8"></div>
      <div :class='[...(squares["d8"] || []), "square"]' @click='onSquareClick($event)' id="d8"></div>
      <div :class='[...(squares["e8"] || []), "square"]' @click='onSquareClick($event)' id="e8"></div>
      <div :class='[...(squares["f8"] || []), "square"]' @click='onSquareClick($event)' id="f8"></div>
      <div :class='[...(squares["g8"] || []), "square"]' @click='onSquareClick($event)' id="g8"></div>
      <div :class='[...(squares["h8"] || []), "square"]' @click='onSquareClick($event)' id="h8"></div>
    </div>
    <div class="rank">
      <div :class='[...(squares["a7"] || []), "square"]' @click='onSquareClick($event)' id="a7"></div>
      <div :class='[...(squares["b7"] || []), "square"]' @click='onSquareClick($event)' id="b7"></div>
      <div :class='[...(squares["c7"] || []), "square"]' @click='onSquareClick($event)' id="c7"></div>
      <div :class='[...(squares["d7"] || []), "square"]' @click='onSquareClick($event)' id="d7"></div>
      <div :class='[...(squares["e7"] || []), "square"]' @click='onSquareClick($event)' id="e7"></div>
      <div :class='[...(squares["f7"] || []), "square"]' @click='onSquareClick($event)' id="f7"></div>
      <div :class='[...(squares["g7"] || []), "square"]' @click='onSquareClick($event)' id="g7"></div>
      <div :class='[...(squares["h7"] || []), "square"]' @click='onSquareClick($event)' id="h7"></div>
    </div>
    <div class="rank">
      <div :class='[...(squares["a6"] || []), "square"]' @click='onSquareClick($event)' id="a6"></div>
      <div :class='[...(squares["b6"] || []), "square"]' @click='onSquareClick($event)' id="b6"></div>
      <div :class='[...(squares["c6"] || []), "square"]' @click='onSquareClick($event)' id="c6"></div>
      <div :class='[...(squares["d6"] || []), "square"]' @click='onSquareClick($event)' id="d6"></div>
      <div :class='[...(squares["e6"] || []), "square"]' @click='onSquareClick($event)' id="e6"></div>
      <div :class='[...(squares["f6"] || []), "square"]' @click='onSquareClick($event)' id="f6"></div>
      <div :class='[...(squares["g6"] || []), "square"]' @click='onSquareClick($event)' id="g6"></div>
      <div :class='[...(squares["h6"] || []), "square"]' @click='onSquareClick($event)' id="h6"></div>
    </div>
    <div class="rank">
      <div :class='[...(squares["a5"] || []), "square"]' @click='onSquareClick($event)' id="a5"></div>
      <div :class='[...(squares["b5"] || []), "square"]' @click='onSquareClick($event)' id="b5"></div>
      <div :class='[...(squares["c5"] || []), "square"]' @click='onSquareClick($event)' id="c5"></div>
      <div :class='[...(squares["d5"] || []), "square"]' @click='onSquareClick($event)' id="d5"></div>
      <div :class='[...(squares["e5"] || []), "square"]' @click='onSquareClick($event)' id="e5"></div>
      <div :class='[...(squares["f5"] || []), "square"]' @click='onSquareClick($event)' id="f5"></div>
      <div :class='[...(squares["g5"] || []), "square"]' @click='onSquareClick($event)' id="g5"></div>
      <div :class='[...(squares["h5"] || []), "square"]' @click='onSquareClick($event)' id="h5"></div>
    </div>
    <div class="rank">
      <div :class='[...(squares["a4"] || []), "square"]' @click='onSquareClick($event)' id="a4"></div>
      <div :class='[...(squares["b4"] || []), "square"]' @click='onSquareClick($event)' id="b4"></div>
      <div :class='[...(squares["c4"] || []), "square"]' @click='onSquareClick($event)' id="c4"></div>
      <div :class='[...(squares["d4"] || []), "square"]' @click='onSquareClick($event)' id="d4"></div>
      <div :class='[...(squares["e4"] || []), "square"]' @click='onSquareClick($event)' id="e4"></div>
      <div :class='[...(squares["f4"] || []), "square"]' @click='onSquareClick($event)' id="f4"></div>
      <div :class='[...(squares["g4"] || []), "square"]' @click='onSquareClick($event)' id="g4"></div>
      <div :class='[...(squares["h4"] || []), "square"]' @click='onSquareClick($event)' id="h4"></div>
    </div>
    <div class="rank">
      <div :class='[...(squares["a3"] || []), "square"]' @click='onSquareClick($event)' id="a3"></div>
      <div :class='[...(squares["b3"] || []), "square"]' @click='onSquareClick($event)' id="b3"></div>
      <div :class='[...(squares["c3"] || []), "square"]' @click='onSquareClick($event)' id="c3"></div>
      <div :class='[...(squares["d3"] || []), "square"]' @click='onSquareClick($event)' id="d3"></div>
      <div :class='[...(squares["e3"] || []), "square"]' @click='onSquareClick($event)' id="e3"></div>
      <div :class='[...(squares["f3"] || []), "square"]' @click='onSquareClick($event)' id="f3"></div>
      <div :class='[...(squares["g3"] || []), "square"]' @click='onSquareClick($event)' id="g3"></div>
      <div :class='[...(squares["h3"] || []), "square"]' @click='onSquareClick($event)' id="h3"></div>
    </div>
    <div class="rank">
      <div :class='[...(squares["a2"] || []), "square"]' @click='onSquareClick($event)' id="a2"></div>
      <div :class='[...(squares["b2"] || []), "square"]' @click='onSquareClick($event)' id="b2"></div>
      <div :class='[...(squares["c2"] || []), "square"]' @click='onSquareClick($event)' id="c2"></div>
      <div :class='[...(squares["d2"] || []), "square"]' @click='onSquareClick($event)' id="d2"></div>
      <div :class='[...(squares["e2"] || []), "square"]' @click='onSquareClick($event)' id="e2"></div>
      <div :class='[...(squares["f2"] || []), "square"]' @click='onSquareClick($event)' id="f2"></div>
      <div :class='[...(squares["g2"] || []), "square"]' @click='onSquareClick($event)' id="g2"></div>
      <div :class='[...(squares["h2"] || []), "square"]' @click='onSquareClick($event)' id="h2"></div>
    </div>
    <div class="rank">
      <div :class='[...(squares["a1"] || []), "square"]' @click='onSquareClick($event)' id="a1"></div>
      <div :class='[...(squares["b1"] || []), "square"]' @click='onSquareClick($event)' id="b1"></div>
      <div :class='[...(squares["c1"] || []), "square"]' @click='onSquareClick($event)' id="c1"></div>
      <div :class='[...(squares["d1"] || []), "square"]' @click='onSquareClick($event)' id="d1"></div>
      <div :class='[...(squares["e1"] || []), "square"]' @click='onSquareClick($event)' id="e1"></div>
      <div :class='[...(squares["f1"] || []), "square"]' @click='onSquareClick($event)' id="f1"></div>
      <div :class='[...(squares["g1"] || []), "square"]' @click='onSquareClick($event)' id="g1"></div>
      <div :class='[...(squares["h1"] || []), "square"]' @click='onSquareClick($event)' id="h1"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$square-size: 5rem;
$black-clr: #A85D2B;
$white-clr: #FFEBCD;

.rank {
  border-left: solid;
  border-right: solid;
}

.rank:first-child {
  border-top: solid;
}

.rank:last-child {
  border-bottom: solid;
}

.rank:nth-child(odd) .square:nth-child(odd) {
  background-color: $white-clr;
}

.rank:nth-child(odd) .square:nth-child(even) {
  background-color: $black-clr;
}


.rank:nth-child(even) .square:nth-child(odd) {
  background-color: $black-clr;
}

.rank:nth-child(even) .square:nth-child(even) {
  background-color: $white-clr;
}

.rank {
  height: $square-size;
  width: calc($square-size * 8);
  flex-wrap: nowrap;
  flex-direction: row;
  display: flex;
}

.board {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
}

.square {
  flex-grow: 1;
  position: relative;
}

.square.selected::after, .square.correct::after, .square.incorrect::after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  border-radius: 50%;
  border-style: solid;
}

.square.selected::after {
  border-color: purple;
  border-width: 0.2rem;
}

.square.correct::after {
  border-color: #00FF00;
  border-width: 0.2rem;
}

.square.incorrect::after {
  border-color: #FF0000;
  border-width: 0.2rem;
}

$square-assets: "black-bishop", "black-knight", "black-rook", "white-bishop", "white-knight", "white-queen", "black-king", "black-pawn", "black-queen", "white-king", "white-pawn", "white-rook";

@each $asset in $square-assets {
  .square.#{$asset} {
    background: url("/images/chessboard/#{$asset}.svg");
    background-size: 80% 80%;
    background-position: center;
    background-repeat: no-repeat;
  }
}

</style>


