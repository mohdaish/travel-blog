import { useParams, useNavigate } from "react-router-dom";

export default function Trending() {
  const navigate = useNavigate();
  const { cityName } = useParams();
  const activeCity = cityName;

const data = {
 Singapore: [
  {
    name: "Gardens by Bay",
    desc: "A futuristic park with iconic Supertrees and skyline views.",
    img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775053210/Supertree_Grove_2C_Gardens_by_the_Bay_2C_Singapore_-_20120712-02_zekdsw.jpg"
  },
  {
    name: "Marina Bay Sands",
    img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775053257/87_w8j7vn.jpg"
  },
  {
    name: "Universal Studios",
    img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775053445/57f23ad19054c0159274fdce0d07f3d3-universal_20stuidos_20banner_hsmne9.jpg"
  },
  {
    name: "Singapore Zoo & Night Safari",
    img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775053476/caption_wbudxk.jpg"
  },
  {
    name: "River Wonders",
    img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775053903/river_wonder_sng_non-ed_from_rd_lzu7kh_tps7pv.jpg"
  },
  {
    name: "Cable Car",
    img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775053927/singapore-cable-car-sentosa_pgtgiy.jpg"
  },
  {
    name: "River Cruise",
    img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775053982/a9_ctspir.jpg"
  },
  {
    name: "Sentosa Beach",
    img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775054064/5_odu4k7.jpg"
  }],
  Bangkok: [
{
    name: "Calypso Cabaret Show",
    img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775140013/bb_kkryhb.jpg"
  },
  {
    name: "Wat Pho & Thai Massage",
    img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775140066/shutterstockRF_687210340_tkp8y6.jpg"
  },
  {
    name: "Chao Pharaya Dinner Cruise",
    img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775140122/f2_tvttfj.jpg"
  },
  {
    name: "Khao Yai National Park",
    img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775140213/e7_c5f6oi.jpg"
  },
  {
    name: "Mahanakhan SkyWalk",
    img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775140190/hek7ew3n6hks1lsxezrs_pxvmcc.jpg"
  },
  {
    name: "Rooftop Bar Experience",
    img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775140272/best-skybar-sukhumvit-1_ybjjug.webp"
  },
  {
    name: "Grand Palace & Wat Phra Kaew",
    img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775140296/20_s2uhlv.jpg"
  },
  {
    name: "Thai Cooking Class (Bangkok)",
    img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775140322/caption_hagvzw.jpg"
  }],

  
  Bali: [

  ],
  Dubai: [

  ],
  Goa:[
    {
    name: "Baga Beach",
    img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775228622/baga-sea-beach_gdh449.jpg"
  },
  {
    name: "Club Cubana",
    img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775228693/club-cubana-goa_f9gxq6.jpg"
  },
  {
    name: "Basilica of Bom Jesus",
    img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775228721/basilica-born-jesus-borea-jezuchi-bajilika-old-goa-india_u16tdt.jpg"
  },
  {
    name: "Dudhsagar Falls",
    img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775228762/dudhsagar-falls_zged5p.jpg"
  }
  ]
};

  return (
    <section className="trending">
  
      <div className="container">
        <h2 className="city-title">
  Things to Do in <span>{activeCity}</span>
</h2>

<p className="city-subtitle">
  Discover top attractions and unforgettable experiences
</p>

        {/* <div className="tabs">
  {Object.keys(data).map((city) => (
    <span
      key={city}
      className={activeCity === city ? "active" : ""}
      onClick={() => setActiveCity(city)}
    >
      {city}
    </span>
  ))}
</div> */}

      <div className="grid">
  {data[activeCity]?.map((item, index) => (
    <div className="card-img" key={index}  onClick={() =>
                navigate(`/city/${cityName}/place/${item.name}`)
              }>
      <img src={item.img} alt={item.name} />
      <div className="overlay-text">{item.name}</div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}