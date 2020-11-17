import axios from 'axios';

const keys = {
    appId: 'a2c14a78',  /* itay's keys */
    appKey: '5ca8aaa3267d554cd550863142c63a53'
};

const getRecipes = async (from, to, query) => {
    const {data} = await axios.get(`https://api.edamam.com/search?app_id=${keys.appId}&app_key=${keys.appKey}&from=${from}&to=${to}&q=${query}`);
    return data.hits.map(({recipe: {label:title, url, image:PicUrl, ingredientLines, calories, totalTime}}) => ({
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
    getRecipes,
    getRecipe
};
