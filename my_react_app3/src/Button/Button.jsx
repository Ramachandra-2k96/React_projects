import styles from './button.module.css'
function Button()
{
    var style={
            backgroundColor: "aqua",
            color: "black",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
    }
    return(
        <div className="buttons">
            <button className={styles.button}>Click here</button>
            <button className={style}>Click</button>
        </div>
    )
}
export default Button