// first we need to get state hooks from React
import { useEffect, useState } from "react";

export default function BlogList() {
  // then in side this function we have to set a default state, for when the component loads for the firs time
  // we call useState(defaultState); and give it default state, always set the default stat to null. got it
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // set loading to true by default, then when api finally finishes set it to false
  const [error, setError] = useState(null);
  /*async function fetchData () {
   * API URL: https://afdesign.co.za/wp-json/wp/v2/posts
   * 1. do API call inside useEffect
   * 2. store data in into the "blog" variable
   */
  const API_URL = "https://afdesign.co.za/wp-json/wp/v2/posts";

  useEffect(() => {
    /*
     * (() => {})();  this is an IIFE, Immediately Invoked Function Expression.
     */
    (async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPosts(data); // here we CALL the getBlog function and into its parameter we give it the DATA.
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false); // when aPI finishes setLoading = false, then the page will load.
      }
    })();
  }, []);

  // show loader while the API is fetching data, but there variable dont exist you say... lets make them now.
  if (loading) {
    return <div>Loading...</div>;
  }

  // if error show the user the error
  if (error) {
    return <div>Ooops please reload page, an error happened.</div>;
  }

  const renderPosts = posts.map((post) => {
    return console.log(post);
  });

  return (
    <>
      <h1>Blog list</h1>
      {renderPosts}
    </>
  );
}
