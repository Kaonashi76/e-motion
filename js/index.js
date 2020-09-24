

let slidesImg=document.querySelectorAll(".usage_slides_img")
let slidesText=document.querySelectorAll(".usage_slides-text")
let slidesStep=document.querySelectorAll(".usage_step")




function active (){
  slidesText.forEach(text=>{
    if(text.classList.contains("usage_slides-text-active")){
      text.classList.remove("usage_slides-text-active")
    }
  })
  slidesImg.forEach(img=>{
    if(img.classList.contains("usage_slides_img-active")){
      img.classList.remove("usage_slides_img-active")
    }
  })
  slidesStep.forEach(step=>{
    if(step.classList.contains("usage_step-active")){
      step.classList.remove("usage_step-active")
    }
  })
  slidesImg[this.dataset.index - 1].classList.add("usage_slides_img-active")
  slidesText[this.dataset.index - 1 ].classList.add("usage_slides-text-active")
  for(let j = 0; j<this.dataset.index;j++){
    slidesStep[j].classList.add("usage_step-active")
  }
}  
let price = [
  //Севастополь 1-3 3-круглосуточный
{
  id:1,
  name: "Основной",
  time: "понедельник-пятница с 18:00 до 02:00, суббота-воскресенье с 12:00 до 02:00",
  models: [{
    name: "Ninebot ES1",
    price: ["20","+5","295"]
  },{
    name: "Ninebot G-30",
    price: ["50","+5","325"]
  },
  {
    name: "SVK",
    price: ["50","+5","325"]
  },
  {
    name: "IconBit E-Bike",
    price: ["50","+5","325"]
  },
  {
    name: "Pioneer Bike",
    price: ["20","+6","350"]
  }]
},
{
  id:2,
  name: "Акционный",
  time: "понедельник-пятница с 02:00 до 18:00, суббота-воскресенье с 02:00 до 12:00",
  models: [{
    name: "Ninebot ES1",
    price: ["30","+3","195"]
  },{
    name: "Ninebot G-30",
    price: ["50","+3","215"]
  },
  {
    name: "SVK",
    price: ["50","+3","215"]
  },
  {
    name: "IconBit E-Bike",
    price: ["50","+3","215"]
  },
  {
    name: "Pioneer Bike",
    price: ["20","+6","350"]
  }]
},
{
  id:3,
  name: "Акционный",
  time: "круглосуточно",
  models: [{
    name: "Ninebot ES1",
    price: ["30","+3","195"]
  },
  {
    name: "Ninebot G-30",
    price: ["50","+3","215"]
  },
  {
    name: "SVK",
    price: ["50","+3","215"]
  },
  {
    name: "IconBit E-Bike",
    price: ["50","+3","215"]
  },
  {
    name: "Pioneer Bike",
    price: ["20","+6","350"]
  }]
},
 //Армавир 4-5
{ 
  id:4,
  name: "Армавир",
  time: "понедельник - пятница с 13:00 по 22:00, cуббота - воскресенье с 12:00 по 00:00",
  models: [{
    name: "Ninebot ES1",
    price: ["20","+4","240"]
  }]
},
{
  id:5,
  name: "Армавир",
  time: "cуббота - воскресенье с 00:00 по 12:00, понедельник - пятница с 22:00 по 13:00",
  models: [{
    name: "Ninebot ES1",
    price: ["35","+2","145"]
  }]
},
// Москва Бирюков - Червинский 6
{
  id:6,
  name: "Старт",
  time: "круглосуточно",
  models: [{
    name: "Ninebot G-30",
    price: ["50","+5","325"]
  }]
},
// Ялта ГИ 7
{
  id:7,
  name: "Лето",
  time: "круглосуточно",
  models: [{
    name: "Ninebot ES1",
    price: ["30","+5","305"]
  },
  {
    name: "Ninebot G-30",
    price: ["30","+5","305"]
  }]
},
// Симферополь 8
{
  id:8,
  name: "Лето",
  time: "круглосуточно",
  models: [{
    name: "Ninebot ES1",
    price: ["30","+5","305"]
  }]
},
// Краснодар 9
{
  id:9,
  name: "Летний Start",
  time: "круглосуточно",
  models: [{
    name: "Ninebot ES2",
    price: ["40","+4","260"]
  }]
},
// Белгород 10
{
  id:10,
  name: "LETO",
  time: "круглосуточно",
  models: [{
    name: "Ninebot ES1",
    price: ["20","+4","240"]
  }]
},
// Пенза 11
{
  id:11,
  name: "Старт",
  time: "круглосуточно",
  models: [{
    name: "Ninebot ES1",
    price: ["50","+5","325"]
  }]
},
// Алушта 12 - 13
{
  id:12,
  name: "Основной",
  time: "понедельник-пятница с 18:00 до 02:00, суббота-воскресенье с 12:00 до 02:00",
  models: [{
    name: "Xaomi 365",
    price: ["50","+5","325"]
  }]
},
{
  id:13,
  name: "Акционный",
  time: "понедельник-пятница с 02:00 до 18:00, суббота-воскресенье с 02:00 до 12:00",
  models: [{
    name: "Xaomi 365",
    price: ["50","+3","215"]
  }]
},
// Курск 14
{
  id:14,
  name: "Optima",
  time: "круглосуточно",
  models: [{
    name: "Ninebot ES2",
    price: ["50","+5","325"]
  }]
},

//Дербент 15
{
  id:15,
  name: "Основной",
  time: "круглосуточно",
  models: [{
    name: "Ninebot ES2",
    price: ["50","+4","270"]
  }]
},
]
let station_obj= [
{
"coords": [42.060529, 48.295655],
"price":[15],
"s_name": "парк им.Стальского",
"address": "г. Дербент, ул.Пашабекова, парк им. С.Стальского"
},
{
"coords": [55.645968, 37.707658],
"price":[6],
"s_name": "ЖК Домашний",
"address": "г. Москва, ул. Донецкая, 30к1"
},
{
"coords": [55.65029, 37.769328],
"price":[6],
"s_name": "ТЦ МАРИ",
"address": "г. Москва, г.Москва, ул. Поречная, 10"
},
{
"coords": [44.599623, 33.49058],
"price":[3],
"s_name": "Piccolino пл. 50-летия СССР",
"address": "г. Севастополь, ул. Ерошенко 2"
},
{
"coords": [44.597135, 33.458277],
"price":[1,2],
"s_name": "Челентано Парк Победы",
"address": "г. Севастополь, ул. Фадеева 48"
},
{
"coords": [44.587368, 33.466676],
"price":[1,2],
"s_name": "ост. Степаняна",
"address": "г. Севастополь, пр.Окт.Революции 89б"
},

{
"coords": [44.592122, 33.485994],
"price":[1,2],
"s_name": "ТЦ NOVUS на Меньшикова",
"address": "г. Севастополь, ул. Вакуленчука 20"
},
{
"coords": [55.79119, 37.528721],
"price":[6],
"s_name": "ТЦ Авиапарк 3",
"address": "г.Москва, Ходынский б-р, д.4"
},

{
"coords": [44.589599, 33.488955],
"price":[3],
"s_name": "Муссон Парковка",
"address": "г. Севастополь, Вакуленчука 29"
},

{
"coords": [42.057557, 48.289609],
"price":[15],
"s_name": "Мемориал ВОВ",
"address": "г. Дербент, пл. Свободы"
},
{
"coords": [44.490953, 34.154697],
"price":[7],
"s_name": "Ялта, Пушкинская, 36",
"address": "г. Ялта, ул. Пушкинская, 36"
},
{
"coords": [44.616109, 33.523047],
"price":[1,2],
"s_name": "Дворец Пионеров",
"address": "г. Севастополь, пр. Нахимова, 4"
},
{
"coords": [55.748116, 37.539638],
"price":[6],
"s_name": "Башня \"Империя\"",
"address": "г. Москва, Пресненская наб., 6 стр. 2"
},
{
"coords": [44.961895, 34.100747],
"price":[8],
"s_name": "Гагаринский парк",
"address": "г. Симферополь, ул. Набережная 69 б"
},
{
"coords": [44.595545, 33.446693],
"price":[1,2],
"s_name": "пляж Омега, ближняя",
"address": "г. Севастополь, пляж Омега 4"
},
{
"coords": [55.657855, 37.750986],
"price":[6],
"s_name": "м. Братиславская",
"address": "г. Москва, Мячковский бульвар, 3а"
},

{
"coords": [44.598071, 33.44175],
"price":[1,2],
"s_name": "Бар Морячка",
"address": "г. Севастополь, пляж Омега 18"
},
{
"coords": [44.612773, 33.520961],
"price":[1,2],
"s_name": "гостиница Севастополь",
"address": "г. Севастополь, пр. Нахимова, 8"
},
{
"coords": [55.748008, 37.54375],
"price":[6],
"s_name": "мост \"Багратион\"",
"address": "г. Москва, Краснопресненская наб. 16 стр. 1"
},
{
"coords": [44.586022, 33.44576],
"price":[1,2],
"s_name": "ТЦ NOVUS ул. Борисова",
"address": "г. Севастополь, ул. Борисова 9"
},
{
"coords": [44.491709, 34.163735],
"price":[7],
"s_name": "Apelsin",
"address": "г. Ялта, Набережная Ленина, \"Apelsin\""
},
{
"coords": [42.05632, 48.297129],
"price":[15],
"s_name": "парк Революционной Славы",
"address": "г. Дербент, ул.Пушкина, парк Революционной Славы"
},

{
"coords": [44.579311, 33.460506],
"price":[1,2],
"s_name": "NOVUS на Шевченко",
"address": "г. Севастополь, ул. Шевченко 19В"
},
{
"coords": [44.604178, 33.520987],
"price":[3],
"s_name": "ТЦ Очаковский",
"address": "г. Севастополь, ул. Очаковцев 29"
},
{
"coords": [44.597796, 33.459159],
"price":[1,2],
"s_name": "Меркурий",
"address": "г. Севастополь, ул.Фадеева, д.48"
},
{
"coords": [44.592504, 33.456064],
"price":[1,2],
"s_name": "ТЦ Посейдон, NOVUS",
"address": "г. Севастополь, ПОР 24"
},
{
"coords": [44.997924, 41.127003],
"price":[4,5],   
"s_name": "ТЦ Армавир Молл",
"address": "г. Армавир, ул. Мира 24В"
},
{
"coords": [44.558635, 33.520466],
"price":[3],
"s_name": "Sevstar Офис",
"address": "г. Севастополь, ул. Хрусталёва, 74-А"
},

{
"coords": [55.651188, 37.742591],
"price":[6],
"s_name": "м. Марьино",
"address": "г. Москва, ул. Люблинская вл.112а стр 3"
},
{
"coords": [55.78859618364493, 37.534117017902936],
"price":[6],
"s_name": "ТЦ Авиапарк 2",
"address": "г.Москва, Ходынский б-р, д.4"
},
{
"coords": [44.612662, 33.517699],
"price":[1,2],
"s_name": "на Сенявина",
"address": "г.Севастополь, ул.Маяковского, 9"
},
{
"coords": [44.996297, 41.107734],
"price":[4,5],
"s_name": "Пятёрочка ЗВТ",
"address": "г.Армавир, ул.Ефремова, д.166"
},
{
"coords": [44.614779, 33.5187],
"price":[1,2],
"s_name": "ресторан Баркас",
"address": "г. Севастополь, ул. Капитанская 2"
},
{
"coords": [44.608953, 33.456485],
"price":[1,2],
"s_name": "Пляж «Парк Победы»",
"address": "г. Севастополь, Набережная Пляжа «Парк Победы»"
},
{
"coords": [45.046438, 39.030287],
"price":[9],
"s_name": "стадион Краснодар",
"address": "г. Краснодар, ул. Жлобы 137"
},

{
"coords": [44.590359, 33.460739],
"price":[1,2],
"s_name": "ост. Юмашева",
"address": "г. Севастополь, ПОР 57"
},
{
"coords": [55.745213, 37.582584],
"price":[6],
"s_name": "\"Азбука Вкуса\" пл. Смоленская",
"address": "г. Москва, пл. Смоленская-Сенная,27с1А"
},
{
"coords": [44.566301, 33.524515],
"price":[1,2],
"s_name": "Хрюкинский рынок",
"address": "г. Севастополя, ул. Острякова, 135"
},
{
"coords": [55.761608, 37.572459],
"price":[6],
"s_name": "\"Азбука вкуса\" Красная Пресня",
"address": "г. Москва, ул. Красная Пресня, 14"
},
{
"coords": [55.779542, 37.592875],
"price":[6],
"s_name": "Депо Москва Фудмолл",
"address": "г.Москва, ул.Лесная, д.20, стр.3"
},
{
"coords": [44.954211, 34.103712],
"price":[8],
"s_name": "Сквер Героев Соц. Труда",
"address": "г. Симферополь, ул. Кирова, 39"
},
{
"coords": [44.578914, 33.518987],
"price":[1,2],
"s_name": "ТЦ Московский",
"address": "г. Севастополь, пр. Острякова 64"
},
{
"coords": [44.589917, 33.444327],
"price":[1,2],
"s_name": "Место",
"address": "г. Севастополь, пр. героев Сталинграда, ул.41а"
},
{
"coords": [53.198261, 45.017744],
"price":[11],
"s_name": "Драмтеатр",
"address": "г. Пенза, ул. Московская, 89"
},
{
"coords": [53.194673, 45.024592],
"price":[11],
"s_name": "Росток",
"address": "г. Пенза, ул. Славы, 10"
},
{
"coords": [55.746659, 37.557358],
"price":[6],
"s_name": "\"Азбука Вкуса\" Дорогомиловская",
"address": "г. Москва, Б. Дорогомиловская, 16"
},
{
"coords": [44.973515, 34.098652],
"price":[8],
"s_name": "ТЦ Крым",
"address": "г. Симферополь, ул. Кечкеметская, д.1"
},
{
"coords": [53.195373, 45.017173],
"price":[11],
"s_name": "пл. Ленина Пенза",
"address": "г. Пенза, ул. Московская, пл. Ленина"
},
{
"coords": [53.191704, 45.015862],
"price":[11],
"s_name": "Фонтан",
"address": "г. Пенза, ул. Московская, 56"
},
{
"coords": [51.728082, 36.193156],
"price":[14],
"s_name": "Курский детинец",
"address": "г. Курск, ул. Луначарского, 8"
},
{
"coords": [44.608622, 33.457757],
"price":[1,2],
"s_name": "Парк Победы Автокафе",
"address": "г. Севастополь, наб. Парк Победы"
},
{
"coords": [44.575972, 33.520038],
"price":[1,2],
"s_name": "Золотая рыбка",
"address": "г.Севастополь, ул. Ген. Острякова 65а"
},
{
"coords": [44.584796, 33.438412],
"price":[1,2],
"s_name": "ТЦ Апельсин",
"address": "г. Севастополь, просп. Героев Сталинграда, 27"
},
{
"coords": [51.7491329, 36.194046],
"price":[14],
"s_name": "КГМУ Курск",
"address": "г. Курск ул. К.Маркса, 3"
},
{
"coords": [44.669664, 34.412985],
"price":[12,13],
"s_name": "Центральная набережная \"Колесо обозрения\"",
"address": "г. Алушта, ул. Ленина 9"
},
{
"coords": [55.750167, 37.578382],
"price":[6],
"s_name": "\"Азбука Вкуса\" 1-ый Смоленский переулок",
"address": "г. Москва,1-й Смоленский переулок, вл. 19-21"
},
{
"coords": [55.7885175970282, 37.53477684132059],
"price":[6],
"s_name": "ТЦ Авиапарк 1",
"address": "г.Москва, Ходынский б-р, д.4"
},
{
"coords": [44.6012523, 33.524911],
"price":[1,2],
"s_name": "площадь Ушакова",
"address": "г. Севастополь, пл. Ушакова"
},
{
"coords": [50.591615, 36.586183],
"price":[10],
"s_name": "Парк Победы",
"address": "г. Белгород, Парк Победы"
},
{
"coords": [50.607104, 36.587929],
"price":[10],
"s_name": "Парк им. Ленина",
"address": "г. Белгород, Парк им. Ленина, центр парка"
},
{
"coords": [50.595056, 36.586401],
"price":[10],
"s_name": "Соборная площадь",
"address": "г. Белгород, Соборная площадь"
},
{
"coords": [44.946825, 34.097647],
"price":[8],
"s_name": "Парк Тренёва",
"address": "г. Симферополь, п-кт Кирова 11,15"
},
{
"coords": [44.949738, 34.101046],
"price":[8],
"s_name": "ТЦ Берг",
"address": "г. Симферополь ул. Кирова 38"
},
{
"coords": [55.76051, 37.58156],
"price":[6],
"s_name": "метро Баррикадная",
"address": "г. Москва ст. метро Баррикадная"
},
{
"coords": [44.596107, 33.452177],
"price":[1,2],
"s_name": "Парк Победы 2",
"address": "г. Севастополь, пл. Комбата Неустроева"
},
{
"coords": [44.596268, 33.452502],
"price":[1,2],
"s_name": "Парк Победы 1",
"address": "г. Севастополь, пл. Комбата Неустроева"
},
{
"coords": [55.734258, 37.59273],
"price":[6],
"s_name": "метро Парк Культуры",
"address": "г. Москва, Комсомольский проспект, 2-4"
}
];

let mapPrice = document.querySelector(".map_price_container")

let city = [
{name:"Москва",
  coords:[55.7522200, 37.6155600]
},
{name:"Курск",
  coords:[51.7373300,36.1873500]
},
{name:"Дербент",
  coords:[42.0677900,48.2898700]
},
{name:"Белгород",
  coords:[50.6107400,36.5801500]
},
{name:"Севастополь",
  coords:[44.616687, 33.525432]
},
{name:"Симферополь",
  coords:[44.9571900,34.1107900]
},
{name:"Ялта",
  coords:[44.5021800,34.1662400]
},
{name:"Пенза",
  coords:[53.2006600,45.0046400]
},
{name:"Алушта",
  coords:[44.6772800,34.4097000]
},
{ name:"Армавир",
  coords:[44.9892000,41.1234000]
},
]
let cityActive = document.querySelector(".select__current");

if(localStorage.getItem('city') && localStorage.getItem('coords')){
  cityActive.innerText = localStorage.getItem('city')
}
  else{
    cityActive.innerText = "Москва"
    localStorage.setItem('city', city[0].name)
    localStorage.setItem('coords', city[0].coords)

  }
  let Map;
function initPrice (station) {
  let template = `
       <p class="station-name"> <img src="./img/maps_mark.svg" alt="метка">${station.name}</p>`
  let prices = []
  station.price.forEach(elem=>{
    for(let i = 0; i<price.length; i++){
   
      if(price[i].id === elem){
        prices.push(price[i])
      } 
    }
  })
  let templatesPrice = []
  prices.forEach(elem=>{
    let temp=""
    elem.models.forEach(l=>{
      temp+= `<tr>
                <td>${l.name}</td>
                <td>${l.price[0]}</td>
                <td>${l.price[1]}</td>
                <td>${l.price[2]}</td>
             </tr>`
    })
      templatesPrice.push(temp)

    
  })
 
 
   switch(prices.length){
     case 1: 
       template+= `
       <div class="accordion">
              <input id="toggle1" type="radio" class="accordion-toggle" name="toggle" />
              <label for="toggle1" class="first-label">Тариф ${prices[0].name} (${prices[0].time} )</label> 
             <section>
              <table>
              <tr>
                <th>Транспорт</th>
                <th>Первые <br> 5 минут,<br> руб</th>
                <th>Каждая <br> следующая минута, руб</th>
                <th>За 1 час,<br> руб</th>
              </tr>
              ${templatesPrice[0]}
            </table>
          </section>
          </div>`
      
      break;
   case 2: 
  template+= `
       <div class="accordion">
              <input id="toggle1" type="radio" class="accordion-toggle" name="toggle" />
              <label for="toggle1" class="first-label">Тариф ${prices[0].name} (${prices[0].time} )</label> 
             <section>
              <table>
              <tr>
                <th>Транспорт</th>
                <th>Первые <br> 5 минут,<br> руб</th>
                <th>Каждая <br> следующая минута, руб</th>
                <th>За 1 час,<br> руб</th>
              </tr>
              ${templatesPrice[0]}
            </table>
          </section>
          </div>
          <div class="accordion">
              <input id="toggle2" type="radio" class="accordion-toggle" name="toggle" />
              <label for="toggle2" class="second-label">${prices[1].name} (${prices[1].time} )</label> 
             <section>
              <table>
              <tr>
                <th>Транспорт</th>
                <th>Первые <br> 5 минут,<br> руб</th>
                <th>Каждая <br> следующая минута, руб</th>
                <th>За 1 час,<br> руб</th>
              </tr>
              ${templatesPrice[1]}
            </table>
          </section>
          </div>`
        
      break;
   
   }
   mapPrice.innerHTML=template
}
ymaps.ready(()=>{
    let marks = []
    Map = new ymaps.Map("map", { 
      center: localStorage.getItem('coords').split(","),
      zoom: 9,
      controls: ["zoomControl"]
    });
    
  clusterer = new ymaps.Clusterer({
    clusterIconColor: '#f26424',
    gridSize:10000,
    clusterHideIconOnBalloonOpen: true,
    geoObjectHideIconOnBalloonOpen: true
  })

  for (i = 0; i < station_obj.length; ++i) {
    marks[i] = new ymaps.Placemark(
      station_obj[i].coords,
      { 
        balloonContent: `Станция: ${station_obj[i].s_name}`
      },
      {    
        iconLayout: 'default#image',
        iconImageHref: 'img/maps_mark.svg', 
        iconImageSize: [25, 25]
      }
    );

   marks[i].state._data = {
      name: station_obj[i].s_name,
      address: station_obj[i].address,
      price: station_obj[i].price
    }
    
  marks[i].events.add("click",(e)=>{
    initPrice(e.originalEvent.target.state._data);
  })

}
clusterer.add(marks);
Map.geoObjects.add(clusterer);
})


let selectHeader = document.querySelectorAll('.select__header');
let selectItem = document.querySelectorAll('.select__item');

selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
});

selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)
});

function selectToggle() {
    this.parentElement.classList.toggle('is-active');
}

function selectChoose() {
    let text = this.innerText,
        select = this.closest('.select'),
        currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

        city.forEach( elem => {
          if(elem.name===text){
            localStorage.setItem('coords', elem.coords);
          }
        })
        Map.setCenter(localStorage.getItem('coords').split(','));
        localStorage.setItem('city', text);
}
var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
V = 0.2;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
    e.preventDefault(); //отменяем стандартное поведение
    var w = window.pageYOffset,  // производим прокрутка прокрутка
        hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
    t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
        start = null;
    requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
    function step(time) {
        if (start === null) start = time;
        var progress = time - start,
            r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
        window.scrollTo(0,r);
        if (r != w + t) {
            requestAnimationFrame(step)
        } else {
            location.hash = hash  // URL с хэшем
        }
    }
}, false);
}

window.addEventListener('scroll', function() {

if(pageYOffset > 250){
document.querySelector(".advantages_header").classList.add("header-animation")
}
if(pageYOffset > 1150){
document.querySelector(".usage_header").classList.add("header-animation")
}
if(pageYOffset > 1700){
document.querySelector(".map_header").classList.add("header-animation")
}
if(pageYOffset > 2300){
document.querySelector(".blog_header").classList.add("header-animation")
}
});
let button_left =  document.querySelector(".button_left")
let button_right = document.querySelector(".button_right")  
var slideIndex = 1;
let taimer = setInterval(()=>{plusSlides(1)},3000)
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

button_left.addEventListener("click",()=>{
clearInterval(taimer)
plusSlides(-1)
taimer = setInterval(()=>{plusSlides(1)},3000)
})
button_right.addEventListener("click",()=>{
clearInterval(taimer)
plusSlides(1)
taimer = setInterval(()=>{plusSlides(1)},3000)
})
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {

var i;

if (n > slidesImg.length) {
slideIndex = 1
for(let j = 0; j<slidesImg.length;j++){
    slidesStep[j].classList.remove("usage_step-active")
}
}
if (n < 1) {
slideIndex = slidesImg.length
}

for (i = 0; i < slidesImg.length; i++) {
slidesImg[i].classList.remove("usage_slides_img-active");
slidesText[i].classList.remove("usage_slides-text-active");
}
for(let j = 0; j<slideIndex;j++){
    slidesStep[j].classList.add("usage_step-active")
}
slidesImg[slideIndex - 1].classList.add("usage_slides_img-active");
slidesText[slideIndex - 1].classList.add("usage_slides-text-active");

}
for(let i = 0; i<slidesStep.length; i++){
slidesStep[i].addEventListener("click",function(){
  clearInterval(taimer)

   taimer = setInterval(()=>{plusSlides(1)},3000)
})

}
