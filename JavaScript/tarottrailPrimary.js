// tarotDeck.js

const tarotDeck = [
  {
    name: "The Fool",
    meaning: "New beginnings, optimism, trust in life",
    interpretations: {
      upright: "Excited for new adventures, open-minded, spontaneous",
      reversed: "Recklessness, hesitation, holding back",
      threeCardCombo: "If paired with The Magician: opportunity for action"
    }
  },
  {
    name: "The Magician",
    meaning: "Action, the power to manifest",
    interpretations: {
      upright: "Harnessing your skills and resources",
      reversed: "Manipulation, poor planning, untapped potential",
      threeCardCombo: "If paired with The Fool: leap forward into new beginnings"
    }
  },
  {
    name: "The High Priestess",
    meaning: "Inaction, going within, the subconscious",
    interpretations: {
      upright: "Trust your intuition",
      reversed: "Secrets, hidden motives, disconnected from inner voice",
      threeCardCombo: "If paired with The Empress: nurturing your inner wisdom"
    }
  },
  {
    name: "The Empress",
    meaning: "Abundance, nurturing, fertility, life in bloom!",
    interpretations: {
      upright: "Nurturing, fertility, creativity",
      reversed: "Smothering, neglecting self-care, lack of growth",
      threeCardCombo: "If paired with The High Priestess: deepening intuition and creativity"
    }
  },
  {
    name: "The Emperor",
    meaning: "Structure, stability, rules and power",
    interpretations: {
      upright: "Authority, structure, control",
      reversed: "Domination, excessive control, rigidity",
      threeCardCombo: "If paired with The Hierophant: leadership through tradition"
    }
  },
  {
    name: "The Hierophant",
    meaning: "Institutions, tradition, society and its rules",
    interpretations: {
      upright: "Conformity, tradition, morality",
      reversed: "Rebellion, subversiveness, new approaches",
      threeCardCombo: "If paired with The Emperor: structured leadership"
    }
  },
  {
    name: "The Lovers",
    meaning: "Sexuality, passion, choice, uniting",
    interpretations: {
      upright: "Love, harmony, relationships",
      reversed: "Disharmony, imbalance, misalignment of values",
      threeCardCombo: "If paired with The Chariot: passionate pursuit of goals"
    }
  },
  {
    name: "The Chariot",
    meaning: "Movement, progress, integration",
    interpretations: {
      upright: "Determination, willpower, success",
      reversed: "Lack of control, aggression, obstacles",
      threeCardCombo: "If paired with The Lovers: driven by passion"
    }
  },
  {
    name: "Strength",
    meaning: "Courage, subtle power, integration of animal self",
    interpretations: {
      upright: "Inner strength, courage, compassion",
      reversed: "Self-doubt, weakness, insecurity",
      threeCardCombo: "If paired with The Hermit: quiet inner strength"
    }
  },
  {
    name: "The Hermit",
    meaning: "Meditation, solitude, consciousness",
    interpretations: {
      upright: "Introspection, solitude, inner guidance",
      reversed: "Isolation, loneliness, withdrawal",
      threeCardCombo: "If paired with Strength: finding strength in solitude"
    }
  },
  {
    name: "Wheel of Fortune",
    meaning: "Cycles, change, ups and downs",
    interpretations: {
      upright: "Change, cycles, inevitable fate",
      reversed: "Bad luck, resistance to change, breaking cycles",
      threeCardCombo: "If paired with Justice: karmic balance"
    }
  },
  {
    name: "Justice",
    meaning: "Fairness, equality, balance",
    interpretations: {
      upright: "Truth, fairness, law",
      reversed: "Dishonesty, imbalance, unfair treatment",
      threeCardCombo: "If paired with The Wheel of Fortune: karmic justice"
    }
  },
  {
    name: "The Hanged Man",
    meaning: "Surrender, new perspective, enlightenment",
    interpretations: {
      upright: "Letting go, new perspectives, sacrifice",
      reversed: "Stalling, resistance to change, indecision",
      threeCardCombo: "If paired with The Star: hope after sacrifice"
    }
  },
  {
    name: "Death",
    meaning: "The end of something, change, the impermeability of all things",
    interpretations: {
      upright: "Endings, transformation, transition",
      reversed: "Resistance to change, personal transformation",
      threeCardCombo: "If paired with Temperance: balanced transformation"
    }
  },
  {
    name: "Temperance",
    meaning: "Balance, moderation, being sensible",
    interpretations: {
      upright: "Balance, moderation, purpose",
      reversed: "Imbalance, excess, lack of long-term vision",
      threeCardCombo: "If paired with Death: transformative balance"
    }
  },
  {
    name: "The Devil",
    meaning: "Destructive patterns, addiction, giving away your power",
    interpretations: {
      upright: "Bondage, addiction, materialism",
      reversed: "Detachment, breaking free, power reclaimed",
      threeCardCombo: "If paired with The Tower: sudden liberation"
    }
  },
  {
    name: "The Tower",
    meaning: "Collapse of stable structures, release, sudden insight",
    interpretations: {
      upright: "Sudden change, upheaval, chaos",
      reversed: "Avoidance of disaster, fear of change",
      threeCardCombo: "If paired with The Devil: breaking free from bondage"
    }
  },
  {
    name: "The Star",
    meaning: "Hope, calm, a good omen!",
    interpretations: {
      upright: "Hope, faith, rejuvenation",
      reversed: "Lack of faith, despair, discouragement",
      threeCardCombo: "If paired with The Hanged Man: hope after sacrifice"
    }
  },
  {
    name: "The Moon",
    meaning: "Mystery, the subconscious, dreams",
    interpretations: {
      upright: "Illusion, fear, anxiety, subconscious",
      reversed: "Release of fear, repressed emotion, inner confusion",
      threeCardCombo: "If paired with The Sun: clarity after confusion"
    }
  },
  {
    name: "The Sun",
    meaning: "Success, happiness, all will be well",
    interpretations: {
      upright: "Joy, success, celebration",
      reversed: "Temporary depression, lack of success",
      threeCardCombo: "If paired with The Moon: clarity after confusion"
    }
  },
  {
    name: "Judgement",
    meaning: "Rebirth, a new phase, inner calling",
    interpretations: {
      upright: "Rebirth, inner calling, absolution",
      reversed: "Self-doubt, refusal of self-examination",
      threeCardCombo: "If paired with The World: completion and new beginnings"
    }
  },
  {
    name: "The World",
    meaning: "Completion, wholeness, attainment, celebration of life",
    interpretations: {
      upright: "Completion, integration, accomplishment",
      reversed: "Lack of closure, incomplete goals",
      threeCardCombo: "If paired with Judgement: completion and new beginnings"
    }
  },
  // Minor Arcana (Wands, Cups, Swords, Pentacles)
  // For brevity, only a few examples are included here
  {
    name: "Ace of Wands",
    meaning: "Inspiration, new opportunities, growth, potential",
    interpretations: {
      upright: "New beginnings in creativity or career",
      reversed: "Delays, lack of motivation",
      threeCardCombo: "If paired with Two of Wands: planning for new ventures"
    }
  },
  {
    name: "Two of Wands",
    meaning: "Future planning, progress, decisions, discovery",
    interpretations: {
      upright: "Planning, making decisions, leaving comfort zone",
      reversed: "Fear of change, lack of planning",
      threeCardCombo: "If paired with Ace of Wands: planning for new ventures"
    }
  },
  {
    name: "Three of Wands",
    meaning: "Preparation, foresight, enterprise, expansion",
    interpretations: {
      upright: "Expansion, foresight, overseas opportunities",
      reversed: "Lack of foresight, delays",
      threeCardCombo: "If paired with Four of Wands: successful expansion"
    }
  },
  {
    name: "Four of Wands",
    meaning: "Celebration, joy, harmony, relaxation, homecoming",
    interpretations: {
      upright: "Celebration, harmony, homecoming",
      reversed: "Lack of harmony, tension at home",
      threeCardCombo: "If paired with Three of Wands: successful expansion"
    }
  },
  {
    name: "Five of Wands",
    meaning: "Conflict, disagreements, competition, tension, diversity",
    interpretations: {
      upright: "Conflict, competition, diversity",
      reversed: "Avoidance of conflict, harmony",
      threeCardCombo: "If paired with Six of Wands: victory after struggle"
    }
  },
  {
    name: "Six of Wands",
    meaning: "Success, public recognition, progress, self-confidence",
    interpretations: {
      upright: "Victory, recognition, progress",
      reversed: "Lack of recognition, fall from grace",
      threeCardCombo: "If paired with Five of Wands: victory after struggle"
    }
  },
  {
    name: "Seven of Wands",
    meaning: "Challenge, competition, protection, perseverance",
    interpretations: {
      upright: "Perseverance, maintaining control",
      reversed: "Giving up, overwhelmed",
      threeCardCombo: "If paired with Eight of Wands: swift action in challenges"
    }
  },
  {
    name: "Eight of Wands",
    meaning: "Movement, fast paced change, action",
    interpretations: {
      upright: "Rapid action, movement, quick decisions",
      reversed: "Delays, frustration",
      threeCardCombo: "If paired with Seven of Wands: swift action in challenges"
    }
  },
  {
    name: "Nine of Wands",
    meaning: "Resilience, courage, persistence",
    interpretations: {
      upright: "Courage, persistence, test of faith",
      reversed: "Paranoia, fear of failure",
      threeCardCombo: "If paired with Ten of Wands: burden and perseverance"
    }
  },
  {
    name: "Ten of Wands",
    meaning: "Burden, extra responsibility, hard work, completion",
    interpretations: {
      upright: "Burden, responsibility, hard work",
      reversed: "Taking on too much, burnout",
      threeCardCombo: "If paired with Nine of Wands: burden and perseverance"
    }
  },
  {
    name: "Page of Wands",
    meaning: "Inspiration, ideas, discovery, limitless potential",
    interpretations: {
      upright: "New ideas, enthusiasm, exploration",
      reversed: "Lack of direction, procrastination",
      threeCardCombo: "If paired with Knight of Wands: pursuing new ideas"
    }
  },
  {
    name: "Knight of Wands",
    meaning: "Energy, passion, inspired action, adventure, impulsiveness",
    interpretations: {
      upright: "Action, adventure, impulsiveness",
      reversed: "Recklessness, impatience",
      threeCardCombo: "If paired with Page of Wands: pursuing new ideas"
    }     
  },
  {     
    name: "Queen of Wands",
    meaning: "Confidence, social butterfly, passion, charisma",
    interpretations: {
      upright: "Confidence, social butterfly, passion, charisma",
      reversed: "Jealousy, insecurity, competition",
      threeCardCombo: "If paired with King of Wands: powerful creative partnership"
    }
  },
  {
    name: "King of Wands",
    meaning: "Natural-born leader, vision, entrepreneur, honor",
    interpretations: {
      upright: "Leadership, vision, entrepreneur, honor",
      reversed: "Impulsiveness, overbearing, ruthless",
      threeCardCombo: "If paired with Queen of Wands: powerful creative partnership"
    }
  },
  {
    name: "Ace of Cups",
    meaning: "Love, new relationships, compassion, creativity",
    interpretations: {
      upright: "New beginnings in love or creativity",
      reversed: "Blocked or repressed emotions",
      threeCardCombo: "If paired with Two of Cups: new romantic relationship"
    }
  },
  {
    name: "Two of Cups",
    meaning: "Unified love, partnership, mutual attraction",
    interpretations: {
      upright: "Partnership, love, mutual attraction",
      reversed: "Break-up, imbalance in relationship",
      threeCardCombo: "If paired with Ace of Cups: new romantic relationship"
    }
  },
  {
    name: "Three of Cups",
    meaning: "Celebration, friendship, creativity, collaborations",
    interpretations: {
      upright: "Celebration, friendship, creativity",
      reversed: "Overindulgence, gossip, isolation",
      threeCardCombo: "If paired with Four of Cups: reevaluating friendships"
    }
  },
  {
    name: "Four of Cups",
    meaning: "Meditation, contemplation, apathy, reevaluation",
    interpretations: {
      upright: "Contemplation, apathy, reevaluation",
      reversed: "Boredom, missed opportunities",
      threeCardCombo: "If paired with Three of Cups: reevaluating friendships"
    }
  },
  {
    name: "Five of Cups",
    meaning: "Loss, grief, disappointment, despair, bereavement",
    interpretations: {
      upright: "Loss, grief, disappointment",
      reversed: "Acceptance, moving on, finding peace",
      threeCardCombo: "If paired with Six of Cups: healing from past grief"
    }
  },
  {
    name: "Six of Cups",
    meaning: "Revisiting the past, childhood memories, innocence, joy",
    interpretations: {
      upright: "Nostalgia, childhood memories, innocence",
      reversed: "Living in the past, naivety",
      threeCardCombo: "If paired with Five of Cups: healing from past grief"
    }
  },
  {
    name: "Seven of Cups",
    meaning: "Opportunities, choices, wishful thinking, illusion",
    interpretations: {
      upright: "Choices, wishful thinking, illusion",
      reversed: "Indecision, confusion, overwhelmed by choices",
      threeCardCombo: "If paired with Eight of Cups: leaving illusions behind"
    }
  },
  {
    name: "Eight of Cups",
    meaning: "Disappointment, abandonment, withdrawal, escapism",
    interpretations: {
      upright: "Walking away, abandonment, withdrawal",
      reversed: "Fear of change, stagnation",
      threeCardCombo: "If paired with Seven of Cups: leaving illusions behind"
    }
  },
  {
    name: "Nine of Cups",
    meaning: "Contentment, satisfaction, gratitude, wish come true",
    interpretations: {
      upright: "Contentment, satisfaction, gratitude",
      reversed: "Greed, dissatisfaction, materialism",
      threeCardCombo: "If paired with Ten of Cups: emotional fulfillment"
    }
  },
  {
    name: "Ten of Cups",
    meaning: "Divine love, blissful relationships, harmony",
    interpretations: {
      upright: "Harmony, blissful relationships, divine love",
      reversed: "Broken home, disharmony, misalignment of values",
      threeCardCombo: "If paired with Nine of Cups: emotional fulfillment"
    }
  },
  {
    name: "Page of Cups",
    meaning: "Creative opportunities, intuitive messages, curiosity",
    interpretations: {
      upright: "New creative opportunities, curiosity",
      reversed: "Creative blocks, emotional immaturity",
      threeCardCombo: "If paired with Knight of Cups: pursuing creative passions"
    }
  },
  {
    name: "Knight of Cups",
    meaning: "Romance, charm, 'Knight in shining armor', imagination",
    interpretations: {
      upright: "Romance, charm, imagination",
      reversed: "Unreliability, moodiness, unrealistic expectations",
      threeCardCombo: "If paired with Page of Cups: pursuing creative passions"
    }
  },
  {
    name: "Queen of Cups",
    meaning: "Compassionate, caring, emotionally stable, intuitive, in flow",
    interpretations: {
      upright: "Compassionate, caring, emotionally stable",
      reversed: "Emotional insecurity, co-dependency",
      threeCardCombo: "If paired with King of Cups: balanced emotional partnership"
    }
  },
  {
    name: "King of Cups",
    meaning: "Emotional balance and control, generosity",
    interpretations: {
      upright: "Emotional balance, generosity, diplomacy",
      reversed: "Emotional manipulation, moodiness",
      threeCardCombo: "If paired with Queen of Cups: balanced emotional partnership"
    }
  },
  {
    name: "Ace of Swords",
    meaning: "Breakthroughs, new ideas, mental clarity, success",
    interpretations: {
      upright: "New ideas, mental clarity, breakthroughs",
      reversed: "Confusion, lack of clarity, misinformation",
      threeCardCombo: "If paired with Two of Swords: difficult decisions"
    }
  },
  {
    name: "Two of Swords",
    meaning: "Difficult decisions, weighing up options, an impasse, avoidance",
    interpretations: {
      upright: "Difficult decisions, weighing options, impasse",
      reversed: "Indecision, confusion, information overload",
      threeCardCombo: "If paired with Ace of Swords: difficult decisions"
    }
  },
  {
    name: "Three of Swords",
    meaning: "Heartbreak, emotional pain, sorrow, grief, hurt",
    interpretations: {
      upright: "Heartbreak, emotional pain, sorrow",
      reversed: "Recovery, forgiveness, moving on",
      threeCardCombo: "If paired with Four of Swords: healing from heartbreak"
    }
  },
  {
    name: "Four of Swords",
    meaning: "Rest, relaxation, meditation, contemplation, recuperation",
    interpretations: {
      upright: "Rest, recuperation, contemplation",
      reversed: "Burnout, stress, lack of rest",
      threeCardCombo: "If paired with Three of Swords: healing from heartbreak"
    }
  },
  {
    name: "Five of Swords",
    meaning: "Conflict, disagreements, competition, defeat, winning at all costs",
    interpretations: {
      upright: "Conflict, defeat, winning at all costs",
      reversed: "Reconciliation, making amends",
      threeCardCombo: "If paired with Six of Swords: moving on from conflict"
    }
  },
  {
    name: "Six of Swords",
    meaning: "Transition, change, rite of passage, releasing baggage",
    interpretations: {
      upright: "Transition, change, rite of passage",
      reversed: "Resistance to change, carrying baggage",
      threeCardCombo: "If paired with Five of Swords: moving on from conflict"
    }
  },
  {
    name: "Seven of Swords",
    meaning: "Betrayal, deception, getting away with something, stealth", 
    interpretations: {
      upright: "Betrayal, deception, getting away with something",
      reversed: "Coming clean, rethinking approach",
      threeCardCombo: "If paired with Eight of Swords: feeling trapped by deception"
    }
  },
  {
    name: "Eight of Swords",
    meaning: "Feeling trapped, restriction, self-imposed limitations",
    interpretations: {
      upright: "Feeling trapped, restriction, self-imposed limitations",
      reversed: "Freedom, release, new perspectives",
      threeCardCombo: "If paired with Seven of Swords: feeling trapped by deception"
    }
  },
  {
    name: "Nine of Swords",
    meaning: "Anxiety, worry, fear, nightmares",
    interpretations: {
      upright: "Anxiety, worry, fear",
      reversed: "Finding peace, releasing fear",
      threeCardCombo: "If paired with Ten of Swords: end of a difficult situation"
    }
  },
  {
    name: "Ten of Swords",
    meaning: "Betrayal, loss, crisis, endings",
    interpretations: {
      upright: "Betrayal, loss, crisis",
      reversed: "Recovery, regeneration, new beginnings",
      threeCardCombo: "If paired with Nine of Swords: end of a difficult situation"
    }
  },
  {
    name: "Page of Swords",
    meaning: "Curiosity, intelligence, new ideas, mental energy",
    interpretations: {
      upright: "Curiosity, intelligence, new ideas",
      reversed: "Lack of direction, confusion, misinformation",
      threeCardCombo: "If paired with Knight of Swords: a battle of wits"
    }
  },
  {
    name: "Knight of Swords",
    meaning: "Action, ambition, fast thinking",
    interpretations: {
      upright: "Action, ambition, fast thinking",
      reversed: "Rashness, scattered thought, impulsiveness",
      threeCardCombo: "If paired with Page of Swords: a battle of wits"
    }
  },
  {
    name: "Queen of Swords",
    meaning: "Independence, complexity, perception",
    interpretations: {
      upright: "Independence, complexity, perception",
      reversed: "Confusion, complexity, lack of clarity",
      threeCardCombo: "If paired with King of Swords: a powerful intellectual partnership"
    }
  },
  {
    name: "King of Swords",
    meaning: "Intellectual power, authority, truth",
    interpretations: {
      upright: "Intellectual power, authority, truth",
      reversed: "Manipulation, abuse of power, lack of clarity",
      threeCardCombo: "If paired with Queen of Swords: a powerful intellectual partnership"
    }
  },
  {
    name: "Ace of Pentacles",
    meaning: "New beginnings, prosperity, material wealth",
    interpretations: {
      upright: "New beginnings, prosperity, material wealth",
      reversed: "Missed opportunities, lack of planning",
      threeCardCombo: "If paired with Two of Pentacles: balancing resources"
    }
  },
  {
    name: "Two of Pentacles",
    meaning: "Balance, adaptability, time management",
    interpretations: {
      upright: "Balance, adaptability, time management",
      reversed: "Overwhelm, disorganization, lack of balance",
      threeCardCombo: "If paired with Ace of Pentacles: balancing new opportunities"
    }
  },
  {
    name: "Three of Pentacles",
    meaning: "Teamwork, collaboration, skillful craftsmanship",
    interpretations: {
      upright: "Teamwork, collaboration, skillful craftsmanship",
      reversed: "Lack of teamwork, disorganization, poor planning",
      threeCardCombo: "If paired with Four of Pentacles: a need to share resources"
    }
  },
  {
    name: "Four of Pentacles",
    meaning: "Control, stability, security, possession",
    interpretations: {
      upright: "Control, stability, security",
      reversed: "Possessiveness, insecurity, instability",
      threeCardCombo: "If paired with Five of Pentacles: a need to let go"
    }
  },
  {
    name: "Five of Pentacles",
    meaning: "Financial loss, poverty, isolation",
    interpretations: {
      upright: "Financial loss, poverty, isolation",
      reversed: "Recovery, improvement, finding help",
      threeCardCombo: "If paired with Six of Pentacles: a need to seek help"
    }
  },
  {
    name: "Six of Pentacles",
    meaning: "Generosity, charity, giving and receiving",
    interpretations: {
      upright: "Generosity, charity, giving and receiving",
      reversed: "Debt, selfishness, one-sided charity",
      threeCardCombo: "If paired with Five of Pentacles: a need to seek help"
    }
  },
  {
    name: "Seven of Pentacles",
    meaning: "Assessment, patience, long-term view",
    interpretations: {
      upright: "Assessment, patience, long-term view",
      reversed: "Lack of long-term vision, impatience",
      threeCardCombo: "If paired with Eight of Pentacles: patience in skill development"
    }
  },
  {
    name: "Eight of Pentacles",
    meaning: "Apprenticeship, repetitive tasks, mastery, skill development",
    interpretations: {
      upright: "Apprenticeship, mastery, skill development",
      reversed: "Lack of focus, perfectionism, boredom",
      threeCardCombo: "If paired with Seven of Pentacles: patience in skill development"
    }
  },
  {    name: "Nine of Pentacles",
    meaning: "Abundance, luxury, self-sufficiency",
    interpretations: {
      upright: "Abundance, luxury, self-sufficiency",
      reversed: "Financial setbacks, over-investment",
      threeCardCombo: "If paired with Ten of Pentacles: enjoying the fruits of labor"
    }
  },
  {
    name: "Ten of Pentacles",
    meaning: "Wealth, inheritance, family, establishment",
    interpretations: {
      upright: "Wealth, inheritance, family, establishment",
      reversed: "Financial failure, loss, lack of stability",
      threeCardCombo: "If paired with Nine of Pentacles: enjoying the fruits of labor"
    }
  },
  {
    name: "Page of Pentacles",
    meaning: "Manifestation, financial opportunity, skill development",
    interpretations: {
      upright: "Manifestation, financial opportunity, skill development",
      reversed: "Lack of progress, procrastination, learning from failure",
      threeCardCombo: "If paired with Knight of Pentacles: pursuing financial goals"
    }
  },
  {
    name: "Knight of Pentacles",
    meaning: "Hard work, productivity, routine, conservatism",
    interpretations: {
      upright: "Hard work, productivity, routine",
      reversed: "Laziness, stagnation, lack of progress",
      threeCardCombo: "If paired with Page of Pentacles: pursuing financial goals"
    }
  },
  {
    name: "Queen of Pentacles",
    meaning: "Nurturing, practical, providing financially",
    interpretations: {
      upright: "Nurturing, practical, providing financially",
      reversed: "Smothering, financial insecurity, lack of self-care",
      threeCardCombo: "If paired with King of Pentacles: a strong financial partnership"
    }
  },
  {
    name: "King of Pentacles",
    meaning: "Wealth, business, leadership, security",
    interpretations: {
      upright: "Wealth, business, leadership, security",
      reversed: "Greed, indulgence, financial insecurity",
      threeCardCombo: "If paired with Queen of Pentacles: a strong financial partnership"
    }
  }
];

console.log("Happy Reading!");

const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

const shuffledTarotDeck = shuffleDeck(tarotDeck.slice());

console.log(shuffledTarotDeck);

const drawCards = (deck, numberOfCards) => {
  return deck.slice(0, numberOfCards);
}

const printReading = (hand) => {
  const positions = ['Past', 'Present', 'Future'];
  console.log("Your reading:");
  hand.forEach((card, i) => {
    console.log(`${positions[i]}: ${card}`);
  });
}

const drawButton = document.getElementById("drawButton");
const resultDiv = document.getElementById("result");

drawButton.addEventListener("click", () => {
  const hand = drawCards(shuffledTarotDeck, 3);
  resultDiv.innerHTML = "";
  const positions = ['Past', 'Present', 'Future'];
  hand.forEach((card, i) => {
    const p = document.createElement("p");
    p.textContent = `${positions[i]}: ${card}`;
    resultDiv.appendChild(p);
  });
});

const card = tarotDeck.find(c => c.name === "The Fool");
console.log(card.meaning); // works the same as meanings['The Fool']

function showMeanings() {
  let content = "<h2>Card Meanings</h2>";
  tarotDeck.forEach(card => {
    content += `<p><strong>${card}:</strong> ${meanings[card]}</p>`;
  });
  tabContent.innerHTML = content;
}

function showThreeCardReading() {
  tabContent.innerHTML = "<h2>Your Three Card Reading</h2><p>Shuffle & draw 3 cards here...</p>";
}

function showSpreadCreator() {
  tabContent.innerHTML = "<h2>Create Your Own Tarot Spread</h2><p>Drag and Drop cards to build custom spreads!</p>";
}

function showMoreGames() {
  tabContent.innerHTML = "<h2>More Games Coming Soon!</h2><p>Stay tuned for more tarot games and activities.</p>";
}

function showTarotExpeditions() {
  tabContent.innerHTML = "<h2>Tarot Expeditions</h2><p>Adventure mode will live here!</p>";
}

const tabContent = document.getElementById("tabContent");
const tabs = document.querySelectorAll(".localNav button");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const type = tab.dataset.tab;
  
  switch (type) {
    case "meanings": 
      showMeanings();
      break;

    case "threeCardReading": 
      showThreeCardReading();
      break;

    case "createSpread": 
      showSpreadCreator();
      break;

      case "moreGames": 
      showMoreGames(); 
      break;

      case "tarotExpeditions": 
      showTarotExpeditions(); 
      break;

    default: tabContent.innerHTML = "Select a tab to see content.";

    }
  });
});

// Example: Get meaning of a specific card
const cardName = "The Fool";
const card = tarotDeck.find(c => c.name === cardName);
console.log(card.meaning); // Output: "New beginnings, optimism, trust in life"
console.log(card.interpretations.upright); // Output: "Excited for new adventures, open-minded, spontaneous"

// Example: Get interpretations for a 3-card reading
const hand = drawCards(shuffleDeck([...tarotDeck]), 3);
hand.forEach((c, i) => {
  console.log(`${c.name} (${['Past','Present','Future'][i]}): ${c.interpretations.upright}`);
});