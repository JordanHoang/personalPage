import React from 'react'

const Timeline = () => {
  return (
    <div className="timelineContainer">
      <section className="timeline">
        <h1>Timeline</h1>
        <br/>
        <ul>
          <li>
            <div>
              <time>2019</time>
              <br/>
              <span>Visited Japan and South Korea</span>
              <br/>
              <span>Adopted my puppy, Kona</span>
              <br/>
              <span>Completed my first triathlon</span>
            </div>
          </li>
          <li>
            <div>
              <time>2018</time>
              <br/>
              <span>Visited Thailand</span>
              <br/>
              <span>Visited Jordan</span>
            </div>
          </li>
          <li>
            <div>
              <time>2017</time>
              <br/>
              <span>Graduated from The University of Texas at Austin with a B.S. in Geology
              and an Elements of Computing certificate</span>
              <br/>
              <span>Backpacked Vietnam by myself for 3 weeks. Itching to go back!</span>
              <br/>
              <span>Graduated from Hack Reactor's Advanced Software Engineering Immersive</span>
            </div>
          </li>
          <li>
            <div>
              <time>2013</time>
              <br/>
              Moved to Austin, TX to attend the greatest university in the world!
            </div>
          </li>
          <li>
            <div>
              <time>2001</time>
              <br/>
              Spent 3 weeks at Texas Children's Hospital following stomach surgery :(
            </div>
          </li>
          <li>
            <div>
              <time>1994</time>
              <br/>
              Born in Houston, TX. Been a diehard Astros fan ever since
            </div>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Timeline