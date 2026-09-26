window.VOTERS_TEST = [
  {
    serial: "TEST-001",
    nameTelugu: "",
    nameEnglish: "",
    houseNo: "77-40-8-5",
    epic: "NKD3176906"
  },
  {
    serial: "TEST-002",
    nameTelugu: "",
    nameEnglish: "",
    houseNo: "77-55-5-9-10",
    epic: "NKD2692788"
  }
];

window.searchTestVoters = function (query) {
  const q = String(query || "").trim().toLowerCase();

  if (!q) return [];

  return window.VOTERS_TEST.filter(voter =>
    Object.values(voter).some(value =>
      String(value || "").toLowerCase().includes(q)
    )
  );
};
