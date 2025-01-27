import { create } from "zustand";

const useProducts = create(() => ({
  products: [
    {
      name: "boAt Airdopes 91, 45HRS Battery, 50ms Low Latency, ENx Tech, Fast Charge, IPX4, IWP Tech, v5.3 Bluetooth Earbuds",
      imageUrl:
        "https://images.unsplash.com/photo-1568651872875-2b0352849bf6?w=500&auto=format&fit=crop&q=60",
      price: 2000,
      discount: 20,
      rating: 4.0,
      specs:
        "50ms Low Latency, ENx Technology, 45HRS Battery, Fast Charge, IPX4 Water Resistance, Bluetooth v5.3, IWP Technology",
      description:
        "Experience unparalleled sound clarity with boAt Airdopes 91. Featuring ENx tech for crisp calls, ultra-low latency for gaming, and a whopping 45-hour battery life, these earbuds redefine convenience and performance.",
    },
    {
      name: "PixelEdge X12, 6.5-inch AMOLED Display, 128GB Storage, 64MP Camera, 5000mAh Battery, 5G Smartphone",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1681396658834-b56190480934?w=500&auto=format&fit=crop&q=60",
      price: 299.99,
      discount: 15,
      rating: 4.4,
      specs:
        "6.5-inch AMOLED Display, 128GB Storage, 64MP Camera, 5000mAh Battery, 5G Connectivity, Snapdragon 780G",
      description:
        "The PixelEdge X12 combines sleek design and powerful performance. With its 64MP camera, AMOLED display, and long-lasting battery, it’s built for work and play on the go.",
    },
    {
      name: "Zenith Pro Laptop, Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch FHD Display, NVIDIA GTX 1650",
      imageUrl:
        "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60",
      price: 999.99,
      discount: 10,
      rating: 5.0,
      specs:
        "Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch FHD Display, NVIDIA GTX 1650, Backlit Keyboard",
      description:
        "Designed for professionals, the Zenith Pro offers top-notch performance with its Intel i7 processor, spacious SSD, and stunning FHD display. Ideal for both productivity and gaming.",
    },
    {
      name: "PulseTrack Smart Watch, 1.4-inch AMOLED Display, Heart Rate Monitor, GPS, 7-Day Battery Life",
      imageUrl:
        "https://images.unsplash.com/photo-1513348313239-6ccc6c25c11b?w=500&auto=format&fit=crop&q=60",
      price: 199.99,
      discount: 25,
      rating: 4.3,
      specs:
        "1.4-inch AMOLED Display, Heart Rate Monitor, Sleep Tracking, GPS, 7-Day Battery Life, IP68",
      description:
        "Stay ahead in health and style with PulseTrack. Monitor your fitness metrics, get real-time GPS updates, and enjoy a premium design that’s built to last.",
    },
    {
      name: "EchoBass Max Headphones, Deep Bass, Wireless Over-Ear, 30HRS Battery, Bluetooth v5.0",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60",
      price: 150,
      discount: 30,
      rating: 4.5,
      specs:
        "30HRS Battery, Deep Bass, Bluetooth v5.0, Built-In Mic, Foldable Design, Noise Isolation",
      description:
        "Get lost in the rhythm with EchoBass Max. These wireless over-ear headphones deliver booming bass, a 30-hour battery, and crystal-clear Bluetooth connectivity.",
    },
    {
      name: "GameStation Console, 4K HDR Gaming, 1TB Storage, DualSense Controller, WiFi 6",
      imageUrl:
        "https://images.unsplash.com/photo-1513599898445-1c34777500ab?w=500&auto=format&fit=crop&q=60",
      price: 499.99,
      discount: 15,
      rating: 5.0,
      specs:
        "4K HDR Gaming, 1TB Storage, DualSense Controller, WiFi 6, Ray Tracing Support",
      description:
        "Unleash the ultimate gaming experience with GameStation Console. Featuring stunning 4K visuals, seamless storage, and next-gen controllers, it’s perfect for hardcore gamers.",
    },
    {
      name: "Snapper Pro Camera, 24MP, 4K Video, WiFi, 5X Optical Zoom, Lightweight Design",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1674389991678-0836ca77c7f7?w=500&auto=format&fit=crop&q=60",
      price: 1200,
      discount: 20,
      rating: 5.0,
      specs:
        "24MP, 4K Video, WiFi Connectivity, 5X Optical Zoom, Lightweight and Portable",
      description:
        "Capture every detail with Snapper Pro. This camera offers 24MP resolution, stunning 4K video capabilities, and a lightweight design for professionals on the move.",
    },
    {
      name: "TabPlus 10.1-inch, 128GB Storage, WiFi + LTE, 8MP Camera, 5000mAh Battery",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1673968280716-ca0c00af8a39?w=500&auto=format&fit=crop&q=60",
      price: 350,
      discount: 18,
      rating: 4.1,
      specs:
        "10.1-inch HD Display, 128GB Storage, LTE Support, 8MP Camera, 5000mAh Battery",
      description:
        "The TabPlus combines entertainment and productivity with its large display, LTE connectivity, and a reliable battery to power through your day.",
    },
    {
      name: "UltraDry Vacuum Cleaner, 2200W Power, HEPA Filter, Bagless Design, Adjustable Suction",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1677234147504-458d296b0113?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xlYW5lcnxlbnwwfHwwfHx8MA%3D%3D",
      price: 299.99,
      discount: 20,
      rating: 4.7,
      specs:
        "2200W Power, HEPA Filter, Bagless Design, Adjustable Suction, Lightweight Build",
      description:
        "The UltraDry Vacuum Cleaner is designed for deep cleaning with adjustable suction power, a bagless design for convenience, and an efficient HEPA filter for cleaner air.",
    },
    {
      name: "PowerCore 20000 Power Bank, 20,000mAh Capacity, Quick Charge 3.0, Dual USB Ports",
      imageUrl:
        "https://images.unsplash.com/photo-1594843665794-446ce915d840?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG93ZXIlMjBiYW5rfGVufDB8fDB8fHww",
      price: 49.99,
      discount: 10,
      rating: 5.0,
      specs:
        "20,000mAh Capacity, Quick Charge 3.0, Dual USB Ports, Compact Design, LED Indicators",
      description:
        "Stay powered all day with PowerCore 20000. Its massive capacity and dual USB ports ensure fast, reliable charging for all your devices on the go.",
    },
    {
      name: "MaxBlender Pro, 1500W, 10-Speed Settings, Pulse Function, BPA-Free Jar",
      imageUrl:
        "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxlbmRlcnxlbnwwfHwwfHx8MA%3D%3D",
      price: 120,
      discount: 15,
      rating: 4.4,
      specs:
        "1500W Motor, 10-Speed Settings, Pulse Function, BPA-Free 2L Jar, Stainless Steel Blades",
      description:
        "Blend like a pro with MaxBlender Pro. Equipped with a powerful 1500W motor, multiple speed settings, and a durable BPA-free jar, it’s perfect for smoothies, soups, and more.",
    },
    {
      name: "AquaPure Water Purifier, 7-Stage Filtration, UV + RO Technology, 10L Capacity",
      imageUrl:
        "https://media.istockphoto.com/id/1284076303/photo/household-filtration-system-water-treatment-concept-use-of-water-filters-at-home-glass-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=a5vAvp-wk2dy-ZNqAQ-dPjeam7ydOYylQX1gqjHrI9k=",
      price: 220,
      discount: 20,
      rating: 4.7,
      specs:
        "7-Stage Filtration, UV + RO Technology, 10L Capacity, Smart TDS Adjuster, Energy-Saving Mode",
      description:
        "Experience pure and safe drinking water with AquaPure. Its advanced UV + RO technology and multi-stage filtration ensure your family's health and hydration.",
    },
    {
      name: "NeoSound Bar, 5.1 Surround Sound, Bluetooth, Dolby Atmos, HDMI ARC, 300W Output",
      imageUrl:
        "https://media.istockphoto.com/id/1059154330/photo/boombox.webp?a=1&b=1&s=612x612&w=0&k=20&c=hjfiUYsBprkQFp4IG6G74pHifyLalVnaNlJ5QQsUHXk=",
      price: 350,
      discount: 15,
      rating: 5.0,
      specs:
        "5.1 Surround Sound, Dolby Atmos, Bluetooth Connectivity, HDMI ARC, 300W Output",
      description:
        "Immerse yourself in cinematic audio with NeoSound Bar. Its powerful surround sound and Dolby Atmos create an unmatched home entertainment experience.",
    },
    {
      name: "EliteFit Treadmill, 2HP Motor, 15 Preset Workouts, Foldable Design, LCD Display",
      imageUrl:
        "https://images.unsplash.com/photo-1578763363228-6e8428de69b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHJlYWRtaWxsfGVufDB8fDB8fHww",
      price: 750,
      discount: 25,
      rating: 4.0,
      specs:
        "2HP Motor, 15 Preset Workouts, Foldable Design, LCD Display, Speed Range: 0.5-12 km/h",
      description:
        "Stay fit from home with the EliteFit Treadmill. Featuring multiple workout modes, a robust motor, and a compact foldable design, it's perfect for all fitness levels.",
    },
    {
      name: "TechVault External SSD, 1TB, USB 3.2, Read/Write Speed Up to 1050MB/s",
      imageUrl:
        "https://images.unsplash.com/photo-1577538926210-fc6cc624fde2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3NkfGVufDB8fDB8fHww",
      price: 120,
      discount: 15,
      rating: 5.0,
      specs:
        "1TB Storage, USB 3.2, Read/Write Speed Up to 1050MB/s, Shock-Resistant Design",
      description:
        "Boost your storage speed and portability with TechVault External SSD. It's perfect for transferring large files quickly and securely on the go.",
    },
    {
      name: "FrostyCool Refrigerator, 350L Capacity, Inverter Compressor, Multi Airflow, Frost-Free",
      imageUrl:
        "https://images.unsplash.com/photo-1668910225551-1080c3a12241?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVmcmlkZ2VyYXRvcnxlbnwwfHwwfHx8MA%3D%3D",
      price: 700,
      discount: 20,
      rating: 5.0,
      specs:
        "350L Capacity, Inverter Compressor, Multi Airflow, Frost-Free Technology, Energy Star Certified",
      description:
        "Upgrade your kitchen with FrostyCool Refrigerator. Its energy-efficient design and spacious storage keep your food fresh for longer.",
    },
    {
      name: "GlowEdge LED TV, 55-inch 4K UHD, HDR10+, Android TV, Dolby Vision",
      imageUrl:
        "https://images.unsplash.com/photo-1614696131965-cc559b1ecad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVkJTIwdHZ8ZW58MHx8MHx8fDA%3D",
      price: 599,
      discount: 18,
      rating: 5.0,
      specs:
        "55-inch 4K UHD, HDR10+, Android TV OS, Dolby Vision, Voice Control, Thin Bezel Design",
      description:
        "Enjoy vibrant visuals and smart features with GlowEdge LED TV. Designed for immersive entertainment, it brings stunning 4K clarity to your home.",
    },
    {
      name: "SecureSmart Home Camera, 1080p HD, Night Vision, Motion Detection, 2-Way Audio",
      imageUrl:
        "https://images.unsplash.com/photo-1643123182527-3bd30840e7ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZSUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
      price: 99,
      discount: 10,
      rating: 4.5,
      specs:
        "1080p HD Resolution, Night Vision, Motion Detection, 2-Way Audio, WiFi Enabled",
      description:
        "Keep your home secure with SecureSmart. Its HD clarity, motion alerts, and two-way communication ensure peace of mind wherever you are.",
    },
    {
      name: "TurboMix Hand Blender, 500W, 2-Speed Control, Stainless Steel Blades, Detachable Shaft",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1681826671576-8d612accc77a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZCUyMGJsZW5kZXJ8ZW58MHx8MHx8fDA%3D",
      price: 39.99,
      discount: 15,
      rating: 4.2,
      specs:
        "500W Motor, 2-Speed Control, Stainless Steel Blades, Detachable Shaft, Easy Grip Handle",
      description:
        "Simplify your cooking with TurboMix. Blend, puree, and whip with ease using its powerful motor and ergonomic design.",
    },
    {
      name: "SpeedPro Gaming Mouse, 12,000 DPI, RGB Lighting, Programmable Buttons, Ergonomic Design",
      imageUrl:
        "https://images.unsplash.com/photo-1613141412501-9012977f1969?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D",
      price: 49.99,
      discount: 20,
      rating: 4.8,
      specs:
        "12,000 DPI Sensor, RGB Lighting, Programmable Buttons, Ergonomic Design, Wired USB Connection",
      description:
        "Dominate your games with SpeedPro Gaming Mouse. Customize it for your playstyle and enjoy precision with its advanced sensor.",
    },
    {
      name: "AirBliss Tower Fan, 3-Speed Settings, Remote Control, Oscillation, Quiet Operation",
      imageUrl:
        "https://images.unsplash.com/photo-1609519479841-5fd3b2884e17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhbnxlbnwwfHwwfHx8MA%3D%3D",
      price: 89.99,
      discount: 25,
      rating: 4.4,
      specs:
        "3-Speed Settings, Remote Control, Wide Oscillation, Quiet Operation, Energy Efficient",
      description:
        "Stay cool and comfortable with AirBliss Tower Fan. Its sleek design, quiet operation, and remote control make it a perfect addition to any room.",
    },
  ],
  // addproduct: (product) =>
  //   set((state) => {
  //     products: [...state.product, product];
  //   }),
  // deleteproduct: (productid) =>
  //   set((state) => {
  //     products: state.products.filter((product) => product.id != productid);
  //   }),
}));

export default useProducts;
