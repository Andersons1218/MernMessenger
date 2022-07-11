require('dotenv').config();
require('./config/database');

const Package = require('./models/package');

// IIFE - Immediately Invoked Function Expression
(async function() {

await Package.deleteMany({});
const packages = await Package.create ([
  {
    location: "Puerto Rico",
    hotel: "Mariott Condado Hotel",
    rating: "🌟🌟🌟🌟",
    flight: "JetBlue",
    price: 659.99,
    date: "",
    car: "Jeep Wrangler",
    weatherKey: '10077',
    description: "Located near the beach, the Mariott Condado Hotel San Juan is in Santurce neighborhood and is connected to a shopping center. Pan American Pier and Port of San Juan are worth checking out if an activity is on the agenda, while those wishing to experience the area's natural beauty can explore Condado Beach and Carolina Beach. Traveling with kids? Consider Punto Verde and Museo del Mar. Discover the area's water adventures with kayaking and scuba diving nearby, or enjoy the great outdoors with skydiving and hiking/biking trails.",
    location_img: "https://www.planetware.com/wpimages/2020/01/puerto-rico-in-pictures-beautiful-places-to-photograph-san-juan.jpg",
    hotel_img: "https://media.hrs.com/media/image/9b/23/89/San_Juan_Marriott_Resort_Stellaris_Casino-San_Juan-Aussenansicht-4-53229_1280x1280.jpg",
    flight_img: "https://s3-symbol-logo.tradingview.com/jetblue--600.png",
    car_img: "https://www.carscoops.com/wp-content/uploads/2022/02/2022-Jeep-Wrangler-Beach-and-high-tide-2-1.jpg",
  },
  {
    location: "Greece",
    hotel: "Hotel Hilton Athenz ",
    rating: "🌟🌟🌟🌟",
    flight: "JetBlue",
    price: 1199.99,
    date: "",
    car: "ATV",
    weatherKey: '182536',
    description: "The Hotel Hilton in Athens City Centre is located near Acropolis and Parthenon, notable landmarks, and the area's natural beauty can be seen at Syntagma Square and Glyfada's Second Beach. National Historical Museum and National Observatory of Athens are also worth visiting.",
    location_img:
      "https://cdn.britannica.com/61/179661-138-6F13E02A/Overview-Athens.jpg?w=800&h=450&c=crop",
    hotel_img:
      "https://media.hrs.com/media/image/9b/23/89/San_Juan_Marriott_Resort_Stellaris_Casino-San_Juan-Aussenansicht-4-53229_1280x1280.jpg",
    flight_img: "https://s3-symbol-logo.tradingview.com/jetblue--600.png",
    car_img:
      "https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/Models/2022/5349b203-c7d5-4a9b-bca6-255e5c783449.png",
  },
  {
    location: "Japan",
    hotel: "Aman Tokyo",
    rating: "🌟🌟🌟🌟",
    flight: "Japan Airlines",
    price: 1599.99,
    date: "",
    car: "Rail Pass",
    weatherKey: '226396',
    description: "Near a metro station, The Aman Tokyo Hotel is in iconic Minato, a neighborhood in Tokyo with great airport proximity. Ginza Wako Building and Zojoji Temple are notable landmarks, and travelers looking to shop may want to visit Toyosu Market and Aqua City Shopping Center. Tokyo Tower and Tokyo Disneyland® are not to be missed. Guests appreciate the hotel's convenience to public transportation: Shiodome Station is 5 minutes by foot and Uchisaiwaicho Station is 14 minutes.",
    location_img:
      "https://www.planetware.com/wpimages/2020/06/japan-tokyo-to-mt-fuji-best-ways-to-get-there-by-private-tour.jpg",
    hotel_img:
      "https://passportsfromtheheart.com/wp-content/uploads/2018/10/Pink_Ribbon-Hilton-Athens-.jpg",
    flight_img:
      "https://www.portseattle.org/sites/default/files/airline-logo/2019-03/JAL-logo.jpg",
    car_img: "https://www.jrailpass.com/images/prices/jr-pass-product.jpg",
  },
  {
    location: "Australia",
    hotel: "Park Hyattt Sydney",
    rating: "🌟🌟🌟🌟",
    flight: "JetBlue",
    price: 1999.99,
    date: "",
    car: "Jeep Wrangler",
    weatherKey: '22889',
    description: "Park Hyatt Sydney is located in Sydney Central Business District, a neighborhood in Sydney, and is near a metro station and on the waterfront. Sydney Opera House and International Convention Centre Sydney are cultural highlights, and some of the area's activities can be experienced at Circular Quay and King Street Wharf. Traveling with kids? Don't miss SEA LIFE Sydney Aquarium and Luna Park. Spend some time exploring the area's activities, including golfing, sailing, and outlet shopping. Guests love the hotel's location for the sightseeing.",
    location_img:
      "https://www.planetware.com/photos-large/AUS/australia-beautiful-places-sydney-harbour.jpg",
    hotel_img:
      "https://images.trvl-media.com/hotels/1000000/10000/4900/4807/2a4d8304.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    flight_img: "https://s3-symbol-logo.tradingview.com/jetblue--600.png",
    car_img:
      "https://www.carscoops.com/wp-content/uploads/2022/02/2022-Jeep-Wrangler-Beach-and-high-tide-2-1.jpg",
  },
  {
    location: "New York",
    hotel: "The Manhattan Hotel",
    rating: "🌟🌟🌟🌟",
    flight: "JetBlue",
    price: 349.99,
    date: "",
    car: "Metro card",
    weatherKey: '349727', 
    description: "The Manhattan Hotel at Times Square is located in Manhattan, a neighborhood in New York, and is in the entertainment district and near a metro station. Grand Central Terminal and Rockefeller Center are notable landmarks, and travelers looking to shop may want to visit Times Square and 5th Avenue. Looking to enjoy an event or a game? See what's going on at Madison Square Garden, or consider St. James Theatre for a night out. Take an opportunity to explore the area for outdoor excitement like hiking/biking trails. Guests appreciate the hotel's convenience to public transportation: Times Sq. - 42 St. Station is 5 minutes by foot and 49th St. Station is 7 minutes.",
    location_img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_%28cropped%29.jpg/1200px-NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_%28cropped%29.jpg",
    hotel_img:
      "https://images.trvl-media.com/hotels/1000000/30000/27300/27283/53036ee0.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    flight_img: "https://s3-symbol-logo.tradingview.com/jetblue--600.png",
    car_img:
      "https://static01.nyt.com/images/2013/02/25/nyregion/25metrocard_thumb/25metrocard_thumb-superJumbo.jpg",
  },
  {
    location: "Toronto",
    hotel: "Chelsea Hotel",
    rating: "🌟🌟🌟",
    flight: "JetBlue",
    price: 249.99,
    date: "",
    car: "Honda",
    weatherKey: '55488',
    description: "In the entertainment district, Chelsea Hotel, Toronto is in Downtown Toronto, a neighborhood in Toronto with good shopping. Art Gallery of Ontario and Royal Ontario Museum are cultural highlights, while CN Tower is a notable landmark. Traveling with kids? Make time for Ripley's Aquarium of Canada, or check out an event or a game at Scotiabank Arena. Guests appreciate the hotel's location for the sightseeing. It's also convenient to public transportation: College Station is 5 minutes by foot and College St at Bay St Stop is 5 minutes.",
    location_img:
      "https://content.r9cdn.net/rimg/dimg/b4/83/65244278-city-11592-162cfe6a30b.jpg?width=1200&height=630&xhint=2808&yhint=2381&crop=true",
    hotel_img:
      "https://www.gonewiththefamily.com/wp-content/uploads/2013/10/6a014e5f914cd8970c01bb09c297db970d.png",
    flight_img: "https://s3-symbol-logo.tradingview.com/jetblue--600.png",
    car_img:
      "https://images.dealer.com/ddc/vehicles/2022/Honda/Accord/Sedan/trim_EXL_15T_7b1733/color/Platinum%20White%20Pearl-WY-217%2C219%2C214-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520",
  },
  {
    location: "Brazil",
    hotel: "Hilton Barra Rio de Janeiro",
    rating: "🌟🌟🌟🌟",
    flight: "JetBlue",
    price: 849.99,
    date: "",
    car: "Honda",
    weatherKey: '45449',
    description: "In the entertainment district, Hilton Barra Rio De Janeiro is in Barra da Tijuca, a neighborhood in Rio de Janeiro with good shopping. Looking to enjoy an event or a game while in town? See what's going on at Jeunesse Arena.",
    location_img:
      "https://www.celebritycruises.com/blog/content/uploads/2021/09/what-is-brazil-known-for-christ-the-redeemer-aerial-hero.jpg",
    hotel_img:
      "https://www.hilton.com/im/en/RIOCCHH/14274607/hilton-copacabana-piscina-r00.jpg?impolicy=crop&cw=5760&ch=3075&gravity=NorthWest&xposition=0&yposition=382&rw=800&rh=427",
    flight_img: "https://s3-symbol-logo.tradingview.com/jetblue--600.png",
    car_img:
      "https://images.dealer.com/ddc/vehicles/2022/Honda/Accord/Sedan/trim_EXL_15T_7b1733/color/Platinum%20White%20Pearl-WY-217%2C219%2C214-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520",
  },
  {
    location: "South Africa",
    hotel: "Atlantic View Cape Town Boutique Hotel",
    rating: "🌟🌟🌟🌟",
    flight: "JetBlue",
    price: 999.99,
    date: "",
    car: "Jeep Wrangler",
    weatherKey: '306633',
    description: "Atlantic View Cape Town is located in Victoria and Alfred Waterfront, a neighborhood in Cape Town, and is in a shopping district and on the waterfront. Cape Town Cruise Terminal and Green Point Park are worth checking out if an activity is on the agenda, while those in the mood for shopping can visit V&A Waterfront and Long Street. Traveling with kids? Consider Two Oceans Aquarium and Cape Town Museum. Discover the area's water adventures with kayaking and water skiing nearby, or enjoy the great outdoors with ecotours and hiking/biking trails.", 
    location_img:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2e/1e/cape-town.jpg?w=700&h=-1&s=1",
    hotel_img:
      "https://images.trvl-media.com/hotels/3000000/2450000/2442800/2442736/38170db1.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    flight_img: "https://s3-symbol-logo.tradingview.com/jetblue--600.png",
    car_img:
      "https://www.carscoops.com/wp-content/uploads/2022/02/2022-Jeep-Wrangler-Beach-and-high-tide-2-1.jpg",
  },
  {
    location: "Egypt",
    hotel: "Best View Pyramids Hotel",
    rating: "🌟🌟🌟🌟",
    flight: "JetBlue",
    price: 749.99,
    date: "",
    car: "Jeep Wrangler",
    weatherKey: '127164',
    description: "Located in Giza, Best View Pyramids Hotel is in the historical district. Giza Pyramid Complex and Great Sphinx of Giza are notable landmarks, and the area's natural beauty can be seen at Giza Plateau. Giza Solar Boat Museum and Dream Park are also worth visiting.",
    location_img:
      "https://cdn.mos.cms.futurecdn.net/7YrobQvFFzw8aWsAUtoYXB.jpg",
    hotel_img:
      "https://images.trvl-media.com/hotels/20000000/19130000/19122600/19122555/2fdb20be.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    flight_img: "https://s3-symbol-logo.tradingview.com/jetblue--600.png",
    car_img:
      "https://www.carscoops.com/wp-content/uploads/2022/02/2022-Jeep-Wrangler-Beach-and-high-tide-2-1.jpg",
  },
  {
    location: "Dubai",
    hotel: "Burj Al Arab",
    rating: "🌟🌟🌟🌟🌟🌟🌟",
    flight: "Emirates",
    price: 9999.99,
    date: "",
    car: "Rolls Royce Phantom ",
    weatherKey: '323091',
    description: "Located on a private beach, Burj Al Arab Hotel is in Umm Suqeim, a neighborhood in Dubai. Mall of the Emirates and Dubai Mall are worth checking out if shopping is on the agenda, while those wishing to experience the area's popular attractions can visit Wild Wadi Water Park and Aquaventure. Looking to enjoy an event or a game while in town? See what's going on at Dubai Autodrome. Looking to get your feet wet? Snorkeling, water skiing and parasailing adventures can be found near the property.",
    location_img:
      "https://images.adsttc.com/media/images/60b6/09d7/f91c/8199/fb00/00cd/large_jpg/shutterstock_1196821240.jpg?1622542766",
    hotel_img:
      "https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/hero/burj-al-arab-profile-exterior_6-4_landscape.jpg?h=1080&w=1620",
    flight_img:
      "https://1000logos.net/wp-content/uploads/2020/03/Emirates-Logo-1985.jpg",
    car_img:
      "https://blog.dupontregistry.com/wp-content/uploads/2022/06/RR-Main-Image.jpg",
  },
  {
    location: "Singapore",
    hotel: "Marina Bay Sands Singapore",
    rating: "🌟🌟🌟🌟🌟🌟",
    flight: "Singapore Airlines",
    price: 8999.99,
    date: "",
    car: "Rolls Royce Phantom",
    weatherKey: '300597',
    description: "Marina Bay Sands is located in Marina Bay, a neighborhood in Singapore. Gardens by the Bay and Singapore City Hall are cultural highlights, and travelers looking to shop may want to visit Orchard Road and Suntec City. Singapore Flyer and East Coast Park are not to be missed.",
    location_img:
      "https://cdn.britannica.com/55/190455-050-E617F64E/Night-view-Singapore.jpg",
    hotel_img:
      "https://images.trvl-media.com/hotels/4000000/3240000/3231200/3231105/01bc2060.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    flight_img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/1200px-Singapore_Airlines_Logo_2.svg.png",
    car_img:
      "https://blog.dupontregistry.com/wp-content/uploads/2022/06/RR-Main-Image.jpg",
  },
  {
    location: "Hong Kong",
    hotel: "The Ritz-Carlton, Millenia Singapore",
    rating: "🌟🌟🌟🌟",
    flight: "JetBlue",
    price: 1399.99,
    date: "",
    car: "Honda",
    weatherKey: '1123655',
    description: "Located in Marina Bay neighborhood, The Ritz-Carlton, Millenia Singapore (SG Clean) is connected to a shopping center. Esplanade Theatres and ArtScience Museum are cultural highlights, and travelers looking to shop may want to visit Millenia Walk and Marina Square. Traveling with kids? Don't miss Singapore Flyer. Break out the clubs and hit the links with a golf course nearby, or seek out an adventure with hiking/biking trails.",
    location_img:
      "https://www.datacenterknowledge.com/sites/datacenterknowledge.com/files/styles/article_featured_retina/public/EBHM39.jpg?itok=PUzBwD5h",
    hotel_img: "https://images.trvl-media.com/hotels/1000000/30000/28600/28540/293271d6.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      // "https://lh3.googleusercontent.com/p/AF1QipMsN-jylY5X3ysVFiTAC7KCuzCSFBzt-xFpyqoH=w296-h202-n-k-rw-no-v1",
    flight_img: "https://s3-symbol-logo.tradingview.com/jetblue--600.png",
    car_img:
      "https://images.dealer.com/ddc/vehicles/2022/Honda/Accord/Sedan/trim_EXL_15T_7b1733/color/Platinum%20White%20Pearl-WY-217%2C219%2C214-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520",
  },
  {
    location: "London",
    hotel: "The Waldorf Hilton",
    rating: "🌟🌟🌟🌟",
    flight: "JetBlue",
    price: 659.99,
    date: "",
    car: "Volkswagen Polo GTI",
    weatherKey: '328328',
    description: "The Waldorf Hilton, London is located in London City Centre, a neighborhood in London, and is in the entertainment district and near a metro station. The British Museum and Buckingham Palace are cultural highlights, and some of the area's notable landmarks include Covent Garden Market and Trafalgar Square. Don't miss out on a visit to London Eye. Spend some time exploring the area's activities, including outlet shopping. Guests love the hotel's central location.",
    location_img:
      "https://www.london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz",
    hotel_img:
      "https://images.trvl-media.com/hotels/1000000/10000/2100/2065/1d1e92b8.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    flight_img: "https://s3-symbol-logo.tradingview.com/jetblue--600.png",
    car_img:
      "https://uploads.volkswagen-newsroom.com/system/production/media/036/745/images/e9ddbd0716c107caac46f3422c7e89165f6e287e/DB2021AU00471_web_1600.jpg?1649157662",
  },
  {
    location: "Belize",
    hotel: "Costa Blu Beach Resort, Trademark Collection by Wyndham",
    rating: "🌟🌟🌟🌟",
    flight: "JetBlue",
    price: 549.99,
    date: "",
    car: "Jeep Wrangler",
    weatherKey: '634914',
    description: "Located in San Pedro, Costa Blu Beach Resort, Trademark Collection by Wyndham - Adults Only is near the airport and on the beach. While the natural beauty of Belize Barrier Reef and Mexico Rocks can be enjoyed by anyone, those looking for an activity can check out San Pedro Belize Express Dock. Bacalar Chico National Park & Marine Reserve and GoFish Belize are also worth visiting. Scuba diving and snorkeling offer great chances to get out on the surrounding water, or you can seek out an adventure with ecotours and ziplining nearby.",
    location_img:
      "https://images.trvl-media.com/hotels/12000000/11700000/11692700/11692603/9cf99444.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    hotel_img:
      "https://images.trvl-media.com/hotels/2000000/1760000/1757000/1756951/57966011.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    flight_img: "https://s3-symbol-logo.tradingview.com/jetblue--600.png",
    car_img:
      "https://www.carscoops.com/wp-content/uploads/2022/02/2022-Jeep-Wrangler-Beach-and-high-tide-2-1.jpg",
  },
]);

console.log(packages)

process.exit

})()
