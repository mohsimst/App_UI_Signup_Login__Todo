import axios from 'axios';


const URL= 'https://jsonplaceholder.typicode.com/users';

export const addData=async(user)=> {
   const { data } =  await axios.post(URL,user)
   console.log(data);
   alert("Registration successful")
}

export const getData=async(userValue)=> {
   const url= `https://jsonplaceholder.typicode.com/users?q=${userValue}`
   const { data } =  await axios.get(url)
   console.log(data);
}



