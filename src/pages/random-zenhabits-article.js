import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import code from "../images/zenhabits.svg"
import command from "../images/zenhabitscli.svg"

class Article extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Writing" />
        <div className="row">
          <Navigation />
          <div className="content-column">
            <article
              id="945abbb6-e569-4eb1-84f9-0942753af19f"
              className="page sans"
            >
              <header>
                <h1 className="page-title">Random Zen Habits article</h1>
              </header>
              <div className="page-body">
                <h3 id="91d75d9a-4060-4456-ab4c-1fbe001ae43d" className="">
                  Problem
                </h3>
                <p id="0269db68-31b4-4a92-a1f8-f78f82b2b90a" className="">
                  Lately, I came across the{" "}
                  <a href="https://zenhabits.net/">Zen Habits</a> website.
                  it&#x27;s Leo Babauta&#x27;s blog, where he writes about
                  minimalism, mindfulness and finding simplicity in
                  everyday&#x27;s life, check his{" "}
                  <a href="https://zenhabits.net/about/">about</a> section for
                  more infos!
                </p>
                <p id="2f670a7d-dd8a-4fc7-9c27-afe62c94457d" className="">
                  Everything looked interesting - big kudos to the very simple
                  design- , the paradox of choice led me to think of a way where
                  I don&#x27;t have to choose what to read, and delegate this
                  task to an automated process. You can find the{" "}
                  <a href="https://github.com/fathalls/zen-habits-random-article/blob/master/getZenHabitRandomArticle.py">
                    source code
                  </a>{" "}
                  here.
                </p>
                <p id="b7278368-ebe5-4494-ba95-329850c34b21" className=""></p>
                <h3 id="d1f3b695-9f7b-4a61-93fc-17ef4b2161a9" className="">
                  Solution
                </h3>
                <p id="10ff2ff1-f717-4909-b56a-7c991ec4ac17" className="">
                  the starting point was to scrape the archive web page,
                  and think of a way to return a random article in the page.
                </p>
                <p id="7f1ef770-d983-4c2d-b1a3-90fc739ea626" className="">
                  I have very basic knowledge in Python, but it was enough for
                  what I needed to do.
                </p>
                <p id="156176ce-5ba2-405b-90a2-f7e16266c971" className="">
                  the script does the following
                </p>
                <ol
                  id="95523123-658e-4590-8fb8-d1aecd148191"
                  className="numbered-list"
                  start="1"
                >
                  <li>gets the archive webpage</li>
                </ol>
                <ol
                  id="bd2539e6-fe23-4937-b691-8c2bf0cc04ed"
                  className="numbered-list"
                  start="2"
                >
                  <li>parses the file to get all the <code>a</code> tags</li>
                </ol>
                <ol
                  id="19fd252e-1134-4219-83c0-a7de78f662c1"
                  className="numbered-list"
                  start="3"
                >
                  <li>
                    generates a number between 1 and the number of <code>a</code> tags in the
                    page.
                  </li>
                </ol>
                <ol
                  id="95692020-3e21-4eed-a3ee-c44509262b62"
                  className="numbered-list"
                  start="4"
                >
                  <li>
                    return the link in the <code>a</code> tag for the generated number.
                  </li>
                </ol>
                <pre id="04f4b1c3-e20c-446c-a4e7-58daf0c063c7" className="code">
                  <img src={code} alt="code" />
                </pre>
                <p id="d18326fa-e106-4dbc-ae6d-65df4d80cf0d" className=""></p>
                <p id="50376064-b4c7-4282-bd92-42558c70e57b" className="">
                  You can then run this script from the command line
                </p>
                <pre id="f2110ba1-9cfb-4331-8320-37c665c4717b" className="code">
                  <img src={command} alt="command" />
                </pre>
                <p id="d9ea4c9c-1b98-4b8d-aa96-e0c618ad8988" className=""></p>
                <p id="12b5bdfa-9cf3-4a68-b592-908a682949d9" className="">
                  And it opens a link in your web browser!
                </p>
                <p id="44f9de15-bfa8-41ea-87dd-0dd2740d4324" className=""></p>
                <h3 id="777b0b8d-96a7-4d7e-a5ba-fb0cb496a453" className="">
                  Improvements
                </h3>
                <p id="3acb9a44-f437-4ec9-b49f-64fc1c3b79b2" className="">
                  For a better UX, we can create a chrome extension which runs
                  the the script above.
                </p>
                <p id="699c9b3b-428d-4b4d-9bf8-a753eae16ad8" className="">
                  The problem with this, it&#x27;s that Chrome Extension only
                  support JavaScript code.
                </p>
                <p id="cdfdf13c-fd5f-43f5-b7d4-961c6aea57ac" className="">
                  We have two options
                </p>
                <ol
                  id="925e662d-80a3-4eae-b8aa-47bd9ce14e69"
                  className="numbered-list"
                  start="1"
                >
                  <li>
                    Use the transpiler RapydScript to translate Python code to
                    JavaScript
                  </li>
                </ol>
                <ol
                  id="8ebc3e76-9333-4ef3-aa4d-018b7c59791c"
                  className="numbered-list"
                  start="2"
                >
                  <li>Rewrite it in Javascript :)</li>
                </ol>
                <p id="2f98ed43-a369-49f2-994c-317a3f44edf4" className=""></p>
                <p id="6cf989e4-e30f-4401-8a23-d384e19ed61c" className="">
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
