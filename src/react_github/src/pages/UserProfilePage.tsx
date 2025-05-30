import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { GitHubUser, GitHubRepo } from '../types/github';
import RepoCard from '../components/RepoCard';
import Pagination from '../components/Pagination';

const UserProfilePage = () => {
    const { username } = useParams();
    const [user, setUser] = useState<GitHubUser | null>(null);
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [page, setPage] = useState(1);
    const [hasNext, setHasNext] = useState(false);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((res) => res.json())
            .then(setUser);
    }, [username]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos?per_page=10&page=${page}`)
            .then((res) => {
                setHasNext(res.headers.get('link')?.includes('rel="next"') ?? false);
                return res.json();
            })
            .then(setRepos);
    }, [username, page]);

    if (!user) return <p className="text-center mt-10">Loading...</p>;

    return (
        <div className="min-h-screen p-6">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
                <div className="text-center mb-6">
                    <img src={user.avatar_url} className="w-24 h-24 mx-auto rounded-full" />
                    <h2 className="text-xl mt-2 font-bold">{user.name || user.login}</h2>
                    <p className="text-gray-600">{user.bio}</p>
                </div>

                <h3 className="text-lg font-semibold mb-4">Repositories</h3>
                <ul className="space-y-3">
                    {repos.map((repo) => (
                        <RepoCard key={repo.id} repo={repo} />
                    ))}
                </ul>

                <Pagination
                    page={page}
                    hasNext={hasNext}
                    onPrev={() => setPage((p) => p - 1)}
                    onNext={() => setPage((p) => p + 1)}
                />
            </div>
        </div>
    );
};

export default UserProfilePage;
