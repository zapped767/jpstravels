export const categories = ['Heritage', 'Hill country', 'Beaches', 'Wildlife', 'Ramayana'] as const;

type Category = typeof categories[number];

type PlaceInput = {
  id: string;
  name: string;
  region: string;
  category: Category;
  summary: string;
  details: string;
  highlights: string[];
  tip: string;
  imageAlt?: string;
  hasPhoto?: false;
  aliases?: string[];
  imagePosition?: string;
  gallery?: { image: string; alt: string }[];
};

export type Destination = PlaceInput & { image?: string; imageAlt: string };

const places: PlaceInput[] = [
  {
    id: 'sigiriya', aliases: ['Lion Rock'], name: 'Sigiriya Rock Fortress', region: 'Cultural Triangle', category: 'Heritage',
    summary: 'A rock citadel rising above the forest canopy.',
    details: 'Built around a towering rock outcrop, Sigiriya brings together royal gardens, painted frescoes and the remains of a summit citadel. Follow the water gardens to the great lion paws, then climb for a wide view over the central plains.',
    highlights: ['Royal water gardens', 'Lion Gate and summit ruins', 'Fresco gallery and Mirror Wall'],
    tip: 'Start early for cooler conditions. The upper staircase is exposed, so allow time for rests and bring water.',
    imageAlt: 'Sigiriya Rock Fortress rising above dense green forest',
    imagePosition: '52% 52%',
    gallery: [{ image: '/images/sigiriya-reference.webp', alt: 'The lion paws, frescoes, water gardens and summit at Sigiriya' }],
  },
  {
    id: 'ella', name: 'Ella & Nine Arch Bridge', region: 'Uva Highlands', category: 'Hill country',
    summary: 'Tea hills, a stone railway viaduct and walks above Ella Gap.',
    details: 'Ella makes a relaxed base for the hill country. Walk to viewpoints around the Nine Arch Bridge, climb Little Adam’s Peak and spend an unhurried afternoon among the tea hills overlooking Ella Gap.',
    highlights: ['Nine Arch Bridge viewpoints', 'Little Adam’s Peak', 'Ella Gap and tea country'],
    tip: 'Use paths and viewpoints away from the tracks. Ask about train tickets early if you plan to travel by rail.',
    imageAlt: 'Nine Arch Bridge crossing a green valley in Ella',
  },
  {
    id: 'galle', name: 'Galle Fort', region: 'South Coast', category: 'Heritage',
    summary: 'A seafront lighthouse and streets built for wandering.',
    details: 'Galle’s fortified old town rewards a slow walk. Follow the ramparts by the Indian Ocean, then head inland for historic houses, museums, small shops and courtyards.',
    highlights: ['Galle Lighthouse', 'Fort ramparts', 'Historic lanes and museums'],
    tip: 'Late afternoon is a good time for the ramparts. Combine Galle with Unawatuna or Rumassala.',
    imageAlt: 'Galle Fort lighthouse on the southern coast',
  },
  {
    id: 'yala', name: 'Yala National Park', region: 'Southeast Sri Lanka', category: 'Wildlife',
    summary: 'Jeep tracks through dry forest, lagoons and scrubland.',
    details: 'Across Yala’s dry forest and coastal wetlands, a guided safari may encounter elephants, crocodiles, birds and the Sri Lankan leopard. The changing habitat is part of the experience.',
    highlights: ['Guided jeep safari', 'Coastal lagoons and dry forest', 'Elephant, leopard and bird habitats'],
    tip: 'Check which park blocks are open. Wildlife sightings vary with conditions.',
    imageAlt: 'Wildlife in Yala National Park',
  },
  {
    id: 'mirissa', name: 'Mirissa', region: 'South Coast', category: 'Beaches',
    summary: 'A palm-lined bay for slow mornings and ocean sunsets.',
    details: 'Mirissa suits a few easy days on the south coast. Spend time on the bay, walk to coastal viewpoints and ask about seasonal marine trips if you would like to get out on the water.',
    highlights: ['Mirissa Bay', 'Coconut Tree Hill', 'Seasonal whale-watching options'],
    tip: 'Sea excursions depend on weather and swell. Ask about responsible operators before booking.',
  },
  {
    id: 'kandy', name: 'Kandy', region: 'Central Highlands', category: 'Heritage',
    summary: 'A lakeside city centred on the Temple of the Sacred Tooth Relic.',
    details: 'Explore the temple precinct and the paths around Kandy Lake, then make time for the Royal Botanic Gardens at Peradeniya. Kandy works well as a break between the Cultural Triangle and the tea country.',
    highlights: ['Temple of the Sacred Tooth Relic', 'Kandy Lake', 'Royal Botanic Gardens, Peradeniya'],
    tip: 'Wear clothing that covers your shoulders and knees for the temple. Allow extra time during ceremonies or festivals.',
  },
  {
    id: 'nuwara', name: 'Nuwara Eliya', region: 'Central Highlands', category: 'Hill country',
    summary: 'Cool mornings, tea estates and lakeside walks.',
    details: 'Sri Lanka’s high tea country offers estate visits, winding roads, gardens and cooler evenings. Use Nuwara Eliya as a base for Hakgala, Seetha Amman Temple or a morning at Horton Plains.',
    highlights: ['Tea estate or factory visit', 'Gregory Lake', 'Waterfall viewpoints on the Ramboda road'],
    tip: 'Pack a light layer and check ahead for factory tours. Estate operations vary by day.',
  },
  {
    id: 'unawatuna', name: 'Unawatuna', region: 'South Coast', category: 'Beaches',
    summary: 'A sheltered bay within easy reach of Galle.',
    details: 'Unawatuna mixes beach cafés, short coastal walks and easy day trips to Galle Fort. Nearby Rumassala gives you a different view across the bay.',
    highlights: ['Unawatuna Bay', 'Rumassala headland', 'Short drive to Galle Fort'],
    tip: 'Check local sea conditions and stay within recommended swimming areas.',
  },
  {
    id: 'trinco', name: 'Trincomalee & Nilaveli', region: 'East Coast', category: 'Beaches',
    summary: 'Long beaches and a harbour framed by a sacred headland.',
    details: 'Pair Trincomalee’s harbour and Fort Frederick with beach time in Nilaveli or Uppuveli. The east coast works well as a slower stop after the Cultural Triangle.',
    highlights: ['Nilaveli and Uppuveli', 'Fort Frederick', 'Seasonal Pigeon Island excursions'],
    tip: 'Ask about sea conditions before planning snorkelling. Pair this stop with Koneswaram Temple.',
    imageAlt: 'The coastline at Nilaveli near Trincomalee',
  },
  {
    id: 'dambulla', name: 'Dambulla Cave Temple', region: 'Cultural Triangle', category: 'Heritage',
    summary: 'Five cave shrines filled with Buddhist paintings and sculpture.',
    details: 'Dambulla’s cave complex sits above the surrounding plains. Inside, painted ceilings and rows of Buddhist figures reward a visit at a slower pace.',
    highlights: ['Five cave shrines', 'Buddhist murals and statues', 'Views from the temple approach'],
    tip: 'Expect a stepped uphill approach. Bring temple-appropriate clothing and follow photography guidance.',
  },
  {
    id: 'jaffna', name: 'Jaffna & Nallur Kandaswamy Kovil', region: 'Northern Peninsula', category: 'Heritage',
    summary: 'Tamil heritage, an ornate Murugan temple and northern flavours.',
    details: 'Explore Nallur’s active Hindu temple, the old fort and markets around Jaffna. A longer stay allows time for causeways, peninsula villages and coastal stops.',
    highlights: ['Nallur Kandaswamy Kovil', 'Jaffna Fort', 'Markets and northern Tamil cuisine'],
    tip: 'Ask about dress, photography and festival access at Nallur. Check ferry schedules if adding an island trip.',
    imageAlt: 'The decorated entrance of Nallur Kandaswamy Kovil in Jaffna',
  },
  {
    id: 'negombo', name: 'Negombo', region: 'West Coast', category: 'Beaches',
    summary: 'Lagoon life and a gentle first or last night by the airport.',
    details: 'Negombo gives you time to settle in near the airport. Explore the lagoon, watch the fishing harbour wake up or take a short walk along the coast before heading inland.',
    highlights: ['Negombo Lagoon', 'Fishing harbour and market', 'Beachfront sunset'],
    tip: 'Allow extra time at the fish market and ask before photographing people at work.',
  },
  {
    id: 'colombo', name: 'Colombo', region: 'West Coast', category: 'Heritage',
    summary: 'Markets, temples and seafront walks in the island’s largest city.',
    details: 'Colombo combines the bustle of Pettah with the open seafront at Galle Face and the quiet of temple courtyards. Build a short city visit around your arrival or departure window.',
    highlights: ['Pettah market streets', 'Galle Face Green', 'Gangaramaya Temple'],
    tip: 'Plan around city traffic. Give yourself generous time for an airport transfer.',
  },
  {
    id: 'polonnaruwa', name: 'Polonnaruwa Ancient City', region: 'Cultural Triangle', category: 'Heritage',
    summary: 'Medieval royal ruins and stone Buddhas carved at Gal Vihara.',
    details: 'Visit the ruined palace, the temples of the Sacred Quadrangle and the granite sculptures at Gal Vihara. The archaeological area is spread out, so a bicycle or vehicle can help connect the stops.',
    highlights: ['Gal Vihara', 'Sacred Quadrangle', 'Royal palace ruins'],
    tip: 'Start early and bring sun protection. Dress respectfully at the religious monuments.',
  },
  {
    id: 'anuradhapura', name: 'Anuradhapura', region: 'North Central Plains', category: 'Heritage',
    summary: 'Ancient stupas and a city that remains a centre of Buddhist pilgrimage.',
    details: 'Anuradhapura brings living pilgrimage sites and ancient engineering into one visit. See the Sri Maha Bodhi precinct, great stupas and historic reservoirs across the sacred city.',
    highlights: ['Sri Maha Bodhi precinct', 'Ruwanwelisaya stupa', 'Jetavanaramaya'],
    tip: 'Give the sacred city several hours. Light, modest clothes and easy-to-remove shoes are practical.',
  },
  {
    id: 'horton', name: 'Horton Plains', region: 'Central Highlands', category: 'Hill country',
    summary: 'High-altitude grasslands, cloud forest and an escarpment called World’s End.',
    details: 'The walking circuit crosses open grassland and forest before reaching World’s End and Baker’s Falls. Early visits often offer clearer views, although mountain weather changes quickly.',
    highlights: ['World’s End viewpoint', 'Baker’s Falls', 'Montane grassland and forest'],
    tip: 'Start early, bring layers and stay on the marked trail, especially around exposed viewpoints.',
  },
  {
    id: 'udawalawe', name: 'Udawalawe National Park', region: 'Southern Foothills', category: 'Wildlife',
    summary: 'Open grassland and a reservoir known for elephant habitat.',
    details: 'Udawalawe’s wide plains make a striking change after the tea hills. Explore the park by guided jeep and ask about visiting the Elephant Transit Home separately.',
    highlights: ['Guided safari', 'Elephant and waterbird habitat', 'Elephant Transit Home option'],
    tip: 'An early or late safari avoids the hottest part of the day. Follow your guide’s instructions around wildlife.',
  },
  {
    id: 'minneriya', name: 'Minneriya National Park', region: 'Cultural Triangle', category: 'Wildlife',
    summary: 'A reservoir landscape where elephants may gather seasonally.',
    details: 'Minneriya’s reservoir and surrounding forest draw a variety of wildlife. Depending on water levels and animal movements, your guide may suggest Minneriya, Kaudulla or another nearby park.',
    highlights: ['Reservoir-edge safari', 'Seasonal elephant gatherings', 'Waterbirds and dry-zone woodland'],
    tip: 'Keep your safari booking flexible so your guide can suggest the best park for the conditions.',
  },
  {
    id: 'wilpattu', name: 'Wilpattu National Park', region: 'Northwest Sri Lanka', category: 'Wildlife',
    summary: 'Quiet forest tracks and natural lakes known as villus.',
    details: 'Wilpattu is an unhurried safari through dry forest and open water. The villus attract birds and other wildlife, and leopard or sloth bear sightings are possible.',
    highlights: ['Natural villus', 'Guided forest safari', 'Birdwatching'],
    tip: 'Build in a longer safari window and check park access before travel.',
  },
  {
    id: 'pidurangala', name: 'Pidurangala Rock', region: 'Cultural Triangle', category: 'Hill country',
    summary: 'A rocky climb with a direct view across to Sigiriya.',
    details: 'The Pidurangala route passes a temple before reaching a boulder scramble and an open summit. The view across to Lion Rock provides a different perspective on the Cultural Triangle.',
    highlights: ['View of Sigiriya', 'Rock-summit hike', 'Temple approach'],
    tip: 'Wear shoes with grip. The final scramble may be unsuitable for people with limited mobility.',
  },
  {
    id: 'koneswaram', aliases: ['Thirukoneswaram', 'Ravanan', 'Shiva temple'], name: 'Koneswaram Temple', region: 'Trincomalee · East Coast', category: 'Ramayana',
    summary: 'A cliff-top Shiva temple overlooking Trincomalee Bay.',
    details: 'Thirukoneswaram stands on Swami Rock above the sea. Sri Lanka’s Ramayana trail traditions associate the temple with Ravana’s devotion to Shiva. It remains an active place of worship.',
    highlights: ['Shiva temple and Swami Rock', 'Views over Trincomalee Bay', 'Fort Frederick approach'],
    tip: 'Bring modest clothing, remove shoes where requested and ask before taking photos in worship areas.',
    imageAlt: 'Koneswaram Temple on Swami Rock in Trincomalee',
    gallery: [
      { image: '/images/koneswaram-reference.webp', alt: 'Shiva statue at Koneswaram Temple above the sea' },
      { image: '/images/koneswaram-ravana.webp', alt: 'Statue of Ravana at Koneswaram Temple' },
    ],
  },
  {
    id: 'seetha', aliases: ['Sita Amman', 'Sita Eliya'], name: 'Seetha Amman Temple', region: 'Seetha Eliya · Central Highlands', category: 'Ramayana',
    summary: 'A colourful streamside temple closely associated with Sita.',
    details: 'Devotional tradition connects Seetha Eliya with Sita’s time in Lanka and Hanuman’s visit to her. The temple sits beside a stream just outside Nuwara Eliya and pairs naturally with Hakgala.',
    highlights: ['Seetha Amman shrine', 'Streamside setting', 'Nearby Hakgala gardens'],
    tip: 'Allow time for worship and follow temple guidance around shoes, dress and photography.',
    gallery: [{ image: '/images/seetha-reference.webp', alt: 'Entrance to the Seetha Amman Temple at Seetha Eliya' }],
  },
  {
    id: 'hakgala', name: 'Hakgala & Ashok Vatika', region: 'Nuwara Eliya · Central Highlands', category: 'Ramayana',
    summary: 'Highland gardens beside a landscape linked with Sita in local tradition.',
    details: 'Some Ramayana trail traditions connect the Hakgala area with Ashok Vatika, the grove where Sita was held. The present-day Hakgala Botanic Gardens offer a different experience, with paths through hillside plant collections.',
    highlights: ['Hakgala Botanic Gardens', 'Highland walking paths', 'Nearby Seetha Eliya'],
    tip: 'Carry a light rain layer and allow time for uneven or sloping paths.',
  },
  {
    id: 'ravana-falls', aliases: ['Ravanan Falls', 'Rawana Ella'], name: 'Ravana Falls', region: 'Ella · Uva Highlands', category: 'Ramayana',
    summary: 'A roadside cascade named for Ravana on the descent from Ella.',
    details: 'The waterfall drops down a rocky slope along the road below Ella. It is one of the best-known stops associated locally with Ravana and can be paired with the nearby cave if access permits.',
    highlights: ['Roadside waterfall viewpoint', 'Ella Gap scenery', 'Optional Ravana Cave visit'],
    tip: 'View the waterfall from safe public areas and avoid slippery rocks and fast water.',
  },
  {
    id: 'ravana-cave', aliases: ['Ravanan Cave', 'Rawana Cave'], name: 'Ravana Cave', region: 'Ella · Uva Highlands', category: 'Ramayana',
    summary: 'A hillside cave linked by folklore to Ravana and Sita.',
    details: 'Local tradition associates the cave above Ella with Ravana. The approach climbs through the hillside, making it a distinct outing from the roadside waterfall.',
    highlights: ['Hillside cave approach', 'Ravana folklore', 'A separate visit from Ravana Falls'],
    tip: 'Check access with your guide before setting out. The approach is steep and can be slippery after rain.',
  },
  {
    id: 'munneswaram', name: 'Munneswaram Temple', region: 'Chilaw · Northwest Coast', category: 'Ramayana',
    summary: 'A Shiva temple complex on the first stretch of many pilgrimage routes.',
    details: 'In a devotional telling of the Ramayana trail, Rama prayed to Shiva at Munneswaram after the battle with Ravana. The temple complex near Chilaw is an active place of worship.',
    highlights: ['Munneswaram temple complex', 'Shiva worship', 'Combine with Manavari'],
    tip: 'Confirm opening or puja times with your guide and leave extra time during festivals.',
  },
  {
    id: 'manavari', hasPhoto: false, aliases: ['Manawari', 'Ramalingeswaram'], name: 'Manavari Temple', region: 'Chilaw · Northwest Coast', category: 'Ramayana',
    summary: 'A shrine associated with Rama’s worship of Shiva after the war.',
    details: 'Local tradition holds that Rama installed a lingam at Manavari. The temple is often visited with Munneswaram, allowing both Chilaw-area stops to fit into one pilgrimage leg.',
    highlights: ['Manavari Shiva shrine', 'Rama and Shiva devotional tradition', 'Nearby Munneswaram'],
    tip: 'Ask your guide to check temple access before planning the drive.',
  },
  {
    id: 'hanuman', name: 'Sri Bhakta Hanuman Temple', region: 'Ramboda · Central Highlands', category: 'Ramayana',
    summary: 'A Hanuman shrine overlooking the Ramboda hills.',
    details: 'The temple at Ramboda honours Hanuman and stands in a landscape associated in local tradition with his search for Sita. It is a natural stop on the road from Kandy to Nuwara Eliya.',
    highlights: ['Hanuman shrine', 'Ramboda highland scenery', 'Tea-country drive'],
    tip: 'Ask about puja hours and whether the hillside approach suits everyone in your group.',
  },
  {
    id: 'divurumpola', hasPhoto: false, name: 'Divurumpola Temple', region: 'Welimada · Uva Highlands', category: 'Ramayana',
    summary: 'A temple site linked to Sita’s trial by fire in pilgrimage tradition.',
    details: 'Ramayana trail tradition identifies Divurumpola with Sita’s Agni Pariksha. Today it is a Buddhist temple where visitors should observe local worship customs.',
    highlights: ['Divurumpola temple grounds', 'Agni Pariksha tradition', 'Welimada countryside'],
    tip: 'Ask before taking photos. Plan it with Seetha Eliya or Ella to make the most of the highland drive.',
  },
  {
    id: 'kelaniya', name: 'Kelaniya & Vibhishana Shrine', region: 'Near Colombo · Western Province', category: 'Ramayana',
    summary: 'A living Buddhist temple with a shrine associated with Ravana’s brother.',
    details: 'Kelaniya Raja Maha Vihara includes a shrine to Vibhishana, associated in Ramayana tradition with Rama after the war. The wider temple is also an important Buddhist pilgrimage site.',
    highlights: ['Vibhishana shrine', 'Temple murals', 'Kelaniya Raja Maha Vihara precinct'],
    tip: 'Plan the stop around Colombo traffic and allow time to explore the wider temple respectfully.',
  },
  {
    id: 'kataragama', name: 'Kataragama Sacred Precinct', region: 'Southeast Sri Lanka', category: 'Ramayana',
    summary: 'A living pilgrimage centre with several religious traditions.',
    details: 'Kataragama is sacred to devotees from several communities. Some Ramayana trail accounts associate the site with Skanda and Rama; its contemporary worship is an experience in its own right.',
    highlights: ['Maha Devale precinct', 'Multi-faith pilgrimage traditions', 'Optional visit to Kiri Vehera'],
    tip: 'Confirm ceremony times and allow extra time if travelling during a festival.',
  },
  {
    id: 'ussangoda', name: 'Ussangoda', region: 'Hambantota District · South Coast', category: 'Ramayana',
    summary: 'An open coastal plateau known for its reddish earth.',
    details: 'Ussangoda’s exposed landscape overlooks the southern shoreline. Some Ramayana trail traditions connect it with Hanuman and Ravana, while the site itself is a protected natural landscape.',
    highlights: ['Red-earth coastal plateau', 'Indian Ocean views', 'Local Ramayana folklore'],
    tip: 'Bring sun protection and stay on permitted paths in the protected area.',
  },
  {
    id: 'rumassala', name: 'Rumassala', region: 'Near Galle · South Coast', category: 'Ramayana',
    summary: 'A wooded headland linked to Hanuman’s medicinal mountain.',
    details: 'Local folklore links Rumassala to a piece of mountain carried by Hanuman. Today the headland offers forest paths, the Japanese Peace Pagoda and views across Galle Bay.',
    highlights: ['Japanese Peace Pagoda', 'Galle Bay views', 'Wooded coastal paths'],
    tip: 'Combine it with Galle Fort or Unawatuna and follow local access guidance on coastal paths.',
  },
];

export const destinations: Destination[] = places.map((place) => ({
  ...place,
  image: place.hasPhoto === false ? undefined : `/images/${place.id}.webp`,
  imageAlt: place.imageAlt ?? `${place.name} in Sri Lanka`,
}));

export const trailRegions = [
  { name: 'Chilaw & the east coast', ids: ['munneswaram', 'manavari', 'koneswaram'] },
  { name: 'Central highlands & Ella', ids: ['hanuman', 'seetha', 'hakgala', 'divurumpola', 'ravana-falls', 'ravana-cave'] },
  { name: 'South coast & Colombo', ids: ['kataragama', 'ussangoda', 'rumassala', 'kelaniya'] },
];

export const getDestination = (id: string) => destinations.find((place) => place.id === id);
