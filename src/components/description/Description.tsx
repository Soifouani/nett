import {FC, ReactElement} from "react";

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
        </section>
    );
};

export default Description;