/* @ds-bundle: {"format":3,"namespace":"AppleDesignSystem_2bff7e","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"ConfigChip","sourcePath":"components/cards/ConfigChip.jsx"},{"name":"ProductTile","sourcePath":"components/cards/ProductTile.jsx"},{"name":"StoreCard","sourcePath":"components/cards/StoreCard.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"Icon","sourcePath":"components/icon/Icon.jsx"},{"name":"AppleLogo","sourcePath":"components/icon/Icon.jsx"},{"name":"GlobalNav","sourcePath":"components/navigation/GlobalNav.jsx"},{"name":"SubNav","sourcePath":"components/navigation/SubNav.jsx"}],"sourceHashes":{"ForticaDashboard.jsx":"7398e22c7ede","ForticaLogin.jsx":"5e9f762f646d","ForticaProperty.jsx":"2fa7b87f86f9","ForticaShared.jsx":"f465c5d30367","components/buttons/Button.jsx":"8cce1af871df","components/buttons/IconButton.jsx":"835bc10c751d","components/cards/ConfigChip.jsx":"b94fcefd1ffc","components/cards/ProductTile.jsx":"bb1a1a6bf707","components/cards/StoreCard.jsx":"84f6aa7028d6","components/forms/SearchInput.jsx":"051078d70a93","components/icon/Icon.jsx":"285ee7a6f408","components/navigation/GlobalNav.jsx":"1804246b6195","components/navigation/SubNav.jsx":"3c329bedf319"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AppleDesignSystem_2bff7e = window.AppleDesignSystem_2bff7e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ForticaDashboard.jsx
try { (() => {
/* Fortica CRM — Dashboard screen */

/* ── KPI card ── */
function KpiCard({
  label,
  value,
  meta
}) {
  const {
    FT
  } = window;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: FT.bgLight,
      borderRadius: 8,
      padding: '28px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FT.fontDisplay,
      fontSize: 40,
      fontWeight: 600,
      lineHeight: 1.07,
      letterSpacing: '-0.5px',
      color: FT.ink,
      marginBottom: 8
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FT.fontText,
      fontSize: 14,
      letterSpacing: '-0.224px',
      color: FT.inkMuted48,
      lineHeight: 1.29
    }
  }, label), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FT.fontText,
      fontSize: 12,
      letterSpacing: '-0.12px',
      color: FT.primary,
      marginTop: 6
    }
  }, meta));
}

/* ── Property card photo placeholder ── */
const PROP_PHOTOS = ['linear-gradient(145deg,#d4c8b8 0%,#8a7a6a 100%)', 'linear-gradient(145deg,#b8c8d8 0%,#3a4858 100%)', 'linear-gradient(145deg,#c8d4b8 0%,#5a6a48 100%)'];

/* ── Property card ── */
function PropertyCard({
  prop,
  idx,
  onClick
}) {
  const {
    FT,
    StatusPill
  } = window;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: FT.bgLight,
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: FT.shadow,
      cursor: 'pointer',
      transition: 'transform 180ms cubic-bezier(0.4,0,0.2,1)'
    },
    onMouseEnter: e => e.currentTarget.style.transform = 'translateY(-3px)',
    onMouseLeave: e => e.currentTarget.style.transform = 'none'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 180,
      background: PROP_PHOTOS[idx % 3],
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: prop.status
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FT.fontDisplay,
      fontSize: 21,
      fontWeight: 700,
      lineHeight: 1.19,
      color: FT.ink,
      marginBottom: 6,
      letterSpacing: '-0.3px'
    }
  }, prop.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FT.fontText,
      fontSize: 14,
      letterSpacing: '-0.224px',
      color: FT.inkMuted48,
      marginBottom: 4
    }
  }, prop.address), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FT.fontText,
      fontSize: 14,
      letterSpacing: '-0.224px',
      color: FT.ink,
      fontWeight: 600,
      marginBottom: 14
    }
  }, prop.price), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, prop.specs.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      fontFamily: FT.fontText,
      fontSize: 12,
      letterSpacing: '-0.12px',
      color: FT.inkMuted48
    }
  }, s)))));
}

/* ── Client avatar ── */
function Avatar({
  initials
}) {
  const {
    FT
  } = window;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: '#e5e5ea',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: FT.fontText,
      fontSize: 13,
      fontWeight: 600,
      color: FT.ink,
      flex: '0 0 auto'
    }
  }, initials);
}

/* ── Client row ── */
function ClientRow({
  client,
  last
}) {
  const {
    FT,
    Avatar: Av
  } = window;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '44px 1fr 1fr auto',
      alignItems: 'center',
      gap: 16,
      padding: '14px 0',
      borderBottom: last ? 'none' : `1px solid ${FT.hairline}`
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: client.initials
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FT.fontText,
      fontSize: 17,
      letterSpacing: '-0.374px',
      color: FT.ink
    }
  }, client.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FT.fontText,
      fontSize: 14,
      letterSpacing: '-0.224px',
      color: FT.inkMuted48
    }
  }, client.email)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FT.fontText,
      fontSize: 14,
      letterSpacing: '-0.224px',
      color: FT.inkMuted48
    }
  }, client.phone), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FT.fontText,
      fontSize: 12,
      letterSpacing: '-0.12px',
      color: FT.inkMuted48,
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      color: FT.ink,
      fontWeight: 500
    }
  }, "Aktivan"), client.lastActive));
}

/* ── DATA ── */
const PROPERTIES = [{
  id: 1,
  name: 'Trosobni stan, Novi Beograd',
  address: 'Jurija Gagarina 14a',
  price: '195.000 €',
  status: 'Aktivan',
  specs: ['89 m²', '3 sobe', '5. sprat']
}, {
  id: 2,
  name: 'Luksuzni penthouse, Vračar',
  address: 'Terazije 5/XII',
  price: '450.000 €',
  status: 'Prodan',
  specs: ['180 m²', '4 sobe', '12. sprat']
}, {
  id: 3,
  name: 'Porodična kuća, Dedinje',
  address: 'Dedinjska 22',
  price: '850.000 €',
  status: 'Rezervisan',
  specs: ['320 m²', '6 soba', 'P+1']
}];
const CLIENTS = [{
  name: 'Marija Jovanović',
  initials: 'MJ',
  email: 'marija.j@gmail.com',
  phone: '+381 64 123 4567',
  lastActive: 'Prije 2h'
}, {
  name: 'Stefan Nikolić',
  initials: 'SN',
  email: 'stefan.n@email.rs',
  phone: '+381 69 987 6543',
  lastActive: 'Prije 1 dan'
}, {
  name: 'Ana Petrović',
  initials: 'AP',
  email: 'ana.p@outlook.com',
  phone: '+381 60 555 0101',
  lastActive: 'Prije 3 dana'
}, {
  name: 'Dragan Milošević',
  initials: 'DM',
  email: 'dragan.m@gmail.com',
  phone: '+381 64 222 3344',
  lastActive: 'Prije 1 sedmicu'
}];

/* ── Dashboard screen ── */
function DashboardScreen({
  setScreen
}) {
  const {
    FT,
    ForticaNav,
    ForticaPillLink,
    SectionHead
  } = window;
  const sec = {
    padding: '56px 0'
  };
  const inner = {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '0 40px'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: FT.bgLight,
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(ForticaNav, {
    setScreen: setScreen
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 48
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      ...sec,
      background: FT.bgLight
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: inner
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Pregled"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    value: "142",
    label: "Aktivni listinzi",
    meta: "+12 ovaj mesec"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    value: "23",
    label: "Novi klijenti",
    meta: "ovaj mesec"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    value: "18",
    label: "Zakazani pregledi",
    meta: "ova sedmica"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    value: "7",
    label: "Zatvoreni ugovori",
    meta: "ovaj mesec"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...sec,
      background: FT.bgWhite
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: inner
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Najnovije nekretnine",
    action: /*#__PURE__*/React.createElement(ForticaPillLink, {
      onClick: () => setScreen('dashboard')
    }, "Prika\u017Ei sve")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, PROPERTIES.map((p, i) => /*#__PURE__*/React.createElement(PropertyCard, {
    key: p.id,
    prop: p,
    idx: i,
    onClick: () => setScreen('property')
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...sec,
      background: FT.bgLight
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: inner
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Nedavni klijenti"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: FT.bgWhite,
      borderRadius: 8,
      padding: '4px 24px'
    }
  }, CLIENTS.map((c, i) => /*#__PURE__*/React.createElement(ClientRow, {
    key: c.name,
    client: c,
    last: i === CLIENTS.length - 1
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(ForticaPillLink, null, "Prika\u017Ei sve klijente")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: FT.bgDark,
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...inner,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FT.fontText,
      fontSize: 14,
      letterSpacing: '-0.224px',
      color: 'rgba(255,255,255,0.48)',
      marginBottom: 12
    }
  }, "ISTAKNUTA NEKRETNINA \xB7 DEDINJE"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: FT.fontDisplay,
      fontSize: 48,
      fontWeight: 600,
      letterSpacing: '-0.5px',
      lineHeight: 1.07,
      color: FT.onDark,
      margin: '0 0 16px',
      maxWidth: 700
    }
  }, "Ekskluzivna vila.", /*#__PURE__*/React.createElement("br", null), "Dedinje, Beograd."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: FT.fontText,
      fontSize: 21,
      color: 'rgba(255,255,255,0.7)',
      letterSpacing: 0,
      lineHeight: 1.2,
      margin: '0 0 40px'
    }
  }, "320 m\xB2 \xB7 6 soba \xB7 850.000 \u20AC"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(ForticaPillLink, {
    dark: true,
    onClick: () => setScreen('property')
  }, "Pogledaj detalje"), /*#__PURE__*/React.createElement(ForticaPillLink, {
    dark: true
  }, "Podijeli listinzu"))))));
}
Object.assign(window, {
  DashboardScreen,
  Avatar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ForticaDashboard.jsx", error: String((e && e.message) || e) }); }

// ForticaLogin.jsx
try { (() => {
/* Fortica CRM — Login screen */

function LoginScreen({
  setScreen
}) {
  const {
    FT,
    ForticaButton,
    ForticaInput
  } = window;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: FT.bgDark,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FT.fontDisplay,
      fontSize: 40,
      fontWeight: 600,
      color: FT.onDark,
      letterSpacing: '-0.5px',
      lineHeight: 1.07,
      marginBottom: 14,
      textAlign: 'center'
    }
  }, "FORTICA"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: FT.fontDisplay,
      fontSize: 21,
      fontWeight: 400,
      color: 'rgba(255,255,255,0.8)',
      letterSpacing: 0,
      lineHeight: 1.19,
      margin: '0 0 52px',
      textAlign: 'center',
      maxWidth: 380
    }
  }, "Profesionalni CRM sistem za agencije za nekretnine"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: FT.bgCardDark,
      borderRadius: 12,
      padding: '40px',
      width: '100%',
      maxWidth: 420,
      boxShadow: FT.shadow
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(ForticaInput, {
    dark: true,
    label: "E-mail adresa",
    type: "email",
    placeholder: "ime@agencija.rs",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(ForticaInput, {
    dark: true,
    label: "Lozinka",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    value: password,
    onChange: e => setPassword(e.target.value)
  })), /*#__PURE__*/React.createElement(ForticaButton, {
    fullWidth: true,
    style: {
      padding: '12px 15px',
      fontSize: 17
    },
    onClick: () => setScreen('dashboard')
  }, "Prijavite se"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: FT.fontText,
      fontSize: 14,
      color: FT.linkDark,
      letterSpacing: '-0.224px',
      textDecoration: 'none'
    }
  }, "Zaboravili ste lozinku?"))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 44,
      fontFamily: FT.fontText,
      fontSize: 12,
      color: 'rgba(255,255,255,0.32)',
      letterSpacing: '-0.12px',
      textAlign: 'center'
    }
  }, "\xA9 2026 Fortica Technology d.o.o. \xB7 Sva prava zadr\u017Eana"));
}
Object.assign(window, {
  LoginScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ForticaLogin.jsx", error: String((e && e.message) || e) }); }

// ForticaProperty.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Fortica CRM — Property Detail screen */

/* ── Spec card ── */
function SpecCard({
  icon,
  label,
  value
}) {
  const {
    FT
  } = window;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: FT.bgWhite,
      borderRadius: 8,
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FT.fontText,
      fontSize: 12,
      letterSpacing: '-0.12px',
      color: FT.inkMuted48,
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FT.fontDisplay,
      fontSize: 28,
      fontWeight: 600,
      letterSpacing: '-0.3px',
      color: FT.ink,
      lineHeight: 1.1
    }
  }, value));
}

/* ── Agent card ── */
function AgentCard({
  setScreen
}) {
  const {
    FT,
    ForticaButton
  } = window;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: FT.bgWhite,
      borderRadius: 8,
      boxShadow: FT.shadow,
      padding: '32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      position: 'sticky',
      top: 68
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #b0b8c8 0%, #6a7488 100%)',
      marginBottom: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FT.fontDisplay,
      fontSize: 21,
      fontWeight: 700,
      letterSpacing: '-0.3px',
      color: FT.ink,
      textAlign: 'center'
    }
  }, "Milan Markovi\u0107"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FT.fontText,
      fontSize: 14,
      letterSpacing: '-0.224px',
      color: FT.inkMuted48,
      textAlign: 'center'
    }
  }, "Stariji agent za nekretnine"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      borderTop: `1px solid ${FT.hairline}`,
      margin: '8px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, [{
    label: 'Telefon',
    value: '+381 64 555 7890'
  }, {
    label: 'E-mail',
    value: 'milan.m@fortica.rs'
  }, {
    label: 'Agencija',
    value: 'Fortica Beograd'
  }].map(r => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FT.fontText,
      fontSize: 14,
      color: FT.inkMuted48,
      letterSpacing: '-0.224px'
    }
  }, r.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FT.fontText,
      fontSize: 14,
      color: FT.ink,
      letterSpacing: '-0.224px',
      fontWeight: 500
    }
  }, r.value)))), /*#__PURE__*/React.createElement(ForticaButton, {
    fullWidth: true,
    style: {
      marginTop: 8
    }
  }, "Kontaktiraj agenta"));
}

/* ── Timeline item ── */
function TimelineItem({
  date,
  action,
  actor,
  last
}) {
  const {
    FT
  } = window;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      paddingBottom: last ? 0 : 28,
      position: 'relative'
    }
  }, !last && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 11,
      top: 24,
      width: 1,
      bottom: 0,
      background: 'rgba(255,255,255,0.15)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: FT.primary,
      flex: '0 0 auto',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FT.fontText,
      fontSize: 17,
      letterSpacing: '-0.374px',
      color: FT.onDark
    }
  }, action), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FT.fontText,
      fontSize: 14,
      letterSpacing: '-0.224px',
      color: 'rgba(255,255,255,0.48)',
      marginTop: 2
    }
  }, actor, " \xB7 ", date)));
}
const TIMELINE = [{
  date: '15. jun 2026.',
  action: 'Listinzovanje nekretnine',
  actor: 'Milan Marković'
}, {
  date: '13. jun 2026.',
  action: 'Zakazan pregled',
  actor: 'Stefan Nikolić'
}, {
  date: '10. jun 2026.',
  action: 'Status promijenjen: Rezervisan',
  actor: 'Ana Petrović'
}, {
  date: '05. jun 2026.',
  action: 'Procjena tržišne vrijednosti',
  actor: 'Milan Marković'
}];

/* ── Property Detail screen ── */
function PropertyDetailScreen({
  setScreen
}) {
  const {
    FT,
    ForticaNav,
    ForticaPillLink,
    StatusPill,
    SectionHead
  } = window;
  const sec = {
    padding: '56px 0'
  };
  const inner = {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '0 40px'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: FT.bgLight,
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(ForticaNav, {
    setScreen: setScreen
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 500,
      position: 'relative',
      background: 'linear-gradient(145deg, #8b7355 0%, #5a4330 45%, #2a1e10 100%)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, transparent 100%)',
      padding: '48px 48px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: "Rezervisan"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FT.fontText,
      fontSize: 14,
      letterSpacing: '-0.224px',
      color: 'rgba(255,255,255,0.6)'
    }
  }, "ID #F-2026-0314")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: FT.fontDisplay,
      fontSize: 56,
      fontWeight: 600,
      letterSpacing: '-0.28px',
      lineHeight: 1.07,
      color: FT.onDark,
      margin: '0 0 12px'
    }
  }, "Porodi\u010Dna ku\u0107a,", /*#__PURE__*/React.createElement("br", null), "Dedinje"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FT.fontDisplay,
      fontSize: 28,
      fontWeight: 400,
      letterSpacing: '0.196px',
      color: 'rgba(255,255,255,0.8)'
    }
  }, "850.000 \u20AC"))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...sec,
      background: FT.bgLight
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: inner
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SpecCard, {
    label: "Povr\u0161ina",
    value: "320 m\xB2"
  }), /*#__PURE__*/React.createElement(SpecCard, {
    label: "Sobe",
    value: "6"
  }), /*#__PURE__*/React.createElement(SpecCard, {
    label: "Sprat",
    value: "P + 1"
  }), /*#__PURE__*/React.createElement(SpecCard, {
    label: "Godina",
    value: "1998."
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...sec,
      background: FT.bgWhite
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...inner,
      display: 'grid',
      gridTemplateColumns: '1fr 340px',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "O nekretnini"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: FT.fontText,
      fontSize: 17,
      fontWeight: 400,
      lineHeight: 1.47,
      letterSpacing: '-0.374px',
      color: FT.ink,
      margin: '0 0 20px'
    }
  }, "Reprezentativna porodi\u010Dna ku\u0107a na najpresti\u017Enijoj lokaciji u Beogradu \u2014 Dedinjama. Objekat povr\u0161ine 320 m\xB2 smje\u0161ten je na urbanoj parceli od 650 m\xB2, okru\u017Eenoj zelenilom i visokim bezbjednosnim standardima."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: FT.fontText,
      fontSize: 17,
      fontWeight: 400,
      lineHeight: 1.47,
      letterSpacing: '-0.374px',
      color: FT.ink,
      margin: '0 0 20px'
    }
  }, "Ku\u0107a je izgra\u0111ena 1998. godine i potpuno renovirana 2022. Raspored: prizemlje sa dnevnim boravkom, trpezarijom i kuhinjom; sprat sa pet spava\u0107ih soba i tri kupatila. Posebno se isti\u010De zimska ba\u0161ta, gara\u017Ea za dva automobila i ure\u0111en vrt s bazenom."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: FT.fontText,
      fontSize: 17,
      fontWeight: 400,
      lineHeight: 1.47,
      letterSpacing: '-0.374px',
      color: FT.ink,
      margin: 0
    }
  }, "Nekretnina je trenutno u statusu ", /*#__PURE__*/React.createElement("strong", null, "Rezervisan"), ". Za sve informacije o dostupnosti i uvjetima kupovine kontaktirajte odgovornog agenta."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(ForticaPillLink, {
    onClick: () => setScreen('dashboard')
  }, "\u2190 Nazad na sve nekretnine"))), /*#__PURE__*/React.createElement(AgentCard, {
    setScreen: setScreen
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: FT.bgDark,
      padding: '64px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: inner
  }, /*#__PURE__*/React.createElement(SectionHead, {
    dark: true,
    title: "Istorija aktivnosti"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, TIMELINE.map((t, i) => /*#__PURE__*/React.createElement(TimelineItem, _extends({
    key: i
  }, t, {
    last: i === TIMELINE.length - 1
  }))))))));
}
Object.assign(window, {
  PropertyDetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ForticaProperty.jsx", error: String((e && e.message) || e) }); }

// ForticaShared.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Fortica CRM — shared design tokens and primitives.
   Exports to window so each Babel script can access them.      */

const FT = {
  bgDark: '#000000',
  bgLight: '#f5f5f7',
  bgWhite: '#ffffff',
  bgCardDark: '#272729',
  ink: '#1d1d1f',
  inkMuted48: 'rgba(0,0,0,0.48)',
  inkMuted80: 'rgba(0,0,0,0.8)',
  onDark: '#ffffff',
  onDarkMuted: 'rgba(255,255,255,0.72)',
  primary: '#0071e3',
  linkLight: '#0066cc',
  linkDark: '#2997ff',
  inputBg: '#fafafc',
  hairline: 'rgba(0,0,0,0.08)',
  shadow: 'rgba(0,0,0,0.22) 3px 5px 30px 0px',
  fontDisplay: '"SF Pro Display", -apple-system, "Helvetica Neue", Arial, sans-serif',
  fontText: '"SF Pro Text", -apple-system, "Helvetica Neue", Arial, sans-serif'
};

/* ── Notification bell SVG ── */
function BellIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.73 21a2 2 0 0 1-3.46 0"
  }));
}

/* ── Sticky frosted nav ── */
function ForticaNav({
  setScreen
}) {
  const links = ['Nekretnine', 'Klijenti', 'Zadaci', 'Izvještaji'];
  const btnBase = {
    background: 'none',
    border: 0,
    cursor: 'pointer',
    padding: 0,
    fontFamily: FT.fontText,
    fontSize: 12,
    letterSpacing: '-0.12px',
    color: 'rgba(255,255,255,0.86)'
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 200,
      height: 48,
      background: 'rgba(0,0,0,0.8)',
      backdropFilter: 'saturate(180%) blur(20px)',
      WebkitBackdropFilter: 'saturate(180%) blur(20px)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setScreen('dashboard'),
    style: {
      ...btnBase,
      color: FT.onDark,
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: '-0.3px',
      fontFamily: FT.fontDisplay,
      flex: '0 0 auto'
    }
  }, "FORTICA"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      gap: 32
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setScreen('dashboard'),
    style: btnBase
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      color: 'rgba(255,255,255,0.8)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 0,
      color: 'rgba(255,255,255,0.8)',
      cursor: 'pointer',
      padding: 0,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(BellIcon, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: FT.primary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: FT.fontText,
      fontSize: 11,
      fontWeight: 600,
      color: '#fff',
      cursor: 'pointer',
      userSelect: 'none'
    }
  }, "A")));
}

/* ── Primary Apple-blue button ── */
function ForticaButton({
  children,
  fullWidth,
  style,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      background: FT.primary,
      color: '#fff',
      border: 0,
      borderRadius: 8,
      padding: '8px 15px',
      fontFamily: FT.fontText,
      fontSize: 15,
      letterSpacing: '-0.374px',
      cursor: 'pointer',
      width: fullWidth ? '100%' : undefined,
      transform: pressed ? 'scale(0.95)' : 'none',
      transition: 'transform 120ms cubic-bezier(0.4,0,0.2,1)',
      ...style
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false)
  }, rest), children);
}

/* ── Outlined pill link ── */
function ForticaPillLink({
  children,
  dark,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      background: 'transparent',
      border: `1px solid ${dark ? FT.linkDark : FT.linkLight}`,
      color: dark ? FT.linkDark : FT.linkLight,
      borderRadius: 9999,
      padding: '7px 18px',
      fontFamily: FT.fontText,
      fontSize: 14,
      letterSpacing: '-0.224px',
      cursor: 'pointer',
      ...style
    }
  }, rest), children);
}

/* ── Text input (with optional dark-card label) ── */
function ForticaInput({
  label,
  dark,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FT.fontText,
      fontSize: 14,
      letterSpacing: '-0.224px',
      color: dark ? 'rgba(255,255,255,0.72)' : FT.ink,
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    style: {
      display: 'block',
      width: '100%',
      boxSizing: 'border-box',
      background: FT.inputBg,
      borderRadius: 11,
      padding: '11px 14px',
      border: focused ? `2px solid ${FT.primary}` : '3px solid rgba(0,0,0,0.04)',
      fontFamily: FT.fontText,
      fontSize: 17,
      letterSpacing: '-0.374px',
      color: FT.ink,
      outline: 'none',
      ...style
    },
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest)));
}

/* ── Status pill for property listings ── */
const STATUS_CFG = {
  Aktivan: {
    bg: '#0071e3',
    color: '#fff'
  },
  Prodan: {
    bg: '#1d1d1f',
    color: '#fff'
  },
  Rezervisan: {
    bg: '#7a7a7a',
    color: '#fff'
  }
};
function StatusPill({
  status
}) {
  const s = STATUS_CFG[status] || STATUS_CFG.Aktivan;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      background: s.bg,
      color: s.color,
      borderRadius: 9999,
      padding: '4px 12px',
      fontFamily: FT.fontText,
      fontSize: 12,
      letterSpacing: '-0.12px'
    }
  }, status);
}

/* ── Section header (28px Display) ── */
function SectionHead({
  title,
  action,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: FT.fontDisplay,
      fontSize: 28,
      fontWeight: 400,
      lineHeight: 1.14,
      letterSpacing: '0.196px',
      color: dark ? FT.onDark : FT.ink
    }
  }, title), action);
}
Object.assign(window, {
  FT,
  ForticaNav,
  ForticaButton,
  ForticaPillLink,
  ForticaInput,
  StatusPill,
  SectionHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ForticaShared.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
/**
 * Button — the brand's action grammar.
 * Variants:
 *  - primary       : Action Blue full pill (the signature CTA)
 *  - secondary     : ghost pill — transparent, blue border + text
 *  - dark-utility   : ink fill, 8px radius (nav: Sign in, Bag)
 *  - pearl         : near-white capsule w/ soft 3px ring (card secondary)
 *  - store-hero     : larger primary, button-large type (rare weight 300)
 * Press = scale(0.95). Focus = 2px Focus-Blue outline. No hover styling.
 */

const CSS = `
.ads-btn{
  appearance:none;border:0;cursor:pointer;display:inline-flex;align-items:center;
  justify-content:center;gap:8px;font-family:var(--font-text);text-align:center;
  white-space:nowrap;transition:transform var(--duration-press) var(--ease-standard);
  -webkit-font-smoothing:antialiased;text-decoration:none;
}
.ads-btn:active{transform:var(--press-scale);}
.ads-btn:focus-visible{outline:2px solid var(--color-primary-focus);outline-offset:2px;}
.ads-btn[disabled]{cursor:default;color:var(--color-ink-muted-48);opacity:1;}
.ads-btn[disabled]:active{transform:none;}

.ads-btn--primary{
  background:var(--color-primary);color:var(--color-on-primary);
  border-radius:var(--radius-pill);padding:11px 22px;
  font-size:var(--type-body-size);font-weight:var(--type-body-weight);
  letter-spacing:var(--type-body-tracking);line-height:1;
}
.ads-btn--primary[disabled]{background:var(--color-canvas-parchment);color:var(--color-ink-muted-48);}

.ads-btn--secondary{
  background:transparent;color:var(--color-primary);
  border:1px solid var(--color-primary);border-radius:var(--radius-pill);
  padding:10px 21px;font-size:var(--type-body-size);font-weight:var(--type-body-weight);
  letter-spacing:var(--type-body-tracking);line-height:1;
}

.ads-btn--dark-utility{
  background:var(--color-ink);color:var(--color-body-on-dark);
  border-radius:var(--radius-sm);padding:8px 15px;
  font-size:var(--type-button-utility-size);font-weight:var(--type-button-utility-weight);
  letter-spacing:var(--type-button-utility-tracking);line-height:var(--type-button-utility-leading);
}

.ads-btn--pearl{
  background:var(--color-surface-pearl);color:var(--color-ink-muted-80);
  border:3px solid var(--color-divider-soft);border-radius:var(--radius-md);
  padding:8px 14px;font-size:var(--type-caption-size);font-weight:var(--type-caption-weight);
  letter-spacing:var(--type-caption-tracking);line-height:1;
}

.ads-btn--store-hero{
  background:var(--color-primary);color:var(--color-on-primary);
  border-radius:var(--radius-pill);padding:14px 28px;
  font-size:var(--type-button-large-size);font-weight:var(--type-button-large-weight);
  letter-spacing:var(--type-button-large-tracking);line-height:1;
}
`;
let injected = false;
function useStyle() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const tag = document.createElement("style");
  tag.id = "ads-button-style";
  tag.textContent = CSS;
  document.head.appendChild(tag);
}
function Button({
  variant = "primary",
  as,
  children,
  className = "",
  ...rest
}) {
  useStyle();
  const Tag = as || (rest.href ? "a" : "button");
  return React.createElement(Tag, {
    className: `ads-btn ads-btn--${variant} ${className}`.trim(),
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/ConfigChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ConfigChip — the pill-shaped tappable cell from the iPhone buy-page
 * configurator. Holds a thumbnail + label + optional price delta.
 * Selected state upgrades the border to 2px Focus-Blue. Press = 0.95.
 */

const CSS = `
.ads-chip{
  appearance:none;cursor:pointer;display:flex;align-items:center;gap:12px;
  background:var(--color-canvas);color:var(--color-ink);
  border:1px solid var(--color-hairline);border-radius:var(--radius-pill);
  padding:12px 16px;font-family:var(--font-text);text-align:left;
  transition:transform var(--duration-press) var(--ease-standard);width:100%;
}
.ads-chip:active{transform:var(--press-scale);}
.ads-chip:focus-visible{outline:2px solid var(--color-primary-focus);outline-offset:2px;}
.ads-chip[aria-pressed="true"]{border:2px solid var(--color-primary-focus);padding:11px 15px;}
.ads-chip__thumb{width:28px;height:28px;border-radius:var(--radius-sm);background:var(--color-canvas-parchment);flex:0 0 auto;overflow:hidden;display:flex;align-items:center;justify-content:center;}
.ads-chip__thumb img{max-width:100%;max-height:100%;}
.ads-chip__label{font-size:var(--type-caption-size);letter-spacing:var(--type-caption-tracking);font-weight:600;}
.ads-chip__delta{margin-left:auto;font-size:var(--type-fine-print-size);color:var(--color-ink-muted-48);}
`;
let injected = false;
function useStyle() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const tag = document.createElement("style");
  tag.id = "ads-chip-style";
  tag.textContent = CSS;
  document.head.appendChild(tag);
}
function ConfigChip({
  label,
  delta,
  thumb,
  swatch,
  selected = false,
  className = "",
  ...rest
}) {
  useStyle();
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `ads-chip ${className}`.trim(),
    "aria-pressed": selected
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ads-chip__thumb",
    style: swatch ? {
      background: swatch
    } : undefined
  }, thumb && /*#__PURE__*/React.createElement("img", {
    src: thumb,
    alt: ""
  })), /*#__PURE__*/React.createElement("span", {
    className: "ads-chip__label"
  }, label), delta && /*#__PURE__*/React.createElement("span", {
    className: "ads-chip__delta"
  }, delta));
}
Object.assign(__ds_scope, { ConfigChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ConfigChip.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProductTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProductTile — the full-bleed, edge-to-edge product band that is the
 * homepage's atomic unit. Centered stack: headline → tagline → paired
 * CTAs → product render. The surface color IS the section divider, so
 * tiles touch with zero gap and never round their corners.
 *
 * mode: "light" | "parchment" | "dark" | "dark-2" | "dark-3"
 */

const SURFACE = {
  light: {
    bg: "var(--color-canvas)",
    dark: false
  },
  parchment: {
    bg: "var(--color-canvas-parchment)",
    dark: false
  },
  dark: {
    bg: "var(--color-surface-tile-1)",
    dark: true
  },
  "dark-2": {
    bg: "var(--color-surface-tile-2)",
    dark: true
  },
  "dark-3": {
    bg: "var(--color-surface-tile-3)",
    dark: true
  }
};
function ProductTile({
  eyebrow,
  headline,
  tagline,
  primaryLabel = "Buy",
  secondaryLabel = "Learn more",
  onPrimary,
  onSecondary,
  image,
  imageAlt = "",
  children,
  mode = "light",
  align = "center",
  ...rest
}) {
  const s = SURFACE[mode] || SURFACE.light;
  const ink = s.dark ? "var(--color-body-on-dark)" : "var(--color-ink)";
  const sub = s.dark ? "var(--color-body-muted)" : "var(--color-ink-muted-80)";
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: s.bg,
      color: ink,
      padding: "var(--space-section) 24px",
      textAlign: align,
      display: "flex",
      flexDirection: "column",
      alignItems: align === "center" ? "center" : "flex-start",
      ...rest.style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-tagline-size)",
      fontWeight: "var(--type-tagline-weight)",
      letterSpacing: "var(--type-tagline-tracking)",
      color: "var(--color-primary)",
      marginBottom: "8px"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--type-display-lg-size)",
      fontWeight: "var(--type-display-lg-weight)",
      lineHeight: "var(--type-display-lg-leading)",
      letterSpacing: "var(--type-display-lg-tracking)",
      margin: 0
    }
  }, headline), tagline && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-lead-size)",
      fontWeight: "var(--type-lead-weight)",
      lineHeight: "var(--type-lead-leading)",
      letterSpacing: "var(--type-lead-tracking)",
      color: sub,
      margin: "8px 0 0",
      maxWidth: "640px"
    }
  }, tagline), (primaryLabel || secondaryLabel) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "24px",
      marginTop: "var(--space-lg)",
      justifyContent: align === "center" ? "center" : "flex-start"
    }
  }, secondaryLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    onClick: onSecondary
  }, secondaryLabel), primaryLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: onPrimary
  }, primaryLabel)), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      marginTop: "var(--space-xxl)",
      maxWidth: "100%",
      boxShadow: "var(--shadow-product)"
    }
  }), children);
}
Object.assign(__ds_scope, { ProductTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProductTile.jsx", error: String((e && e.message) || e) }); }

// components/cards/StoreCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StoreCard — the white utility card used in store & accessories grids.
 * 1px hairline, 18px radius, 24px padding, NO shadow (the product render
 * inside carries the one system shadow). Top: 1:1 image. Below: name,
 * price, and a blue text link.
 */

function StoreCard({
  image,
  imageAlt = "",
  name,
  price,
  linkLabel = "Buy",
  onLink,
  badge,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--color-canvas)",
      border: "1px solid var(--color-hairline)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-lg)",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      ...rest.style
    }
  }, rest), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-caption-size)",
      fontWeight: 600,
      letterSpacing: "var(--type-caption-tracking)",
      color: "#b14a00"
    }
  }, badge), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "1 / 1",
      borderRadius: "var(--radius-sm)",
      background: "var(--color-canvas-parchment)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      maxWidth: "78%",
      maxHeight: "78%",
      boxShadow: "var(--shadow-product)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-body-strong-size)",
      fontWeight: "var(--type-body-strong-weight)",
      letterSpacing: "var(--type-body-strong-tracking)",
      color: "var(--color-ink)"
    }
  }, name), price && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-body-size)",
      fontWeight: "var(--type-body-weight)",
      letterSpacing: "var(--type-body-tracking)",
      color: "var(--color-ink-muted-80)"
    }
  }, price), linkLabel && /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onLink && onLink(e);
    },
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-body-size)",
      letterSpacing: "var(--type-body-tracking)",
      color: "var(--color-primary)"
    }
  }, linkLabel));
}
Object.assign(__ds_scope, { StoreCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StoreCard.jsx", error: String((e && e.message) || e) }); }

// components/icon/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — minimal thin-stroke glyphs approximating SF Symbols.
 * Inherits color via `currentColor`. Apple's web UI is almost
 * icon-free; this set covers the few functional nav controls.
 */

const PATHS = {
  search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "4.4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10.4",
    y1: "10.4",
    x2: "14",
    y2: "14"
  })),
  bag: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4.2 5.2h7.6l.6 8.1a1 1 0 0 1-1 1.05H4.6a1 1 0 0 1-1-1.05l.6-8.1Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.9 5.2V4.3a2.1 2.1 0 0 1 4.2 0v.9"
  })),
  "chevron-right": /*#__PURE__*/React.createElement("path", {
    d: "M6 3.5 10.5 8 6 12.5"
  }),
  "chevron-left": /*#__PURE__*/React.createElement("path", {
    d: "M10 3.5 5.5 8 10 12.5"
  }),
  plus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "3.2",
    x2: "8",
    y2: "12.8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3.2",
    y1: "8",
    x2: "12.8",
    y2: "8"
  })),
  close: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "4",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "4",
    x2: "4",
    y2: "12"
  })),
  check: /*#__PURE__*/React.createElement("path", {
    d: "M3.4 8.4 6.4 11.4 12.6 4.8"
  })
};
function Icon({
  name,
  size = 16,
  strokeWidth = 1.1,
  style,
  ...rest
}) {
  const d = PATHS[name];
  if (!d) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 16 16",
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: "block",
      flex: "0 0 auto",
      ...style
    }
  }, rest), d);
}

/** AppleLogo — the one true brand mark; tints via currentColor. */
function AppleLogo({
  size = 16,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 814 1000",
    height: size,
    width: size * 814 / 1000,
    fill: "currentColor",
    "aria-label": "Apple",
    role: "img",
    style: {
      display: "block",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"
  }));
}
Object.assign(__ds_scope, { Icon, AppleLogo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — the circular control chip that floats over photography.
 * 44×44, translucent gray fill (~64% alpha), icon in ink, full radius.
 * Press = scale(0.95). Used for carousel controls, close, in-image controls.
 */

const CSS = `
.ads-iconbtn{
  appearance:none;border:0;cursor:pointer;display:inline-flex;align-items:center;
  justify-content:center;width:var(--touch-min);height:var(--touch-min);
  border-radius:var(--radius-full);background:var(--color-surface-chip-translucent);
  color:var(--color-ink);
  transition:transform var(--duration-press) var(--ease-standard);
  -webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);
}
.ads-iconbtn:active{transform:var(--press-scale);}
.ads-iconbtn:focus-visible{outline:2px solid var(--color-primary-focus);outline-offset:2px;}
.ads-iconbtn--solid{background:var(--color-ink);color:var(--color-body-on-dark);backdrop-filter:none;-webkit-backdrop-filter:none;}
`;
let injected = false;
function useStyle() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const tag = document.createElement("style");
  tag.id = "ads-iconbtn-style";
  tag.textContent = CSS;
  document.head.appendChild(tag);
}
function IconButton({
  icon,
  variant = "translucent",
  size = 18,
  "aria-label": ariaLabel,
  className = "",
  ...rest
}) {
  useStyle();
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `ads-iconbtn ads-iconbtn--${variant} ${className}`.trim(),
    "aria-label": ariaLabel
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size,
    strokeWidth: 1.4
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SearchInput — the accessories search field. White fill, 1px alpha
 * border, FULL pill radius (search shares the CTA pill grammar), 44px
 * tall, with a leading muted search glyph.
 */

function SearchInput({
  placeholder = "Search accessories",
  value,
  onChange,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      height: "44px",
      padding: "0 20px",
      background: "var(--color-canvas)",
      border: "1px solid var(--color-hairline-alpha)",
      borderRadius: "var(--radius-pill)",
      color: "var(--color-ink-muted-48)",
      ...rest.style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 15,
    strokeWidth: 1.2
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: "search",
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: {
      flex: 1,
      border: 0,
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-body-size)",
      letterSpacing: "var(--type-body-tracking)",
      color: "var(--color-ink)"
    }
  }, rest)));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/navigation/GlobalNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GlobalNav — the persistent ultra-thin black bar pinned to the top of
 * every page. True-black background, 44px tall, quiet 12px links, with a
 * right-aligned search + bag cluster. The only place pure black appears.
 */

function GlobalNav({
  items = ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "Entertainment", "Accessories", "Support"],
  onSearch,
  onBag,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      height: "var(--nav-height)",
      background: "var(--color-surface-black)",
      color: "var(--color-body-on-dark)",
      display: "flex",
      alignItems: "center",
      gap: "0",
      padding: "0 22px",
      ...rest.style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Apple",
    style: {
      color: "inherit",
      display: "flex",
      alignItems: "center",
      opacity: 0.9,
      marginRight: "8px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.AppleLogo, {
    size: 15
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      display: "flex",
      alignItems: "center",
      gap: "0",
      margin: 0,
      padding: 0,
      flex: 1,
      justifyContent: "space-around",
      maxWidth: "820px"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--color-body-on-dark)",
      opacity: 0.86,
      textDecoration: "none",
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-nav-link-size)",
      letterSpacing: "var(--type-nav-link-tracking)",
      lineHeight: 1,
      whiteSpace: "nowrap"
    }
  }, it)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      marginLeft: "8px",
      opacity: 0.86
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onSearch,
    "aria-label": "Search",
    style: iconBtn
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 15
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onBag,
    "aria-label": "Bag",
    style: iconBtn
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bag",
    size: 15
  }))));
}
const iconBtn = {
  appearance: "none",
  background: "transparent",
  border: 0,
  color: "var(--color-body-on-dark)",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  padding: 0
};
Object.assign(__ds_scope, { GlobalNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/GlobalNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SubNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SubNav — the surface-specific frosted nav that sticks below the global
 * nav. Parchment at 80% with backdrop-blur, 52px tall. Left: product
 * category name (tagline). Right: inline links ending in a primary CTA.
 */

function SubNav({
  category = "Store",
  links = ["Shop", "Bag", "Saved"],
  ctaLabel = "Buy",
  onCta,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "sticky",
      top: 0,
      height: "var(--subnav-height)",
      background: "rgba(245, 245, 247, 0.8)",
      WebkitBackdropFilter: "var(--blur-frosted)",
      backdropFilter: "var(--blur-frosted)",
      borderBottom: "1px solid var(--color-hairline-alpha)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px",
      zIndex: 10,
      ...rest.style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-tagline-size)",
      fontWeight: "var(--type-tagline-weight)",
      letterSpacing: "var(--type-tagline-tracking)",
      color: "var(--color-ink)"
    }
  }, category), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "26px"
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      display: "flex",
      gap: "26px",
      margin: 0,
      padding: 0
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--color-ink-muted-80)",
      textDecoration: "none",
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-button-utility-size)",
      letterSpacing: "var(--type-button-utility-tracking)"
    }
  }, l)))), ctaLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: onCta,
    style: {
      padding: "6px 16px",
      fontSize: "14px"
    }
  }, ctaLabel)));
}
Object.assign(__ds_scope, { SubNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SubNav.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ConfigChip = __ds_scope.ConfigChip;

__ds_ns.ProductTile = __ds_scope.ProductTile;

__ds_ns.StoreCard = __ds_scope.StoreCard;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.AppleLogo = __ds_scope.AppleLogo;

__ds_ns.GlobalNav = __ds_scope.GlobalNav;

__ds_ns.SubNav = __ds_scope.SubNav;

})();
