// quote.js

// Elements
const form = document.getElementById("quoteForm");
const modal = document.getElementById("quoteModal");
const dynamicQuote = document.getElementById("dynamicQuote");
const downloadBtn = document.getElementById("downloadBtn");
const closeModal = document.getElementById("closeModal");

// Real Quote Bank categorized by mood
const quoteBank = {
  Motivated: [
    "The future depends on what you do today. — Mahatma Gandhi",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "Success is the sum of small efforts, repeated day in and day out. — Robert Collier",
    "Push yourself, because no one else is going to do it for you. — Unknown",
    "Great things never come from comfort zones. — Unknown",
    "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
    "Believe you can and you're halfway there. — Theodore Roosevelt"
  ],
  Tired: [
    "Rest when you're weary. Refresh and renew yourself. — Ralph Marston",
    "Fatigue is the best pillow. — Benjamin Franklin",
    "Rest is not idleness. It’s fuel for your fire. — Unknown",
    "Sometimes the most productive thing you can do is rest. — Mark Black",
    "Even the strongest need rest. Take time to heal and breathe. — Unknown"
  ],
  Hopeful: [
    "Hope is being able to see that there is light despite all of the darkness. — Desmond Tutu",
    "Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman",
    "The darkest night will end and the sun will rise. — Victor Hugo",
    "Once you choose hope, anything is possible. — Christopher Reeve",
    "Hope is the only thing stronger than fear. — Suzanne Collins",
    "A single thread of hope is still a powerful thing. — Unknown"
  ],
  Anxious: [
    "You don’t have to control your thoughts. You just have to stop letting them control you. — Dan Millman",
    "Do not anticipate trouble or worry about what may never happen. — Benjamin Franklin",
    "Just when the caterpillar thought the world was over, it became a butterfly. — Unknown",
    "Anxiety does not empty tomorrow of its sorrows, but only empties today of its strength. — Charles Spurgeon",
    "Breathe. You’re going to be okay. You’ve made it this far. — Unknown"
  ]
};

// Form submission handler
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const feeling = form.feeling.value;

  if (!feeling) {
    alert("Please select how you're feeling today.");
    return;
  }

  // Select random quote based on mood
  const quotes = quoteBank[feeling];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Display in modal
  dynamicQuote.textContent = randomQuote;
  modal.classList.remove("hidden");
});

// Close modal handler
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Download button handler
downloadBtn.addEventListener("click", () => {
  html2canvas(document.getElementById("quoteCard"), {
    backgroundColor: null
  }).then((canvas) => {
    const link = document.createElement("a");
    link.download = "my-quote.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});