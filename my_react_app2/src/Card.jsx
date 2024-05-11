import Profile from './assets/react.svg'
function Card() {
    return(
        <div className="card">
            <img className="image"src={Profile} alt="" />
            <h2 className='title'>Ramachandra</h2>
            <p className='text'>I am a developer</p>
        </div>
    )
}
export default Card