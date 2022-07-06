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
    location_img:
      "https://www.planetware.com/wpimages/2020/01/puerto-rico-in-pictures-beautiful-places-to-photograph-san-juan.jpg",
    hotel_img:
      "https://media.hrs.com/media/image/9b/23/89/San_Juan_Marriott_Resort_Stellaris_Casino-San_Juan-Aussenansicht-4-53229_1280x1280.jpg",
    flight_img: "https://s3-symbol-logo.tradingview.com/jetblue--600.png",
    car_img:
      "https://www.carscoops.com/wp-content/uploads/2022/02/2022-Jeep-Wrangler-Beach-and-high-tide-2-1.jpg",
  },
  {
    location: "Greece",
    hotel: "Hotel Hilton Athenz ",
    rating: "🌟🌟🌟🌟",
    flight: "JetBlue",
    price: 1199.99,
    date: "",
    car: "ATV",
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
    location_img:
      "https://indiacsr.in/wp-content/uploads/2022/04/Ambassador-of-India-to-Japan-emphasized-the-need-to-further-enhance-the-strategic-partnership-of-both-the-countries.jpg",
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
    location_img:
      "https://www.planetware.com/photos-large/AUS/australia-beautiful-places-sydney-harbour.jpg",
    hotel_img:
      "https://lh3.googleusercontent.com/p/AF1QipPuRLMoc_sGTrW94gWPFQEZfrD4SnMJ8NWsXMU4=w296-h202-n-k-rw-no-v1",
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
    location_img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_%28cropped%29.jpg/1200px-NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_%28cropped%29.jpg",
    hotel_img:
      "https://rew-online.com/wp-content/uploads/2016/12/dec28hotel217m-1-e1482357825138.jpg",
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
    hotel: "Atlanticview Cape Town Boutique Hotel",
    rating: "🌟🌟🌟🌟",
    flight: "JetBlue",
    price: 999.99,
    date: "",
    car: "Jeep Wrangler",
    location_img:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2e/1e/cape-town.jpg?w=700&h=-1&s=1",
    hotel_img:
      "https://lh3.googleusercontent.com/p/AF1QipOs_11vn_11w6jm4OJUakCWjUN8qY01NR9zniKw=w296-h202-n-k-rw-no-v1",
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
    location_img:
      "https://cdn.mos.cms.futurecdn.net/7YrobQvFFzw8aWsAUtoYXB.jpg",
    hotel_img:
      "https://lh3.googleusercontent.com/proxy/wFmWvQA7rEMfQxSclOMrmachUseSA59b8jZ-C7bslzPqQLY8KG736LFuN916avtoUq7131CU9E19-EIyecrncw3Ly0nYuRSX1d3frCdI_SCm9eDzUJ1DcIvEIuwJXFeo0UsAY_SLLiBpf_6DAB1vC9d56HUiGPw=w296-h202-n-k-rw-no-v1",
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
    location_img:
      "https://cdn.britannica.com/55/190455-050-E617F64E/Night-view-Singapore.jpg",
    hotel_img:
      "https://lh3.googleusercontent.com/p/AF1QipNU8bPewYhFtXoRQ-U1tcrWfsEPK_9BvxxKcxfn=w296-h202-n-k-rw-no-v1",
    flight_img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/1200px-Singapore_Airlines_Logo_2.svg.png",
    car_img:
      "https://blog.dupontregistry.com/wp-content/uploads/2022/06/RR-Main-Image.jpg",
  },
  {
    location: "Hong Kong",
    hotel: "Hilton Garden Inn Hong Kong Mongkok",
    rating: "🌟🌟🌟🌟",
    flight: "JetBlue",
    price: 1399.99,
    date: "",
    car: "Honda",
    location_img:
      "https://www.datacenterknowledge.com/sites/datacenterknowledge.com/files/styles/article_featured_retina/public/EBHM39.jpg?itok=PUzBwD5h",
    hotel_img:
      "https://lh3.googleusercontent.com/p/AF1QipMsN-jylY5X3ysVFiTAC7KCuzCSFBzt-xFpyqoH=w296-h202-n-k-rw-no-v1",
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
    car: "Honda",
    location_img:
      "https://www.london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz",
    hotel_img:
      "https://lh3.googleusercontent.com/p/AF1QipNacv_2YTouNAPNpAtOSL8jFHTzxlsaGOWhutTf=w296-h202-n-k-rw-no-v1",
    flight_img: "https://s3-symbol-logo.tradingview.com/jetblue--600.png",
    car_img:
      "https://images.dealer.com/ddc/vehicles/2022/Honda/Accord/Sedan/trim_EXL_15T_7b1733/color/Platinum%20White%20Pearl-WY-217%2C219%2C214-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520",
  },
  {
    location: "Belize",
    hotel: "Costa Blu Beach Resort, Trademark Collection by Wyndham",
    rating: "🌟🌟🌟🌟",
    flight: "JetBlue",
    price: 549.99,
    date: "",
    car: "Jeep Wrangler",
    location_img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7HWHRBDmF6uvWwygz2FYT9bmKk4C4cWV0Zw&usqp=CAU",
    hotel_img:
      "https://lh3.googleusercontent.com/p/AF1QipO0MoIYRFhai5iQ9Bf6YoGbOGxCObqtlU2VFyyu=w296-h202-n-k-rw-no-v1",
    flight_img: "https://s3-symbol-logo.tradingview.com/jetblue--600.png",
    car_img:
      "https://www.carscoops.com/wp-content/uploads/2022/02/2022-Jeep-Wrangler-Beach-and-high-tide-2-1.jpg",
  },
]);

console.log(packages)

process.exit

})()
