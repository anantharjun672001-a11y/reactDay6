export default function ReducerAction(val,action){  //action =>dispatch
    //console.log(val);  //val => inital value
    //console.log(action); //action => action.type action.payload
    
    switch (action.type){
        case "ADD":{
            return val + action.payload;
        }
        case "SUB": {
            return val - action.payload;
        }
        default:{
            return val;
        }
    }
}
