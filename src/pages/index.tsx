import Layout from '../components/common/Layout/Layout'
import { Banner } from '../components/Home/Banner'
import { CommentCarousel } from '../components/Home/CommentCarousel'
import { HeroSection } from '../components/Home/HeroSection'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <Layout title="Sou Cesta Solidária">
      <div className={styles.homeContainer}>
        <Banner />
        <HeroSection />
        <CommentCarousel />
      </div>
    </Layout>
  )
}
