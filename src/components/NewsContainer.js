import React from 'react'

function NewsContainer(props) {
    
    function FetchNews(){
        var url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=5d793f9184fb4c96863a0f249ee333b4&category=${props.category}`;
    
        fetch(url).then((response) => {
            return response.json();
        }).then((news) => {
            var News=news;
            var articles=News.articles;
    
            var item = "";
            var elem = document.getElementById("cd-cont");
    
            articles.forEach((element,index) => {
                if (element.urlToImage!=null) {
    
                    if (((index+1)%3)===0) {
                        var newsBox =`      <td className="table-data" >
                                                <div className="card-child" id="cd-child">
                                                    <img className="news-img" className="news-img"src="${element.urlToImage}" alt="img" width="335px" height="150px"/>
                                                    <br/>
                                                    <h3>${index+1}) ${element.title }</h3><br/>
                                                    <p> ${element.description}. <a href="${element.url}" target="_blank" style="color:blue">Read more</a> </p>
                                                </div>
                                            </td>
                                        </tr>`;
                    }
    
                    else if (((index+1)%3)===1) {
                         if (index===0) {
                            var newsBox =`<table>
                                            <tr className="table-row" >
                                                <td className="table-data">
                                                    <div className="card-child" id="cd-child">
                                                        <img className="news-img" src="${element.urlToImage}" alt="img" width="335px" height="150px"/>
                                                        <br/>
                                                        <h3>${index+1}) ${element.title }</h3><br/>
                                                        <p> ${element.description}. <a href="${element.url}" target="_blank" style="color:blue">Read more</a> </p>
                                                    </div>
                                                </td>`;
                        
                             
                        } 
                        else {
                             var newsBox =`<tr className="table-row" >
                                                <td className="table-data">
                                                    <div className="card-child" id="cd-child">
                                                        <img className="news-img" src="${element.urlToImage}" alt="img" width="335px" height="150px"/>
                                                        <br/>
                                                        <h3>${index+1}) ${element.title }</h3><br/>
                                                        <p> ${element.description}. <a href="${element.url}" target="_blank" style="color:blue">Read more</a> </p>
                                                    </div>
                                                </td>`;
                         }
                    }
    
                    else{
                        var newsBox =`      <td className="tale-data">
                                                <div className="card-child" id="cd-child">
                                                    <img className="news-img" src="${element.urlToImage}" alt="img" width="335px" height="150px"/>
                                                    <h3>${index+1}) ${element.title } </h3> 
                                                    <br/>
                                                    <p> ${element.description}. <a href="${element.url}" target="_blank" style="color:blue">Read more</a> </p>
                                                </div>
                                            </td>`;
                    }
                    
                }
                else{
    
                    if (((index+1)%3)===0) {
                        var newsBox =`      <td className="table-data">
                                                <div className="card-child" id="cd-child">
                                                    <img className="news-img" src="ImageNotFound.jpg" alt="img" width="335px" height="150px"/>
                                                    <br/>
                                                    <h3>${index+1}) ${element.title }</h3><br/>
                                                    <p> ${element.description}. <a href="${element.url}" target="_blank" style="color:blue">Read more</a> </p>
                                                </div>
                                            </td>
                                        </tr >`;
                    }
    
                    else if (((index+1)%3)===1) {
                        var newsBox =`<table>
                                        <tr  className="table-row">
                                            <td className="table-data">
                                                <div className="card-child" id="cd-child">
                                                    <img className="news-img" src="ImageNotFound.jpg" alt="img" width="335px" height="150px"/>
                                                    <br/>
                                                    <h3>${index+1}) ${element.title }</h3><br/>
                                                    <p> ${element.description}. <a href="${element.url}" target="_blank" style="color:blue">Read more</a> </p>
                                                </div>
                                            </td>`;
                    }
    
                    else{
                        var newsBox =`      <td className="table-data">
                                                <div className="card-child" id="cd-child">
                                                    <img className="news-img" src="ImageNotFound.jpg" alt="img" width="335px" height="150px"/>
                                                    <h3>${index+1}) ${element.title }</h3><br/>
                                                    <p> ${element.description}. <a href="${element.url}" target="_blank" style="color:blue">Read more</a> </p>
                                                     
                                                </div>
                                            </td>`;
                    }
                }
                item += newsBox;
                elem.innerHTML=item;
            });
        });
  
    }
       
    FetchNews();

    return (
        <>
        <main>
            <div className="news-body">
                <h2 className="news-body-heading">NewsTime : Top Headlines  </h2>
                <div className="container" id="cd-cont">
                    
                </div>
            </div>
        </main>
        </>
    );
}




export default NewsContainer;
