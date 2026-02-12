import * as SC from "./styles";

const mapVariantToTag = {
    title: 'h1',
    subtitle: 'h2',
    caption: 'span',
};

export const Typo = ({ variant = 'body', children, ...props }) => {
    const tag = mapVariantToTag[variant] || 'p';

    return (
        <SC.Typo as={tag} data-variant={variant} {...props}>{children}</SC.Typo>
    )
};