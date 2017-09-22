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
              <time>2017</time>
              <br/>
              Graduated from Hack Reactor's Advanced Software Engineering Immersive.
            </div>
          </li>
          <li>
            <div>
              <time>2017</time>
              <br/>
              Backpacked Vietnam by myself for 3 weeks. Itching to go back!
            </div>
          </li>
          <li>
            <div>
              <time>2017</time>
              <br/>
              Graduated from The University of Texas at Austin with a B.S. in Geology
              and an Elements of Computing certificate.
            </div>
          </li>
          <li>
            <div>
              <time>2013</time>
              <br/>
              Moved to Austin, TX to attend the greatest university in the world.
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
              Born in Houston, TX. Been a diehard Astros fan ever since.
            </div>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Timeline