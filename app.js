const express = require("express");
const app = express();

const fs = require("fs");
const axios = require("axios");
const { log } = require("console");

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
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/`);
      console.log(response.data);
    } catch (err) {
      throw err;
    }
  };

  getPostAsync(40)

