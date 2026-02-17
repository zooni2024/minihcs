export const animalClasses = [
    { title: "Mini Highland Cows", link: "/category/mini-highland-cows", image: "/mini_highland_cow_card.png", description: "The fluffy favorites of the cattle world." },
    { title: "Domestic Cats", link: "/category/cats", image: "/cat_portrait.png", description: "Independent, agile, and affectionate companions." },
    { title: "Roosters", link: "/category/roosters", image: "/rooster_vibrant_hd.png", description: "Guardians of the flock with vibrant plumage." },
    { title: "Cows & Cattle", link: "/category/cows", image: "/cow_grazing_pasture.png", description: "Gentle giants of the farm." }
];

export const azList = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

export const featuredArticles = [
    {
        title: "Evolution’s Darkest Trick: How Jewel Wasps Turn Prey Into Living Food",
        link: "/article/evolutions-darkest-trick",
        image: "/article_wasp.png",
        excerpt: "Nature's adaptability can be both fascinating and terrifying."
    },
    {
        title: "From Orphaned Cub to Army Legend: The Story of Wojtek the Bear",
        link: "/article/wojtek-the-bear",
        image: "/article_bear.png",
        excerpt: "The incredible true story of a bear who became a corporal."
    },
    {
        title: "The Evolutionary Maze: How Female Ducks Use “Reverse-Spiral” Anatomy",
        link: "/article/duck-anatomy",
        image: "/article_duck.png",
        excerpt: "A deep dive into the complex mating evolution of waterfowl."
    },
    {
        title: "Nature’s Architects: How Squirrels Shape Forests",
        link: "/article/squirrels-shape-forests",
        image: "/article_squirrel.png",
        excerpt: "Why we should celebrate these busy woodland creatures."
    },
    {
        title: "Why Do Honey Bees Disappear When the Sun Goes Down?",
        link: "/article/bees-at-night",
        image: "/article_bee.png",
        excerpt: "Uncovering the nightly habits of our most important pollinators."
    },
    {
        title: "The Secret Fire-Starting Tactics of Australia’s Raptors",
        link: "/article/fire-starting-raptors",
        image: "/article_raptor.png",
        excerpt: "Birds of prey that have learned to harness fire for hunting."
    }
];

export const slideshows = [
    {
        title: "8 Recent Incidents of Bears Doing Whatever They Want",
        link: "/slideshow/bears-doing-whatever",
        image: "/slide_bear.png"
    },
    {
        title: "Top 5 States With the Deadliest Wildlife",
        link: "/slideshow/deadliest-wildlife-states",
        image: "/slide_dangerous.png"
    },
    {
        title: "Meet the Dog Breeds That Can Weigh as Much as a Motorcycle",
        link: "/slideshow/giant-dog-breeds",
        image: "/slide_dog.png"
    }
];

export const quizzes = [
    { title: "Great Dane Quiz: Test What You Know!", link: "/quiz/great-dane", image: "/quiz_great_dane.png" },
    { title: "Wasp Quiz: Test Your Knowledge!", link: "/quiz/wasp", image: "/quiz_wasp.png" },
    { title: "Test Your Knowledge: General Trivia", link: "/quiz/general-knowledge", image: "/quiz_knowledge.png" },
    { title: "Which Cat Breed Are You?", link: "/quiz/cat-breed", image: "/cat_nature_hd.png" }
];

// Enhanced data structure for category pages
export interface CategoryContent {
    intro: string;
    subBreeds: { title: string; description: string; image: string; link?: string }[];
    gallery: { image: string; caption: string }[];
    faqs: { question: string; answer: string }[];
    advice?: { title: string; link: string }[];
    adviceGroups?: { title: string; items: { title: string; link: string }[] }[];
}

export const categoryData: Record<string, CategoryContent> = {
    'mini-highland-cows': {
        intro: "Mini Highland cows are one of the most beloved cattle breeds, known for their small stature, fluffy coats, and gentle temperaments. Originating from Scotland, these hardy animals have captured hearts worldwide. Whether you're looking for a unique pet, a show animal, or a sustainable grazer for a small homestead, the Mini Highland is an excellent choice. They typically stand between 36 and 42 inches tall at the hip, making them much more manageable than their full-sized counterparts while retaining the iconic shaggy double coat that protects them from harsh weather. In this guide, we dive deep into their housing requirements, feeding schedules, and how to choose the right calf for your farm.",
        subBreeds: [
            {
                title: "Teacup Mini Highland",
                description: "The smallest of the bunch, Teacup Highlands are bred for their petite size, often standing under 36 inches at maturity. Perfect for small hobby farms.",
                image: "/category_hero_mini_highland.png", // Placeholder until quota resets
                link: "/article/micro-mini-varieties"
            },
            {
                title: "Micro Mini (White)",
                description: "Rare and stunning, the white variation of the Micro Mini Highland is a sight to behold. Their pristine coats require care but are incredibly striking.",
                image: "/mini_highland_cow_highland_hd.png", // Using existing high quality image
                link: "/article/white-mini-highlands"
            },
            {
                title: "Traditional Dun & Red",
                description: "The classic look. These hearty mini cows sport the traditional shaggy red or dun coats that help them survive harsh highland winters.",
                image: "/mini_highland_cow_grazing_green_pasture_hd.png",
                link: "/article/traditional-highlands"
            }
        ],
        gallery: [
            { image: "/mini_highland_cow_highland_hd.png", caption: "Grazing in the Highlands" },
            { image: "/mini_highland_bull_standing_proud_hd.png", caption: "Proud Bull" },
            { image: "/mini_highland_calf_resting_hd.png", caption: "Resting Calf" }
        ],
        faqs: [
            { question: "How much space do Mini Highland cows need?", answer: "Generally, you need about 0.5 to 1 acre of pasture per cow, depending on grass quality." },
            { question: "Are they good with children?", answer: "Yes, they are known for their docile and gentle nature, making them excellent pets for families." },
            { question: "What do they eat?", answer: "They primarily graze on grass and hay. In winter, they may need grain supplements." }
        ]
    },
    'cats': {
        intro: "Cats have been companions to humans for thousands of years. From independent hunters to affectionate lap warmers, every breed has its own unique personality and needs. Explore the diverse world of feline breeds and find the perfect companion for your lifestyle.",
        subBreeds: [
            {
                title: "American Shorthair",
                description: "Known for their longevity, robust health, and easy-going personality. They are working cats with a gentle soul.",
                image: "/breed_cat_shorthair.png",
                link: "/article/american-shorthair"
            },
            {
                title: "Maine Coon",
                description: "The gentle giants of the cat world. Maine Coons are known for their large size, tufted ears, and dog-like friendly personalities.",
                image: "/breed_cat_maine_coon.png",
                link: "/article/maine-coon"
            },
            {
                title: "Russian Blue",
                description: "Famous for their shimmering blue-grey coat and vivid green eyes. They are intelligent, playful, but can be shy with strangers.",
                image: "/breed_cat_russian_blue.png",
                link: "/article/russian-blue"
            }
        ],
        gallery: [
            { image: "/breed_cat_shorthair.png", caption: "American Shorthair Portrait" },
            { image: "/breed_cat_maine_coon.png", caption: "Majestic Maine Coon" },
            { image: "/breed_cat_russian_blue.png", caption: "Elegant Russian Blue" }
        ],
        faqs: [
            { question: "What is the best cat breed for apartments?", answer: "Breeds like the American Shorthair and Russian Blue adapt very well to indoor apartment living." },
            { question: "How long do cats live?", answer: "Indoor cats typically live 12-18 years, though many reach their early 20s with good care." },
            { question: "Do all cats need grooming?", answer: "Long-haired breeds like the Maine Coon require daily brushing, while shorthairs need less frequent grooming." }
        ],
        adviceGroups: [
            {
                title: "Cat Health",
                items: [
                    { title: "Arthritis in Cats", link: "/article/arthritis-in-cats" },
                    { title: "Cancer in Cats", link: "/article/cancer-in-cats" },
                    { title: "Chronic Kidney Disease", link: "/article/kidney-disease-cats" },
                    { title: "Dental Disease", link: "/article/dental-disease-cats" },
                    { title: "Diabetes in Cats", link: "/article/diabetes-cats" },
                    { title: "Feline Immunodeficiency Virus (FIV)", link: "/article/fiv-cats" },
                    { title: "Heart Murmurs", link: "/article/heart-murmurs-cats" },
                    { title: "Hyperthyroidism", link: "/article/hyperthyroidism-cats" },
                    { title: "Upper Respiratory Infection (Cat Flu)", link: "/article/cat-flu" },
                    { title: "Urinary Tract Problems", link: "/article/urinary-tract-cats" }
                ]
            },
            {
                title: "Behavior & Training",
                items: [
                    { title: "Aggression in Cats", link: "/article/cat-aggression" },
                    { title: "Anxious Cats", link: "/article/anxious-cats" },
                    { title: "House Soiling (Litter Box Problems)", link: "/article/litter-box-problems" },
                    { title: "Introducing a New Cat", link: "/article/introducing-cats" },
                    { title: "Scratching Furniture", link: "/article/scratching-furniture" },
                    { title: "Stress in Cats", link: "/article/stress-in-cats" },
                    { title: "Why Do Cats Purr?", link: "/article/why-cats-purr" }
                ]
            },
            {
                title: "Care & Lifestyle",
                items: [
                    { title: "Choosing a Boarding Cattery", link: "/article/boarding-cattery" },
                    { title: "Feeding Your Cat", link: "/article/feeding-your-cat" },
                    { title: "Grooming Your Cat", link: "/article/grooming-your-cat" },
                    { title: "Indoor vs. Outdoor", link: "/article/indoor-outdoor-cats" },
                    { title: "Microchipping", link: "/article/microchipping-cats" },
                    { title: "Neutering & Spaying", link: "/article/neutering-cats" },
                    { title: "Parasites (Fleas & Worms)", link: "/article/parasite-control" },
                    { title: "Vaccinations", link: "/article/cat-vaccinations" }
                ]
            },
            {
                title: "Life Stages",
                items: [
                    { title: "Caring for Kittens", link: "/article/kitten-care" },
                    { title: "Senior Cat Care", link: "/article/senior-cat-care" },
                    { title: "End of Life Care", link: "/article/end-of-life-care" }
                ]
            }
        ],
        advice: [
            { title: "Acne and Stud Tail", link: "/article/cat-acne" },
            { title: "Allergies to Cats", link: "/article/allergies-to-cats" },
            { title: "Anxious Cats", link: "/article/anxious-cats" },
            { title: "Arthritis in Cats", link: "/article/arthritis-in-cats" },
            { title: "Bereavement", link: "/article/cat-bereavement" },
            { title: "Cancer in Cats", link: "/article/cancer-in-cats" },
            { title: "Cat Flu", link: "/article/cat-flu" },
            { title: "Choose a Kitten", link: "/article/choosing-a-kitten" },
            { title: "Chronic Kidney Disease", link: "/article/kidney-disease-cats" },
            { title: "Dental Disease", link: "/article/dental-disease-cats" },
            { title: "Diabetes in Cats", link: "/article/diabetes-cats" },
            { title: "Feeding Your Cat", link: "/article/feeding-your-cat" },
            { title: "Fleas and Flea Control", link: "/article/fleas-control" },
            { title: "Grooming Your Cat", link: "/article/grooming-your-cat" },
            { title: "Heart Disease (Cardiomyopathy)", link: "/article/heart-disease-cats" },
            { title: "Hyperthyroidism", link: "/article/hyperthyroidism-cats" },
            { title: "Indoor vs Outdoor", link: "/article/indoor-vs-outdoor" },
            { title: "Litter Tray Problems", link: "/article/litter-tray-problems" },
            { title: "Microchipping", link: "/article/microchipping-cats" },
            { title: "Neutering Your Cat", link: "/article/neutering-your-cat" },
            { title: "Obesity in Cats", link: "/article/obesity-cats" },
            { title: "Poisonous Plants", link: "/article/poisonous-plants-cats" },
            { title: "Stress in Cats", link: "/article/stress-in-cats" },
            { title: "Vaccinating Your Cat", link: "/article/vaccinating-your-cat" },
            { title: "Worming Your Cat", link: "/article/worming-your-cat" }
        ]
    },
    'roosters': {
        intro: "Roosters are the kings of the flock. More than just a wake-up call, they play a crucial role in protecting hens and maintaining order. From the stately White Leghorn to the colorful American Game, roosters come in an amazing variety of colors and temperaments.",
        subBreeds: [
            {
                title: "White Leghorn",
                description: "A classic breed known for its stark white plumage and bright red comb. They are active, alert, and excellent foragers.",
                image: "/category_hero_rooster.png", // Placeholder
                link: "/article/white-leghorn"
            },
            {
                title: "American Game",
                description: "Feisty and beautiful, these birds are known for their stunning plumage and proud, upright carriage. They were originally bred for show.",
                image: "/rooster_vibrant_hd.png",
                link: "/article/american-game"
            },
            {
                title: "Rhode Island Red",
                description: "A dual-purpose breed that is friendly and hardy. The roosters are known for their deep mahogany red sheen.",
                image: "/rooster_portrait.png",
                link: "/article/rhode-island-red"
            }
        ],
        gallery: [
            { image: "/category_hero_rooster.png", caption: "Crowing at Dawn" },
            { image: "/rooster_vibrant_hd.png", caption: "Vibrant Plumage" },
            { image: "/rooster_portrait.png", caption: "Farm Guardian" }
        ],
        faqs: [
            { question: "Can you keep a rooster in the city?", answer: "Many urban areas restrict roosters due to noise ordinances. Always check local laws." },
            { question: "Are roosters aggressive?", answer: "Some can be territorial, but many breeds are gentle if handled correctly from a young age." },
            { question: "Why does a rooster crow?", answer: "Crowing serves to assert territory and communicate with the flock, not just to announce sunrise." }
        ]
    },
    'cows': {
        intro: "Cattle are the backbone of agriculture worldwide. Whether for dairy or beef, different breeds have evolved to suit different climates and needs. From the high-production Holstein to the hardy Angus, learn about the gentle giants that provide us with so much.",
        subBreeds: [
            {
                title: "Holstein Friesian",
                description: "The iconic black and white dairy cow. They are the world's highest-production dairy animals.",
                image: "/dairy_cow_portrait.png",
                link: "/article/holstein"
            },
            {
                title: "Angus Cattle",
                description: "Prized for their high-quality beef and natural marbling. They are solid black (or red) and naturally polled.",
                image: "/cow_grazing_hd.png",
                link: "/article/angus"
            },
            {
                title: "Jersey Cow",
                description: "A smaller dairy breed known for huge eyes and milk with very high butterfat content.",
                image: "/category_hero_cattle.png",
                link: "/article/jersey"
            }
        ],
        gallery: [
            { image: "/cow_grazing_hd.png", caption: "Grazing Angus" },
            { image: "/dairy_cow_portrait.png", caption: "Holstein Portrait" },
            { image: "/category_hero_cattle.png", caption: "Herd in the Valley" }
        ],
        faqs: [
            { question: "What is the difference between a cow and a heifer?", answer: "A heifer is a young female that hasn't had a calf; a cow is a female that has had at least one calf." },
            { question: "How much milk does a cow produce?", answer: "A high-yield Holstein can produce over 9,000 gallons of milk per lactating cycle." },
            { question: "Why do cows chew cud?", answer: "Cows are ruminants; they regurgitate and re-chew food to aid digestion in their complex stomachs." }
        ]
    }
};

export const adviceArticles = []; // Future use

export interface Animal {
    name: string;
    description: string;
    image: string;
    link: string;
}

export const allAnimals: Animal[] = [
    { name: "Aardvark", description: "Nocturnal burrowing mammal.", image: "/placeholder_animal.png", link: "/animal/aardvark" },
    { name: "Albatross", description: "Large seabird with long wings.", image: "/placeholder_animal.png", link: "/animal/albatross" },
    { name: "Alligator", description: "Large reptile found in fresh water.", image: "/placeholder_animal.png", link: "/animal/alligator" },
    { name: "Alpaca", description: "Domesticated species of South American camelid.", image: "/placeholder_animal.png", link: "/animal/alpaca" },
    { name: "Ant", description: "Eusocial insect of the family Formicidae.", image: "/placeholder_animal.png", link: "/animal/ant" },
    { name: "Anteater", description: "Mammal known for eating ants and termites.", image: "/placeholder_animal.png", link: "/animal/anteater" },
    { name: "Antelope", description: "Herbivorous mammal of the African plains.", image: "/placeholder_animal.png", link: "/animal/antelope" },
    { name: "Armadillo", description: "Mammal with a leathery armor shell.", image: "/placeholder_animal.png", link: "/animal/armadillo" },

    { name: "Baboon", description: "Old World monkey found in Africa and Arabia.", image: "/placeholder_animal.png", link: "/animal/baboon" },
    { name: "Badger", description: "Short-legged omnivore.", image: "/placeholder_animal.png", link: "/animal/badger" },
    { name: "Bat", description: "Mammal capable of true flight.", image: "/placeholder_animal.png", link: "/animal/bat" },
    { name: "Bear", description: "Carnivorous mammal of the family Ursidae.", image: "/placeholder_animal.png", link: "/animal/bear" },
    { name: "Beaver", description: "Large, semiaquatic rodent.", image: "/placeholder_animal.png", link: "/animal/beaver" },
    { name: "Bee", description: "Flying insect known for pollination.", image: "/placeholder_animal.png", link: "/animal/bee" },
    { name: "Beetle", description: "Insect with hardened wing cases.", image: "/placeholder_animal.png", link: "/animal/beetle" },
    { name: "Bird", description: "Warm-blooded egg-laying vertebrate.", image: "/placeholder_animal.png", link: "/animal/bird" },
    { name: "Bison", description: "Large grazing mammal.", image: "/placeholder_animal.png", link: "/animal/bison" },
    { name: "Blue Whale", description: "Largest known animal.", image: "/placeholder_animal.png", link: "/animal/blue-whale" },
    { name: "Buffalo", description: "Large bovid.", image: "/placeholder_animal.png", link: "/animal/buffalo" },
    { name: "Butterfly", description: "Insect with large, often colorful wings.", image: "/placeholder_animal.png", link: "/animal/butterfly" },

    { name: "Camel", description: "Even-toed ungulate known for its humps.", image: "/placeholder_animal.png", link: "/animal/camel" },
    { name: "Capybara", description: "Largest living rodent.", image: "/placeholder_animal.png", link: "/animal/capybara" },
    { name: "Cat", description: "Small carnivorous mammal.", image: "/cat_nature_hd.png", link: "/category/cats" },
    { name: "Cattle", description: "Large domesticated herbivore.", image: "/cow_grazing_hd.png", link: "/category/cows" },
    { name: "Cheetah", description: "Fastest land animal.", image: "/placeholder_animal.png", link: "/animal/cheetah" },
    { name: "Chicken", description: "Subspecies of the red junglefowl.", image: "/rooster_vibrant_hd.png", link: "/category/roosters" },
    { name: "Chimpanzee", description: "Species of great ape.", image: "/placeholder_animal.png", link: "/animal/chimpanzee" },
    { name: "Cow", description: "Mature female cattle.", image: "/cow_grazing_hd.png", link: "/category/cows" },
    { name: "Crocodile", description: "Large aquatic reptile.", image: "/placeholder_animal.png", link: "/animal/crocodile" },

    { name: "Dog", description: "Domesticated descendant of the wolf.", image: "/placeholder_animal.png", link: "/animal/dog" },
    { name: "Dolphin", description: "Aquatic marine mammal.", image: "/placeholder_animal.png", link: "/animal/dolphin" },
    { name: "Donkey", description: "Domesticated member of the horse family.", image: "/placeholder_animal.png", link: "/animal/donkey" },
    { name: "Duck", description: "Common name for numerous species of waterfowl.", image: "/placeholder_animal.png", link: "/animal/duck" },

    { name: "Eagle", description: "Bird of prey.", image: "/placeholder_animal.png", link: "/animal/eagle" },
    { name: "Elephant", description: "Largest living land animal.", image: "/placeholder_animal.png", link: "/animal/elephant" },
    { name: "Emu", description: "Large flightless bird.", image: "/placeholder_animal.png", link: "/animal/emu" },

    { name: "Falcon", description: "Bird of prey in the genus Falco.", image: "/placeholder_animal.png", link: "/animal/falcon" },
    { name: "Ferret", description: "Domesticated form of the European polecat.", image: "/placeholder_animal.png", link: "/animal/ferret" },
    { name: "Fish", description: "Aquatic craniate animal.", image: "/placeholder_animal.png", link: "/animal/fish" },
    { name: "Flamingo", description: "Wading bird known for its pink feathers.", image: "/placeholder_animal.png", link: "/animal/flamingo" },
    { name: "Fox", description: "Small-to-medium-sized omnivorous mammal.", image: "/placeholder_animal.png", link: "/animal/fox" },
    { name: "Frog", description: "Amphibian in the order Anura.", image: "/placeholder_animal.png", link: "/animal/frog" },

    { name: "Giraffe", description: "Tall African mammal.", image: "/placeholder_animal.png", link: "/animal/giraffe" },
    { name: "Goat", description: "Domesticated species of goat-antelope.", image: "/placeholder_animal.png", link: "/animal/goat" },
    { name: "Goose", description: "Waterfowl in the family Anatidae.", image: "/placeholder_animal.png", link: "/animal/goose" },
    { name: "Gorilla", description: "Ground-dwelling herbivorous great ape.", image: "/placeholder_animal.png", link: "/animal/gorilla" },

    { name: "Mini Highland Cow", description: "Small cattle breed from Scotland.", image: "/mini_highland_cow_highland_hd.png", link: "/category/mini-highland-cows" },
    { name: "Rooster", description: "Male chicken.", image: "/rooster_vibrant_hd.png", link: "/category/roosters" },
];

export const categoryDetails: Record<string, { headerImage: string; title: string; description: string }> = {
    'mini-highland-cows': {
        headerImage: '/category_hero_mini_highland.png',
        title: 'Teacup Mini Highland Cows',
        description: 'Discover the charm of Teacup Mini Highland Cows – small in size, big in personality.'
    },
    'cats': {
        headerImage: '/category_hero_cat.png',
        title: 'Domestic Cats',
        description: 'Explore the elegant world of feline companions, from affectionate pets to independent spirits.'
    },
    'roosters': {
        headerImage: '/rooster_vibrant_hd.png',
        title: 'Roosters',
        description: 'Wake up to the vibrant world of roosters, the guardians of the flock.'
    },
    'cows': {
        headerImage: '/category_hero_cattle.png',
        title: 'Cattle & Cows',
        description: 'From dairy to beef, explore the diversity and gentle nature of cattle breeds.'
    }
};
