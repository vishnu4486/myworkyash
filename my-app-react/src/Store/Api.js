import axios from 'axios';
const baseURL ="https://jsonplaceholder.typicode.com/";
export async function getData(url){
  
    try {

            if(url.length < 100){
                url = baseURL + url;
            } 
            const response = await axios.get(url);
            return response.data;

            } catch (error) {
                console.error(error);
            }
}


export async function LoginDetail (Data){
    // console.log("before");
    // console.log( await getData(baseURL +'posts'));
    // console.log("after");
    console.log(Data);
}

export function Resister(Data){
    console.log(getData('https://jsonplaceholder.typicode.com/users'));
}

export async function getPosts(){

    let response = await getData(baseURL +'posts');
    console.table(response);
    return response;

}