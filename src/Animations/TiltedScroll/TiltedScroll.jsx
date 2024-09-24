import "./TiltedScroll.css";

const TiltedScroll = () => {
  const items = [
    { id: "1", text: "Secure Transactions" },
    { id: "2", text: "Flexible Payment Options" },
    { id: "3", text: "Transparent Pricing" },
    { id: "4", text: "Customer Support" },
    { id: "5", text: "Focusing on Security" },
    { id: "6", text: "Highlighting Reliability" },
    // { id: "7", text: "Yet Another Item" },
    // { id: "8", text: "Yet Another Item" },
  ];

  return (
    <div className="container1">
      <div className="inner-container1">
        <div className="scroll-grid1">
          {items.map((item) => (
            <div key={item.id} className="grid-item1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon1"
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <p className="item-text1">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TiltedScroll;
