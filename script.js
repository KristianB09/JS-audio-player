const soundFolder = "sound";
const sound = [
  {
    fileName: "A.mp3",
    hotKey: "a",
  },
  {
    fileName: "A#.mp3",
    hotKey: "1",
  },
  {
    fileName: "B.mp3",
    hotKey: "b",
  },
  {
    fileName: "C2.mp3",
    hotKey: "2",
  },
  {
    fileName: "C.mp3",
    hotKey: "c",
  },
  {
    fileName: "C#.mp3",
    hotKey: "3",
  },
  {
    fileName: "D.mp3",
    hotKey: "d",
  },
  {
    fileName: "D#.mp3",
    hotKey: "4",
  },
  {
    fileName: "E.mp3",
    hotKey: "e",
  },
  {
    fileName: "E#.mp3",
    hotKey: "5",
  },
  {
    fileName: "F.mp3",
    hotKey: "f",
  },
  {
    fileName: "F#.mp3",
    hotKey: "6",
  },
];

const synthPlayerEl = document.getElementById("synth-container");
let sectionEl;

sound.forEach((audioSource, index) => {
  if (index % 4 === 0) {
    sectionEl = document.createElement("section");
  }

  if (index === 0) {
    sectionEl.id = "firstSection";
  }

  synthPlayerEl.appendChild(sectionEl);

  const buttonEl = document.createElement("button");
  buttonEl.textContent = audioSource.fileName.split(".")[0];

  const hotKeyTextEl = document.createElement("p");
  hotKeyTextEl.textContent = "hotkey: " + audioSource.hotKey;
  buttonEl.appendChild(hotKeyTextEl);

  const encodedFileName = encodeURIComponent(audioSource.fileName);
  const audio = new Audio(`./audiofiles/${encodedFileName}`);

  audioSource.audio = audio;

  audioSource.buttonEl = buttonEl;

  buttonEl.addEventListener("click", () => {
    audio.play();
  });

  sectionEl.appendChild(buttonEl);
});

window.addEventListener("keydown", (event) => {
  const keyPressed = event.key.toLowerCase();

  const isSoundFound = sound.find(
    (audioSource) => audioSource.hotKey === keyPressed
  );

  if (!isSoundFound) return;

  isSoundFound.audio.play();
});
