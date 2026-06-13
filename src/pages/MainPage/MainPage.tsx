import { MovieSection } from "./MovieSection/MovieSection"
import { Welcome } from "./Welcome/Welcome"


export const MainPage = () => {
    return (
        <main style={{ paddingTop: '64px' }}>
            <Welcome />
            <MovieSection title='Popular Movies' category='popular' />
            <MovieSection title='Top Rated Movies' category='top_rated' />
            <MovieSection title='Upcoming Movies' category='upcoming' />
            <MovieSection title='Now Playing Movies' category='now_playing' />
        </main>
    )
}