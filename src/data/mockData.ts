import { ServiceItem, BrandOption, ProblemOption, RepairTicket, ReviewItem, ShopInfo } from '../types';
import displayRepairImg from '../assets/images/service_display_repair_1790410866626.jpg';
import batteryReplaceImg from '../assets/images/service_battery_replace_1790410879711.jpg';
import chargingPortImg from '../assets/images/service_charging_port_1790410893054.jpg';
import motherboardIcImg from '../assets/images/service_motherboard_ic_1790410904672.jpg';
import liquidRecoveryImg from '../assets/images/service_liquid_recovery_1790410916743.jpg';
import cameraSpeakerImg from '../assets/images/service_camera_speaker_1790410928022.jpg';
import softwareServiceImg from '../assets/images/service_software_unlock_1790411522412.jpg';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'display',
    category: 'screen',
    titleBn: 'ডিসপ্লে গ্লাস রিপ্লেসমেন্ট',
    titleEn: 'Display & Glass Replacement',
    descBn: 'আকস্মিক আঘাতে স্ক্রিন ফেটে যাওয়া, টাচ অকার্যকর হওয়া বা কালার লাইনের সমস্যায় পান নিখুঁত কালার এক্যুরেসি ও মসৃণ টাচ সমৃদ্ধ ১০০% অরিজিনাল ওলেড বা প্রিমিয়াম গ্লাস প্যানেল।',
    descEn: 'Fix cracked glass, shattered screens, line glitches, or unresponsive touch with authentic OLED and factory grade-A glass displays.',
    iconName: 'Smartphone',
    turnaroundBn: '৩০ - ৪৫ মিনিট',
    turnaroundEn: '30 - 45 mins',
    warrantyBn: '৯০ দিনের লিখিত ওয়ারেন্টি',
    warrantyEn: '90 Days Written Warranty',
    startingPrice: 1200,
    highlight: true,
    imageSrc: displayRepairImg,
    featuresBn: ['১০০% ট্রু-টোন ও প্রাণবন্ত ওরিজিনাল কালার', 'অতি-মসৃণ ও দ্রুত রেসপন্সিভ টাচ অনুভূতি', 'অরিজিনাল ও বাজেট ফ্রেন্ডলি উভয় অপশন উপলব্ধ'],
    featuresEn: ['100% True-Tone and vivid color fidelity', 'Instantaneous silky-smooth touch sensitivity', 'Both OEM authentic and budget-friendly choices']
  },
  {
    id: 'battery',
    category: 'power',
    titleBn: 'জিনিয়াস ব্যাটারি রিপ্লেসমেন্ট',
    titleEn: 'Genuine Battery Replacement',
    descBn: 'দ্রুত চার্জ শেষ হয়ে যাওয়া, ব্যাটারি ফুলে ওঠা কিংবা রিস্টার্ট সমস্যার স্থায়ী সমাধান—পান সম্পূর্ণ নতুন জিরো-সাইকেল আসল ব্যাটারি ও দীর্ঘস্থায়ী নিরবচ্ছিন্ন ব্যাকআপ।',
    descEn: 'Solve rapid battery drain, swollen cells, or sudden device restarts with 100% authentic 0-cycle high-capacity battery cells.',
    iconName: 'BatteryCharging',
    turnaroundBn: '২০ - ৩০ মিনিট',
    turnaroundEn: '20 - 30 mins',
    warrantyBn: '৬ মাসের অফিসিয়াল গ্যারান্টি',
    warrantyEn: '6 Months Official Warranty',
    startingPrice: 850,
    highlight: true,
    imageSrc: batteryReplaceImg,
    featuresBn: ['সম্পূর্ণ নতুন ০-সাইকেল অরিজিনাল সেল', 'সারাদিন নিশ্চিন্ত ব্যাটারি ব্যাকআপের নিশ্চয়তা', 'সরাসরি ডিভাইসে ১০০% ব্যাটারি হেলথ প্রদর্শন'],
    featuresEn: ['Brand new 0-cycle certified power cell', 'Full-day reliable battery longevity guarantee', 'Proper 100% health readout on supported devices']
  },
  {
    id: 'charging-port',
    category: 'power',
    titleBn: 'চার্জিং পোর্ট সমাধান',
    titleEn: 'Charging Port & Connector Repair',
    descBn: 'চার্জ না নেওয়া, সংযোগ ঢিলে হয়ে যাওয়া বা ক্যাবল নড়াচড়ায় চার্জ ছেড়ে দেওয়ার নির্ভরযোগ্য সমাধান। সুপারফাস্ট চার্জিং সাপোর্ট সহ জেনুইন কানেক্টর প্রতিস্থাপন।',
    descEn: 'Fix loose ports, slow charging alerts, moisture warnings, or disrupted pin connectivity with authentic factory connectors.',
    iconName: 'Zap',
    turnaroundBn: '২৫ - ৩৫ মিনিট',
    turnaroundEn: '25 - 35 mins',
    warrantyBn: '৩০ দিনের ওয়ারেন্টি',
    warrantyEn: '30 Days Warranty',
    startingPrice: 450,
    highlight: true,
    imageSrc: chargingPortImg,
    featuresBn: ['শতভাগ আসল পোর্ট ও মজবুত পিন স্থাপন', 'সুপার ফাস্ট ও VOOC ফ্ল্যাশ চার্জিং সমর্থন', 'ধুলোবালি ও অক্সিডেশন গভীর আল্ট্রাসনিক পরিচ্ছন্নকরণ'],
    featuresEn: ['Genuine connector pins & solid solder anchor', 'Super fast & VOOC flash charging certified', 'Micro-dust & oxidation deep sonic cleanup']
  },
  {
    id: 'motherboard',
    category: 'hardware',
    titleBn: 'মাদারবোর্ড ও আইসি রি-মাইক্রো সোল্ডারিং',
    titleEn: 'Motherboard & IC Micro-Soldering',
    descBn: 'ডেড হ্যান্ডসেট সচল করা, পাওয়ার আইসি, সিপিইউ রিবলিং এবং শর্ট সার্কিট সমস্যার অত্যাধুনিক স্টেরিও ট্রাইনোকুলার মাইক্রোস্কোপিক নির্ভুল সমাধান।',
    descEn: 'Dead phone wake-up, power management IC, CPU reballing, and microscopic short-circuit repairs under optical magnification.',
    iconName: 'Cpu',
    turnaroundBn: '২ - ৪ ঘণ্টা',
    turnaroundEn: '2 - 4 hours',
    warrantyBn: '৩০ দিনের স্পেশাল ওয়ারেন্টি',
    warrantyEn: '30 Days Warranty',
    startingPrice: 1500,
    highlight: true,
    imageSrc: motherboardIcImg,
    featuresBn: ['উচ্চ ক্ষমতার স্টেরিও মাইক্রোস্কোপে নিখুঁত চিপ সোল্ডারিং', 'সিপিইউ ও পাওয়ার ম্যানেজমেন্ট আইসি পুনর্স্থাপন', 'আপনার ডিভাইসের ব্যক্তিগত ডেটার সর্বোচ্চ সুরক্ষা'],
    featuresEn: ['Stereoscopic optical precision soldering', 'Power IC & CPU chip reballing craftsmanship', 'Maximum customer data preservation priority']
  },
  {
    id: 'water-damage',
    category: 'hardware',
    titleBn: 'ওয়াটার অ্যান্ড লিকুইড ড্যামেজ রিকভারি',
    titleEn: 'Water & Liquid Damage Recovery',
    descBn: 'পানিতে পড়ে যাওয়া ফোনের ভেতরে জমে থাকা ক্ষতিকর আর্দ্রতা ও মরিচা দূর করতে তাৎক্ষণিক আল্ট্রাসনিক কেমিক্যাল ডিপ-ওয়াশ ও নিয়ন্ত্রিত থার্মাল ড্রাইং থেরাপি।',
    descEn: 'Immediate ultrasonic chemical cleansing, anti-oxidation flush, and controlled thermal drying for liquid-submerged circuit boards.',
    iconName: 'Droplets',
    turnaroundBn: '১ - ২ ঘণ্টা',
    turnaroundEn: '1 - 2 hours',
    warrantyBn: 'কম্পোনেন্ট টেস্টিং গ্যারান্টি',
    warrantyEn: 'Component Testing Guarantee',
    startingPrice: 700,
    highlight: true,
    imageSrc: liquidRecoveryImg,
    featuresBn: ['অত্যাধুনিক আল্ট্রাসনিক কেমিক্যাল বাথ', 'মাইক্রো-শর্ট সার্কিট সনাক্তকরণ ও কম্পোনেন্ট টেস্ট', 'তাৎক্ষণিক ইমার্জেন্সি রেসকিউ প্রোটোকল'],
    featuresEn: ['Ultrasonic chemical immersion bath', 'Component short circuit diagnostics', 'Emergency immediate rescue protocol']
  },
  {
    id: 'camera-speaker',
    category: 'hardware',
    titleBn: 'ক্যামেরা ও সাউন্ড রিপেয়ার',
    titleEn: 'Camera & Sound System Repair',
    descBn: 'ক্যামেরায় ঝাপসা ছবি, কাঁপুনি বা লেন্সের কাঁচ ফাটা এবং লাউডস্পিকার ও মাইক্রোফোনে স্পষ্ট আওয়াজ না পাওয়ার নির্ভরযোগ্য ও দ্রুত সমাধান।',
    descEn: 'Fix blurry lenses, camera OIS jitter, cracked glass, low receiver volume, or faulty microphone inputs with genuine parts.',
    iconName: 'Camera',
    turnaroundBn: '৩০ - ৫০ মিনিট',
    turnaroundEn: '30 - 50 mins',
    warrantyBn: '৬০ দিনের সার্ভিস ওয়ারেন্টি',
    warrantyEn: '60 Days Warranty',
    startingPrice: 650,
    highlight: true,
    imageSrc: cameraSpeakerImg,
    featuresBn: ['স্ফটিক স্বচ্ছ ও জোরালো সাউন্ড মডিউল', 'হাই-রেজোলিউশন অরিজিনাল ক্যামেরা সেন্সর ও গ্লাস', 'নয়েজ ক্যান্সেলেশন মাইক্রোফোন পুঙ্খানুপুঙ্খ পরীক্ষা'],
    featuresEn: ['Crystal clear audio speaker modules', 'Original camera sensors & glass lens', 'Noise-canceling mic inspection']
  },
  {
    id: 'software',
    category: 'software',
    titleBn: 'সফটওয়্যার ও সিস্টেম আনলকিং',
    titleEn: 'Software & System Unlocking',
    descBn: 'হ্যাং হয়ে থাকা, অন-অফ রিস্টার্ট লুপ, ভুলে যাওয়া পাসওয়ার্ড বা প্যাটার্ন আনলক, গুগল এফআরপি বাইপাস এবং অফিশিয়াল স্টক ফার্মওয়্যার আপডেট ও নিরাপদ ডেটা ব্যাকআপ।',
    descEn: 'Bootloop fixes, system crashes, forgotten PIN/pattern unlock, Google FRP bypass, official firmware updates, and safe data recovery.',
    iconName: 'ShieldCheck',
    turnaroundBn: '১৫ - ৩০ মিনিট',
    turnaroundEn: '15 - 30 mins',
    warrantyBn: 'লাইফটাইম ফার্মওয়্যার সহায়তা',
    warrantyEn: 'Lifetime Firmware Support',
    startingPrice: 500,
    highlight: true,
    imageSrc: softwareServiceImg,
    featuresBn: ['অফিশিয়াল অথেনটিক স্টক ফার্মওয়্যার ফ্ল্যাশ', 'লেটেস্ট অ্যান্ড্রয়েড ও আইওএস ওএস সংস্করণ সাপোর্ট', 'ব্যক্তিগত তথ্যের সর্বোচ্চ নিরাপত্তা ও ব্যাকআপ'],
    featuresEn: ['Official authentic stock firmware flash', 'Latest Android & iOS operating system updates', 'Maximum data privacy & safe recovery support']
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
    nameBn: 'ডিসপ্লে গ্লাস রিপ্লেসমেন্ট',
    nameEn: 'Display & Glass Replacement',
    basePrice: 1500,
    turnaroundBn: '৩০ - ৪৫ মিনিট',
    turnaroundEn: '30 - 45 mins',
    warrantyBn: '৯০ দিনের লিখিত ওয়ারেন্টি',
    warrantyEn: '90 Days Warranty',
    category: 'screen'
  },
  {
    id: 'battery',
    nameBn: 'জিনিয়াস ব্যাটারি রিপ্লেসমেন্ট',
    nameEn: 'Genuine Battery Replacement',
    basePrice: 900,
    turnaroundBn: '২০ - ৩০ মিনিট',
    turnaroundEn: '20 - 30 mins',
    warrantyBn: '১৮০ দিনের গ্যারান্টি',
    warrantyEn: '180 Days Guarantee',
    category: 'power'
  },
  {
    id: 'charging-port',
    nameBn: 'চার্জিং পোর্ট সমাধান',
    nameEn: 'Charging Port & Pin Repair',
    basePrice: 500,
    turnaroundBn: '২৫ - ৩৫ মিনিট',
    turnaroundEn: '25 - 35 mins',
    warrantyBn: '৩০ দিনের ওয়ারেন্টি',
    warrantyEn: '30 Days Warranty',
    category: 'power'
  },
  {
    id: 'motherboard',
    nameBn: 'মাদারবোর্ড ও আইসি রি-মাইক্রো সোল্ডারিং',
    nameEn: 'Motherboard & IC Micro-Soldering',
    basePrice: 1800,
    turnaroundBn: '২ - ৪ ঘণ্টা',
    turnaroundEn: '2 - 4 hours',
    warrantyBn: '৩০ দিনের ওয়ারেন্টি',
    warrantyEn: '30 Days Warranty',
    category: 'hardware'
  },
  {
    id: 'water-damage',
    nameBn: 'ওয়াটার অ্যান্ড লিকুইড ড্যামেজ রিকভারি',
    nameEn: 'Water & Liquid Damage Recovery',
    basePrice: 750,
    turnaroundBn: '১ - ২ ঘণ্টা',
    turnaroundEn: '1 - 2 hours',
    warrantyBn: 'সার্ভিস টেস্টিং গ্যারান্টি',
    warrantyEn: 'Testing Guarantee',
    category: 'hardware'
  },
  {
    id: 'camera-speaker',
    nameBn: 'ক্যামেরা ও সাউন্ড রিপেয়ার',
    nameEn: 'Camera & Sound Audio Repair',
    basePrice: 650,
    turnaroundBn: '৩০ - ৫০ মিনিট',
    turnaroundEn: '30 - 50 mins',
    warrantyBn: '৬০ দিনের ওয়ারেন্টি',
    warrantyEn: '60 Days Warranty',
    category: 'hardware'
  },
  {
    id: 'software-unlock',
    nameBn: 'সফটওয়্যার, হ্যাং ও সিস্টেম আনলক',
    nameEn: 'Software & System Unlock',
    basePrice: 500,
    turnaroundBn: '১৫ - ৩০ মিনিট',
    turnaroundEn: '15 - 30 mins',
    warrantyBn: 'লাইফটাইম সাপোর্ট',
    warrantyEn: 'Lifetime Support',
    category: 'software'
  }
];

export const INITIAL_TICKETS: RepairTicket[] = [];

export const REVIEWS_DATA: ReviewItem[] = [];

export const SHOP_INFO: ShopInfo = {
  nameBn: 'মোবাইল হসপিটাল',
  nameEn: 'Mobile Hospital',
  taglineBn: 'আস্থা ও ভালোবাসায় আপনার প্রিয় মুঠোফোনের নতুন জীবন',
  taglineEn: 'Fast & Precision Smartphone Care You Can Trust',
  subtitleBn: 'দত্তপুলিয়ার কালীতলায় আপনার প্রিয় স্মার্টফোনের যাবতীয় সমস্যার নির্ভরযোগ্য চিকিৎসা—চোখের সামনে সরাসরি কাজ, জেনুইন পার্টস ও লিখিত ওয়ারেন্টি সহ।',
  subtitleEn: 'Professional on-the-spot smartphone repairs in Kalitala, Duttapulia with 100% genuine parts and written warranty.',
  email: 'mobilehospital633@gmail.com',
  phoneHotline: '+91 74070 84034',
  phoneAlt: '+91 74070 84034',
  phoneRaw: '7407084034',
  whatsappNumber: '917407084034',
  whatsappRaw: '7407084034',
  addressBn: 'কালীতলা, দত্তপুলিয়া, নদিয়া, পিন - ৭৪১৫০৪',
  addressEn: 'Kalitala, Duttapulia, Nadia, Pin - 741504',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Mobile%20Hospital%2C%20Kalitala%2C%20Duttapulia%2C%20Nadia%20741504&t=&z=16&ie=UTF8&iwloc=&output=embed',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Mobile+Hospital+Kalitala+Duttapulia+Nadia+741504',
  workingHoursBn: 'প্রতিদিন সকাল ৯:০০ টা থেকে রাত ১০:০০ টা পর্যন্ত নিরবচ্ছিন্ন সেবা',
  workingHoursEn: 'Open Daily: 9:00 AM to 10:00 PM',
  stats: [
    { value: '১৫,০০০+', labelBn: 'সফল রিপেয়ার ও হাসিমুখ', labelEn: 'Successful Repairs' },
    { value: '৩০ মি.', labelBn: 'গড় এক্সপ্রেস সার্ভিস সময়', labelEn: 'Avg. Express Repair' },
    { value: '১০০%', labelBn: 'জেনুইন পার্টসের নিশ্চয়তা', labelEn: 'Genuine Parts Guarantee' },
    { value: '৪.৯ ★', labelBn: 'গ্রাহক সন্তুষ্টি ও আস্থা', labelEn: 'Customer Rating' }
  ],
  announcement: {
    enabled: true,
    badgeBn: 'লাইভ কাউন্টার সেবা',
    badgeEn: 'Live Counter Service',
    textBn: 'প্রতিদিন সকাল ৯:০০ টা থেকে রাত ১০:০০ টা পর্যন্ত আমাদের সেন্টারে সরাসরি আপনার উপস্থিতিতেই মোবাইল মেরামত সেবা চালু রয়েছে।',
    textEn: 'Our center is open daily from 9:00 AM to 10:00 PM for fast on-the-spot mobile repair service.'
  },
  backgroundTheme: 'canvas-clean'
};
