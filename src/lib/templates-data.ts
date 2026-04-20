export interface TemplateStep {
  title: string;
  emoji: string;
  description?: string;
  durationLabel?: string;
}

export interface TemplateData {
  slug: string;
  title: string;
  description: string;
  category: string;
  seoTitle: string;
  seoDescription: string;
  isPremium: boolean;
  steps: TemplateStep[];
  faq: Array<{ q: string; a: string }>;
}

export const TEMPLATES: TemplateData[] = [
{
  "slug": "morning-routine-chart-for-kids",
  "title": "Morning Routine Chart for Kids",
  "description": "Help your child start every day with confidence using this simple morning routine chart.",
  "category": "Daily Living",
  "seoTitle": "Morning Routine Chart for Kids | Free Printable Template + Online Editor",
  "seoDescription": "Create a simple morning routine chart for kids with icons or your own photos.",
  "isPremium": false,
  "steps": [
    {
      "title": "Wake Up",
      "emoji": "🌅",
      "durationLabel": "5 min"
    },
    {
      "title": "Use Bathroom",
      "emoji": "🚽",
      "durationLabel": "5 min"
    },
    {
      "title": "Wash Hands",
      "emoji": "🧼",
      "durationLabel": "2 min"
    },
    {
      "title": "Get Dressed",
      "emoji": "👕",
      "durationLabel": "10 min"
    },
    {
      "title": "Eat Breakfast",
      "emoji": "🍳",
      "durationLabel": "15 min"
    },
    {
      "title": "Brush Teeth",
      "emoji": "🦷",
      "durationLabel": "2 min"
    },
    {
      "title": "Pack Bag",
      "emoji": "🎒",
      "durationLabel": "5 min"
    },
    {
      "title": "Put On Shoes",
      "emoji": "👟",
      "durationLabel": "3 min"
    },
    {
      "title": "Ready to Go!",
      "emoji": "👋"
    }
  ],
  "faq": [
    {
      "q": "What age is this morning routine chart for?",
      "a": "This chart works best for children ages 4-10 who are learning to follow morning routines independently."
    },
    {
      "q": "Can I add my own photos?",
      "a": "Yes! You can customize each step with your own photos so your child recognizes familiar items."
    },
    {
      "q": "Can I print this chart?",
      "a": "Absolutely. Use the Print button to get a clean printout perfect for laminating."
    }
  ]
},
{
  "slug": "bedtime-routine-chart",
  "title": "Bedtime Routine Chart",
  "description": "A calming bedtime routine to help children wind down.",
  "category": "Daily Living",
  "seoTitle": "Bedtime Routine Chart | Free Printable",
  "seoDescription": "Create a calming bedtime routine chart.",
  "isPremium": false,
  "steps": [
    {
      "title": "Eat Dinner",
      "emoji": "🍽",
      "durationLabel": "20 min"
    },
    {
      "title": "Bath or Shower",
      "emoji": "🛁",
      "durationLabel": "15 min"
    },
    {
      "title": "Put On Pajamas",
      "emoji": "😴",
      "durationLabel": "5 min"
    },
    {
      "title": "Brush Teeth",
      "emoji": "🦷",
      "durationLabel": "2 min"
    },
    {
      "title": "Read a Story",
      "emoji": "📖",
      "durationLabel": "15 min"
    },
    {
      "title": "Lights Out",
      "emoji": "🌙"
    }
  ],
  "faq": [
    {
      "q": "Why use a visual bedtime routine chart?",
      "a": "Visual schedules help children understand what comes next, reducing bedtime anxiety."
    },
    {
      "q": "How do I use this with a non-reader?",
      "a": "The emoji icons make it easy for pre-readers to follow along."
    }
  ]
},
{
  "slug": "tooth-brushing-routine-chart",
  "title": "Tooth Brushing Routine Chart",
  "description": "Step-by-step tooth brushing routine to help kids build good hygiene habits.",
  "category": "Hygiene",
  "seoTitle": "Tooth Brushing Routine Chart | Free Printable",
  "seoDescription": "Create a simple tooth brushing routine chart.",
  "isPremium": false,
  "steps": [
    {
      "title": "Get Toothbrush",
      "emoji": "🪥"
    },
    {
      "title": "Add Toothpaste",
      "emoji": "🦷"
    },
    {
      "title": "Brush Front Teeth",
      "emoji": "😁"
    },
    {
      "title": "Brush Back Teeth",
      "emoji": "🦷"
    },
    {
      "title": "Brush Tongue",
      "emoji": "👅"
    },
    {
      "title": "Rinse Mouth",
      "emoji": "💧"
    },
    {
      "title": "Done!",
      "emoji": "✅"
    }
  ],
  "faq": [
    {
      "q": "How long should tooth brushing take?",
      "a": "Dentists recommend brushing for 2 minutes, twice a day."
    }
  ]
},
{
  "slug": "classroom-visual-schedule",
  "title": "Classroom Visual Schedule",
  "description": "Help students navigate the school day with a clear classroom schedule.",
  "category": "School",
  "seoTitle": "Classroom Visual Schedule | Free Printable",
  "seoDescription": "Create a classroom visual schedule.",
  "isPremium": false,
  "steps": [
    {
      "title": "Morning Meeting",
      "emoji": "👋",
      "durationLabel": "15 min"
    },
    {
      "title": "Reading Time",
      "emoji": "📚",
      "durationLabel": "30 min"
    },
    {
      "title": "Math Time",
      "emoji": "➕",
      "durationLabel": "30 min"
    },
    {
      "title": "Snack Time",
      "emoji": "🍎",
      "durationLabel": "10 min"
    },
    {
      "title": "Recess",
      "emoji": "🏃",
      "durationLabel": "20 min"
    },
    {
      "title": "Writing Time",
      "emoji": "✏",
      "durationLabel": "30 min"
    },
    {
      "title": "Lunch",
      "emoji": "🍱",
      "durationLabel": "30 min"
    },
    {
      "title": "Pack Up",
      "emoji": "🎒",
      "durationLabel": "10 min"
    }
  ],
  "faq": [
    {
      "q": "Who benefits from a classroom visual schedule?",
      "a": "All students benefit, especially those with autism, ADHD, and anxiety."
    }
  ]
},
{
  "slug": "visual-schedule-app-for-autism",
  "title": "Daily Visual Schedule for Autism",
  "description": "A supportive daily visual schedule for children with autism spectrum disorder.",
  "category": "Daily Living",
  "seoTitle": "Visual Schedule App for Autism | Free Printable",
  "seoDescription": "Create a visual schedule for autism with real photos or icons.",
  "isPremium": false,
  "steps": [
    {
      "title": "Wake Up",
      "emoji": "🌅"
    },
    {
      "title": "Morning Routine",
      "emoji": "🧼"
    },
    {
      "title": "Breakfast",
      "emoji": "🍳"
    },
    {
      "title": "Activity Time",
      "emoji": "🎨"
    },
    {
      "title": "Snack",
      "emoji": "🍎"
    },
    {
      "title": "Learning Time",
      "emoji": "📚"
    },
    {
      "title": "Lunch",
      "emoji": "🍱"
    },
    {
      "title": "Rest Time",
      "emoji": "😌"
    },
    {
      "title": "Dinner",
      "emoji": "🍽"
    },
    {
      "title": "Bedtime Routine",
      "emoji": "🛁"
    },
    {
      "title": "Sleep",
      "emoji": "🌙"
    }
  ],
  "faq": [
    {
      "q": "Why are visual schedules helpful for autism?",
      "a": "They reduce anxiety by providing predictability and support independence."
    },
    {
      "q": "Can I use real photos?",
      "a": "Yes! Upload your own photos for each step."
    }
  ]
},
{
  "slug": "visual-routine-chart-adhd",
  "title": "ADHD Focus Routine Chart",
  "description": "A structured routine chart to help children and adults with ADHD stay on task.",
  "category": "Daily Living",
  "seoTitle": "Visual Routine Chart for ADHD | Free Printable",
  "seoDescription": "Create a visual routine chart for ADHD.",
  "isPremium": false,
  "steps": [
    {
      "title": "Start Timer",
      "emoji": "⏱",
      "durationLabel": "Set timer"
    },
    {
      "title": "Clear Your Space",
      "emoji": "📋",
      "durationLabel": "2 min"
    },
    {
      "title": "One Task Only",
      "emoji": "🎯",
      "durationLabel": "25 min"
    },
    {
      "title": "Take a Break",
      "emoji": "☕",
      "durationLabel": "5 min"
    },
    {
      "title": "Check Progress",
      "emoji": "✅",
      "durationLabel": "2 min"
    },
    {
      "title": "Reward Yourself",
      "emoji": "🌟"
    }
  ],
  "faq": [
    {
      "q": "How does lock sequence help with ADHD?",
      "a": "It prevents skipping steps, enforcing the routine order and preventing impulsive task-switching."
    }
  ]
},
{
  "slug": "first-then-board",
  "title": "First-Then Board",
  "description": "A simple first-then visual support to motivate completing tasks before preferred activities.",
  "category": "Behavior Support",
  "seoTitle": "First-Then Board | Free Visual Schedule Template",
  "seoDescription": "Create a first-then board to motivate task completion.",
  "isPremium": false,
  "steps": [
    {
      "title": "FIRST: Complete Task",
      "emoji": "📋",
      "description": "What needs to be done first"
    },
    {
      "title": "THEN: Fun Activity",
      "emoji": "🌟",
      "description": "The preferred activity or reward"
    }
  ],
  "faq": [
    {
      "q": "What is a first-then board?",
      "a": "A first-then board shows a child what they need to do first and what they get after."
    }
  ]
},
{
  "slug": "after-school-routine",
  "title": "After School Routine Chart",
  "description": "Help kids transition from school to home with a clear after-school routine.",
  "category": "Daily Living",
  "seoTitle": "After School Routine Chart | Free Printable",
  "seoDescription": "Create an after school routine chart for kids.",
  "isPremium": false,
  "steps": [
    {
      "title": "Arrive Home",
      "emoji": "🏠"
    },
    {
      "title": "Unpack Bag",
      "emoji": "🎒",
      "durationLabel": "5 min"
    },
    {
      "title": "Snack Time",
      "emoji": "🍎",
      "durationLabel": "15 min"
    },
    {
      "title": "Homework",
      "emoji": "✏",
      "durationLabel": "30 min"
    },
    {
      "title": "Free Time",
      "emoji": "🎮",
      "durationLabel": "30 min"
    },
    {
      "title": "Family Time",
      "emoji": "👪"
    }
  ],
  "faq": [
    {
      "q": "Why is an after school routine important?",
      "a": "It reduces homework battles and helps with the transition from school mode to home mode."
    }
  ]
},
{
  "slug": "getting-dressed",
  "title": "Getting Dressed Routine",
  "description": "Step-by-step guide to help children learn to get dressed independently.",
  "category": "Daily Living",
  "seoTitle": "Getting Dressed Routine Chart | Free Visual Schedule",
  "seoDescription": "Create a getting dressed visual routine for kids.",
  "isPremium": false,
  "steps": [
    {
      "title": "Underwear",
      "emoji": "👙"
    },
    {
      "title": "Socks",
      "emoji": "🧦"
    },
    {
      "title": "Pants or Skirt",
      "emoji": "👖"
    },
    {
      "title": "Shirt or Top",
      "emoji": "👕"
    },
    {
      "title": "Jacket (if cold)",
      "emoji": "🧥"
    },
    {
      "title": "Shoes",
      "emoji": "👟"
    },
    {
      "title": "Check Mirror",
      "emoji": "🪞"
    }
  ],
  "faq": [
    {
      "q": "What age can children dress themselves?",
      "a": "Most children can learn between ages 3-5 with guidance and visual support."
    }
  ]
},
{
  "slug": "packing-school-bag",
  "title": "Packing School Bag Checklist",
  "description": "Never forget anything again with this school bag packing checklist.",
  "category": "School",
  "seoTitle": "Packing School Bag Checklist | Free Printable",
  "seoDescription": "Create a school bag packing checklist with visual steps.",
  "isPremium": false,
  "steps": [
    {
      "title": "Homework",
      "emoji": "✏"
    },
    {
      "title": "Folders & Papers",
      "emoji": "📁"
    },
    {
      "title": "Books",
      "emoji": "📚"
    },
    {
      "title": "Pencil Case",
      "emoji": "✏"
    },
    {
      "title": "Lunch Box",
      "emoji": "🍱"
    },
    {
      "title": "Water Bottle",
      "emoji": "💧"
    },
    {
      "title": "PE Kit (if needed)",
      "emoji": "👟"
    },
    {
      "title": "All Packed!",
      "emoji": "✅"
    }
  ],
  "faq": [
    {
      "q": "How do I get my child to pack their own bag?",
      "a": "A visual checklist makes it concrete and achievable. Post it by the front door."
    }
  ]
},
];

export function getTemplate(slug: string): TemplateData | undefined {
  return TEMPLATES.find((t) => t.slug === slug);
}
