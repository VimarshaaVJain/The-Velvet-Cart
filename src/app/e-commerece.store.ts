import { computed } from "@angular/core";
import  { Product } from "./models/products";
import { patchState, signalMethod, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";

export type EcommerceState = {
    products : Product[];
    category : string
}

export const EcommerceStore = signalStore(
    {
        providedIn: 'root'
    },
    withState({
        products : [
    {
      id: 'p1',
      name: 'Classic Tailored Blazer',
      description: 'Elegant slim-fit blazer perfect for smart-casual styling and transition layers.',
      price: 89.99,
      imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop&q=80',
      rating: 4.7,
      reviewCount: 124,
      inStock: true,
      category: 'Apparel'
    },
    {
      id: 'p2',
      name: 'Oversized hat',
      description: 'Ultra-soft, heavyweight cotton blend knit ideal for cozy days and cold weather.',
      price: 45.00,
      imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80',
      rating: 4.2,
      reviewCount: 56,
      inStock: false,
      category: 'Apparel'
    },
    {
      id: 'p3',
      name: 'Minimalist Leather Sneakers',
      description: 'Clean, full-grain white leather sneakers featuring a comfortable orthotic sole.',
      price: 110.00,
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=80',
      rating: 4.6,
      reviewCount: 92,
      inStock: true,
      category: 'Apparel'
    },
    {
      id: 'p4',
      name: 'Urban Denim Jacket',
      description: 'Classic washed blue denim jacket with heavy-duty metal button closures.',
      price: 65.50,
      imageUrl: 'https://www.urbanofashion.com/cdn/shop/files/71VJI-ieB_L._SY741.jpg?v=1781176918',
      rating: 4.4,
      reviewCount: 78,
      inStock: true,
      category: 'Apparel'
    },
    {
      id: 'p5',
      name: 'Premium Cotton Trench Coat',
      description: 'Double-breasted, wind-resistant tan trench coat with an adjustable waist belt.',
      price: 135.00,
      imageUrl: 'http://gearoutlet.co.uk/cdn/shop/files/BeFunky-collage_47_3b1a4d5c-4b0b-42bc-a557-00d863f55907.jpg?v=1766562628',
      rating: 4.9,
      reviewCount: 43,
      inStock: true,
      category: 'Apparel'
    },
    {
      id: 'p6',
      name: 'Linen Summer Lounge Pants',
      description: 'Breathable, relaxed-fit pure linen pants featuring an elastic drawstring waist.',
      price: 38.00,
      imageUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop&q=80',
      rating: 4.1,
      reviewCount: 31,
      inStock: true,
      category: 'Apparel'
    },
    {
      id: 'p7',
      name: 'Waterproof Active Shell Jacket',
      description: 'Lightweight, completely seam-sealed rain jacket optimized for outdoor trails.',
      price: 95.00,
      imageUrl: 'https://static.zara.net/assets/public/837f/ed84/13164d5887e9/9b43827ab773/03286312800-f1/03286312800-f1.jpg?ts=1769208852245',
      rating: 4.5,
      reviewCount: 64,
      inStock: true,
      category: 'Apparel'
    },

    // --- LIFESTYLE & HOME (TIFFINS, BOTLES, AND MORE) ---
    {
      id: 'p8',
      name: 'Insulated Stainless Steel Tiffin',
      description: '3-tier leak-proof thermal lunch box keeping home meals hot and fresh for hours.',
      price: 24.50,
      imageUrl: 'https://sarathykitchenware.com/cdn/shop/products/MiltonRoyal3InsulatedSteelTiffinBox_1.8l_SteelPlain.jpg?v=1620823696',
      rating: 4.5,
      reviewCount: 88,
      inStock: true,
      category: 'Lifestyle'
    },
    {
      id: 'p9',
      name: 'Matte Ceramic Lunch Bento Box',
      description: 'Microwave-safe premium ceramic lunch carrier with a secure bamboo lid partition.',
      price: 29.99,
      imageUrl: 'https://m.media-amazon.com/images/I/81Q9FF4zOeL._AC_UF894,1000_QL80_.jpg',
      rating: 4.3,
      reviewCount: 45,
      inStock: true,
      category: 'Lifestyle'
    },
    {
      id: 'p10',
      name: 'Vacuum-Insulated Thermal Flask',
      description: 'Double-walled flask keeping beverages ice-cold for 24 hours or steaming hot for 12.',
      price: 19.99,
      imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80',
      rating: 4.8,
      reviewCount: 312,
      inStock: true,
      category: 'Lifestyle'
    },
    {
      id: 'p11',
      name: 'Minimalist Canvas Tote Bag',
      description: 'Heavyweight organic canvas bag reinforced with inner pockets and laptop slot.',
      price: 22.00,
      imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80',
      rating: 4.6,
      reviewCount: 154,
      inStock: true,
      category: 'Lifestyle'
    },
    {
      id: 'p12',
      name: 'Aromatic Soy Wax Candle Set',
      description: 'Three hand-poured candle jars featuring calming cedar, lavender, and amber notes.',
      price: 34.00,
      imageUrl: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&auto=format&fit=crop&q=80',
      rating: 4.7,
      reviewCount: 72,
      inStock: true,
      category: 'Lifestyle'
    },
    {
      id: 'p13',
      name: 'Ergonomic Memory Foam Pillow',
      description: 'Contoured neck-support pillow covered in a washable, breathable bamboo fibers casing.',
      price: 49.99,
      imageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&auto=format&fit=crop&q=80',
      rating: 4.4,
      reviewCount: 119,
      inStock: false,
      category: 'Lifestyle'
    },

    // --- ELECTRONICS & APPLIANCES ---
    {
      id: 'p14',
      name: 'Barista Precision Coffee Maker',
      description: 'Programmable drip coffee machine built with custom grinders and thermal carafe.',
      price: 149.99,
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/4/506345870/KG/IP/HX/60363584/ideal-barista-perfetto-500x500.png',
      rating: 4.8,
      reviewCount: 210,
      inStock: true,
      category: 'Electronics'
    },
    {
      id: 'p15',
      name: 'Premium Electric Gooseneck Kettle',
      description: 'Stainless steel rapid-boil kettle featuring pinpoint digital temperature controls.',
      price: 79.99,
      imageUrl: 'https://m.media-amazon.com/images/I/71ZA2xV+XmL.jpg',
      rating: 4.7,
      reviewCount: 142,
      inStock: true,
      category: 'Electronics'
    },
    {
      id: 'p16',
      name: 'Active Noise Cancelling Headphones',
      description: 'Over-ear wireless headphones delivering balanced acoustics and up to 40 hours battery.',
      price: 199.99,
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
      rating: 4.9,
      reviewCount: 520,
      inStock: true,
      category: 'Electronics'
    },
    {
      id: 'p17',
      name: 'Compact Portable Bluetooth Speaker',
      description: 'IPX7 waterproof rugged speaker offering deep bass lines and rich 360 soundscapes.',
      price: 59.99,
      imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=80',
      rating: 4.5,
      reviewCount: 285,
      inStock: true,
      category: 'Electronics'
    },
    {
      id: 'p18',
      name: 'Minimalist Mechanical Keyboard',
      description: '75% compact hot-swappable layout utilizing tactile switches and subtle white backlighting.',
      price: 85.00,
      imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80',
      rating: 4.6,
      reviewCount: 97,
      inStock: true,
      category: 'Electronics'
    },
    {
      id: 'p19',
      name: 'Ergonomic Wireless Vertical Mouse',
      description: 'Hand-sculpted design positioned to eliminate wrist strain over prolonged desk sessions.',
      price: 49.50,
      imageUrl: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80',
      rating: 4.3,
      reviewCount: 61,
      inStock: true,
      category: 'Electronics'
    },
    {
      id: 'p20',
      name: 'Smart Desktop LED Light Bar',
      description: 'Monitor-mounted screen bar providing glare-free desk illumination with automated dimming.',
      price: 42.00,
      imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80',
      rating: 4.6,
      reviewCount: 104,
      inStock: true,
      category: 'Electronics'
    }
  ],
  category : 'all'
    }),
    withComputed(({category, products}) =>({
        filteredProducts: computed(()=>{
              if (category() === 'all') {
      return products();
    }

    // 2. Convert BOTH sides to lowercase to make it case-insensitive
    return products().filter(
      (p) => p.category.toLowerCase() === category()
    );
        })
    })),
    withMethods((store) => ({
      setCategory: signalMethod<string>((category: string) => {
        patchState(store, {category})
      })
    }))
)