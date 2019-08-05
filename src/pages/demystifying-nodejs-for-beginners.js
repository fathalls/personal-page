import React from "react"
import ReactGA from "react-ga"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation"

function initializeReactGA() {
  ReactGA.initialize("UA-144983266-1")
  ReactGA.pageview("/demystifying-nodejs-for-beginners")
}
class Article extends React.Component {
  render() {
    initializeReactGA()
    return (
      <Layout>
        <SEO title="Demystifying Node.js for beginners" />
        <div className="row">
          <Navigation />
          <div className="content-column">
            <article
              id="c0c11a07-7c70-4b69-a766-6ad932e87d91"
              className="page serif"
            >
              <header>
                <h1 className="page-title">
                  Demystifying Node.js for beginners
                </h1>
              </header>
              <div className="page-body">
                <h3 id="17632bd2-59fb-4a1e-985a-e0bba0a4c5e2" className="">
                  tl;dr{" "}
                </h3>
                <p id="0acd30eb-3197-45ab-a71a-7dda340f9399" className="">
                  This article gives an overview of how Node.js works under the
                  hood along with some pointers to get started with building
                  your first Node.js application.
                </p>
                <p id="a9874071-5ff4-4b45-907f-f210d12681ca" className=""></p>
                <h3 id="5f08f482-a106-474a-926e-ed55f2871121" className="">
                  JavaScript - Client side &amp; Server side
                </h3>
                <p id="28d89ac2-4ea4-429f-9bb7-0c62e9a50c2d" className="">
                  JavaScript language was originally released in 1997 by
                  Netscape. Its initial goal was to be a Browser side
                  programming language.
                </p>
                <p id="7b08610f-5411-431e-9c4e-5af331b9d9bd" className="">
                  The Browser loads the script, compiles it on the fly to binary
                  code and executes it.
                </p>
                <p id="ce5c51cd-10c2-4331-b287-1e67a59ecf57" className=""></p>
                <p id="c311b8de-9cf4-473e-b6eb-7f25114c9871" className="">
                  The need to have consistent codebase across client and server
                  side was growing, therefore a runtime similar to the one
                  running in Browsers was required for servers.
                </p>
                <p id="6b31a122-3530-4321-9e6a-e782b58a7a32" className="">
                  In addition to being a compiler and an optimiser, this runtime
                  has to manage the dependencies between modules and to handle
                  the events received from the client side and the callbacks.
                </p>
                <p id="17fba89a-8189-4280-83db-a7b27b28e934" className=""></p>
                <h3 id="9699491c-6627-4d22-9417-59c2a01b26aa" className="">
                  Node.js
                </h3>
                <p id="da2525dd-f50c-4139-b898-f2f60b617fee" className="">
                  Node.js is a server side JavaScript runtime. It allows us to
                  run JavaScript on the server-side, by providing dependency
                  management, compiling and event handling capabilities.
                </p>
                <p id="2861e0e1-7749-4c2c-9543-ce4ad91f59df" className="">
                  It is also famous for being fast and performant compared to
                  similar runtimes.
                </p>
                <p id="b1632dbc-0c66-41ca-9146-06c7663daeb6" className=""></p>
                <p id="bd38e335-14f1-49bd-9ca2-455818cf9cbf" className="">
                  Below some if its main features:
                </p>
                <ul
                  id="20c86410-8021-4ec8-9c7c-df9d3fa643a1"
                  className="bulleted-list"
                >
                  <li>
                    {" "}
                    <strong>Compiler</strong>: The compiler is built on top of
                    V8 engine. It compiles and executes JavaScript code, it
                    handles the call stack and it manages the memory allocation
                    using the Garbage Collector.
                  </li>
                </ul>
                <p id="2c65ccd5-4877-4e0f-b404-54fd8094bba2" className=""></p>
                <ul
                  id="cf529c84-891b-40a6-8e8c-6af9ec592cf9"
                  className="bulleted-list"
                >
                  <li>
                    <strong>Single Threaded</strong>: It is single threaded,
                    unlike other server side runtimes (e.g. Vertx). Node.js
                    maintains a queue of requests from the client side,
                    processes one request at a time and sends back the response.
                    This makes it performant because the cost of spinning new
                    threads for new incoming requests can be expensive, This is
                    because a large block of memory has to be allocated and
                    initialised for the thread stack, it needs to be registered
                    in the runtime, which makes it CPU intensive.{" "}
                  </li>
                </ul>
                <p id="60d47dd0-d85a-4256-a52d-5af2b9a8373f" className=""></p>
                <ul
                  id="43d4b919-cc50-466a-98b3-9996ab41be65"
                  className="bulleted-list"
                >
                  <li>
                    <strong>Non-blocking</strong>: It offers the possibility to
                    have non-blocking code. All I/O operations in Node.js have
                    async versions with callbacks. This is useful in the context
                    of single threaded event loop; we don&#x27;t want to block
                    the next request to be processed by having blocking code.
                  </li>
                </ul>
                <p id="a22dd146-5d4d-4fa1-9023-0524e7e7f808" className=""></p>
                <ul
                  id="455e9754-7806-44a3-905b-288c3a61963b"
                  className="bulleted-list"
                >
                  <li>
                    <strong>Dependency Management</strong>: It handles external
                    and internal module dependency. We use NPM (Node Package
                    Manager) to install external modules - or libraries - and
                    the keyword Require (Javascript ES5 or earlier) or Import
                    (JavaScript ES6) to use them in the code. We can also export
                    classes or functions within the same project and use it as
                    an internal dependency in another part of the code. It is
                    always a good practice to separate concerns by creating
                    internal modules.
                  </li>
                </ul>
                <p id="4b41fbde-a57a-4347-9c02-a28a0172f4dd" className=""></p>
                <h3 id="9ce1a91b-d474-49d0-a7a2-40041471a03f" className="">
                  Building a Node.js application
                </h3>
                <p id="56a48ff5-cb2a-44e4-a056-d0ea48c1b690" className="">
                  Now that we have covered the main features offered by Node.js,
                  we are ready to start building our Node.js server side
                  application. The internet is filled with simple tutorials to
                  build such applications!
                </p>
                <p id="bf26a603-dca1-47a4-9c93-a98c0ba1e734" className=""></p>
                <p id="e01fffc8-c953-49da-8066-11787df07fe9" className="">
                  Here is a list of the most used modules to build a MERN stack
                  application, MERN stands for MongoDB-Express-React-Node.
                </p>
                <ul
                  id="9dad84e6-c3d8-4a8c-99c3-119ebc785d79"
                  className="bulleted-list"
                >
                  <li>
                    <a href="https://webpack.js.org/" target="_blank">
                      webpack
                    </a>
                    : helps with building and packaging the code into a bundle
                    file, which is compatible and readable by the browser.
                  </li>
                </ul>
                <ul
                  id="0ea57749-2bb1-482f-a400-b34edcc733d2"
                  className="bulleted-list"
                >
                  <li>
                    <a href="https://babeljs.io/" target="_blank">
                      babel
                    </a>
                    : transpiles JavaScript ES6 and later versions to JavaScript
                    ES5. Since Browsers are slow to support newer versions of
                    JavaScript, this is a good way to code in JS ES6 without
                    having to worry about browser compatibility.
                  </li>
                </ul>
                <ul
                  id="c11e90f3-8aaf-4bb7-bace-dc90e3744f07"
                  className="bulleted-list"
                >
                  <li>
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
                      target="_blank"
                    >
                      fetch
                    </a>
                    : provides an interface to make HTTP requests.
                  </li>
                </ul>
                <ul
                  id="0af99f75-dd33-4a52-b6e2-674c84f82dbc"
                  className="bulleted-list"
                >
                  <li>
                    <a href="https://expressjs.com/" target="_blank">
                      express
                    </a>
                    : is a web framework for Node.js.
                  </li>
                </ul>
                <ul
                  id="01d7337c-b4f1-4e8c-93f9-b5f2cf0e8df1"
                  className="bulleted-list"
                >
                  <li>
                    <a href="http://mongoosejs.com/" target="_blank">
                      mongoose
                    </a>
                    : is a mongodb object modelling for node.js.
                  </li>
                </ul>
                <ul
                  id="d7d571a2-9236-452f-90e4-e04c95e11065"
                  className="bulleted-list"
                >
                  <li>
                    <a href="https://reactjs.org/" target="_blank">
                      react
                    </a>
                    : is the React library to build user interfaces.
                  </li>
                </ul>
                <ul
                  id="de65b200-c182-4975-b48b-dd857672291a"
                  className="bulleted-list"
                >
                  <li>
                    <a href="https://mochajs.org/" target="_blank">
                      mocha
                    </a>
                    : is the JavaScript testing framework.
                  </li>
                </ul>
                <p id="f24f0534-a215-4117-b1c7-33a44a478c7f" className=""></p>
                <p id="573ea3f7-9905-4f7e-9004-160cf2150cf4" className="">
                  Now that you had a sneak-peak of Node.js main functionalities,
                  let&#x27;s dive into some programming. Here is official{" "}
                  <a
                    href="https://nodejs.org/en/docs/guides/getting-started-guide/"
                    target="_blank"
                  >
                    getting started guide
                  </a>{" "}
                  that I find really helpful for newbies. Happy coding!
                </p>
                <p id="25f250ad-bb3a-4ca7-bace-1cd48684537f" className=""></p>
                <p id="1f74554f-01a7-413b-82f1-83e9b7efee0a" className=""></p>
                <p id="14668f4d-54f8-4e05-84a6-8e376ff85702" className=""></p>
                <p id="a201eac7-2878-4f2d-b19e-93cdc1ccdde1" className=""></p>
                <p id="c6f2cd47-0a66-4f03-9858-66c49937e338" className=""></p>
                <p id="4e27295b-5a14-4fed-8b9d-3cdbbed0778b" className=""></p>
                <p id="6260a8c1-2eae-4977-ba37-b170eb2db0c7" className=""></p>
                <p id="74a34e6b-acd8-438c-b5d8-89b07cde443c" className=""></p>
                <p id="cd60dd02-1952-4391-88ac-de560852355a" className=""></p>
              </div>
            </article>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Article
