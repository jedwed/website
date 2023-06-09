import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import PostCard from '@/components/post-card';
import PageWrapper from '@/components/page-wrapper';

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <PageWrapper>
      <section>
        <h1 className="mb-4 text-center">Blog Posts (eek it&apos;s a WIP)</h1>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </section>
    </PageWrapper>
  );
}
