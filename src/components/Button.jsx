import '../scss/components/Button.scss';

const Button = ({ className, children, type, ...rest }) => {
    if (type === 'anchor') {
        return <a 
            href={rest.href} 
            className={className}
            {...rest}
            >{children}</a>
    } else {
        return <button type={type} {...rest} className={className} >{children}</button>
    }
}

export default Button;