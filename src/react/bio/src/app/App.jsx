import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LinkList from "../components/LinkList";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto p-6 flex flex-col flex-1 items-center justify-start">
        <LinkList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
