import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { PostCard } from '../components';

export default component$(() => {
  const POSTS = [
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]

  return (
    <div className='flex flex-col items-center w-full p-4'>
      <h1 className="text-3xl font-bold m-10">
        Bem vindo a useReact
      </h1>

    {POSTS.map((post, index) => (
      <PostCard key={index} />
    ))}
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
