// Combine and shuffle two arrays
const shuffle = () => {
  const assets = [
    {
      image:
        "https://ca.slack-edge.com/E04AL0V0ASF-U01CNPYGL3S-5ef316afbed1-512",
    },
    {
      image: "https://ca.slack-edge.com/E04AL0V0ASF-UT751KP4P-11e9b56a0d7f-512",
    },
    {
      image: "https://ca.slack-edge.com/E04AL0V0ASF-U1YHJK5AQ-81d75851e692-512",
    },
    {
      image: "https://ca.slack-edge.com/E04AL0V0ASF-U1YHP517A-758ae498aeea-512",
    },
    {
      image:
        "https://ca.slack-edge.com/E04AL0V0ASF-U01C1TYAJ7K-178123c57937-512",
    },
    {
      image:
        "https://ca.slack-edge.com/E04AL0V0ASF-U01FR1HF8JU-6ce7f1667ea3-512",
    },
    {
      image: "https://ca.slack-edge.com/E04AL0V0ASF-UQUDNHX43-ea96890a0583-512",
    },
    {
      image:
        "https://ca.slack-edge.com/E04AL0V0ASF-U020CTVFUF5-c50343fb5141-512",
    },
    {
      image: "https://ca.slack-edge.com/E04AL0V0ASF-U1D79HS0Z-9f30fdcffa00-512",
    },
    {
      image:
        "https://ca.slack-edge.com/E04AL0V0ASF-U01C7M8A5L2-7e7539851f36-512",
    },
    {
      image:
        "https://ca.slack-edge.com/E04AL0V0ASF-U028XK47R4N-g5b0bbc14c4d-512",
    },
    {
      image:
        "https://ca.slack-edge.com/E04AL0V0ASF-U03HXLFKFAT-ef31653c08a6-512",
    },
    {
      image:
        "https://ca.slack-edge.com/E04AL0V0ASF-U02SGLE5NG5-g160bc63483e-512",
    },
    {
      image:
        "https://ca.slack-edge.com/E04AL0V0ASF-U01MZMJU83F-b23adfb97e73-512",
    },
  ];
  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;
