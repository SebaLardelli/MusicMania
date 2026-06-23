"use strict";

const datosOpcionesPorBanda = {
    "Guns and Roses": [
        "Sweet Child O Mine",
        "November Rain",
        "Paradise City",
        "Welcome to the Jungle"
    ],
    "Kiss": [
        "I Was Made For Loving You",
        "Rock and Roll All Nite",
        "Detroit Rock City",
        "I Love It Loud"
    ],
    "Oasis": [
        "Wonderwall",
        "Don't Look Back in Anger",
        "Champagne Supernova",
        "Live Forever"
    ],
    "Van Halen": [
        "Jump",
        "Panama",
        "Hot for Teacher",
        "Runnin with the Devil"
    ],
    "Queen": [
        "Another One Bites The Dust",
        "Bohemian Rhapsody",
        "We Will Rock You",
        "Don't Stop Me Now"
    ],
    "Deep Purple": [
        "Smoke On The Water",
        "Highway Star",
        "Child in Time",
        "Hush"
    ],
    "Europe": [
        "The Final Countdown",
        "Carrie",
        "Rock the Night",
        "Cherokee"
    ],
    "The Police": [
        "Roxanne",
        "Every Breath You Take",
        "Message in a Bottle",
        "Don't Stand So Close to Me"
    ],
    "Journey": [
        "Any Way You Want It",
        "Don't Stop Believin",
        "Separate Ways",
        "Open Arms"
    ],
    "Billy Idol": [
        "Dancing With Myself",
        "White Wedding",
        "Rebel Yell",
        "Eyes Without a Face"
    ],
    "Metallica": [
        "Enter Sandman",
        "Nothing Else Matters",
        "Master of Puppets",
        "One"
    ],
    "Iron Maiden": [
        "The Trooper",
        "Run to the Hills",
        "Fear of the Dark",
        "Hallowed Be Thy Name"
    ],
    "Black Sabbath": [
        "Iron Man",
        "Paranoid",
        "War Pigs",
        "Children of the Grave"
    ],
    "Judas Priest": [
        "Breaking The Law",
        "Living After Midnight",
        "You've Got Another Thing Comin",
        "Painkiller"
    ],
    "Korn": [
        "Freak on a Leash",
        "Blind",
        "Falling Away from Me",
        "Coming Undone"
    ],
    "Megadeth": [
        "Peace Sells",
        "Symphony of Destruction",
        "Hangar 18",
        "Tornado of Souls"
    ],
    "Slipknot": [
        "Psychosocial",
        "Duality",
        "Before I Forget",
        "Wait and Bleed"
    ],
    "Bruno Mars": [
        "24K Magic",
        "Uptown Funk",
        "Just the Way You Are",
        "Locked Out of Heaven"
    ],
    "Coldplay": [
        "Viva La Vida",
        "Yellow",
        "The Scientist",
        "Fix You"
    ],
    "Daft Punk": [
        "Get Lucky",
        "One More Time",
        "Harder Better Faster Stronger",
        "Around the World"
    ],
    "Justin Bieber": [
        "Sorry",
        "Baby",
        "Love Yourself",
        "Peaches"
    ],
    "Maroon 5": [
        "Animals",
        "Sugar",
        "Moves Like Jagger",
        "Girls Like You"
    ],
    "Ed Sheeran": [
        "Shape Of You",
        "Perfect",
        "Thinking Out Loud",
        "Castle on the Hill"
    ],
    "Drake": [
        "Hotline Bling",
        "God's Plan",
        "One Dance",
        "In My Feelings"
    ],
    "Sia": [
        "Chandelier",
        "Cheap Thrills",
        "Elastic Heart",
        "Unstoppable"
    ],
    "Michael Jackson": [
        "Billie Jean",
        "Thriller",
        "Beat It",
        "Smooth Criminal"
    ],
    "Bee Gees": [
        "Stayin Alive",
        "How Deep Is Your Love",
        "Night Fever",
        "Tragedy"
    ],
    "PSY": [
        "Gangnam Style",
        "Gentleman",
        "Daddy",
        "New Face"
    ],
    "Martin Garrix": [
        "High On Life",
        "Animals",
        "Scared to Be Lonely",
        "In the Name of Love"
    ],
    "David Guetta": [
        "Dangerous",
        "Titanium",
        "When Love Takes Over",
        "Memories"
    ],
    "Skrillex": [
        "Bangarang",
        "Scary Monsters and Nice Sprites",
        "First of the Year",
        "Where Are U Now"
    ],
    "Calvin Harris": [
        "Summer",
        "Feel So Close",
        "This Is What You Came For",
        "One Kiss"
    ],
    "Avicii": [
        "Waiting for Love",
        "Wake Me Up",
        "The Nights",
        "Levels"
    ],
    "Steve Aoki": [
        "Just Hold On",
        "Pursuit of Happiness",
        "Boneless",
        "Waste It on Me"
    ],
    "Super Mario Bros": [
        "Tema de Super Mario Bros",
        "Tema de Mario Kart",
        "Tema de Super Mario World",
        "Tema de Super Mario 64"
    ],
    "GTA San Andreas": [
        "Tema de GTA San Andreas",
        "Tema de GTA Vice City",
        "Tema de GTA V",
        "Tema de GTA III"
    ],
    "Skyrim": [
        "Tema de Skyrim",
        "Tema de Oblivion",
        "Tema de Morrowind",
        "Tema de Dragonborn"
    ],
    "Minecraft": [
        "Sweden",
        "Subwoofer Lullaby",
        "Haggstrom",
        "Mice on Venus"
    ],
    "Fortnite": [
        "Tema de Fortnite",
        "Emote Default Dance",
        "The End Event",
        "OG Lobby Music"
    ],
    "Mortal Kombat": [
        "Tema de Mortal Kombat",
        "Techno Syndrome",
        "Liu Kang Theme",
        "Scorpion Theme"
    ],
    "Tetris": [
        "Tema de Tetris",
        "Korobeiniki",
        "Tetris Type A",
        "Tetris Type B"
    ],
    "The Legend of Zelda": [
        "Tema de Zelda",
        "Song of Storms",
        "Gerudo Valley",
        "Lost Woods"
    ],
    "Harry Potter": [
        "Tema de Harry Potter",
        "Hedwig's Theme",
        "Leaving Hogwarts",
        "Double Trouble"
    ],
    "Jurassic Park": [
        "Tema de Jurassic Park",
        "Welcome to Jurassic Park",
        "Journey to the Island",
        "The Raptor Attack"
    ],
    "Pokemon": [
        "Tema de Pokemon",
        "Pokemon Center",
        "Gym Battle",
        "Wild Pokemon Battle"
    ],
    "Los Simpsons": [
        "Tema de Los Simpsons",
        "The Simpsons Main Title",
        "Halloween Theme",
        "End Credits"
    ],
    "Ghostbusters": [
        "Tema de Ghostbusters",
        "Ghostbusters Song",
        "On Our Own",
        "Savage Streets"
    ],
    "Stranger Things": [
        "Tema de Stranger Things",
        "Kids",
        "The Upside Down",
        "Eleven"
    ],
    "Star Wars": [
        "Marcha Imperial",
        "Main Theme",
        "Cantina Band",
        "Duel of the Fates"
    ],
    "Indiana Jones": [
        "Tema de Indiana Jones",
        "Raiders March",
        "The Map Room",
        "Marion's Theme"
    ],
    "He-Man": [
        "Masters of the Universe",
        "He-Man Opening Theme",
        "Skeletor Theme",
        "Battle Cat"
    ],
    "Top Gun": [
        "Danger Zone",
        "Take My Breath Away",
        "Mighty Wings",
        "Top Gun Anthem"
    ]
};
