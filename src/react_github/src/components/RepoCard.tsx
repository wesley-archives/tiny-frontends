import { useNavigate } from 'react-router-dom';
import type { GitHubRepo } from '../types/github';

interface Props {
    repo: GitHubRepo;
}

const RepoCard = ({ repo }: Props) => {
    const navigate = useNavigate();

    return (
        <div
            className="p-4 border rounded hover:bg-gray-50 cursor-pointer"
            onClick={() => navigate(`/${repo.owner.login}/${repo.name}`)}
        >
            <div className="flex items-center gap-4">
                <img
                    src={repo.owner.avatar_url}
                    alt={repo.owner.login}
                    className="w-12 h-12 rounded-full"
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/${repo.owner.login}`);
                    }}
                />
                <div>
                    <h2 className="font-semibold text-lg">{repo.name}</h2>
                    <p className="text-sm text-neutral-600">{repo.description}</p>
                    <p className="text-xs text-neutral-500">⭐ {repo.stargazers_count}</p>
                </div>
            </div>
        </div>
    );
};

export default RepoCard;
