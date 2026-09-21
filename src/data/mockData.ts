import { ServiceItem, BrandOption, ProblemOption, RepairTicket, ReviewItem, ShopInfo } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'display',
    category: 'screen',
    titleBn: 'ডিসপ্লে পরিবর্তন',
    titleEn: 'Display Replacement',
    descBn: 'ভাঙা বা নষ্ট স্ক্রিন, টাচ সমস্যা বা দাগ পড়া ডিসপ্লে বদলে পান অরিজিনাল ডিসপ্লে বা প্রিমিয়াম ওলেড।',
    descEn: 'Fix cracked screens, unresponsive touch, line issues with original OLED or Grade-A panels.',
    iconName: 'Smartphone',
    turnaroundBn: '৩০ - ৪৫ মিনিট',
    turnaroundEn: '30 - 45 mins',
    warrantyBn: '৯০ দিনের ওয়ারেন্টি',
    warrantyEn: '90 Days Warranty',
    startingPrice: 1200,
    highlight: true,
    featuresBn: ['১০০% ট্রু-টোন ও কালার এক্যুরেসি', 'স্মুথ ও হাই-রেসপন্স টাচ', 'অরিজিনাল ও বাজেট ফ্রেন্ডলি অপশন'],
    featuresEn: ['100% True-Tone and Color Accuracy', 'Ultra-smooth touch sensitivity', 'Both OEM and Budget choices']
  },
  {
    id: 'battery',
    category: 'power',
    titleBn: 'ব্যাটারি রিপ্লেসমেন্ট',
    titleEn: 'Battery Replacement',
    descBn: 'ফোন দ্রুত চার্জ শেষ হওয়া, ব্যাটারি ফুলে যাওয়া বা রিস্টার্ট হওয়ার তাৎক্ষণিক ১০০% আসল ব্যাটারি সমাধান।',
    descEn: 'Solve quick drain, swollen batteries, or random shutdowns with 100% genuine high-cycle cells.',
    iconName: 'BatteryCharging',
    turnaroundBn: '২০ - ৩০ মিনিট',
    turnaroundEn: '20 - 30 mins',
    warrantyBn: '৬ মাসের গ্যারান্টি',
    warrantyEn: '6 Months Warranty',
    startingPrice: 850,
    highlight: true,
    featuresBn: ['০ সাইকেল নতুন সেল', 'লং লাস্টিং ব্যাকআপ গ্যারান্টি', 'ব্যাটারি হেলথ ১০০% প্রদর্শন'],
    featuresEn: ['Brand new 0-cycle cells', 'Long lasting backup guarantee', 'Displays 100% battery health']
  },
  {
    id: 'charging-port',
    category: 'power',
    titleBn: 'চার্জিং পোর্ট সমস্যা সমাধান',
    titleEn: 'Charging Port Repair',
    descBn: 'চার্জ না হওয়া, লুজ কানেকশন, ফাস্ট চার্জিং না পাওয়া বা ক্যাবল নড়াচড়ায় চার্জ ছেড়ে দেওয়ার নিখুঁত সমাধান।',
    descEn: 'Fix loose ports, slow charging, moisture detected errors, or damaged Type-C / Lightning pins.',
    iconName: 'Zap',
    turnaroundBn: '২৫ - ৪০ মিনিট',
    turnaroundEn: '25 - 40 mins',
    warrantyBn: '৩০ দিনের ওয়ারেন্টি',
    warrantyEn: '30 Days Warranty',
    startingPrice: 450,
    highlight: true,
    featuresBn: ['অরিজিনাল পোর্ট ও পিন পরিবর্তন', 'সুপার ফাস্ট ও VOOC চার্জিং সাপোর্ট', 'ডাস্ট ও অক্সিডেশন ক্লিনিং'],
    featuresEn: ['Genuine connector pins', 'Super fast & VOOC charging support', 'Dust & corrosion deep clean']
  },
  {
    id: 'motherboard',
    category: 'hardware',
    titleBn: 'মাদারবোর্ড ও আইসি রিপেয়ার',
    titleEn: 'Motherboard & IC Repair',
    descBn: 'ডেড ফোন, পাওয়ার আইসি, সিপিইউ রিবলিং, শর্ট সার্কিট এবং জটিল ইলেকট্রনিক সমস্যার অ্যাডভান্সড চিপ রিপেয়ার।',
    descEn: 'Dead phone wake-up, power IC, CPU reballing, short circuit, and micro-soldering solutions.',
    iconName: 'Cpu',
    turnaroundBn: '২ - ৪ ঘণ্টা',
    turnaroundEn: '2 - 4 hours',
    warrantyBn: '৩০ দিনের ওয়ারেন্টি',
    warrantyEn: '30 Days Warranty',
    startingPrice: 1500,
    featuresBn: ['মাইক্রোস্কোপিক সোল্ডারিং সেন্টার', 'সিপিইউ ও পাওয়ার ম্যানেজমেন্ট আইসি', 'ডেটা সুরক্ষার সর্বোচ্চ চেষ্টা'],
    featuresEn: ['Microscopic precision soldering', 'Power IC & CPU reballing', 'Maximum data preservation priority']
  },
  {
    id: 'water-damage',
    category: 'hardware',
    titleBn: 'ওয়াটার ড্যামেজ রিকভারি',
    titleEn: 'Water Damage Recovery',
    descBn: 'পানিতে পড়া ফোন তাৎক্ষণিক আল্ট্রাসনিক কেমিক্যাল ওয়াশ ও ড্রাইং করে মাদারবোর্ড মরিচা মুক্ত করা হয়।',
    descEn: 'Immediate ultrasonic chemical deep cleaning, de-oxidation, and circuit recovery for liquid drops.',
    iconName: 'Droplets',
    turnaroundBn: '১ - ২ ঘণ্টা',
    turnaroundEn: '1 - 2 hours',
    warrantyBn: 'টেস্টিং গ্যারান্টি',
    warrantyEn: 'Testing Guarantee',
    startingPrice: 700,
    featuresBn: ['আল্ট্রাসনিক বাথ ও অ্যান্টি-ময়েশ্চার ওয়াশ', 'কম্পোনেন্ট লেভেল টেস্ট', 'তাৎক্ষণিক ফার্স্ট এইড প্রোটোকল'],
    featuresEn: ['Ultrasonic chemical bath', 'Component short circuit test', 'Fast-aid emergency rescue protocol']
  },
  {
    id: 'camera-speaker',
    category: 'hardware',
    titleBn: 'ক্যামেরা ও স্পিকার সমাধান',
    titleEn: 'Camera & Speaker Repair',
    descBn: 'ক্যামেরায় ঝাপসা ছবি, কাঁপুনি, ফোকাস সমস্যা অথবা ফোনের সাউন্ড কম শোনা ও মাইক কাজ না করার ফিক্স।',
    descEn: 'Fix blurry lenses, camera shake (OIS), cracked glass, quiet ear speaker, and microphone faults.',
    iconName: 'Camera',
    turnaroundBn: '৩০ - ৬০ মিনিট',
    turnaroundEn: '30 - 60 mins',
    warrantyBn: '৬০ দিনের ওয়ারেন্টি',
    warrantyEn: '60 Days Warranty',
    startingPrice: 650,
    featuresBn: ['ক্লিয়ার ও ক্রিস্টাল সাউন্ড স্পিকার', 'হাই রেজোলিউশন আসল ক্যামেরা মডিউল', 'নয়েজ ক্যান্সেলেশন মাইক টেস্ট'],
    featuresEn: ['Crystal clear audio modules', 'Original camera sensors & glass', 'Noise-canceling mic inspection']
  },
  {
    id: 'software',
    category: 'software',
    titleBn: 'সফটওয়্যার ও আনলকিং সার্ভিস',
    titleEn: 'Software & Unlock Services',
    descBn: 'ফোন হ্যাং বা রিস্টার্ট লুপ, প্যাটার্ন/পিন লক, গুগল এফআরপি বাইপাস, ওএস ফ্ল্যাশিং ও ডেটা ব্যাকআপ।',
    descEn: 'Bootloop fix, forgotten PIN/pattern, Google FRP unlock, official firmware flashing & backup.',
    iconName: 'ShieldCheck',
    turnaroundBn: '১৫ - ৩০ মিনিট',
    turnaroundEn: '15 - 30 mins',
    warrantyBn: 'লাইফটাইম ফার্মওয়্যার সাপোর্ট',
    warrantyEn: 'Lifetime Firmware Support',
    startingPrice: 500,
    featuresBn: ['অফিসিয়াল ফার্মওয়্যার ফ্ল্যাশ', 'লেটেস্ট অ্যান্ড্রয়েড/আইওএস আপডেট', 'নিরাপদ ডেটা রিকভারি সাপোর্ট'],
    featuresEn: ['Official stock firmware', 'Latest OS system updates', 'Safe data recovery options']
  },
  {
    id: 'body-glass',
    category: 'screen',
    titleBn: 'ব্যাক গ্লাস ও ফ্রেম চেঞ্জ',
    titleEn: 'Back Glass & Frame Change',
    descBn: 'লেজার টেকনোলজির মাধ্যমে ফোনের ব্যাক প্যানেল, ভাঙা গ্লাস বা বাঁকা বডি ফ্রেম নতুনের মতো পরিবর্তন।',
    descEn: 'Laser-assisted back glass replacement, metal middle chassis fixing, like-new factory fit.',
    iconName: 'Wrench',
    turnaroundBn: '১ - ২ ঘণ্টা',
    turnaroundEn: '1 - 2 hours',
    warrantyBn: 'ফিটিং গ্যারান্টি',
    warrantyEn: 'Fitting Guarantee',
    startingPrice: 800,
    featuresBn: ['লেজার নিখুঁত ব্যাক গ্লাস রিমুভাল', 'অরিজিনাল কালার ও ফিনিশ', 'ওয়াটারপ্রুফ সিলিং পুনরায় স্থাপন'],
    featuresEn: ['Clean laser-assisted removal', 'Factory finish back panels', 'Water-resistant seal reapplied']
  }
];

export const POPULAR_BRANDS: BrandOption[] = [
  {
    id: 'samsung',
    name: 'Samsung (স্যামসাং)',
    models: ['Galaxy S24 / S23 Ultra', 'Galaxy S22 / S21', 'Galaxy A55 / A54', 'Galaxy A35 / A34', 'Galaxy A15 / A14', 'Galaxy M34 / M14']
  },
  {
    id: 'apple',
    name: 'Apple iPhone (আইফোন)',
    models: ['iPhone 15 / 15 Pro Max', 'iPhone 14 / 14 Pro', 'iPhone 13 / 13 Pro', 'iPhone 12 / 12 Mini', 'iPhone 11 / 11 Pro', 'iPhone X / XR / XS']
  },
  {
    id: 'xiaomi',
    name: 'Xiaomi / Redmi / POCO',
    models: ['Redmi Note 13 / 13 Pro', 'Redmi Note 12 / 11', 'Poco X6 / X5 Pro', 'Redmi 12 / 10C', 'Xiaomi 13T / 12 Pro', 'Poco F5 / F4']
  },
  {
    id: 'vivo',
    name: 'Vivo (ভিভো)',
    models: ['Vivo V30 / V30e', 'Vivo V29 / V27', 'Vivo Y28 / Y27', 'Vivo Y17s / Y02', 'Vivo T2 Pro / T1']
  },
  {
    id: 'oppo',
    name: 'Oppo (অপ্পো)',
    models: ['Oppo Reno 11 / 11F', 'Oppo Reno 10 Pro', 'Oppo F25 / F21 Pro', 'Oppo A78 / A58', 'Oppo A38 / A18']
  },
  {
    id: 'realme',
    name: 'Realme (রিয়েলমি)',
    models: ['Realme 12 Pro+ / 12', 'Realme 11 Pro / 11', 'Realme C55 / C53', 'Realme C67 / C33', 'Realme Narzo 60 / 50']
  },
  {
    id: 'oneplus',
    name: 'OnePlus (ওয়ানপ্লাস)',
    models: ['OnePlus 12 / 12R', 'OnePlus 11 / 10 Pro', 'OnePlus Nord CE 3 / CE 4', 'OnePlus Nord 3', 'OnePlus 9 / 8 Pro']
  },
  {
    id: 'infinix-tecno',
    name: 'Infinix & Tecno',
    models: ['Infinix Note 40 / 30 Pro', 'Infinix Hot 40 / 30', 'Tecno Camon 30 / 20 Pro', 'Tecno Spark 20 / 10', 'Infinix GT 20 Pro']
  }
];

export const PROBLEM_OPTIONS: ProblemOption[] = [
  {
    id: 'display',
    nameBn: 'ডিসপ্লে পরিবর্তন (Display Screen)',
    nameEn: 'Display Replacement',
    basePrice: 1500,
    turnaroundBn: '৩০ - ৪৫ মিনিট',
    turnaroundEn: '30 - 45 mins',
    warrantyBn: '৯০ দিন',
    warrantyEn: '90 Days',
    category: 'screen'
  },
  {
    id: 'battery',
    nameBn: 'ব্যাটারি রিপ্লেসমেন্ট (Battery Change)',
    nameEn: 'Battery Replacement',
    basePrice: 900,
    turnaroundBn: '২০ - ৩০ মিনিট',
    turnaroundEn: '20 - 30 mins',
    warrantyBn: '১৮০ দিন',
    warrantyEn: '180 Days',
    category: 'power'
  },
  {
    id: 'charging-port',
    nameBn: 'চার্জিং পোর্ট সমস্যা সমাধান (Charging Port)',
    nameEn: 'Charging Port Repair',
    basePrice: 500,
    turnaroundBn: '২৫ - ৩৫ মিনিট',
    turnaroundEn: '25 - 35 mins',
    warrantyBn: '৩০ দিন',
    warrantyEn: '30 Days',
    category: 'power'
  },
  {
    id: 'back-glass',
    nameBn: 'ব্যাক গ্লাস বা বডি চেঞ্জ (Back Glass / Frame)',
    nameEn: 'Back Glass Change',
    basePrice: 850,
    turnaroundBn: '১ - ২ ঘণ্টা',
    turnaroundEn: '1 - 2 hours',
    warrantyBn: '৩০ দিন',
    warrantyEn: '30 Days',
    category: 'screen'
  },
  {
    id: 'speaker-mic',
    nameBn: 'স্পিকার ও মাইক্রোফোন (Speaker / Mic)',
    nameEn: 'Speaker & Mic Fix',
    basePrice: 650,
    turnaroundBn: '৩০ - ৫০ মিনিট',
    turnaroundEn: '30 - 50 mins',
    warrantyBn: '৬০ দিন',
    warrantyEn: '60 Days',
    category: 'hardware'
  },
  {
    id: 'camera',
    nameBn: 'ক্যামেরা সমস্যা বা কাঁচ ভাঙা (Camera / Glass)',
    nameEn: 'Camera / Lens Repair',
    basePrice: 950,
    turnaroundBn: '৪৫ মিনিট',
    turnaroundEn: '45 mins',
    warrantyBn: '৬০ দিন',
    warrantyEn: '60 Days',
    category: 'hardware'
  },
  {
    id: 'water-damage',
    nameBn: 'পানিতে পড়া ফোন ট্রিটমেন্ট (Water Damage)',
    nameEn: 'Water Damage Service',
    basePrice: 750,
    turnaroundBn: '১ - ২ ঘণ্টা',
    turnaroundEn: '1 - 2 hours',
    warrantyBn: 'চেকিং গ্যারান্টি',
    warrantyEn: 'Checking Guarantee',
    category: 'hardware'
  },
  {
    id: 'motherboard',
    nameBn: 'মাদারবোর্ড ও ডেড ফোন রিপেয়ার (Motherboard / Dead)',
    nameEn: 'Motherboard IC Repair',
    basePrice: 1800,
    turnaroundBn: '২ - ৪ ঘণ্টা',
    turnaroundEn: '2 - 4 hours',
    warrantyBn: '৩০ দিন',
    warrantyEn: '30 Days',
    category: 'hardware'
  },
  {
    id: 'software-unlock',
    nameBn: 'সফটওয়্যার, প্যাটার্ন/FRP লক (Software / Unlock)',
    nameEn: 'Software & FRP Unlock',
    basePrice: 500,
    turnaroundBn: '২০ - ৩০ মিনিট',
    turnaroundEn: '20 - 30 mins',
    warrantyBn: 'ফার্মওয়্যার গ্যারান্টি',
    warrantyEn: 'Firmware Guarantee',
    category: 'software'
  }
];

export const INITIAL_TICKETS: RepairTicket[] = [
  {
    ticketId: 'MH-8021',
    customerName: 'তানভীর আহমেদ (Tanvir Ahmed)',
    phoneLast4: '4589',
    device: 'Apple iPhone 13 (Blue, 128GB)',
    issueBn: 'ব্যাটারি রিপ্লেসমেন্ট ও স্পিকার ক্লিনিং',
    issueEn: 'Battery Replacement & Speaker Deep Clean',
    stage: 'ready',
    receivedDateBn: '১৫ সেপ্টেম্বর, ২০২৬ (সকাল ১১:৩০)',
    receivedDateEn: '15 Sep, 2026 (11:30 AM)',
    estimatedCost: '৳২,২০০',
    technicianNoteBn: '১০০% অরিজিনাল অ্যাপল সেল ইনস্টল করা হয়েছে। সাউন্ড টেস্ট সফল। ডেলিভারির জন্য প্রস্তুত।',
    technicianNoteEn: 'Original battery cell installed with 100% health indication. Audio passed. Ready for pickup.'
  },
  {
    ticketId: 'MH-8022',
    customerName: 'রাকিবুল হাসান (Rakibul Hasan)',
    phoneLast4: '7102',
    device: 'Samsung Galaxy A54 5G (Awesome Lime)',
    issueBn: 'ডিসপ্লে পরিবর্তন (Super AMOLED)',
    issueEn: 'Super AMOLED Display Replacement',
    stage: 'testing',
    receivedDateBn: '১৫ সেপ্টেম্বর, ২০২৬ (দুপুর ২:০০)',
    receivedDateEn: '15 Sep, 2026 (02:00 PM)',
    estimatedCost: '৳৩,৪০০',
    technicianNoteBn: 'নতুন অরিজিনাল ডিসপ্লে লাগানো সম্পন্ন। টাচ রেসপন্স ও ফিঙ্গারপ্রিন্ট সেন্সর ক্যালিব্রেশন টেস্টিং চলছে।',
    technicianNoteEn: 'New AMOLED panel fitted. Currently verifying in-display fingerprint scanner and 120Hz refresh rate.'
  },
  {
    ticketId: 'MH-8023',
    customerName: 'সুমাইয়া জাহান (Sumaiya Jahan)',
    phoneLast4: '9821',
    device: 'Xiaomi Redmi Note 12',
    issueBn: 'চার্জিং পোর্ট সমস্যা সমাধান (Type-C Jack)',
    issueEn: 'Charging Port Replacement (Type-C)',
    stage: 'repairing',
    receivedDateBn: '১৫ সেপ্টেম্বর, ২০২৬ (বিকাল ৩:১৫)',
    receivedDateEn: '15 Sep, 2026 (03:15 PM)',
    estimatedCost: '৳৫৫০',
    technicianNoteBn: 'সাব-বোর্ড খোলা হয়েছে। নতুন অরিজিনাল টাইপ-সি পোর্ট সোল্ডারিং চলছে।',
    technicianNoteEn: 'Sub-board dismantled. High-grade OEM Type-C connector soldering in progress.'
  },
  {
    ticketId: 'MH-8024',
    customerName: 'মাহমুদ করিম (Mahmud Karim)',
    phoneLast4: '3341',
    device: 'OnePlus 11R',
    issueBn: 'ওয়াটার ড্যামেজ ও ডেড সল্যুশন',
    issueEn: 'Water Drop Damage Diagnostic',
    stage: 'inspecting',
    receivedDateBn: '১৫ সেপ্টেম্বর, ২০২৬ (বিকাল ৪:০০)',
    receivedDateEn: '15 Sep, 2026 (04:00 PM)',
    estimatedCost: '৳১,২০০ - ৳১,৮০০ (আনুমানিক)',
    technicianNoteBn: 'মাদারবোর্ডে আল্ট্রাসনিক ড্রাইং সম্পন্ন হয়েছে। শর্ট সার্কিট আইসি ডায়াগনসিস চলছে।',
    technicianNoteEn: 'Ultrasonic board clean completed. Tracing shorted SMD capacitor rails.'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    authorBn: 'ইঞ্জিনিয়ার সাকিব চৌধুরী',
    authorEn: 'Engr. Sakib Chowdhury',
    locationBn: 'মিরপুর, ঢাকা',
    locationEn: 'Mirpur, Dhaka',
    device: 'Samsung Galaxy S22 Ultra',
    rating: 5,
    commentBn: 'আমার ফোনের ডিসপ্লে ভেঙে গিয়েছিল, অফিস টাইমে মাত্র ৪০ মিনিটে চোখের সামনে অরিজিনাল ডিসপ্লে ফিট করে দিয়েছেন। মোবাইল হাসপাতালের সার্ভিস সত্যিই অসাধারণ!',
    commentEn: 'My phone screen was smashed. They replaced it right in front of me with an original display in just 40 minutes. Mobile Hospital service is truly remarkable!',
    dateBn: '২ দিন আগে',
    dateEn: '2 days ago',
    verified: true
  },
  {
    id: 'rev-2',
    authorBn: 'ফারহানা ইসলাম',
    authorEn: 'Farhana Islam',
    locationBn: 'ধানমন্ডি, ঢাকা',
    locationEn: 'Dhanmondi, Dhaka',
    device: 'iPhone 12',
    rating: 5,
    commentBn: 'চার্জিং পোর্টে চার্জ নিচ্ছিল না। অন্য দোকানে মাদারবোর্ড নষ্ট বলে অনেক টাকা চেয়েছিল, এখানে ভাই খুব দ্রুত ও সাশ্রয়ী খরচে আসল পোর্ট লাগিয়ে দিলেন। সততা দেখে মুগ্ধ হয়েছি।',
    commentEn: 'Charging port was completely unresponsive. Another shop claimed huge motherboard repair fees, but here they fixed the original port quickly and affordably!',
    dateBn: '৫ দিন আগে',
    dateEn: '5 days ago',
    verified: true
  },
  {
    id: 'rev-3',
    authorBn: 'আব্দুল কাদের',
    authorEn: 'Abdul Kader',
    locationBn: 'উত্তরা, ঢাকা',
    locationEn: 'Uttara, Dhaka',
    device: 'Redmi Note 10 Pro',
    rating: 5,
    commentBn: 'ব্যাটারি ব্যাকআপ খুব বাজে ছিল। নতুন ব্যাটারি লাগানোর পর এখন আগের মত পুরো দিন ব্যাকআপ পাচ্ছি। সাথে ওয়ারেন্টি স্লিপও পেয়েছি। ধন্যবাদ মোবাইল হাসপাতাল টিমকে।',
    commentEn: 'Battery backup was awful. After changing here, getting a solid full day backup just like when the phone was new. Got a written warranty slip too.',
    dateBn: '১ সপ্তাহ আগে',
    dateEn: '1 week ago',
    verified: true
  }
];

export const SHOP_INFO: ShopInfo = {
  nameBn: 'মোবাইল হসপিটাল',
  nameEn: 'Mobile Hospital',
  taglineBn: 'আপনার প্রিয় ফোনের সেরা যত্ন!',
  taglineEn: 'The Best Care for Your Beloved Phone!',
  subtitleBn: 'আমরা দ্রুত এবং বিশ্বস্ত মোবাইল রিপেয়ারিং সেবা প্রদান করি।',
  subtitleEn: 'We provide fast and trustworthy smartphone repair services.',
  email: 'mobilehospital633@gmail.com',
  phoneHotline: '+91 74070 84034',
  phoneAlt: '+91 74070 84034',
  phoneRaw: '7407084034',
  whatsappNumber: '917407084034',
  whatsappRaw: '7407084034',
  addressBn: 'মোবাইল হসপিটাল, মোবাইল রিপেয়ারিং সেন্টার, প্রধান বাজার রোড',
  addressEn: 'Mobile Hospital, Mobile Repairing Center, Main Market Road',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Mobile%20Hospital%20Mobile%20Repairing%20Center&t=&z=15&ie=UTF8&iwloc=&output=embed',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Mobile+Hospital+Mobile+Repairing+Center',
  workingHoursBn: 'প্রতিদিন সকাল ৯টা থেকে রাত ১০টা পর্যন্ত খোলা থাকবে',
  workingHoursEn: 'Open Daily: 9:00 AM to 10:00 PM',
  stats: [
    { value: '১৫,০০০+', labelBn: 'সফল রিপেয়ার', labelEn: 'Successful Repairs' },
    { value: '৩০ মি.', labelBn: 'গড় এক্সপ্রেস টাইম', labelEn: 'Avg. Express Repair' },
    { value: '১০০%', labelBn: 'জেনুইন পার্টস গ্যারান্টি', labelEn: 'Genuine Parts Guarantee' },
    { value: '৪.৯ ★', labelBn: 'কাস্টমার রেটিং', labelEn: 'Customer Rating' }
  ],
  announcement: {
    enabled: true,
    badgeBn: 'সরাসরি সেবা',
    badgeEn: 'Live Service',
    textBn: 'প্রতিদিন সকাল ৯টা থেকে রাত ১০টা পর্যন্ত আমাদের সেন্টারে সরাসরি মোবাইল মেরামত সেবা চালু রয়েছে।',
    textEn: 'Our center is open daily from 9:00 AM to 10:00 PM for fast on-the-spot mobile repair service.'
  },
  backgroundTheme: 'tech-circuit'
};
