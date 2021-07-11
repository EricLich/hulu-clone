import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

export async function getServerSideProps(context){
  const genre = context.query.genre;
  const req = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
                        .then(res => res.json())
                        .catch(err => console.log(err))
  return{
    props:{
      results: req.results
    }
  }
}

export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <meta name="keywords" content="react, clone, hulu, video, next.js, web, js, javascript" />
      </Head>
      {/* Header */}
      <Header/>
      {/* Nav */}
      <Nav/>
      {/* Results */}
      <Results results={results}/>
    </div>
  )
}
