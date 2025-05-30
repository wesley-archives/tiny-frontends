import { type FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (search.trim()) {
            navigate(`/?q=${encodeURIComponent(search.trim())}`);
        }
    };

    return (
        <header className="bg-white shadow px-6 py-4 flex items-center justify-between sticky top-0">
            <h1
                onClick={() => navigate('/')}
                className="text-xl font-bold text-blue-600 cursor-pointer"
            >
                GitHub Explorer
            </h1>
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    type="text"
                    name="repo-search"
                    placeholder="Search repos..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border p-2 rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Search
                </button>
            </form>
        </header>
    );
};

export default Header;
