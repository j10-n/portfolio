import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import artbreak from '../assets/images/artbreak.gif';
import welcomehome from '../assets/images/welcomehome.gif';
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
            <p style={{ textAlign: 'center' }}>
              <img className="image avatar" src={avatar} />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
              magna tristique, posuere metus tincidunt, lacinia tellus. Quisque
              blandit, quam quis mollis egestas, orci velit elementum dolor, nec
              ornare dolor urna sed tellus. Nullam sapien dui, rhoncus id varius
              id, pulvinar sit amet dui. Nunc eu eros sodales ipsum volutpat
              facilisis ut ac eros. Suspendisse non congue urna. Nulla ligula
              quam, iaculis non tincidunt in, semper eu tortor. Nullam
              consectetur cursus nibh non faucibus. Quisque auctor justo sit
              amet congue vestibulum. Nullam volutpat nisi in pellentesque
              auctor. Nunc congue eros elit, in porta lacus feugiat nec. Nullam
              sapien dui, rhoncus id varius id, pulvinar sit amet dui. Nunc eu
              eros sodales ipsum volutpat facilisis ut ac eros. Suspendisse non
              congue urna. Nulla ligula quam, iaculis non tincidunt in, semper
              eu tortor. Nullam consectetur cursus nibh non faucibus. Quisque
              auctor justo sit amet congue vestibulum. Nullam volutpat nisi in
              pellentesque auctor. Nunc congue eros elit, in porta lacus feugiat
              nec.
            </p>
          </div>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon brands fa-html5 major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon brands fa-css3-alt major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon brands fa-react major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
          <li>
            <span className="icon brands fa-angular major style2">
              <span className="label">Dolor</span>
            </span>
          </li>
          <li>
            <span className="icon brands fa-aws major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
          <br />
          <li>
            <span className="icon brands fa-github major style2">
              <span className="label">Dolor</span>
            </span>
          </li>
          <li>
            <span className="icon brands fa-git major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
          <li>
            <span className="icon brands fa-js major style1">
              <span className="label">Dolor</span>
            </span>
          </li>
          <li>
            <span className="icon brands fa-node major style2">
              <span className="label">Dolor</span>
            </span>
          </li>
          <li>
            <span className="icon brands fa-npm major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
          <li>
            <span className="icon brands fa-sass major style1">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
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
        <div className="image">
          <img src={artbreak} alt="" />
        </div>
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
        <div className="image">
          <img src={welcomehome} alt="" />
        </div>
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
            Welcome Home is a game I created with a team for the 2019 Global
            Game Jam Honolulu. Using technologies such as Unity, C#, and Blender
            we were able to create a game that represents home to us. We
            deployed this project to our AWS bucket so that everyone can play!
          </p>
        </div>
      </section>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Let's Get In Touch!</h2>
          <p>
            If you have want to start a project, have questions, or just want to
            chat, message me here!
          </p>
        </header>
        <form>
          <div class="fields">
            <div class="field half">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div class="field half">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div class="field">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="7"
              />
            </div>
          </div>
          <ul class="actions">
            <li>
              <input
                type="submit"
                value="Send Message"
                class="button primary"
              />
            </li>
          </ul>
        </form>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
