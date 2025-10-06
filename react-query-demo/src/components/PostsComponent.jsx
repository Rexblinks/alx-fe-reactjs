import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};

export default function PostsComponent() {
  const { data, isLoading, isError, error, refetch } = useQuery('posts', fetchPosts);

  if (isLoading) return <p className="text-center mt-4">Loading posts...</p>;
  if (isError) return <p className="text-center mt-4 text-red-500">Error: {error.message}</p>;

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <button
        onClick={refetch}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Refetch Posts
      </button>
      <ul className="space-y-4">
        {data.map((post) => (
          <li key={post.id} className="p-4 border rounded shadow hover:shadow-lg transition">
            <h2 className="text-lg font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
