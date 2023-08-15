import { Dialog } from "./Dialog";

export interface GithubUserProps {
  username: string;
}

export async function GithubUser({ username }: GithubUserProps) {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    next: {
      revalidate: 10, // cache
    },
  });
  const user = await response.json();

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <>
      <h1>{JSON.stringify(user)}</h1>
      <Dialog />
    </>
  );
}
