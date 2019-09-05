import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Navigation from "../../components/navigation"
import ReactGA from "react-ga"

function initializeReactGA() {
  ReactGA.initialize("UA-144983266-1")
  ReactGA.pageview("/how-to-choose-your-database")
}
class Article extends React.Component {
  render() {
    initializeReactGA()
    return (
      <Layout>
        <SEO title="How to choose your database" />
        <div className="row">
          <Navigation />
          <div className="content-column">
            <article
              id="fadc4c51-f840-4550-865e-7f44dee368dd"
              class="page sans"
            >
              <header>
                <h1 class="page-title">How to choose your database</h1>
              </header>
              <div class="page-body">
                <p id="5dfc5ed2-8e8d-464b-9d3b-26870b914dc2" class="">
                  Choosing a database management system for a new project can be
                  tricky. Several criteria should be taken into consideration.
                  In this article, I compare relational, NoSQL and NewSQL
                  database models.{" "}
                </p>
                <p id="efb0fc7c-6bce-40e1-aa90-10aa71ffd5fa" class="">
                  You can refer to my <a href="databases-101" target="_blank">Databases 101</a>
                   article for more information about these data models, and a
                  glossary of the most common terms in the database world.
                </p>
                <p id="09d52646-fffa-41e8-a90f-ed5cf8ee977f" class=""></p>
                <p id="4ca18171-cac1-4c86-863c-e1266da4e38d" class="">
                  While choosing a database model, we generally have to keep
                  these considerations in mind:
                </p>
                <ul
                  id="c3adb8f4-2a1b-4e7c-9d56-0a3c48693e7c"
                  class="bulleted-list"
                >
                  <li>
                    Does it need to support <em>OLTP</em> operations?
                  </li>
                </ul>
                <ul
                  id="b851e371-a47f-4d0a-9825-4742ecd763e7"
                  class="bulleted-list"
                >
                  <li>
                    Does it need to support <em>OLAP</em> operations?
                  </li>
                </ul>
                <ul
                  id="42f180bf-9bd6-4d46-90f6-76a7dd67f67a"
                  class="bulleted-list"
                >
                  <li>Is my data structured?</li>
                </ul>
                <ul
                  id="1aad7ddf-2bfb-4158-b310-6232fb414e5f"
                  class="bulleted-list"
                >
                  <li>Do I have a high volume of data?</li>
                </ul>
                <div
                  id="74bacbae-c2e7-4204-8b28-95dd2fa73b9c"
                  class="table"
                >
                  <h4 class="collection-title">Database Models Comparison </h4>
                  <table class="collection-content">
                    <thead>
                      <tr>
                        <th>Database Model</th>
                        <th>ideal for</th>
                        <th>not ideal for</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr id="b3febf5a-e17f-42dc-b934-db496d2ad69c">
                        <td class="cell-title">
                          <a href="https://www.notion.so/Relational-b3febf5ae17f42dcb934db496d2ad69c" target="_blank">
                            Relational
                          </a>
                        </td>
                        <td class="cell-}?LA">
                          <span class="selected-value">OLTP</span>
                          <span class="selected-value">Structured data</span>
                        </td>
                        <td class="cell-h|Kq">
                          <span class="selected-value">
                            High volume of data
                          </span>
                        </td>
                      </tr>
                      <tr id="10d187fd-202e-49ab-b11d-61d31fa957ca">
                        <td class="cell-title">
                          <a href="https://www.notion.so/NoSQL-10d187fd202e49abb11d61d31fa957ca" target="_blank">
                            NoSQL
                          </a>
                        </td>
                        <td class="cell-}?LA">
                          <span class="selected-value">
                            High volume of data
                          </span>
                          <span class="selected-value">OLAP</span>
                        </td>
                        <td class="cell-h|Kq">
                          <span class="selected-value">OLTP</span>
                          <span class="selected-value">Structured data</span>
                        </td>
                      </tr>
                      <tr id="b3dec5c0-b6f5-43db-9861-3644ef8e1bb7">
                        <td class="cell-title">
                          <a href="https://www.notion.so/NewSQL-b3dec5c0b6f543db98613644ef8e1bb7" target="_blank">
                            NewSQL
                          </a>
                        </td>
                        <td class="cell-}?LA">
                          <span class="selected-value">
                            High volume of data
                          </span>
                          <span class="selected-value">OLAP</span>
                          <span class="selected-value">OLTP</span>
                          <span class="selected-value">Structured Data</span>
                        </td>
                        <td class="cell-h|Kq"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p id="1c508d25-4c5e-4b75-85b1-aec56bfcbca4" class="">
                  The NewSQL solution seems to promise the best of two worlds;
                  ACID compliant (like relational databases) and horizontally
                  scalable (like NoSQL databases). The only problem is
                  the solution&#x27;s maturity; it&#x27;s not as mature as
                  relational and NoSQL DBMSs.
                </p>
                <p id="19428099-149c-45b3-8a32-400b41a5357f" class=""></p>
                <p id="af7477a5-5f35-4c9e-8c5b-40874e12248b" class="">
                  Below are some useful material for further
                  reading/listening/viewing.
                </p>
                <ul
                  id="8b593efd-e0b8-4a78-a3fd-47cab2b2ca83"
                  class="bulleted-list"
                >
                  <li>
                    The women in tech show 
                    <a href="https://player.fm/series/series-2468272/database-scaling-with-deepthi-sigireddi" target="_blank">
                      podcast
                    </a>
                     with Deepthi Sigireddi on databases scaling.
                  </li>
                </ul>
                <ul
                  id="457eb406-58c3-45db-be67-a9f9dc2b1bc0"
                  class="bulleted-list"
                >
                  <li>
                    Software engineering daily 
                    <a href="https://softwareengineeringdaily.com/2015/07/30/mongodb-with-bryan-reinero/" target="_blank">
                      podcast
                    </a>
                     with Bryan Reinero on MongoDB.
                  </li>
                </ul>
                <ul
                  id="8201a102-78dc-4ede-9868-f9535e01d513"
                  class="bulleted-list"
                >
                  <li>
                    Uber engineering 
                    <a href="https://eng.uber.com/schemaless-part-one/" target="_blank">blog</a>
                     on Schemaless.
                  </li>
                </ul>
                <ul
                  id="87958b43-7214-46ac-909d-e7753d4630b5"
                  class="bulleted-list"
                >
                  <li>
                    Using Cassandra for storing financial transactions 
                    <a href="https://skillsmatter.com/skillscasts/10469-retail-banking-using-cassandra-for-storing-financial-transactions" target="_blank">
                      talk
                    </a>
                    .
                  </li>
                </ul>
                <ul
                  id="be4eb635-f5e9-4b5c-a918-d5a1bb0613b0"
                  class="bulleted-list"
                >
                  <li>
                    Introduction to Database Management Systems 
                    <a href="https://learning.oreilly.com/library/view/introduction-to-database/9788131700785/" target="_blank">
                      book
                    </a>
                    .
                  </li>
                </ul>
                <ul
                  id="615a24bd-725e-444a-9e17-5d4c8897b6f3"
                  class="bulleted-list"
                >
                  <li>
                    Database Systems: Concepts, Design and Applications 
                    <a href="https://learning.oreilly.com/library/view/database-systems-concepts/9788177585674/">
                      book
                    </a>
                    .
                  </li>
                </ul>
                <p id="1b3b2b17-0349-416c-89ea-73afea6f58e4" class=""></p>
                <p id="b812d0f9-47df-4068-81af-0dcb24f95bd0" class="">
                  Hope this article and the{" "}
                  <a href="databases-101">Databases 101</a> article helped with
                  understanding the different tradeoffs we have to make when choosing a
                  DBMS. You can reach out to me via <a href="https://twitter.com/salwa_fathallah" target="_blank">
                    Twitter
                  </a> if you want to chat
                  more about it!
                </p>
                <p id="78dfdd32-4245-44f5-9305-16db5d0f1677" class=""></p>
              </div>
            </article>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Article
