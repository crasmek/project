const HebrewMap=
{
    recipeName: "שם המתכון",
    recipeImgUpload: "המסלול לתמונה"
};

const validate = (name, value, required, minLength, pattern) => {
    const newErrors = [];

    if(required){
        if(!value){
            //newErrors.push(`${name} is required`);
            newErrors.push(`${HebrewMap[name]} הוא שדה חובה`);
        }
    }

    if(minLength){
        if(value.length < minLength){
            //newErrors.push(`${name} must be at least ${minLength} characters`);
            newErrors.push(`${HebrewMap[name]} חייב להכיל לפחות ${minLength} תוים`);
        }
    }

    if(pattern){
        if(!pattern.test(value)){
            newErrors.push(`${name} is invalid`);
        }
    }

    return newErrors;
}

export default validate;