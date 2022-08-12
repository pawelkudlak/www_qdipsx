import React from 'react'
import ShowYTVideoInBlocks from '../../components/youtube/showYTVideosInBlocks'
import miniatura19 from '../../img/shot_19.jpg'
import miniatura18 from '../../img/shot_18.jpg'
import miniatura17 from '../../img/shot_17.jpg'
import miniatura16 from '../../img/shot_16.jpg'
import miniatura15 from '../../img/shot_15.jpg'
import miniatura14 from '../../img/shot_14.jpg'
import miniatura13 from '../../img/shot_13.jpg'
import miniatura12 from '../../img/shot_12.jpg'
import miniatura11 from '../../img/shot_11.jpg'
import miniatura10 from '../../img/shot_10.jpg'
// import miniatura9 from '../../img/shot_9.jpg'
// import miniatura8 from '../../img/shot_8.jpg'
import miniatura7 from '../../img/shot_7.jpg'
import miniatura6 from '../../img/shot_6.jpg'
import miniatura5 from '../../img/shot_5.jpg'
import miniatura4 from '../../img/shot_4.jpg'
import miniatura3 from '../../img/shot_3.jpg'
// import miniatura2 from '../../img/shot_2.jpg'
import miniatura1 from '../../img/shot_1.jpg'
import '../../style/pages/top10.css'

const Shoty = () => {
  return (
    <div className='top10Conteiner'>
        {ShowYTVideoInBlocks(miniatura19, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/j6pAEjTzcxY", "Jak na razie, ostatnie szoty z moich streamów")}
        {ShowYTVideoInBlocks(miniatura18, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/1tr8gMu3ZT8", "Shoty z maja 2021 roku")}
        {ShowYTVideoInBlocks(miniatura17, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/SauZp8PPJvY", "Shoty z kwietnia 2021 roku")}
        {ShowYTVideoInBlocks(miniatura16, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/8FpaVyzM-HU", "Shoty z marca 2021 roku")}
        {ShowYTVideoInBlocks(miniatura15, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/-72i2jKXKls", "Shoty z lutego 2021 roku")}
        {ShowYTVideoInBlocks(miniatura14, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/E25_2jZv8rI", "Shoty ze stycznia 2021 roku")}
        {ShowYTVideoInBlocks(miniatura13, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/C47PKpNAJFA", "Shoty z grudnia 2020 roku")}
        {ShowYTVideoInBlocks(miniatura12, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/9-l0yDLvIic", "Shoty z listopada 2020 roku")}
        {ShowYTVideoInBlocks(miniatura11, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/_pgeccuGDAo", "Shoty z października 2020 roku")}
        {ShowYTVideoInBlocks(miniatura10, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/qtGlQeTsEHw", "Shoty z września 2021 roku")}
        {/* {ShowYTVideoInBlocks(miniatura9, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/6jm2YUQuZmw", "Shoty z lipca 2020 roku")} */}
        {/* {ShowYTVideoInBlocks(miniatura8, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/OXuFRKeuxPg", "Shoty z czerwca 2020 roku")} */}
        {ShowYTVideoInBlocks(miniatura7, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/QoG95_SUYyQ", "Shoty z maja 2020 roku")}
        {ShowYTVideoInBlocks(miniatura6, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/7jyNcgH9-_E", "Shoty z kwietnia 2020 roku")}
        {ShowYTVideoInBlocks(miniatura5, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/WTyVwKZpDrI", "Shoty z marca 2020 roku")}
        {ShowYTVideoInBlocks(miniatura4, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/Px3GX4JJFCQ", "Shoty z lutego 2020 roku")}
        {ShowYTVideoInBlocks(miniatura3, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/tgRrUbb77QM", "Shoty ze stycznia 2020 roku")}
        {/* {ShowYTVideoInBlocks(miniatura2, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/nhV-L-SggvM", "Drugi film zbierający shoty z moich streamów")} */}
        {ShowYTVideoInBlocks(miniatura1, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/PlfXKzEGDGc", "Premierowy odcinek shotów z moich streamów")}
    </div>
  )
}

export default Shoty