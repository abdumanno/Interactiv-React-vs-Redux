import Footer from "./footer";
import Header from "./header";
import Note from "./note";
const App = () => {
  return (
    <div
      style={{
        width: "99%",
        height: "98vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
        flexDirection: "column",
      }}
    >
      <div style={{ width: "100%" }}>
        <Header />
        <Note />
      </div>
      <Footer />
    </div>
  );
};

export default App;
