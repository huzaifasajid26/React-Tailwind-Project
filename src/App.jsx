import Section1 from "./components/Section1/Section1";

const App = () => {
  const users = [
    {
      img: "/Card 1 Pic.jpg",
      button: "1",
      intro:
        "A confident mindset creates powerful opportunities, and success starts when you believe in your abilities and take consistent action daily.",
      tag: "Staisfied",
    },
    {
      img: "/Card 2 Pic.jpg",
      button: "2",
      intro:
        "Even small progress leads to big achievements; stay focused, trust your journey, and never stop improving yourself every single day.",
      tag: "Underserved",
    },
    {
      img: "/Card 3 Pic.jpg",
      button: "3",
      intro:
        "Your potential is far greater than your challenges; keep learning, stay committed, and push forward with determination and strong self-belief.",
      tag: "Underbanked",
    },
  ];

  return (
    <div>
      <Section1 users={users} />
    </div>
  );
};

export default App;
