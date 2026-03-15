const changes = [
  {
    version: "1.1.1",
    title: "BUTTON UPDATE",
    items: [
      "Buttons now have more properties."
    ]
  },
  {
    version: "1.1.2:0_12",
    title: "SCROLL UPDATE (10/3/26)",
    items: [
      "Websites are now scrollable.",
      "Scroll is unstable, especially in buttons.",
      "PS: 1.1.5:0_21 made scroll stable!"
    ]
  },
  {
    version: "1.1.3:0_15",
    title: "BAR UPDATE (10/3/26)",
    items: [
      "A loading bar has been added.",
      "Later was perfectionated"
    ]
  },
  {
    version: "1.1.4:0_17",
    title: "ARROW & UI UPDATE (12/3/26)",
    items: [
      "Added next/previous website navigation.",
      "Improved overall UI (preparing for tabs)."
    ]
  },
  {
    version: "1.1.5:0_21",
    title: "SCROLL FIX & UI IMPROVEMENTS (12/3/26)",
    items: [
      "Fixed double-scroll issues.",
      "Stabilized button scrolling.",
      "Improved loading bar behavior.",
      "Updated UI."
    ]
  },
  {
    version: "1.1.5:2_26",
    title: "SMALL IMPROVEMENTS & BUG FIXES (13/3/26)",
    items: [
      "Made search bar smaller and brighter",
      "Fixed next/previous website arrows"
    ]
  },
  {
    version: "1.2.0:0_27",
    title: "TABS UPDATE (13/3/26)",
    items: [
      "Added a basic tab system.",
      "Tabs can now be added and removed.",
      "Active tab is grey and includes a close button.",
      "Inactive tabs are white and have no close button.",
      "Each tab stores the current web's URL when switching.",
      "Tabs do NOT store scroll or internal web data yet."
    ]
  },
  {
    version: "1.2.1:0_28",
    title: "TABS UI POLISH (13/3/26)",
    items: [
      "Tabs now have rounded corners for a smoother look.",
      "Inactive tabs become slightly darker on hover for better feedback.",
      "Close buttons on tabs are now dark grey.",
      "Close buttons turn black on hover for better visibility.",
      "New tab button (+) now matches the tab style.",
      "New tab button has hover feedback for improved UX.",
      "Overall visual consistency of the tab bar has been improved."
    ]
  },
  {
    version: "1.2.2:2_35",
    title: "ORIGIN UPDATE (14/3/26)",
    items: [
      "Added the ORIGIN button under the Inspect button.",
      "ORIGIN shows all the properties the PML engine used to draw the web.",
      "Each element now has its own entry in the lists (size, color, bold, text, etc).",
      "Added a tab per element type inside ORIGIN.",
      "Useful for debugging how the page was rendered."
    ]
  },
  {
  version: "1.3.0:0_36",
  title: "PERFORMANCE & PSS UPDATE (14/3/26)",
  items: [
    "Improved overall performance of page rendering.",
    "Fixed an issue where the PSS was being executed twice.",
    "PSS now only runs on webs that actually use it.",
    "Webs with PSS now load much faster than before.",
    "Webs without PSS (like New tab) load almost instantly."
  ]
},
  {
  version: "1.3.1:0_37",
  title: "PSS SINGLE-PASS SYSTEM (14/3/26)",
  items: [
    "The PSS now executes only once per web instead of once per element.",
    "Base PSS properties are stored at load time and applied instantly.",
    "PML properties now override PSS values cleanly and efficiently.",
    "Massive performance boost: heavy pages load in ~7 seconds without Turbo.",
    "lastupdate.pml now loads instantly thanks to the new architecture."
  ]
},
  {
  version: "3.0.1:0_41",
  title: "PPP UPDATE (15/3/26)",
  items: [
    "Added PPP (PML PreProcessor).",
    "Added received.data to capture client input.",
    "Added data.contains.X.N for conditional logic.",
    "Added pml.return.* to generate PML dynamically.",
    "PPP can now return multiple PML lines.",
    "Internal improvements to Flux Server for PPP support."
  ]
}



];
