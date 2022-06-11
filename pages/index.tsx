import { PrismaClient } from '@prisma/client';
import { Key } from 'react';

type PostType = {
  id: Key;
  title: String;
};

const Home = ({ posts }: { posts: PostType[] }) => {
  return (
    <div>
      {posts.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const posts = await prisma.inquiry.findMany();

  return {
    props: { posts },
  };
}
