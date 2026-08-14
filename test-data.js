const IMG = "assets/test1-images/";
const TOTAL_POINTS = 60;

const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image, points: 1 });

const sections = [
  { key: "A", label: "A", title: "Listen and circle the correct answer.", note: "Listen carefully and choose True or False.", points: 6, audio: "assets/audio-a.mp3", questions: [
    choice("A1", "1.", ["T", "F"], "F", "Statement 1 is false according to the recording."),
    choice("A2", "2.", ["T", "F"], "T", "Statement 2 is true according to the recording."),
    choice("A3", "3.", ["T", "F"], "F", "Statement 3 is false according to the recording."),
    choice("A4", "4.", ["T", "F"], "T", "Statement 4 is true according to the recording."),
    choice("A5", "5.", ["T", "F"], "F", "Statement 5 is false according to the recording."),
    choice("A6", "6.", ["T", "F"], "T", "Statement 6 is true according to the recording.")
  ]},
  { key: "B", label: "B", title: "Unscramble the words.", note: "Use every letter once to make the correct word.", points: 8, questions: [
    input("B1", "1. k d s i", ["disk"], "The letters form disk."), input("B2", "2. i v l e", ["veil"], "The letters form veil."),
    input("B3", "3. t g y e i h", ["eighty"], "The letters form eighty."), input("B4", "4. r a s s t", ["stars"], "The letters form stars."),
    input("B5", "5. e k p c s", ["speck"], "The letters form speck."), input("B6", "6. n s i r e", ["reins"], "The letters form reins."),
    input("B7", "7. w d l e l d e", ["dwelled"], "The letters form dwelled."), input("B8", "8. x g l a y a", ["galaxy"], "The letters form galaxy.")
  ]},
  { key: "C", label: "C", title: "Complete the sentences. Write the correct word or words.", note: "Use each picture to identify the missing space word.", points: 4, questions: [
    input("C1", "1. You can see the ___ at night.", ["moon", "the moon"], "The picture shows the moon, which is visible in the night sky.", IMG + "c-1.png"),
    input("C2", "2. Earth is a part of the ___.", ["solar system", "the solar system"], "Earth is one of the planets in the solar system.", IMG + "c-2.png"),
    input("C3", "3. The ___ had a long, bright tail.", ["comet"], "A comet can appear with a long, bright tail.", IMG + "c-3.png"),
    input("C4", "4. We went to the ___ to learn about the night sky.", ["observatory"], "An observatory is a place where people study objects in the sky.", IMG + "c-4.png")
  ]},
  { key: "D", label: "D", title: "Write the words in the correct order to make sentences.", note: "Use every word and write a complete sentence.", points: 3, questions: [
    input("D1", "1. tomorrow / rain / It / will", ["It will rain tomorrow", "It will rain tomorrow."], "Place the subject first, followed by will + base verb: It will rain tomorrow."),
    input("D2", "2. will / She / look at / tonight / the stars", ["She will look at the stars tonight", "She will look at the stars tonight."], "Use subject + will + base verb phrase: She will look at the stars tonight."),
    input("D3", "3. galaxy / to / I / someday / travel / will / another", ["I will travel to another galaxy someday", "I will travel to another galaxy someday."], "The correct order is: I will travel to another galaxy someday.")
  ]},
  { key: "E", label: "E", title: "Complete the sentences. Use will or the simple present.", note: "Use the verbs in the box. One verb is not needed.", points: 3, wordBank: ["visit", "cook", "have", "carry"], questions: [
    input("E1", "1. I ___ the moon someday.", ["will visit"], "Someday refers to a future event, so use will visit."),
    input("E2", "2. We ___ a great vacation this summer.", ["will have"], "This summer refers to a future plan, so use will have."),
    input("E3", "3. She always ___ dinner.", ["cooks"], "Always shows a routine. With she, the simple-present verb takes -s: cooks.")
  ]},
  { key: "F", label: "F", title: "Write the words in the correct order. Then match the sentences to the pictures.", note: "Write each sentence, then choose picture a, b, or c.", points: 6, sectionImage: IMG + "f-strip.png", questions: [
    { id: "F1", type: "paired", prompt: "1. astronaut / He / an / someday / will / be", points: 2, parts: [
      { key: "sentence", label: "Complete sentence", type: "input", answers: ["He will be an astronaut someday", "He will be an astronaut someday."], explanation: "The correct order is: He will be an astronaut someday." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c"], answers: ["a"], explanation: "Picture a shows the boy thinking about becoming an astronaut." }
    ]},
    { id: "F2", type: "paired", prompt: "2. will / Africa / next / go / She / to / year", points: 2, parts: [
      { key: "sentence", label: "Complete sentence", type: "input", answers: ["She will go to Africa next year", "She will go to Africa next year."], explanation: "The correct order is: She will go to Africa next year." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c"], answers: ["c"], explanation: "Picture c shows her reading about Africa." }
    ]},
    { id: "F3", type: "paired", prompt: "3. She / photos / vacation / will / on / take / her", points: 2, parts: [
      { key: "sentence", label: "Complete sentence", type: "input", answers: ["She will take photos on her vacation", "She will take photos on her vacation."], explanation: "The correct order is: She will take photos on her vacation." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c"], answers: ["b"], explanation: "Picture b shows her holding a camera." }
    ]}
  ]},
  { key: "G", label: "G", title: "Listen and choose the correct answer.", note: "Listen to each item and select the word you hear.", points: 5, audio: "assets/audio-g.mp3", questions: [
    choice("G1", "1.", ["astronomer", "core", "diameter"], "core", "The recording says core, the original choice B."),
    choice("G2", "2.", ["gravity", "orbit", "distance"], "gravity", "The recording says gravity, the original choice A."),
    choice("G3", "3.", ["ignorant", "arrogant", "unique"], "unique", "The recording says unique, the original choice C."),
    choice("G4", "4.", ["matter", "surface", "bodies"], "matter", "The recording says matter, the original choice A."),
    choice("G5", "5.", ["inner", "outer", "diameter"], "outer", "The recording says outer, the original choice B.")
  ]},
  { key: "H", label: "H", title: "Complete the sentences.", note: "Use the words in the box. One word is not needed.", points: 5, wordBank: ["distance", "surface", "space probe", "bodies", "telescope", "craters"], questions: [
    input("H1", "Scientists have a new ___ to explore the solar system.", ["space probe"], "A space probe is an unmanned spacecraft used to explore space."),
    input("H2", "It will travel a very big ___ from Earth.", ["distance"], "Distance is the amount of space between two places."),
    input("H3", "It will get information about different ___, such as asteroids and comets.", ["bodies"], "Asteroids and comets are celestial bodies."),
    input("H4", "It will also go to Mars and take pictures of its ___.", ["surface"], "The outer part of a planet is its surface."),
    input("H5", "Mars has several big ___, and scientists want to study them.", ["craters"], "Craters are large bowl-shaped holes on a planet's surface.")
  ]},
  { key: "I", label: "I", title: "Complete the sentences. Then match them to the pictures.", note: "Write the missing word, then choose picture a, b, c, or d.", points: 8, sectionImage: IMG + "i-strip.png", questions: [
    { id: "I1", type: "paired", prompt: "1. An ___ studies galaxies, stars, and other things in space.", points: 2, parts: [
      { key: "word", label: "Missing word", type: "input", answers: ["astronomer"], explanation: "An astronomer studies objects in space." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["c"], explanation: "Picture c shows an astronomer using a telescope." }
    ]},
    { id: "I2", type: "paired", prompt: "2. Jupiter's ___ is much bigger than Earth's.", points: 2, parts: [
      { key: "word", label: "Missing word", type: "input", answers: ["diameter"], explanation: "Diameter is the distance through the center of a circle or sphere." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["b"], explanation: "Picture b illustrates a diameter through the center." }
    ]},
    { id: "I3", type: "paired", prompt: "3. Do any planets have an ___ that's a perfect circle?", points: 2, parts: [
      { key: "word", label: "Missing word", type: "input", answers: ["orbit"], explanation: "An orbit is the path one object follows around another object in space." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["d"], explanation: "Picture d shows an orbit." }
    ]},
    { id: "I4", type: "paired", prompt: "4. If you two boys don't have two books, you can ___ one.", points: 2, parts: [
      { key: "word", label: "Missing word", type: "input", answers: ["share"], explanation: "Share means use or have something together." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["a"], explanation: "Picture a shows two boys sharing one book." }
    ]}
  ]},
  { key: "J", label: "J", title: "Look and write sentences. Use If and will.", note: "Use the picture cues and write a complete first conditional sentence.", points: 4, questions: [
    input("J1", "1. he / becomes an astronaut / go to the moon", ["If he becomes an astronaut he will go to the moon", "If he becomes an astronaut, he will go to the moon", "If he becomes an astronaut, he will go to the moon."], "Use If + present simple, then will + base verb: If he becomes an astronaut, he will go to the moon.", IMG + "j-1.png"),
    input("J2", "2. she / sick tomorrow / stay home from school", ["If she is sick tomorrow she will stay home from school", "If she is sick tomorrow, she will stay home from school", "If she is sick tomorrow, she will stay home from school."], "Use is in the if-clause and will stay in the result clause.", IMG + "j-2.png"),
    input("J3", "3. They / see the stars in the sky / no clouds tonight", ["They will see the stars in the sky if there are no clouds tonight", "They will see the stars in the sky if there are no clouds tonight."], "The result comes first here: They will see the stars in the sky if there are no clouds tonight.", IMG + "j-3.png"),
    input("J4", "4. You / see Venus / look at the sky tonight at 7:30", ["You will see Venus if you look at the sky tonight at 7:30", "You will see Venus if you look at the sky tonight at 7:30."], "Use will see for the result and present simple look after if.", IMG + "j-4.png")
  ]},
  { key: "K", label: "K", title: "Complete the sentences.", note: "Use the clauses in the box. One clause is not needed.", points: 4, wordBank: ["If I eat a lot of junk food", "If it isn't too cold", "If I study hard", "If I practice a lot", "If the sky is clear"], questions: [
    input("K1", "1. ___, I will do well on the test.", ["If I study hard"], "Studying hard can lead to doing well on a test."),
    input("K2", "2. ___, I will see some planets through the telescope.", ["If the sky is clear"], "A clear sky makes it possible to see planets through a telescope."),
    input("K3", "3. I will play basketball better ___.", ["if I practice a lot"], "Practice can improve basketball skills."),
    input("K4", "4. They will sit outside ___.", ["if it isn't too cold", "if it is not too cold"], "They can sit outside when the weather is not too cold.")
  ]},
  { key: "L", label: "L", title: "Complete the sentences. Write will or won't.", note: "Decide whether the result will happen or will not happen.", points: 4, questions: [
    choice("L1", "1. If I want to study in America, I ___ need to speak English.", ["will", "won't"], "will", "Speaking English will be necessary for studying in America."),
    choice("L2", "2. If she uses a telescope, she ___ see some asteroids and comets tonight.", ["will", "won't"], "will", "Using a telescope will help her see objects in the night sky."),
    choice("L3", "3. If they go to sleep at 8:00 p.m., they ___ see the comet at midnight.", ["will", "won't"], "won't", "If they are asleep, they will not see the comet at midnight."),
    choice("L4", "4. If we don't leave home now, we ___ catch our train.", ["will", "won't"], "won't", "Not leaving now means they will miss the train.")
  ]}
];
