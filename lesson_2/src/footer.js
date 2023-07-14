// Scope Element

const date = new Date().getFullYear();

//JSX Element
const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#e2e8f0",
      }}
    >
      <p>Copyright Reversed {date}</p>;
    </div>
  );
};

export default Footer;
