
export const sample_foods: any[] = [
    {
      id: "a1",
      name: "Chicken Wings",
      price: 199.00,
      favorite: false,
      stars: 3,
      imageUrl: "assets/Chiken wings.jpg",
      cookTime: '40-50',
      tags: ['Chiken','Meal'],
      orgins: ['Philippines']
    },
    {
      id: "a2",
      name: "Crispy Chicken Skin with Chili Con Carne",
      price: 199.00,
      favorite: false,
      stars: 5,
      imageUrl: "assets/CrispyChikenSkin.jpg",
      cookTime: '30',
      tags: ['Chiken','Meal'],
      orgins: ['Philippines']
    },
    {
      id: "sl1",
      name: "Mama Rit's Salad with Mango Vinaigrette",
      price: 149.00,
      favorite: true,
      stars: 5,
      imageUrl: "assets/MamaRitsSalad.jpg",
      cookTime: '30',
      tags: ['Salad', 'Healthy'],
      orgins: ['Philippines']
    },
    {
      id: "m1",
      name: "Mama Rit's Kare Kare with Plain Rice",
      price: 169.00,
      favorite: false,
      stars: 4,
      imageUrl: "assets/MamaRitsKareKare.jpg",
      cookTime: "40-50",
      tags: ['Rice Meal', 'kare kare'],
      orgins: ['Philippines']
    },
    {
      "id": "m2",
      "name": "Original Style Beef Pares",
      "price": 99.00,
      "favorite": false,
      "stars": 4,
      "imageUrl": "assets/OrigStyleBeefPares.jpg",
      "cookTime": "40-50",
      "tags": ['Rice Meal', 'Beef'],
      "orgins": ['Philippines']
    },
    
]

export const sample_tags: any[] = [
  { name:'All', count: 6},
  { name:'Meal', count: 4},
  { name:'Chicken', count: 6},
  { name:'Rice', count: 1},
  { name:'Salad', count: 2},
]

export const sample_users: any[] = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    password: "root",
    address: "philippines",
    isAdmin: true
  },
  {
    name: "jane Doe",
    email: "jane@gmail.com",
    password: "root",
    address: "philippines",
    isAdmin: false
  }
];