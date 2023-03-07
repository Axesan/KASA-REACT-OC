import { React} from 'react';

function Banner  (props)  {
    return (
        <div className={props.classPicture}>
            <h1>{props.title}</h1>
        </div>
    );
};

export default Banner;