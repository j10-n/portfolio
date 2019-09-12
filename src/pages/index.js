import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import artbreak from '../assets/images/artbreak.gif';
import artbreakvid from '../assets/images/artbreak.mp4';
import artbreakimg from '../assets/images/artbreakimg.png';
import welcomehome from '../assets/images/welcomehome.gif';
import welcomehomevid from '../assets/images/welcomehome.mp4';
import welcomehomeimg from '../assets/images/welcomehomeimg.png';

import avatar from '../assets/images/avatar.jpg';

import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        {/* <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul> */}
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more"></a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style2 special">
      <div className="inner">
        <header className="major">
          <h2>About Me</h2>
          {/* <div>
            {' '}
          </div> */}
          <div className="about">
            <p className="textanimation" style={{ textAlign: 'center' }}>
              <img className="image avatar" alt="me" src={avatar} />
              Hi my name is Justen Nakamoto, and I am a Full Stack Developer. I
              graduated with my Bachelor's Degree in Information Technology at
              the University of Hawaiʻi – West Oʻahu. After college, I enrolled
              in DevLeague, Hawaii's only JavaScript Web Engineering Bootcamp.
              During my time at DevLeague, I was able to completely immerse
              myself in software development training. After completing 800+
              hours, I developed invaluable hands-on experience with front-end
              and back-end web technologies. These include working with HTML5,
              CSS3, JavaScript, Node.js, Docker, React, Angular, Amazon Web
              Services (AWS), PostgreSQL, Git, and more. Day to day, I am
              motivated to constantly improving myself and am working on
              becoming a stronger developer. At the moment, I am brushing up on
              Angular, studying UI/UX concepts, and tinkering with Unity game
              design.
            </p>
          </div>
        </header>
        <br />
        <ul className="icons major">
          <li>
            <span className="icon brands fa-html5 major style1">
              <span className="label">HTML5</span>
            </span>
          </li>
          <li>
            <span className="icon brands fa-css3-alt major style2">
              <span className="label">CSS3</span>
            </span>
          </li>
          <li>
            <span className="icon brands fa-react major style3">
              <span className="label">React</span>
            </span>
          </li>
          <li>
            <span className="icon brands fa-angular major style2">
              <span className="label">Angular</span>
            </span>
          </li>
          <li>
            <span className="icon brands fa-aws major style3">
              <span className="label">AWS</span>
            </span>
          </li>
          <br />
          <li>
            <span className="icon brands fa-github major style2">
              <span className="label">GitHub</span>
            </span>
          </li>
          <li>
            <span className="icon brands fa-git major style3">
              <span className="label">Git</span>
            </span>
          </li>
          <li>
            <span className="icon brands fa-js major style1">
              <span className="label">JS</span>
            </span>
          </li>
          <li>
            <span className="icon brands fa-node major style2">
              <span className="label">Node.js</span>
            </span>
          </li>
          <li>
            <span className="icon brands fa-docker major style3">
              <span className="label">Docker</span>
            </span>
          </li>
          <li>
            <span className="icon brands fa-bootstrap major style1">
              <span className="label">Bootstrap</span>
            </span>
          </li>
        </ul>
      </div>
      <br />
    </section>

    {/* <section id="two" className="wrapper style2 special">
      <div className="inner">
        <header className="major">
          <h2>List Section</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Arcu accumsan</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section> */}
    <section id="two" className="wrapper alt style" style={{ margin: '30px' }}>
      <div className="content">
        <h2 style={{ color: 'white', textAlign: 'left' }}>Recent Projects</h2>
      </div>
    </section>
    <section id="three" className="wrapper alt style2">
      {/* ARTBREAK */}
      <section className="spotlight">
        <video className="image" playsInLine loop muted autoPlay>
          <source src={artbreakvid} type="video/mp4" poster={artbreakimg} />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h2>
            ARTBREAK-HI{' '}
            <a
              href="https://github.com/j10-n/artbreak-hawaii"
              className="icon brands fa-github"
            >
              <span className="label">Github</span>
            </a>
          </h2>

          <p>
            ARTBREAK is a platform for artists to share their work and get in
            touch with potential commissioners. Powered by Stripe, sending and
            paying invoices is simplified. Using Pusher Chatkit, users are able
            to send messages and create private rooms in real time!
          </p>
        </div>
      </section>

      {/* Welcome Home */}
      <section className="spotlight">
        <video className="image" playsInLine loop muted autoPlay>
          <source
            src={welcomehomevid}
            type="video/mp4"
            poster={welcomehomeimg}
          />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h2>
            Welcome Home{' '}
            <a
              href="http://welcomehomebucket.s3-website-us-west-2.amazonaws.com/"
              className="icon solid fa-external-link-alt"
            >
              <span className="label">External Link</span>
            </a>
          </h2>
          <p>
            Welcome Home is a game I created with a team of 4 for the 2019
            Global Game Jam Honolulu. Using software technologies such as Unity,
            C#, and Blender we were able to create a game that represents home
            to us. We deployed this project to our AWS bucket so that everyone
            can play!
          </p>
        </div>
      </section>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Let's Get In Touch!</h2>
          <p>
            Interested in working together? If you have any questions or just
            want to chat, please feel free to send me a message using the form
            below!
          </p>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="fields" style={{ float: 'center' }}>
              <div className="field half">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div className="field half">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="field">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows="7"
                />
              </div>
              <ul className="actions">
                <li>
                  <input
                    style={{ marginTop: '20px' }}
                    type="submit"
                    value="Send Message"
                    className="button primary"
                  />
                </li>
              </ul>
            </div>
          </form>
        </header>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
