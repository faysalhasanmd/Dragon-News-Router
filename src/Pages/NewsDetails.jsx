import { useEffect, useState } from "react";
import Header from "../Components/Header";
import RightAside from "../OutletPages/RightAside";
import NewsDetailsCard from "./NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  //   console.log(data);
  const { id } = useParams();
  const [newsData, setNewsData] = useState({});
  // console.log(newsData);

  useEffect(() => {
    const newData = data.find((singleData) => singleData.id == id);
    setNewsData(newData);
  }, [data, id]);

  return (
    <div>
      <header className="py-5">
        <Header></Header>
      </header>
      <section className="w-11/12 mx-auto grid grid-cols-12 gap-3.5">
        <div className="col-span-9">
          <NewsDetailsCard newsData={newsData}></NewsDetailsCard>
        </div>
        <div className="col-span-3">
          <RightAside></RightAside>
        </div>
      </section>
    </div>
  );
};

export default NewsDetails;
