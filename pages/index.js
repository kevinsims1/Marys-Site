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
        <div className="headSec">
          <img src="/happy.png" className="happyTop" />
          <div className="headSection">
            <h1 className="mainHeader">
              Weed should help your headache, not cause it
            </h1>
            <p>
              Help make getting weed hassle free. Get a professional website to
              help with online orders, product updates and more.
            </p>
            <button className="getStartedBtn">GET STARTED</button>
            <h4>Discounts Up To 30% When You Mention Covid</h4>
          </div>
          <img src="/happy.png" className="happy" />
        </div>
        <h1 className='wwwu'>Why Work With Us?</h1>
        <div className="mainSection">
          <div className="section">
            <img src="/money.png" className="money" id="sectionPic" />
            <h1 className="sectionH">Increase Your Sales</h1>
            <p className='sectionD'>
              Companies who chose Marys Site have seen increases in sales, up to
              20%!
            </p>
            <h5>*Online sales have gone up 50% nationwide since Covid.</h5>
          </div>
          <div className="section">
            <img src="/expert.png" className="expert" id="sectionPic" />
            <h1 className="sectionH">Work With Experts</h1>
            <p className='sectionD'>
              Work with a team of designers and enginners who are here to
              collaborate with you in the proccess of bringing your vision to
              life.
            </p>
          </div>
          <div className="section">
            <img src="/chart.png" className="expert" id="sectionPic" />
            <h1 className="sectionH">Analyze Your Data</h1>
            <p className='sectionD'>
              When you chose Marys site, you will be able to see what products
              are doing best and worst. Making it easy to decide what to restock
              with.
            </p>
          </div>
        </div>
        <div className="plans">
          <div className="plan">
            <div className="planW">
              <h2 className="planH">Redesigned Website</h2>
              <h3 className="planP">$1500</h3>
              <button className="planBtn">CONTINUE</button>
            </div>
            <div className="planM">
              <h4 className="planMH">Design Check</h4>
              <p className="planD">
                Our designers will review your current site and take notes of
                issues found.
              </p>
            </div>
            <div className="planM">
              <h4 className="planMH">Collaborate</h4>
              <p className="planD">
                We'll present these problems, as well as ideas on possible
                solutions. From there we'll collaborate to ensure we are
                capturing your culture, in our design.
              </p>
            </div>
            <div className="planM">
              <h4 className="planMH">Implement</h4>
              <p className="planD">
                After we reach A final design our engineers will take over and
                implent the design.
              </p>
            </div>
          </div>
          <div className="plan">
            <div className="planW">
              <h2 className="planH">Order Automation</h2>
              <h3 className="planP">$3000</h3>
              <button className="planBtn">CONTINUE</button>
            </div>
            <div className="planM">
              <h4 className="planMH">Get Online Orders In Real Time</h4>
              <p className="planD">
                Our system will ensure you get your customers order the moment
                its placed.
              </p>
            </div>
            <div className="planM">
              <h4 className="planMH">Know Your Customers</h4>
              <p className="planD">
                With our order automation you will be able to keep track of
                customer data, such as what products are selling fast or h.
              </p>
            </div>
            <div className="planM">
              <h4 className="planMH">Stay Updated</h4>
              <p className="planD">
                Along side the implementation, our team will make sure your
                software stays up to date with the latest technologies.
              </p>
            </div>
          </div>
          <div className="plan">
            <div className="planW">
              <h2 className="planH">Professional Web App</h2>
              <h3 className="planP">$6000</h3>
              <button className="planBtn">CONTINUE</button>
            </div>
            <div className="planM">
              <h4 className="planMH">Automated Order System</h4>
              <p className="planD">
                Get everything included in the "Order Automation" package.
              </p>
            </div>
            <div className="planM">
              <h4 className="planMH">Tailored Design</h4>
              <p className="planD">
                Get everything included in the "Website Redesign" package.
              </p>
            </div>
            <div className="planM">
              <h4 className="planMH">Easy Upload</h4>
              <p className="planD">
                We have created a system that makes adding, removing, updating
                current inventory as easy as a click of a button.
              </p>
            </div>
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

        .container{
          margin: 0 1em
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

        .headSec{
          margin: 0em 5em;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .headSection {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .plans {
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
          margin: 0.5em 1em;
        }

        .plan {
          margin: 0 0 2em 0;
        }

        .planH {
          text-align: left;
          margin: 1em 0 0.3em 0;
          padding: 0;
        }

        .planP {
          margin: 0;
          padding: 0;
          font-size: 34px;
        }

        .planD {
          text-align: left;
          margin: 0.2em 0;
        }

        .planW {
          border-bottom: 2px solid #5d675b;
          color: black;
        }

        .planMH {
          font-size: 24px;
          font-weight: bold !important;
          margin: 1.5em 0 0em 0;
          color: black;
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

        .happyTop {
          display: none;
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
          .wwwu{
            font-size: 40px;
            margin: 0
          }

          .headSec{
            margin: .5em 4em 8em 4em;
            display: flex;
            flex-direction: row;
            justify-items: center !important
          }


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

          .sectionH{
            font-size: 20px;
            margin: .5em 0
          }

          .section {
            flex-direction: column;
            margin: 0.5em 1em;
            align-items: center;
            min-width: 33.3%
          }

          .mainSection{
            margin: .5em 3em 2.5em 3em;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly !important
          }

          .sectionD{
            margin: 0;
            font-size: 18px;
          }

          #sectionPic{
            width: 8em;
            height: 8em

          }

          .headSection {
            margin: 0 0;
            max-width: 50%;
          }

          .happyTop {
            display: block !important;
          }

          .mainHeader {
            margin: 1em 0 0.5em 0;
            font-size: 35px;
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
          color: #5d675b;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
