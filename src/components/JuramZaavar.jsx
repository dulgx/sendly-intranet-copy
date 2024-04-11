import folderIcon from "../assets/folder.png";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Зээлийн үйл ажиллагаа",
    link: "/juramzaavar/item-1",
  },
  {
    id: 2,
    title: "Зээлийн үйл ажиллагааны чиглэл, зөвлөмж ",
    link: "/juramzaavar/item-2",
  },
  {
    id: 3,
    title: "НББ ажиллагаа ",
    link: "/juramzaavar/item-3",
  },
  {
    id: 4,
    title: " Салбарын үйл ажиллагааны журам",
    link: "/juramzaavar/item-4",
  },
  {
    id: 5,
    title: "Хүний нөөцийн журам",
    link: "/juramzaavar/item-5",
  },
  {
    id: 6,
    title: "Албан бичиг",
    link: "/juramzaavar/item-6",
  },
  {
    id: 7,
    title: "Хамтран ажиллах гэрээ",
    link: "/juramzaavar/item-7",
  },
  {
    id: 8,
    title: "Бүтээгдэхүүн үйлчигээний ерөнхий нөхцөл",
    link: "/juramzaavar/item-8",
  },
];

export default function JuramZaavar() {
  return (
    <>
      <div className="bg-white sm:pb-2 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 pt-10  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-stone-100  flex max-w-xl flex-col items-start justify-between p-5 rounded-xl shadow hover:bg-sky-50 cursor-pointer"
            >
              <div className="group relative flex flex-row items-center">
                <img src={folderIcon} alt="folder" className="w-14" />
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 flex ml-8">
                  <Link to={post.link}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
