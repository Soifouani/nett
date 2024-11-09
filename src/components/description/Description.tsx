import {FC, ReactElement} from "react";
import {getDescriptoion} from "../../utils/CommonFonctions";

import "./description.css";

interface DescriptionProps {
    selectedMenuTitle: string
}

const Description: FC<DescriptionProps> = ({ selectedMenuTitle }): ReactElement => {

    return (
        <section className="description">
            {getDescriptoion(selectedMenuTitle)}
        </section>
    );
};

export default Description;