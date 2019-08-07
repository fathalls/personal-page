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
              className="page sans"
            >
              <header>
                <h1 className="page-title">
                  Building a Monzo Bank API application
                </h1>
              </header>
              <div className="page-body">
                <h2 id="2d9080a2-e95f-46e8-b2b5-90e3c0ebd210" className="">
                  Problem{" "}
                </h2>
                <p id="ddc8afca-3192-4fb3-9978-1b541283dbbe" className="">
                  I have three bank accounts across several banking providers.
                  Everytime I need to find the total balance, I have to login to
                  three different apps, check my balance in each of them and sum
                  them up.
                </p>
                <p id="9c144261-08ee-40bc-94aa-38e143d56f44" className="">
                  I needed an app which automates this work for me.
                </p>
                <p id="8912cc0e-4d06-45d9-b405-f492bd350cb6" className="">
                  I started researching ways of doing this. I came across the{" "}
                  <a href="https://www.openbanking.org.uk/customers/what-is-open-banking/" target="_blank">
                    Open Banking initiative
                  </a>
                  : It allows individuals and businesses to access financial
                  information with the approval of their customers. There exists
                  a number of apps which offer this functionality. Most of them
                  are paid.
                </p>
                <h2 id="ed1f170a-ce6f-444d-9e4c-0f4ba920fd13" className="">
                  Solution
                </h2>
                <p id="4e1157b0-f841-4677-b80f-ed90a6e52807" className="">
                  I decided to build a bank balance aggregator myself, using the
                  Open Banking APIs across my bank providers. I took a look at
                  the developers documentation for the three banks where I have
                  accounts, Monzo is one of them. They have a very clear
                  documentation, with step-by-step instructions on how to
                  implement the OAuth2.0 flow.
                </p>
                <p id="92038d45-c7f3-4ce5-b1ae-0005781d65c7" className="">
                  I implemented a web app, using React for a basic front-end,
                  Express in the back-end, managed by webpack.
                </p>
                <h3 id="a9aa8b9a-5a43-4be8-b9e2-b8b8f4c4b38d" className="">
                  Set-up
                </h3>
                <p id="6db3f5c2-fa30-4cc7-9bc0-006d5e31a2c2" className="">
                  We need to do a number of things before implementing OAuth:
                </p>
                <p id="61e314cb-0cd0-4d62-aaec-241f0ec5ec17" className="">
                  <strong>Get the credentials to access the API:</strong>
                </p>
                <ol
                  id="5fc77c81-71aa-47fc-8768-e2142f9c61bb"
                  className="numbered-list"
                  start="1"
                >
                  <li>
                    Go to{" "}
                    <a href="https://developers.monzo.com/" target="_blank">
                      Monzo&#x27;s developers portal
                    </a>
                    . You can sign-in using the email address linked to your
                    Monzo account.
                  </li>
                </ol>
                <ol
                  id="e1d1313f-0746-4629-86dc-5646618d83f0"
                  className="numbered-list"
                  start="2"
                >
                  <li>
                    Add an OAuth client in the <code>Client</code> tab, this
                    will create a profile for your app, where you define your
                    redirect URI.
                  </li>
                </ol>
                <ol
                  id="3eb15137-e75b-4c84-9019-6c4961aae37b"
                  className="numbered-list"
                  start="3"
                >
                  <li>
                    Keep <code>client_secret</code> and <code>client_id</code>{" "}
                    generated in step 2, we will need these to get{" "}
                    <code>access_token</code> from the Monzo OAuth2.0 server.
                  </li>
                </ol>
                <p id="77b1e4b3-88e5-4ea6-90e0-7d65deeb37ac" className="">
                  <strong>Setup the foundation for the application:</strong>
                </p>
                <p id="4e0707df-eb36-407d-bf83-23dbe9bd3071" className="">
                  Implement a minimal app which supports React, Babel, Node.js,
                  Express, and is managed by webpack. The source code for a
                  minimal configuration can be found{" "}
                  <a href="https://github.com/fathalls/react-express-webpack-boilerplate" target="_blank">
                    here
                  </a>
                  .
                </p>
                <h3 id="dfa11a02-5711-490a-a482-6b3c9be3225f" className="">
                  Implementation
                </h3>
                <p id="b9686de7-9971-4cfc-8a4c-93193b96ef6d" className="">
                  We need two configuration files to store the information about
                  the client:
                </p>
                <ul
                  id="4389d771-f499-4ffb-a5e3-03555dcf271e"
                  className="bulleted-list"
                >
                  <li>
                    <code>OAuth_credentials</code>: a file for client
                    parameters: <code>client_id</code>,
                    <code> client_secret</code> and <code>redirect_uri</code>.
                  </li>
                </ul>
                <ul
                  id="2e236c13-7bf7-4506-bf37-3316ff66bc5c"
                  className="bulleted-list"
                >
                  <li>
                    <code>OAuth_urls</code>: a file for the OAuth endpoints -
                    this is useful for code clarity.
                  </li>
                </ul>
                <p id="efaa2c4b-bfa9-413d-a26e-fa73d5f4b064" className=""></p>
                <p id="f1568ff6-e1cc-4dda-aa57-0a444bb0f5ad" className="">
                  To get the balance for an account, we need to follow these
                  steps:
                </p>
                <ol
                  id="79313963-ef90-410a-bb4e-8f9c4e9912b2"
                  className="numbered-list"
                  start="1"
                >
                  <li>
                    Get an authorisation code from Monzo&#x27;s OAuth server -
                    this will redirect the client to Monzo&#x27;s portal.
                    <p
                      id="c7552563-ff09-4a3b-9fc3-a3a604286e2e"
                      className=""
                    ></p>
                    <pre>
                      {`
app.get("/monzopage", (req, res) => {
  res.redirect(
    urls.base_url +
      "?client_id=" +
      params.client_id +
      "&redirect_uri=" +
      params.redirect_uri +
      "&response_type=" +
      params.response_type +
      "&state=" +
      params.state
  );
});
                      `}
                    </pre>
                  </li>
                </ol>
                <ol
                  id="0a20c066-6a3e-4f92-9e61-1cf3038a87a5"
                  className="numbered-list"
                  start="2"
                >
                  <li>
                    Exchange the authorisation code for an access token, store
                    the latter and redirect to the home page (at this step I
                    store the token in a global variable, this can be improved).
                    <p
                      id="60745c96-9766-47cb-92ca-3523e79ec38b"
                      className=""
                    ></p>
                    <pre>
                      {`
app.get("/oauth/callback", (req, res) => {
  global.code = req.query.code;
  var client_id = params.client_id;
  var client_secret = params.client_secret;
  var redirect_uri = params.redirect_uri;
  var grant_type = params.grant_type;
  var url = urls.token_url;

  request.post(
    {
      url: url,
      form: {
        grant_type,
        client_id,
        client_secret,
        redirect_uri,
        code
      }
    },
    (err, response, body) => {
      var jsonBody = JSON.parse(body);
      global.access_token = jsonBody.access_token;
    }
  );

  res.redirect("/");
});
                    `}
                    </pre>
                  </li>
                </ol>
                <ol
                  id="792e8bba-c83d-4613-96f4-615f61ebdf5c"
                  className="numbered-list"
                  start="3"
                >
                  <li>
                    Get the balance using the access token.We start by getting
                    the account ID:
                    <p
                      id="5a31ffad-63bc-4877-9b30-b889b8e293cb"
                      className=""
                    ></p>
                    <p id="23468225-20e3-4181-adee-a579ca98c0de" className="">
                      <pre>
                        {`
app.get("/account", function(req, res) {
  var account_type = params.account_type;
  var access_token = global.access_token;
  var account_url = urls.account_url;
  request.get(
    {
      url: account_url + "?account_type=" + account_type,
      headers: {
        Authorization: "Bearer " + access_token
      }
    },
    (error, response, body) => {
      var jsonBody = JSON.parse(body);
      var account_id = jsonBody.accounts[0].id;
      res.json({
        account_id: account_id
      });
    }
  );
});
                        `}
                      </pre>
                      Then we get the balance for the given account ID:
                    </p>
                    <pre>{`
app.get("/balance", (req, res) => {
  var account_id = req.query.account_id;
  var balance_url = urls.balance_url;
  request.get(
    {
      url: balance_url + "?account_id=" + account_id,
      headers: {
        Authorization: "Bearer " + global.access_token
      }
    },
    (error, response, body) => {
      var balances = JSON.parse(body);

      res.json({
        balances: balances
      });
    }
  );
});
                    `}</pre>
                  </li>
                </ol>
                <p id="e43cc5b3-bb3a-41ab-a78e-0e7c37654ddc" className=""></p>
                <p id="be1ec3c9-6098-46dc-9baa-600753e4a9cf" className="">
                  The minimal React app makes these calls:
                </p>
                <pre>{`
import React from "react";
import fetch from "isomorphic-fetch";

class App extends React.Component {
  state = {
    account_id: "",
    balance: ""
  };

  loginToMonzo() {
    window.location.replace("/monzopage");
  }

  getBalance() {
    fetch("/account")
      .then(result => result.json())
      .then(response => {
        this.setState({ account_id: response.account_id });
        fetch("/balance?account_id=" + this.state.account_id)
          .then(result => result.json())
          .then(response => {
            this.setState({ balance: response.balances.balance });
          });
      });
  }

  render() {
    return (
      <div>
        <button onClick={e => this.loginToMonzo(e)}>Login to Monzo</button>
        <button onClick={e => this.getBalance(e)}>Get balance</button>
        <p>{this.state.balance}</p>
      </div>
    );
  }
}

export default App;
                `}</pre>
                <p id="29ce8f47-3615-4e99-a5ca-3fb5d3329212" className=""></p>
                <h2 id="bcb4f22c-3bc4-41dc-b97c-a149deed3727" className="">
                  Next steps
                </h2>
                <p id="09220c74-217f-4d04-9693-dd422602c326" className="">
                  Hope this helped you understand how to interact with
                  Monzo&#x27;s API to obtain the balance. We can improve it by:
                </p>
                <ul
                  id="cd4eaa87-fc93-476d-b538-9adb6de82fce"
                  className="bulleted-list"
                >
                  <li>Implementing the access token refresh mechanism.</li>
                </ul>
                <ul
                  id="a0d17c14-3b4b-4906-9c13-dbd9b662792f"
                  className="bulleted-list"
                >
                  <li>
                    changing the access token storage to be more secure - in a
                    database for instance.
                  </li>
                </ul>
                <ul
                  id="8fa04c2b-d570-482c-9916-fcfc1c072c45"
                  className="bulleted-list"
                >
                  <li>
                    Implementing a minimalist design for the page - currently
                    sketching :).
                  </li>
                </ul>
                <p id="a2b7ed72-46c7-438d-b439-b752c8474ea9" className=""></p>
                <p id="4faa7a80-a216-47b1-8f62-8c47ca1da6b6" className="">
                  If you get stuck with any step or need help, you can reach out
                  to me via{" "}
                  <a href="https://twitter.com/salwa_fathallah" target="_blank">Twitter</a>.
                </p>
                <p id="c3b6de05-0f24-49c3-9c18-3d0542864e26" className="">
                  Happy coding!{" "}
                </p>
                <p id="c8b40967-aa71-47bf-84a5-ba3ca6000a20" className=""></p>
              </div>
            </article>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Article
