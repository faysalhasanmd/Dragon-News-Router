import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "./NewsCard";

const Categories = () => {
  const { id } = useParams();
  const resData = useLoaderData();
  const [news, setNews] = useState([]);
  console.log(news);

  useEffect(() => {
    if (id == 0) {
      return setNews(resData);
    } else if (id == 1) {
      const todayData = resData.filter(
        (today) => today.others.is_today_pick == true
      );
      setNews(todayData);
    } else {
      const filterData = resData.filter((data) => data.category_id == id);
      setNews(filterData);
    }
  }, [resData, id]);

  return (
    <div>
      <div>
        Categories{" "}
        <span className="text-rose-600 font-semibold">{news.length}</span>
      </div>
      <div>
        {news.map((card) => (
          <NewsCard key={card.id} card={card}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
