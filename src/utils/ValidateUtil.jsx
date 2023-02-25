
 const stringValidate=(value)=>{
    if(value===""){
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
            errorObject["amount"]="Enter Amount";
        }

        if(!stringValidate(expense?.title)){
            errorObject["title"]="Enter Title";
        }

        if(!stringValidate(expense?.date)){
            errorObject["date"]="Enter date";
        }

        return errorObject;
}