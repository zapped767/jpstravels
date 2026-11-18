export const CONTACT = {
  phone: '+94 71 311 4000',
  wa: '94713114000',
  email: 'jpsjanaka@gmail.com',
  address: '188, 2nd Floor, Kandy Road, Kurunegala, Sri Lanka 60000',
  map: 'https://www.google.com/maps/search/?api=1&query=188%20Kandy%20Road%20Kurunegala%20Sri%20Lanka',
};

export const photos = {
  sigiriya: '/images/sigiriya.webp',
  ella: '/images/ella.webp',
  mirissa: '/images/mirissa.webp',
  galle: '/images/galle.webp',
  yala: '/images/yala.webp',
  kandy: '/images/kandy.webp',
  nuwara: '/images/nuwara.webp',
  unawatuna: '/images/unawatuna.webp',
  trinco: '/images/trinco.webp',
  dambulla: '/images/dambulla.webp',
  negombo: '/images/negombo.webp',
  colombo: '/images/colombo.webp',
  polonnaruwa: '/images/polonnaruwa.webp',
};

export type TourDay = {
  title: string;
  place: string;
  description: string;
  highlights: string[];
  overnight: string;
  image: string;
};

export type Tour = {
  slug: string;
  title: string;
  eyebrow: string;
  duration: number;
  nights: number;
  price: number | null;
  description: string;
  hero: string;
  heroPosition?: string;
  route: string[];
  included: string[];
  excluded: string[];
  days: TourDay[];
};

function day(place: string, title: string, description: string, highlights: string[], overnight: string, image: string): TourDay {
  return { place, title, description, highlights, overnight, image };
}

const classic = [
 day('Negombo','A warm island welcome','Meet your driver at Bandaranaike International Airport and ease into Sri Lanka with a coastal evening.',['Airport welcome','Hotel check-in','Coastal sunset'],'Negombo',photos.negombo),
 day('Sigiriya','Journey to the Cultural Triangle','Travel inland, visit Dambulla Cave Temple and settle beneath the famous Lion Rock.',['Dambulla Cave Temple','Countryside drive','Local cuisine'],'Sigiriya',photos.dambulla),
 day('Sigiriya','Climb the kingdom in the sky','An early Sigiriya visit, followed by village experiences and an optional Minneriya-area safari subject to conditions.',['Sigiriya Rock Fortress','Village experience','Optional elephant safari'],'Sigiriya',photos.sigiriya),
 day('Kandy','The island’s cultural soul','Journey towards Kandy, visiting gardens and lakeside viewpoints.',['Kandy Lake','Botanical garden option','Local craft stops'],'Kandy',photos.kandy),
 day('Kandy','Tradition and sacred heritage','Visit the Temple of the Sacred Tooth Relic and enjoy time exploring the city.',['Temple of the Sacred Tooth Relic','City walk','Cultural performance option'],'Kandy',photos.kandy),
 day('Nuwara Eliya','Through the tea country','Follow winding roads through plantations and waterfalls into the cooler highlands.',['Tea estate visit','Waterfall viewpoints','Gregory Lake'],'Nuwara Eliya',photos.nuwara),
 day('Ella','The iconic hill-country journey','Head towards Ella; a scenic railway segment may be arranged subject to ticket availability.',['Nine Arch Bridge','Little Adam’s Peak option','Hill-country views'],'Ella',photos.ella),
 day('Yala','Waterfalls to the wilderness','Leave the misty hills behind and travel towards the wilderness of the southern plains.',['Ravana Falls','Scenic drive','Relax at safari lodge'],'Yala area',photos.yala),
 day('Yala','A day on safari','Enjoy a guided wildlife drive; sightings vary and depend on park operations.',['Jeep safari','Birdwatching','Wildlife photography'],'Yala area',photos.yala),
 day('Mirissa','The golden south coast','Make your way westwards to calm beach days and fresh coastal flavours.',['Mirissa beach','Coastal viewpoints','Sunset by the sea'],'Mirissa',photos.mirissa),
 day('Galle','Along the historic ramparts','Explore Galle Fort and spend an afternoon around Unawatuna and the coast.',['Galle Fort','Galle Lighthouse','Unawatuna beach'],'Galle',photos.galle),
 day('Colombo','Farewell, until next time','Return towards Colombo or the airport, with stops depending on departure timing.',['Flexible city stop','Airport transfer','Departure support'],'Departure',photos.colombo)
];
const classicTours: Tour[] = [
{slug:'island-highlights-5-days',title:'Sri Lanka Signature Escape',eyebrow:'The Essential Island',duration:5,nights:4,price:490,description:'A short inland escape through Sigiriya, Kandy and Ella’s tea-covered hills.',hero:photos.ella,route:['Negombo','Sigiriya','Kandy','Ella','Colombo'],included:['Private air-conditioned transport','English-speaking chauffeur guide','Itinerary planning','Airport pickup and drop-off'],excluded:['Hotels and meals unless quoted','Entrance tickets and activities','Flights, visas and insurance'],days:[classic[0],classic[2],classic[3],classic[6],classic[11]]},
{slug:'heritage-hills-coast-8-days',title:'Heritage, Hills & Ocean',eyebrow:'Culture & Coast',duration:8,nights:7,price:890,description:'Ancient wonders, Kandy traditions, Ella mountains and sun-kissed beaches.',hero:photos.sigiriya,route:['Negombo','Dambulla','Sigiriya','Kandy','Nuwara Eliya','Ella','Mirissa','Galle','Colombo'],included:['Private air-conditioned transport','English-speaking chauffeur guide','Flexible route support','Airport transfers'],excluded:['Hotels and meals unless quoted','Entrance tickets and activities','Flights, visas and insurance'],days:[classic[0],classic[1],classic[2],classic[3],classic[5],classic[6],classic[9],day('Galle & Colombo','Galle Fort and departure','Visit Galle Fort if your flight timing allows, then continue to Colombo or the airport. For early flights, swap the Galle stop to the previous day or add a Colombo-area overnight.',['Galle Fort option','Airport transfer'],'Departure',photos.galle)]},
{slug:'grand-sri-lanka-12-days',title:'The Grand Sri Lanka Journey',eyebrow:'Complete Island Experience',duration:12,nights:11,price:1390,description:'From Sigiriya to Ella, Yala’s wildlife and Galle’s charm — a richer journey across the island.',hero:photos.yala,route:['Negombo','Dambulla','Sigiriya','Kandy','Nuwara Eliya','Ella','Yala','Mirissa','Galle','Colombo'],included:['Private air-conditioned transport','English-speaking chauffeur guide','Airport transfers','Custom itinerary adjustments'],excluded:['Hotels and meals unless quoted','Entrance tickets and activities','Flights, visas and insurance'],days:classic},
{slug:'ultimate-ceylon-15-days',title:'Ultimate Ceylon Discovery',eyebrow:'Slow Travel, Deep Discovery',duration:15,nights:14,price:1790,description:'A longer route including ancient cities, highland walks, safari and more unhurried coastal time.',hero:photos.trinco,route:['Negombo','Dambulla','Sigiriya','Polonnaruwa','Trincomalee','Kandy','Nuwara Eliya','Ella','Yala','Mirissa','Galle','Colombo'],included:['Private air-conditioned transport','English-speaking chauffeur guide','Airport transfers','Flexible customisation'],excluded:['Hotels and meals unless quoted','Entrance tickets and activities','Flights, visas and insurance'],days:[classic[0],classic[1],classic[2],day('Polonnaruwa','Ancient kingdoms revealed','Visit the historic ruins at Polonnaruwa and discover the island’s rich past.',['Ancient city','Cycling option','Cultural discovery'],'Sigiriya',photos.polonnaruwa),day('Trincomalee','East-coast waters','Drive to Trincomalee for a quieter escape along the eastern shoreline.',['Uppuveli','Beach walk','Relaxation'],'Trincomalee',photos.trinco),day('Trincomalee','The blue of Nilaveli','Enjoy beautiful beaches; snorkelling is subject to sea conditions and local operations.',['Nilaveli Beach','Pigeon Island option','Free time'],'Trincomalee',photos.trinco),...classic.slice(3,12)]}
];
export const whatsapp=(message:string)=>`https://wa.me/${CONTACT.wa}?text=${encodeURIComponent(message)}`;
export const quote=(name:string)=>whatsapp(`Hello JPS Travels! I would like a personalised quote for ${name}. Please share availability, confirmed inclusions and total USD pricing.`);

const trailInclusions = [
  'Private air-conditioned transport',
  'English-speaking chauffeur guide',
  'Airport pickup and drop-off',
  'Itinerary planning around temple visits',
];

const trailExclusions = [
  'Hotels and meals unless quoted',
  'Entrance tickets and activities',
  'Flights, visas and insurance',
];

export const trailTours: Tour[] = [
  {
    slug: 'ramayana-highlands-5-days',
    title: 'Ramayana Highlands Pilgrimage',
    eyebrow: 'Ramayana Trail',
    duration: 5, nights: 4, price: null,
    description: 'Follow the hill-country trail through Ramboda, Seetha Eliya, Hakgala, Divurumpola and Ella.',
    hero: '/images/seetha.webp',
    route: ['Kandy', 'Ramboda', 'Nuwara Eliya', 'Seetha Eliya', 'Welimada', 'Ella', 'Colombo'],
    included: trailInclusions, excluded: trailExclusions,
    days: [
      day('Kandy', 'Arrival and transfer to Kandy', 'Meet your driver at the airport and head inland. If your flight arrives late, ask about starting from Negombo.', ['Airport meet-up', 'Kandy transfer'], 'Kandy', photos.kandy),
      day('Ramboda', 'Hanuman’s hill-country shrine', 'Visit Sri Bhakta Hanuman Temple before continuing through the tea hills to Nuwara Eliya.', ['Sri Bhakta Hanuman Temple', 'Ramboda scenery'], 'Nuwara Eliya', '/images/hanuman.webp'),
      day('Seetha Eliya', 'Seetha Amman and Hakgala', 'Visit the streamside shrine and make time for Hakgala Botanic Gardens, with an introduction to the local Ashok Vatika tradition.', ['Seetha Amman Temple', 'Hakgala Botanic Gardens'], 'Nuwara Eliya', '/images/seetha.webp'),
      day('Ella', 'Divurumpola and Ravana country', 'Visit Divurumpola on the way to Ella. See Ravana Falls and discuss a cave visit with your guide if time and access allow.', ['Divurumpola', 'Ravana Falls', 'Optional Ravana Cave'], 'Ella', '/images/ravana-falls.webp'),
      day('Colombo', 'Return across the island', 'Travel to Colombo or the airport. For early flights, add a Colombo-area night so the transfer fits your schedule.', ['Private transfer', 'Optional Colombo extension'], 'Departure', photos.colombo),
    ],
  },
  {
    slug: 'ramayana-ravana-trail-9-days',
    title: 'The Ramayana & Ravana Trail',
    eyebrow: 'Ramayana Trail',
    duration: 9, nights: 8, price: null,
    description: 'Travel from the Shiva temples of Chilaw and Trincomalee through Sita’s highland trail to the sacred south.',
    hero: '/images/koneswaram-reference.webp',
    heroPosition: '50% 26%',
    route: ['Negombo', 'Chilaw', 'Trincomalee', 'Sigiriya', 'Kandy', 'Ramboda', 'Nuwara Eliya', 'Ella', 'Kataragama', 'Galle', 'Kelaniya'],
    included: trailInclusions, excluded: trailExclusions,
    days: [
      day('Negombo', 'Arrive on the west coast', 'Meet your driver and settle into Negombo. Use the rest of the day to rest before the temple route.', ['Airport pickup', 'Leisure time'], 'Negombo', photos.negombo),
      day('Chilaw', 'Two Shiva shrines', 'Visit Munneswaram and Manavari if temple hours allow, then drive across the island to Trincomalee.', ['Munneswaram Temple', 'Manavari Temple', 'East-coast transfer'], 'Trincomalee', '/images/munneswaram.webp'),
      day('Trincomalee', 'Koneswaram and Swami Rock', 'Walk through the Fort Frederick approach to Koneswaram Temple. Hear the local tradition of Ravana’s devotion to Shiva.', ['Koneswaram Temple', 'Fort Frederick', 'Optional coastal time'], 'Trincomalee', '/images/koneswaram-reference.webp'),
      day('Sigiriya', 'From Lion Rock to Kandy', 'Pause in the Cultural Triangle for Sigiriya’s gardens or the rock climb as time allows. Continue to Kandy for the night.', ['Sigiriya visit', 'Transfer to Kandy'], 'Kandy', photos.sigiriya),
      day('Ramboda', 'Hanuman and the tea hills', 'Visit Sri Bhakta Hanuman Temple and continue into the highlands. A short tea stop can fit between drives.', ['Sri Bhakta Hanuman Temple', 'Tea-country scenery'], 'Nuwara Eliya', '/images/hanuman.webp'),
      day('Seetha Eliya', 'Sita’s highland trail', 'Visit Seetha Amman Temple, Hakgala and Divurumpola before travelling to Ella. Your driver can adjust the pace to temple schedules.', ['Seetha Amman Temple', 'Hakgala', 'Divurumpola'], 'Ella', '/images/seetha.webp'),
      day('Ella', 'Ravana Falls and Kataragama', 'Visit the roadside falls and ask about the cave if access permits. Continue south to the Kataragama sacred precinct.', ['Ravana Falls', 'Optional Ravana Cave', 'Kataragama'], 'Kataragama area', '/images/ravana-falls.webp'),
      day('South Coast', 'Ussangoda and Rumassala', 'Follow the south coast from the red-earth plateau of Ussangoda to Rumassala near Galle. Adjust the stops to your preferred pace.', ['Ussangoda', 'Rumassala', 'Galle area'], 'Galle area', '/images/ussangoda.webp'),
      day('Kelaniya', 'Vibhishana shrine and departure', 'Visit Kelaniya before your airport transfer if flight timing permits. Add a Colombo-area night if you need more time.', ['Kelaniya and Vibhishana Shrine', 'Airport transfer'], 'Departure', '/images/kelaniya.webp'),
    ],
  },
];

export const tours = [...classicTours, ...trailTours];
