// Write your solution in this file!

const employee = {
    name:"me",
    streetAddress:"794",
};

function updateEmployeeWithKeyAndValue(object,key,value){
    return {...object, [key]: value}
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(employee, key){
    const newObj = { ...employee };
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key)
{
    delete obj[key];
    return obj;
}