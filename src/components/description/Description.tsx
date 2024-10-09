import {FC, ReactElement} from "react";

import cheerfulHappyIcon from "../../assets/icons/cheerful_happy_icon.svg"

import "./description.css";

interface DescriptionProps {
    descriptionTitle: string
    descriptionText: string;
}

const Description: FC<DescriptionProps> = ({descriptionTitle, descriptionText}): ReactElement => {
    return (
        <section className="description">
            <h1>{ descriptionTitle }</h1>
            <p>{ descriptionText }</p>
            <span className={"cheerful-happy-icon"}><img src={cheerfulHappyIcon}/></span>
        </section>
    );
};

export default Description;