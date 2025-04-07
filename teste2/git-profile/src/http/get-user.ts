type UserResponse = {
  name: string,
  bio: string
  image: string

}

export async function getUserGit(): Promise<UserResponse> {
  const response = await fetch('https://api.github.com/users/leonardo-sarda')
  const data = await response.json()
  return{
    name: data.name,
    bio: data.bio,
    image: data.image
  }

  
}