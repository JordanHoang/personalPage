import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import bevo from '../images/bevo.png'
import breck from '../images/breck.jpg'
import deepWaterSolo from '../images/deepWaterSolo.jpg'
import grad from '../images/grad.JPG'
import greece from '../images/greece.jpg'
import monkeyIsland from '../images/monkeyIsland.JPG'
import teton from '../images/teton.jpg'
import theCatch from '../images/theCatch.png'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 700,
    height: 630,
    overflowY: 'auto',
    marginBottom: 25
  }
}

const tilesData = [
  {
    img: monkeyIsland,
    title: 'Monkey Island, Ha Long Bay, Vietnam',
    featured: true
  },
  {
    img: bevo,
    title: 'My last home Texas Football game as a student'
  },
  {
    img: breck,
    title: 'Breckenridge, CO, March 2016'
  },
  {
    img: grad,
    title: 'Graduated from the greatest university in the world',
    featured: true
  },
  {
    img: teton,
    title: 'Grand Teton, WY, Summer 2016'

  },
  {
    img: greece,
    title: 'Athens, Greece, March 2015'
  },
  {
    img: deepWaterSolo,
    title: 'Deep Water Soloing in Ha Long Bay'
  },
  {
    img: theCatch,
    title: `"The catch", 5th round of Texas 5A playoffs, 2012`
  },
]

const PhotoGrid = () => {
  return (
    <div>
      <h1>Photos</h1>
      <div style={styles.root}>
        <GridList
          cols={2}
          cellHeight={300}
          padding={1}
          style={styles.gridList}
        >
          {tilesData.map((tile) =>(
            <GridTile
              key={tile.img}
              title={tile.title}
              cols={tile.featured ? 2: 1}
              rows={tile.featured ? 2: 1}
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    </div>
  )

}

export default PhotoGrid