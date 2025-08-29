// ДАННЫЕ: Список категорий с подкатегориями и slug для маршрутов
const categories = [
  { 
    id: 1, 
    name: "Транспорт", 
    slug: "transport",
    icon: "bi bi-car-front-fill",
    subcategories: [
      "Легковые авто",
      "Мототранспорт",
      "Коммерческий транспорт",
      "Прицепы и контейнеры",
      "Запчасти",
      "Услуги"
    ]
  },
  { 
    id: 2, 
    name: "Недвижимость", 
    slug: "real-estate",
    icon: "bi bi-house-fill",
    subcategories: [
      "Новостройки",
      "Вторичка",
      "Хавли (дача)"
    ]
  },
  { 
    id: 3, 
    name: "Услуги", 
    slug: "services",
    icon: "bi bi-tools",
    subcategories: [
      "Услуги сантехника",
      "Услуги электрика",
      "Услуги ремонта бытовой техники и электроники",
      "Курсы обучения",
      "Дизайнеры, реклама, полиграфия",
      "Перевозки и аренда транспорта"
    ]
  },
  { 
    id: 4, 
    name: "Бытовая техника и электроника", 
    slug: "electronics",
    icon: "bi bi-laptop",
    subcategories: [
      "TV",
      "Техника для дома и кухни",
      "Видеонаблюдение и камеры",
      "Климатическая техника",
      "Обогреватели"
    ]
  },
  { 
    id: 5, 
    name: "Телефоны и связь", 
    slug: "phones",
    icon: "bi bi-phone",
    subcategories: [
      "Мобильные телефоны",
      "Аксессуары",
      "Ремонт и сервис телефонов"
    ]
  },
  { 
    id: 6, 
    name: "Компьютеры и оргтехника", 
    slug: "computers",
    icon: "bi bi-display",
    subcategories: [
      "Ноутбуки",
      "ПК",
      "Приставки",
      "Планшеты и букридеры",
      "Принтеры и сканеры",
      "Мониторы и проекторы",
      "Информационное и сетевое оборудование"
    ]
  },
  { 
    id: 7, 
    name: "Вакансии", 
    slug: "jobs",
    icon: "bi bi-briefcase-fill",
    subcategories: [
      "Административный персонал",
      "HR и кадры",
      "IT, телеком, компьютеры",
      "Банки, страхование, лизинг",
      "Бухгалтерия и финансы",
      "Домашний персонал и обслуживание"
    ]
  },
  { 
    id: 8, 
    name: "Мебель", 
    slug: "furniture",
    icon: "bi bi-chair",
    subcategories: [
      "Мебель для спальни",
      "Офисная мебель",
      "Мебель для гостиной",
      "Мебель для прихожей",
      "Мебель на заказ"
    ]
  }
];

// ДАННЫЕ: Список объявлений с привязкой к категориям через slug
const listingsData = [
  { id: 1, title: "Смартфон Samsung Galaxy S23", price: "1500 сом", location: "Душанбе", isNew: true, categorySlug: "phones" },
  { id: 2, title: "Ноутбук Dell XPS 13", price: "2000 сом", location: "Худжанд", isNew: false, categorySlug: "computers" },
  { id: 3, title: "Диван угловой", price: "800 сом", location: "Бохтар", isNew: false, categorySlug: "furniture" },
  { id: 4, title: "Toyota Camry 2020", price: "25000 сом", location: "Душанбе", isNew: false, categorySlug: "transport" },
  { id: 5, title: "Квартира в новостройке", price: "50000 сом", location: "Куляб", isNew: true, categorySlug: "real-estate" },
  { id: 6, title: "Услуги электрика", price: "100 сом/час", location: "Душанбе", isNew: false, categorySlug: "services" },
  { id: 7, title: "Телевизор LG 55 дюймов", price: "1200 сом", location: "Худжанд", isNew: true, categorySlug: "electronics" },
  { id: 8, title: "Вакансия: Программист", price: "3000 сом/мес", location: "Душанбе", isNew: true, categorySlug: "jobs" }
];