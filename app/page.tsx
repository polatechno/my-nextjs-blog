import BlogCard from "@/components/BlogCard";

export interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostResponse {
  posts: [Post];
  total: number;
  skip: number;
  limit: number;
}

export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const fetchPosts = async (): Promise<PostResponse | null> => {
  try {
    const response = await fetch("https://dummyjson.com/posts?limit=10");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Caught exception: ${error}`);
  }
};

export default async function Home() {
  const postResponse = await fetchPosts();
  return (
    <div >
      {postResponse && postResponse.posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
}
