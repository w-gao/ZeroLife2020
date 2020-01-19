
export enum Categories {

    Daily = "5e2452f93bd0dd251d96f226",
    Kitchen = "5e2453403bd0dd31fb96f228",
    Groceries = "5e24534a3bd0dd0f1196f229",
    Bathroom = "5e2453513bd0dd0a1e96f22a",
    DIY = "5e24535e3bd0ddccd996f22b",
}

export const getCategoryId = (raw: string) => {

    switch (raw.toLowerCase()) {
        case 'daily':
            return Categories.Daily;
        case 'kitchen':
            return Categories.Kitchen;
        case 'groceries':
            return Categories.Groceries;
        case 'bathroom':
            return Categories.Bathroom;
        case 'diy':
            return Categories.DIY;
        default:
            return null;
    }
};

export const Quests = {
    'daily': [      // Daily
        {
            id: 1,
            title: "Drink from a reusable cup (5/5)",
            description: "Anytime you reuse your water bottle or a personal cup.",
            icon: 'hydro-ult-fin',
            achievement: 0
        },
        {
            id: 2,
            title: "Pack a Lunch",
            description: "Days that you make your own food",
            icon: 'hydro-ult-fin',
            achievement: 1
        },
        {
            id: 3,
            title: "Reuse your own bag",
            description: "Anytime you repurpose or use personal bags for anything.",
            icon: 'hydro-ult-fin',
            achievement: 2
        }
    ],
    'kitchen': [        // Kitchen
        {
            id: 1,
            title: "Get a reusable water bottle",
            description: "This doesn’t always mean buying, fun things like mason jars can be repurposed for on the go refreshments.",
            icon: 'hydro-ult-fin',
            achievement: 3
        },
        {
            id: 2,
            title: "Repurpose a container",
            description: "Glassware can be expensive for tupperware options and a lot of times we might already have a container from a previous purchased food item like deli meats, or pickled items that can more than suffice as a container.",
            icon: 'hydro-ult-fin',
            achievement: 4
        }
    ],
    'groceries': [
        {
            id: 1,
            title: "Research a local farmers market",
            description: "Products in stores can often come in unnecessary wrapping. They can also come from unknown sources. Finding a local farmers market is a nice way to support your community and reduce your waste.",
            icon: 'hydro-ult-fin',
            achievement: 5
        },
        {
            id: 2,
            title: "Bring your own bag to the store",
            description: "You don’t need a fancy reusable bag, you just need to repurpose one. Even if it is a plastic bag why continue paying for bags when they get collected everytime you go to the grocery store.",
            icon: 'hydro-ult-fin',
            achievement: 6
        }
    ],
    'bathroom': [
        {
            id: 1,
            title: "Change your toothbrush",
            description: "Replacing your toothbrush after a while is important to good hygiene.  Next time, look for compostable material like bamboo, or plant based plastics that can biodegrade.",
            icon: 'hydro-ult-fin',
            achievement: 7
        },
        {
            id: 2,
            title: "Change your hand soap",
            description: "Washing your hands protects you from disease causing organisms. The most important thing for soap is having containers you can reuse or eliminating containers through the use of eco friendly bars of soap. This means you’re looking for soap with less packaging.",
            icon: 'hydro-ult-fin',
            achievement: 8
        },
        {
            id: 3,
            title: "Change your toothpaste",
            description: "I know! You're already out of toothpaste, bummer! But now you get the chance to explore the wonders of glass toothpaste that makes it easier to get everything out, or looking for metal tubes that can be recycled.",
            icon: 'hydro-ult-fin',
            achievement: 9
        },
        {
            id: 4,
            title: "Change Your Conditioner",
            description: "This one is really similar to your hand soap. Something to consider is what is going down the drain and what happens to my bottle after I use it. This avoids harmful chemicals on your skin as well.",
            icon: 'hydro-ult-fin',
            achievement: 10
        },
        {
            id: 5,
            title: "Fix Your Floss",
            description: "Just like toothpaste, plastic floss containers can disappear rather quickly. This becomes less of a problem when you start getting alternative plant based floss and even floss that can come in refillable containers.",
            icon: 'hydro-ult-fin',
            achievement: 11
        }],
    'diy': [
        {
            id: 1,
            title: "Research how to build a compost bin",
            description: "Compost bins can be built anywhere, you can even do it in your own kitchen with a personal container if you don’t have a yard.",
            icon: 'hydro-ult-fin',
            achievement: 12
        },
        {
            id: 2,
            title: "Research how to make your own lip balm",
            description: "You can make lip balm with as little as 4 ingredients. When you make your own you can choose the container and flavor for yourself. This makes it so you know what is being put on your own skin.",
            icon: 'hydro-ult-fin',
            achievement: 13
        }
    ]
};

export const Achievements = [
    {
        id: 0,
        title: "B.Y.O.C. Party!",
        icon: 'hydro-ult-fin'
    },
    {
        id: 1,
        title: "Pack Mule",
        icon: 'bento-ach-fin'
    },
    {
        id: 2,
        title: "Serious Personal Baggage",
        icon: 'paper-bag-achievementx'
    },
    {
        id: 3,
        title: "Quench Quest",
        description: "24 million liters of oil are needed to produce the over 38 million plastic bottles that end up in landfills each year. Not only are you minimizing this number but your saving yourself some money.",
        icon: 'hydro-achievement'
    },
    {
        id: 4,
        title: "Crisis Contained",
        description: "Over 250 million tons of plastic get produced each year. By repurposing things you already own your wallet lives a fuller life and you help reduce the demand on this number.",
        icon: 'tupper-achieve'
    },
    {
        id: 5,
        title: "The Ranch Hand",
        description: "Not only have studies shown that Food can be less expensive at farmers markets, but also most farmers travel fewer than 50miles to sell their produce. This means you will probably recognize exactly where your food is coming from.",
        icon: 'market-icon'
    },
    {
        id: 6,
        title: "We got this in the bag",
        description: "12 million barrels of oil are used in the construction of the 100 billion plastic bags Americans use each year. Now with your own we have hopefully pushed that number down to 999,999,999. Go team!",
        icon: 'paper-bag'
    },
    {
        id: 7,
        title: "Bamboozled",
        description: "Every Single plastic toothbrush evermade is still in existence. You just did something for the earth, and your pearly whites.",
        icon: 'toothbrush-achievementx'
    },
    {
        id: 8,
        title: "You’re Soap-er Cool",
        description: "The average home goes through 30 single use plastic bottles for cleaning a year. You can now keep bacteria and waste in check! ",
        icon: 'soap-ach-fin'
    },
    {
        id: 9,
        title: "Totally Tubular",
        description: "Around 1 billion tubes of toothpaste are thrown out every year. Now, at least one of those tubes can be repurposed.",
        icon: 'toothpaste-achievementx'
    },
    {
        id: 10,
        title: "Pavlov Approved Conditioning",
        description: "Over half a million shampoo bottles end up in a landfill. Now things will end up less full.",
        icon: 'conditioner-achieve'
    },
    {
        id: 11,
        title: "You are Flossome",
        description: "Traditional floss coats it in a substance to help receive a better glide while using it. It turns out that it actually contain PFA chemicals that can be harmful to your body. So you my friend just saved yourself some health stress.",
        icon: 'floss_ACHIEVEMENT'
    },
    {
        id: 12,
        title: "Garden Blob",
        description: "A shy and fairy-like blob",
        icon: 'fairy'
    },
    {
        id: 13,
        title: "Crafty",
        description: "The most dangerous part of a product can be the way it’s made. Avoid supporting petroleum industry by making lip balm at home.",
        icon: 'trophy'
    }
];
