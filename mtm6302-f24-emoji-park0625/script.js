const emojis = [
  129409, // 🦁 Lion
  127773, // 🌝 Moon
  128512, // 😀 Grinning Face
  128640, // 🚀 Rocket
  128293, // 🔥 Fire
  129299, // 🤓 Nerd
  128521, // 😉 Wink
  128172, // 💬 Speech Bubble
  128171, // 💣 Bomb
  127774, // 🌞 Sun
  129418, // 🦊 Fox
  128187, // 💻 Laptop
  128049, // 🐱 Cat
  128056, // 🐸 Frog
  127829, // 🍕 Pizza
  127911, // 🎧 Headphones
  127918, // 🎮 Game Controller
  129504  // 🧠 Brain
];

const gallery = document.getElementById("emoji-gallery");

emojis.forEach(code => {
  const item = document.createElement("div");
  item.className = "emoji-item";
  
  const emoji = document.createElement("span");
  emoji.className = "emoji";
  emoji.innerHTML = `&#${code};`;
  
  const codeLabel = document.createElement("div");
  codeLabel.className = "code";
  codeLabel.textContent = code;
  
  item.appendChild(emoji);
  item.appendChild(codeLabel);
  gallery.appendChild(item);
});
