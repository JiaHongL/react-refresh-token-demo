import React from 'react';

function Post() {

  const post = {
    "id":1,
    "postId":11,
    "title":"sunt aut facere repellat provident occaecati excepturi",
    "body":"quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architectoLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pretium dolor, vel pulvinar eros facilisis non. Mauris lorem orci, porta fringilla pulvinar eget, hendrerit eget eros. Aenean tempus, metus et euismod blandit, nulla leo tincidunt ipsum, nec euismod metus magna sed erat. Duis quis mauris mollis, hendrerit libero vel, venenatis metus. Nulla varius lectus quis lorem dignissim, eu ornare nisl ultrices. Nulla et nibh vel erat convallis imperdiet non at odio. Integer et urna at nunc dignissim lobortis.\n  \nCras ornare, nibh nec blandit pellentesque, magna arcu convallis mauris, eu ultricies ante nulla id risus. Curabitur tempor ante magna, eget efficitur odio iaculis vitae. Phasellus quam risus, blandit eget dapibus eget, molestie non tellus. Donec quis metus blandit, iaculis nisi sed, facilisis augue. Duis vel ante dolor. In lorem mauris, interdum ac faucibus vitae, malesuada id turpis. Curabitur non tempor massa, eget porta risus. Integer interdum mi consectetur leo egestas, non vestibulum metus mattis. Morbi pellentesque venenatis tellus ut tincidunt. Aenean elementum, sem ac commodo consequat, neque lorem aliquet ligula, at placerat erat neque in elit.\n  \nEtiam in fermentum lectus, eget laoreet urna. Nullam hendrerit rhoncus interdum. Suspendisse congue risus in velit imperdiet accumsan. Quisque in rutrum augue. Ut interdum convallis enim et mattis. Morbi a aliquet massa. Suspendisse at sollicitudin ligula. In a sem in velit laoreet elementum ut at enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum sit amet tellus ut tincidunt. Aliquam sodales magna non lectus molestie, venenatis fermentum tortor sollicitudin. Cras ornare vehicula mollis. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque et ligula at ipsum egestas fringilla ut sed mauris. Integer a dapibus arcu, ac vehicula magna.\n  \nPellentesque mattis ante et ligula ultricies venenatis. Suspendisse cursus mattis elementum. Nam lobortis ac turpis ut hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum sem erat, at iaculis urna tempor ac. Etiam et diam ut elit vulputate blandit. Duis venenatis posuere euismod. Suspendisse eu ultrices lacus. Pellentesque a finibus massa. Phasellus lacinia nisi ut dictum luctus. Quisque at pellentesque eros.\n  \nDonec non odio pulvinar, pellentesque lacus in, tristique tortor. Praesent lacinia ultrices risus, non convallis felis. Mauris egestas, massa vel aliquam luctus, augue sem vulputate mauris, viverra consequat nulla magna at lorem. Fusce non purus ante. Phasellus a quam suscipit, aliquam lacus in, pellentesque arcu. Suspendisse pretium metus egestas, dignissim nisi a, pulvinar purus. Donec at gravida libero, quis posuere massa. Pellentesque aliquet egestas tortor.",
    "tags":[
       "classNameA",
       "classNameB"
    ],
    "cover":"https://loremflickr.com/536/354/dog?lock=4",
    "user":{
       "id":71,
       "username":"omarsland1y",
       "avatar":"https://loremflickr.com/80/80/girl?lock=18"
    }
 };

 const comments = [
  {
     "id":1,
     "body":"This is some awesome thinking! Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
     "postId":11,
     "user":{
        "id":63,
        "username":"eburras1q",
        "avatar":"https://loremflickr.com/80/80/people?lock=100"
     }
  },
  {
     "id":2,
     "body":"What terrific math skills you\"re showing! Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
     "postId":11,
     "user":{
        "id":71,
        "username":"omarsland1y",
        "avatar":"https://loremflickr.com/80/80/girl?lock=34"
     }
  }
];



  return (
  <div>
    <div className="my-3 font-bold text-center text-4xl">
      { post.title }
    </div>

    <p style={{ whiteSpace: 'pre-wrap' }}>
      {post.body}
    </p>

    <div className="flex justify-end">
      <div className="mx-3 mt-2 flex flex-row px-2 py-3">
        <div className="h-auto w-auto rounded-full border-2">
          <img
            className="h-12 w-12 rounded-full object-cover shadow"
            alt="User avatar"
            src={post.user.avatar}
          />
        </div>
        <div className="mb-2 ml-4 mt-1 flex flex-col">
          <div className="text-sm font-semibold text-gray-600">
            {post.user.username }
          </div>
          <div className="mt-1 flex w-full">
            <div className="text-xs font-thin text-gray-400">
              2022/04/01
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <hr className="border-b-1 border-gray-300 my-4"> */}

    <div className="w-full">
      <h3 className="mb-5 text-2xl">Comments</h3>

      <div className="grid w-full gap-2 px-4">
      {
        comments.map((comment)=>

          <div className="flex">
            <div className="flex justify-center items-center flex-shrink-0">
              <img
                className="h-8 w-8 rounded-full sm:h-10 sm:w-10"
                src={comment.user.avatar }
                alt=""
              />
            </div>
            <div
              className="flex-1 rounded-lg border px-4 py-2 leading-relaxed sm:px-6 sm:py-4"
            >
              <strong>{
                comment.user.username
              }</strong>
              <p className="text-sm">
                {
                  comment.body
                }
              </p>
            </div>
          </div>
        )
      }
      </div>
    </div>
  </div>
  );

}

export default Post;
