
 const stringValidate=(value)=>{
    if(value==="" || value.trim().length<3){
        return false;
    }
        
    return true;
}


const numberValidate=(value)=>{
    if(value==0 || value===""){
        return false;
    }
    return true;
}


export const expenseFormValidate=(expense)=>{

        let errorObject = {};

        if(!numberValidate(expense?.amount)){
            errorObject["amount"]="Enter valid Amount";
        }

        if(!stringValidate(expense?.title)){
            errorObject["title"]="Enter valid Title";
        }

        if(!stringValidate(expense?.date)){
            errorObject["date"]="Enter valid date";
        }

        return errorObject;
}