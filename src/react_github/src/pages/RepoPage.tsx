import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { marked } from 'marked';
import type { GitHubRepo } from '../types/github';

const RepoPage = () => {
    const { username, reponame } = useParams();
    const [readmeHtml, setReadmeHtml] = useState('');
    const [repoInfo, setRepoInfo] = useState<GitHubRepo>();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://api.github.com/repos/${username}/${reponame}`)
            .then((res) => res.json())
            .then(setRepoInfo);

        fetch(`https://api.github.com/repos/${username}/${reponame}/readme`, {
            headers: {
                Accept: 'application/vnd.github.v3.raw',
            },
        })
            .then((res) => res.text())
            .then(async (md) => {
                const html = await marked(md);
                setReadmeHtml(html as string);
            });
    }, [username, reponame]);

    return (
        <div className="min-h-screen p-6 flex justify-center">
            <div className="max-w-3xl w-full bg-white p-6 rounded shadow">
                {repoInfo && (
                    <>
                        <div
                            className="flex items-center gap-4 mb-6 cursor-pointer"
                            onClick={() => navigate(`/${repoInfo.owner.login}`)}
                        >
                            <img
                                src={repoInfo.owner.avatar_url}
                                alt={repoInfo.owner.login}
                                className="w-12 h-12 rounded-full"
                            />
                            <p className="text-lg text-blue-600 hover:underline">
                                {repoInfo.owner.login}
                            </p>
                        </div>

                        <h1 className="text-2xl font-bold">{repoInfo.full_name}</h1>
                        <p className="text-gray-600 mb-4">{repoInfo.description}</p>
                        <a
                            href={repoInfo.html_url}
                            target="_blank"
                            className="text-blue-500 mb-6 inline-block"
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                        </a>
                    </>
                )}

                <h2 className="text-xl font-semibold mb-2">README</h2>
                <div className="bg-gray-50 p-6">
                    <div
                        className="prose max-w-none flex flex-col gap-4"
                        dangerouslySetInnerHTML={{ __html: readmeHtml }}
                    />
                </div>
            </div>
        </div>
    );
};

export default RepoPage;
