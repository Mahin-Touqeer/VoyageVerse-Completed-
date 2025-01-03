let sampleDestinations = [
    {
        title: "Eiffel Tower",
        description: "An iconic landmark in Paris, offering panoramic views of the city from its observation decks.",
        image: [
            "https://plus.unsplash.com/premium_photo-1661963064037-cfcf2e10db2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Champ de Mars, Paris",
        country: "France"
    },
    {
        title: "Great Wall of China",
        description: "A historic fortification stretching thousands of miles, showcasing ancient Chinese engineering.",
        image: [
            "https://images.unsplash.com/photo-1508804052814-cd3ba865a116?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            "https://plus.unsplash.com/premium_photo-1664304492320-8359efcaad38?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Huairou District, Beijing",
        country: "China"
    },
    {
        title: "Santorini",
        description: "A picturesque island known for its white-washed buildings, blue domes, and breathtaking sunsets.",
        image: ["https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1671556024985-08534340bee9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Santorini",
        country: "Greece"
    },
    {
        title: "Statue of Liberty",
        description: "A symbol of freedom and democracy, standing proudly in New York Harbor.",
        image: ["https://plus.unsplash.com/premium_photo-1694475364942-b755ad751a40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1528697294404-209d29137492?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Liberty Island, New York",
        country: "USA"
    },
    {
        title: "Colosseum",
        description: "An ancient Roman amphitheater known for its historical significance and grand architecture.",
        image: ["https://plus.unsplash.com/premium_photo-1661963952208-2db3512ef3de?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1704915332184-68202025c9ba?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Rome",
        country: "Italy"
    },
    {
        title: "Taj Mahal",
        description: "A mausoleum built by Emperor Shah Jahan, symbolizing eternal love.",
        image: ["https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1587135941948-670b381f08ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Agra",
        country: "India"
    },
    {
        title: "Sydney Opera House",
        description: "An architectural marvel and a hub for performing arts in Sydney.",
        image: [
            "https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1562791098-df1ae65dee79?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Sydney",
        country: "Australia"
    },
    {
        title: "Burj Khalifa",
        description: "The tallest building in the world, offering breathtaking views of Dubai.",
        image: [
            "https://images.unsplash.com/photo-1583759604327-f9dcd23499d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1536427214932-ca1936622ac8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Dubai",
        country: "UAE"
    },
    {
        title: "Mount Fuji",
        description: "Japan's iconic volcano and a popular destination for hikers and photographers.",
        image: [
            "https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1635934901493-f45dd956d4b6?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1610375229632-c7158c35a537?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Honshu Island",
        country: "Japan"
    },
    {
        title: "Banff National Park",
        description: "Known for its turquoise lakes, majestic mountains, and stunning landscapes.",
        image: [
            "https://images.unsplash.com/photo-1564846930470-4b034d717347?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1564847135014-76cfea730fa3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Alberta",
        country: "Canada"
    },
    {
        title: "Serengeti National Park",
        description: "Famous for its wildlife and the annual migration of millions of animals.",
        image: [
            "https://images.unsplash.com/photo-1528275646751-ff237d1cd935?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1661848168757-889335a08555?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Tanzania",
        country: "Tanzania"
    },
    {
        title: "Petra",
        description: "An ancient city carved into pink sandstone cliffs, also known as the Rose City.",
        image: [
            "https://images.unsplash.com/photo-1705628078563-966777473473?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1714582572262-3a9b0abda365?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Ma'an",
        country: "Jordan"
    },
    {
        title: "Antelope Canyon",
        description: "A stunning slot canyon known for its wave-like structure and light beams.",
        image: [
            "https://images.unsplash.com/photo-1473456229365-7a538630163b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1643674261560-64796b3ac6ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Arizona",
        country: "USA"
    },
    {
        title: "Angkor Wat",
        description: "The largest religious monument in the world, showcasing Khmer architecture.",
        image: [
            "https://plus.unsplash.com/premium_photo-1661963188432-5de8a11f21a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1653959956536-0fe87d1c0ac4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Siem Reap",
        country: "Cambodia"
    },
    {
        title: "Table Mountain",
        description: "A flat-topped mountain offering panoramic views of Cape Town.",
        image: [
            "https://images.unsplash.com/photo-1663406174098-5d8f24a6e7f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1663585671172-b8f10cbc11de?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Cape Town",
        country: "South Africa"
    },
    {
        title: "Cinque Terre",
        description: "A string of picturesque coastal villages along the Italian Riviera.",
        image: [
            "https://plus.unsplash.com/premium_photo-1661962567804-e4ad10d30d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1660163738144-d164edab9473?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Liguria",
        country: "Italy"
    },
    {
        title: "Halong Bay",
        description: "Known for emerald waters and thousands of towering limestone islands.",
        image: [
            "https://plus.unsplash.com/premium_photo-1719955781545-c60219441bfc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1568333409654-2fa274761195?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Quang Ninh",
        country: "Vietnam"
    },
    {
        title: "Yellowstone National Park",
        description: "Famous for geysers, hot springs, and diverse wildlife.",
        image: [
            "https://plus.unsplash.com/premium_photo-1694475648285-aefab04c1a77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1630417923898-c395b6b90c9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Wyoming",
        country: "USA"
    },
    {
        title: "Christ the Redeemer",
        description: "An iconic statue overlooking the city of Rio de Janeiro, symbolizing peace and grace.",
        image: [
            "https://images.unsplash.com/photo-1698861318156-9f08765535da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1561831612-de4b1b304fbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Rio de Janeiro",
        country: "Brazil"
    },
    {
        title: "Galápagos Islands",
        description: "A volcanic archipelago famous for its diverse wildlife and pristine natural beauty.",
        image: [
            "https://images.unsplash.com/photo-1599132104776-eeab32d45cfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1664303882625-5be49d5cd3e3?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Pacific Ocean",
        country: "Ecuador"
    },
    {
        title: "Stonehenge",
        description: "A prehistoric monument and one of the world's greatest mysteries.",
        image: [
            "https://images.unsplash.com/photo-1599833975787-5c143f373c30?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1503624945224-2b447278f400?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Wiltshire",
        country: "United Kingdom"
    },
    {
        title: "Neuschwanstein Castle",
        description: "A fairytale castle perched on a hill, inspiring Disney's Sleeping Beauty Castle.",
        image: [
            "https://images.unsplash.com/photo-1485465053475-dd55ed3894b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1668453713900-b56d54ea2f2f?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Bavaria",
        country: "Germany"
    },
    {
        title: "The Maldives",
        description: "A tropical paradise with crystal-clear waters, coral reefs, and luxurious overwater bungalows.",
        image: [
            "https://images.unsplash.com/photo-1532778039000-9c5c9d4130c5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1549248166-7a3b3ac4ab66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Maldives",
        country: "Maldives"
    },
    {
        title: "Grand Canyon",
        description: "A vast natural wonder carved by the Colorado River, offering breathtaking views.",
        image: [
            "https://images.unsplash.com/photo-1555997157-5c8da70533b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1543266502-7a301a17e75e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Arizona",
        country: "USA"
    },
    {
        title: "Bora Bora",
        description: "A luxury island destination with turquoise lagoons and iconic overwater villas.",
        image: [
            "https://images.unsplash.com/photo-1532408840957-031d8034aeef?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1509151143140-7295d8a673ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Leeward Islands",
        country: "French Polynesia"
    },
    {
        title: "Mount Kilimanjaro",
        description: "Africa's highest peak and a popular destination for climbers and adventurers.",
        image: [
            "https://plus.unsplash.com/premium_photo-1664304370557-233bccc0ac85?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1525535816528-974e4b19eb51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Kilimanjaro Region",
        country: "Tanzania"
    },
    {
        title: "Amsterdam Canals",
        description: "A picturesque network of canals lined with historic buildings and charming bridges.",
        image: [
            "https://plus.unsplash.com/premium_photo-1661962703455-a0f4118c37e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1723152720678-da4ee06f4505?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        location: "Amsterdam",
        country: "Netherlands"
    }
]

export default sampleDestinations;
