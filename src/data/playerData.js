export const playerData = {
  // Basic Info
  name: "Hardik Pandya",
  image: "/images/Hardik Pandya.jpg",
  role: "All-Rounder",
  team: "India",
  nationality: "Indian",
  bio: "Dynamic all-rounder known for explosive batting and effective bowling. A game-changer in limited-overs cricket.",
  overallRating: 87,

  // Gamification System - Format Specific
  gamification: {
    // Format-specific progression data
    formats: {
      T20: {
        level: 69,
        xp: 690,
        xpToNextLevel: 10,
        progress: 98.6,
        abilities: ["Power Hitting", "Death Bowling", "Quick Running", "T20 Specialist"],
        mastery: "Expert",
        
        skillTree: {
          batting: {
            level: 5,
            skills: ["Power Shots", "Innovative Shots", "Quick Singles", "Finishing", "Super Over Specialist"],
            unlocked: ["Power Shots", "Innovative Shots", "Quick Singles", "Finishing"],
            nextSkill: "Super Over Specialist"
          },
          bowling: {
            level: 4,
            skills: ["Yorker", "Slower Ball", "Bouncer", "Death Overs", "Knuckleball"],
            unlocked: ["Yorker", "Slower Ball", "Bouncer", "Death Overs"],
            nextSkill: "Knuckleball"
          },
          fielding: {
            level: 5,
            skills: ["Quick Reflex", "Direct Hits", "Boundary Saves", "Acrobatic Catches", "Run-out Specialist"],
            unlocked: ["Quick Reflex", "Direct Hits", "Boundary Saves", "Acrobatic Catches"],
            nextSkill: "Run-out Specialist"
          }
        },

        performance: {
          form: 8.8,
          consistency: 7.9,
          impact: 9.4,
          fitness: 8.7
        }
      },

      ODI: {
        level: 60,
        xp: 600,
        xpToNextLevel: 10,
        progress: 98.4,
        abilities: ["Middle Overs", "Partnership Building", "Economy Bowling", "ODI Specialist"],
        mastery: "Advanced",
        
        skillTree: {
          batting: {
            level: 4,
            skills: ["Rotation", "Building Innings", "Power Hitting", "Anchor Role", "Chase Master"],
            unlocked: ["Rotation", "Building Innings", "Power Hitting", "Anchor Role"],
            nextSkill: "Chase Master"
          },
          bowling: {
            level: 4,
            skills: ["Line & Length", "Middle Overs", "Powerplay", "Death Bowling", "Swing Master"],
            unlocked: ["Line & Length", "Middle Overs", "Powerplay", "Death Bowling"],
            nextSkill: "Swing Master"
          },
          fielding: {
            level: 4,
            skills: ["Safe Hands", "Ground Fielding", "Catching", "Positioning", "Long Innings"],
            unlocked: ["Safe Hands", "Ground Fielding", "Catching", "Positioning"],
            nextSkill: "Long Innings"
          }
        },

        performance: {
          form: 8.2,
          consistency: 8.5,
          impact: 8.8,
          fitness: 8.9
        }
      },

      Test: {
        level: 59,
        xp: 590,
        xpToNextLevel: 10,
        progress: 98.3,
        abilities: ["Patience", "Stamina", "Technical Batting", "Test Specialist"],
        mastery: "Intermediate",
        
        skillTree: {
          batting: {
            level: 3,
            skills: ["Defense", "Leave Ball", "Building Innings", "Counter Attack", "Double Century"],
            unlocked: ["Defense", "Leave Ball", "Building Innings"],
            nextSkill: "Counter Attack"
          },
          bowling: {
            level: 3,
            skills: ["Consistency", "Reverse Swing", "Seam Movement", "Long Spells", "Five Wickets"],
            unlocked: ["Consistency", "Reverse Swing", "Seam Movement"],
            nextSkill: "Long Spells"
          },
          fielding: {
            level: 3,
            skills: ["Concentration", "Close-in", "Slip Catching", "Long Day", "Test Specialist"],
            unlocked: ["Concentration", "Close-in", "Slip Catching"],
            nextSkill: "Long Day"
          }
        },

        performance: {
          form: 7.5,
          consistency: 8.2,
          impact: 7.8,
          fitness: 8.5
        }
      },

      IPL: {
        level: 65,
        xp: 650,
        xpToNextLevel: 10,
        progress: 98.5,
        abilities: ["IPL Star", "Fan Favorite", "Pressure Player", "Franchise Leader"],
        mastery: "Elite",
        
        skillTree: {
          batting: {
            level: 5,
            skills: ["IPL Power", "Innovation", "Finisher", "Captaincy", "MVP Batting"],
            unlocked: ["IPL Power", "Innovation", "Finisher", "Captaincy"],
            nextSkill: "MVP Batting"
          },
          bowling: {
            level: 4,
            skills: ["IPL Variations", "Death Overs", "Powerplay", "Wicket-taking", "Purple Cap"],
            unlocked: ["IPL Variations", "Death Overs", "Powerplay", "Wicket-taking"],
            nextSkill: "Purple Cap"
          },
          fielding: {
            level: 5,
            skills: ["IPL Athletic", "Boundary Saves", "Catches", "Run-outs", "Fielding MVP"],
            unlocked: ["IPL Athletic", "Boundary Saves", "Catches", "Run-outs"],
            nextSkill: "Fielding MVP"
          }
        },

        performance: {
          form: 9.2,
          consistency: 8.8,
          impact: 9.6,
          fitness: 9.1
        }
      }
    },

    // Global badges (not format-specific)
    badges: [
     {
      "title": "Test Centurion",
      "description": "Scored a Test century (108 vs Sri Lanka)",
      "type": "rare",
      "icon": "💯",
      "unlocked": true
    },
    {
      "title": "Match Winner",
      "description": "Won matches with impactful all-round performances",
      "type": "rare",
      "icon": "🎯",
      "unlocked": true
    },
    {
      "title": "Series Performer",
      "description": "Strong performer across multiple bilateral series",
      "type": "epic",
      "icon": "⭐",
      "unlocked": true
    },
    {
      "title": "IPL Champion",
      "description": "Won 5 IPL titles including one as captain",
      "type": "legendary",
      "icon": "🏆",
      "unlocked": true
    },
    {
      "title": "All-Round Impact",
      "description": "Achieved over 6000 international runs and 150+ wickets across formats",
      "type": "legendary",
      "icon": "⚡",
      "unlocked": true
    },
    {
      "title": "Captain Marvel",
      "description": "Captained Gujarat Titans to debut-title and later became Mumbai Indians captain",
      "type": "epic",
      "icon": "👑",
      "unlocked": true
    },
    {
      "title": "Big Match Player",
      "description": "Delivered clutch performances in high-pressure matches",
      "type": "epic",
      "icon": "🔥",
      "unlocked": true
    },
    {
      "title": "Fielding Pro",
      "description": "Completed 110+ catches and run-outs across all formats",
      "type": "rare",
      "icon": "🧤",
      "unlocked": true
    }
    ],

    // Recent Performance (Last 10 matches)
    recentPerformance: [
       {
    match: "IND vs SL",
    date: "2025-09-26",
    format: "T20",
    batting: { runs: 2, balls: 3 },
    bowling: { wickets: 1, runs: 7, overs: 1 },
    fielding: { catches: 0, runouts: 0 },
    result: "Won",
    rating: 7.1
  },
  {
    match: "IND vs BAN",
    date: "2025-09-24",
    format: "T20",
    batting: { runs: 38, balls: 29 },
    bowling: { wickets: 0, runs: 14, overs: 2 },
    fielding: { catches: 0, runouts: 0 },
    result: "Won",
    rating: 7.8
  },
  {
    match: "IND vs PAK",
    date: "2025-09-21",
    format: "T20",
    batting: { runs: 7, balls: 7, notOut: true },
    bowling: { wickets: 1, runs: 29, overs: 3 },
    fielding: { catches: 0, runouts: 0 },
    result: "Won",
    rating: 7.3
  },
  {
    match: "IND vs OMAN",
    date: "2025-09-19",
    format: "T20",
    batting: { runs: 1, balls: 1 },
    bowling: { wickets: 1, runs: 26, overs: 4 },
    fielding: { catches: 1, runouts: 0 },
    result: "Won",
    rating: 7.0
  },
  {
    match: "IND vs PAK",
    date: "2025-09-14",
    format: "T20",
    batting: { runs: 0, balls: null, didNotBat: true },
    bowling: { wickets: 1, runs: 34, overs: 3 },
    fielding: { catches: 2, runouts: 0 },
    result: "Won",
    rating: 7.4
  },
  {
    match: "IND vs UAE",
    date: "2025-09-10",
    format: "T20",
    batting: { runs: 0, didNotBat: true },
    bowling: { wickets: 0, runs: 10, overs: 1 },
    fielding: { catches: 0, runouts: 0 },
    result: "Won",
    rating: 6.2
  },
  {
    match: "MI vs PBKS",
    date: "2025-06-01",
    format: "IPL",
    batting: { runs: 15, balls: 13 },
    bowling: { wickets: 1, runs: 19, overs: 2 },
    fielding: { catches: 1, runouts: 1 },
    result: "Lost",
    rating: 7.9
  },
  {
    match: "MI vs GT",
    date: "2025-05-30",
    format: "IPL",
    batting: { runs: 22, balls: 9, notOut: true },
    bowling: { wickets: 0, runs: 37, overs: 3 },
    fielding: { catches: 0, runouts: 0 },
    result: "Won",
    rating: 6.8
  },
  {
    match: "MI vs PBKS",
    date: "2025-05-26",
    format: "IPL",
    batting: { runs: 26, balls: 25 },
    bowling: { wickets: 0, runs: 29, overs: 2 },
    fielding: { catches: 0, runouts: 0 },
    result: "Lost",
    rating: 6.5
  },
  {
    match: "MI vs DC",
    date: "2025-05-21",
    format: "IPL",
    batting: { runs: 3, balls: 6 },
    bowling: { wickets: 0, didNotBowl: true },
    fielding: { catches: 0, runouts: 0 },
    result: "Won",
    rating: 5.4
  }
    ]
  },

  // Stats for different formats
  stats: {
    T20: {
      batting: {
        matches: 308,
        runs: 5623,
        average: 29.43,
        strikeRate: 142.24,
        fifties: 21,
        hundreds: 0,
        highestScore: 91
      },
      bowling: {
        matches: 308,
        wickets: 208,
        average: 28.14,
        economy: 8.39,
        strikeRate: 20.1,
        bestBowling: "5/36"
      },
      fielding: {
        catches: 144,
        runOuts: 14,
        stumpings: 0
      }
    },
    ODI: {
      batting: {
        matches: 94,
        runs: 1904,
        average: 32.82,
        strikeRate: 110.89,
        fifties: 11,
        hundreds: 0,
        highestScore: 92
      },
      bowling: {
        matches: 94,
        wickets: 91,
        average: 35.50,
        economy: 5.60,
        strikeRate: 38.0,
        bestBowling: "4/24"
      },
      fielding: {
        catches: 35,
        runOuts: 5,
        stumpings: 0
      }
    },
    Test: {
      batting: {
        matches: 11,
        runs: 532,
        average: 31.29,
        strikeRate: 73.88,
        fifties: 4,
        hundreds: 1,
        highestScore: 108
      },
      bowling: {
        matches: 11,
        wickets: 17,
        average: 31.05,
        economy: 3.38,
        strikeRate: 55.1,
        bestBowling: "5/28"
      },
      fielding: {
        catches: 7,
        runOuts: 2,
        stumpings: 0
      }
    },
    IPL: {
      batting: {
        matches: 152,
        runs: 2749,
        average: 28.34,
        strikeRate: 146.92,
        fifties: 10,
        hundreds: 0,
        highestScore: 91
      },
      bowling: {
        matches: 152,
        wickets: 78,
        average: 31.94,
        economy: 9.18,
        strikeRate: 20.8,
        bestBowling: "5/36"
      },
      fielding: {
        catches: 72,
        runOuts: 12,
        stumpings: 0
      }
    }
  },

  // Skills
  skills: {
    batting: 88,
    bowling: 82,
    fielding: 85,
    fitness: 90,
    leadership: 80,
    experience: 85
  },

  // Achievements
  achievements: [
       {
      "title": "ICC T20I All-Rounder Rank #1",
      "description": "Achieved No.1 ICC ranking for T20I all-rounders",
      "year": "2024",
      "type": "legendary"
    },
    {
      "title": "T20 World Cup 2024 Impact Performer",
      "description": "Key all-round contributor with 144 runs and 11 wickets in India’s title-winning campaign",
      "year": "2024",
      "type": "epic"
    },
    {
      "title": "Milestone All-Rounder",
      "description": "Crossed 2,000+ T20I runs and 50+ T20I wickets (accurate milestone)",
      "year": "2023",
      "type": "epic"
    },
    {
      "title": "IPL Final Winning Captain",
      "description": "Led Gujarat Titans to the IPL 2022 title in their debut season",
      "year": "2022",
      "type": "legendary"
    },
    {
      "title": "IPL Final Player of the Match",
      "description": "Delivered a match-winning all-round performance in the IPL 2022 Final",
      "year": "2022",
      "type": "epic"
    },
    {
      "title": "IPL Champion",
      "description": "Won 5 IPL titles (4 with Mumbai Indians, 1 as GT captain in 2022)",
      "year": "2015–2022",
      "type": "legendary"
    },
    {
      "title": "Series Impact Player",
      "description": "Produced clutch all-round performances in multiple bilateral series",
      "year": "2020–2024",
      "type": "rare"
    },
    {
      "title": "Outstanding Fielder Award",
      "description": "Recorded 110+ catches and run-outs across formats",
      "year": "Career",
      "type": "rare"
    }
  ]
};

// Default gamification data for fallback
export const defaultGamification = {
  level: 1,
  xp: 0,
  xpToNextLevel: 1000,
  progress: 0,
  abilities: [],
  mastery: "Beginner",
  skillTree: {
    batting: { level: 1, skills: [], unlocked: [], nextSkill: "" },
    bowling: { level: 1, skills: [], unlocked: [], nextSkill: "" },
    fielding: { level: 1, skills: [], unlocked: [], nextSkill: "" }
  },
  performance: {
    form: 0,
    consistency: 0,
    impact: 0,
    fitness: 0
  }
};

