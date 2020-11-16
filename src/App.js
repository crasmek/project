//const {getData} = require('./api/jsonPlaceholder');
import { GetDateTime } from './utils/time.js';


import React, { useState, useEffect } from 'react';
import './App.css';

import Item from './Item'; /*itay*/
import MenuTopProject from './MenuTopProject';
import TopSearch from './TopSearch';
import ItemDetailed from './ItemDetailed';
import AddItem from './AddItem.js';

function App() {
  let urlCurrentItem = "";

  const Images = [
    {
      url: "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/85f9780c8cdd1788d6395c8e66a66e37_NaN.jpeg"
    },
    {
      url: "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/f3efdde9ec46de903622c786cdc56761_NaN.jpeg"
    },
    {
      url: "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/7873028d4c447b54acaf4c62b6d39d0b_NaN.jpeg"
    },
    {
      url: "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/e528c151a24159280e74b475a16ec9d3_NaN.jpeg"
    },
    {
      url: "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/a60ab81ef3c83679c487e1398e8d3f03_NaN.jpeg"
    },
    {
      url: "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/171396bbfca06985b7867f75960678b4_NaN.jpeg"
    },
    {
      url: "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/f95b3e037f121a59e13a2cd43493fc1f_NaN.jpeg"
    },
    {
      url: "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/c66b96fab027abe04c574e9897411f33_NaN.jpeg"
    },
    {
      url: "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/498e2afa593814c9a0bdfa49630bb9ff_NaN.jpeg"
    },
    {
      url: "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/9c2751c1d4080cbd9e8030ecc2cd5b12_NaN.jpeg"
    }
  ]

  const ItemsDefault = [ // Hold an array which is list of people
    {
      ItemId: 1,
      id: 5,
      title: "Cheese Pancake test",
      LastUpdate: 0,
      PicId: 0,
      Pic: undefined
    }
  ]  // default test data

  //const [peopleState, setPeopleState] = useState((People=>{People.forEach(p => p.LastUpdate = GetDateTime());return People;})(People) );
  // use above example to set lastupdate
  const [Items, setItems] = useState(ItemsDefault);
  //const [IsMainPage, setMainPage] = useState(true);
  const [PageNumber, setPage] = useState(1);
  const [chosenItemImageUrl, setChosenImageUrl] = useState("");
  const [chosenTitle, setChosenTitle] = useState("");
  // need to get items from internet using fetch

  let BaseUrl = 'https://jsonplaceholder.typicode.com/';
  //let pPosts = fetch(`${BaseUrl}posts`);
  //let pPostsJson = pPosts.then(response => response.json());
  let GlobalItems = [];

  useEffect(async () => {
    //const jsonUsers = await getUsers();
    //setUsers(jsonUsers);
    let pPosts = fetch(`${BaseUrl}posts`);
    const PostsAllData = await pPosts;
    const PostsJson = await PostsAllData.json();
    GlobalItems = PostsJson.slice(0, 12);
    setItems(GlobalItems.map((i, index) => { return { ...i, Views: 0, PicUrl: "", PicId: index, LastUpdate: GetDateTime() } }));

  }, []);

  function AddItemToArray(NewItem) {
    // get highest id of current array
    Items.push({ Views: 0, id: (1000 + Items.length), PicId: (1000 + Items.length), LastUpdate: GetDateTime(), PicUrl: NewItem.PicUrl, title: NewItem.Title });
    const NewItems = [...Items];

    setItems(NewItems);
    setPage(1);  // back to main...


  }

  // let PostsJson = pPostsJson.then(response => {
  //   GlobalItems = response.slice(0, 12); // get 12 posts...
  //   console.log(GlobalItems);
  //   setItems(GlobalItems.map(i => { return { ...i, Views: 0 } }));
  // }
  // );


  function GoToNewItemPage() {
    //PageNumber=3;
    setPage(3);
    //console.log(`Page Number is ${PageNumber}`);
  }


  function changePageByState(item, imageUrl) {
    //    if (IsMainPage) {  // only update views if state is main page
    if (PageNumber == 1) {  // only update views if state is main page
      //url     
      setChosenImageUrl(imageUrl); // picture 
      console.log(`new chosen image url is ${imageUrl}`);
      item.Views++;
      item.LastUpdate=GetDateTime();
      console.log('item is:');
      console.log(item);
      setChosenTitle(item.title);

      const NewItems = Items.sort(function (a, b) { return b.Views - a.Views }).map(i => ({ ...i, Views: (i.Views), LastUpdate: i.LastUpdate }));
      console.log(NewItems);
      //debugger;
      setItems(NewItems);
    }
    //debugger;
    //setMainPage(!IsMainPage);  // flip pages
    if (PageNumber == 1)
      setPage(2);
    if (PageNumber == 2)
      setPage(1);
  }


  return (
    <>
      <MenuTopProject onClickMe={GoToNewItemPage} />

      <div className="container mt-3 hebrew App">
        {/* The actual recipe: */}
        {/* {!IsMainPage && */}
        {PageNumber == 2 &&
          <>
            <ItemDetailed title={chosenTitle} url={chosenItemImageUrl} Me={{}} onClickMe={changePageByState} />
          </>
        }

        {
          PageNumber == 3 &&
          <>
            <AddItem OnAddItem={AddItemToArray} />
          </>
        }
        <div className="row" >


        </div>


        {/* {IsMainPage && */}
        {PageNumber == 1 &&
          <>
            <TopSearch />

            <div className="card-deck" >

              <div className="row flex-grow-1" >
                {
                  //console.log(IsMainPage)
                  Items.map((i, index) => <Item PicUrl={i.PicUrl} LastUpdate={i.LastUpdate} Me={i} Views={i.Views} onClickMe={changePageByState} key={index} url={Images[i.PicId % Images.length].url} Itemname={i.title} email='itaysen@gmail.com' />)
                }
              </div>

            </div>
          </>
        }
      </div>
    </>

  );
}

export default App;
