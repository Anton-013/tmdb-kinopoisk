import { useGetMoviesQuery } from "../../../api/moviesApi"
import type { TypeCategory } from "../../../api/moviesApi.types"

type Props = {
    title: string
    category: TypeCategory
}

export const MovieSection = ({ title, category }: Props) => {
    const { data } = useGetMoviesQuery({ category })

    const movies = data?.results?.slice(0, 6)

    return (
        <section>
            <h2>{title}</h2>
            {movies?.map((el: any) => <div key={el.id}>{el.title}</div>)}
            <button>View More</button>
        </section>
    )
}