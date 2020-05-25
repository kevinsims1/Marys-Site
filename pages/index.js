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
        <img src="/logo-4.svg" className="logo" />
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
            Help make getting weed hassle free. Get a professional website to help with online orders, product updates and more.
          </p>
          <button className="donateBtn">LEARN MORE</button>
        </div>
        <div className="section">
          <h1 className='proHeader'>Work With Experts</h1>
          <p>
            Work with a team of designers and enginners who are here to collaborate with you in the proccess of bringing your vision to life.
          </p>
        </div>
        <div className="section">
          <h1>You Have Options</h1>
          <p>
            Ditch the third parties and get professinal. When you work with us you get to display your brand not someone elses. We customize your site to your liking.
          </p>
        </div>
        <div className="section">
          <h1>Choose A Plan</h1>
          <p>
            After having contacted us, we will shedule a meeting to go
          </p>
        </div>
      </main>

      <style jsx>{`
        .applyBtn,
        .donateBtn {
           padding: 0.35em 1.2em;
           margin: 1em;
           text-decoration: none;
          border-radius: 2em;
           text-align: center;
           transition: all 0.2s;
          color: #fff;
        }

        .donateBtn {
           background-color: red;
          height: 50px;
          width: 150px
        }

        .applyBtn {
           background-color: black;
        }

        .applyBtn:hover {
          border-color: black;
          background-color: red;
          color: #fff;
        }

        .donateBtn:hover {
          border-color: red;
          background-color: black;
          color: #fff;
        }

        .section {
          margin: 3em 5em;
          display: flex;
          flex-direction: column;
          align-items: center;
        }


        h1 {
          font-size: 28px;
          text-align: center;
          font-weight: normal;
          margin: 0.5em;
          line-height: 1.4;
        }

        p {
          text-align: center;
          margin: 0.5em 1.2em;
          line-height: 1.6;
        }

        .mobileNav {
          float: right;
          position: relative;
          display: inline-block;
        }

        button {
          margin: 0.5em;
          padding: 0;
          border: none;
          background-color: none;
        }

        .logo {
          height: 6em;
          width: 6em;
          max-height: 100px;
          max-width: 100px;
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

        .desktopNav{
          display: none !important
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
            position: relative !important

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
