const express = require("express");
const app = express();

const fs = require("fs");
const axios = require("axios");
const { log } = require("console");
const { json } = require("body-parser");

//que2
const readFile = () => {
  fs.readFile("data.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });
};
readFile();

//que3
const writeFile = () => {
  fs.writeFile("text.txt", " A new file has been created", (err) => {
    throw err;
  });
};

//que4
const getPost = (id) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}/`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      throw err;
    });
};
getPost(50);

//que5
const getPostAsync = async (id) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/`
    );
    console.log(response.data);
  } catch (err) {
    throw err;
  }
};

getPostAsync(40);

//practice

//que1
const appendToFile = (data) => {
  fs.appendFile("data.txt", `${data} \n`, (err) => {
    if (err) throw err;
  });
};
appendToFile("ghaidaa");

//que2
const copyFile = (fileName)=>{
    fs.copyFile(`${fileName}`,`copy_of_${fileName}`,(err)=>{
        if (err) throw err
        console.log("done")
    })
    
}
copyFile("data.txt")


//que3

const createPost = (post)=>{
    axios.post("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        console.log(JSON.parse(response.data));
      })
      .catch((err) => {
        throw err;
      })
}