// src/pages/anime.js
import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import '../styles/anime.css'

const categories = [
  { key: 'school', name: 'School' },
  { key: 'shoujo', name: 'Shoujo' },
  { key: 'band', name: 'Band' },
  { key: 'comedy', name: 'Comedy' },
  { key: 'sports', name: 'Sports' },
  { key: 'isekai', name: 'Isekai' },
  { key: 'yuri', name: 'Yuri' },
  { key: 'bl', name: 'Yaoi' }
]

const sampleAnimeData = {
  school: [
    {
      title: 'K-On!',
      description: 'A fun and heartwarming story about high school girls forming a band.',
      youtubeId: 'tHe_FJq6bHA'
    },
    {
      title: 'Clannad',
      description: 'An emotional rollercoaster focusing on friendship and family.',
      youtubeId: 'DuvjNFAV2n8'
    }
  ],
  shoujo: [
    {
      title: 'Fruits Basket',
      description: 'A touching story about acceptance and love.',
      youtubeId: '3nmoPqN1n1E'
    },
    {
      title: 'Ouran High School Host Club',
      description: 'Romantic comedy full of charming characters.',
      youtubeId: 'K2uEPO9FcSg'
    }
  ]
}

export default function AnimePage() {
  const [selectedCategory, setSelectedCategory] = useState('school')
  const [currentIndex, setCurrentIndex] = useState(0)

  const animeList = sampleAnimeData[selectedCategory] || []
  const currentAnime = animeList[currentIndex] || {}

  useEffect(() => {
    setCurrentIndex(0)
  }, [selectedCategory])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + animeList.length) % animeList.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % animeList.length)
  }

  const handleRefresh = () => {
    if (animeList.length > 0) {
      setCurrentIndex(Math.floor(Math.random() * animeList.length))
    }
  }

  return (
    <Layout pageTitle="My Favourite Anime">
      <div className="anime-page">
        {/* Sidebar */}
        <div className="sidebar">
          {categories.map(cat => (
            <div
              key={cat.key}
              className={`category-link ${selectedCategory === cat.key ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.key)}
            >
              {cat.name}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="main-content">
          <p className="counter">{`${currentIndex + 1} / ${animeList.length}`}</p>
          <h2 className="anime-title">{currentAnime.title}</h2>
          <p className="anime-description">{currentAnime.description}</p>
          {currentAnime.youtubeId && (
            <div className="video-container">
              <iframe
                src={`https://www.youtube.com/embed/${currentAnime.youtubeId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <div className="button-group">
            <button onClick={handlePrev}>{'<'} Previous</button>
            <button onClick={handleRefresh}>Refresh</button>
            <button onClick={handleNext}>Next {'>'}</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}