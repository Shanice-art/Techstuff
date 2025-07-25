const canvas = document.getElementById('analyticsChart');
const ctx = canvas.getContext('2d');

// Dummy data for illustration
const stats = {
  "Galaxy Z Fold": 10,
  "Alienware X17": 25,
  "Pixel Watch 2": 8
};

const keys = Object.keys(stats);
const values = Object.values(stats);

// Draw bars
values.forEach((value, index) => {
  ctx.fillStyle = "#00c6ff";
  const barHeight = value * 4;
  const x = 50 + index * 80;
  const y = 180 - barHeight;
  ctx.fillRect(x, y, 40, barHeight);

  // Labels
  ctx.fillStyle = "#000";
  ctx.font = "12px Segoe UI";
  ctx.fillText(keys[index], x - 10, 190);
  ctx.fillText(value, x + 5, y - 5);
});
