// app/api/now-playing/route.ts
export async function GET() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`
    );
    const data = await res.json();
    return Response.json(data);
  }
  