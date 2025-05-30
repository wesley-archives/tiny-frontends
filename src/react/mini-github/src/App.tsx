import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserProfilePage from './pages/UserProfilePage';
import RepoPage from './pages/RepoPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col gap-6 bg-gray-100'>
        <Header />
        <main className="flex-1 px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:username" element={<UserProfilePage />} />
            <Route path="/:username/:reponame" element={<RepoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
