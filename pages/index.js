import React, { useState, useEffect } from 'react'

export default function Home() {
  let w
  const [toggle, setToggle] = useState(false)
  const [resize, setResize] = useState(false)
  const Toggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className="container">
      <div>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap"
          rel="stylesheet"
        />
      </div>
      <header className="header">
        <img src="/logo.png" className="logo" />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          {/* desktop */}
          <div className="desktopNav">
            <nav id="desktopHomeNav">
              <ul>ABOUT US</ul>
              <ul>LEARN MORE</ul>
              <ul>DONATE NOW!</ul>
            </nav>
          </div>
          {/* mobile */}
          <div className="mobileNav">
            <button onClick={Toggle}>
              <img src="/ham.svg" className="burger" />
            </button>
            {toggle && (
              <nav id="homeNav">
                <ul>ABOUT US</ul>
                <ul>LEARN MORE</ul>
                <ul>DONATE NOW!</ul>
              </nav>
            )}
          </div>
        </div>
      </header>

      <main>
        <div className="section">
          <h1>Weed should help your headache, not cause it</h1>
          <p>
            Help make getting weed hassle free. Get a professional website to
            help with online orders, product updates and more.
          </p>
          <button className="getStartedBtn">GET STARTED</button>
          <h4>Discounts Up To 30% When You Mention Covid</h4>
          <img src="/happy.png" className="happy" />
        </div>
        <div className="section">
          <h1 className="why">Why Work With Us?</h1>
          <img src="/money.png" className="money" id="sectionPic" />
          <h1 className="sectionH">Increase Your Sales</h1>
          <p>
            Companies who chose Marys Site have seen increases in sales, up to
            20%!
          </p>
          <h5>*Online sales have gone up 50% nationwide since Covid.</h5>
        </div>
        <div className="section">
          <img src="/expert.png" className="expert" id="sectionPic" />
          <h1 className="sectionH">Work With Experts</h1>
          <p>
            Work with a team of designers and enginners who are here to
            collaborate with you in the proccess of bringing your vision to
            life.
          </p>
        </div>
        <div className="section">
          <img src="/chart.png" className="expert" id="sectionPic" />
          <h1 className="sectionH">Analyze Your Data</h1>
          <p>
            When you chose Marys site, you will be able to see what products are
            doing best and worst. Making it easy to decide what to restock with.
          </p>
        </div>
        <div className="plans">
          <div className="plan">
            <div className='planW'>
              <h2 className="planH">Redesigned Website</h2>
              <h3 className='planP'>$1500</h3>
              <button className="planBtn">CONTINUE</button>
            </div>
            <div className='planM'>
              <h4 className='planMH'>Hello</h4>
              <p className='planD'>After having contacted us, we will shedule a meeting to go</p>
            </div>
          </div>
          <div className="plan">
            <div className='planW'>
              <h2 className="planH">Choose A Plan</h2>
              <h3 className='planP'>$1000</h3>
              <button className="planBtn">CONTINUE</button>
            </div>
            <p className='planD'>After having contacted us, we will shedule a meeting to go</p>
          </div>
          <div className="plan">
            <div className='planW'>
              <h2 className="planH">Choose A Plan</h2>
              <h3 className='planP'>$1000</h3>
              <button className="planBtn">CONTINUE</button>
            </div>
            <p className='planD'>After having contacted us, we will shedule a meeting to go</p>
          </div>
        </div>
      </main>

      <style jsx>{`
        header {
          max-height: 60px;
        }

        button {
          margin: 0.5em;
          padding: 0;
          border: none;
          background-color: none;
        }

        .getStartedBtn {
          background-color: #7ad369;
          height: 50px;
          width: 150px;
           padding: 0.35em 1.2em;
          text-decoration: none;
          border-radius: 2em;
           text-align: center;
           transition: all 0.2s;
          color: #fff;
          font-size: 14px;
        }

        .getStartedBtn:hover {
          border-color: #7ad369;
          background-color: black;
          color: #fff;
        }

        .planBtn {
          background-color: #7ad369;
          height: 40px;
          width: 90px;
          padding: 0.35em 1.2em;
          margin: 0.5em 0 1em 0;
          text-decoration: none;
          border-radius: 2em;
          text-align: center;
          transition: all 0.2s;
          color: #fff;
          font-size: 12px;
        }

        .planBtn:hover {
          border-color: #7ad369;
          background-color: black;
          color: #fff;
        }

        .section {
          margin: 0em 5em;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .plans{
          margin: 1em 3em;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        h1 {
          font-size: 28px;
          text-align: center;
          font-weight: normal;
          margin: 1.5em 1em 0.5em 1em;
          line-height: 1.4;
        }

        h4 {
          margin: 0.8em 0em;
          padding: 0;
          font-size: 10px;
        }

        h5 {
          font-size: 10px;
        }

        .why {
          font-size: 28px;
          margin-top: 2em;
        }

        .sectionH {
          margin: 0.5em 1em 0.5em 1em;
        }

        .planH{
          text-align: left;
          margin: 1em 0 0.3em 0;
          padding: 0
        }

        .planP{
          margin: 0;
          padding: 0;
          font-size: 34px
        }

        .planD{
          text-align: left;
          margin: .5em 0
        }

        .planW{
          border-bottom: 2px solid black
        }

        .planMH{
          font-size: 16px;
          font-weight: 900
        }

        p {
          text-align: center;
          margin: 0.5em 2em 1em 2em;
          line-height: 1.4;
          font-size: 18px;
        }

        .logo {
          height: 12em;
          width: 12em;
        }

        #sectionPic {
          margin-top: 1em;
        }

        .happy {
          height: 11em;
          width: 11em;
        }

        .expert {
          height: 9em;
          width: 11em;
        }

        .money {
          height: 5em;
          width: 7em;
        }

        .burger {
          display: inline;
          height: 30px;
          width: 30px;
          max-height: 100px;
          max-width: 100px;
          padding: 0;
          margin: 0;
        }

        .mobileNav {
          float: right;
          position: relative;
          display: inline-block;
        }

        #homeNav {
          position: absolute;
          background-color: #f1f1f1;
          min-width: 160px;
          overflow: auto;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          right: 0;
          z-index: 1;
        }

        .desktopNav {
          display: none !important;
        }

        @media only screen and (min-width: 760px) {
          .mobileNav {
            display: none;
          }

          .desktopNav {
            display: block !important;
            width: 100% !important;
          }

          #desktopHomeNav {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            box-shadow: none !important;
            z-index: 0 !important;
            background: none !important;
            position: relative !important;
          }
        }

        .header {
          padding: 0 10px 0 10px;
          top: 0;
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }

        ul {
          text-decoration: none;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          height: 100vh;
          width: 100vw;
          overflow-x: hidden;
          padding: 0;
          margin: 0;
          font-family: 'Roboto', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
