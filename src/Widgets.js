import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, subtitle) =>(
    <div className="widgets__article">
        <div className="widgets__articleLeft">
            <FiberManualRecordIcon/>
        </div>
        <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>   
  )


  return (
    <div className="widgets">
        <div className="widgets__header">
            <h2>Linkedin News</h2>
            <InfoIcon/>
        </div>
        {newsArticle("Ronit made a linkedin clone", "Top News - 10298 readers")}
        {newsArticle("Indian population growth reaching new heights", "Top News - 5467 readers")}
        {newsArticle("Zepto raises more funds.", "Top News - 3746 readers")}
        {newsArticle("Who will take over the quick-commerce market: Blinkit, Instamart, or Zepto?", "Top News - 3524 readers")}
    </div>
  )
}

export default Widgets