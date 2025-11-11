import '../css/global.css';

/* *
 * movie: {
 * poster_path,
 * title,
 * vote_average (0 a 10) 
 * }
 */

export default function MovieCard({ movie, onclick }) {

  return (
      
      <div className='card'>
        {/* <h1>oi</h1> */}
        <img src="" alt="pôster" />
        <div className='card-footer'>
            <p>Nome do filme</p>
            <p>nota</p>
        </div>
      </div>
    )
}