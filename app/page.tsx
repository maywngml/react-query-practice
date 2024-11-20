'use client';
import { useQuery } from '@tanstack/react-query';

function Example() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then((res) =>
        res.json()
      ),
  });

  if (isLoading) return '로딩중...';

  if (error) return '에러가 발생했습니다: ' + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>
      <strong>✨ {data.stargazers_count}</strong>
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}

export default function Home() {
  return <Example />;
}
