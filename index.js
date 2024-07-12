let toPlay = "X";
let winner = "";
let cnt = 0;
let end = false;

const dodis = (id) => {
  let x = document.getElementById(id);
  if (end || x.textContent !== "") return;
  cnt++;
  x.textContent = toPlay;
  calc();
  toPlay = toPlay === "X" ? "O" : "X";
  if (!winner) {
    if (cnt === 9) {
      end = true;
      draw();
    } else {
      document.getElementById("top").textContent = `${toPlay} to play`;
    }
  } else {
    document.getElementById("top").textContent = `press ↑ to reset`;
    end = true;
  }
};

const calc = () => {
  const all = document.querySelectorAll("button");
  // console.log(all[0].textContent);
  for (let i = 0; i < 9; i += 3) {
    if (
      all[i].textContent === all[i + 1].textContent &&
      all[i].textContent === all[i + 2].textContent &&
      all[i].textContent !== ""
    ) {
      winner = all[i].textContent;
      break;
    }
  }
  if (!winner) {
    for (let i = 0; i < 3; i++) {
      if (
        all[i].textContent === all[i + 3].textContent &&
        all[i].textContent === all[i + 6].textContent &&
        all[i].textContent !== ""
      ) {
        winner = all[i].textContent;
        break;
      }
    }
  }
  if (!winner) {
    if (
      all[0].textContent === all[4].textContent &&
      all[0].textContent === all[8].textContent &&
      all[0].textContent !== ""
    ) {
      winner = all[0].textContent;
    } else if (
      all[2].textContent === all[4].textContent &&
      all[2].textContent === all[6].textContent &&
      all[2].textContent !== ""
    ) {
      winner = all[2].textContent;
    }
  }
  if (winner) {
    win(winner);
  }
};

const Clearr = () => {
  // console.log("F");
  document
    .querySelectorAll("button")
    .forEach((event) => (event.textContent = ""));
  toPlay = "X";
  winner = "";
  cnt = 0;
  end = false;
  document.getElementById("top").textContent = `${toPlay} to play`;
};

const win = (winner) => {
  alert(`${winner} win the game`);
};

const draw = () => {
  alert(`draw`);
  document.getElementById("top").textContent = `press ↑ to reset`;
};
