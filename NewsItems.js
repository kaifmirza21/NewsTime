import React, { Component } from 'react'

export default function NewsItems(props) {

   
    const xhr = new XMLHttpRequest();
    xhr.open("get","https://newsapi.org/v2/top-headlines?country=in&apiKey=5d793f9184fb4c96863a0f249ee333b4",true);


    var article;
    xhr.onload = function(){
        if (this.status===200) {
            let json = JSON.parse(this.responseText);
            console.log(json);
            article = json.articles;
            console.log(article);
            // let news;
            // article.forEach((element,index) => {
            //     news+=element;
            // });
        }
        else{
            console.log("sorry some error occured");
        }
    }
    xhr.send();

    return(
        <>
        <div>
           
            <div className="card">
                <img src="{}" alt="img" />
                <h4>Tittle</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ad neque optio vero ab fugit veniam, sapiente rerum impedit quod natus velit, quia ex molestias cupiditate repellendus beatae repudiandae aliquid? Cumque vel quis aspernatur.</p>
                <button><a href="">Read More...</a></button>
            </div>
        </div>
        </>
    )
}