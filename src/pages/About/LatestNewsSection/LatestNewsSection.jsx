import React from "react";
import Container from "../../../components/Common/Container";

const LatestNewsSection = () => {
  const latestNewsData = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, tempora.",
      date: "23.03.2022",
      author_name: "John Doe",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
      title: "Dolor sit amet consectetur adipisicing elit.",
      text: "Dolor sit amet consectetur adipisicing elit. Praesentium, tempora.",
      date: "10.04.2022",
      author_name: "Jane Smith",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
      title: "Consectetur adipisicing elit. Praesentium, tempora.",
      text: "Consectetur adipisicing elit. Praesentium, tempora. Lorem ipsum dolor sit amet.",
      date: "15.05.2022",
      author_name: "Michael Johnson",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
      title: "Amet consectetur adipisicing elit. Praesentium, tempora.",
      text: "Amet consectetur adipisicing elit. Praesentium, tempora. Lorem ipsum dolor sit amet.",
      date: "01.06.2022",
      author_name: "Emily Davis",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
      title: "Tempora ipsum dolor sit amet consectetur adipisicing elit.",
      text: "Tempora ipsum dolor sit amet consectetur adipisicing elit. Praesentium, tempora.",
      date: "12.07.2022",
      author_name: "Chris Williams",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
      title: "Adipisicing elit. Tempora ipsum dolor sit amet consectetur.",
      text: "Adipisicing elit. Tempora ipsum dolor sit amet consectetur. Praesentium, tempora.",
      date: "25.08.2022",
      author_name: "Sarah Brown",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 my-16 text-center">
        Latest News
      </h1>
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestNewsData.map((newsItem) => (
            <article
              key={newsItem.id}
              className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
            >
              <img
                alt=""
                src={newsItem.img}
                className="h-56 w-full object-cover"
              />

              <div className="p-4 sm:p-6">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    {newsItem.title}
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  {newsItem.text}
                </p>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <p>{newsItem.author_name}</p>
                  <p>{newsItem.date}</p>
                </div>

                <a
                  href="#"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Find out more
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LatestNewsSection;
