import { findAllByTitle } from '@testing-library/react';
import axios from 'axios';

const keys = {
    appId: 'a2c14a78',  /* itay's keys */
    appKey: '5ca8aaa3267d554cd550863142c63a53'
};

const ApiToken = 'f058958a-d8bd-47cc-95d7-7ecf98610e47';

function GetTommorowDate() {
    var date = new Date();
    date.setDate(date.getDate() + 1)


    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();

    var dateStrTommorow = yyyy + '/' + mm + '/' + dd;
    return dateStrTommorow;
}

function GetStartDate() {
    var date = new Date();
    var StartYear = date.getFullYear();
    var mm = date.getMonth();
    if (mm < 7)  // 7 is august
        StartYear = StartYear - 1;  // b/c count is from previous auguest
    var startDate = StartYear + '/08/01'
    return startDate;
}

const GetRainSpecificStation = async (stationId, channelId) => {
    const FullImsUrl = GetRainUrl(stationId, channelId);
    function json(response) {
        return response.json()
    }
    const res = await axios.get('https://cors-anywhere.herokuapp.com/' + FullImsUrl, {
        headers: {
            'Authorization': `ApiToken ${ApiToken}`
        }
    });
        //.then((res) => {
            //console.log(res.data);
            const AllData = res.data;
            console.log('https://cors-anywhere.herokuapp.com/' + FullImsUrl);
            console.log(AllData);
            const FirstResult = AllData.data[0]; // twice data
            console.log('FirstResult');
            console.log(FirstResult);

            console.log(FirstResult.channels[0].name);
            console.log(FirstResult.channels[0].value);
            // now one can do map.
            //.reduce((a, b) => a + b, 0)
            //[].reduce()

            var total = 0.0;
            AllData.data.forEach(i => {
                if (i.channels[0].name.toLowerCase() == 'rain')
                    if (i.channels[0].status == 1)
                        if (i.channels[0].value > 0)
                {

                    if (i.channels[0].value < 1000) {
                        console.log('rain per time span:');
                        console.log(i.datetime);
                        console.log(i.channels[0]);
                        console.log(i.channels[0].value);
                        total += i.channels[0].value;
                        }


                }

            });
            console.log(total.toFixed(2));


            //const TotalRain=AllData.data.reduce((a,b)=>{a.channels[0].value+b.channels[0].value,0});
            //console.log(TotalRain);



        // })
        // .catch((error) => {
        //     console.log('new itay error total rain sunday december 2020');
        //     console.error(error)
        // })

    console.log('after rain axios');
    return total.toFixed(2);

}

function GetRainUrl(stationId, channelId) {
    const RainTillTodayUrl = `${BaseUrl}/${stationId}/data/${channelId}?from=${GetStartDate()}&to=${GetTommorowDate()}`;
    return RainTillTodayUrl;
}


const BaseUrl = 'https://api.ims.gov.il/v1/envista/stations';

const getStations = async () => {
    // const {data} = await axios.get(`https://api.ims.gov.il/v1/envista/stations`,{
    //     headers: {
    //         Authorization: 'ApiToken f058958a-d8bd-47cc-95d7-7ecf98610e47' //the token is a variable which holds the token
    //     }
    //    });

    function json(response) {
        return response.json()
    }
    /*
     headers: {
       Authorization: 'Bearer ' + token //the token is a variable which holds the token
     }
    })
    */


    //const ApiToken = 'f058958a-d8bd-47cc-95d7-7ecf98610e47';

    // fetch(url, {
    //     method: 'get',
    //     withCredentials: true,
    //     credentials: 'include',
    //     //Authorization: 'ApiToken ' + ApiToken,
    //     headers: {
    //         'Origin': '',
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Methods': 'DELETE, GET, OPTIONS, PATCH, POST, PUT',
    //         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    //         mode: 'cors',
    //         Authorization: 'ApiToken ' + ApiToken,
    //         //itay: 'stam',
    //         'Content-Type': 'application/json'
    //     }
    // })
    //     .then(json)
    //     .then(function (data) {
    //         console.log('Request succeeded with JSON response', data);
    //         return false;
    //     })
    //     .catch(function (error) {
    //         console.log('Request failed', error);
    //         return true;
    //     });
    // return true;


    const res=await axios.get('https://cors-anywhere.herokuapp.com/' + BaseUrl, {
        headers: {
            //'Access-Control-Allow-Origin': 'https://api.ims.gov.il',      
            //'User-Agent': 'Fiddler',
            //'Access-Control-Allow-Origin': url,      
            'Authorization': `ApiToken ${ApiToken}`
            // ,
            //         'Access-Control-Allow-Methods': 'DELETE, GET, OPTIONS, PATCH, POST, PUT',
            //         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        }
    });


      //  .then((res) => {

            //alert(res);
            //alert(res.data);
            // filter inactive .
            const active=res.data.filter(i=>i.active);


            //console.log(res.data);
            console.log(active);

//            const r=active.map(({name:title,stationId:PicId,stationId:stationId})=> 
            const r=active.map(({name:title,stationId:PicId,monitors})=> 
                {
                    let ch=0;
                 const element=monitors.find(i=>i.name.toLowerCase()=='rain');
                 console.log(element);
                 if (element)
                  ch= element.channelId;
                 console.log(monitors);

                 return {title,PicId,stationId:PicId,channelId:ch};
                 //return {title,PicId,stationId};
                }
                );
            console.log(r);
            console.log(`This is total rainfull url for haifa technion ${GetRainUrl(43, 20)}`);
       // })
        // .catch((error) => {
        //     console.log('new itay error sunday december 2020');
        //     console.error(error)
        // })

    console.log('after axios');


    //    const {data} = await axios({
    //     method: 'get',
    //     mode: 'no-cors',
    //     url: 'https://api.ims.gov.il/v1/envista/stations',
    //     withCredentials: true,
    //     //credentials: 'same-origin',
    //     headers: { 
    //         //'Content-Type': 'application/json',  
    //         'Content-Type': 'application/x-www-form-urlencoded',              
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'DELETE, GET, OPTIONS, PATCH, POST, PUT',
    //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    //     Authorization: 'ApiToken f058958a-d8bd-47cc-95d7-7ecf98610e47'
    //     // ,
    //     // authorization: 'ApiToken f058958a-d8bd-47cc-95d7-7ecf98610e47' 
    // }

    // })

    //    debugger;
    //    // Now return data in ims format: 
    //    return data;
    return r;
}
//------------------------------------

// const getRecipes = async (from, to, query) => {
//     const { data } = await axios.get(`https://api.edamam.com/search?app_id=${keys.appId}&app_key=${keys.appKey}&from=${from}&to=${to}&q=${query}`);
//     return data.hits.map(({ recipe: { label: title, url, image: PicUrl, ingredientLines, calories, totalTime } }) => ({
//         title,
//         url,
//         PicUrl,
//         ingredientLines,
//         calories,
//         totalTime
//     }));
// }

// const getRecipe = async id => {
//     //...
// }

// Now: 
// Get Rain Channel
// call total Rain, set 'votes' 

export {
    // getRecipes,
    // getRecipe
    getStations,
    GetRainSpecificStation
};
