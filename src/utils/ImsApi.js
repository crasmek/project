import axios from 'axios';

const keys = {
    appId: 'a2c14a78',  /* itay's keys */
    appKey: '5ca8aaa3267d554cd550863142c63a53'
};

const getStations = async () => {
    // const {data} = await axios.get(`https://api.ims.gov.il/v1/envista/stations`,{
    //     headers: {
    //         Authorization: 'ApiToken f058958a-d8bd-47cc-95d7-7ecf98610e47' //the token is a variable which holds the token
    //     }
    //    });
    const url = 'https://api.ims.gov.il/v1/envista/stations';

    function json(response) {
        return response.json()
    }



    const ApiToken = 'f058958a-d8bd-47cc-95d7-7ecf98610e47';

    fetch(url, {
        method: 'get',
        withCredentials: true,
        credentials: 'include',
        Authorization: 'ApiToken ' + ApiToken,
        headers: {
            'Origin': '',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE, GET, OPTIONS, PATCH, POST, PUT',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
            mode: 'cors',
            Authorization: 'ApiToken ' + ApiToken,
            //itay: 'stam',
            'Content-Type': 'application/json'
        }
    })
        .then(json)
        .then(function (data) {
            console.log('Request succeeded with JSON response', data);
            return false;
        })
        .catch(function (error) {
            console.log('Request failed', error);
            return true;
        });
    return true;


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
}
//------------------------------------

const getRecipes = async (from, to, query) => {
    const { data } = await axios.get(`https://api.edamam.com/search?app_id=${keys.appId}&app_key=${keys.appKey}&from=${from}&to=${to}&q=${query}`);
    return data.hits.map(({ recipe: { label: title, url, image: PicUrl, ingredientLines, calories, totalTime } }) => ({
        title,
        url,
        PicUrl,
        ingredientLines,
        calories,
        totalTime
    }));
}

const getRecipe = async id => {
    //...
}

export {
    // getRecipes,
    // getRecipe
    getStations
};
