export const topMenu = []
export const menuItems = [
  {
    isHeadr: true,
    title: "menu",
  },
  {
    title: "Dashboard",
    isHide: true,
    icon: "heroicons-outline:home",
    link: "dashboard",
  },

  {
    title: "General Setup",
    icon: "heroicons-outline:document",
    link: "#",
    isHide: true,
    child: [
      {
        childtitle: "Pemeliharaan Menu",
        childlink: "#",
      },
      {
        childtitle: "Pemeliharaan User",
        childlink: "#",
      },
      {
        childtitle: "Aktivasi akun User",
        childlink: "#",
      },
      {
        childtitle: "Pemeliharaan Role Menu",
        childlink: "#",
      },
      {
        childtitle: "Pemeliharaan User Role Menu",
        childlink: "#",
      },
      {
        childtitle: "Konfigurasi Cabang",
        childlink: "#",
      },
      {
        childtitle: "Konfigurasi System",
        childlink: "#",
      },
    ],
  },
  {
    title: "Parameter Setup",
    icon: "heroicons-outline:view-grid-add",
    link: "#",
    child: [
      {
        childtitle: "Konfigurasi Group Parameter",
        childlink: "parameter_setup/konfigurasi_group_parameter",
      },
      {
        childtitle: "Konfigurasi Parameter",
        childlink: "parameter_setup/konfigurasi_parameter",
      },
    ],
  },
  {
    title: "Maintenance",
    icon: "heroicons-outline:collection",
    link: "#",
    child: [
      {
        childtitle: "Kredit Individual",
        childlink: "#",
      },
      {
        childtitle: "Adjusment Bucket",
        childlink: "#",
      },
    ],
  },
  {
    title: "Reporting",
    icon: "heroicons-outline:clipboard-list",
    link: "#",
    child: [
      {
        childtitle: "Nominatif",
        childlink: "#nom",
        multi_menu: [
          {
            multiTitle: "Kredit",
            multiLink: "reporting/nominatif/kredit",
          },
          {
            multiTitle: "Kredit Hapus Buku",
            multiLink: "#",
          },
          {
            multiTitle: "Setoran Transaksi",
            multiLink: "#",
          },
          {
            multiTitle: "Summary Nominatif Kredit",
            multiLink: "reporting/nominatif/summary",
          },
          {
            multiTitle: "Top 100 Account Number",
            multiLink: "reporting/nominatif/top_nominatif",
          },
        ],
      },
      {
        childtitle: "Rincian CKPN",
        childlink: "#ckpn",
        multi_menu: [
          {
            multiTitle: "CKPN",
            multiLink: "reporting/rincian_ckpn/ckpn",
          },
          {
            multiTitle: "PD",
            multiLink: "reporting/rincian_ckpn/pd",
          },
          {
            multiTitle: "LGD",
            multiLink: "reporting/rincian_ckpn/lgd",
          },
        ],
      },
      {
        childtitle: "Financial",
        childlink: "#financial",
        multi_menu: [
          {
            multiTitle: "Neraca",
            multiLink: "#",
          },
          {
            multiTitle: "Laba Rugi",
            multiLink: "#",
          },
          {
            multiTitle: "Rincian COA",
            multiLink: "#",
          },
        ],
      },
    ],
  },
  {
    title: "Tools",
    icon: "heroicons-outline:table",
    link: "#",
    child: [
      {
        childtitle: "Cutoff",
        childlink: "tools/cutoff",
      },
      {
        childtitle: "Simulasi Angsuran",
        childlink: "#",
      },
      {
        childtitle: "Calculate PD",
        childlink: "tools/calculate_pd",
      },
      {
        childtitle: "Calculate LGD",
        childlink: "#",
      },
      {
        childtitle: "Import Data",
        childlink: "#",
      },
      {
        childtitle: "Import Data Parameter",
        childlink: "#",
      },
      {
        childtitle: "Import Data Modifikasi",
        childlink: "#",
      },
      {
        childtitle: "Import Data Impair Aset",
        childlink: "#",
      },
      {
        childtitle: "Import Data Adjusment Bucket",
        childlink: "#",
      },
    ],
  },
  
];

export const notifications = [
  {
    title: "Cutoff Berhasil  🎉",
    desc: "Cutoff selesai pada 2023-07-10 01:30:00",
    unread: true,
    image: "/assets/images/all-img/user2.png",
    link: "#",
  },
  {
    title: "Kalkulasi PD Selesai 👋",
    desc: "Kalkulasi PD periode 2022-12 selesai pada 2023-07-10 01:30:00",
    unread: true,
    image: "/assets/images/all-img/user3.png",
    link: "#",
  },
  {
    title: "Cutoff Gagal",
    desc: "Cutoff gagal pada 2023-07-10 01:30:00. Cek log error untuk detail.",

    image: "/assets/images/all-img/user4.png",
    link: "#",
  },
];

export const message = [
  {
    title: "Wade Warren",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: true,
    notification_count: 1,
    image: "/assets/images/all-img/user1.png",
    link: "#",
  },
  {
    title: "Savannah Nguyen",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: false,
    image: "/assets/images/all-img/user2.png",
    link: "#",
  },
  {
    title: "Ralph Edwards",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: "/assets/images/all-img/user3.png",
    link: "#",
  },
  {
    title: "Cody Fisher",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: false,
    image: "/assets/images/all-img/user4.png",
    link: "#",
  },
  {
    title: "Savannah Nguyen",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: false,
    image: "/assets/images/all-img/user2.png",
    link: "#",
  },
  {
    title: "Ralph Edwards",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: "/assets/images/all-img/user3.png",
    link: "#",
  },
  {
    title: "Cody Fisher",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: false,
    image: "/assets/images/all-img/user4.png",
    link: "#",
  },
];

export const colors = {
  primary: "#4669FA",
  secondary: "#A0AEC0",
  danger: "#F1595C",
  black: "#111112",
  warning: "#FA916B",
  info: "#0CE7FA",
  light: "#425466",
  success: "#50C793",
  "gray-f7": "#F7F8FC",
  dark: "#1E293B",
  "dark-gray": "#0F172A",
  gray: "#68768A",
  gray2: "#EEF1F9",
  "dark-light": "#CBD5E1",
};

export const hexToRGB = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};

export const topFilterLists = [
  {
    name: "Inbox",
    value: "all",
    icon: "uil:image-v",
  },
  {
    name: "Starred",
    value: "fav",
    icon: "heroicons:star",
  },
  {
    name: "Sent",
    value: "sent",
    icon: "heroicons-outline:paper-airplane",
  },

  {
    name: "Drafts",
    value: "drafts",
    icon: "heroicons-outline:pencil-alt",
  },
  {
    name: "Spam",
    value: "spam",
    icon: "heroicons:information-circle",
  },
  {
    name: "Trash",
    value: "trash",
    icon: "heroicons:trash",
  },
];

export const bottomFilterLists = [
  {
    name: "personal",
    value: "personal",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Social",
    value: "social",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Promotions",
    value: "promotions",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Business",
    value: "business",
    icon: "heroicons:chevron-double-right",
  },
];

export const meets = [
  {
    img: "/assets/images/svg/sk.svg",
    title: "Meeting with client",
    date: "01 Nov 2021",
    meet: "Zoom meeting",
  },
  {
    img: "/assets/images/svg/path.svg",
    title: "Design meeting (team)",
    date: "01 Nov 2021",
    meet: "Skyp meeting",
  },
  {
    img: "/assets/images/svg/dc.svg",
    title: "Background research",
    date: "01 Nov 2021",
    meet: "Google meeting",
  },
  {
    img: "/assets/images/svg/sk.svg",
    title: "Meeting with client",
    date: "01 Nov 2021",
    meet: "Zoom meeting",
  },
];

export const files = [
  {
    img: "/assets/images/icon/file-1.svg",
    title: "Dashboard.fig",
    date: "06 June 2021 / 155MB",
  },
  {
    img: "/assets/images/icon/pdf-1.svg",
    title: "Ecommerce.pdf",
    date: "06 June 2021 / 155MB",
  },
  {
    img: "/assets/images/icon/zip-1.svg",
    title: "Job portal_app.zip",
    date: "06 June 2021 / 155MB",
  },
  {
    img: "/assets/images/icon/pdf-2.svg",
    title: "Ecommerce.pdf",
    date: "06 June 2021 / 155MB",
  },
  {
    img: "/assets/images/icon/scr-1.svg",
    title: "Screenshot.jpg",
    date: "06 June 2021 / 155MB",
  },
];
