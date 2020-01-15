import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import bevo from '../images/bevo.png'
import japan from '../images/japan.jpeg'
import deepWaterSolo from '../images/deepWaterSolo.jpg'
import grad from '../images/grad.JPG'
import greece from '../images/greece.jpg'
import monkeyIsland from '../images/monkeyIsland.JPG'
import teton from '../images/teton.jpg'
import kona from '../images/kona.jpg'
import triathlon from '../images/triathlon.jpg'

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
    img: japan,
    title: 'Hakone Shrine',
    featured: true
  },
  {
    img: kona,
    title: `"Kona when she was 3 months old"`
  },
  {
    img: triathlon,
    title: 'Malibu Triathlon'
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
    img: monkeyIsland,
    title: 'Monkey Island, Ha Long Bay, Vietnam',
  },
  {
    img: deepWaterSolo,
    title: 'Deep Water Soloing in Ha Long Bay'
  },
  {
    img: greece,
    title: 'Athens, Greece, March 2015'
  }
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