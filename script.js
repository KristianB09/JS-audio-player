const soundFolder = "sound";
const sound = [
  {
    fileName: "A.wav",
    hotKey: "a",
  },
  {
    fileName: "A#.wav",
    hotKey: "1",
  },
  {
    fileName: "B.wav",
    hotKey: "b",
  },
  {
    fileName: "B#.wav",
    hotKey: "2",
  },
  {
    fileName: "C.wav",
    hotKey: "c",
  },
  {
    fileName: "C#.wav",
    hotKey: "3",
  },
  {
    fileName: "D.wav",
    hotKey: "d",
  },
  {
    fileName: "D#.wav",
    hotKey: "4",
  },
  {
    fileName: "E.wav",
    hotKey: "e",
  },
  {
    fileName: "E#.wav",
    hotKey: "5",
  },
  {
    fileName: "F.wav",
    hotKey: "f",
  },
  {
    fileName: "F#.wav",
    hotKey: "6",
  },
];

const synthPlayerEl = document.getElementById("synth-container");
let currentNote = "";
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

  buttonEl.addEventListener("click", () => {
    const audio = new Audio(`${audio - files}/${sound.fileName}`);
    audio.play();
  });

  sectionEl.appendChild(buttonEl);
});
