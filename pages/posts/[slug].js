import { useRouter } from 'next/router';
import Link from 'next/link';
import { posts } from '../../posts/posts';

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;
  const post = posts.find(p => p.slug === slug);

  if (!post) return <p>Post not found</p>;

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <p>
        <Link href='/'>Back to home</Link>
      </p>
    </div>
  );
}
