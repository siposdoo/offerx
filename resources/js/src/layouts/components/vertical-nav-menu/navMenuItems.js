/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


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
    url:'/prodaja',
    name: 'Prodaja',
    icon: 'CoffeeIcon',
    i18n: 'Prodaja',
  },
  {
    header: 'Apps',
    icon: 'PackageIcon',
    i18n: ' ',
    items: [
      {
         
       
        url: '/sopovi',
        name: 'User',
        icon: 'ArchiveIcon',
        i18n: 'Šopovi',
        
      },
      {
         
       
        url: '/narudzbe',
        name: 'Narudzbe',
        icon: 'ListIcon',
        i18n: 'Narudžbe',
        
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

