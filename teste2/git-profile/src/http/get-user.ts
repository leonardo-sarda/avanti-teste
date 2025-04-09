type UserResponse = {
	name: string;
	bio: string;
	avatar_url: string | null;
};

export async function getUserGit(username: string): Promise<UserResponse> {
	const response = await fetch(`https://api.github.com/users/${username}`);
	const data = await response.json();
	return {
		name: data.name,
		bio: data.bio,
		avatar_url: data.avatar_url,
	};
}
