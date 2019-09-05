import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Navigation from "../../components/navigation"
import ReactGA from "react-ga"

function initializeReactGA() {
  ReactGA.initialize("UA-144983266-1")
  ReactGA.pageview("/databases-101")
}
class Article extends React.Component {
  render() {
    initializeReactGA()
    return (
      <Layout>
        <SEO title="Databases 101" />
        <div className="row">
          <Navigation />
          <div className="content-column">
            <article
              id="d52de495-c791-4e3f-a840-cf3033f9a515"
              class="page sans"
            >
              <header>
                <h1 class="page-title">Databases 101</h1>
              </header>
              <div class="page-body">
                <h2 id="ec56e7e8-0d6b-40c9-b955-682dd8d8171a" class="">
                  a bit of history
                </h2>
                <p id="04b56434-bbe3-40f3-a9f5-66cb6b536e85" class="">
                  Before the bloom of databases and database management systems,
                  we used to store data in files, each row in a particular file
                  represented a record. Programmers had to build application
                  programs (AP) on top of this file to retrieve and use the data
                  stored in them. This is what we call Filesystems Management.
                </p>
                <p id="613ee155-4c5c-4799-b3b5-0bf98a0e16d3" class=""></p>
                <p id="908d2d39-6d2a-4811-bbc9-9c9d9936a350" class="">
                  Let&#x27;s take the example of a small hedge fund company. It
                  has employees, an HR department and an accountants&#x27;
                  department.
                </p>
                <p id="514df718-f4ca-4550-bdfb-c7af8a320a45" class="">
                  The HR department would have a file called Employees. They use
                  an AP built on top of this file.
                </p>
                <p id="0abf3ed1-d3a6-4bfc-8f92-c9724974bc54" class="">
                  The accountants&#x27; department has a copy of the same file,
                  with their own AP built on top of it.
                </p>
                <p id="f3c50dd5-655d-49fe-9241-bb49cc43d5ed" class="">
                  If a new employee is hired, the HR department needs to update
                  its Employee file. Which means that the accounts file is not
                  out of sync. This raises the consistency issue.
                </p>
                <p id="39c59561-4670-4b6f-8e33-9f61796c574f" class="">
                  If we change the name of one of the fields in the Employees file;
                  DOB to Date Of Birth, we will need to change the code of the
                  AP. This raises the manual work and scalability issue.
                </p>
                <p id="77c26360-c75e-4ff4-a3a4-403e45d05242" class=""></p>
                <p id="1c745f12-46dd-4262-aa5b-13a26a2c7931" class="">
                  By the 1960s, a new type of data storage and management was
                  developed by IBM to palliate all the above issues and more;
                  IMS, the first Database Management System (DBMS). 
                  <a href="https://www.ibm.com/support/knowledgecenter/zosbasics/com.ibm.imsintro.doc.intro/ip0ind0011003710.htm" target="_blank">
                    It was originally developed to handle the data of the Apollo
                    mission
                  </a>
                  .
                </p>
                <p id="455a892e-c18f-4cd5-b06d-f034e32a329c" class="">
                  A database model is the way data is organized in the 
                  <em>logical view</em>* level. It determines how the data is
                  stored, retrieved and updated.
                </p>
                <p id="f04a591d-4167-4a19-a9ff-cfa80aed6c08" class="">
                  The most used and popular ones are relational databases, NoSQL
                  and the latest trend, NewSQL.
                </p>
                <h2 id="95977ecd-3f25-4f42-80dd-86cb231fa0cc" class="">
                  Databases models
                </h2>
                <p id="55695c75-4778-4462-9a1c-c3436bdade01" class="">
                  A database model is the way data is organized in the 
                  <em>logical view</em>* level. It determines how the data is
                  stored, retrieved and updates(updated?)
                </p>
                <p id="ce860821-827b-4942-a005-546ad7db80c0" class="">
                  The most used and popular ones are relational databases, NoSQL
                  and the latest trend, NewSQL.
                </p>
                <h3 id="2f5ab612-b72a-421e-aae2-70e857d916ce" class="">
                  Relational
                </h3>
                <p id="e2f36e98-0c3e-44cf-a890-94bdedd56165" class="">
                  Relational databases are based on the concept of data having
                  relationships between them. they are represented in the format
                  of tables, and data can be retrieved using primary keys and/or
                  foreign keys.
                </p>
                <p id="fcd109ba-e996-40dc-ae05-52be741c1ff4" class="">
                  It&#x27;s usually a <em>normalized</em>* type of database, is 
                  <em>ACID</em>* compliant and good for <em>OLTP</em>*
                  operations.
                </p>
                <p id="340be8b7-1397-4fec-a2c2-e7b079239c10" class=""></p>
                <p id="eec4928d-2ff5-4d4c-8a0c-115d9dc5baba" class="">
                  One of the main limitations of RDBMS is 
                  <em>horizontal scaling</em>*; this can be addressed by
                  implementing a sharding mechanism. Some companies like 
                  <a href="https://player.fm/series/series-2468272/database-scaling-with-deepthi-sigireddi" target="_blank">
                    PlanetScale
                  </a>
                   are implementing such algorithms on top of MySQL.
                </p>
                <p id="5d190855-7a00-4952-8e6c-544fdfa40b7e" class="">
                  For traditional RDBMS (non-horizontally scalable), we get 
                  <em>CA</em> from the <em>CAP theorem</em>*.
                </p>
                <p id="29510b57-ac61-4ed5-bb2b-e817b4a2a9d0" class="">
                  <em>
                    <strong>Examples</strong>
                  </em>
                </p>
                <p id="ee21442f-ec7e-4f5d-99c7-5fe5dd6d66cb" class="">
                  Uber uses a 
                  <a href="https://eng.uber.com/schemaless-part-two/" target="_blank">
                    tweaked version
                  </a>
                   of RDBMS MySQL.
                </p>
                <p id="e6d5b58f-cbce-4011-9162-05edc1a4ddaa" class="">
                  Netflix uses RDBMS PostgreSQL.
                </p>
                <h3 id="c29fb6c2-2ff5-48a2-9954-a2a46eee0d39" class="">
                  NoSQL
                </h3>
                <p id="6d82c637-aae0-4e98-ab69-62be41f4bc20" class="">
                  NoSQL databases (not only SQL, as some NoSQL databases support
                  SQL) are non-relational databases. The data can be stored in
                  the format of documents without any links between them, or the
                  format of key-value.
                </p>
                <p id="1b0934d2-c656-4862-93fd-508dfa9d1377" class="">
                  it&#x27;s usually a <em>denormalized</em>* database type, 
                  <em>BASE</em>* compliant and good for <em>OLAP</em>*
                  operations.
                </p>
                <p id="d8678389-3c25-4d3e-ba35-82aa2dec5851" class=""></p>
                <p id="94ea8ec1-c549-4cb6-846d-bb9ac19de941" class="">
                  One of the main limitations is the fact that it&#x27;s not 
                  <em>ACID</em>* compliant, we can&#x27;t rely on it when the
                  accuracy of the data is critical (e.g. financial
                  transactions).
                </p>
                <p id="3540c3c7-5c04-412c-9313-a16b653217b0" class="">
                  For NoSQL databases, we get <em>AP</em> from the 
                  <em>CAP theorem</em>*.
                </p>
                <p id="5cbbb633-9852-4dc5-a5a3-ee100469032a" class="">
                  <em>
                    <strong>Examples</strong>
                  </em>
                </p>
                <p id="bedec61a-e72e-44ce-8d0d-fe7e32aaab48" class="">
                  Google Analytics uses the NoSQL DBMS BigTable.
                </p>
                <p id="c6493a31-4fd6-44b1-b7cc-260808b32bec" class="">
                  Monzo uses the NoSQL Cassandra.
                </p>
                <h3 id="16209be7-6cec-46e8-b312-9e01aa16bae6" class="">
                  NewSQL
                </h3>
                <p id="8359862c-d28d-49ad-8293-13cdc305b1b5" class="">
                  NewSQL is a new type of data model that made its entry around
                  2011. it promises the best of two worlds; the scalability of
                  NoSQL systems coupled with the <em>ACID</em>* compliance of
                  RDBMS.
                </p>
                <p id="8a44ea70-7a1d-4566-b840-533ac16628b5" class="">
                  This new type of DBMS can replace an RDBMS with sharding
                  functionality.
                </p>
                <p id="bee38106-6ebc-42a3-83ab-eedff17e1a17" class="">
                  For the NewSQL database, we still get C<em>P</em> from the 
                  <em>CAP theorem</em>*.
                </p>
                <p id="6141743c-14a4-48e1-8d5e-d761943d5803" class="">
                  <em>
                    <strong>Examples</strong>
                  </em>
                </p>
                <p id="e5a39e4b-44d3-45bb-8cd5-ee364b37d34f" class="">
                  Financial times use the NewSQL DBMS VoltDB.
                </p>
                <p id="41e4b05e-ddac-483a-8666-7be4a6f05b38" class="">
                  Samsung uses the NewSQL DBMS MemSQL.
                </p>
                <p id="677cda85-b6c5-40e7-9155-5c309c89e5f2" class=""></p>
                <ul id="c8ad4f80-cb8b-4983-80d5-20805baf9039" class="toggle">
                  {/* <li> */}
                    <details open="">
                      <summary>DBMS glossary</summary>
                      <ul
                        id="dcb767c7-c796-4dfe-b36c-97308a980788"
                        class="bulleted-list"
                      >
                        <li>
                          <em>ACID</em>: Stands for
                          Atomicity-Consistency-Isolation-Durability.
                          <p id="501175bd-4346-4a1b-8cbc-c201da51c5ec" class="">
                            <strong>Atomicity</strong> principle states that the
                            set of transactions can all pass and change the
                            state of the DB or all fail.
                          </p>
                          <p id="9d844056-d88a-4453-89c0-f5021a4583a7" class="">
                            <strong>Consistency</strong> principle states a
                            transaction will be rolled back if the rules of
                            writing are not respected.
                          </p>
                          <p id="e6cadaf0-7531-4127-98c6-5a4c20813d2b" class="">
                            <strong>Isolation</strong> states that multiple
                            transactions shouldn&#x27;t be running at the same
                            time. If transaction A is running, the database is
                            locked until it&#x27;s committed, then transaction B
                            can be executed.
                          </p>
                          <p id="81895f83-f733-4fc6-b4f6-f6e1694da717" class="">
                            <strong>Durability</strong> states that in case of
                            failure during the execution of a transaction, the
                            database should return to its initial state.
                          </p>
                        </li>
                      </ul>
                      <ul
                        id="e29c1c8d-83e5-4bec-b56c-00e363ba8c68"
                        class="bulleted-list"
                      >
                        <li>
                          <em>BASE</em>: Stands for Basic-Availability-Soft
                          state-Eventual consistency.
                          <p id="22ed7eaa-6de2-4835-8338-388478fbe599" class="">
                            <strong>Basic Availability</strong> states that the
                            databases appear to be available most of the time.
                          </p>
                          <p id="836405b9-5151-4274-8c31-0d49458c5d24" class="">
                            <strong>Soft state</strong> states that the state of
                            the database might change even without input, this
                            is because of eventual consistency.
                          </p>
                          <p id="7d338196-f546-4b4a-bed7-b97ddf0a7609" class="">
                            <strong>Eventual consistency</strong> states that
                            the system will become consistent after a given
                            period, if not given any input.
                          </p>
                        </li>
                      </ul>
                      <ul
                        id="8eb96812-7ded-448e-afb2-3417129f1971"
                        class="bulleted-list"
                      >
                        <li>
                          <em>CAP theorem</em>: it states that a distributed
                          database system can only have two of these properties;
                          Consistency, Availability or Partition Tolerance.
                          <p id="eb49ca08-28a4-4841-8b8a-4888dca3ce98" class="">
                            <strong>Consistency</strong> states that a certain
                            field in the database should have the same value for
                            the same data across all nodes.
                          </p>
                          <p id="8f6072ac-8274-4108-84eb-a9f1e2bf5812" class="">
                            <strong>Availability</strong> states that the
                            database should be accessible for all users at all
                            times.
                          </p>
                          <p id="a8f4dd23-5e11-454d-a9d0-5b0e7703da99" class="">
                            <strong>Partition Tolerance</strong> states that the
                            system should still be up even if one of the nodes
                            goes down.
                          </p>
                        </li>
                      </ul>
                      <ul
                        id="ba2df72b-7fbb-4c8c-b1a8-6e9d4a171f68"
                        class="bulleted-list"
                      >
                        <li>
                          <em>Denormalised database</em>: A database containing
                          redundant data, especially applicable NoSQL databases.
                          This is used to improve the performance of
                          read-operations by avoiding joins.
                        </li>
                      </ul>
                      <ul
                        id="53c82180-620b-4301-9451-74a48ed1ec0e"
                        class="bulleted-list"
                      >
                        <li>
                          <em>ETL</em>: Stands for Extract-Transform-Load. It
                          usually means extracting data from an operational
                          database and injecting it into a data warehouse. It
                          can be later be used for analytical purposes.
                        </li>
                      </ul>
                      <ul
                        id="cb7f0383-405d-420d-b7b7-e73e4034cd4d"
                        class="bulleted-list"
                      >
                        <li>
                          <em>Foreign key</em>: a subset of fields that contains
                          the primary key in another table, in relational
                          databases.
                        </li>
                      </ul>
                      <ul
                        id="1de581f9-549c-4cda-9970-8097ee09a5c3"
                        class="bulleted-list"
                      >
                        <li>
                          <em>Horizontal scaling</em>: Distributing storage
                          between multiple machines.
                        </li>
                      </ul>
                      <ul
                        id="c175ed41-5bcf-4e1d-ad12-7a0ec277eeba"
                        class="bulleted-list"
                      >
                        <li>
                          <em>HTAP</em>: Stands for Hybrid
                          Transaction/Analytical Processing. A system is HTAP
                          when it both reads and writes heavily to the database.
                        </li>
                      </ul>
                      <ul
                        id="267b3467-1cb4-4c0d-84d7-f2f2c66bc5e9"
                        class="bulleted-list"
                      >
                        <li>
                          <em>Index</em>: Used to find a single unit of data
                          given its identifier, it holds its address.
                        </li>
                      </ul>
                      <ul
                        id="d14b999e-681f-46fe-80c4-f7ce68b6535c"
                        class="bulleted-list"
                      >
                        <li>
                          <em>Instance</em>: An instance is a schema with data.
                        </li>
                      </ul>
                      <ul
                        id="334795eb-8e2c-46fe-b0df-4333456d6f8c"
                        class="bulleted-list"
                      >
                        <li>
                          <em>Logical view</em>: How data is presented to users.
                        </li>
                      </ul>
                      <ul
                        id="acc897fd-adc1-4697-83b6-b75fd643ef96"
                        class="bulleted-list"
                      >
                        <li>
                          <em>Normalized database</em>: A relational database
                          containing no data redundancies. This can be done by
                          exploiting the relational property.
                        </li>
                      </ul>
                      <ul
                        id="4ca02444-08e2-4529-b979-7d7d12289648"
                        class="bulleted-list"
                      >
                        <li>
                          <em>OLAP</em>: Stands for On-Line Analytical
                          Processing. A system is OLAP when it mainly reads from
                          the database. It is usually used for analytical
                          purposes.
                        </li>
                      </ul>
                      <ul
                        id="b61428af-8e1c-411a-9fcf-991881985f03"
                        class="bulleted-list"
                      >
                        <li>
                          <em>OLTP</em>: Stands for On-Line Transaction
                          Processing. a system is OLTP when it mainly writes to
                          the database.
                        </li>
                      </ul>
                      <ul
                        id="d5745d8d-db74-4e36-9aa1-682136b18521"
                        class="bulleted-list"
                      >
                        <li>
                          <em>Physical view</em>: How data is stored in memory
                          or secondary storage.
                        </li>
                      </ul>
                      <ul
                        id="ef82131a-e98c-4330-a6a7-e695e11ed46f"
                        class="bulleted-list"
                      >
                        <li>
                          <em>Primary key</em>: a subset of fields that uniquely
                          defines a record in a relational database.
                        </li>
                      </ul>
                      <ul
                        id="fd05cb41-d43e-48db-ab0a-241b17d402df"
                        class="bulleted-list"
                      >
                        <li>
                          <em>Schema</em>: Defines the database model.
                        </li>
                      </ul>
                      <ul
                        id="595c4c82-f1d9-440c-b66e-cdf37d3874f3"
                        class="bulleted-list"
                      >
                        <li>
                          <em>Secondary index</em>: Used to find a single unit
                          of data given a combination of criteria.
                        </li>
                      </ul>
                      <ul
                        id="f24b67e0-4853-46b1-ae79-7d5b70ef3a60"
                        class="bulleted-list"
                      >
                        <li>
                          <em>Vertical scaling</em>: Increasing the storage
                          memory in a single machine.
                        </li>
                      </ul>
                    </details>
                  {/* </li> */}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Article
