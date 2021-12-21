import React from 'react'

const About = () => {
    return (
         <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About food</h3>
            <h1>WELCOME TO FRESH MEAL</h1>
            <p>
             Food, substance consisting of protein, carbohydrate, fat, and other nutrients used in the
                                body of an
                                organism to sustain
                                growth and vital processes and to furnish energy. The absorption and utilization of food
                                by the body
                                is fundamental to
                                nutrition and is facilitated by digestion.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza.jpg" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>

    )
}

export default About
