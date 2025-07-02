import Link from 'next/link';
import { posts } from '../posts/posts';

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>Furigana Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
