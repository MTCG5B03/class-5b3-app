const members = [
  { name: "Minh Thanh", personality: "Smart, curious, full of chaos 🔥" },
  { name: "Gia Bach", personality: "Meme king and Roblox addict 😂" },
  { name: "Thao Chi", personality: "Bright, bossy, brings the drama ✨" },
  { name: "Gia Huy", personality: "Quiet brainiac with surprise comebacks 💡" },
  // Add more members here!
];

function showMembers() {
  const list = document.getElementById("memberList");
  list.innerHTML = ""; // clear before adding

  members.forEach(member => {
    const li = document.createElement("li");
    li.textContent = `${member.name}: ${member.personality}`;
    list.appendChild(li);
  });
}
