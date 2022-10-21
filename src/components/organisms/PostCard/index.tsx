import { component$ } from '@builder.io/qwik';

export const PostCard = component$(() => {
    return (
      <div className="shadow p-4 mb-8" style={{
        maxWidth: '560px',
      }}>
        <img className="mb-6" src="https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png" />
        <h3 className="text-lg font-bold leading-6 text-gray-900 mb-4">Lorem ipsum dolor sit amet</h3>
        <p> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio doloremque aliquid debitis, 
            adipisci quidem eveniet dolores placeat libero facere sunt eaque magnam ipsam odio totam? 
            Quisquam asperiores assumenda dolorem minus.
        </p>
      </div>
    );
});