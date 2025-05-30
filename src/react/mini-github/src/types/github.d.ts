export interface GitHubUser {
    login: string;
    avatar_url: string;
    name?: string;
    bio?: string;
    public_repos: number;
    followers: number;
    following: number;
}

export interface GitHubRepo {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    owner: {
        login: string;
        avatar_url: string;
    };
}
  