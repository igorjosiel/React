const RepositoryItem = (props) => {
    return (
        <li>
            <strong>{props.repository.name ?? 'Default'}</strong>
            <strong>{props.repository.description}</strong>

            <a href={props.link}>Acessar repositório</a>
        </li>
    )
}

export default RepositoryItem;