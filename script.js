// Simulated Bible Data (Example)
const bibleData = {
  "John 3:16": {
    verse: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    explanation: "This verse talks about the unconditional love God has for us and His sacrifice of sending Jesus to save us. It's the foundation of Christian faith.",
    actionStep: "Take a moment today to reflect on God's love for you. Maybe share this with someone who needs to hear it, or just remember: you're loved."
  },
  "Philippians 4:13": {
    verse: "I can do all this through him who gives me strength.",
    explanation: "This verse is a reminder that no matter what challenges you're facing, with Christ's strength, anything is possible.",
    actionStep: "When you're feeling weak, remember to lean on Christ. Take on a challenge today, no matter how small, with the mindset that you're not alone."
  },
  "Psalm 23:1": {
    verse: "The Lord is my shepherd; I lack nothing.",
    explanation: "This verse is a reminder that God provides for us. He is our guide and protector, ensuring that we have everything we need.",
    actionStep: "When you feel uncertain or lacking, remember God is your shepherd. Trust that He will provide for you, and take a moment today to thank Him for His provision."
  },
  "Jeremiah 29:11": {
    verse: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
    explanation: "This verse is about God's promise to guide us toward a hopeful future. He has good plans for our lives, even when we can't see them.",
    actionStep: "Take time today to trust in God's plan for your life. When things seem uncertain, hold on to the hope that He has good things in store for you."
  },
  "Romans 8:28": {
    verse: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    explanation: "God's got a plan. No matter how messy life gets, He's working it out for your good. Trust Him. He knows what He's doing, even when you don’t.",
    actionStep: "When life feels like a bad rom-com, remember: it's all going to work out. Look for the silver lining in today's challenges."
  },
  "Matthew 7:7": {
    verse: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
    explanation: "Basically, God is like a cosmic Amazon Prime: If you ask for it, He’ll deliver (though, it might not be in two days).",
    actionStep: "Today, ask God for something you need. It could be patience, clarity, or just a good parking spot. He’s listening."
  },
  "Genesis 1:1": {
    verse: "In the beginning God created the heaven and the earth.",
    explanation: "God created everything. He started with nothing, and yet, He created everything. If God can create the universe, imagine what He can do in your life today!",
    actionStep: "Create something today! Start with a simple project, habit, or goal. You never know where it could lead!"
  },
  "Matthew 28:19": {
    verse: "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.",
    explanation: "It's a call to action. Jesus told us to go, share the good news, and invite others into a relationship with God.",
    actionStep: "Who can you share God’s love with today? Whether it's a simple message or an act of kindness, take action."
  },
  "1 Corinthians 13:4-7": {
    verse: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.",
    explanation: "Love isn’t about feeling—it’s about action. Be kind, be patient, and show love in the small things. It’s a daily choice.",
    actionStep: "Practice patience with someone today. Whether it’s a family member, co-worker, or friend, choose kindness."
  },
  "Romans 12:2": {
    verse: "And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.",
    explanation: "Don’t just follow the crowd. Let God transform your thinking so that you can live the life He has for you.",
    actionStep: "How can you renew your mind today? Spend time in prayer or reading the Bible to align your thoughts with God’s."
  },
  "Ephesians 6:10": {
    verse: "Finally, be strong in the Lord and in the strength of his might.",
    explanation: "You don’t have to rely on your own strength; you have the power of God behind you. Tap into His strength and rise above.",
    actionStep: "Face today with confidence, knowing that you have God's strength backing you up. Walk in that power!"
  },
  "Matthew 6:33": {
    verse: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
    explanation: "When you focus on what matters most—God and His righteousness—everything else will fall into place.",
    actionStep: "Today, put God first in your thoughts and actions. Trust that He’ll take care of the rest."
  },
  "Isaiah 40:31": {
    verse: "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.",
    explanation: "Waiting on the Lord isn’t about sitting still—it’s about trusting Him to renew your strength and empower you to keep going.",
    actionStep: "When you're feeling exhausted, take a moment to pause and trust God to renew your strength."
  },
  "Hebrews 11:1": {
    verse: "Now faith is the substance of things hoped for, the evidence of things not seen.",
    explanation: "Faith is believing in what we can’t see but trust is there. It’s the confidence in things hoped for, even when they’re not visible yet.",
    actionStep: "What are you hoping for today? Take a step of faith and trust God, even if you can’t see the whole picture."
  },
  "2 Corinthians 5:7": {
    verse: "For we walk by faith, not by sight.",
    explanation: "Living by faith means trusting in God even when we can’t see the outcome. It’s not about what we see, but about trusting His promises.",
    actionStep: "Today, take a step of faith in something that seems uncertain. Trust God with the outcome."
  },
  "Luke 6:38": {
    verse: "Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over, shall men give into your bosom.",
    explanation: "Generosity has its rewards. When you give freely, God returns it to you in abundance. It’s like divine math.",
    actionStep: "Today, be generous with your time, talent, or resources. Whether it’s small or big, give with a joyful heart."
  },
  "1 John 4:19": {
    verse: "We love him, because he first loved us.",
    explanation: "We are able to love God because He first loved us. Our love is a response to His incredible love.",
    actionStep: "Think about how you can express love back to God today. Show love to others as a reflection of His love for you."
  },
  "John 3:16": {
        verse: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        explanation: "This verse talks about the unconditional love God has for us and His sacrifice of sending Jesus to save us. It's the foundation of Christian faith.",
        actionStep: "Take a moment today to reflect on God's love for you. Maybe share this with someone who needs to hear it, or just remember: you're loved."
      },
      "Philippians 4:13": {
        verse: "I can do all this through him who gives me strength.",
        explanation: "This verse is a reminder that no matter what challenges you're facing, with Christ's strength, anything is possible.",
        actionStep: "When you're feeling weak, remember to lean on Christ. Take on a challenge today, no matter how small, with the mindset that you're not alone."
      },
      "Romans 8:28": {
        verse: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
        explanation: "This verse reassures us that, even when things go wrong, God is still working behind the scenes for our good and His purpose.",
        actionStep: "Reflect on a recent challenge. How can you see God's purpose working through it? Trust that even tough times are part of His plan."
      },
      "Jeremiah 29:11": {
        verse: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
        explanation: "This verse is about God's promise to give us a future full of hope. Even when we don’t understand, His plans are always good.",
        actionStep: "When you feel uncertain about the future, remember that God has a good plan for you. Take a step of faith toward your goals today."
      },
      "Isaiah 41:10": {
        verse: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
        explanation: "God’s promise of strength and presence is a comfort during difficult times. He is always with us to support and uphold us.",
        actionStep: "When you feel overwhelmed, remind yourself of God's presence. Speak this verse aloud and trust that He will give you strength."
      },
      "Matthew 6:33": {
        verse: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
        explanation: "This verse emphasizes the importance of prioritizing God in our lives. When we focus on Him, everything else falls into place.",
        actionStep: "Today, focus on putting God first in your actions. Seek His guidance and trust that He will provide for your needs."
      },
      "Proverbs 3:5-6": {
        verse: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
        explanation: "This verse encourages us to trust God's plan even when we don’t understand everything. His wisdom leads us in the right direction.",
        actionStep: "When faced with a decision, pray and trust God’s guidance. Surrender your own understanding and let Him direct your path."
      }
        
   // Event listener for fetching verse and explanation
document.getElementById("fetch-verse").addEventListener("click", function() {
  const verseInput = document.getElementById("verse-input").value.trim();
  const outputDiv = document.getElementById("verse-output");

  if (verseInput === "") {
    alert("Please enter a Bible verse (e.g., John 3:16).");
    return;
  }

  // Fetch the verse data from the simulated Bible data
  const verseData = bibleData[verseInput];

  if (verseData) {
    // Update the output fields with the verse, explanation, and action step
    document.getElementById("verse-text").textContent = verseData.verse;
    document.getElementById("verse-explanation").textContent = verseData.explanation;
    document.getElementById("action-step").textContent = verseData.actionStep;
    
    // Show the output
    outputDiv.style.display = 'block';
  } else {
    outputDiv.innerHTML = "<p>Sorry, that verse is not in our database. Try another one!</p>";
  }
});
