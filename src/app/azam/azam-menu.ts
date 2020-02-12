import { NbMenuItem } from "@nebular/theme";

let menuArr = [
  {
    title: "E-commerce",
    icon: "shopping-cart-outline",
    link: "/azam/dashboard",
    home: true
  },
  {
    title: "Dashboard",
    icon: "home-outline",
    link: "/azam/iot-dashboard"
  },
  {
    title: "Sarafu",
    icon: "home-outline",
    link: "/azam/dashboard"
  },
  {
    title: "FEATURES",
    group: true
  },
  {
    title: "Gateway",
    icon: "layout-outline",
    children: [
      {
        title: "MNO'S",
        children: [
          {
            title: "Tigo Pesa",
            link: "/azam/gateway/tigoPesa"
          },
          {
            title: "Airtel",
            link: "/azam/gateway/airtel"
          },
          {
            title: "M-Pesa",
            link: "/azam/gateway/mPesa"
          },
          {
            title: "HaloPesa",
            link: "/azam/gateway/haloPesa"
          },
          {
            title: "Zantel",
            link: "/azam/gateway/zantel"
          }
        ]
      },
      {
        title: "BANKS",
        children: [
          {
            title: "TPB",
            link: "/azam/gateway/tpb"
          },
          {
            title: "CRDB",
            link: "/azam/gateway/crdb"
          }
        ]
      }
    ]
  },
  {
    title: "Users",
    icon: "layout-outline",
    children: [
      {
        title: "User Management",
        link: "/azam/users"
      },
      {
        title: "Role Management",
        link: "/azam/roles"
      },
      {
        title: "IP Whitelist",
        link: "/azam/ipwhitelist"
      }
    ]
  },
  {
    title: "Force Update",
    icon: "layout-outline",
    children: [
      {
        title: "By User",
        link: "/azam/forceupdate/user"
      },
      {
        title: "By Feature",
        link: "/azam/forceupdate/feature"
      }
    ]
  },
  {
    title: "Settings",
    icon: "layout-outline",
    link: "/azam/settings/"
  },
  {
    title: "Audit Trail",
    icon: "layout-outline",
    link: "/azam/audittrail"
  },
  {
    title: "Layout",
    icon: "layout-outline",
    children: [
      {
        title: "Stepper",
        link: "/azam/layout/stepper"
      },
      {
        title: "List",
        link: "/azam/layout/list"
      },
      {
        title: "Infinite List",
        link: "/azam/layout/infinite-list"
      },
      {
        title: "Accordion",
        link: "/azam/layout/accordion"
      },
      {
        title: "Tabs",
        pathMatch: "prefix",
        link: "/azam/layout/tabs"
      }
    ]
  },
  {
    title: "Forms",
    icon: "edit-2-outline",
    children: [
      {
        title: "Form Inputs",
        link: "/azam/forms/inputs"
      },
      {
        title: "Form Layouts",
        link: "/azam/forms/layouts"
      },
      {
        title: "Buttons",
        link: "/azam/forms/buttons"
      },
      {
        title: "Datepicker",
        link: "/azam/forms/datepicker"
      }
    ]
  },
  {
    title: "UI Features",
    icon: "keypad-outline",
    link: "/azam/ui-features",
    children: [
      {
        title: "Grid",
        link: "/azam/ui-features/grid"
      },
      {
        title: "Icons",
        link: "/azam/ui-features/icons"
      },
      {
        title: "Typography",
        link: "/azam/ui-features/typography"
      },
      {
        title: "Animated Searches",
        link: "/azam/ui-features/search-fields"
      }
    ]
  },
  {
    title: "Modal & Overlays",
    icon: "browser-outline",
    children: [
      {
        title: "Dialog",
        link: "/azam/modal-overlays/dialog"
      },
      {
        title: "Window",
        link: "/azam/modal-overlays/window"
      },
      {
        title: "Popover",
        link: "/azam/modal-overlays/popover"
      },
      {
        title: "Toastr",
        link: "/azam/modal-overlays/toastr"
      },
      {
        title: "Tooltip",
        link: "/azam/modal-overlays/tooltip"
      }
    ]
  },
  {
    title: "Extra Components",
    icon: "message-circle-outline",
    children: [
      {
        title: "Calendar",
        link: "/azam/extra-components/calendar"
      },
      {
        title: "Progress Bar",
        link: "/azam/extra-components/progress-bar"
      },
      {
        title: "Spinner",
        link: "/azam/extra-components/spinner"
      },
      {
        title: "Alert",
        link: "/azam/extra-components/alert"
      },
      {
        title: "Calendar Kit",
        link: "/azam/extra-components/calendar-kit"
      },
      {
        title: "Chat",
        link: "/azam/extra-components/chat"
      }
    ]
  },
  {
    title: "Maps",
    icon: "map-outline",
    children: [
      {
        title: "Google Maps",
        link: "/azam/maps/gmaps"
      },
      {
        title: "Leaflet Maps",
        link: "/azam/maps/leaflet"
      },
      {
        title: "Bubble Maps",
        link: "/azam/maps/bubble"
      },
      {
        title: "Search Maps",
        link: "/azam/maps/searchmap"
      }
    ]
  },
  {
    title: "Charts",
    icon: "pie-chart-outline",
    children: [
      {
        title: "Echarts",
        link: "/azam/charts/echarts"
      },
      {
        title: "Charts.js",
        link: "/azam/charts/chartjs"
      },
      {
        title: "D3",
        link: "/azam/charts/d3"
      }
    ]
  },
  {
    title: "Editors",
    icon: "text-outline",
    children: [
      {
        title: "TinyMCE",
        link: "/azam/editors/tinymce"
      },
      {
        title: "CKEditor",
        link: "/azam/editors/ckeditor"
      }
    ]
  },
  {
    title: "Tables & Data",
    icon: "grid-outline",
    children: [
      {
        title: "Smart Table",
        link: "/azam/tables/smart-table"
      },
      {
        title: "Tree Grid",
        link: "/azam/tables/tree-grid"
      }
    ]
  },
  {
    title: "Miscellaneous",
    icon: "shuffle-2-outline",
    children: [
      {
        title: "404",
        link: "/azam/miscellaneous/404"
      }
    ]
  },
  {
    title: "Auth",
    icon: "lock-outline",
    children: [
      {
        title: "Login",
        link: "/auth/login"
      },
      {
        title: "Register",
        link: "/auth/register"
      },
      {
        title: "Request Password",
        link: "/auth/request-password"
      },
      {
        title: "Reset Password",
        link: "/auth/reset-password"
      }
    ]
  }
];

let superAdminMenu = [
  {
    title: "Dashboard",
    icon: "home-outline",
    link: "/azam/sarafu/dashboard"
  },
  {
    title: "Sarafu",
    icon: "keypad-outline",
    children: [
      { title: "Clients", icon: "person-outline", link: "sarafu/clients" },
      {
        title: "Representative",
        icon: "person-outline",
        link: "sarafu/representative"
      },
      {
        title: "Force Update",
        icon: "browser-outline",
        children: [
          { title: "User", link: "sarafu/forceupdate/user" },
          {
            title: "Feature",

            link: "sarafu/forceupdate/feature"
          }
        ]
      },
      {
        title: "Settings",
        icon: "settings-outline",
        link: "sarafu/settings"
      }
    ]
  }
];

export const MENU_ITEMS: NbMenuItem[] = superAdminMenu;
