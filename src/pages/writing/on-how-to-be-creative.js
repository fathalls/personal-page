import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Navigation from "../../components/navigation"
import ReactGA from "react-ga"

function initializeReactGA() {
  ReactGA.initialize("UA-144983266-1")
  ReactGA.pageview("/on-how-to-be-creative")
}
class Article extends React.Component {
  render() {
    initializeReactGA()
    return (
      <Layout>
        <SEO title="Random Zen Habits article" />
        <div className="row">
          <Navigation />
          <div className="content-column">
            <article
              id="88ffba65-ecb1-4d87-8a0b-552c4a1ff941"
              class="page sans"
            >
              <header>
                <h1 class="page-title">On how to be creative</h1>
              </header>
              <div class="page-body">
                <h3 id="4f25c233-2753-44d0-aa9f-87d577528305" class="">
                  Creativity, quésaco*?
                </h3>
                <p id="b1e4d335-d3f4-4245-9965-5c3fa7eb14d0" class="">
                  Creativity might seem like it&#x27;s for an elite.
                </p>
                <p id="9689863b-ce06-426d-a202-436b330b534d" class="">
                  The ones who were born with it.
                </p>
                <p id="98aed6d4-8a72-4b7f-803f-df50ffef32dc" class="">
                  Creativity has a romantic flavour to it; this sudden
                  inspiration falling from the sky like Newton&#x27;s apple or
                  Archimedes&#x27;s Eureka. However, what these stories are
                  omitting, is the amount of work and discipline that had to be
                  put to come up with such discoveries.
                </p>
                <p id="8898356e-5e7d-401d-8709-ef9ced747f77" class=""></p>
                <p id="4f9b4291-bbf5-43ba-baa8-b5b254d44490" class="">
                  Let&#x27;s go back to the definition of creativity: it&#x27;s
                  the ability to produce original and unusual ideas, or to make
                  something new or imaginative (Cf.{" "}
                  <a href="https://dictionary.cambridge.org/dictionary/english/creativity" target="_blank">
                    Cambridge dictionary
                  </a>
                  ). Such ideas can be the result of associating old ones,
                  tweaking them and coming up with something new.
                </p>
                <p id="4ec08227-273f-4f57-98e9-68baf2783e3f" class=""></p>
                <p id="8d817d94-c3c8-4db4-a9f9-f0e3c499036d" class="">
                  Creativity can be obtained and nurtured by methodical
                  discipline; writing a technical article is a creative task,
                  coming up with system design for a side project is a creative
                  task, even debugging is a creative task!
                </p>
                <p id="8d229e0e-4e1c-464c-9f10-4f60043f1c4d" class=""></p>
                <h3 id="e37eb7de-95de-4f77-94c7-6ec1e1f1d038" class="">
                  Creative methodology
                </h3>
                <p id="e0d43f76-0bf1-4ed4-a3ed-468503d6ff3e" class="">
                  My methodology for creativity boils down to these steps
                  (inspired by{" "}
                  <a href="https://www.rasch.org/rmt/rmt72h.htm" target="_blank">
                    Descartes scientific method
                  </a>
                  ):
                </p>
                <ol
                  id="eb1af5e5-28cc-4c83-95e7-0e756e5b7cd8"
                  class="numbered-list"
                  start="1"
                >
                  <li>
                    <strong>Research &amp; brainstorming</strong>: Gather as
                    much raw information about the topic as possible. No
                    analysis needed at this stage.
                  </li>
                </ol>
                <ol
                  id="8c996fc0-6550-4d78-86f9-a1976aaf0999"
                  class="numbered-list"
                  start="2"
                >
                  <li>
                    <strong>Analyzing</strong>: Review the collected notes from
                    the first step and analyze them, break down problems and
                    deep dive into interesting concepts.
                  </li>
                </ol>
                <ol
                  id="7573e7ca-0c42-42f1-a321-286b6104f9f8"
                  class="numbered-list"
                  start="3"
                >
                  <li>
                    <strong>Recomposition</strong>: Re-assemble the data from
                    step 1 and 2, make connections, come up with associations.
                  </li>
                </ol>
                <ol
                  id="f8e2a324-6438-4040-a4c4-2494e8c0d0f2"
                  class="numbered-list"
                  start="4"
                >
                  <li>
                    <strong>Testing and verification:</strong> Run tests on the
                    final product, this could send you back to the first step by
                    realising that you missed something in the process, or
                    simply let go of the idea because it doesn&#x27;t work,
                    it&#x27;s not innovative enough, or it&#x27;s not useful.
                    and think about something else.
                  </li>
                </ol>
                <p id="da9278c0-5083-468d-8014-fbbc63a68abd" class=""></p>
                <h3 id="032eaa6b-458c-4f68-9318-b56d75fad090" class="">
                  Writing a technical article as a creativity example
                </h3>
                <p id="36198918-7a24-46cd-9abf-31b8b566edf3" class="">
                  Let&#x27;s take the example of writing a technical article.
                  This is a process that I go through often:
                </p>
                <ol
                  id="7b5c8b8a-b9bd-461d-9890-773350a583b1"
                  class="numbered-list"
                  start="1"
                >
                  <li>
                    <strong>Research &amp; brainstorming</strong>: I start by
                    reading parts of indispensable books on the topic, listen to
                    podcasts, read related articles. This phase is designed to
                    get as much info as possible, without necessarily analyzing
                    them.
                  </li>
                </ol>
                <ol
                  id="8b96b65b-a75f-4dc4-9495-373827709b41"
                  class="numbered-list"
                  start="2"
                >
                  <li>
                    <strong>Analyzing</strong>: Once I have done enough
                    research, I analyze the notes I have taken in the first
                    step, I break down the bits I am interested in pursuing and
                    expanding. I might need to fill in some knowledge gap by
                    doing more research.
                  </li>
                </ol>
                <ol
                  id="4789e4ba-68d3-43ad-8e1d-07b35ed39be7"
                  class="numbered-list"
                  start="3"
                >
                  <li>
                    <strong>Recomposition</strong>: Once step 2 is done, I start
                    thinking of ways to structure everything I learned and
                    wording it simply.
                  </li>
                </ol>
                <ol
                  id="ae7422b3-74d9-4b2c-a422-d863a34a6d39"
                  class="numbered-list"
                  start="4"
                >
                  <li>
                    <strong>Testing and verification</strong>: After taking a
                    break from the task in hand, I proof-read it, ask friends to
                    proof-read it. and finally, share it online to get feedback.
                  </li>
                </ol>
                <p id="ac1a16a8-2e6f-41f8-9220-55be1be42089" class=""></p>
                <p id="b645ffe7-6633-4244-af8e-e393a142847a" class="">
                  Hope this helps with channeling your creative energy. I would
                  love to hear from you, what is your creative process? You can
                  reach out to me via{" "}
                  <a href="https://twitter.com/salwa_fathallah" target="_blank">
                    Twitter.
                  </a>
                </p>
                <p id="b4c67889-87a0-42d0-a123-ab447b0f935a" class=""></p>
                <p id="180ad3b8-f156-414f-a0e0-0eb6c5062f40" class=""></p>
                <p id="12cb40fa-3a7d-42c0-b8a6-43b68d62702c" class="">
                  *French for WTH is it.
                </p>
                <p id="0b4e63ba-5de6-4c1d-8da4-69f34835519a" class=""></p>
                <p id="b5d3932c-b4a4-4b40-b6dd-8ee21955dd7a" class=""></p>
                <p id="b81b3096-8406-43ca-8e51-6a6024a0a030" class=""></p>
                <p id="7c73eedb-156c-435e-b13e-44836132bf3d" class=""></p>
              </div>
            </article>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Article
