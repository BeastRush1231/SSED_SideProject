// Morsecode array
var MorsecodeArray = "A;.-|B;-...|C;-.-.|D;-..|E;.|F;..-.|G;--.|H;....|I;..|J;.---|K;-.-|L;.-..|M;--|N;-.|O;---|P;.--.|Q;--.-|R;.-.|S;...|T;-|U;..-|V;...-|W;.--|X;-..-|Y;-.--|Z;--..|/;-..-.|1;.----|2;..---|3;...--|4;....-|5;.....|6;-....|7;--...|8;---..|9;----.|0;-----"

let MorsecodeList = MorsecodeArray.split("|");
var translateUL = document.querySelector(".translist");

for(let i=0; i < MorsecodeList.length; i++) {
  MorsecodeList[i] = MorsecodeList[i].split(";");
}
