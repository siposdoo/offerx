 
export default [ 
  // {
  //   url: "/apps/email",
  //   name: "Email",
  //   slug: "email",
  //   icon: "MailIcon",
  //   i18n: "Email",
  // },
  {
    url:'/' ,
    name: 'Dashboard',
    tagColor: 'warning',
    icon: 'HomeIcon',
    i18n: 'Početna',
    
  },
   
  {
    header: 'Apps',
    icon: 'PackageIcon',
    i18n: ' ',
    items: [
      
      {
         
       
        url: '/dobavljaci',
        name: 'Dobavljaci',
        icon: 'ShoppingBagIcon',
        i18n: 'Dobavljači',
        
      },
      {
         
       
        url: '/sopovi',
        name: 'Sopovi',
        icon: 'ShoppingCartIcon',
        i18n: 'Šopovi',
        
      },
      {
         
       
        url: '/narudzbe',
        name: 'Narudzbe',
        icon: 'PackageIcon',
        i18n: 'Narudžbe',
        
      },
      {
         
       
        url: '/reklamacije',
        name: 'Reklamacije',
        icon: 'AlertOctagonIcon',
        i18n: 'Reklamacije',
        
      }
      
    ]
  },
  {
    header: 'Proizvodi',
    icon: 'ListIcon',
    i18n: 'Proizvodi',
    name: 'Proizvodi',
    
 
    items: [
      {
        url: '/proizvodi',
        name: 'Lista proizvoda',
        icon: 'ListIcon',
        tagColor: 'primary',
        i18n: 'Lista proizvoda',
      },
      {
        url: '/kategorije',
        name: 'Kategorije',
        icon: 'ListIcon',
        slug: 'kategorije',
        i18n: 'Kategorije'
      }
    ]
  },
  
]

