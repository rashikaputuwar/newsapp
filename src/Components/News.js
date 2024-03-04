import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": { "id": "handelsblatt", "name": "Handelsblatt" },
      "author": null,
      "title": "Autoindustrie : Aus für Apple-Car – „Nahezu alle Untergangsszenarien zu deutschen Autobauern sind falsch“",
      "description": "In der Autobranche ist das Ende des Apple-Car-Projekts das Thema der Stunde. Konkurrenten sind erleichtert, KI-Experten sehen gleichwohl neue Chancen für den Tech-Giganten.",
      "url": "https://www.handelsblatt.com/technik/it-internet/apple-car-aus-nahezu-alle-untergangsszenarien-zu-deutschen-autobauern-sind-falsch-02/100019143.html",
      "urlToImage": null,
      "publishedAt": "2024-03-02T10:15:00+00:00",
      "content": "In der Autobranche ist das Ende des Apple-Car-Projekts das Thema der Stunde. Konkurrenten sind erleichtert, KI-Experten sehen gleichwohl neue Chancen für den Tech-Giganten."
    },
    {
      "source": { "id": "techcrunch", "name": "TechCrunch" },
      "author": "Connie Loizos",
      "title": "VC Trae Stephens says he has a bunker (and much more) in talk about Founders Fund and Anduril | TechCrunch",
      "description": "Last night, for an evening hosted by StrictlyVC, this editor sat down with Trae Stephens, a former government intelligence analyst turned early Palantir",
      "url": "https://techcrunch.com/2024/03/02/vc-trae-stephens-says-he-has-a-bunker-and-much-more-in-talk-about-founders-fund-and-anduril/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/03/53561810143_cccf2d9251_c.jpg?w=799",
      "publishedAt": "2024-03-02T09:27:20Z",
      "content": "Last night, for an evening hosted by StrictlyVC, this editor sat down with Trae Stephens, a former government intelligence analyst turned early Palantir employee turned investor at Founders Fund, whe… [+15355 chars]"
    },
    {
      "source": { "id": "the-verge", "name": "The Verge" },
      "author": null,
      "title": "The Verge",
      "description": "The Verge is about technology and how it makes us feel. Founded in 2011, we offer our audience everything from breaking news to reviews to award-winning features and investigations, on our site, in video, and in podcasts.",
      "url": "http://www.theverge.com/",
      "urlToImage": "https://cdn.vox-cdn.com/uploads/chorus_asset/file/23966628/the_verge_social_share.png",
      "publishedAt": "2024-03-02T02:07:16.5525944Z",
      "content": "The Expanse is getting action figures (assuming this Kickstarter pans out).\r\nThe Nacelle Company got the official license to make these figs while most are at the digital render on Kickstarter stage,… [+290 chars]"
    },
    {
      "source": { "id": "techcrunch", "name": "TechCrunch" },
      "author": "Kirsten Korosec",
      "title": "Waymo can now charge for robotaxi rides in LA and on San Francisco freeways | TechCrunch",
      "description": "Waymo received final approval from California regulators that will allow the Alphabet company to charge for robotaxi rides in LA.",
      "url": "https://techcrunch.com/2024/03/01/waymo-can-now-charge-for-robotaxi-rides-in-la-and-on-san-francisco-freeways/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/10/GettyImages-1247366540.jpg?resize=1200,738",
      "publishedAt": "2024-03-01T23:20:40Z",
      "content": "Waymo received approval Friday afternoon from the California Public Utilities Commission to operate a commercial robotaxi service in Los Angeles, the San Francisco Peninsula and on San Francisco free… [+2486 chars]"
    },
    {
      "source": { "id": "techcrunch", "name": "TechCrunch" },
      "author": "Devin Coldewey",
      "title": "Rabbit's Jesse Lyu on the nature of startups: 'Grow faster, or die faster,' just don't give up | TechCrunch",
      "description": "Rabbit co-founder and CEO Jesse Lyu isn't afraid of death... the death of the company, at least. He told TechCrunch that the company is a startup whose",
      "url": "https://techcrunch.com/2024/03/01/rabbits-jesse-lyu-on-the-nature-of-startups-grow-faster-or-die-faster-just-dont-give-up/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/03/53560754857_1ca2b12888_k.jpg?resize=1200,800",
      "publishedAt": "2024-03-01T22:43:17Z",
      "content": "Rabbit co-founder and CEO Jesse Lyu isn’t afraid of death… the death of the company, at least. He told TechCrunch that the company is a startup whose fortunes may be swayed by the whims of multi-bill… [+4732 chars]"
    },
    {
      "source": { "id": "techcrunch", "name": "TechCrunch" },
      "author": "Alyssa Stringer and Cody Corrall",
      "title": "A comprehensive list of 2023 & 2024 tech layoffs | TechCrunch",
      "description": "A complete list of all the known layoffs in tech, from Big Tech to startups, broken down by month throughout 2023 and 2024.",
      "url": "https://techcrunch.com/2024/03/01/tech-layoffs-2023-list/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/02/layoffs.jpg?resize=1200,645",
      "publishedAt": "2024-03-01T21:55:22Z",
      "content": "The tech-wide reckoning that began in 2022 and ran throughout into 2023 has continued into this year. And while 2024’s losses are not at that scale, they’re still significant, driven by big names lik… [+46695 chars]"
    },
    {
      "source": { "id": "time", "name": "Time" },
      "author": "Justin Worland",
      "title": "Actually, Clean Tech Investment is Still Going Strong",
      "description": "Beneath narratives of a clean energy collapse, data show a more optimistic picture.",
      "url": "http://time.com/6836966/us-clean-tech-investment-going-strong/",
      "urlToImage": "https://api.time.com/wp-content/uploads/2024/03/solar-panel-factory-china.jpg?quality=85",
      "publishedAt": "2024-03-01T21:10:45Z",
      "content": "(To get this story in your inbox, subscribe to the TIME CO2 Leadership Report newsletter here.)\r\nIf you read a selection of recent headlines about clean technology in the U.S., it would be easy to th… [+3511 chars]"
    },
    {
      "source": { "id": "techcrunch", "name": "TechCrunch" },
      "author": "Dominic-Madori Davis",
      "title": "Stay up-to-date on the amount of venture dollars going to underrepresented founders | TechCrunch",
      "description": "Alongside Crunchbase, we’ve been tracking funding levels to pinpoint moments of progress and regression for marginalized entrepreneurs.",
      "url": "https://techcrunch.com/2024/03/01/stay-up-to-date-on-the-amount-of-venture-dollars-going-to-underrepresented-founders/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/03/magnifying-glass-coins.jpg?resize=1200,675",
      "publishedAt": "2024-03-01T21:08:55Z",
      "content": "Venture capital funding has never been robust for women or Black and brown founders. Alongside Crunchbase, weve been tracking funding levels to pinpoint moments of progress and regression for margina… [+3501 chars]"
    },
    {
      "source": { "id": "techcrunch", "name": "TechCrunch" },
      "author": "Cindy Zackney",
      "title": "Connect with HomeHQ.ai, SOSV, Prepare 4 VC, Latham & Watkins and more at TC Early Stage 2024 | TechCrunch",
      "description": "We are thrilled to collaborate with some of the most influential players in the startup ecosystem to craft an exceptional experience at TC Early Stage",
      "url": "https://techcrunch.com/2024/03/02/connect-with-homehq-ai-sosv-prepare-4-vc-latham-watkins-and-more-at-tc-early-stage-2024/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/02/Plain_PostHeader_1200x628.png?w=1200",
      "publishedAt": "2024-03-01T21:00:14Z",
      "content": "We are thrilled to collaborate with some of the most influential players in the startup ecosystem to craft an exceptional experience at TC Early Stage 2024. Our aim is to equip new and aspiring found… [+1552 chars]"
    },
    {
      "source": { "id": "techcrunch", "name": "TechCrunch" },
      "author": "Christine Hall",
      "title": "MWC 2024: Everything announced so far, including Swayy's app to tell friends where you'll be next | TechCrunch",
      "description": "The TechCrunch team is in Barcelona this week to bring you all the mobile technology news coming out of MWC 2024.",
      "url": "https://techcrunch.com/2024/03/01/mwc-2024-everything-you-need-to-know/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/02/mwc-2024-splash.jpg?resize=1200,675",
      "publishedAt": "2024-03-01T20:33:46Z",
      "content": "The TechCrunch team is in Barcelona this week to bring you all the action going on at Mobile World Congress 2024. You already know what were expecting, so sit back, relax and stay tuned throughout th… [+15432 chars]"
    },
    {
      "source": { "id": "ars-technica", "name": "Ars Technica" },
      "author": "Ron Amadeo",
      "title": "Huge funding round makes “Figure” Big Tech’s favorite humanoid robot company",
      "description": "Investors Microsoft, OpenAI, Nvidia, Jeff Bezos, and Intel value Figure at $2.6B.",
      "url": "https://arstechnica.com/gadgets/2024/03/huge-funding-round-makes-figure-big-techs-favorite-humanoid-robot-company/",
      "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/03/NEW-_DSCF1820_Desktop_10923A__3_-760x380.webp",
      "publishedAt": "2024-03-01T20:16:37+00:00",
      "content": "Enlarge/ The Figure 01 and a few spare parts. Obviously they are big fans of aluminum. \r\n98\r\nHumanoid robotics company Figure AI announced it raised $675 million in a funding round from an all-star c… [+6691 chars]"
    },
    {
      "source": { "id": "techcrunch", "name": "TechCrunch" },
      "author": "Brian Heater",
      "title": "Ultraleap is bringing haptic touch to cars and VR headsets | TechCrunch",
      "description": "In May 2019, Ultrahaptics and Leap Motion became Ultraleap (not to be confused with Magic Leap, which operates in the same space). It’s a name change",
      "url": "https://techcrunch.com/2024/03/01/ultraleap-is-bringing-haptic-touch-to-cars-and-vr-headsets/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/03/IMG_0441.jpeg?resize=1200,900",
      "publishedAt": "2024-03-01T19:30:48Z",
      "content": "In May 2019, Ultrahaptics and Leap Motion became Ultraleap (not to be confused with Magic Leap, which operates in the same space). Its a name change representing the marriage of two different, yet re… [+3512 chars]"
    },
    {
      "source": { "id": "techcrunch", "name": "TechCrunch" },
      "author": "Christine Hall",
      "title": "Rants, AI and other notes from Upfront Summit | TechCrunch",
      "description": "Venture capitalists were in Los Angeles this week for the Upfront Summit, a conference with celebrity sightings and plenty of talk VC's future.",
      "url": "https://techcrunch.com/2024/03/01/upfront-summit-summary/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/03/GHie4v5agAA1pbX.jpeg?resize=1200,678",
      "publishedAt": "2024-03-01T19:03:10Z",
      "content": "The venture capital stars were shining in Los Angeles this week at the Upfront Summit, an invite-only VC conference founded by Mark Suster and known for going all-out.\r\nFor example, there were Coco r… [+2073 chars]"
    },
    {
      "source": { "id": "engadget", "name": "Engadget" },
      "author": "Aaron Souppouris",
      "title": "Engadget is turning 20",
      "description": "This Saturday, on March 2, 2024, Engadget turns 20. To mark the occasion, our team has prepared almost 20 articles about the tech industry over the past two ...",
      "url": "https://www.engadget.com/engadget-is-turning-20-170005642.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/xPhDU9IhLIF9mn8xG8rllg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2024-02/7fc3f870-d727-11ee-a96d-85a98fddc12a",
      "publishedAt": "2024-03-01T17:00:05Z",
      "content": "This Saturday, on March 2, 2024, Engadget turns 20. Originally founded by Peter Rojas you can read more about those early days here the site has had eight editors-in-chief and, to my count, seven par… [+2489 chars]"
    },
    {
      "source": { "id": "financial-post", "name": "Financial Post" },
      "author": "Bloomberg News",
      "title": "UBS battles wealthy Canadian family over technology firm buyout",
      "description": "UBS Group and a wealthy Montreal family are in the final stretch of a legal fight over the buyout of a Canadian technology company. Read on.",
      "url": "https://financialpost.com/personal-finance/high-net-worth/ubs-battles-wealthy-canadian-family",
      "urlToImage": "https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2024/02/ubs-group-ag-chief-executive-officer-sergio-ermotti-intervie.jpg",
      "publishedAt": "2024-03-01T16:34:18Z",
      "content": "Fallout from ownership dispute at privately held Hypertec Group\r\nAuthor of the article:\r\nCommuters pass a UBS Group AG bank branch on the Paradeplatz in Zurich, Switzerland, on Tuesday, Feb. 6, 2024.… [+6192 chars]"
    },
    {
      "source": { "id": "the-verge", "name": "The Verge" },
      "author": "Allison Johnson",
      "title": "MWC 2024 was all about mobile tech bending to our needs",
      "description": "We’re used to shaping our habits to fit the way our phones work. This year’s Mobile World Congress asked: what if that were the other way around?",
      "url": "http://www.theverge.com/2024/3/1/24087496/mobile-world-congress-mwc-2024-brain-ai-samsung-galaxy-ring-humane-pin",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/zpV8ijtESTwJu19Vh20NH0Um3_c=/0x0:2000x1333/1200x628/filters:focal(1000x667:1001x668)/cdn.vox-cdn.com/uploads/chorus_asset/file/25304628/DSC06782_processed.jpg",
      "publishedAt": "2024-03-01T15:30:00Z",
      "content": "Mobile World Congress asked us to imagine a world where phones bend to our needs\r\nMobile World Congress asked us to imagine a world where phones bend to our needs\r\n / Weve been busy shaping our habit… [+5340 chars]"
    },
    {
      "source": { "id": "the-verge", "name": "The Verge" },
      "author": "Tim Stevens",
      "title": "Volkswagen ID.7 review: a superior EV that happens to be a sedan",
      "description": "Volkswagen’s first non-SUV electric vehicle for the US is the ID.7 sedan, with decent driving dynamics and lots of interesting tech.",
      "url": "http://www.theverge.com/2024/3/1/24084671/volkswagen-id7-review-ev-sedan-specs-price-photos",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/xnMIuU_Zu19VfylE5O31VQH81Gg=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/25307743/2025_VW_ID7_First_Drive__15_.jpg",
      "publishedAt": "2024-03-01T13:00:00Z",
      "content": "Volkswagens first non-SUV EV to hit American shores is shaping up to be a winner. \r\nByTim Stevens\r\nSUVs dominate the American landscape. They make up roughly half of all vehicles sold. So, when Volks… [+12033 chars]"
    },
    {
      "source": { "id": "gruenderszene", "name": "Gruenderszene" },
      "author": null,
      "title": "Figure AI sammelt rund 630 Millionen Euro ein – KI-Roboter kommen bei BMW zum Einsatz",
      "description": "Figure AI kombiniert KI mit Robotertechnik. Die Humanoiden Roboter sollen bald zuerst in einem deutschen Unternehmen zum Einsatz kommen.",
      "url": "https://www.businessinsider.de/gruenderszene/technologie/figure-ai-sammelt-rund-630-millionen-euro-ein-ki-roboter-kommen-bei-bmw-zum-einsatz/",
      "urlToImage": "https://cdn.businessinsider.de/wp-content/uploads/2024/03/NEW-_DSCF1820_Desktop_10923A__3_-e1709283963921.jpg?ver=1709283965",
      "publishedAt": "2024-03-01T09:30:00+00:00",
      "content": "Das US-Startup Figure AI kombiniert KI mit Robotertechnik. Auch in Europa arbeitet man an zweibeinigen Androiden. Das Wettrennen der Entwickler ist damit in vollem Gange.Die Investorenliste liest sic… [+6817 chars]"
    },
    {
      "source": { "id": "gruenderszene", "name": "Gruenderszene" },
      "author": null,
      "title": "Niemand will eure Technologie finanzieren? So kommt ihr an die Millionen von Sprind",
      "description": "Der Staat finanziert mit Sprind die Startups, die sonst übersehen werden – aber die Gesellschaft voranbringen. Das müsst ihr wissen.",
      "url": "https://www.businessinsider.de/gruenderszene/business/niemand-will-eure-technologie-finanzieren-so-kommt-ihr-an-die-millionen-von-sprind/",
      "urlToImage": "https://cdn.businessinsider.de/wp-content/uploads/2024/02/rafael-laguna-sprind.jpg?ver=1709197111",
      "publishedAt": "2024-03-01T07:00:00+00:00",
      "content": "Nach zwei Jahren ist es endlich geschafft: Die Sprind, ein Vehikel des Bundes, um Startups zu finanzieren, die unsere Gesellschaft voranbringen, hat sich ein neues Gesetz erkämpft. Das sogenannte Spr… [+765 chars]"
    },
    {
      "source": { "id": "techcrunch", "name": "TechCrunch" },
      "author": "Haje Jan Kamps",
      "title": "Is there anything AI can’t do? | TechCrunch",
      "description": "The current-generation AI technology is the tech equivalent of a toddler, and all the mediocre reviews various GenAI software is getting is tantamount to judging a fish by its ability to climb a tree.",
      "url": "https://techcrunch.com/2024/03/01/is-there-anything-ai-cant-do/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/chatgpt-getty.jpg?resize=1200,800",
      "publishedAt": "2024-03-01T04:26:19Z",
      "content": "Welcome to Startups Weekly your weekly recap of everything you cant miss from the world of startups. Sign up here to get it in your inbox every Friday.\r\nI dont code much anymore, but Ive been hacking… [+8264 chars]"
    }
  ]
  constructor(){
		super();
		console.log("Hello I am constructor from news component");
    this.state = {
       articles: this.articles,
        loading: false
    }
	}
  render() {
    return (
      <div className="container my-3">
       <h2>NewsKoala - Top Headlines</h2>
       
       <div className="row">
       {this.state.articles.map((element)=>{
         return <div className="col-md-4" key={element.url}>
          <NewsItem  title={element.title.slice(0, 45)} description={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
       </div>
      </div>
    )
  }
}

export default News
