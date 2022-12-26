import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [datas, setdata] = useState([]);

  useEffect(() => {
    const Fetchdata = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
        });
        const data = await response.json();
        if (data) {
          //   console.log(data[0]);
          setdata(data);
        }
        return;
      } catch (error) {
        console.log("error");
      }
    };

    Fetchdata();
  }, [url]);
  return datas;
};

const Demo = () => {
  const datas = useFetch("https://fakestoreapi.com/products?limit=5");

  const some = datas.map((item) => {
    // console.log(item.title);
    return <p key={item.id}>{item.title}</p>;
  });
  console.log(datas);
  return (
    <div>
      <p>{some}</p>
    </div>
  );
};

export default Demo;
