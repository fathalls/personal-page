import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Navigation from "../../components/navigation"
import react from "../../images/react.png"
import token from "../../images/accesstoken.png"
import authcode from "../../images/authcode.png"
import accounts from "../../images/accounts.png"
import balance from "../../images/balance.png"
import ReactGA from "react-ga"

function initializeReactGA() {
  ReactGA.initialize("UA-144983266-1")
  ReactGA.pageview("/random-zenhabits-article.js")
}
class Article extends React.Component {
  render() {
    initializeReactGA()
    return (
      <Layout>
        <SEO title="Building a Monzo Bank API application" />
        <div className="row">
          <Navigation />
          <div className="content-column">
            <article
              id="d5c4033f-e84a-4d8a-8b83-17a5e19cffc2"
              class="page sans"
            >
              <header>
                <h1 class="page-title">
                  Building a Monzo Bank API application
                </h1>
              </header>
              <div class="page-body">
                <h2 id="2d9080a2-e95f-46e8-b2b5-90e3c0ebd210" class="">
                  Need{" "}
                </h2>
                <p id="ddc8afca-3192-4fb3-9978-1b541283dbbe" class="">
                  I have three bank accounts. Everytime I need to look at them,
                  I have to login to three different apps, check my balance in
                  each of them and sum them up.
                </p>
                <p id="9c144261-08ee-40bc-94aa-38e143d56f44" class="">
                  I needed an app which does this work for me.
                </p>
                <p id="8912cc0e-4d06-45d9-b405-f492bd350cb6" class="">
                  I started researching ways of doing this. I came across the{" "}
                  <a href="https://www.openbanking.org.uk/customers/what-is-open-banking/">
                    Open Banking initiative
                  </a>
                  . It allows individuals and businesses to access financial
                  information with the approval of their customers. There exists
                  a number of apps which offer this functionality. Most of them
                  are not free.
                </p>
                <p id="e471f2d2-bbdc-4617-a08e-535555c1c589" class="">
                  I decided then to build it myself.
                </p>
                <p id="4e1157b0-f841-4677-b80f-ed90a6e52807" class="">
                  I took a look at the developers documentation for the three
                  banks where I have accounts, Monzo is one of them. They have a
                  very clear documentation, with step-by-step instructions to
                  implement the core of the OAuth 2.0 flow.
                </p>
                <h2 id="ed1f170a-ce6f-444d-9e4c-0f4ba920fd13" class="">
                  Solution
                </h2>
                <p id="92038d45-c7f3-4ce5-b1ae-0005781d65c7" class="">
                  I implemented a web app, using React for a basic front-end,
                  Express in the back-end, all managed by webpack.
                </p>
                <h3 id="a9aa8b9a-5a43-4be8-b9e2-b8b8f4c4b38d" class="">
                  Set-up
                </h3>
                <p id="6db3f5c2-fa30-4cc7-9bc0-006d5e31a2c2" class="">
                  We need to do a number of things before starting to code:
                </p>
                <ol
                  id="61e314cb-0cd0-4d62-aaec-241f0ec5ec17"
                  class="numbered-list"
                  start="1"
                >
                  <li>
                    Go to{" "}
                    <a href="https://developers.monzo.com/">
                      Monzo&#x27;s developers portal
                    </a>
                    . You can sign-in using the email address linked to your
                    Monzo account.
                  </li>
                </ol>
                <ol
                  id="e1d1313f-0746-4629-86dc-5646618d83f0"
                  class="numbered-list"
                  start="2"
                >
                  <li>
                    Add an OAuth 2.0 client in the <code>Client</code> tab, this will create a
                    profile for your app, where you define your redirect URI.{" "}
                  </li>
                </ol>
                <ol
                  id="3eb15137-e75b-4c84-9019-6c4961aae37b"
                  class="numbered-list"
                  start="3"
                >
                  <li>
                    Keep <code>client_secret</code> and <code>client_id</code> generated in step 2, we
                    will need these to get <code>access_token</code> from Monzo OAuth 2.0
                    server.
                  </li>
                </ol>
                <ol
                  id="4e0707df-eb36-407d-bf83-23dbe9bd3071"
                  class="numbered-list"
                  start="4"
                >
                  <li>
                    Implement a minimal app which supports React, Babel,
                    Node.js, Express, and is managed by webpack. The source code
                    for a minimal configuration can be found{" "}
                    <a href="https://github.com/fathalls/react-express-webpack-boilerplate">
                      here
                    </a>
                    .
                  </li>
                </ol>
                <h3 id="dfa11a02-5711-490a-a482-6b3c9be3225f" class="">
                  Implementation
                </h3>
                <p id="92144256-41d8-4135-b827-152bf35ff0bc" class="">
                  The core of the application is implementing the OAuth 2.0
                  workflow.
                </p>
                <p id="b9686de7-9971-4cfc-8a4c-93193b96ef6d" class="">
                  We need two configuration files to store the information about
                  the client:
                </p>
                <ul
                  id="4389d771-f499-4ffb-a5e3-03555dcf271e"
                  class="bulleted-list"
                >
                  <li>
                    A file for client parameters: <code>client_id</code>, <code>client_secret </code> 
                     and <code>redirect_uri</code>.
                  </li>
                </ul>
                <ul
                  id="2e236c13-7bf7-4506-bf37-3316ff66bc5c"
                  class="bulleted-list"
                >
                  <li>
                    A file for the different urls - this is useful for code
                    clarity.
                  </li>
                </ul>
                <p id="efaa2c4b-bfa9-413d-a26e-fa73d5f4b064" class=""></p>
                <p id="f1568ff6-e1cc-4dda-aa57-0a444bb0f5ad" class="">
                  To get the balance for an account, we need to follow these
                  steps:
                </p>
                <ol
                  id="79313963-ef90-410a-bb4e-8f9c4e9912b2"
                  class="numbered-list"
                  start="1"
                >
                  <li>
                    Get an authorisation code from Monzo&#x27;s OAuth.2.0 server -
                    this will redirect the client to Monzo&#x27;s portal.
                    <figure
                      id="cba575e4-2bdc-40ae-877b-1a886785db33"
                      class="image"
                    >
                      <a>
                        <img
                          src={authcode}
                        />
                      </a>
                    </figure>
                  </li>
                </ol>
                <ol
                  id="0a20c066-6a3e-4f92-9e61-1cf3038a87a5"
                  class="numbered-list"
                  start="2"
                >
                  <li>
                    Exchange the authorisation code for an access token, store
                    the latter and redirect to the home page - at this step I
                    store the token in a global variable, this can be improved.
                    <figure
                      id="70996667-7706-41f5-b0c8-e9878c6e87b7"
                      class="image"
                    >
                      <a>
                        <img
                          src={token}
                        />
                      </a>
                    </figure>
                  </li>
                </ol>
                <ol
                  id="792e8bba-c83d-4613-96f4-615f61ebdf5c"
                  class="numbered-list"
                  start="3"
                >
                  <li>
                    Get the balance using the access token.We start by getting
                    the account ID:
                    <figure
                      id="b5b40bde-711d-4ed7-b180-1ac05747875f"
                      class="image"
                    >
                      <a>
                        <img
                          src={accounts}
                        />
                      </a>
                    </figure>
                    <p id="23468225-20e3-4181-adee-a579ca98c0de" class="">
                      Then we get the balance for the given account ID:
                    </p>
                    <figure
                      id="bb106792-6986-48ee-9b0e-6f1514bc5dfe"
                      class="image"
                    >
                      <a>
                        <img
                          src={balance}
                        />
                      </a>
                    </figure>
                  </li>
                </ol>
                <p id="e43cc5b3-bb3a-41ab-a78e-0e7c37654ddc" class=""></p>
                <p id="be1ec3c9-6098-46dc-9baa-600753e4a9cf" class="">
                  The minimal React app makes these calls:
                  <div class="indented">
                    <figure
                      id="db2634fd-7835-4274-9a70-f3f9135c134a"
                      class="image"
                    >
                      <a>
                        <img
                          src={react}
                        />
                      </a>
                    </figure>
                  </div>
                </p>
                <h2 id="bcb4f22c-3bc4-41dc-b97c-a149deed3727" class="">
                  Next steps
                </h2>
                <p id="09220c74-217f-4d04-9693-dd422602c326" class="">
                  This was a basic implementation of the OAuth 2.0 flow to obtain
                  the balance. We can improve it by:
                </p>
                <ul
                  id="cd4eaa87-fc93-476d-b538-9adb6de82fce"
                  class="bulleted-list"
                >
                  <li>Implementing the access token refresh mechanism.</li>
                </ul>
                <ul
                  id="a0d17c14-3b4b-4906-9c13-dbd9b662792f"
                  class="bulleted-list"
                >
                  <li>
                    changing the access token storage to be more secure - in a
                    database for instance.
                  </li>
                </ul>
                <ul
                  id="8fa04c2b-d570-482c-9916-fcfc1c072c45"
                  class="bulleted-list"
                >
                  <li>
                    Creating a minimalist design for the page - currently
                    sketching :).
                  </li>
                </ul>
                <p id="a2b7ed72-46c7-438d-b439-b752c8474ea9" class="">
                  Happy coding!
                </p>
              </div>
            </article>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Article
