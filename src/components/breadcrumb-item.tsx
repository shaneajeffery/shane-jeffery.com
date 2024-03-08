import { capitalizeText } from '../lib/capitalize-text';

const BreadcrumbItem = ({ children, href, isCurrent, ...props }) => {
    return (
        <li {...props}>
            <a className="link" href={href}>
                {capitalizeText(children)}
            </a>
        </li>
    );
};

export default BreadcrumbItem;
