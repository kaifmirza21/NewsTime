import React from 'react'
import NewsItems from './NewsItems'
import { useState } from 'react';


function NewsContainer() {
    

    return (
        <>
        <div className="news-body">
            <h2 className="news-body-heading">NewsTime : Top Headlines  </h2>
            <div className="news-container">
                <NewsItems />
                <NewsItems/>
                <NewsItems/>
            </div>
        </div>
        </>
    )
}

export default NewsContainer
