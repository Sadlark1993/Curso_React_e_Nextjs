export const loadPosts = async () =>{
  //returns a response json(array-of-objects)
  const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts'); 
  const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
  const postsObj = await posts.json();
  const photosObj = await photos.json();

  //inserts the photos urls in the objects of the array of objects.
  const arrayPosts = postsObj.map((post, index)=>{
    return {...post, photo: photosObj[index].url}; //array of objects.
  });

  return arrayPosts;

}