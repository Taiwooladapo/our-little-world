
"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [daysTogether, setDaysTogether] = useState(0);

  const [completedBucketItems, setCompletedBucketItems] = useState<number[]>([]);


  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const anniversary = Date.parse("2025-12-06T00:00:00Z");
    const visitDate = Date.parse("2026-12-22T00:00:00Z");

    const updateCountdown = () => {
      const now = Date.now();
      const difference = Math.max(0, visitDate - now);

      setDaysTogether(Math.floor((now - anniversary) / 86400000));

      setCountdown({
        days: Math.floor(difference / 86400000),
        hours: Math.floor((difference / 3600000) % 24),
        minutes: Math.floor((difference / 60000) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateCountdown();

    const timer = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(timer);
  }, []);
  
const memories = [
  {
    type: "photo",
    image: "/photos/memory-1.jpg",
    caption: "A special moment ♡",
    date: "Our memories",
  },
  {
    type: "photo",
    image: "/photos/memory-2.jpg",
    caption: "Endless smiles",
    date: "Our memories",
  },
  {
    type: "photo",
    image: "/photos/memory-3.jpg",
    caption: "Together, always",
    date: "Our memories",
  },
  {
    type: "photo",
    image: "/photos/memory-4.jpg",
    caption: "One for the memories",
    date: "Our memories",
  },
  {
    type: "video",
    image: "/videos/memory-video-1.mp4",
    caption: "Little moments, big feelings 🎥",
    date: "A beautiful memory",
  },
  {
    type: "video",
    image: "/videos/memory-video-2.mp4",
    caption: "The happiest little moments 🥹",
    date: "A beautiful memory",
  },
  {
    type: "video",
    image: "/videos/memory-video-3.mp4",
    caption: "Another moment together 🥹",
    date: "A beautiful memory",
  },
  {
    type: "video",
    image: "/videos/memory-video-4.mp4",
    caption: "Just us, just perfect ❤️",
    date: "A beautiful memory",
  },
];

  const letters = [
    {
      date: "2026-10-20",
      title: "One year of talking ❤️",
      author: "Mubarak",
      message: 'Happy 1 year to us babyyyyy. More to come. Love you forever ❤️❤️❤️'
    },
    {
      date: "2026-10-20",
      title: "One year of talking ❤️",
      author: "Farizah",
      message: 'Happy one year since to us since we started talking my loveee ❤️🥹💕. I am so so grateful for the day I met you I am grateful for you and all the beautiful memories we have shared and still going to share. I love you more every day and will always choose you. May Allah bless our love and future together. Ameen 🤲🏽❤️ Here’s to us, my favourite person! 🥂😘. Yayyyyyyyyyyyy🤭'
    },
    {
      date: "2026-10-05",
      title: "Reassurance ❤️",
      author: "Mubarak",
      message: 'Awwwwwn my baby, This is so sweet ❤️❤️❤️❤️❤️. I got you forever baby ❤️❤️❤️. I love you so so so so much'
    },
    {
      date: "2026-10-05",
      title: "Reassurance ❤️",
      author: "Farizah",
      message: 'My baby, my lover, my sweet boy🤭❤️. I just want to genuinely appreciate you for everything you have been doing for me since I came here. Honestly, thank you is not even enough 🥹❤️. You flew all the way from Dublin just to come and pick me up from the airport, and from that moment you have made sure I never felt alone or stranded. You made everything so much easier for me, took me shopping for the things I needed, stayed with me, and made sure I was comfortable. Even with my mood swings and all my emotional moments 😂, you still stayed patient with me, loved me and made me feel so cherished. I really appreciate the way you care for me and the way you always show up for me. I see all your efforts, even the ones you think are little, and I honestly don’t take any of them for granted. You have made coming to a new country feel so much easier because I know I have you ❤️ May God continue to bless you, protect you and reward you for everything you do for me. And I pray I will always be able to give you the same love and support you give me. I love you so much, baby❤️❤️❤️ Thank you for being you and for loving me the way you do. I would always be grateful pookie🥹🫶🏽'
    },
    {
      date: "2026-09-19",
      title: "Reassurance❤️",
      author: "Farizah",
      message: '🥺 Good morning babyyyy❤️❤️ First of alllll. I love you so so so so muchhhh❤️❤️❤️. Good morning my baby 🥹❤️. Awww, you are honestly such a sweetheart 😭❤️ This message made me smile so much. I am so grateful for you and for everything we have. And knowing we will be much closer soon honestly makes me so happy 🥹❤️ I can’t wait for all the time, memories and little moments we will finally get to share together. May Allah continue to bless us and make everything easy for us, Insha’Allah 🤲🏽❤️. I love you so much baby, and I can’t wait to have you closeee toooooo🤭❤️'
    },
    {
      date: "2026-09-19",
      title: "Reassurance ❤️",
      author: "Mubarak",
      message: 'Good morning my baby ❤️. I hope you slept well. I just wanted to remind you this morning how much I love you and how grateful I am for what we have. We have come this far together, and knowing that very soon the distance between us will be much smaller makes me so happy 🥹❤️. Having you in the UK while I’m in Ireland means more opportunities to see each other, spend proper time together, make memories and enjoy the little things we have been missing. It genuinely feels like we are entering a beautiful new chapter of our relationship. I want you to always feel secure in my love for you. I believe in us, I’m committed to us, and I’m excited about everything ahead of us, Insha’Allah. May Allah continue to strengthen our love, guide us and make everything we are hoping for easy for us. I love you so much and I can’t wait to have you closer to me. ❤️'
    },
    {
      date: "2026-08-29",
      title: "Reassurance ❤️",
      author: "Farizah",
      message: 'Good morning my love ❤️🥰 Thank you so so much for your beautiful words and prayers. They mean more to me than you know. I am truly grateful to have you by my side, and I pray Almighty Allah continues to bless and strengthen what we have. Ameen 🤲🏽❤️. I love and appreciate you so much, baby. 🥹❤️'
    },
    {
      date: "2026-08-29",
      title: "Reassurance ❤️",
      author: "Mubarak",
      message: 'Good morning my love ❤️🥰. I know the past couple of days have been stressful for you, especially with going to the hospital to see your aunt, while also having so much going on with your upcoming move to the UK for your Master’s. I just want you to know that I genuinely admire you for how caring and strong you’ve been through everything. I’m really proud of you baby ❤️. As September gets closer and you prepare for this new chapter, I want you to always remember that you have me by your side. I’ll be here for you in every capacity I can; to support you, listen to you, encourage you, make you laugh when you’re stressed, and celebrate every achievement with you. And when you get to the UK, I’ll be there to welcome you and I’ll make sure I come to see you consistently. So even though you’ll be starting a new chapter, you’ll never be alone in it ❤️🥰. I pray Almighty Allah makes your journey to the UK smooth, protects you, blesses your studies, and makes everything work out beautifully for you. May He grant your aunt healing and give your family strength🤲🏽❤️. And I pray Allah continues to bless what we have, keeps us strong through every distance and every new chapter, and makes us the best of lovers, best friends and companions to each other for many, many years to come. May He keep us together and make our love even stronger with time. Ameen ❤️. Have a beautiful day my baby. Please take care of yourself too. You’ve been doing so much, and you deserve to breathe, rest and smile. ❤️🥰'
    },
    {
      date: "2026-08-11",
      title: "Farizah's Birthday (Evening) 🎉",
      author: "Mubarak",
      message: 'Awwwn, this is so touching baby 🥹❤️. As I always say, I got you for life baby and we are in this journey together and forever. I can’t wait to welcome you to the UK. May Almighty Allah continue to spare our lives and make our journey together sweet and lovely. I love you forever my gorgeous baby ❤️❤️.'
    },
    {
      date: "2026-08-11",
      title: "Farizah's Birthday (Evening) 🎉",
      author: "Farizah",
      message: 'My favorite person ❤️, My heartbeat ❤️, The love of my life 🥹❤️. I honestly don’t even know where to start because thank you doesn’t feel like enough for everything you have been doing for me. Thank you so much for celebrating my birthday with me and for making me feel so loved, appreciated, and special. You made my day even more beautiful, and I am genuinely grateful. I am so thankful for the gift of you. Thank you for your love, your care, your thoughtfulness, and for always finding ways to make me smile. Having someone who makes me feel this loved and cherished is something I never take for granted. I pray that God Almighty continues to bless you beyond your expectations, protect you wherever you go, guide your steps, open doors for you, and give you peace and happiness. May He bless everything you do, increase you financially, and please continue to enrich your pocket for me because your baby has plenty plans for you 😂❤️. I pray that you will always have enough, that you will never lack, and that everything you desire will come to you at the right time. You deserve so many beautiful things, and I pray life gives you all of them. You are honestly amazing, and I want you to know that I appreciate you more than I sometimes know how to express. I love you so, so much. More than these few words can explain❤️. And right now, I just want to be with you. I want to hug you so tightly, rest in your arms, look at you, kiss you over and over again, and just enjoy being close to you. 🥹❤️ I miss you so badly. I love you endlessly, my baby. 🥹❤️'
    },
    {
      date: "2026-08-11",
      title: "Farizah's Birthday 🎉",
      author: "Farizah",
      message: 'My man my man my mannnnn ☺️❤️❤️❤️❤️. I am so happy to have you in my life too. I am grateful for all the moments shared and many more to come. I pray Almighty Allah continues to protect us Insha’Allah. I love you too my king ❤️❤️❤️❤️. Thank you for all you doo baby❤️❤️❤️'
    },
    {
      date: "2026-08-11",
      title: "Farizah's Birthday 🎉",
      author: "Mubarak",
      message: 'Happy 23rd birthday to my gorgeous girl, my love ❤️🎂🥰. I honestly feel so lucky to have you in my life. In the short time we’ve been together, you’ve become someone so special to me, and I’m grateful for every moment, every conversation, every laugh and every memory we’ve shared. You have such a beautiful heart, and I hope you never forget just how amazing you are. As you step into 23, I pray this year brings you everything your heart desires, and even more than you could imagine. I’ll always be here cheering you on, supporting you and reminding you how special you are. I wish I could be right there with you today to hold you, kiss you and celebrate you properly. ❤️ But until then, just know that you’re very much on my mind and in my heart. Happy birthday, my beautiful girl. I love you, and I’m so happy that I get to call you mine. ❤️🎉🥰'
    },
    {
      date: "2026-07-25",
      title: "Reassurance ❤️",
      author: "Farizah",
      message: 'Thank you so much for this message. It means a lot to me. I am really grateful that you listened to me and didn’t dismiss how I was feeling cause that’s always my biggest fear. Reading your words this morning reassures me that we can always talk through things together, and that means so much. Thank you for choosing me every day and for reminding me that I can always come to you. I will always do the same for you too. I will try to always be more honest, communicate better, so we can keep growing together. Thank you for making me feel loved and valued. I am grateful, and I pray God continues to strengthen what we have 🥰❤️ .I love you too baby ❤️'
    },
    {
      date: "2026-07-25",
      title: "Reassurance ❤️",
      author: "Mubarak",
      message: 'Good morning my love ❤️🥰. How was your night? I hope you slept well. Or should I ask if I made it into your dreams? 😌😂. I just want you to remember that you are special to me, and my love for you is something I choose every single day. No matter what happens, I’ll always choose you, stand by you, and keep trying to make what we have even better❤️. Baby, if there’s ever anything on your mind or something bothering you, please don’t keep it to yourself. Talk to me, let me know, and allow me to be there for you. I want to see you happy, I want to see you smile, and I want you to always feel loved and appreciated. I love you my baby ❤️ my wife to be ❤️🥰'
    },
    {
      date: "2026-06-28",
      title: "Vacation (Trip to Nigeria and back to Dublin)",
      author: "Mubarak",
      message: 'Awwwwwwwwwwwn the love of my life ❤️❤️❤️❤️❤️. I’m speechless at this moment. I love you forever baby and more of Allah’s goodness and mercy for us. ❤️❤️❤️❤️❤️❤️❤️. Gonna call when I land in Amsterdam inshaallah. Speak soon love'
    },
    {
      date: "2026-06-28",
      title: "Vacation (Trip to Nigeria and back to Dublin)",
      author: "Farizah",
      message: 'My baby, Oko miiii, Olowo ori mi, Idunnu miiii🙂‍↔️☺️❤️❤️❤️, I have just been thinking about everything these past few days and I honestly just want to say thank you. I know you came to Nigeria mainly for your sister’s wedding, but despite how busy everything was, you still made so much time for me. You came to see my family, spent time with them, and even took my brother and me out. It made me so happy seeing how intentional you were about us🥹. I also know how expensive things are here, but you never made me feel like it was a burden. You were always giving, always making sure I was okay, and always looking out for me. I noticed all of it, even the little things😁. My sweet mannnn. Thank you for loving me the way you do. Thank you for making me feel important and cared for. I really don’t take any of it for granted. I hope you know how much I appreciate you. I’m so proud to call you mine, and if I had to choose all over again, I definitely would still choose you every single time🙇🏽‍♀️. I love you so much, my babyyyyyyyyy. More than I probably say enough ❤️. Have a safe and stress free journey back to Dublin❤️❤️❤️. Insha’Allah more of Allah’s goodness and mercy awaits us❤️❤️❤️❤️'
    },
    {
      date: "2026-02-14",
      title: "Valentine's Day 🎉❤️",
      author: "Mubarak",
      message: 'Even though we’re apart, I feel so lucky to have you in my life. Being with you has been incredible, filled with laughter, meaningful conversations, and moments that already feel unforgettable. I’m so excited for all the adventures, memories, and joy we have ahead together. Happy Valentine’s Day, my love ❤️❤️. I love you forever ❤️❤️'
    },
    {
      date: "2026-02-14",
      title: "Valentine's Day 🎉❤️",
      author: "Farizah",
      message: 'Happy Valentine’s Day, my love ❤️. Today is just another reminder of how grateful I am to have you in my life. Loving you is one of the best things that has ever happened to me🙂‍↔️. You make my life calmer, happier, and so much brighter. Thank you so so much for your love and care. Sorry again about your gift🫠 I would learn to pay much attention going forward. I love you ❤️🥂'
    },
    {
      date: "2026-01-16",
      title: "Mubarak's Birthday 🎉",
      author: "Mubarak",
      message: 'My baby ❤️, Thank you for the birthday wishes. Those words really mean a lot to me. Cheers to many more celebrations ahead. I love you so much my love ❤️❤️❤️❤️❤️'
    },
    {
      date: "2026-01-16",
      title: "Mubarak's Birthday 🎉",
      author: "Farizah",
      message: 'My love, my sweet man, my baby, my heart, my sunshine, my king, my favorite person 🤭🥹❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️. Happy 28th birthday to the man who makes my world softer and brighter. Loving you is easy, sweet, beautiful, and full of joy every single day. You make me feel safe, cherished, and endlessly happy more and more everyday single day. I’m so grateful for the first day you came into my life, your kind heart, your gentle love, and the way you show up every day. May this new year bring you more peace, success, laughter, and all the good your heart desires and deserves. I’m so happy and grateful to walk through life with you 🥺❤️. I hope to celebrate many more amazing years with you in good health and everlasting wealth. Cheers to many more amazing years my king🥂❤️❤️❤️❤️❤️. I love you more than words can ever say 🥰🎉❤️❤️❤️❤️❤️❤️❤️. Have a lovely lovely day ahead. Yours, Assistant birthday girl /the literal love of your entire lifeeeeee🤭😌❤️. I love you so much babyyyyy❤️❤️❤️❤️❤️❤️❤️❤️❤️'
    },
    {
      date: "2026-01-01",
      title: "Happy New Year",
      author: "Mubarak",
      message: 'Happy New Year my sweetest girl, my beautiful damsel and angel. I’m glad our paths crossed and that we get to enter 2026 together. There shall be more wins and celebrations for us to share. I’m very excited to walk this journey of love together, and I pray it shall be an everlasting and peaceful journey for us. I love you soooooooo much. ❤️❤️❤️❤️❤️'
    },
    {
      date: "2026-01-01",
      title: "Happy New Year",
      author: "Farizah",
      message: 'Happy new year my king, my love, my baby, my handsome man, my sweet soul🤭❤️❤️❤️. I am really excited to step into 2026 with you. Thank you so much for coming when I least expected it and for now being my favorite person 🥹🤗. I love you so so so much. Cheers to a year filled with more laughter, more growth, peace of mind, happiness and more more love🥂❤️🙂‍↔️. I love you sooo much my sweet man🙇🏽‍♀️❤️❤️❤️❤️❤️',
    },
  ];

  const openWhenLetters = [
    {
      title: "Open when you miss me 🥺",
      message: `My baby ❤️

I wish I could be right beside you right now, holding you close and reminding you how much I love you. Even when we're in different cities, you're always in my heart. Remember that distance is only temporary. Every day brings us closer to the moments when we won't have to say goodbye so often. I love you endlessly, Farizah. ❤️`
    },
    {
      title: "Open when you're having a bad day 🤍",
      message: `My love ❤️

Take a deep breath, baby. Whatever today has brought, remember that you are strong, capable and so deeply loved. 
You don't have to have everything figured out today. Be kind to yourself. I'm always cheering you on.
Tomorrow is another opportunity for beautiful things. I love you. ❤️`
    },
    {
      title: "Open when you need a smile 😊",
      message: `Heyyyy my gorgeous girl 🤭❤️

Just a little reminder that somewhere in Dublin, there's a boy who is completely obsessed with you.
Your smile is one of my favourite things in this world. I hope this message gives you a reason to smile today.
Sending you the biggest hug and a million kisses. 😘`
    },
    {
      title: "Open when you can't sleep 🌙",
      message: `My sweetheart ❤️

I wish I could be beside you, holding you until you fall asleep.
For now, imagine me giving you the warmest hug. Put your worries aside, relax and get some rest.
May Allah watch over you, protect you and grant you peaceful sleep.

Goodnight, my love. 🤲🏽❤️`
    },
    {
      title: "Open when you need reassurance ❤️",
      message: `My Farizah ❤️

I want you to always remember that I choose you, every single day. I'm committed to what we're building together. I believe in us, our love and the beautiful future we're working towards.
You are loved, appreciated and valued. Always.
May Allah continue to bless our journey together. Ameen. ❤️`
    },
    {
      title: "Open on our anniversary 🥂",
      message: `Happy anniversary, my love! ❤️

Another beautiful chapter of our story.
I'm grateful for the day our paths crossed, every conversation, every memory and every moment that brought us here.
I look forward to celebrating many more anniversaries with you, Insha'Allah.

Here's to Mubarak and Farizah, today and always. ❤️`
    },
  ];

  const reasons = [
    "Your beautiful smile.",
    "The way you make me laugh.",
    "How caring you are.",
    "Your beautiful heart.",
    "The way you make distance feel smaller.",
    "How you always make me feel loved.",
    "Your infectious laughter.",
    "The way you listen to me.",
    "How thoughtful you are.",
    "Because you are my favourite person.",
    "The way you say my name.",
    "Your kindness to others.",
    "How you encourage me.",
    "The little things you do.",
    "Your beautiful eyes.",
    "How you make ordinary days special.",
    "The way we can talk for hours.",
    "Your sense of humour.",
    "How you understand me.",
    "Because I can be myself with you.",
    "Your patience with me.",
    "The way you make me feel safe.",
    "Your ambition and determination.",
    "How proud I am of you.",
    "Your sweet messages.",
    "The way you make me smile at my phone.",
    "How you remember the little details.",
    "Your hugs.",
    "The sound of your voice.",
    "How you brighten my day.",
    "Your beautiful personality.",
    "The way you care about my wellbeing.",
    "How we dream about our future.",
    "Our little inside jokes.",
    "The memories we are creating.",
    "How you make me feel appreciated.",
    "Your honesty.",
    "Your strength.",
    "The way you support my goals.",
    "How you make me excited for tomorrow.",
    "Your affectionate nature.",
    "The way you laugh at my jokes.",
    "How you make long-distance worthwhile.",
    "Your good morning messages.",
    "Your goodnight messages.",
    "The way you believe in us.",
    "How you make me feel understood.",
    "Your beautiful soul.",
    "The way you celebrate my wins.",
    "How you stand by me.",
    "Because you are my best friend.",
    "The way you make me feel special.",
    "Your little surprises.",
    "How you make me forget a stressful day.",
    "The way you express your love.",
    "Your excitement when we see each other.",
    "Our video calls.",
    "The way you make me feel at home.",
    "Your generosity.",
    "How you inspire me to grow.",
    "The way you look at me.",
    "Your cute habits.",
    "How you make me laugh when I need it most.",
    "The way you care about our future.",
    "Your beautiful mind.",
    "How you make every visit memorable.",
    "The way you trust me.",
    "Your warmth.",
    "How you make me feel lucky.",
    "Our shared dreams.",
    "The way you motivate me.",
    "Your gentle heart.",
    "How you make me feel wanted.",
    "The way you make even silence comfortable.",
    "Your lovely personality.",
    "How you bring happiness into my life.",
    "The way you choose us.",
    "Your courage.",
    "The little names you call me.",
    "How you make me look forward to seeing you.",
    "Your affection.",
    "The way you make me feel valued.",
    "How we grow together.",
    "Your beautiful smile after a long day.",
    "The way you make life sweeter.",
    "How you remember our special dates.",
    "Your loyalty.",
    "The way you make me feel hopeful.",
    "Our shared memories.",
    "How you make me want to be better.",
    "The way you love me.",
    "Because distance cannot change what I feel.",
    "Because I get to call you mine.",
    "Because every day with you is a blessing.",
    "Because I am grateful Allah brought you into my life.",
    "Because I want to keep choosing you.",
    "Because you are Farizah.",
    "Because you are you.",
    "And because I will always find another reason to love you."
  ];


  const loveStory = [
    {
      date: "6 December 2025",
      title: "The Beginning of Us ❤️",
      description: "The day our beautiful journey officially began. Little did we know how special this would become."
    },
    {
      date: "1 January 2026",
      title: "Our First New Year 🥂",
      description: "Stepping into a new year together, with more love, laughter and memories ahead."
    },
    {
      date: "14 February 2026",
      title: "Our Valentine's Day ❤️",
      description: "A little reminder that even across the distance, my heart is always with you."
    },
    {
      date: "22 December 2026",
      title: "Our Next Reunion 🥹",
      description: "Another countdown, another journey, and another beautiful moment of finally being together."
    },
  ];


  const bucketList = [
    "Watch the sunset together 🌅",
    "Go on a romantic dinner date 🥂",
    "Have a movie night at home 🍿",
    "Travel to a new country together ✈️",
    "Take matching Polaroid pictures 📸",
    "Cook a meal together 🍝",
    "Go on a spontaneous road trip 🚗",
    "Celebrate another anniversary ❤️",
    "Visit a beautiful beach 🏖️",
    "Have a picnic together 🧺",
    "Go bowling together 🎳",
    "Spend a whole day exploring a new city 🏙️",
    "Watch our favourite film together 🎬",
    "Make a scrapbook of our memories 📖",
    "Take a couple's holiday 🌍",
    "Dance together in the living room 💃",
    "Visit a Christmas market 🎄",
    "Build a home filled with love 🏡",
    "Create more beautiful memories together 🥹",
    "Keep choosing each other, every day ♡",
  ];



  return (
    <main className="min-h-screen bg-[#faf6f1] text-[#59463e]">

      {/* Navigation */}
      <nav className="flex flex-wrap justify-between items-center px-6 md:px-12 py-6 gap-4">
        <h1 className="text-2xl font-serif">
           Mubarak & Farizah ♡
        </h1>

        <div className="flex flex-wrap gap-5 text-sm">
          <a href="#home" className="hover:text-[#b47d76]">Home</a>
          <a href="#countdown" className="hover:text-[#b47d76]">Next Visit</a>
          <a href="#memories" className="hover:text-[#b47d76]">Memories</a>
        </div>
      </nav>

      {/* Welcome */}
      <section id="home" className="max-w-4xl mx-auto px-6 py-20 text-center">

        <p className="uppercase tracking-[0.3em] text-xs mb-6">
          Two hearts, one beautiful story
        </p>

        <h2 className="text-5xl md:text-7xl font-serif mb-8">
          Our Little World
        </h2>

        <p className="text-lg max-w-xl mx-auto leading-8">
          Different cities, countless memories,
          and a love story that continues to grow.
        </p>

        <p className="mt-8 text-sm italic">
           Mubarak & Farizah · Since 06.12.2025
        </p>
      </section>

      {/* Countdown */}
      <section id="countdown" className="max-w-3xl mx-auto px-6 py-16 text-center">

        <p className="uppercase tracking-widest text-xs mb-4">
          The next time we see each other
        </p>

        <h2 className="text-4xl font-serif mb-3">
          Counting down to you ♡
        </h2>

        <p className="text-sm mb-10">
          22 December 2026 · Dublin to Chester
        </p>

        <div className="grid grid-cols-4 gap-3">

          {[
            { label: "Days", value: countdown.days },
            { label: "Hours", value: countdown.hours },
            { label: "Minutes", value: countdown.minutes },
            { label: "Seconds", value: countdown.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-4 shadow-sm"
            >
              <p className="text-3xl md:text-5xl font-serif">
                {String(item.value).padStart(2, "0")}
              </p>

              <p className="text-xs mt-2 uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}

        </div>

        <p className="mt-8 italic font-serif text-xl">
          Every journey is worth it when the destination is you.
        </p>

      </section>

      {/* Memories Gallery */}
<section id="memories" className="max-w-5xl mx-auto px-6 py-20">

  <div className="text-center mb-12">
    <p className="uppercase tracking-widest text-xs mb-3">
      Little pieces of forever
    </p>

    <h2 className="text-4xl font-serif">
      Our Memories ♡
    </h2>

    <p className="mt-4 text-sm">
      Every picture tells a story.
    </p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mx-auto">

    {memories.map((memory) => (
      <div
        key={memory.image}
        className="bg-white p-2 pb-4 shadow-md hover:scale-105 transition duration-300 w-full min-w-0"
      >
        {memory.type === "video" ? (
          <video
            src={memory.image}
            controls
            playsInline
            preload="metadata"
            className="w-full h-40 object-contain bg-[#eee5dc] rounded-md"
          />
        ) : (
          <img
            src={memory.image}
            alt={memory.caption}
            className="w-full h-40 object-contain bg-[#eee5dc] rounded-md"
          />
        )}

        <p className="text-center font-serif text-sm mt-4">
          {memory.caption}
        </p>

        <p className="text-center text-xs text-gray-400 mt-1">
          {memory.date}
        </p>
      </div>
    ))}

  </div>

      </section>


{/* LOVE LETTERS SECTION */}
<section id="love-letters" className="py-16 px-6 bg-rose-50 text-gray-800">
  <div className="max-w-3xl mx-auto">
    <div className="text-center mb-10">
      <p className="text-rose-500 tracking-widest uppercase text-sm">
        Words from our hearts
      </p>
      <h2 className="text-4xl font-serif mt-3">
        Our Love Letters 💌
      </h2>
      <p className="text-gray-600 mt-3">
        Every letter holds a piece of our story.
      </p>
    </div>

    <div className="space-y-5">
      {[...letters]
        .sort((a, b) => b.date.localeCompare(a.date))
        .map((letter, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm p-6">
            <p className="text-sm text-rose-500">
              {new Date(letter.date + "T12:00:00").toLocaleDateString(
                "en-GB",
                { day: "numeric", month: "long", year: "numeric" }
              )}
            </p>

            <h3 className="text-xl font-serif mt-2">
              {letter.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              From: {letter.author}
            </p>

            <details className="mt-4">
              <summary className="cursor-pointer text-rose-600 font-medium">
                Read letter 💌
              </summary>

              <div className="mt-4 whitespace-pre-wrap leading-8 text-gray-700">
                {letter.message}
              </div>
            </details>
          </div>
        ))}
    </div>
  </div>
</section>


      {/* OPEN WHEN LETTERS */}
      <section
        id="open-when"
        className="py-20 px-6 bg-[#faf6f1] text-[#59463e]"
      >
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12">
            <p className="uppercase tracking-widest text-xs mb-3">
              A little something for every moment
            </p>

            <h2 className="text-4xl font-serif">
              Open When... 💌
            </h2>

            <p className="mt-4 text-sm">
              Little letters for whenever your heart needs them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {openWhenLetters.map((letter, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="text-3xl mb-4">💌</div>

                <h3 className="font-serif text-xl mb-4">
                  {letter.title}
                </h3>

                <details>
                  <summary className="cursor-pointer text-sm text-[#b47d76] font-medium">
                    Open my letter ♡
                  </summary>

                  <div className="mt-5 whitespace-pre-wrap leading-8 text-sm">
                    {letter.message}
                  </div>
                </details>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* 100 REASONS I LOVE FARIZAH */}
      <section
        id="reasons"
        className="py-20 px-6 bg-rose-50 text-[#59463e]"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-widest text-xs mb-3">
            A hundred little reminders
          </p>

          <h2 className="text-4xl font-serif mb-4">
            100 Reasons I Love Farizah ❤️
          </h2>

          <p className="text-sm mb-10">
            And somehow, even 100 won't be enough.
          </p>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <p className="text-xs uppercase tracking-widest text-[#b47d76] mb-4">
              Reason <span id="reason-number">1</span> of 100
            </p>

            <p id="reason-text" className="font-serif text-2xl min-h-20">
              Your beautiful smile.
            </p>

            <button
              onClick={() => {
                const number = document.getElementById("reason-number");
                const text = document.getElementById("reason-text");

                if (!number || !text) return;

                const current = Number(number.textContent);
                const next = current >= reasons.length ? 1 : current + 1;

                number.textContent = String(next);
                text.textContent = reasons[next - 1];
              }}
              className="mt-8 px-7 py-3 rounded-full bg-[#b47d76] text-white text-sm hover:opacity-90 transition"
            >
              Next reason ♡
            </button>
          </div>

          <p className="text-xs mt-6 italic">
            One reason at a time, a lifetime of love.
          </p>
        </div>
      </section>


      {/* OUR LOVE STORY TIMELINE */}
      <section
        id="love-story"
        className="py-20 px-6 bg-[#faf6f1] text-[#59463e]"
      >
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-14">
            <p className="uppercase tracking-widest text-xs mb-3">
              Every moment brought us here
            </p>

            <h2 className="text-4xl font-serif">
              Our Love Story ♡
            </h2>

            <p className="mt-4 text-sm">
              A little timeline of our favourite journey.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-3 sm:left-1/2 top-0 bottom-0 w-px bg-[#d9b5ad]" />

            <div className="space-y-10">
              {loveStory.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex ${
                    index % 2 === 0
                      ? "sm:flex-row"
                      : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="hidden sm:block sm:w-1/2" />

                  <div className="absolute left-3 sm:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#b47d76] border-4 border-[#faf6f1] z-10" />

                  <div className="pl-12 sm:pl-0 sm:w-1/2">
                    <div className="bg-white rounded-2xl p-6 shadow-sm sm:mx-8">
                      <p className="text-xs tracking-widest text-[#b47d76] mb-2">
                        {event.date}
                      </p>

                      <h3 className="font-serif text-xl mb-3">
                        {event.title}
                      </h3>

                      <p className="text-sm leading-7">
                        {event.description}
                      </p>

                      <p className="mt-4 text-lg">♡</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* OUR BUCKET LIST */}
      <section
        id="bucket-list"
        className="py-20 px-6 bg-rose-50 text-[#59463e]"
      >
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-12">
            <p className="uppercase tracking-widest text-xs mb-3">
              Adventures waiting for us
            </p>

            <h2 className="text-4xl font-serif">
              Our Bucket List ♡
            </h2>

            <p className="mt-4 text-sm">
              So many little dreams, so many memories to make.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm">Our completed adventures</p>
              <p className="text-sm text-[#b47d76] font-medium">
                {completedBucketItems.length} / {bucketList.length}
              </p>
            </div>

            <div className="w-full bg-[#f3e7e3] rounded-full h-2 mb-8">
              <div
                className="bg-[#b47d76] h-2 rounded-full transition-all"
                style={{
                  width: `${(completedBucketItems.length / bucketList.length) * 100}%`
                }}
              />
            </div>

            <div className="space-y-4">
              {bucketList.map((item, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 cursor-pointer text-sm leading-6"
                >
                  <input
                    type="checkbox"
                    checked={completedBucketItems.includes(index)}
                    onChange={() => {
                      setCompletedBucketItems((previous) =>
                        previous.includes(index)
                          ? previous.filter((item) => item !== index)
                          : [...previous, index]
                      );
                    }}
                    className="accent-[#b47d76] w-4 h-4 shrink-0"
                  />

                  <span
                    className={
                      completedBucketItems.includes(index)
                        ? "line-through opacity-50"
                        : ""
                    }
                  >
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <p className="text-center text-xs italic mt-6">
            One day, we'll look back at all the things we've done together. ❤️
          </p>

        </div>
      </section>


      {/* Footer */}
      <footer className="text-center py-12 border-t border-[#eadfd5]">
        <p className="font-serif text-2xl">
           Mubarak & Farizah ♡
        </p>

        <p className="text-xs mt-3">
          Made with love, just for us.
        </p>
      </footer>

    </main>
  );
}
