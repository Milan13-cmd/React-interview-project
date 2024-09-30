import React, { useEffect, useState } from "react";
import './scroll.css'

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  }
  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPer() {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );
    // How much scroll
    const Scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPosition((Scrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPer);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  // console.log(scrollPosition);

  if(error){
    return <div>Error! {error}</div>
  }

  if(loading){
    return <div>Loading...</div>;
  }

  return (
   
      <div className="top-container">
        <h1>Custom Scroll Indicators</h1>
        <div className="scroll-progress-tracker">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPosition}%` }}
          ></div>
        </div>
        <div className="data-container">
          {data && data.length > 0
            ? data.map((item) => <p key={item.id}>{item.title}</p>)
            : null}
        </div>
      </div>
 
  );
};

export default ScrollIndicator;
