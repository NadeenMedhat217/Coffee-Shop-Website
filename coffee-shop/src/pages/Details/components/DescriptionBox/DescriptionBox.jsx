import React, {useState} from "react";
import styles from "../DescriptionBox/DescriptionBox.module.css"

const DescriptionBox = ({textDiscription}) => {
    const[isReadMore,setReadMore] = useState(true);

    const toggleReadMore = () => {
        setReadMore(!isReadMore);
    };
    return(
        <div className= {styles.Container}>
            <h3>Description</h3>
            <span className= {styles.Text}>
                {isReadMore ? `${textDiscription.slice(0,50)}...` : textDiscription}
                <p onClick={toggleReadMore} className= {styles.ReadMore}>
                    {isReadMore ? "  Read More" : "  Show Less"}
                </p>
            </span>
        </div>
    );
};

export default DescriptionBox