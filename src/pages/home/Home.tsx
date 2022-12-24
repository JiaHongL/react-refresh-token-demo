import React from "react";

function Home() {
  const postList = [
    {
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi",
      body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit  ...",
      cover: "https://loremflickr.com/536/354/dog?lock=4",
      tags: ["ClassA", "ClassB"],
      user: {
        id: 71,
        username: "omarsland1y",
        avatar: "https://loremflickr.com/80/80/girl?lock=18",
      },
    },
    {
      id: 2,
      title:
        "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
      body: "suscipit nam nisi quo aperiam aut asperiores eos fugit maiores voluptatibus quia ...",
      cover: "https://loremflickr.com/536/354/tree?lock=47",
      tags: ["ClassA", "ClassC"],
      user: {
        id: 720,
        username: "cmasurel1x",
        avatar: "https://loremflickr.com/80/80/girl?lock=66",
      },
    },
    {
      id: 3,
      title: "dolorum ut in voluptas mollitia et saepe quo animi",
      body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque iste corrupti r ...",
      cover: "https://loremflickr.com/536/354/apple?lock=78",
      tags: ["ClassA", "ClassD"],
      user: {
        id: 701,
        username: "marausk",
        avatar: "https://loremflickr.com/80/80/girl?lock=3",
      },
    },
    {
      id: 4,
      title: "aut dolorum aut sunt aut facere repellat provident ",
      body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit  ...",
      cover: "https://loremflickr.com/536/354/cat?lock=4",
      tags: ["ClassA", "ClassB"],
      user: {
        id: 76,
        username: "roorkuse",
        avatar: "https://loremflickr.com/80/80/man?lock=11",
      },
    },
    {
      id: 5,
      title: "velit dolorum velit sint suscipit perspiciatis velit",
      body: "suscipit nam nisi quo aperiam aut asperiores eos fugit maiores voluptatibus quia ...",
      cover: "https://loremflickr.com/536/354/bird?lock=100",
      tags: ["ClassA", "ClassC"],
      user: {
        id: 11,
        username: "sanalow",
        avatar: "https://loremflickr.com/80/80/human?lock=100",
      },
    },
    {
      id: 6,
      title:
        "corrupti animi voluptas dolorum ut in voluptas mollitia et saepe quo animi",
      body: "corrupti aut dicta possimus sint mollitia voluptas commodi quo doloremque iste c ...",
      cover: "https://loremflickr.com/536/354/animal?lock=20",
      tags: ["ClassA", "ClassD"],
      user: {
        id: 3,
        username: "syl",
        avatar: "https://loremflickr.com/80/80/girl?lock=311",
      },
    },
    {
      id: 7,
      title: "commodi dolorum ut in voluptas mollitia et saepe quo animi",
      body: "commodi aut dicta possimus sint mollitia voluptas commodi quo doloremque iste co ...",
      cover: "https://loremflickr.com/536/354/rock?lock=1",
      tags: ["ClassA", "ClassD"],
      user: {
        id: 70,
        username: "querlrs",
        avatar: "https://loremflickr.com/80/80/lady?lock=99",
      },
    },
    {
      id: 8,
      title: "reprehenderit aut dolorum aut sunt aut facere repellat ",
      body: "reprehenderit quia et suscipit suscipit recusandae consequuntur expedita et cum  ...",
      cover: "https://loremflickr.com/536/354/sheep?lock=18",
      tags: ["ClassA", "ClassB"],
      user: {
        id: 70,
        username: "ublar",
        avatar: "https://loremflickr.com/80/80/mr?lock=88",
      },
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
      {postList.map((post) => (
        <div className="mx-auto flex max-w-xl overflow-hidden rounded-lg bg-white shadow-md">
          <div className="flex w-full items-center">
            <div className="w-full h-full">
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
                    {post.user.username}
                  </div>
                  <div className="mt-1 flex w-full">
                    <div className="text-xs font-thin text-gray-400">
                      • 30 seconds ago
                    </div>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer">
                <div className="border-b border-gray-100"></div>
                <div className="mx-3 mb-7 mt-6 px-2 text-sm font-medium text-gray-400">
                  <img className="rounded" src={post.cover} alt="" />
                </div>
                <div className="mx-3 mb-2 px-2 text-lg font-semibold text-gray-600">
                  {post.title}
                </div>
                <div className="mx-3 mb-6 px-2 text-sm font-thin text-gray-500">
                  {post.body}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
