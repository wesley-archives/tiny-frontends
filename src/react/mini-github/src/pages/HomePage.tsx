/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, type FormEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import type { GitHubRepo } from '../types/github';

const HomePage = () => {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [page, setPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [error, setError] = useState('');

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const query = searchParams.get('q') || '';

    const searchRepos = async () => {
        if (!query.trim()) return;

        try {
            const res = await fetch(
                `https://api.github.com/search/repositories?q=${query}&per_page=10&page=${page}`
            );
            if (!res.ok) throw new Error('Error fetching repositories');
            const data = await res.json();
            setRepos(data.items);
            setTotalCount(data.total_count);
            setError('');
        } catch (err: any) {
            setError(err.message);
        }
    };

    useEffect(() => {
        if (query) {
            searchRepos();
        } else {
            setRepos([]);
            setTotalCount(0);
        }
    }, [query, page]);

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const input = form.elements.namedItem('repo-search') as HTMLInputElement;
        const searchValue = input.value.trim();
        if (searchValue) {
            setSearchParams({ q: searchValue });
            setPage(1);
        }
    };

    return (
        <div className="min-h-screen p-6">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
                <h1 className="text-2xl font-bold mb-4">GitHub Repository Search</h1>

                <form className="flex gap-2 mb-4" onSubmit={handleSearch}>
                    <input
                        type="text"
                        name="repo-search"
                        defaultValue={query}
                        placeholder="Search repositories..."
                        className="flex-1 p-2 border rounded"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Search
                    </button>
                </form>

                {error && <p className="text-red-500">{error}</p>}

                <ul className="space-y-4">
                    {repos.map((repo) => (
                        <li
                            key={repo.id}
                            className="p-4 border rounded hover:bg-gray-50 cursor-pointer"
                            onClick={() => navigate(`/${repo.owner.login}/${repo.name}`)}
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={repo.owner.avatar_url}
                                    alt={repo.owner.login}
                                    className="w-12 h-12 rounded-full cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`/${repo.owner.login}`);
                                    }}
                                />
                                <div>
                                    <h2 className="font-semibold text-lg">{repo.name}</h2>
                                    <p className="text-sm text-neutral-600">{repo.description}</p>
                                    <p className="text-xs text-neutral-500">⭐ {repo.stargazers_count}</p>
                                    <p
                                        className="text-blue-500 text-sm cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate(`/${repo.owner.login}`);
                                        }}
                                    >
                                        {repo.owner.login}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                {repos.length > 0 && (
                    <div className="flex justify-between mt-6">
                        <button
                            disabled={page === 1}
                            onClick={() => setPage((p) => p - 1)}
                            className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
                        >
                            Prev
                        </button>
                        <button
                            disabled={page * 10 >= totalCount}
                            onClick={() => setPage((p) => p + 1)}
                            className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;
