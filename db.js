const universities = [
  { university: "TATU", direction: "Dasturiy injiniring", grant: 178, contract: 155 },
  { university: "TATU", direction: "Sun'iy intellekt", grant: 180, contract: 160 },
  { university: "TATU", direction: "Kiberxavfsizlik", grant: 182, contract: 162 },
  { university: "TATU", direction: "Telekommunikatsiya", grant: 170, contract: 145 },

  { university: "INHA", direction: "Computer Science", grant: 183, contract: 165 },
  { university: "INHA", direction: "Software Engineering", grant: 181, contract: 160 },
  { university: "INHA", direction: "Data Science", grant: 182, contract: 168 },

  { university: "WIUT", direction: "Business Information Systems", grant: 180, contract: 165 },
  { university: "WIUT", direction: "Economics", grant: 178, contract: 160 },
  { university: "WIUT", direction: "Finance", grant: 179, contract: 162 },

  { university: "TDTU", direction: "Kompyuter injiniringi", grant: 175, contract: 150 },
  { university: "TDTU", direction: "Robototexnika", grant: 178, contract: 155 },
  { university: "TDTU", direction: "Dasturiy tizimlar", grant: 176, contract: 152 },

  { university: "SamDU", direction: "IT", grant: 165, contract: 140 },
  { university: "SamDU", direction: "Axborot tizimlari", grant: 160, contract: 135 },

  { university: "BuxDU", direction: "IT", grant: 158, contract: 130 },
  { university: "BuxDU", direction: "Dasturiy injiniring", grant: 162, contract: 138 },

  { university: "FDU", direction: "IT", grant: 160, contract: 135 },
  { university: "FDU", direction: "Kompyuter injiniringi", grant: 165, contract: 140 },

  { university: "Andijon DTI", direction: "IT", grant: 158, contract: 133 },
  { university: "Andijon DTI", direction: "Kompyuter injiniringi", grant: 162, contract: 138 },

  { university: "UrDU", direction: "IT", grant: 160, contract: 135 },
  { university: "UrDU", direction: "Axborot tizimlari", grant: 158, contract: 132 },

  { university: "NamDU", direction: "IT", grant: 160, contract: 135 },
  { university: "NamDU", direction: "Kompyuter injiniringi", grant: 162, contract: 138 },

  { university: "NUU", direction: "IT", grant: 158, contract: 130 },
  { university: "NUU", direction: "Dasturiy injiniring", grant: 162, contract: 135 },

  { university: "TDIU", direction: "Iqtisodiyot", grant: 180, contract: 165 },
  { university: "TDIU", direction: "Moliya", grant: 178, contract: 160 },
  { university: "TDIU", direction: "Bank ishi", grant: 176, contract: 158 },

  { university: "Tashkent Medical Academy", direction: "Davolash ishi", grant: 183, contract: 170 },
  { university: "Samarkand Medical University", direction: "Davolash ishi", grant: 182, contract: 175 },

  { university: "Chirchiq PDU", direction: "Informatika o‘qitish", grant: 150, contract: 125 },
  { university: "Jizzax PDU", direction: "Informatika", grant: 148, contract: 120 },

  { university: "Toshkent Transport Universiteti", direction: "Transport logistikasi", grant: 175, contract: 150 },
  { university: "Toshkent Transport Universiteti", direction: "Temir yo‘l transporti muhandisligi", grant: 178, contract: 155 },
  { university: "Toshkent Transport Universiteti", direction: "Avtomobil transporti", grant: 176, contract: 152 },
  { university: "Toshkent Transport Universiteti", direction: "Aviatsiya transporti boshqaruvi", grant: 180, contract: 160 },
  { university: "Toshkent Transport Universiteti", direction: "Transport tizimlarini boshqarish", grant: 174, contract: 150 },

  { university: "TATU Nukus filiali", direction: "IT", grant: 155, contract: 130 },
  { university: "TATU Nukus filiali", direction: "Dasturiy injiniring", grant: 158, contract: 135 },

  { university: "TATU Farg‘ona filiali", direction: "IT", grant: 160, contract: 135 },
  { university: "TATU Farg‘ona filiali", direction: "Kiberxavfsizlik", grant: 165, contract: 140 },

  { university: "TATU Samarqand filiali", direction: "IT", grant: 162, contract: 138 },
  { university: "TATU Samarqand filiali", direction: "Axborot tizimlari", grant: 160, contract: 135 },

  { university: "TATU Qarshi filiali", direction: "IT", grant: 158, contract: 133 },
  { university: "TATU Qarshi filiali", direction: "Dasturiy injiniring", grant: 160, contract: 135 },

  { university: "MDIS", direction: "IT", grant: 175, contract: 155 },
  { university: "MDIS", direction: "Business IT", grant: 172, contract: 150 },

  { university: "New Uzbekistan University", direction: "AI", grant: 183, contract: 175 },
  { university: "New Uzbekistan University", direction: "Data Science", grant: 182, contract: 170 },

  { university: "Tashkent State Transport University", direction: "Logistics Engineering", grant: 178, contract: 155 },
  { university: "Tashkent State Transport University", direction: "Railway Engineering", grant: 180, contract: 160 },
  { university: "Tashkent State Transport University", direction: "Automotive Engineering", grant: 176, contract: 152 },
  { university: "Tashkent State Transport University", direction: "Aviation Management", grant: 181, contract: 165 },
  { university: "Tashkent State Transport University", direction: "Transport Systems", grant: 174, contract: 150 },

  { university: "Tashkent State University of Economics", direction: "Economics", grant: 180, contract: 165 },
  { university: "Tashkent State University of Economics", direction: "Finance", grant: 178, contract: 160 },
  { university: "Tashkent State University of Economics", direction: "Business Analytics", grant: 179, contract: 162 },

  { university: "Tashkent State Technical University", direction: "Mechanical Engineering", grant: 175, contract: 150 },
  { university: "Tashkent State Technical University", direction: "Electrical Engineering", grant: 176, contract: 152 },
  { university: "Tashkent State Technical University", direction: "Automation Systems", grant: 178, contract: 155 },

  { university: "Bukhara State University", direction: "IT", grant: 158, contract: 130 },
  { university: "Bukhara State University", direction: "Software Engineering", grant: 162, contract: 138 },

  { university: "Urganch State University", direction: "IT", grant: 160, contract: 135 },
  { university: "Urganch State University", direction: "AI", grant: 165, contract: 140 },

  { university: "Namangan Engineering Institute", direction: "IT", grant: 160, contract: 135 },
  { university: "Namangan Engineering Institute", direction: "Computer Engineering", grant: 162, contract: 138 },

  { university: "Andijan Machine Building Institute", direction: "IT", grant: 158, contract: 133 },
  { university: "Andijan Machine Building Institute", direction: "Automation", grant: 160, contract: 135 },

  { university: "Jizzakh State University", direction: "IT", grant: 150, contract: 125 },
  { university: "Jizzakh State University", direction: "Informatics", grant: 148, contract: 120 },

  { university: "Samarkand State University", direction: "IT", grant: 165, contract: 140 },
  { university: "Samarkand State Unaiversity", direction: "Data Science", grant: 168, contract: 145 },

  { university: "Karshi Engineering Institute", direction: "IT", grant: 160, contract: 135 },
  { university: "Karshi Engineering Institute", direction: "Software Engineering", grant: 162, contract: 138 },

  { university: "Tashkent Chemical Technology Institute", direction: "Automation Systems", grant: 170, contract: 145 },
  { university: "Tashkent Chemical Technology Institute", direction: "Industrial IT", grant: 168, contract: 142 }
];